---
sidebar_position: 6
---

# Failures and Recovery

If a workflow fails or crashes then it can be resumed. To resume a failed workflow, you can use the resume method on the workflow instance. This will re-execute the failed activities in the workflow.

```php
use Workflow\WorkflowStub;

$workflow = WorkflowStub::load($workflowId);
$workflow->resume();
```

The default retry policy is to never fail and simply retry forever until the error is fixed. This is because the retry policy includes a backoff function which increases the delay between each retry attempt. This gives you time to fix the error without creating too many attempts.

There are two types of errors that can occur in a workflow: recoverable errors and non-recoverable errors. Recoverable errors are temporary and can be resolved without intervention, such as a timeout or temporary network failure. Non-recoverable errors require manual intervention, such as a deployment or code change.

## Recovery Process

The general process to fix a failing workflow is:

1. Check the logs for the activity that is failing and look for any errors or exceptions that are being thrown.
2. Identify the source of the error and fix it in the code.
3. Deploy the fix to the server where the queue is running.
4. Restart the queue worker to pick up the new code.
5. Monitor the activity to ensure that it is now completing successfully without errors.
6. If the activity continues to fail, repeat the process until the issue is resolved.
