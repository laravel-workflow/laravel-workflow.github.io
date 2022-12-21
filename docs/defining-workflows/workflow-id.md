---
sidebar_position: 5
---

# Workflow ID

Inside of an activity, `$this->workflowId()` returns the id of the current workflow. This can be useful for activities that need to store data about the workflow that is executing them. For example, an activity may use the workflow id to store information in a database or cache so that it can be accessed by other activities in the same workflow.


```php
use Illuminate\Support\Facades\Cache;
use Workflow\Activity;
use Workflow\Contracts\Workflow;

class MyActivity extends Activity
{
    public function execute()
    {
        $workflowId = $this->workflowId();

        // Use the workflow id to store data in a cache or database
        Cache::put("workflow:{$workflowId}:data", 'some data');
    }
}
```

This ID can also be used to signal or query the workflow later. For example, if you want to send a notification email with a link to view the current state of the workflow, you can include the `$workflowId` in the email and use it to generate a signed URL.
