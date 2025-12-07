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
        $result = yield ChildWorkflowStub::make(ChildWorkflow::class);
    }
}
```

## Signaling Child Workflows

Parent workflows can signal their child workflows to coordinate behavior or pass data. To signal a child safely without corrupting the parent's execution context, use the `child()` or `children()` methods.

### Getting a Child Handle

The `child()` method returns a `ChildWorkflowHandle` for the most recently created child workflow:

```php
use Workflow\ChildWorkflowStub;
use Workflow\Workflow;

class ParentWorkflow extends Workflow
{
    public function execute()
    {
        $child = ChildWorkflowStub::make(ChildWorkflow::class);

        $childHandle = $this->child();

        $childHandle->process('approved');

        $result = yield $child;

        return $result;
    }
}
```

### Multiple Children

Use the `children()` method to get handles for all child workflows created by the parent:

```php
use Workflow\ChildWorkflowStub;
use Workflow\Workflow;

class ParentWorkflow extends Workflow
{
    public function execute()
    {
        $child1 = ChildWorkflowStub::make(ChildWorkflow::class, 'first');
        $child2 = ChildWorkflowStub::make(ChildWorkflow::class, 'second');
        $child3 = ChildWorkflowStub::make(ChildWorkflow::class, 'third');

        $childHandles = $this->children();

        foreach ($childHandles as $childHandle) {
            $childHandle->process('approved');
        }

        $results = yield ChildWorkflowStub::all([$child1, $child2, $child3]);

        return $results;
    }
}
```

The `children()` method returns children in reverse chronological order (most recently created first).

### Forwarding Signals to Children

You can forward external signals to child workflows by combining signal methods with child handles:

```php
use Workflow\ChildWorkflowStub;
use Workflow\SignalMethod;
use Workflow\Workflow;
use Workflow\WorkflowStub;

class ParentWorkflow extends Workflow
{
    private bool $processed = false;
    private ?string $status = null;

    #[SignalMethod]
    public function process(string $status): void
    {
        $this->processed = true;
        $this->status = $status;
    }

    public function execute()
    {
        $child = ChildWorkflowStub::make(ChildWorkflow::class);

        $childHandle = $this->child();

        yield WorkflowStub::await(fn () => $this->processed);

        $childHandle->process($this->status);

        $result = yield $child;

        return $result;
    }
}
```

**Important:** Always call `$this->child()` or `$this->children()` in the `execute()` method. Never call these methods in signal methods or query methods, as this violates determinism during workflow replay.

### Getting Child Workflow IDs

You can access the underlying stored workflow ID using the `id()` method. This allows you to store the ID for external systems to signal the child directly.

```php
use Workflow\ActivityStub;
use Workflow\ChildWorkflowStub;
use Workflow\Workflow;

class ParentWorkflow extends Workflow
{    
    public function execute()
    {
        $child = ChildWorkflowStub::make(ChildWorkflow::class);
        yield ActivityStub::make(StoreWorkflowIdActivity::class, $this->child()->id());
        yield $child;
    }
}
```

or

```php
use Workflow\ChildWorkflowStub;
use Workflow\QueryMethod;
use Workflow\Workflow;

class ParentWorkflow extends Workflow
{
    private ?int $childId = null;

    #[QueryMethod]
    public function childId(): ?int
    {
        return $this->childId;
    }

    public function execute()
    {
        $child = ChildWorkflowStub::make(ChildWorkflow::class);
        $childHandle = $this->child();
        yield WorkflowStub::await(fn () => !is_null($childHandle));
        $this->childId = $childHandle->id();
        yield $child;
    }
}
```

**Important:** When using query methods in the same workflow with child handles, you must first await for the child handle to be available in order to make it replay safe.

Then you can interact with the child workflow directly.

```php
$workflow = WorkflowStub::load($workflowId);
$childWorkflow = WorkflowStub::load($workflow->childId());
$childWorkflow->approve('approved');
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
