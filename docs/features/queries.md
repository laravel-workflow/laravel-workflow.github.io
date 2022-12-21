---
sidebar_position: 2
---

# Queries

Queries allow you to retrieve information about the current state of a workflow without affecting its execution. This is useful for monitoring and debugging purposes.

To define a query method on a workflow, use the `QueryMethod` annotation:

```php
use Workflow\QueryMethod;
use Workflow\Workflow;

class MyWorkflow extends Workflow
{
    private bool $ready = false;

    #[QueryMethod]
    public function getReady(): bool
    {
        return $this->ready;
    }
}
```

To query a workflow, call the method on the workflow instance. The query method will return the data from the workflow.

```php
use Workflow\WorkflowStub;

$workflow = WorkflowStub::make(MyWorkflow::class);

$state = $workflow->getState();
```

**Note:** Querying a workflow does not advance its execution, unlike signals.
