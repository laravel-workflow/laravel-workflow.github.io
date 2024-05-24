"use strict";(self.webpackChunklaravel_workflow=self.webpackChunklaravel_workflow||[]).push([[2884],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return r?t.createElement(m,a(a({ref:n},u),{},{components:r})):t.createElement(m,a({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9599:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=r(7462),o=(r(7294),r(3905));const i={sidebar_position:5},a="Microservices",s={unversionedId:"configuration/microservices",id:"configuration/microservices",title:"Microservices",description:"Workflows can span across multiple Laravel applications. For instance, a workflow might exist in one microservice while its corresponding activity resides in another.",source:"@site/docs/configuration/microservices.md",sourceDirName:"configuration",slug:"/configuration/microservices",permalink:"/docs/configuration/microservices",draft:!1,editUrl:"https://github.com/laravel-workflow/laravel-workflow.github.io/edit/main/docs/configuration/microservices.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Database Connection",permalink:"/docs/configuration/database-connection"},next:{title:"Pruning Workflows",permalink:"/docs/configuration/pruning-workflows"}},c={},l=[],u={toc:l};function p(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"microservices"},"Microservices"),(0,o.kt)("p",null,"Workflows can span across multiple Laravel applications. For instance, a workflow might exist in one microservice while its corresponding activity resides in another."),(0,o.kt)("p",null,"To enable seamless communication between Laravel applications, set up a shared database and queue connection across all microservices."),(0,o.kt)("p",null,"All microservices must have identical ",(0,o.kt)("inlineCode",{parentName:"p"},"APP_KEY")," values in their ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," files for proper serialization and deserialization from the queue."),(0,o.kt)("p",null,"Below is a guide on configuring a shared MySQL database and Redis connection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// config/database.php\n\n'connections' => [\n    'shared' => [\n        'driver' => 'mysql',\n        'url' => env('SHARED_DATABASE_URL'),\n        'host' => env('SHARED_DB_HOST', '127.0.0.1'),\n        'port' => env('SHARED_DB_PORT', '3306'),\n        'database' => env('SHARED_DB_DATABASE', 'forge'),\n        'username' => env('SHARED_DB_USERNAME', 'forge'),\n        'password' => env('SHARED_DB_PASSWORD', ''),\n        'unix_socket' => env('SHARED_DB_SOCKET', ''),\n        'charset' => 'utf8mb4',\n        'collation' => 'utf8mb4_unicode_ci',\n        'prefix' => '',\n        'prefix_indexes' => true,\n        'strict' => true,\n        'engine' => null,\n        'options' => extension_loaded('pdo_mysql') ? array_filter([\n            PDO::MYSQL_ATTR_SSL_CA => env('SHARED_MYSQL_ATTR_SSL_CA'),\n        ]) : [],\n    ],\n],\n\n'redis' => [\n    'shared' => [\n        'url' => env('SHARED_REDIS_URL'),\n        'host' => env('SHARED_REDIS_HOST', '127.0.0.1'),\n        'username' => env('SHARED_REDIS_USERNAME'),\n        'password' => env('SHARED_REDIS_PASSWORD'),\n        'port' => env('SHARED_REDIS_PORT', '6379'),\n        'database' => env('SHARED_REDIS_DB', '0'),\n    ],\n],\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// config/queue.php\n\n'connections' => [\n    'shared' => [\n        'driver' => 'redis',\n        'connection' => 'shared',\n        'queue' => env('SHARED_REDIS_QUEUE', 'default'),\n        'retry_after' => 90,\n        'block_for' => null,\n        'after_commit' => false,\n    ],\n],\n")),(0,o.kt)("p",null,"For consistency in the workflow database schema across services, designate only one microservice to publish and run the Laravel Workflow migrations."),(0,o.kt)("p",null,"Modify the workflow migrations to use the shared database connection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// database/migrations/2022_01_01_000000_create_workflows_table.php\n\nfinal class CreateWorkflowsTable extends Migration\n{\n    protected $connection = 'shared';\n")),(0,o.kt)("p",null,"In each microservice, extend the workflow models to use the shared connection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// app\\Models\\StoredWorkflow.php\n\nclass StoredWorkflow extends BaseStoredWorkflow\n{\n    protected $connection = 'shared';\n")),(0,o.kt)("p",null,"Publish the Laravel Workflow config file and update it to use your custom models."),(0,o.kt)("p",null,"Update your workflow and activity classes to use the shared queue connection. Assign unique queue names to each microservice for differentiation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// App: workflow microservice\n\nuse Workflow\\ActivityStub;\nuse Workflow\\Workflow;\n\nclass MyWorkflow extends Workflow\n{\n    public $connection = 'shared';\n    public $queue = 'workflow';\n\n    public function execute($name)\n    {\n        $result = yield ActivityStub::make(MyActivity::class, $name);\n        return $result;\n    }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// App: activity microservice\n\nuse Workflow\\Activity;\n\nclass MyActivity extends Activity\n{\n    public $connection = 'shared';\n    public $queue = 'activity';\n\n    public function execute($name)\n    {\n        return \"Hello, {$name}!\";\n    }\n}\n")),(0,o.kt)("p",null,"It's crucial to maintain empty duplicate classes in every microservice, ensuring they share the same namespace and class name. This precaution avoids potential exceptions due to class discrepancies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// App: workflow microservice\n\nuse Workflow\\Activity;\n\nclass MyActivity extends Activity\n{\n    public $connection = 'shared';\n    public $queue = 'activity';\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// App: activity microservice\n\nuse Workflow\\ActivityStub;\nuse Workflow\\Workflow;\n\nclass MyWorkflow extends Workflow\n{\n    public $connection = 'shared';\n    public $queue = 'workflow';\n}\n")),(0,o.kt)("p",null,"Note: The workflow code should exclusively reside in the workflow microservice, and the activity code should only be found in the activity microservice. The code isn't duplicated; identical class structures are merely maintained across all microservices."),(0,o.kt)("p",null,"To run queue workers in each microservice, use the shared connection and the respective queue names:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan queue:work shared --queue=workflow\nphp artisan queue:work shared --queue=activity\n")),(0,o.kt)("p",null,"In this setup, the workflow queue worker runs in the workflow microservice, while the activity queue worker runs in the activity microservice."))}p.isMDXComponent=!0}}]);