---
slug: email-verifications
title: Email Verifications Using Laravel Workflow
authors:
  name: Richard
  title: Core Team
  url: https://github.com/rmcdaniel
  image_url: https://github.com/rmcdaniel.png
tags: [emails, verification, signed-urls]
---

A typical registration process goes as follows:

1.  User fills out registration form and submits it
2.  Laravel creates user in database with null `email_verified_at`
3.  Laravel sends email with a code, or a link back to our website
4.  User enters code, or clicks link
5.  Laravel sets `email_verified_at` to the current time

What’s wrong with this? Nothing. But like all things, as soon as real world complexity creeps in, this pattern could become painful. What if you wanted to send an email after the code or link expires? And do you really need a user in your database if they never verify their email address?

Let’s take this trivial example and replace it with a workflow. This is based on the [Laravel Workflow](https://github.com/laravel-workflow/laravel-workflow) library.

Get Started
===========

Create a standard Laravel application and create the following files. First, the API routes.

The `register` route creates a new `VerifyEmailWorkflow` , passes in the email and password, and then starts the workflow. Notice that we hash the password before giving it to the workflow. This prevents the plain text from being stored in the workflow logs.

The `verify-email` route receives a workflow id, loads it and then calls the `verify()` signal method.

Now let’s take a look at the actual workflow.

Take notice of the `yield` keywords. Because PHP (and most other languages) cannot save their execution state, coroutines rather than normal functions are used inside of workflows (but not activities). A coroutine will be called multiple times in order to execute to completion.

Even though this workflow will execute to completion effectively once, it will still be partially executed four different times. The results of activities are cached so that only failed activities will be called again. Successful activities get skipped.

But notice that any code we write between these calls will be called multiple times. That’s why your code needs to be **deterministic** inside of workflow methods! If your code has four executions, each at different times, they must still all behave the same. There are no such limitations within activity methods.

Step By Step
============

The first time the workflow executes, it will reach the call to `SendEmailVerificationEmailActivity` , start that activity, and then exit. Workflows suspend execution while an activity is running. After the `SendEmailVerificationEmailActivity` finishes, it will resume execution of the workflow. This brings us to…

The second time the workflow is executed, it will reach the call to `SendEmailVerificationEmailActivity` and skip it because it will already have the result of that activity. Then it will reach the call to `WorkflowStub::await()` which allows the workflow to wait for an external signal. In this case, it will come from the user clicking on the verification link they receive in their email. Once the workflow is signaled then it will execute for…

The third time, both the calls to `SendEmailVerificationEmailActivity` and `WorkflowStub::await()` are skipped. This means that the `VerifyEmailActivity` will be started. After the final activity has executed we still have…

The final time the workflow is called, there is nothing left to do so the workflow completes.

Now let’s take a look at the activities.

The first activity just sends the user an email.

The email contains a temporary signed URL that includes the workflow ID.

The user gets the URL in a clickable link.

This link takes the user to the `verify-email` route from our API routes, which will then start the final activity.

We have created the user and verified their email address at the same time. Neat!

Wrapping Up
===========

If we take a look at the output of `php artisan queue:work` we can better see how the workflow and individual activities are interleaved.

We can see the four different executions of the workflow, the individual activities and the signal we sent.

The [Laravel Workflow](https://github.com/laravel-workflow/laravel-workflow) library is heavily inspired by [Temporal](https://temporal.io/) but powered by [Laravel Queues](https://laravel.com/docs/9.x/queues).

Thanks for reading!
