"use strict";(self.webpackChunklaravel_workflow=self.webpackChunklaravel_workflow||[]).push([[8727],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(r),p=a,f=h["".concat(l,".").concat(p)]||h[p]||d[p]||n;return r?i.createElement(f,o(o({ref:t},u),{},{components:r})):i.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5496:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=r(7462),a=(r(7294),r(3905));const n={sidebar_position:10},o="How It Works",s={unversionedId:"how-it-works",id:"how-it-works",title:"How It Works",description:"Laravel Workflow is a library that uses Laravel's queued jobs and event sourced persistence to create durable coroutines.",source:"@site/docs/how-it-works.md",sourceDirName:".",slug:"/how-it-works",permalink:"/docs/how-it-works",draft:!1,editUrl:"https://github.com/laravel-workflow/laravel-workflow.github.io/edit/main/docs/how-it-works.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Failures and Recovery",permalink:"/docs/failures-and-recovery"},next:{title:"Monitoring",permalink:"/docs/monitoring"}},l={},c=[{value:"Queues",id:"queues",level:2},{value:"Event Sourcing",id:"event-sourcing",level:2},{value:"Coroutines",id:"coroutines",level:2},{value:"Activities",id:"activities",level:2},{value:"Promises",id:"promises",level:2},{value:"Example",id:"example",level:2},{value:"Sequence Diagram",id:"sequence-diagram",level:2},{value:"Summary",id:"summary",level:2}],u={toc:c};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-it-works"},"How It Works"),(0,a.kt)("p",null,"Laravel Workflow is a library that uses Laravel's queued jobs and event sourced persistence to create durable coroutines."),(0,a.kt)("h2",{id:"queues"},"Queues"),(0,a.kt)("p",null,"Queued jobs are background processes that are scheduled to run at a later time. Laravel supports running queues via Amazon SQS, Redis, or even a relational database. Workflows and activities are both queued jobs but each behaves a little differently. A workflow will be dispatched mutliple times during normal operation. A workflow runs, dispatches one or more activities and then exits again until the activities are completed. An activity will only execute once during normal operation, as it will only be retried in the case of an error."),(0,a.kt)("h2",{id:"event-sourcing"},"Event Sourcing"),(0,a.kt)("p",null,"Event sourcing is a way to build up the current state from a sequence of saved events rather than saving the state directly. This has several benefits, such as providing a complete history of the execution events which can be used to resume a workflow if the server it is running on crashes."),(0,a.kt)("h2",{id:"coroutines"},"Coroutines"),(0,a.kt)("p",null,"Coroutines are functions that allow execution to be suspended and resumed by returning control to the calling function. In PHP, this is done using the yield keyword inside a generator. A generator is typically invoked by calling the ",(0,a.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/generator.current.php"},(0,a.kt)("inlineCode",{parentName:"a"},"Generator::current()"))," method. This will execute the generator up to the first yield and then control will be returned to the caller."),(0,a.kt)("p",null,"In Laravel Workflow, the execute() method of a workflow class is a ",(0,a.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/language.generators.syntax.php"},"generator"),". It works by yielding each activity. This allows the workflow to first check if the activity has already successfully completed. If so, the cached result is pulled from the event store and returned instead of running the activity a second time. If the activity hasn't been successfully completed before, it will queue the activity to run. The workflow is then able to suspend execution until the activity completes or fails."),(0,a.kt)("h2",{id:"activities"},"Activities"),(0,a.kt)("p",null,"By calling multiple activities, a workflow can orchestrate the results between each of the activities. The execution of the workflow and the activities it yields are interleaved, with the workflow yielding an activity, suspending execution until the activity completes, and then continuing execution from where it left off."),(0,a.kt)("p",null,"If a workflow fails, the events leading up to the failure are replayed to rebuild the current state. This allows the workflow to pick up where it left off, with the same inputs and outputs as before, ensuring determinism."),(0,a.kt)("h2",{id:"promises"},"Promises"),(0,a.kt)("p",null,"Promises are used to represent the result of an asynchronous operation, such as an activity. The yield keyword suspends execution until the promise is fulfilled or rejected. This allows the workflow to wait for an activity to complete before continuing execution."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Workflow\\ActivityStub;\nuse Workflow\\Workflow;\n\nclass MyWorkflow extends Workflow\n{\n    public function execute()\n    {\n        return [\n            yield ActivityStub::make(TestActivity::class),\n            yield ActivityStub::make(TestOtherActivity::class),\n            yield ActivityStub::all([\n                ActivityStub::make(TestParallelActivity::class),\n                ActivityStub::make(TestParallelOtherActivity::class),\n            ]),\n        ];\n    }\n}\n")),(0,a.kt)("h2",{id:"sequence-diagram"},"Sequence Diagram"),(0,a.kt)("p",null,"This sequence diagram shows how a Laravel Workflow progresses through a series of activities, both serial and parallel."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1130888/206589649-8fc0044d-8089-45a7-a30f-e1bcbb5115cd.png",alt:"mermaid-diagram-2022-12-08-173913"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The workflow starts by getting dispatched as a queued job."),(0,a.kt)("li",{parentName:"ol"},"The first activity, TestActivity, is then dispatched as a queued job. The workflow job then exits. Once TestActivity has completed, it saves the result to the database and returns control to the workflow by dispatching it again."),(0,a.kt)("li",{parentName:"ol"},"At this point, the workflow enters the event sourcing replay loop. This is where it goes back to the database and looks at the event stream to rebuild the current state. This is necessary because the workflow is not a long running process. The workflow exits while any activities are running and then is dispatched again after completion."),(0,a.kt)("li",{parentName:"ol"},"Once the event stream has been replayed, the workflow continues to the next activity, TestOtherActivity, and starts it by dispatching it as a queued job. Again, once TestOtherActivity has completed, it saves the result to the database and returns control to the workflow by dispatching it as a queued job."),(0,a.kt)("li",{parentName:"ol"},"The workflow then enters the event sourcing replay loop again, rebuilding the current state from the event stream."),(0,a.kt)("li",{parentName:"ol"},"Next, the workflow starts two parallel activities, TestParallelActivity and TestOtherParallelActivity. Both activities are dispatched. Once they have completed, they save the results to the database and return control to the workflow."),(0,a.kt)("li",{parentName:"ol"},"Finally, the workflow enters the event sourcing replay loop one last time to rebuild the current state from the event stream. This completes the execution of the workflow.")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"The sequence diagram illustrates the workflow starting with the TestActivity and then the TestOtherActivity being executed in series. After both activities complete, the workflow replayed the events in order to rebuild the current state. This process is necessary in order to ensure that the workflow can be resumed after a crash or other interruption."),(0,a.kt)("p",null,"The need for determinism comes into play when the events are replayed. In order for the workflow to rebuild the correct state, the code for each activity must produce the same result when run multiple times with the same inputs. This means that activities should avoid using things like random numbers (unless using a side effect) or dates, as these will produce different results each time they are run."),(0,a.kt)("p",null,"The need for idempotency comes into play when an API fails to return a response even though it has actually completed successfully. For example, if an activity charges a customer and is not idempotent, rerunning it after a a failed response could result in the customer being charged twice. To avoid this, activities should be designed to be idempotent."))}h.isMDXComponent=!0}}]);