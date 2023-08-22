---
sidebar_position: 8
---

# Child Workflows

It's often necessary to break down complex processes into smaller, more manageable units. Child workflows provide a way to encapsulate a sub-process within a parent workflow. This allows you to create hierarchical and modular structures for your workflows, making them more organized and maintainable.

A child workflow is just like any other workflow. The only difference is how it's invoked within the parent workflow, using `ChildWorkflowStub::make()`.

```php
use Workflow\ChildWorkflowStub;
use Workflow\Workflow;

class ParentWorkflow extends Workflow
{
    public function execute()
    {
        $childResult = yield ChildWorkflowStub::make(ChildWorkflow::class);
    }
}
```
