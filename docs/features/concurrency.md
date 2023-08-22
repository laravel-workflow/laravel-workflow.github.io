---
sidebar_position: 8
---

# Concurrency

Activities can be executed in series or in parallel. In either case, you start by using `ActivityStub::make()` to create a new instance of an activity and return a promise that represents the execution of that activity. The activity will immediately begin executing in the background. You can then `yield` this promise to pause the execution of the workflow and wait for the result of the activity, or pass the promise into the `ActivityStub::all()` method to wait for a group of activities to complete in parallel.

## Series

This example will execute 3 activities in series, waiting for the completion of each activity before continuing to the next one.

```php
use Workflow\ActivityStub;
use Workflow\Workflow;

class MyWorkflow extends Workflow
{
    public function execute()
    {
        return [
            yield ActivityStub::make(MyActivity1::class),
            yield ActivityStub::make(MyActivity1::class),
            yield ActivityStub::make(MyActivity1::class),
        ];
    }
}
```

## Parallel

This example will execute 3 activities in parallel, waiting for the completion of all activities and collecting the results.

```php
use Workflow\ActivityStub;
use Workflow\Workflow;

class MyWorkflow extends Workflow
{
    public function execute()
    {
        return yield ActivityStub::all([
            ActivityStub::make(MyActivity1::class),
            ActivityStub::make(MyActivity2::class),
            ActivityStub::make(MyActivity3::class),
        ]);
    }
}
```

The main difference between the serial example and the parallel execution example is the number of `yield` statements. In the serial example, there are 3 `yield` statements, one for each activity. This means that the workflow will pause and wait for each activity to complete before continuing to the next one. In the parallel example, there is only 1 `yield` statement, which wraps all of the activities in a call to ActivityStub::all(). This means that all of the activities will be executed in parallel, and the workflow will pause and wait for all of them to complete as a group before continuing.

## Mix and Match

You can also mix serial and parallel executions as desired.

```php
use Workflow\ActivityStub;
use Workflow\Workflow;

class MyWorkflow extends Workflow
{
    public function execute()
    {
        return [
            yield ActivityStub::make(MyActivity1::class),
            yield ActivityStub::make(MyActivity2::class),
            yield ActivityStub::make(MyActivity3::class),
            yield ActivityStub::all([
                ActivityStub::make(MyActivity4::class),
                ActivityStub::make(MyActivity5::class),
            ]),
            yield ActivityStub::make(MyActivity6::class),
        ];
    }
}
```

Activities 1, 2 and 3 will execute in series, waiting for each to complete one after another before continuing. Then activities 4 and 5 will execute together in parallel and only when they both complete will execution continue. Finally, activity 6 executes last after all others have completed.
