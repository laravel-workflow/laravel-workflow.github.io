"use strict";(self.webpackChunklaravel_workflow=self.webpackChunklaravel_workflow||[]).push([[1168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||y[f]||r;return n?i.createElement(m,l(l({ref:t},u),{},{components:n})):i.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:8},l="Concurrency",o={unversionedId:"features/concurrency",id:"features/concurrency",title:"Concurrency",description:"Activities can be executed in series or in parallel. In either case, you start by using ActivityStub::all() method to wait for a group of activities to complete in parallel.",source:"@site/docs/features/concurrency.md",sourceDirName:"features",slug:"/features/concurrency",permalink:"/docs/features/concurrency",draft:!1,editUrl:"https://github.com/laravel-workflow/laravel-workflow.github.io/edit/main/docs/features/concurrency.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Child Workflows",permalink:"/docs/features/child-workflows"},next:{title:"Sagas",permalink:"/docs/features/sagas"}},c={},s=[{value:"Series",id:"series",level:2},{value:"Parallel",id:"parallel",level:2},{value:"Mix and Match",id:"mix-and-match",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"concurrency"},"Concurrency"),(0,a.kt)("p",null,"Activities can be executed in series or in parallel. In either case, you start by using ",(0,a.kt)("inlineCode",{parentName:"p"},"ActivityStub::make()")," to create a new instance of an activity and return a promise that represents the execution of that activity. The activity will immediately begin executing in the background. You can then ",(0,a.kt)("inlineCode",{parentName:"p"},"yield")," this promise to pause the execution of the workflow and wait for the result of the activity, or pass the promise into the ",(0,a.kt)("inlineCode",{parentName:"p"},"ActivityStub::all()")," method to wait for a group of activities to complete in parallel."),(0,a.kt)("h2",{id:"series"},"Series"),(0,a.kt)("p",null,"This example will execute 3 activities in series, waiting for the completion of each activity before continuing to the next one."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Workflow\\ActivityStub;\nuse Workflow\\Workflow;\n\nclass MyWorkflow extends Workflow\n{\n    public function execute()\n    {\n        return [\n            yield ActivityStub::make(MyActivity1::class),\n            yield ActivityStub::make(MyActivity1::class),\n            yield ActivityStub::make(MyActivity1::class),\n        ];\n    }\n}\n")),(0,a.kt)("h2",{id:"parallel"},"Parallel"),(0,a.kt)("p",null,"This example will execute 3 activities in parallel, waiting for the completion of all activities and collecting the results."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Workflow\\ActivityStub;\nuse Workflow\\Workflow;\n\nclass MyWorkflow extends Workflow\n{\n    public function execute()\n    {\n        return yield ActivityStub::all([\n            ActivityStub::make(MyActivity1::class),\n            ActivityStub::make(MyActivity2::class),\n            ActivityStub::make(MyActivity3::class),\n        ]);\n    }\n}\n")),(0,a.kt)("p",null,"The main difference between the serial example and the parallel execution example is the number of ",(0,a.kt)("inlineCode",{parentName:"p"},"yield")," statements. In the serial example, there are 3 ",(0,a.kt)("inlineCode",{parentName:"p"},"yield")," statements, one for each activity. This means that the workflow will pause and wait for each activity to complete before continuing to the next one. In the parallel example, there is only 1 ",(0,a.kt)("inlineCode",{parentName:"p"},"yield")," statement, which wraps all of the activities in a call to ActivityStub::all(). This means that all of the activities will be executed in parallel, and the workflow will pause and wait for all of them to complete as a group before continuing."),(0,a.kt)("h2",{id:"mix-and-match"},"Mix and Match"),(0,a.kt)("p",null,"You can also mix serial and parallel executions as desired."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Workflow\\ActivityStub;\nuse Workflow\\Workflow;\n\nclass MyWorkflow extends Workflow\n{\n    public function execute()\n    {\n        return [\n            yield ActivityStub::make(MyActivity1::class),\n            yield ActivityStub::all([\n                 ActivityStub::async(fn () => [\n                    yield ActivityStub::make(MyActivity2::class),\n                    yield ActivityStub::make(MyActivity3::class),\n                ]),\n                ActivityStub::make(MyActivity4::class),\n                ActivityStub::make(MyActivity5::class),\n            ]),\n            yield ActivityStub::make(MyActivity6::class),\n        ];\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://mermaid.ink/img/pako:eNp9kctugzAQRX8lmjUBbPOyK1WqlC6zalcVGwcbsAQYwRCVRvx7DZUS0UW88txzNc8bFFZpEFANsq8Pn6eXvDsczvNbgeZqcCbH4-sjos9g9AzGe0h3kO0h28FkD6NnMP4PwYNWD600yo14W805YK1bnYNwX6VLOTWYQ94tziontB9zV4DAYdIeTL2SqE9GuuW0IErZjHf1XRm0w11srFTahTfAud_2aUZ0KQvblaZa9WlonFwj9qMIghX7lcF6uviFbYPRqFoOWF95EiQ0ySRlOkmZjBlTxYXwrKQRKVUaEiphWTzoZfdl7aMrvfVz_jvmdtPNs1b-BhH7PORxxBNGGM1SHnkwg0iZHxFOU-YKxoxy6vL-bEmJH26POBxymvFk-QWh37PQ?type=png",alt:"workflow"})),(0,a.kt)("p",null,"Activity 1 will execute and complete before any other activities start. Activities 2 and 3 will execute in series, waiting for each to complete one after another before continuing. At the same time, activities 4 and 5 will execute together in parallel and only when they all complete will execution continue. Finally, activity 6 executes last after all others have completed."))}p.isMDXComponent=!0}}]);