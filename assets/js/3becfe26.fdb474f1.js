"use strict";(self.webpackChunklaravel_workflow=self.webpackChunklaravel_workflow||[]).push([[1674],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>d});var r=i(7294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,r,l=function(e,t){if(null==e)return{};var i,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var s=r.createContext({}),f=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=f(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var i=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=f(i),k=l,d=c["".concat(s,".").concat(k)]||c[k]||u[k]||n;return i?r.createElement(d,o(o({ref:t},p),{},{components:i})):r.createElement(d,o({ref:t},p))}));function d(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=i.length,o=new Array(n);o[0]=k;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:l,o[1]=a;for(var f=2;f<n;f++)o[f]=i[f];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}k.displayName="MDXCreateElement"},6099:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>a,toc:()=>f});var r=i(7462),l=(i(7294),i(3905));const n={sidebar_position:10},o="Events",a={unversionedId:"features/events",id:"features/events",title:"Events",description:"In Laravel Workflow, events are dispatched at various stages of workflow and activity execution to notify of progress, completion, or failures. These events can be used for logging, metrics collection, or any custom application logic.",source:"@site/docs/features/events.md",sourceDirName:"features",slug:"/features/events",permalink:"/docs/features/events",draft:!1,editUrl:"https://github.com/laravel-workflow/laravel-workflow.github.io/edit/main/docs/features/events.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Sagas",permalink:"/docs/features/sagas"},next:{title:"Configuration",permalink:"/docs/category/configuration"}},s={},f=[{value:"Workflow Events",id:"workflow-events",level:2},{value:"WorkflowEventsWorkflowStarted",id:"workfloweventsworkflowstarted",level:3},{value:"WorkflowEventsWorkflowCompleted",id:"workfloweventsworkflowcompleted",level:3},{value:"WorkflowEventsWorkflowFailed",id:"workfloweventsworkflowfailed",level:3},{value:"Activity Events",id:"activity-events",level:2},{value:"WorkflowEventsActivityStarted",id:"workfloweventsactivitystarted",level:3},{value:"WorkflowEventsActivityCompleted",id:"workfloweventsactivitycompleted",level:3},{value:"WorkflowEventsActivityFailed",id:"workfloweventsactivityfailed",level:3},{value:"Lifecycle",id:"lifecycle",level:2}],p={toc:f};function c(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"events"},"Events"),(0,l.kt)("p",null,"In Laravel Workflow, events are dispatched at various stages of workflow and activity execution to notify of progress, completion, or failures. These events can be used for logging, metrics collection, or any custom application logic."),(0,l.kt)("h2",{id:"workflow-events"},"Workflow Events"),(0,l.kt)("h3",{id:"workfloweventsworkflowstarted"},"Workflow\\Events\\WorkflowStarted"),(0,l.kt)("p",null,"Triggered when a workflow starts its execution."),(0,l.kt)("p",null,"Attributes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"workflowId"),": Unique identifier for the workflow."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"class"),": Class name of the workflow."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"arguments"),": Arguments passed to the workflow."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timestamp"),": Timestamp of when the workflow started.")),(0,l.kt)("h3",{id:"workfloweventsworkflowcompleted"},"Workflow\\Events\\WorkflowCompleted"),(0,l.kt)("p",null,"Triggered when a workflow successfully completes."),(0,l.kt)("p",null,"Attributes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"workflowId"),": Unique identifier for the workflow."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"output"),": The result returned by the workflow."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timestamp"),": Timestamp of when the workflow completed.")),(0,l.kt)("h3",{id:"workfloweventsworkflowfailed"},"Workflow\\Events\\WorkflowFailed"),(0,l.kt)("p",null,"Triggered when a workflow fails during its execution."),(0,l.kt)("p",null,"Attributes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"workflowId"),": Unique identifier for the workflow."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"output"),": Error message or exception details."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timestamp"),": Timestamp of when the workflow failed.")),(0,l.kt)("h2",{id:"activity-events"},"Activity Events"),(0,l.kt)("h3",{id:"workfloweventsactivitystarted"},"Workflow\\Events\\ActivityStarted"),(0,l.kt)("p",null,"Triggered when an activity starts its execution."),(0,l.kt)("p",null,"Attributes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"workflowId"),": The ID of the parent workflow."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"activityId"),": Unique identifier for the activity."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"class"),": Class name of the activity."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"index"),": The position of the activity within the workflow."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"arguments"),": Arguments passed to the activity."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timestamp"),": Timestamp of when the activity started.")),(0,l.kt)("h3",{id:"workfloweventsactivitycompleted"},"Workflow\\Events\\ActivityCompleted"),(0,l.kt)("p",null,"Triggered when an activity successfully completes."),(0,l.kt)("p",null,"Attributes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"activityId"),": Unique identifier for the activity."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"output"),": The result returned by the activity."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timestamp"),": Timestamp of when the activity completed.")),(0,l.kt)("h3",{id:"workfloweventsactivityfailed"},"Workflow\\Events\\ActivityFailed"),(0,l.kt)("p",null,"Triggered when an activity fails during execution."),(0,l.kt)("p",null,"Attributes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"activityId"),": Unique identifier for the activity."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"output"),": Error message or exception details."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timestamp"),": Timestamp of when the activity failed.")),(0,l.kt)("h2",{id:"lifecycle"},"Lifecycle"),(0,l.kt)("p",null,"This is a typical workflow lifecycle:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Workflow\\Events\\WorkflowStarted\nWorkflow\\Events\\ActivityStarted\nWorkflow\\Events\\ActivityCompleted\nWorkflow\\Events\\WorkflowCompleted\n")),(0,l.kt)("p",null,"This is a workflow lifecycle with a failed activity that recovers:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Workflow\\Events\\WorkflowStarted\nWorkflow\\Events\\ActivityStarted\nWorkflow\\Events\\ActivityFailed\nWorkflow\\Events\\ActivityStarted\nWorkflow\\Events\\ActivityCompleted\nWorkflow\\Events\\WorkflowCompleted\n")))}c.isMDXComponent=!0}}]);