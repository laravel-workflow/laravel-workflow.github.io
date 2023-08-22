---
sidebar_position: 6
---

# Side Effects

A side effect is a closure containing non-deterministic code. The closure is only executed once and the result is saved. It will not execute again if the workflow is retried. Instead, it will return the saved result.

```php
use Workflow\Workflow;
use Workflow\WorkflowStub;

class MyWorkflow extends Workflow
{
    public function execute()
    {
        $seconds = yield WorkflowStub::sideEffect(fn () => random_int(60, 120));

        yield WorkflowStub::timer($seconds);
    }
}
```

The workflow will only call `random_int()` once and save the result, even if the workflow later fails and is retried.

**Important:** The code inside a side effect should never fail because it will not be retried. Code that can possibly fail and therefore need to be retried should be moved to an activity instead.
