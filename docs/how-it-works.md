---
sidebar_position: 9
---

# How It Works

Laravel Workflow is a library that uses Laravel's queued jobs and event sourced persistence to create durable coroutines.

## Queues

Queued jobs are background processes that are scheduled to run at a later time. Laravel supports running queues via Amazon SQS, Redis, or even a relational database. Workflows and activities are both queued jobs but each behaves a little differently. A workflow will be dispatched mutliple times during normal operation. A workflow runs, dispatches one or more activities and then exits again until the activities are completed. An activity will only execute once during normal operation, as it will only be retried in the case of an error.

## Event Sourcing

Event sourcing is a way to build up the current state from a sequence of saved events rather than saving the state directly. This has several benefits, such as providing a complete history of the execution events which can be used to resume a workflow if the server it is running on crashes.

## Coroutines

Coroutines are functions that allow execution to be suspended and resumed by returning control to the calling function. In PHP, this is done using the yield keyword inside a generator. A generator is typically invoked by calling the [`Generator::current()`](https://www.php.net/manual/en/generator.current.php) method. This will execute the generator up to the first yield and then control will be returned to the caller.

In Laravel Workflow, the execute() method of a workflow class is a [generator](https://www.php.net/manual/en/language.generators.syntax.php). It works by yielding each activity. This allows the workflow to first check if the activity has already successfully completed. If so, the cached result is pulled from the event store and returned instead of running the activity a second time. If the activity hasn't been successfully completed before, it will queue the activity to run. The workflow is then able to suspend execution until the activity completes or fails.

## Activities

By calling multiple activities, a workflow can orchestrate the results between each of the activities. The execution of the workflow and the activities it yields are interleaved, with the workflow yielding an activity, suspending execution until the activity completes, and then continuing execution from where it left off.

If a workflow fails, the events leading up to the failure are replayed to rebuild the current state. This allows the workflow to pick up where it left off, with the same inputs and outputs as before, ensuring determinism.

## Promises

Promises are used to represent the result of an asynchronous operation, such as an activity. The yield keyword suspends execution until the promise is fulfilled or rejected. This allows the workflow to wait for an activity to complete before continuing execution.

## Example

```php
use Workflow\ActivityStub;
use Workflow\Workflow;

class MyWorkflow extends Workflow
{
    public function execute()
    {
        return [
            yield ActivityStub::make(TestActivity::class),
            yield ActivityStub::make(TestOtherActivity::class),
            yield ActivityStub::all([
                ActivityStub::make(TestParallelActivity::class),
                ActivityStub::make(TestParallelOtherActivity::class),
            ]),
        ];
    }
}
```

## Sequence Diagram

This sequence diagram shows how a Laravel Workflow progresses through a series of activities, both serial and parallel.

![mermaid-diagram-2022-12-08-173913](https://user-images.githubusercontent.com/1130888/206589649-8fc0044d-8089-45a7-a30f-e1bcbb5115cd.png)

1. The workflow starts by getting dispatched as a queued job.
2. The first activity, TestActivity, is then dispatched as a queued job. The workflow job then exits. Once TestActivity has completed, it saves the result to the database and returns control to the workflow by dispatching it again.
3. At this point, the workflow enters the event sourcing replay loop. This is where it goes back to the database and looks at the event stream to rebuild the current state. This is necessary because the workflow is not a long running process. The workflow exits while any activities are running and then is dispatched again after completion.
4. Once the event stream has been replayed, the workflow continues to the next activity, TestOtherActivity, and starts it by dispatching it as a queued job. Again, once TestOtherActivity has completed, it saves the result to the database and returns control to the workflow by dispatching it as a queued job.
5. The workflow then enters the event sourcing replay loop again, rebuilding the current state from the event stream.
6. Next, the workflow starts two parallel activities, TestParallelActivity and TestOtherParallelActivity. Both activities are dispatched. Once they have completed, they save the results to the database and return control to the workflow.
7. Finally, the workflow enters the event sourcing replay loop one last time to rebuild the current state from the event stream. This completes the execution of the workflow.

## Summary
The sequence diagram illustrates the workflow starting with the TestActivity and then the TestOtherActivity being executed in series. After both activities complete, the workflow replayed the events in order to rebuild the current state. This process is necessary in order to ensure that the workflow can be resumed after a crash or other interruption.

The need for determinism comes into play when the events are replayed. In order for the workflow to rebuild the correct state, the code for each activity must produce the same result when run multiple times with the same inputs. This means that activities should avoid using things like random numbers (unless using a side effect) or dates, as these will produce different results each time they are run.

The need for idempotency comes into play when an API fails to return a response even though it has actually completed successfully. For example, if an activity charges a customer and is not idempotent, rerunning it after a a failed response could result in the customer being charged twice. To avoid this, activities should be designed to be idempotent.
