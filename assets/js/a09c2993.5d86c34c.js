"use strict";(self.webpackChunklaravel_workflow=self.webpackChunklaravel_workflow||[]).push([[4128],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>w});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),f=o,w=u["".concat(s,".").concat(f)]||u[f]||p[f]||n;return a?r.createElement(w,i(i({ref:t},c),{},{components:a})):r.createElement(w,i({ref:t},c))}));function w(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<n;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},8495:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var r=a(7462),o=(a(7294),a(3905));const n={sidebar_position:1},i="Introduction",l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"What is Laravel Workflow?",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",draft:!1,editUrl:"https://github.com/laravel-workflow/laravel-workflow.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/docs/installation"}},s={},d=[{value:"What is Laravel Workflow?",id:"what-is-laravel-workflow",level:2},{value:"Why use Laravel Workflow?",id:"why-use-laravel-workflow",level:2},{value:"Features and Benefits",id:"features-and-benefits",level:2}],c={toc:d};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("h2",{id:"what-is-laravel-workflow"},"What is Laravel Workflow?"),(0,o.kt)("p",null,"Laravel Workflow is a durable workflow engine that allows developers to write long running persistent distributed workflows (orchestrations) in PHP powered by Laravel Queues. It provides a simple and intuitive way to define complex asynchronous processes, such as data pipelines and microservices, as a sequence of activities that run in parallel or in series."),(0,o.kt)("p",null,"Laravel Workflow is built on top of Laravel, the popular PHP web framework, and uses its queue system and database layer to store and manage workflow data and state. It is designed to be scalable, reliable, and easy to use, with a focus on simplicity and maintainability."),(0,o.kt)("h2",{id:"why-use-laravel-workflow"},"Why use Laravel Workflow?"),(0,o.kt)("p",null,"There are several reasons why developers might choose to use Laravel Workflow for their workflow management needs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Laravel Workflow is built on top of Laravel, which means it has access to all the features and capabilities of Laravel, such as Eloquent ORM, events, jobs, and more. This makes it a natural fit for Laravel developers and allows them to leverage their existing Laravel knowledge and skills.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Laravel Workflow is designed to be simple and intuitive to use, with a clean and straightforward API and conventions. This makes it easy for developers to get started and quickly build complex workflows without having to spend a lot of time learning a new framework or language.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Laravel Workflow is highly scalable and reliable, thanks to its use of Laravel queues and the ability to run workflows on multiple workers. This means that it can handle large workloads and high traffic without sacrificing performance or stability.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Laravel Workflow is open source and actively maintained, with a growing community of contributors and users. This means that developers can easily get help and support, share their experiences and knowledge, and contribute to the development of the framework."))),(0,o.kt)("p",null,"Compared to the built-in queues, Laravel Workflow allows for more complex and dynamic control over the execution of jobs, such as branching and looping, and provides a way to monitor the progress and status of the workflow as a whole. Unlike job chaining and batching, which are designed to execute a fixed set of jobs in a predetermined sequence, Laravel Workflow also allows for more flexible and adaptable execution."),(0,o.kt)("h2",{id:"features-and-benefits"},"Features and Benefits"),(0,o.kt)("p",null,"Laravel Workflow offers a wide range of features and benefits that make it a powerful and flexible workflow management solution:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Easy to define workflows: Laravel Workflow allows developers to define workflows as a sequence of activities that run in parallel or in series. This is done using a simple and intuitive syntax, with clear conventions and a clean API.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Easy to define activities: Laravel Workflow provides a base ",(0,o.kt)("inlineCode",{parentName:"p"},"Activity")," class that developers can extend to define their own activities. This class provides methods for executing the activity, handling errors and retries, and communicating with the workflow.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Scalable and reliable: Laravel Workflow uses Laravel queues and a database to store and manage workflow data and state. This allows it to scale horizontally and handle large workloads without sacrificing performance or reliability.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Idempotent and deterministic: Laravel Workflow enforces determinism and idempotency in the workflow and activity classes. This means that workflows and activities always produce the same result, regardless of the number of times they are executed, and are not affected by external factors such as network delays or clock skews.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open source and community-driven: Laravel Workflow is an open source project, released under the MIT license. It is actively maintained and developed by a growing community of contributors and users, who share their experiences and knowledge and contribute to the development of the project."))))}u.isMDXComponent=!0}}]);