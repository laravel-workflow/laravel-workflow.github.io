---
sidebar_position: 7
---

# Testing

## Workflows

Using the `sync` driver for testing, you can execute workflows synchronously in your test environment and mock activities to define expected behaviors and outputs without running the actual implementations.

```
use Workflow\ActivityStub;
use Workflow\Workflow;

class MyWorkflow extends Workflow
{
    public function execute()
    {
        $result = yield ActivityStub::make(MyActivity::class);

        return $result;
    }
}
```

The above workflow can be tested by first calling `WorkflowStub::fake()` and then mocking the activity.

```
public function testWorkflow(): void
{
    WorkflowStub::fake();

    WorkflowStub::mock(MyActivity::class, 'result');

    $workflow = WorkflowStub::make(MyWorkflow::class);
    $workflow->start();

    $this->assertSame($workflow->output(), 'result');
}
```

You can also provide a callback instead of a result value to ` WorkflowStub::mock()`.

```
public function testWorkflow(): void
{
    WorkflowStub::fake();

    WorkflowStub::mock(MyActivity::class, function ($context) {
        return 'result';
    });

    $workflow = WorkflowStub::make(MyWorkflow::class);
    $workflow->start();

    $this->assertSame($workflow->output(), 'result');
}
```

The workflow `$context` along with any arguments for the current activity will also be passed to the callback.

## Skipping Time

By manipulating the system time with `$this->travel()` or `$this->travelTo()`, you can simulate time-dependent workflows. This strategy allows you to test timeouts, delays, and other time-sensitive logic within your workflows.

```
use Workflow\ActivityStub;
use Workflow\Workflow;
use Workflow\WorkflowStub;

class MyTimerWorkflow extends Workflow
{
    public function execute()
    {
        yield WorkflowStub::timer(60);

        $result = yield ActivityStub::make(MyActivity::class);

        return $result;
    }
}
```

The above workflow waits 60 seconds before executing the activity. Using `$this->travel()` and `$workflow->resume()` allows us to skip this waiting period.

```
public function testTimeTravelWorkflow(): void
{
    WorkflowStub::fake();

    WorkflowStub::mock(MyActivity::class, 'result');

    $workflow = WorkflowStub::make(MyTimerWorkflow::class);
    $workflow->start();

    $this->travel(120)->seconds();

    $workflow->resume();

    $this->assertSame($workflow->output(), 'result');
}
```

The helpers `$this->travel()` and `$this->travelTo()` methods use `Carbon:setTestNow()` under the hood.

## Activities

Testing activities is similar to testing Laravel jobs. You manually create the activity and then call the `handle()` method.

```
$workflow = WorkflowStub::make(MyWorkflow::class);

$activity = new MyActivity(0, now()->toDateTimeString(), StoredWorkflow::findOrFail($workflow->id()), []);

$result = $activity->handle();
```

Note that we call the handle method and not the `execute()` method.
