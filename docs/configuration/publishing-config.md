---
sidebar_position: 1
---

# Publishing Config

This will create a `workflows.php` configuration file in your `config` folder.

```bash
php artisan vendor:publish --provider="Workflow\Providers\WorkflowServiceProvider" --tag="config"
```

## Changing Workflows Folder

By default, the `make` commands will write to the `app/Workflows` folder.

```php
php artisan make:workflow MyWorkflow
php artisan make:activity MyActivity
```

This can be changed by updating the `workflows_folder` setting.

```php
'workflows_folder' => 'Workflows',
```

## Using Custom Models

In the `workflows.php` config file you can update the model classes to use your own.

```php
'stored_workflow_model' => App\Models\StoredWorkflow::class,

'stored_workflow_exception_model' => App\Models\StoredWorkflowException::class,

'stored_workflow_log_model' => App\Models\StoredWorkflowLog::class,

'stored_workflow_signal_model' => App\Models\StoredWorkflowSignal::class,

'stored_workflow_timer_model' => App\Models\StoredWorkflowTimer::class,
```

## Changing Base Model

By default, the workflow models extend `Illuminate\Database\Eloquent\Model` but some packages like https://github.com/mongodb/laravel-mongodb require you to extend their model, such as in this example, `MongoDB\Laravel\Eloquent\Model`.

This can be changed by updating the `base_model` setting.

```php
'base_model' => Illuminate\Database\Eloquent\Model::class,
```

It should now look like this.

```php
'base_model' => MongoDB\Laravel\Eloquent\Model::class,
```
