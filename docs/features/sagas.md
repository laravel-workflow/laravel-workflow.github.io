---
sidebar_position: 8
---

# Sagas

Sagas are an established design pattern for managing complex, long-running operations:

- A saga manages distributed transactions using a sequence of local transactions.
- A local transaction is a work unit performed by a saga participant (an activity).
- Each operation in the saga can be reversed by a compensatory activity.
- The saga pattern assures that all operations are either completed successfully or the corresponding compensation activities are run to undo any completed work.

```php
use Workflow\ActivityStub;
use Workflow\ChildWorkflowStub;
use Workflow\Workflow;

class BookingSagaWorkflow extends Workflow
{
    public function execute()
    {
        try {
            $flightId = yield ActivityStub::make(BookFlightActivity::class);
            $this->addCompensation(fn () => ActivityStub::make(CancelFlightActivity::class, $flightId));

            $hotelId = yield ActivityStub::make(BookHotelActivity::class);
            $this->addCompensation(fn () => ActivityStub::make(CancelHotelActivity::class, $hotelId));

            $carId = yield ActivityStub::make(BookRentalCarActivity::class);
            $this->addCompensation(fn () => ActivityStub::make(CancelRentalCarActivity::class, $carId));
        } catch (Throwable $th) {
            yield from $this->compensate();
            throw $th;
        }
    }
}
```

By default, compensations execute sequentially in the reverse order they were added. To run them in parallel, use `$this->setParallelCompensation(true)`. To ignore exceptions that occur inside compensation activities while still running them sequentially, use `$this->setContinueWithError(true)` instead.
