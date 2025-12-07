---
sidebar_position: 4
---

# Workflow Status

You can monitor the status of the workflow by calling the `running()` method, which returns `true` if the workflow is still running and `false` if it has completed or failed. 

```php
while ($workflow->running());
```

These are the possible values returned by the `status()` method.

```
WorkflowCreatedStatus
WorkflowCompletedStatus
WorkflowContinuedStatus
WorkflowFailedStatus
WorkflowPendingStatus
WorkflowRunningStatus
WorkflowWaitingStatus
```

This is the state machine for a workflow status.

[![](https://mermaid.ink/img/pako:eNqVkstuwyAQRX_FmmVlR7Zrx4ZFN6m6rtpFpJYuUCEOigELQ1-W_70kVR9EdpWwYubOmasZGOBZMw4Yekstvxa0MVQmLzlRkT-PF09RklxFa212m1a_rgz3Veze17qeqK-iSTHAbrliQjXT2A0V7flUIAbY336nMndOqVmrQAzXoWXXcjvt9h-mrFDuXGx-sHlmTYWdHSwQT7SaZ46eC2JojGCArXE8BsmNpPsQhn1DAnbLJSeA_ZVRsyNA1OiZjqoHreU3ZrRrtoA3tO195Dr2-0l_ssYbc7PSTlnABTr0ADzAm49StEBZmWVpUeY1qvIihnefXi7qqkBVWZd5drmssmKM4eNgm3qlHD8BErAUGg?type=png)](https://mermaid.live/edit#pako:eNqVkstuwyAQRX_FmmVlR7Zrx4ZFN6m6rtpFpJYuUCEOigELQ1-W_70kVR9EdpWwYubOmasZGOBZMw4Yekstvxa0MVQmLzlRkT-PF09RklxFa212m1a_rgz3Veze17qeqK-iSTHAbrliQjXT2A0V7flUIAbY336nMndOqVmrQAzXoWXXcjvt9h-mrFDuXGx-sHlmTYWdHSwQT7SaZ46eC2JojGCArXE8BsmNpPsQhn1DAnbLJSeA_ZVRsyNA1OiZjqoHreU3ZrRrtoA3tO195Dr2-0l_ssYbc7PSTlnABTr0ADzAm49StEBZmWVpUeY1qvIihnefXi7qqkBVWZd5drmssmKM4eNgm3qlHD8BErAUGg)
