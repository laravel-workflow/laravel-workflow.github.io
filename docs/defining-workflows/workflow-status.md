---
sidebar_position: 4
---

# Workfow Status

You can monitor the status of the workflow by calling the `running()` method, which returns `true` if the workflow is still running and `false` if it has completed or failed. 

```php
while ($workflow->running());
```

These are the possible values returned by the `status()` method.

```
WorkflowCreatedStatus
WorkflowCompletedStatus
WorkflowFailedStatus
WorkflowPendingStatus
WorkflowRunningStatus
WorkflowWaitingStatus
```

This is the state machine for a workflow status.

![mermaid-diagram-2022-12-09-115428](https://user-images.githubusercontent.com/1130888/206764849-32db239c-d98e-434a-8ee8-62454a1f0cc7.png)
