"use strict";(self.webpackChunklaravel_workflow=self.webpackChunklaravel_workflow||[]).push([[5327],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),g=a,h=c["".concat(s,".").concat(g)]||c[g]||m[g]||o;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3452:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={slug:"automating-qa-with-playwright-and-laravel-workflow",title:"Automating QA with Playwright and Laravel Workflow",authors:{name:"Richard",title:"Core Team",url:"https://github.com/rmcdaniel",image_url:"https://github.com/rmcdaniel.png"},tags:["playwright","workflow","automation","qa","testing"]},l=void 0,i={permalink:"/blog/automating-qa-with-playwright-and-laravel-workflow",editUrl:"https://github.com/laravel-workflow/laravel-workflow.github.io/edit/main/blog/2025-02-07-automating-qa-with-playwright-and-laravel-workflow.md",source:"@site/blog/2025-02-07-automating-qa-with-playwright-and-laravel-workflow.md",title:"Automating QA with Playwright and Laravel Workflow",description:"captionless image",date:"2025-02-07T00:00:00.000Z",formattedDate:"February 7, 2025",tags:[{label:"playwright",permalink:"/blog/tags/playwright"},{label:"workflow",permalink:"/blog/tags/workflow"},{label:"automation",permalink:"/blog/tags/automation"},{label:"qa",permalink:"/blog/tags/qa"},{label:"testing",permalink:"/blog/tags/testing"}],readingTime:3.715,hasTruncateMarker:!1,authors:[{name:"Richard",title:"Core Team",url:"https://github.com/rmcdaniel",image_url:"https://github.com/rmcdaniel.png",imageURL:"https://github.com/rmcdaniel.png"}],frontMatter:{slug:"automating-qa-with-playwright-and-laravel-workflow",title:"Automating QA with Playwright and Laravel Workflow",authors:{name:"Richard",title:"Core Team",url:"https://github.com/rmcdaniel",image_url:"https://github.com/rmcdaniel.png",imageURL:"https://github.com/rmcdaniel.png"},tags:["playwright","workflow","automation","qa","testing"]},nextItem:{title:"Extending Laravel Workflow to Support Spatie Laravel Tags",permalink:"/blog/extending-laravel-workflow-to-support-spatie-laravel-tags"}},s={authorsImageUrls:[void 0]},p=[{value:"\ud83d\ude80 Try It Out in a GitHub Codespace",id:"-try-it-out-in-a-github-codespace",level:2},{value:"\ud83d\udd17 <strong>Next Steps</strong>",id:"-next-steps",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*b6eXVs5J3aRNzYAiqnS9Vw.png",alt:"captionless image"})),(0,a.kt)("p",null,"Have you ever spent hours tracking down a frontend bug that only happens in production? When working with web applications, debugging frontend issues can be challenging. Console errors and unexpected UI behaviors often require careful inspection and reproducible test cases. Wouldn\u2019t it be great if you could automate this process, capture errors, and even record a video of the session for later analysis?"),(0,a.kt)("p",null,"With ",(0,a.kt)("strong",{parentName:"p"},"Playwright")," and ",(0,a.kt)("strong",{parentName:"p"},"Laravel Workflow"),", you can achieve just that! In this post, I\u2019ll walk you through an automated workflow that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Loads a webpage and captures console errors."),(0,a.kt)("li",{parentName:"ul"},"Records a video of the session."),(0,a.kt)("li",{parentName:"ul"},"Converts the video to an MP4 format for easy sharing."),(0,a.kt)("li",{parentName:"ul"},"Runs seamlessly in a ",(0,a.kt)("strong",{parentName:"li"},"GitHub Codespace"),".")),(0,a.kt)("h1",{id:"the-stack"},"The Stack"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Playwright"),": A powerful browser automation tool for testing web applications."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Laravel Workflow"),": A durable workflow engine for handling long-running, distributed processes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"FFmpeg"),": Used to convert Playwright\u2019s WebM recordings to MP4 format.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2AcR_sLHGToBWQx-SCSPHA.png",alt:"captionless image"})),(0,a.kt)("h1",{id:"1-capturing-errors-and-video-with-playwright"},"1. Capturing Errors and Video with Playwright"),(0,a.kt)("p",null,"The Playwright script automates a browser session, navigates to a given URL, and logs any console errors. It also records a video of the entire session."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\nimport path from 'path';\nimport fs from 'fs';\n\n(async () => {\n    const url = process.argv[2];\n    const videoDir = path.resolve('./videos');\n\n    if (!fs.existsSync(videoDir)) {\n        fs.mkdirSync(videoDir, { recursive: true });\n    }\n\n    const browser = await chromium.launch({ args: ['--no-sandbox'] });\n    const context = await browser.newContext({\n        recordVideo: { dir: videoDir }\n    });\n\n    const page = await context.newPage();\n\n    let errors = [];\n\n    page.on('console', msg => {\n        if (msg.type() === 'error') {\n            errors.push(msg.text());\n        }\n    });\n\n    try {\n        await page.goto(url, { waitUntil: 'networkidle', timeout: 10000 });\n    } catch (error) {\n        errors.push(`Page load error: ${error.message}`);\n    }\n    const video = await page.video().path();\n\n    await browser.close();\n\n    console.log(JSON.stringify({ errors, video }));\n})();\n")),(0,a.kt)("h1",{id:"2-running-the-workflow"},"2. Running the Workflow"),(0,a.kt)("p",null,"A Laravel console command (",(0,a.kt)("inlineCode",{parentName:"p"},"php artisan app:playwright"),") starts the workflow which:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Runs the Playwright script and collects errors."),(0,a.kt)("li",{parentName:"ul"},"Converts the video from ",(0,a.kt)("inlineCode",{parentName:"li"},".webm")," to ",(0,a.kt)("inlineCode",{parentName:"li"},".mp4")," using FFmpeg."),(0,a.kt)("li",{parentName:"ul"},"Returns the errors and the final video file path.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Console\\Commands;\n\nuse App\\Workflows\\Playwright\\CheckConsoleErrorsWorkflow;\nuse Illuminate\\Console\\Command;\nuse Workflow\\WorkflowStub;\n\nclass Playwright extends Command\n{\n    protected $signature = 'app:playwright';\n\n    protected $description = 'Runs a playwright workflow';\n\n    public function handle()\n    {\n        $workflow = WorkflowStub::make(CheckConsoleErrorsWorkflow::class);\n        $workflow->start('https://example.com');\n        while ($workflow->running());\n        $this->info($workflow->output()['mp4']);\n    }\n}\n")),(0,a.kt)("h1",{id:"3-the-workflow"},"3. The Workflow"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Workflows\\Playwright;\n\nuse Workflow\\ActivityStub;\nuse Workflow\\Workflow;\n\nclass CheckConsoleErrorsWorkflow extends Workflow\n{\n    public function execute(string $url)\n    {\n        $result = yield ActivityStub::make(CheckConsoleErrorsActivity::class, $url);\n\n        $mp4 = yield ActivityStub::make(ConvertVideoActivity::class, $result['video']);\n\n        return [\n            'errors' => $result['errors'],\n            'mp4' => $mp4,\n        ];\n    }\n}\n")),(0,a.kt)("h1",{id:"4-running-playwright"},"4. Running Playwright"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Workflows\\Playwright;\n\nuse Illuminate\\Support\\Facades\\Process;\nuse Workflow\\Activity;\n\nclass CheckConsoleErrorsActivity extends Activity\n{\n    public function execute(string $url)\n    {\n        $result = Process::run([\n            'node', base_path('playwright-script.js'), $url\n        ])->throw();\n\n        return json_decode($result->output(), true);\n    }\n}\n")),(0,a.kt)("h1",{id:"5-video-conversion-with-ffmpeg"},"5. Video Conversion with FFmpeg"),(0,a.kt)("p",null,"The Playwright recording is stored in WebM format, but we need an MP4 for wider compatibility. Laravel Workflow runs this process asynchronously."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Workflows\\Playwright;\n\nuse Illuminate\\Support\\Facades\\Process;\nuse Workflow\\Activity;\n\nclass ConvertVideoActivity extends Activity\n{\n    public function execute(string $webm)\n    {\n        $mp4 = str_replace('.webm', '.mp4', $webm);\n\n        Process::run([\n            'ffmpeg', '-i', $webm, '-c:v', 'libx264', '-preset', 'fast', '-crf', '23', '-c:a', 'aac', '-b:a', '128k', $mp4\n        ])->throw();\n\n        unlink($webm);\n\n        return $mp4;\n    }\n}\n")),(0,a.kt)("h2",{id:"-try-it-out-in-a-github-codespace"},"\ud83d\ude80 Try It Out in a GitHub Codespace"),(0,a.kt)("p",null,"You don\u2019t need to set up anything on your local machine. Everything is already configured in the ",(0,a.kt)("strong",{parentName:"p"},"Laravel Workflow Sample App"),"."),(0,a.kt)("h1",{id:"steps-to-run-the-playwright-workflow"},"Steps to Run the Playwright Workflow"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the ",(0,a.kt)("strong",{parentName:"li"},"Laravel Workflow Sample App")," on GitHub: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/laravel-workflow/sample-app"},"laravel-workflow/sample-app")),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u201cCreate codespace on main\u201d")," to start a pre-configured development environment.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*063hPvkrvDQP6gU-VYb0Ug.png",alt:"captionless image"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Once the Codespace is ready, run the following commands in the terminal:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan migrate\nphp artisan queue:work\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Then open a second terminal and run this command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan app:playwright\n")),(0,a.kt)("p",null,"That\u2019s it! The workflow will execute, capture console errors, record a video, and convert it to MP4. You can find the video in the videos folder. Take a look at the sample app\u2019s README.md for more information on other workflows and how to view the Waterline UI."),(0,a.kt)("h1",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"By integrating Playwright with Laravel Workflow, we\u2019ve automated frontend error detection and debugging. This setup allows teams to quickly identify and resolve issues, all while leveraging Laravel\u2019s queue system to run tasks asynchronously."),(0,a.kt)("h2",{id:"-next-steps"},"\ud83d\udd17 ",(0,a.kt)("strong",{parentName:"h2"},"Next Steps")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check out the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/laravel-workflow/laravel-workflow"},"Laravel Workflow repo")," on GitHub."),(0,a.kt)("li",{parentName:"ul"},"Explore more workflows in the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/laravel-workflow/sample-app"},"sample app"),"."),(0,a.kt)("li",{parentName:"ul"},"Join the community and share your workflows!")),(0,a.kt)("p",null,"Happy automating! \ud83d\ude80"))}c.isMDXComponent=!0}}]);