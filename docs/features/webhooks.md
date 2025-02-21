---
sidebar_position: 11
---

# Webhooks

Laravel Workflow provides webhooks that allow external systems to start workflows and send signals dynamically. This feature enables seamless integration with external services, APIs, and automation tools.

## Enabling Webhooks
To enable webhooks in Laravel Workflow, register the webhook routes in your application’s routes file (`routes/web.php` or `routes/api.php`):

```php
use Workflow\Webhooks;

Webhooks::routes();
```

By default, webhooks will:
- Auto-discover workflows in the `app/Workflows` folder.
- Expose webhooks to workflows marked with `#[Webhook]` at the class level.
- Expose webhooks to signal methods marked with `#[Webhook]`.

## Starting a Workflow via Webhook
To expose a workflow as a webhook, add the `#[Webhook]` attribute on the class itself.

```php
use Workflow\Webhook;
use Workflow\Workflow;

#[Webhook]
class OrderWorkflow extends Workflow
{
    public function execute($orderId)
    {
        // your code here
    }
}
```

### Webhook URL
```
POST /webhooks/start/order-workflow
```

### Example Request
```bash
curl -X POST "https://example.com/webhooks/start/order-workflow" \
     -H "Content-Type: application/json" \
     -d '{"orderId": 123}'
```

## Sending a Signal via Webhook
To allow external systems to send signals to a workflow, add the `#[Webhook]` attribute on the method.

```php
use Workflow\SignalMethod;
use Workflow\Webhook;
use Workflow\Workflow;

class OrderWorkflow extends Workflow
{
    protected bool $shipped = false;

    #[SignalMethod]
    #[Webhook]
    public function markAsShipped()
    {
        $this->shipped = true;
    }
}
```

### Webhook URL
```
POST /webhooks/signal/order-workflow/{workflowId}/mark-as-shipped
```

### Example Request
```bash
curl -X POST "https://example.com/webhooks/signal/order-workflow/1/mark-as-shipped" \
     -H "Content-Type: application/json"
```

## Webhook Authentication
By default, webhooks don't require authentication but this can be configured in `config/workflows.php`.

### Authentication Methods
Laravel Workflow supports:
1. No Authentication (none)
2. Token-based Authentication (token)
3. HMAC Signature Verification (signature)

### Token Authentication
For token authentication, webhooks require a valid API token in the request headers. The default header is `Authorization` but you can change this in the configuration settings.

#### Example Request
```bash
curl -X POST "https://example.com/webhooks/start/order-workflow" \
     -H "Content-Type: application/json" \
     -H "Authorization: your-api-token" \
     -d '{"orderId": 123}'
```

### HMAC Signature Authentication
For HMAC authentication, Laravel Workflow verifies requests using a secret key. The default header is `X-Signature` but this can also be changed.

#### Example Request
```bash
BODY='{"orderId": 123}'
SIGNATURE=$(echo -n "$BODY" | openssl dgst -sha256 -hmac "your-secret-key" | awk '{print $2}')

curl -X POST "https://example.com/webhooks/start/order-workflow" \
     -H "Content-Type: application/json" \
     -H "X-Signature: $SIGNATURE" \
     -d "$BODY"
```

## Configuring Webhook Routes
By default, webhooks are accessible under `/webhooks`. You can customize the route path in `config/workflows.php`:

```php
'webhooks_route' => 'api/webhooks',
```

After this change, webhooks will be accessible under:
```
POST /api/webhooks/start/order-workflow
POST /api/webhooks/signal/order-workflow/{workflowId}/mark-as-shipped
```
