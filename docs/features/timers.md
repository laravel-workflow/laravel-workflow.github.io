---
sidebar_position: 3
---

# Timers

Laravel Workflow provides the ability to suspend the execution of a workflow and resume at a later time. This can be useful for implementing delays, retry logic, or timeouts.

To use timers, you can use the `WorkflowStub::timer($seconds)` method within your workflow. This method returns a `Promise` that will be resolved after the specified number of seconds have passed.

Here is an example of using a timer:

```php
use Workflow\WorkflowStub;
use Workflow\Workflow;

class MyWorkflow extends Workflow
{
    public function execute()
    {
        // Wait for 5 seconds before continuing
        yield WorkflowStub::timer(5);

        // Do something after the timer has finished
        return 'Hello world';
    }
}
```

You may also specify the time to wait as a string e.g. '5 seconds' or '30 minutes'.

**Important:** When using timers, do not use `Carbon::now()` to get the current time. Instead, use `WorkflowStub::now()`, which returns the current time as seen by the workflow system. This is crucial because the actual time may not match your application's system clock.

Additionally, when measuring elapsed time in workflows (e.g., tracking how long an activity takes), always get your start time with:

```php
$start = yield WorkflowStub::sideEffect(fn () => WorkflowStub::now());
```

This ensures an event log is created, preventing replay-related inconsistencies and guaranteeing accurate time calculations.
