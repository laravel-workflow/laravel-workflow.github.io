---
sidebar_position: 7
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

## Async Activities

Rather than creating a child workflow, you can pass a callback to `ActivityStub::async()` and it will be executed in the context of a separate workflow.

```php
use Workflow\ActivityStub;
use Workflow\Workflow;

class AsyncWorkflow extends Workflow
{
    public function execute()
    {
        [$result, $otherResult] = yield ActivityStub::async(function () {
            $result = yield ActivityStub::make(Activity::class);
            $otherResult = yield ActivityStub::make(OtherActivity::class, 'other');
            return [$result, $otherResult];
        });
    }
}
```
