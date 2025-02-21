"use strict";(self.webpackChunklaravel_workflow=self.webpackChunklaravel_workflow||[]).push([[9388],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>d});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),g=r,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||i;return t?n.createElement(d,o(o({ref:a},p),{},{components:t})):n.createElement(d,o({ref:a},p))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8309:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const i={slug:"ai-image-moderation-with-laravel-workflow",title:"AI Image Moderation with Laravel Workflow",authors:{name:"Richard",title:"Core Team",url:"https://github.com/rmcdaniel",image_url:"https://github.com/rmcdaniel.png"},tags:["ai","image-moderation","laravel-workflow","automation"]},o=void 0,l={permalink:"/blog/ai-image-moderation-with-laravel-workflow",editUrl:"https://github.com/laravel-workflow/laravel-workflow.github.io/edit/main/blog/2023-08-20-ai-image-moderation-with-laravel-workflow.md",source:"@site/blog/2023-08-20-ai-image-moderation-with-laravel-workflow.md",title:"AI Image Moderation with Laravel Workflow",description:"captionless image",date:"2023-08-20T00:00:00.000Z",formattedDate:"August 20, 2023",tags:[{label:"ai",permalink:"/blog/tags/ai"},{label:"image-moderation",permalink:"/blog/tags/image-moderation"},{label:"laravel-workflow",permalink:"/blog/tags/laravel-workflow"},{label:"automation",permalink:"/blog/tags/automation"}],readingTime:2.62,hasTruncateMarker:!1,authors:[{name:"Richard",title:"Core Team",url:"https://github.com/rmcdaniel",image_url:"https://github.com/rmcdaniel.png",imageURL:"https://github.com/rmcdaniel.png"}],frontMatter:{slug:"ai-image-moderation-with-laravel-workflow",title:"AI Image Moderation with Laravel Workflow",authors:{name:"Richard",title:"Core Team",url:"https://github.com/rmcdaniel",image_url:"https://github.com/rmcdaniel.png",imageURL:"https://github.com/rmcdaniel.png"},tags:["ai","image-moderation","laravel-workflow","automation"]},prevItem:{title:"Automating QA with Playwright and Laravel Workflow",permalink:"/blog/automating-qa-with-playwright-and-laravel-workflow"},nextItem:{title:"Microservice Communication with Laravel Workflow",permalink:"/blog/microservice-communication-with-laravel-workflow"}},s={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Laravel Workflow",id:"laravel-workflow",level:2},{value:"ClarifAI API",id:"clarifai-api",level:2},{value:"1. Store your credentials in <code>.env</code>.",id:"1-store-your-credentials-in-env",level:3},{value:"2. Add the service to <code>config/services.php</code>.",id:"2-add-the-service-to-configservicesphp",level:3},{value:"3. Create a service at <code>app/Services/ClarifAI.php</code>.",id:"3-create-a-service-at-appservicesclarifaiphp",level:3},{value:"Creating the Workflow",id:"creating-the-workflow",level:2},{value:"Activities",id:"activities",level:2},{value:"Automated Image Check",id:"automated-image-check",level:3},{value:"Logging Unsafe Images",id:"logging-unsafe-images",level:3},{value:"Deleting Images",id:"deleting-images",level:3},{value:"Starting and Signaling the Workflow",id:"starting-and-signaling-the-workflow",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Sz-f9McEdB5UIlr55GOjyw.png",alt:"captionless image"})),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Before we begin, let\u2019s understand the scenario. We are building an image moderation system where:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Every image undergoes an initial AI check to determine if it\u2019s safe."),(0,r.kt)("li",{parentName:"ol"},"If the AI deems the image unsafe, it\u2019s automatically logged and deleted."),(0,r.kt)("li",{parentName:"ol"},"If it\u2019s potentially safe, a human moderator is alerted to further review the image. They have the option to approve or reject the image."),(0,r.kt)("li",{parentName:"ol"},"Approved images are moved to a public location, whereas rejected images are deleted.")),(0,r.kt)("h2",{id:"laravel-workflow"},"Laravel Workflow"),(0,r.kt)("p",null,"Laravel Workflow is designed to streamline and organize complex processes in applications. It allows developers to define, manage, and execute workflows seamlessly. You can find installation instructions ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/laravel-workflow/laravel-workflow"},"here"),"."),(0,r.kt)("h2",{id:"clarifai-api"},"ClarifAI API"),(0,r.kt)("p",null,"ClarifAI provides AI-powered moderation tools for analyzing visual content. They offer a ",(0,r.kt)("a",{parentName:"p",href:"https://www.clarifai.com/pricing"},"free plan")," with up to 1,000 actions per month."),(0,r.kt)("h3",{id:"1-store-your-credentials-in-env"},"1. Store your credentials in ",(0,r.kt)("inlineCode",{parentName:"h3"},".env"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"CLARIFAI_API_KEY=key\nCLARIFAI_APP=my-application\nCLARIFAI_WORKFLOW=my-workflow\nCLARIFAI_USER=username\n")),(0,r.kt)("h3",{id:"2-add-the-service-to-configservicesphp"},"2. Add the service to ",(0,r.kt)("inlineCode",{parentName:"h3"},"config/services.php"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"'clarifai' => [\n    'api_key' => env('CLARIFAI_API_KEY'),\n    'app' => env('CLARIFAI_APP'),\n    'workflow' => env('CLARIFAI_WORKFLOW'),\n    'user' => env('CLARIFAI_USER'),\n],\n")),(0,r.kt)("h3",{id:"3-create-a-service-at-appservicesclarifaiphp"},"3. Create a service at ",(0,r.kt)("inlineCode",{parentName:"h3"},"app/Services/ClarifAI.php"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Services;\nuse Illuminate\\Support\\Facades\\Http;\nclass ClarifAI\n{\n    private $apiKey;\n    private $apiUrl;\n    public function __construct()\n    {\n        $app = config('services.clarifai.app');\n        $workflow = config('services.clarifai.workflow');\n        $user = config('services.clarifai.user');\n        $this->apiKey = config('services.clarifai.api_key');\n        $this->apiUrl = \"https://api.clarifai.com/v2/users/{$user}/apps/{$app}/workflows/{$workflow}/results/\";\n    }\n    public function checkImage(string $image): bool\n    {\n        $response = Http::withToken($this->apiKey, 'Key')\n            ->post($this->apiUrl, ['inputs' => [\n                ['data' => ['image' => ['base64' => base64_encode($image)]]],\n            ]]);\n        return collect($response->json('results.0.outputs.0.data.concepts', []))\n            ->filter(fn ($value) => $value['name'] === 'safe')\n            ->map(fn ($value) => round((float) $value['value']) > 0)\n            ->first() ?? false;\n    }\n}\n")),(0,r.kt)("h2",{id:"creating-the-workflow"},"Creating the Workflow"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Workflows;\nuse Workflow\\ActivityStub;\nuse Workflow\\SignalMethod;\nuse Workflow\\WorkflowStub;\nuse Workflow\\Workflow;\n\nclass ImageModerationWorkflow extends Workflow\n{\n    private bool $approved = false;\n    private bool $rejected = false;\n\n    #[SignalMethod]\n    public function approve()\n    {\n        $this->approved = true;\n    }\n\n    #[SignalMethod]\n    public function reject()\n    {\n        $this->rejected = true;\n    }\n\n    public function execute($imagePath)\n    {\n        $safe = yield from $this->check($imagePath);\n        if (! $safe) {\n            yield from $this->unsafe($imagePath);\n            return 'unsafe';\n        }\n        yield from $this->moderate($imagePath);\n        return $this->approved ? 'approved' : 'rejected';\n    }\n\n    private function check($imagePath)\n    {\n        return yield ActivityStub::make(AutomatedImageCheckActivity::class, $imagePath);\n    }\n\n    private function unsafe($imagePath)\n    {\n        yield ActivityStub::all([\n            ActivityStub::make(LogUnsafeImageActivity::class, $imagePath),\n            ActivityStub::make(DeleteImageActivity::class, $imagePath),\n        ]);\n    }\n\n    private function moderate($imagePath)\n    {\n        while (true) {\n            yield ActivityStub::make(NotifyImageModeratorActivity::class, $imagePath);\n            $signaled = yield WorkflowStub::awaitWithTimeout('24 hours', fn () => $this->approved || $this->rejected);\n            if ($signaled) break;\n        }\n    }\n}\n")),(0,r.kt)("h2",{id:"activities"},"Activities"),(0,r.kt)("h3",{id:"automated-image-check"},"Automated Image Check"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Workflows;\nuse App\\Services\\ClarifAI;\nuse Illuminate\\Support\\Facades\\Storage;\nuse Workflow\\Activity;\nclass AutomatedImageCheckActivity extends Activity\n{\n    public function execute($imagePath)\n    {\n        return app(ClarifAI::class)\n            ->checkImage(Storage::get($imagePath));\n    }\n}\n")),(0,r.kt)("h3",{id:"logging-unsafe-images"},"Logging Unsafe Images"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Workflows;\nuse Illuminate\\Support\\Facades\\Log;\nuse Workflow\\Activity;\nclass LogUnsafeImageActivity extends Activity\n{\n    public function execute($imagePath)\n    {\n        Log::info('Unsafe image detected at: ' . $imagePath);\n    }\n}\n")),(0,r.kt)("h3",{id:"deleting-images"},"Deleting Images"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Workflows;\nuse Illuminate\\Support\\Facades\\Storage;\nuse Workflow\\Activity;\nclass DeleteImageActivity extends Activity\n{\n    public function execute($imagePath)\n    {\n        Storage::delete($imagePath);\n    }\n}\n")),(0,r.kt)("h2",{id:"starting-and-signaling-the-workflow"},"Starting and Signaling the Workflow"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$workflow = WorkflowStub::make(ImageModerationWorkflow::class);\n$workflow->start('tmp/good.jpg');\n")),(0,r.kt)("p",null,"For approvals or rejections:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$workflow = WorkflowStub::load($id);\n$workflow->approve();\n// or\n$workflow->reject();\n")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/laravel-workflow/laravel-workflow"},"Laravel Workflow")," provides a structured approach to handle complex processes like image moderation. It supports asynchronous processing, external API integrations, and modular design for scalability. Thanks for reading!"))}m.isMDXComponent=!0}}]);