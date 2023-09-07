---
sidebar_position: 6
---

# Passing Data

You can pass data into a workflow via the `start()` method.

```php
use Workflow\WorkflowStub;

$workflow = WorkflowStub::make(MyWorkflow::class);
$workflow->start('world');
while ($workflow->running());
$workflow->output();
=> 'Hello, world!'
```

It will be passed as arguments to the workflow's `execute()` method.

Similarly, you can pass data into an activity via the `ActivityStub::make()` method.

```php
use Workflow\ActivityStub;
use Workflow\Workflow;

class MyWorkflow extends Workflow
{
    public function execute($name)
    {
        return yield ActivityStub::make(MyActivity::class, $name);
    }
}
```

It will be passed as arguments to the activity's `execute()` method

```php
use Workflow\Activity;

class MyActivity extends Activity
{
    public function execute($name)
    {
        return "Hello, {$name}!";
    }
}
```

In general, you should only pass small amounts of data in this manner. Rather than passing large amounts of data, you should write the data to the database, cache or file system. Then pass the key or file path to the workflow and activities. The activties can then use the key or file path to read the data.

## Models

Passing in models works similarly to `SerializesModels`.

```php
use App\Models\User;
use Workflow\ActivityStub;
use Workflow\Workflow;

class MyWorkflow extends Workflow
{
    public function execute(User $user)
    {
        return yield ActivityStub::make(MyActivity::class, $user->name);
    }
}
```

When an Eloquent model is passed to a workflow or activity, only its `ModelIdentifier` is serialized. This reduces the size of the payload, ensuring that your workflows remain efficient and performant.

```
object(ModelIdentifier) {
    id: 42,
    class: "App\Models\User",
    relations: [],
    connection: "mysql"
}
```

When the workflow or activity runs, it will retrieve the complete model instance, including any loaded relationships, from the database. If you wish to prevent extra database calls during the execution of a workflow or activity, consider converting the model to an array before passing it.

## Dependency Injection

In addition to passing data, you are able to type-hint dependencies on the workflow or activity `execute()` methods. The Laravel service container will automatically inject those dependencies.

```php
use Illuminate\Contracts\Foundation\Application;
use Workflow\Workflow;

class MyWorkflow extends Workflow
{
    public function execute(Application $app)
    {
        if ($app->runningInConsole()) {
            // ...
        }
    }
}
```
