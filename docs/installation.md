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

> ✨ SQS Support: `timer()` and `awaitWithTimeout()` work with any duration, even when using the SQS queue driver. Laravel Workflow automatically handles SQS's delay limitation transparently.

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
