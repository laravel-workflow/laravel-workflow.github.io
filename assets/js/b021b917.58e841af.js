"use strict";(self.webpackChunklaravel_workflow=self.webpackChunklaravel_workflow||[]).push([[2529],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=c(r),p=n,d=u["".concat(l,".").concat(p)]||u[p]||w[p]||a;return r?o.createElement(d,i(i({ref:t},f),{},{components:r})):o.createElement(d,i({ref:t},f))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9531:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:3},i="Starting Workflows",s={unversionedId:"defining-workflows/starting-workflows",id:"defining-workflows/starting-workflows",title:"Starting Workflows",description:"To start a workflow, you must first create a workflow instance and then call the start() method on it. The workflow instance has several methods that can be used to interact with the workflow, such as id() to get the workflow's unique identifier, status() or running() to get the current status of the workflow, and output() to get the output data produced by the workflow.",source:"@site/docs/defining-workflows/starting-workflows.md",sourceDirName:"defining-workflows",slug:"/defining-workflows/starting-workflows",permalink:"/docs/defining-workflows/starting-workflows",draft:!1,editUrl:"https://github.com/laravel-workflow/laravel-workflow.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/defining-workflows/starting-workflows.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Activities",permalink:"/docs/defining-workflows/activities"},next:{title:"Workfow Status",permalink:"/docs/defining-workflows/workflow-status"}},l={},c=[],f={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"starting-workflows"},"Starting Workflows"),(0,n.kt)("p",null,"To start a workflow, you must first create a workflow instance and then call the ",(0,n.kt)("inlineCode",{parentName:"p"},"start()")," method on it. The workflow instance has several methods that can be used to interact with the workflow, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"id()")," to get the workflow's unique identifier, ",(0,n.kt)("inlineCode",{parentName:"p"},"status()")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"running()")," to get the current status of the workflow, and ",(0,n.kt)("inlineCode",{parentName:"p"},"output()")," to get the output data produced by the workflow."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"use Workflow\\WorkflowStub;\n\n$workflow = WorkflowStub::make(MyWorkflow::class);\n$workflow->start();\n")),(0,n.kt)("p",null,"Once a workflow has been started, it will be executed asynchronously by a queue worker. The ",(0,n.kt)("inlineCode",{parentName:"p"},"start()")," method returns immediately and does not block the current request."))}u.isMDXComponent=!0}}]);