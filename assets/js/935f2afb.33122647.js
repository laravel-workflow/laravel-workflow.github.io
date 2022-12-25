"use strict";(self.webpackChunklaravel_workflow=self.webpackChunklaravel_workflow||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/docs/introduction","docId":"introduction"},{"type":"link","label":"Installation","href":"/docs/installation","docId":"installation"},{"type":"category","label":"Defining Workflows","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Workflows","href":"/docs/defining-workflows/workflows","docId":"defining-workflows/workflows"},{"type":"link","label":"Activities","href":"/docs/defining-workflows/activities","docId":"defining-workflows/activities"},{"type":"link","label":"Starting Workflows","href":"/docs/defining-workflows/starting-workflows","docId":"defining-workflows/starting-workflows"},{"type":"link","label":"Workfow Status","href":"/docs/defining-workflows/workflow-status","docId":"defining-workflows/workflow-status"},{"type":"link","label":"Workflow ID","href":"/docs/defining-workflows/workflow-id","docId":"defining-workflows/workflow-id"}],"href":"/docs/category/defining-workflows"},{"type":"category","label":"Features","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Signals","href":"/docs/features/signals","docId":"features/signals"},{"type":"link","label":"Queries","href":"/docs/features/queries","docId":"features/queries"},{"type":"link","label":"Timers","href":"/docs/features/timers","docId":"features/timers"},{"type":"link","label":"Signal + Timer","href":"/docs/features/signal+timer","docId":"features/signal+timer"},{"type":"link","label":"Side Effects","href":"/docs/features/side-effects","docId":"features/side-effects"}],"href":"/docs/category/features"},{"type":"category","label":"Configuration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Options","href":"/docs/configuration/options","docId":"configuration/options"},{"type":"link","label":"Ensuring Same Server","href":"/docs/configuration/ensuring-same-server","docId":"configuration/ensuring-same-server"},{"type":"link","label":"Database Connection","href":"/docs/configuration/database-connection","docId":"configuration/database-connection"}],"href":"/docs/category/configuration"},{"type":"link","label":"Failures and Recovery","href":"/docs/failures-and-recovery","docId":"failures-and-recovery"},{"type":"category","label":"Constraints","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/docs/constraints/overview","docId":"constraints/overview"},{"type":"link","label":"Workflow Constraints","href":"/docs/constraints/workflow-constraints","docId":"constraints/workflow-constraints"},{"type":"link","label":"Activity Constraints","href":"/docs/constraints/activity-constraints","docId":"constraints/activity-constraints"},{"type":"link","label":"Constraints Summary","href":"/docs/constraints/constraints-summary","docId":"constraints/constraints-summary"}],"href":"/docs/category/constraints"},{"type":"link","label":"How It Works","href":"/docs/how-it-works","docId":"how-it-works"}]},"docs":{"configuration/database-connection":{"id":"configuration/database-connection","title":"Database Connection","description":"Here is an overview of the steps needed to customize the database connection used for the stored workflow models. This is only required if you want to use a different database connection than the default connection you specified for your Laravel application.","sidebar":"tutorialSidebar"},"configuration/ensuring-same-server":{"id":"configuration/ensuring-same-server","title":"Ensuring Same Server","description":"To ensure that your activities run on the same server so that they can share data using the local file system, you can use the $queue property on your workflow and activity classes. Set the $queue property to the name of a dedicated queue that is only processed by the desired server.","sidebar":"tutorialSidebar"},"configuration/options":{"id":"configuration/options","title":"Options","description":"Laravel Workflow allows you to specify various options when defining your workflows and activities. These options include the number of times a workflow or activity may be attempted before it fails, the connection and queue, and the maximum number of seconds it is allowed to run.","sidebar":"tutorialSidebar"},"constraints/activity-constraints":{"id":"constraints/activity-constraints","title":"Activity Constraints","description":"Activities have none of the above constraints. However, because activities are retryable they should still be idempotent. If your activity creates a charge for a customer then retrying it should not create a duplicate charge.","sidebar":"tutorialSidebar"},"constraints/constraints-summary":{"id":"constraints/constraints-summary","title":"Constraints Summary","description":"| Workflows | Activities |","sidebar":"tutorialSidebar"},"constraints/overview":{"id":"constraints/overview","title":"Overview","description":"The determinism and idempotency constraints for workflows and activities are important for ensuring the reliability and correctness of the overall system.","sidebar":"tutorialSidebar"},"constraints/workflow-constraints":{"id":"constraints/workflow-constraints","title":"Workflow Constraints","description":"The determinism constraints for workflow classes dictate that a workflow class must not depend on external state or services that may change over time. This means that a workflow class should not perform any operations that rely on the current date and time, the current user, external network resources, or any other source of potentially changing state.","sidebar":"tutorialSidebar"},"defining-workflows/activities":{"id":"defining-workflows/activities","title":"Activities","description":"An activity is a unit of work that performs a specific task or operation (e.g. making an API request, processing data, sending an email) and can be executed by a workflow. It is defined by extending the Activity class and implementing the execute() method.","sidebar":"tutorialSidebar"},"defining-workflows/starting-workflows":{"id":"defining-workflows/starting-workflows","title":"Starting Workflows","description":"To start a workflow, you must first create a workflow instance and then call the start() method on it. The workflow instance has several methods that can be used to interact with the workflow, such as id() to get the workflow\'s unique identifier, status() or running() to get the current status of the workflow, and output() to get the output data produced by the workflow.","sidebar":"tutorialSidebar"},"defining-workflows/workflow-id":{"id":"defining-workflows/workflow-id","title":"Workflow ID","description":"Inside of an activity, $this->workflowId() returns the id of the current workflow. This can be useful for activities that need to store data about the workflow that is executing them. For example, an activity may use the workflow id to store information in a database or cache so that it can be accessed by other activities in the same workflow.","sidebar":"tutorialSidebar"},"defining-workflows/workflow-status":{"id":"defining-workflows/workflow-status","title":"Workfow Status","description":"You can monitor the status of the workflow by calling the running() method, which returns true if the workflow is still running and false if it has completed or failed.","sidebar":"tutorialSidebar"},"defining-workflows/workflows":{"id":"defining-workflows/workflows","title":"Workflows","description":"In Laravel Workflow, workflows and activities are defined as classes that extend the base Workflow and Activity classes provided by the framework.","sidebar":"tutorialSidebar"},"failures-and-recovery":{"id":"failures-and-recovery","title":"Failures and Recovery","description":"If a workflow fails or crashes then it can be resumed. To resume a failed workflow, you can use the resume method on the workflow instance. This will re-execute the failed activities in the workflow.","sidebar":"tutorialSidebar"},"features/queries":{"id":"features/queries","title":"Queries","description":"Queries allow you to retrieve information about the current state of a workflow without affecting its execution. This is useful for monitoring and debugging purposes.","sidebar":"tutorialSidebar"},"features/side-effects":{"id":"features/side-effects","title":"Side Effects","description":"A side effect is a closure containing non-deterministic code. The closure is only executed once and the result is saved. It will not execute again if the workflow is retried. Instead, it will return the saved result.","sidebar":"tutorialSidebar"},"features/signal+timer":{"id":"features/signal+timer","title":"Signal + Timer","description":"In some cases, you may want to wait for a signal or for a timer to expire, whichever comes first. This can be achieved by using WorkflowStub::awaitWithTimeout($seconds, $callback).","sidebar":"tutorialSidebar"},"features/signals":{"id":"features/signals","title":"Signals","description":"Signals allow you to trigger events in a workflow from outside the workflow. This can be useful for reacting to external events or for signaling the completion of an external task.","sidebar":"tutorialSidebar"},"features/timers":{"id":"features/timers","title":"Timers","description":"Laravel Workflow provides the ability to suspend the execution of a workflow and resume at a later time. This can be useful for implementing delays, retry logic, or timeouts.","sidebar":"tutorialSidebar"},"how-it-works":{"id":"how-it-works","title":"How It Works","description":"Laravel Workflow is a library that uses Laravel\'s queued jobs and event sourced persistence to create durable coroutines.","sidebar":"tutorialSidebar"},"installation":{"id":"installation","title":"Installation","description":"Requirements","sidebar":"tutorialSidebar"},"introduction":{"id":"introduction","title":"Introduction","description":"What is Laravel Workflow?","sidebar":"tutorialSidebar"}}}')}}]);