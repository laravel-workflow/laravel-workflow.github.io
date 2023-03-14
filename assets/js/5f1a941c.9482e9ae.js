"use strict";(self.webpackChunklaravel_workflow=self.webpackChunklaravel_workflow||[]).push([[5409],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),c=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return o.createElement(s.Provider,{value:r},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},w=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(t),w=n,d=f["".concat(s,".").concat(w)]||f[w]||p[w]||a;return t?o.createElement(d,l(l({ref:r},u),{},{components:t})):o.createElement(d,l({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=w;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[f]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}w.displayName="MDXCreateElement"},6985:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=t(7462),n=(t(7294),t(3905));const a={sidebar_position:7},l="Child Workflows",i={unversionedId:"features/child-workflows",id:"features/child-workflows",title:"Child Workflows",description:"It's often necessary to break down complex processes into smaller, more manageable units. Child workflows provide a way to encapsulate a sub-process within a parent workflow. This allows you to create hierarchical and modular structures for your workflows, making them more organized and maintainable.",source:"@site/docs/features/child-workflows.md",sourceDirName:"features",slug:"/features/child-workflows",permalink:"/docs/features/child-workflows",draft:!1,editUrl:"https://github.com/laravel-workflow/laravel-workflow.github.io/edit/main/docs/features/child-workflows.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Concurrency",permalink:"/docs/features/concurrency"},next:{title:"Configuration",permalink:"/docs/category/configuration"}},s={},c=[],u={toc:c};function f(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"child-workflows"},"Child Workflows"),(0,n.kt)("p",null,"It's often necessary to break down complex processes into smaller, more manageable units. Child workflows provide a way to encapsulate a sub-process within a parent workflow. This allows you to create hierarchical and modular structures for your workflows, making them more organized and maintainable."),(0,n.kt)("p",null,"A child workflow is just like any other workflow. The only difference is how it's invoked within the parent workflow, using ",(0,n.kt)("inlineCode",{parentName:"p"},"ChildWorkflowStub::make()"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"use Workflow\\ChildWorkflowStub;\nuse Workflow\\Workflow;\n\nclass ParentWorkflow extends Workflow\n{\n    public function execute()\n    {\n        $childResult = yield ChildWorkflowStub::make(ChildWorkflow::class);\n    }\n}\n")))}f.isMDXComponent=!0}}]);