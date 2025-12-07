---
sidebar_position: 1
---

# Signals

Signals allow you to trigger events in a workflow from outside the workflow. This can be useful for reacting to external events, enabling *human-in-the-loop* interventions, or for signaling the completion of an external task.

To define a signal method on your workflow, use the `SignalMethod` annotation. The method will be called with any arguments provided when the signal is triggered:

```php
use Workflow\SignalMethod;
use Workflow\Workflow;

class MyWorkflow extends Workflow
{
    protected $ready = false;

    #[SignalMethod]
    public function setReady($ready)
    {
        $this->ready = $ready;
    }
}
```

To trigger a signal on a workflow, call the method on the workflow instance. The signal method accepts optional arguments that will also be passed to it.

```php
use Workflow\WorkflowStub;

$workflow = WorkflowStub::load($workflowId);

$workflow->setReady(true);
```

The `WorkflowStub::await()` method can be used in a workflow to pause execution until a specified condition is met. For example, to pause the workflow until a signal is received, the following code can be used:

```
use Workflow\Workflow;
use Workflow\WorkflowStub;

class MyWorkflow extends Workflow
{
    private bool $ready = false;

    public function execute()
    {
        yield WorkflowStub::await(fn () => $this->ready);
    }
}
```

**Note:** The `await()` method should only be used in a workflow, and not in an activity.
