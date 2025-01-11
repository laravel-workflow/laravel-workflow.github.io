"use strict";(self.webpackChunklaravel_workflow=self.webpackChunklaravel_workflow||[]).push([[863],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=i,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2121:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:1},a="Overview",s={unversionedId:"constraints/overview",id:"constraints/overview",title:"Overview",description:"The determinism and idempotency constraints for workflows and activities are important for ensuring the reliability and correctness of the overall system.",source:"@site/docs/constraints/overview.md",sourceDirName:"constraints",slug:"/constraints/overview",permalink:"/docs/constraints/overview",draft:!1,editUrl:"https://github.com/laravel-workflow/laravel-workflow.github.io/edit/main/docs/constraints/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Constraints",permalink:"/docs/category/constraints"},next:{title:"Workflow Constraints",permalink:"/docs/constraints/workflow-constraints"}},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The determinism and idempotency constraints for workflows and activities are important for ensuring the reliability and correctness of the overall system."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Determinism means that given the same inputs, a workflow or activity will always produce the same outputs. This is important because it allows the system to avoid running the same workflow or activity multiple times, which can be both inefficient and error-prone.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Idempotency means that running a workflow or activity multiple times has the same effect as running it once. This is important because it allows the system to retry failed workflows or activities without causing unintended side-effects.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Event sourcing is a way to persist the state of a system by storing a sequence of events rather than the current state directly. In the context of a Laravel Workflow, this means that each activity in the workflow is represented as an event in the event stream. When the workflow is started, the engine reads the event stream and replays the events in order to rebuild the current state of the workflow."))),(0,i.kt)("p",null,"The determinism and idempotency constraints are necessary because the workflow engine may need to replay the same event multiple times. If the code that is executed during the replay is not deterministic, it may produce different results each time it is run. This would cause the workflow engine to lose track of the current state of the workflow, leading to incorrect results."),(0,i.kt)("p",null,"Additionally, since the events may be replayed multiple times, it is important that the code within an activity is idempotent. This means that running the code multiple times with the same input should produce the same result as simply running it once. If the code is not idempotent, it may produce unintended side effects when it is replayed."),(0,i.kt)("p",null,"Overall, the determinism and idempotency constraints help ensure that the workflow engine is able to accurately rebuild the current state of the workflow from the event stream and produce the correct results. They also make it easier to debug and troubleshoot problems, as the system always behaves in a predictable and repeatable way."))}p.isMDXComponent=!0}}]);