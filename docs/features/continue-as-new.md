---
sidebar_position: 12
---

# Continue As New

Laravel Workflow supports the **Continue As New** pattern, allowing a running workflow to restart itself with new arguments.
This is useful when you need to:

* Prevent unbounded workflow history growth.
* Model iterative loops or recursive workflows.
* Split long-running workflows into smaller, manageable executions while preserving continuity.

## Using `continueAsNew`

To restart a workflow as new, call the static method `WorkflowStub::continueAsNew(...)` from within the workflow’s `execute()` method.

```php
use Workflow\ActivityStub;
use Workflow\Workflow;
use Workflow\WorkflowStub;

class CounterWorkflow extends Workflow
{
    public function execute(int $count = 0, int $max = 3)
    {
        $result = yield ActivityStub::make(CountActivity::class, $count);

        if ($count >= $max) {
            return 'workflow_' . $result;
        }

        return yield WorkflowStub::continueAsNew($count + 1, $max);
    }
}
```

In this example:

* The workflow executes an activity each iteration.
* If the maximum count has not been reached, it continues as new with incremented arguments.
* The final result is returned only when the loop completes.
