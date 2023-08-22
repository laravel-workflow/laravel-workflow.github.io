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
