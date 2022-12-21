---
sidebar_position: 2
---

# Activities

An activity is a unit of work that performs a specific task or operation (e.g. making an API request, processing data, sending an email) and can be executed by a workflow. It is defined by extending the `Activity` class and implementing the `execute()` method.

```php
use Workflow\Activity;

class MyActivity extends Activity
{
    public function execute()
    {
        // Perform some work...
        return $result;
    }
}
```
