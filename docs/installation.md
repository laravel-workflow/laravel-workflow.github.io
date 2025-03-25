---
sidebar_position: 2
---

# Installation

## Requirements

Laravel Workflow requires the following to run:

- PHP 8.1 or later
- Laravel 9 or later

Laravel Workflow can be used with any queue driver that Laravel supports (except the `sync` driver), including:

- Amazon SQS
- Beanstalkd
- Database
- Redis

Each queue driver has its own [prerequisites](https://laravel.com/docs/12.x/queues#driver-prerequisites).

Laravel Workflow also requires a cache driver that supports [locks](https://laravel.com/docs/12.x/cache#atomic-locks).

> NOTE: The Amazon SQS queue driver in Laravel has a limitation of 15 minutes (900 seconds) for the maximum delay of a message. This means that if a workflow uses the `WorkflowStub::timer()` or `WorkflowStub::awaitWithTimeout()` method with a value greater than 900 seconds, it will not be able to hibernate for that long and the workflow will fail. This is a limitation of the SQS driver and not a limitation of Laravel Workflow itself. If you are using Laravel Workflow with the SQS driver then you should be aware of this limitation and avoid using values greater than 900 seconds. Alternatively, you can use a different queue driver that does not have this limitation, such as the Redis driver.

## Installing Laravel Workflow

Laravel Workflow is installable via Composer. To install it, run the following command in your Laravel project:

```bash
composer require laravel-workflow/laravel-workflow
```

After installing Laravel Workflow, you must also publish the migrations. To publish the migrations, run the following command:

```bash
php artisan vendor:publish --provider="Workflow\Providers\WorkflowServiceProvider" --tag="migrations"
```

Once the migrations are published, you can run the migrate command to create the workflow tables in your database:

```bash
php artisan migrate
```

## Running Workers

Laravel Workflow uses queues to run workflows and activities in the background. You will need to either run the `queue:work` [command](https://laravel.com/docs/12.x/queues#the-queue-work-command) or use [Horizon](https://laravel.com/docs/12.x/horizon) to run your queue workers. Without a queue worker, workflows and activities will not be processed. You cannot use the sync driver with queue workers.
