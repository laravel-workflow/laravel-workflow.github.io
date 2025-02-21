"use strict";(self.webpackChunklaravel_workflow=self.webpackChunklaravel_workflow||[]).push([[3697],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,g=u["".concat(s,".").concat(m)]||u[m]||h[m]||i;return a?n.createElement(g,r(r({ref:t},p),{},{components:a})):n.createElement(g,r({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2812:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const i={slug:"saga-pattern-and-laravel-workflow",title:"Saga Pattern and Laravel Workflow",authors:{name:"Richard",title:"Core Team",url:"https://github.com/rmcdaniel",image_url:"https://github.com/rmcdaniel.png"},tags:["sagas","microservices"]},r=void 0,l={permalink:"/blog/saga-pattern-and-laravel-workflow",editUrl:"https://github.com/laravel-workflow/laravel-workflow.github.io/edit/main/blog/2023-05-21-saga-pattern-and-laravel-workflow.md",source:"@site/blog/2023-05-21-saga-pattern-and-laravel-workflow.md",title:"Saga Pattern and Laravel Workflow",description:"Suppose we are working on a Laravel application that offers trip booking. A typical trip booking involves several steps such as:",date:"2023-05-21T00:00:00.000Z",formattedDate:"May 21, 2023",tags:[{label:"sagas",permalink:"/blog/tags/sagas"},{label:"microservices",permalink:"/blog/tags/microservices"}],readingTime:4.09,hasTruncateMarker:!1,authors:[{name:"Richard",title:"Core Team",url:"https://github.com/rmcdaniel",image_url:"https://github.com/rmcdaniel.png",imageURL:"https://github.com/rmcdaniel.png"}],frontMatter:{slug:"saga-pattern-and-laravel-workflow",title:"Saga Pattern and Laravel Workflow",authors:{name:"Richard",title:"Core Team",url:"https://github.com/rmcdaniel",image_url:"https://github.com/rmcdaniel.png",imageURL:"https://github.com/rmcdaniel.png"},tags:["sagas","microservices"]},prevItem:{title:"Microservice Communication with Laravel Workflow",permalink:"/blog/microservice-communication-with-laravel-workflow"},nextItem:{title:"Combining Laravel Workflow and State Machines",permalink:"/blog/combining-laravel-workflow-and-state-machines"}},s={authorsImageUrls:[void 0]},c=[{value:"Workflow Implementation",id:"workflow-implementation",level:2},{value:"Adding Compensations",id:"adding-compensations",level:2},{value:"Executing the Compensation Strategy",id:"executing-the-compensation-strategy",level:2},{value:"Testing the Workflow",id:"testing-the-workflow",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Suppose we are working on a Laravel application that offers trip booking. A typical trip booking involves several steps such as:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Booking a flight."),(0,o.kt)("li",{parentName:"ol"},"Booking a hotel."),(0,o.kt)("li",{parentName:"ol"},"Booking a rental car.")),(0,o.kt)("p",null,"Our customers expect an all-or-nothing transaction \u2014 it doesn\u2019t make sense to book a hotel without a flight. Now imagine each of these booking steps being represented by a distinct API."),(0,o.kt)("p",null,"Together, these steps form a distributed transaction spanning multiple services and databases. For a successful booking, all three APIs must accomplish their individual local transactions. If any step fails, the preceding successful transactions need to be reversed in an orderly fashion. With money and bookings at stake, we can\u2019t merely erase prior transactions \u2014 we need an immutable record of attempts and failures. Thus, we should compile a list of compensatory actions for execution in the event of a failure."),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To follow this tutorial, you should:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set up a local development environment for Laravel Workflow applications in PHP or use the sample app in a GitHub ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/laravel-workflow/sample-app"},"codespace"),"."),(0,o.kt)("li",{parentName:"ol"},"Familiarize yourself with the basics of starting a Laravel Workflow project by reviewing the ",(0,o.kt)("a",{parentName:"li",href:"https://laravel-workflow.com/docs/installation"},"documentation"),"."),(0,o.kt)("li",{parentName:"ol"},"Review the ",(0,o.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/data/saga.html"},"Saga architecture pattern"),".")),(0,o.kt)("p",null,"Sagas are an established design pattern for managing complex, long-running operations:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A Saga manages transactions using a sequence of local transactions."),(0,o.kt)("li",{parentName:"ol"},"A local transaction is a work unit performed by a saga participant (a microservice)."),(0,o.kt)("li",{parentName:"ol"},"Each operation in the Saga can be reversed by a compensatory transaction."),(0,o.kt)("li",{parentName:"ol"},"The Saga pattern assures that all operations are either completed successfully or the corresponding compensation transactions are run to reverse any completed work.")),(0,o.kt)("p",null,"Laravel Workflow provides inherent support for the Saga pattern, simplifying the process of handling rollbacks and executing compensatory transactions."),(0,o.kt)("h1",{id:"booking-saga-flow"},"Booking Saga Flow"),(0,o.kt)("p",null,"We will visualize the Saga pattern for our trip booking scenario with a diagram."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/1*WD1_N0mIdeDtIPycKQj6yQ.png",alt:"trip booking saga"})),(0,o.kt)("h2",{id:"workflow-implementation"},"Workflow Implementation"),(0,o.kt)("p",null,"We\u2019ll begin by creating a high-level flow of our trip booking process, which we\u2019ll name ",(0,o.kt)("inlineCode",{parentName:"p"},"BookingSagaWorkflow"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"class BookingSagaWorkflow extends Workflow  \n{  \n    public function execute()  \n    {  \n    }  \n}\n")),(0,o.kt)("p",null,"Next, we\u2019ll imbue our saga with logic, by adding booking steps:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"class BookingSagaWorkflow extends Workflow  \n{  \n    public function execute()  \n    {  \n        try {  \n            $flightId = yield ActivityStub::make(BookFlightActivity::class);  \n            $hotelId = yield ActivityStub::make(BookHotelActivity::class);  \n            $carId = yield ActivityStub::make(BookRentalCarActivity::class);  \n        } catch (Throwable $th) {  \n        }  \n    }  \n}\n")),(0,o.kt)("p",null,"Everything inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"try"),' block is our "happy path". If any steps within this distributed transaction fail, we move into the ',(0,o.kt)("inlineCode",{parentName:"p"},"catch")," block and execute compensations."),(0,o.kt)("h2",{id:"adding-compensations"},"Adding Compensations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"class BookingSagaWorkflow extends Workflow  \n{  \n    public function execute()  \n    {  \n        try {  \n            $flightId = yield ActivityStub::make(BookFlightActivity::class);  \n            $this->addCompensation(fn () => ActivityStub::make(CancelFlightActivity::class, $flightId));  \n  \n            $hotelId = yield ActivityStub::make(BookHotelActivity::class);  \n            $this->addCompensation(fn () => ActivityStub::make(CancelHotelActivity::class, $hotelId));  \n  \n            $carId = yield ActivityStub::make(BookRentalCarActivity::class);  \n            $this->addCompensation(fn () => ActivityStub::make(CancelRentalCarActivity::class, $carId));  \n        } catch (Throwable $th) {  \n        }  \n    }  \n}\n")),(0,o.kt)("p",null,"In the above code, we sequentially book a flight, a hotel, and a car. We use the ",(0,o.kt)("inlineCode",{parentName:"p"},"$this->addCompensation()")," method to add a compensation, providing a callable to reverse a distributed transaction."),(0,o.kt)("h2",{id:"executing-the-compensation-strategy"},"Executing the Compensation Strategy"),(0,o.kt)("p",null,"With the above setup, we can finalize our saga and populate the ",(0,o.kt)("inlineCode",{parentName:"p"},"catch")," block:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"class BookingSagaWorkflow extends Workflow  \n{  \n    public function execute()  \n    {  \n        try {  \n            $flightId = yield ActivityStub::make(BookFlightActivity::class);  \n            $this->addCompensation(fn () => ActivityStub::make(CancelFlightActivity::class, $flightId));  \n  \n            $hotelId = yield ActivityStub::make(BookHotelActivity::class);  \n            $this->addCompensation(fn () => ActivityStub::make(CancelHotelActivity::class, $hotelId));  \n  \n            $carId = yield ActivityStub::make(BookRentalCarActivity::class);  \n            $this->addCompensation(fn () => ActivityStub::make(CancelRentalCarActivity::class, $carId));  \n        } catch (Throwable $th) {  \n            yield from $this->compensate();  \n            throw $th;  \n        }  \n    }  \n}\n")),(0,o.kt)("p",null,"Within the ",(0,o.kt)("inlineCode",{parentName:"p"},"catch")," block, we call the ",(0,o.kt)("inlineCode",{parentName:"p"},"compensate()")," method, which triggers the compensation strategy and executes all previously registered compensation callbacks. Once done, we rethrow the exception for debugging."),(0,o.kt)("p",null,"By default, compensations execute sequentially. To run them in parallel, use ",(0,o.kt)("inlineCode",{parentName:"p"},"$this->setParallelCompensation(true)"),". To ignore exceptions that occur inside compensation activities while keeping them sequential, use ",(0,o.kt)("inlineCode",{parentName:"p"},"$this->setContinueWithError(true)")," instead."),(0,o.kt)("h2",{id:"testing-the-workflow"},"Testing the Workflow"),(0,o.kt)("p",null,"Let\u2019s run this workflow with simulated failures in each activity to fully understand the process."),(0,o.kt)("p",null,"First, we run the workflow normally to see the sequence of bookings: flight, then hotel, then rental car."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/1*3IgEjKzHK8Fpp-uumr4dIw.png",alt:"booking saga with no errors"})),(0,o.kt)("p",null,"Next, we simulate an error with the flight booking activity. Since no bookings were made, the workflow logs the exception and fails."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/1*ZuDAFa_q0l2-PT6PhRguaw.png",alt:"booking saga error with flight"})),(0,o.kt)("p",null,"Then, we simulate an error with the hotel booking activity. The flight is booked successfully, but when the hotel booking fails, the workflow cancels the flight."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/1*_OwO5PUOLFqcLfd38gNpEQ.png",alt:"booking saga error with hotel"})),(0,o.kt)("p",null,"Finally, we simulate an error with the rental car booking. The flight and hotel are booked successfully, but when the rental car booking fails, the workflow cancels the hotel first and then the flight."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/1*3qR9GKQH-YtghwPK_x9wUQ.png",alt:"booking saga error with rental car"})),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"In this tutorial, we implemented the Saga architecture pattern for distributed transactions in a microservices-based application using Laravel Workflow. Writing Sagas can be complex, but Laravel Workflow takes care of the difficult parts such as handling errors and retries, and invoking compensatory transactions, allowing us to focus on the details of our application."))}u.isMDXComponent=!0}}]);