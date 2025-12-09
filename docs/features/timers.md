---
sidebar_position: 3
---

# Timers

Laravel Workflow provides the ability to suspend the execution of a workflow and resume at a later time. These are durable timers, meaning they survive restarts and failures while remaining consistent with workflow replay semantics. This can be useful for implementing delays, retry logic, or timeouts.

To use timers, you can use the `timer($duration)` helper function within your workflow. This method returns a `Promise` that will be resolved after the specified duration has passed.

Here is an example of using a timer:

```php
use function Workflow\timer;
use Workflow\Workflow;

class MyWorkflow extends Workflow
{
    public function execute()
    {
        // Wait for 5 seconds before continuing
        yield timer(5);

        // Do something after the timer has finished
        return 'Hello world';
    }
}
```

You may also specify the time to wait as a string e.g. '5 seconds', '30 minutes' or even '3 days'. Laravel Workflow can handle any duration.

**Important:** When using timers, do not use `Carbon::now()` to get the current time. Instead, use `WorkflowStub::now()`, which returns the current time as seen by the workflow system. This is crucial because the actual time may not match your application's system clock.

Additionally, when measuring elapsed time in workflows (e.g., tracking how long an activity takes), always get your start and end times with:

```php
use function Workflow\sideEffect;

$start = yield sideEffect(fn () => WorkflowStub::now());
```

This ensures an event log is created, preventing replay-related inconsistencies and guaranteeing accurate time calculations.

## Time Helpers

You can also use the following helper functions to create timers for specific units of time:

- `seconds($seconds)`
- `minutes($minutes)`
- `hours($hours)`
- `days($days)`
- `weeks($weeks)`
- `months($months)`
- `years($years)`

```php
use function Workflow\minutes;

yield minutes(5);
```
