---
slug: invalidating-cloud-images
title: Invalidating Cloud Images in Laravel with Workflows
authors:
  name: Richard
  title: Core Team
  url: https://github.com/rmcdaniel
  image_url: https://github.com/rmcdaniel.png
tags: [cache, invalidation, cloud, images]
---

Many services like [Cloud Image](https://docs.cloudimage.io/go/cloudimage-documentation-v7/en/caching-acceleration/invalidation-api) offer a way to invalidate cached images so that they are pulled from your server again. This is useful if you have updated the source image on your server and want future requests to use the latest copy.

However, it can be challenging if you want to automate this and also ensure that the image has been invalidated. This is because most invalidation APIs are asynchronous. When you request an image to be cleared from the cache, the API will return a response immediately. Then the actual process to clear the image from the cache runs in the background, sometimes taking up to 30 seconds before the image is updated. You could simply trust that the process works but it is also possible to be 100% sure with an automated workflow.

The workflow we need to write is as follows:

1.  Check the currently cached image’s timestamp via HEAD call
2.  Invalidate cached image via API call
3.  Check if the image timestamp has changed
4.  If not, wait a while and check again
5.  After 3 failed checks, go back to step 2

The workflow consists of two activities. The first activity gets the current timestamp of the image. This timestamp is used to determine if the image was actually cleared from the cache or not.

```php
namespace App\Workflows\InvalidateCache;

use Illuminate\Support\Facades\Http;
use Workflow\Activity;

class CheckImageDateActivity extends Activity
{
    public function execute($url)
    {
        return Http::head('https://' . config('services.cloudimage.token') . '.cloudimg.io/' . $url)
            ->header('date');
    }
}
```

The second activity makes the actual call to Cloud Image’s API to invalidate the image from the cache.

```php
namespace App\Workflows\InvalidateCache;

use Illuminate\Support\Facades\Http;
use Workflow\Activity;

class InvalidateCacheActivity extends Activity
{
    public function execute($url)
    {
        Http::withHeaders([
            'X-Client-key' => config('services.cloudimage.key'),
            'Content-Type' => 'application/json'
        ])->post('https://api.cloudimage.com/invalidate', [
            'scope' => 'original',
            'urls' => [
                '/' . $url
            ],
        ]);
    }
}
```

The workflow looks as follows and is the same process as outlined before.

```php
namespace App\Workflows\InvalidateCache;

use Workflow\Workflow;
use function Workflow\{activity, timer};

class InvalidateCacheWorkflow extends Workflow
{
    public function execute($url)
    {
        $oldDate = yield activity(CheckImageDateActivity::class, $url);

        while (true) {
            yield activity(InvalidateCacheActivity::class, $url);

            for ($i = 0; $i < 3; ++$i) { 
                yield timer(30);

                $newDate = yield activity(CheckImageDateActivity::class, $url);

                if ($oldDate !== $newDate) return;    
            }
        }
    }
}
```

Line 13 uses an activity to get the current timestamp of the image we want to invalidate from the cache.

Line 15 starts a loop that only exits when the image timestamp has changed.

Line 16 uses an activity to invalidate the image from the cache.

Line 18 starts a loop that tries a maximum of three times to first sleep and then check if the image timestamp has change, after three times the loop restarts at line 15.

Line 19 sleeps the workflow for 30 seconds. This gives Cloud Image time to clear the image from their cache before checking the timestamp again.

Lines 21–23 reuse the activity from earlier to get the current timestamp of the cached image and compare it to the one saved on line 13. If the timestamps don’t match then the image has successfully been cleared from the cache and we can exit the workflow. Otherwise, after three attempts, we start the process over again.

This is how the workflow execution looks in the queue assuming no retries are needed.

![workflow execution](https://miro.medium.com/max/1400/1*7psZLD9mKGJnzEw508oIAw.webp)

The added benefit is that your image is now cached again and will be fast for the next user! Thanks for reading!
