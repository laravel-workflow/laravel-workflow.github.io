"use strict";(self.webpackChunklaravel_workflow=self.webpackChunklaravel_workflow||[]).push([[5133],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8909:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={slug:"microservice-communication-with-laravel-workflow",title:"Microservice Communication with Laravel Workflow",authors:{name:"Richard",title:"Core Team",url:"https://github.com/rmcdaniel",image_url:"https://github.com/rmcdaniel.png"},tags:["microservices","laravel-workflow","communication","distributed-systems"]},i=void 0,l={permalink:"/blog/microservice-communication-with-laravel-workflow",editUrl:"https://github.com/laravel-workflow/laravel-workflow.github.io/edit/main/blog/2023-08-18-microservice-communication-with-laravel-workflow.md",source:"@site/blog/2023-08-18-microservice-communication-with-laravel-workflow.md",title:"Microservice Communication with Laravel Workflow",description:"captionless image",date:"2023-08-18T00:00:00.000Z",formattedDate:"August 18, 2023",tags:[{label:"microservices",permalink:"/blog/tags/microservices"},{label:"laravel-workflow",permalink:"/blog/tags/laravel-workflow"},{label:"communication",permalink:"/blog/tags/communication"},{label:"distributed-systems",permalink:"/blog/tags/distributed-systems"}],readingTime:3.84,hasTruncateMarker:!1,authors:[{name:"Richard",title:"Core Team",url:"https://github.com/rmcdaniel",image_url:"https://github.com/rmcdaniel.png",imageURL:"https://github.com/rmcdaniel.png"}],frontMatter:{slug:"microservice-communication-with-laravel-workflow",title:"Microservice Communication with Laravel Workflow",authors:{name:"Richard",title:"Core Team",url:"https://github.com/rmcdaniel",image_url:"https://github.com/rmcdaniel.png",imageURL:"https://github.com/rmcdaniel.png"},tags:["microservices","laravel-workflow","communication","distributed-systems"]},prevItem:{title:"AI Image Moderation with Laravel Workflow",permalink:"/blog/ai-image-moderation-with-laravel-workflow"},nextItem:{title:"Saga Pattern and Laravel Workflow",permalink:"/blog/saga-pattern-and-laravel-workflow"}},s={authorsImageUrls:[void 0]},c=[{value:"The Challenge",id:"the-challenge",level:2},{value:"Laravel Workflow to the Rescue!",id:"laravel-workflow-to-the-rescue",level:2},{value:"Defining Workflows and Activities",id:"defining-workflows-and-activities",level:3},{value:"1. Create a workflow.",id:"1-create-a-workflow",level:4},{value:"2. Create an activity.",id:"2-create-an-activity",level:4},{value:"3. Run the workflow.",id:"3-run-the-workflow",level:4},{value:"Balancing Shared and Dedicated Resources",id:"balancing-shared-and-dedicated-resources",level:2},{value:"Step-By-Step Integration",id:"step-by-step-integration",level:2},{value:"1. Install <code>laravel-workflow</code> in all microservices.",id:"1-install-laravel-workflow-in-all-microservices",level:3},{value:"2. Create a shared database/redis connection in all microservices.",id:"2-create-a-shared-databaseredis-connection-in-all-microservices",level:3},{value:"3. Configure a shared queue connection.",id:"3-configure-a-shared-queue-connection",level:3},{value:"4. Ensure only one microservice publishes Laravel Workflow migrations.",id:"4-ensure-only-one-microservice-publishes-laravel-workflow-migrations",level:3},{value:"5. Extend workflow models in each microservice to use the shared connection.",id:"5-extend-workflow-models-in-each-microservice-to-use-the-shared-connection",level:3},{value:"6. Publish Laravel Workflow config and update it with shared models.",id:"6-publish-laravel-workflow-config-and-update-it-with-shared-models",level:3},{value:"7. Set workflows and activities to use the shared queue.",id:"7-set-workflows-and-activities-to-use-the-shared-queue",level:3},{value:"8. Ensure microservices define empty counterparts for workflow and activity classes.",id:"8-ensure-microservices-define-empty-counterparts-for-workflow-and-activity-classes",level:3},{value:"In the workflow microservice:",id:"in-the-workflow-microservice",level:4},{value:"In the activity microservice:",id:"in-the-activity-microservice",level:4},{value:"9. Ensure all microservices have the same <code>APP_KEY</code> in their <code>.env</code> file.",id:"9-ensure-all-microservices-have-the-same-app_key-in-their-env-file",level:3},{value:"10. Run queue workers in each microservice.",id:"10-run-queue-workers-in-each-microservice",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*nCy08NPtCpERqC09SVBFfg.jpeg",alt:"captionless image"})),(0,r.kt)("p",null,"In the evolving landscape of microservices, communication has always been a focal point. Microservices can interact in various ways, be it through HTTP/REST calls, using messaging protocols like RabbitMQ or Kafka, or even employing more recent technologies like gRPC. Yet, regardless of the communication method, the goal remains the same: seamless, efficient, and robust interactions. Today, we\u2019ll explore how Laravel Workflow can fit into this picture and optimize the communication between microservices in a unique way."),(0,r.kt)("h2",{id:"the-challenge"},"The Challenge"),(0,r.kt)("p",null,"In a microservices architecture, decoupling is the name of the game. You want each service to have a single responsibility, to be maintainable, and to be independently deployable. Yet, in the world of workflows, this becomes challenging. How do you split a workflow from its activity and yet ensure they communicate seamlessly?"),(0,r.kt)("h2",{id:"laravel-workflow-to-the-rescue"},"Laravel Workflow to the Rescue!"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/laravel-workflow/laravel-workflow"},"Laravel Workflow")," handles the discovery and orchestration for you! With a shared database and queue connection, you can have your workflow in one Laravel app and its activity logic in another."),(0,r.kt)("h3",{id:"defining-workflows-and-activities"},"Defining Workflows and Activities"),(0,r.kt)("h4",{id:"1-create-a-workflow"},"1. Create a workflow."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Workflow\\ActivityStub;\nuse Workflow\\Workflow;\n\nclass MyWorkflow extends Workflow\n{\n    public function execute($name)\n    {\n        $result = yield ActivityStub::make(MyActivity::class, $name);\n        return $result;\n    }\n}\n")),(0,r.kt)("h4",{id:"2-create-an-activity"},"2. Create an activity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'use Workflow\\Activity;\n\nclass MyActivity extends Activity\n{\n    public function execute($name)\n    {\n        return "Hello, {$name}!";\n    }\n}\n')),(0,r.kt)("h4",{id:"3-run-the-workflow"},"3. Run the workflow."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Workflow\\WorkflowStub;\n\n$workflow = WorkflowStub::make(MyWorkflow::class);\n$workflow->start('world');\nwhile ($workflow->running());\n$workflow->output();\n// Output: 'Hello, world!'\n")),(0,r.kt)("p",null,"The workflow will manage the activity and handle any failures, retries, etc. Think of workflows like job chaining on steroids because you can have conditional logic, loops, return a result that can be used in the next activity, and write everything in typical PHP code that is failure tolerant."),(0,r.kt)("h2",{id:"balancing-shared-and-dedicated-resources"},"Balancing Shared and Dedicated Resources"),(0,r.kt)("p",null,"When working with microservices, it\u2019s common for each service to have its dedicated resources, such as databases, caches, and queues. However, to facilitate communication between workflows and activities across services, a shared connection (like a database or queue) becomes essential. This shared connection acts as a bridge for data and task exchanges while ensuring:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Isolation"),": Dedicated resources prevent cascading failures."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Performance"),": Each service can be optimized independently."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Security"),": Isolation limits potential attack vectors.")),(0,r.kt)("h2",{id:"step-by-step-integration"},"Step-By-Step Integration"),(0,r.kt)("h3",{id:"1-install-laravel-workflow-in-all-microservices"},"1. Install ",(0,r.kt)("inlineCode",{parentName:"h3"},"laravel-workflow")," in all microservices."),(0,r.kt)("p",null,"Follow the ",(0,r.kt)("a",{parentName:"p",href:"https://laravel-workflow.com/docs/installation/"},"installation guide"),"."),(0,r.kt)("h3",{id:"2-create-a-shared-databaseredis-connection-in-all-microservices"},"2. Create a shared database/redis connection in all microservices."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// config/database.php\n'connections' => [\n    'shared' => [\n        'driver' => 'mysql',\n        'host' => env('SHARED_DB_HOST', '127.0.0.1'),\n        'database' => env('SHARED_DB_DATABASE', 'forge'),\n        'username' => env('SHARED_DB_USERNAME', 'forge'),\n        'password' => env('SHARED_DB_PASSWORD', ''),\n    ],\n],\n")),(0,r.kt)("h3",{id:"3-configure-a-shared-queue-connection"},"3. Configure a shared queue connection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// config/queue.php\n'connections' => [\n    'shared' => [\n        'driver' => 'redis',\n        'connection' => 'shared',\n        'queue' => env('SHARED_REDIS_QUEUE', 'default'),\n    ],\n],\n")),(0,r.kt)("h3",{id:"4-ensure-only-one-microservice-publishes-laravel-workflow-migrations"},"4. Ensure only one microservice publishes Laravel Workflow migrations."),(0,r.kt)("p",null,"Update the migration to use the shared database connection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// database/migrations/..._create_workflows_table.php\nclass CreateWorkflowsTable extends Migration\n{\n    protected $connection = 'shared';\n}\n")),(0,r.kt)("h3",{id:"5-extend-workflow-models-in-each-microservice-to-use-the-shared-connection"},"5. Extend workflow models in each microservice to use the shared connection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// app/Models/StoredWorkflow.php\nnamespace App\\Models;\nuse Workflow\\Models\\StoredWorkflow as BaseStoredWorkflow;\n\nclass StoredWorkflow extends BaseStoredWorkflow\n{\n    protected $connection = 'shared';\n}\n")),(0,r.kt)("h3",{id:"6-publish-laravel-workflow-config-and-update-it-with-shared-models"},"6. Publish Laravel Workflow config and update it with shared models."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'php artisan vendor:publish --provider="Workflow\\Providers\\WorkflowServiceProvider" --tag="config"\n')),(0,r.kt)("h3",{id:"7-set-workflows-and-activities-to-use-the-shared-queue"},"7. Set workflows and activities to use the shared queue."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// app/Workflows/MyWorkflow.php\nclass MyWorkflow extends Workflow\n{\n    public $connection = 'shared';\n    public $queue = 'workflow';\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// app/Workflows/MyActivity.php\nclass MyActivity extends Activity\n{\n    public $connection = 'shared';\n    public $queue = 'activity';\n}\n")),(0,r.kt)("h3",{id:"8-ensure-microservices-define-empty-counterparts-for-workflow-and-activity-classes"},"8. Ensure microservices define empty counterparts for workflow and activity classes."),(0,r.kt)("h4",{id:"in-the-workflow-microservice"},"In the workflow microservice:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class MyWorkflow extends Workflow\n{\n    public $connection = 'shared';\n    public $queue = 'workflow';\n    public function execute($name)\n    {\n        yield ActivityStub::make(MyActivity::class, $name);\n    }\n}\nclass MyActivity extends Activity\n{\n    public $connection = 'shared';\n    public $queue = 'activity';\n}\n")),(0,r.kt)("h4",{id:"in-the-activity-microservice"},"In the activity microservice:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class MyWorkflow extends Workflow\n{\n    public $connection = 'shared';\n    public $queue = 'workflow';\n}\nclass MyActivity extends Activity\n{\n    public $connection = 'shared';\n    public $queue = 'activity';\n    public function execute($name)\n    {\n        return \"Hello, {$name}!\";\n    }\n}\n")),(0,r.kt)("h3",{id:"9-ensure-all-microservices-have-the-same-app_key-in-their-env-file"},"9. Ensure all microservices have the same ",(0,r.kt)("inlineCode",{parentName:"h3"},"APP_KEY")," in their ",(0,r.kt)("inlineCode",{parentName:"h3"},".env")," file."),(0,r.kt)("p",null,"This is crucial for proper job serialization across services."),(0,r.kt)("h3",{id:"10-run-queue-workers-in-each-microservice"},"10. Run queue workers in each microservice."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"php artisan queue:work shared --queue=workflow\nphp artisan queue:work shared --queue=activity\n")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"By following the steps above, you can ensure seamless interactions between microservices while maintaining modularity and scalability. Laravel Workflow takes care of the discovery and orchestration for you. \ud83d\ude80"),(0,r.kt)("p",null,"Thanks for reading!"))}d.isMDXComponent=!0}}]);