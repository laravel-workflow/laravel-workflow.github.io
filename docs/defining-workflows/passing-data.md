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
        $result = yield ActivityStub::make(MyActivity::class, $name);
        return $result;
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

In general, you should only pass small amounts of data in this manner. Rather than passing large amounts of data, you should write the data to the cache or file system. Pass the key or file path to the workflow and activities. Then activties can use the cache or file system to read the data. Also, simple arrays are prefered over typed objects because they use less data and are easy to read when debugging.
