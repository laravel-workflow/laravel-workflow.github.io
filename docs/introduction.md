---
sidebar_position: 1
---

# Introduction

## What is Laravel Workflow?

Laravel Workflow is a durable workflow engine that allows developers to write long running persistent distributed workflows (orchestrations) in PHP powered by Laravel Queues. It provides a simple and intuitive way to define complex asynchronous processes, such as agentic workflows (AI-driven), data pipelines, and microservices, as a sequence of activities that run in parallel or in series.

Laravel Workflow is built on top of Laravel, the popular PHP web framework, and uses its queue system and database layer to store and manage workflow data and state. It is designed to be scalable, reliable, and easy to use, with a focus on simplicity and maintainability.

## Why use Laravel Workflow?

There are several reasons why developers might choose to use Laravel Workflow for their workflow management needs:

- Laravel Workflow has access to all the features and capabilities of Laravel, such as Eloquent ORM, events, service container and more. This makes it a natural fit for Laravel developers and allows them to leverage their existing Laravel knowledge and skills.

- Laravel Workflow is designed to be simple and intuitive to use, with a clean and straightforward API and conventions. This makes it easy for developers to get started and quickly build complex workflows without having to spend a lot of time learning a new framework or domain-specific language.

- Laravel Workflow is highly scalable and reliable, thanks to its use of Laravel queues and the ability to run workflows on multiple workers. This means it can scale horizontally and handle large workloads without sacrificing performance or stability.

- Laravel Workflow is open source and actively maintained, with a growing community of contributors and users. This means that developers can easily get help and support, share their experiences and knowledge, and contribute to the development of the framework.

Compared to the built-in queues, Laravel Workflow allows for more complex and dynamic control over the execution of jobs, such as branching and looping, and provides a way to monitor the progress and status of the workflow as a whole. Unlike job chaining and batching, which are designed to execute a fixed set of jobs in a predetermined sequence, Laravel Workflow also allows for more flexible and adaptable execution.
