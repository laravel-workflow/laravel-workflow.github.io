---
sidebar_position: 4
---

# Signal + Timer

In some cases, you may want to wait for a signal or for a timer to expire, whichever comes first. This can be achieved by using `WorkflowStub::awaitWithTimeout($seconds, $callback)`.

```php
use Workflow\SignalMethod;
use Workflow\Workflow;
use Workflow\WorkflowStub;

class MyWorkflow extends Workflow
{
    private bool $ready = false;

    #[SignalMethod]
    public function setReady($ready)
    {
        $this->ready = $ready
    }

    public function execute()
    {
        // Wait for 5 minutes or $ready = true, whichever comes first
        yield WorkflowStub::awaitWithTimeout(300, fn () => $this->ready);
    }
}
```

The workflow will reach the call to `WorkflowStub::awaitWithTimeout()` and then hibernate until either some external code signals the workflow like this.

```php
$workflow->setReady();
```

Or, if the specified timeout is reached, the workflow will continue without the signal. The return value is `true` if the signal was received before the timeout, or `false` if the timeout was reached without receiving the signal.

**Important:** The `awaitWithTimeout()` method should only be used in a workflow, and not in an activity.
