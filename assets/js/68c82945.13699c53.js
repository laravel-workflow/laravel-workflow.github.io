"use strict";(self.webpackChunklaravel_workflow=self.webpackChunklaravel_workflow||[]).push([[3837],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},623:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4},i="Signal + Timer",l={unversionedId:"features/signal+timer",id:"features/signal+timer",title:"Signal + Timer",description:"In some cases, you may want to wait for a signal or for a timer to expire, whichever comes first. This can be achieved by using WorkflowStub::awaitWithTimeout($seconds, $callback).",source:"@site/docs/features/signal+timer.md",sourceDirName:"features",slug:"/features/signal+timer",permalink:"/docs/features/signal+timer",draft:!1,editUrl:"https://github.com/laravel-workflow/laravel-workflow.github.io/edit/main/docs/features/signal+timer.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Timers",permalink:"/docs/features/timers"},next:{title:"Heartbeats",permalink:"/docs/features/heartbeats"}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"signal--timer"},"Signal + Timer"),(0,a.kt)("p",null,"In some cases, you may want to wait for a signal or for a timer to expire, whichever comes first. This can be achieved by using ",(0,a.kt)("inlineCode",{parentName:"p"},"WorkflowStub::awaitWithTimeout($seconds, $callback)"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Workflow\\SignalMethod;\nuse Workflow\\Workflow;\nuse Workflow\\WorkflowStub;\n\nclass MyWorkflow extends Workflow\n{\n    private bool $ready = false;\n\n    #[SignalMethod]\n    public function setReady($ready)\n    {\n        $this->ready = $ready\n    }\n\n    public function execute()\n    {\n        // Wait for 5 minutes or $ready = true, whichever comes first\n        yield WorkflowStub::awaitWithTimeout(300, fn () => $this->ready);\n    }\n}\n")),(0,a.kt)("p",null,"The workflow will reach the call to ",(0,a.kt)("inlineCode",{parentName:"p"},"WorkflowStub::awaitWithTimeout()")," and then hibernate until either some external code signals the workflow like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$workflow->setReady();\n")),(0,a.kt)("p",null,"Or, if the specified timeout is reached, the workflow will continue without the signal. The return value is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the signal was received before the timeout, or ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," if the timeout was reached without receiving the signal."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important:")," The ",(0,a.kt)("inlineCode",{parentName:"p"},"awaitWithTimeout()")," method should only be used in a workflow, and not in an activity."))}p.isMDXComponent=!0}}]);