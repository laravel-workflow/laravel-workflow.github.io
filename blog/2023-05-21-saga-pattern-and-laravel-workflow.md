---
slug: saga-pattern-and-laravel-workflow
title: "Saga Pattern and Laravel Workflow"
authors:
  name: Richard
  title: Core Team
  url: https://github.com/rmcdaniel
  image_url: https://github.com/rmcdaniel.png
tags: [sagas, microservices]
---

Suppose we are working on a Laravel application that offers trip booking. A typical trip booking involves several steps such as:

1.  Booking a flight.
2.  Booking a hotel.
3.  Booking a rental car.

Our customers expect an all-or-nothing transaction — it doesn’t make sense to book a hotel without a flight. Now imagine each of these booking steps being represented by a distinct API.

Together, these steps form a distributed transaction spanning multiple services and databases. For a successful booking, all three APIs must accomplish their individual local transactions. If any step fails, the preceding successful transactions need to be reversed in an orderly fashion. With money and bookings at stake, we can’t merely erase prior transactions — we need an immutable record of attempts and failures. Thus, we should compile a list of compensatory actions for execution in the event of a failure.

Prerequisites
=============

To follow this tutorial, you should:

1.  Set up a local development environment for Laravel Workflow applications in PHP or use the sample app in a GitHub [codespace](https://github.com/laravel-workflow/sample-app).
2.  Familiarize yourself with the basics of starting a Laravel Workflow project by reviewing the [documentation](https://laravel-workflow.com/docs/installation).
3.  Review the [Saga architecture pattern](https://microservices.io/patterns/data/saga.html).

Sagas are an established design pattern for managing complex, long-running operations:

1.  A Saga manages transactions using a sequence of local transactions.
2.  A local transaction is a work unit performed by a saga participant (a microservice).
3.  Each operation in the Saga can be reversed by a compensatory transaction.
4.  The Saga pattern assures that all operations are either completed successfully or the corresponding compensation transactions are run to reverse any completed work.

Laravel Workflow provides inherent support for the Saga pattern, simplifying the process of handling rollbacks and executing compensatory transactions.

Booking Saga Flow
=================

We will visualize the Saga pattern for our trip booking scenario with a diagram.

![trip booking saga](https://miro.medium.com/v2/1*WD1_N0mIdeDtIPycKQj6yQ.png)

Workflow Implementation
-----------------------

We’ll begin by creating a high-level flow of our trip booking process, which we’ll name `BookingSagaWorkflow`.

```php
class BookingSagaWorkflow extends Workflow  
{  
    public function execute()  
    {  
    }  
}
```

Next, we’ll imbue our saga with logic, by adding booking steps:

```php
use function Workflow\activity;
use Workflow\Workflow;

class BookingSagaWorkflow extends Workflow  
{  
    public function execute()  
    {  
        try {  
            $flightId = yield activity(BookFlightActivity::class);  
            $hotelId = yield activity(BookHotelActivity::class);  
            $carId = yield activity(BookRentalCarActivity::class);  
        } catch (Throwable $th) {  
        }  
    }  
}
```

Everything inside the `try` block is our "happy path". If any steps within this distributed transaction fail, we move into the `catch` block and execute compensations.

Adding Compensations
--------------------

```php
use function Workflow\activity;
use Workflow\Workflow;

class BookingSagaWorkflow extends Workflow  
{  
    public function execute()  
    {  
        try {  
            $flightId = yield activity(BookFlightActivity::class);  
            $this->addCompensation(fn () => activity(CancelFlightActivity::class, $flightId));  
  
            $hotelId = yield activity(BookHotelActivity::class);  
            $this->addCompensation(fn () => activity(CancelHotelActivity::class, $hotelId));  
  
            $carId = yield activity(BookRentalCarActivity::class);  
            $this->addCompensation(fn () => activity(CancelRentalCarActivity::class, $carId));  
        } catch (Throwable $th) {  
        }  
    }  
}
```

In the above code, we sequentially book a flight, a hotel, and a car. We use the `$this->addCompensation()` method to add a compensation, providing a callable to reverse a distributed transaction.

Executing the Compensation Strategy
-----------------------------------

With the above setup, we can finalize our saga and populate the `catch` block:

```php
class BookingSagaWorkflow extends Workflow  
{  
    public function execute()  
    {  
        try {  
            $flightId = yield activity(BookFlightActivity::class);  
            $this->addCompensation(fn () => activity(CancelFlightActivity::class, $flightId));  
  
            $hotelId = yield activity(BookHotelActivity::class);  
            $this->addCompensation(fn () => activity(CancelHotelActivity::class, $hotelId));  
  
            $carId = yield activity(BookRentalCarActivity::class);  
            $this->addCompensation(fn () => activity(CancelRentalCarActivity::class, $carId));  
        } catch (Throwable $th) {  
            yield from $this->compensate();  
            throw $th;  
        }  
    }  
}
```

Within the `catch` block, we call the `compensate()` method, which triggers the compensation strategy and executes all previously registered compensation callbacks. Once done, we rethrow the exception for debugging.

By default, compensations execute sequentially. To run them in parallel, use `$this->setParallelCompensation(true)`. To ignore exceptions that occur inside compensation activities while keeping them sequential, use `$this->setContinueWithError(true)` instead.

Testing the Workflow
--------------------

Let’s run this workflow with simulated failures in each activity to fully understand the process.

First, we run the workflow normally to see the sequence of bookings: flight, then hotel, then rental car.

![booking saga with no errors](https://miro.medium.com/v2/1*3IgEjKzHK8Fpp-uumr4dIw.png)

Next, we simulate an error with the flight booking activity. Since no bookings were made, the workflow logs the exception and fails.

![booking saga error with flight](https://miro.medium.com/v2/1*ZuDAFa_q0l2-PT6PhRguaw.png)

Then, we simulate an error with the hotel booking activity. The flight is booked successfully, but when the hotel booking fails, the workflow cancels the flight.

![booking saga error with hotel](https://miro.medium.com/v2/1*_OwO5PUOLFqcLfd38gNpEQ.png)

Finally, we simulate an error with the rental car booking. The flight and hotel are booked successfully, but when the rental car booking fails, the workflow cancels the hotel first and then the flight.

![booking saga error with rental car](https://miro.medium.com/v2/1*3qR9GKQH-YtghwPK_x9wUQ.png)

Conclusion
----------

In this tutorial, we implemented the Saga architecture pattern for distributed transactions in a microservices-based application using Laravel Workflow. Writing Sagas can be complex, but Laravel Workflow takes care of the difficult parts such as handling errors and retries, and invoking compensatory transactions, allowing us to focus on the details of our application.
