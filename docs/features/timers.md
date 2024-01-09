---
sidebar_position: 3
---

# Timers

Laravel Workflow provides the ability to suspend the execution of a workflow and resume at a later time. This can be useful for implementing delays, retry logic, or timeouts.

To use timers, you can use the `WorkflowStub::timer($seconds)` method within your workflow or activity. This method returns a `Promise` that will be resolved after the specified number of seconds have passed.

Here is an example of using a timer in a workflow:

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

**Important:** When using timers, you should not use the `Carbon::now()` method to get the current time. Instead, you should use the `WorkflowStub::now()` method, which will return the current time as seen by the workflow system. This is important because the actual time may not match the time as seen by your application.
