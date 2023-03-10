---
sidebar_position: 2
---

# Installation

## Requirements

Laravel Workflow requires the following to run:

- PHP 8 or later
- Laravel 9 or later

Laravel Workflow can be used with any queue driver that Laravel supports, including:

- Amazon SQS
- Beanstalkd
- Database
- Redis

Each queue driver has its own limitations and requirements. For example, the database queue driver requires a database connection and a `jobs` table, while the Beanstalkd queue driver requires a Beanstalkd server and a `default` tube.

Laravel Workflow also requires a cache driver that supports locks. This is used to prevent race conditions and concurrency issues.

> NOTE: The Amazon SQS queue driver in Laravel has a limitation of 15 minutes (900 seconds) for the maximum visibility timeout of a message. This means that if a workflow uses the `WorkflowStub::timer()` or `WorkflowStub::awaitWithTimeout()` method with a value greater than 900 seconds, it will not be able to hibernate for that long and the workflow will fail. This is a limitation of the SQS driver and not a limitation of Laravel Workflow itself. If you are using Laravel Workflow with the SQS driver then you should be aware of this limitation and avoid using values greater than 900 seconds. Alternatively, you can use a different queue driver that does not have this limitation, such as the Redis driver.

## Installing Laravel Workflow

Laravel Workflow is installable via Composer. To install it, run the following command in your Laravel project:

```bash
composer require laravel-workflow/laravel-workflow
```

After installing Laravel Workflow, you must also publish the migrations for the workflows table. This table is used to store and manage workflow data and state. To publish the migrations, run the following command:

```bash
php artisan vendor:publish --provider="Workflow\Providers\WorkflowServiceProvider" --tag="migrations"
```

Once the migrations are published, you can run the migrate command to create the workflows table in your database:

```bash
php artisan migrate
```

## Running Workers

Laravel Workflow uses Laravel's queued jobs to run workflows and activities in the background. You will need to either run the `queue:work` Artisan command or use Horizon to run your queue workers. This will process the queued workflows and activities and execute them in the background. Without a running queue worker, workflows and activities will not be executed.
