import{P as C}from"./prism-markup-templating.9eb49231.js";import{r as T,o,c as i,n as w,a as t,b as s,t as a,d as x,F as g,e as b,f as c,g as L,h as D,u as E}from"./index.2008eee0.js";import{_ as S}from"./_plugin-vue_export-helper.cdc0426e.js";import"./_commonjsHelpers.4e997714.js";const d={__name:"clipboardButton",props:["dataToCopy"],setup(m){const e=T(!1);function l(r){navigator.clipboard.writeText(r),e.value=!0,setTimeout(()=>{e.value=!1},1500)}return(r,n)=>(o(),i("i",{class:w(["fad clipboard-icon",e.value?"fa-clipboard-check text-lime-600 animate-bounce opacity-100":"fa-clipboard text-brand-midblue opacity-50"]),title:"Copy to clipboard",onClick:n[0]||(n[0]=u=>l(m.dataToCopy))},null,2))}},U={id:"Headings",class:"component-item"},q=x('<h3>Headings</h3><h4 class="adx-markup-label">Default Canvas Headings</h4><p>Default heading styles for native course builds in Canvas.</p><div class="w-3/5 m-auto"><h1 class="my-4">Heading 1</h1><p><em>Note: <code>H1</code> elements are not used in MyUni content; Canvas page headers \u2013 unless overridden by CIDILabs \u2013 are automatically level 1 headers and content starts at <code>H2</code>.</em></p><h2 class="my-10">Heading 2</h2><h3 class="my-10">Heading 3</h3><h4 class="my-10">Heading 4</h4><h5 class="my-10">Heading 5</h5><h6 class="my-10">Heading 6</h6></div>',4),P={class:"flex"},A={__name:"headings",setup(m){const e=`<!-- Headings HTML Usage -->
`,l=`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`;return(r,n)=>(o(),i("div",U,[q,t("div",P,[s(d,{"data-to-copy":l}),t("pre",{class:"w-full"},[t("code",{class:"language-markup"},a(e)+a(l))])])]))}},I={id:"Asides",class:"component-item"},B=t("h3",null,"Asides",-1),R={class:"adx-markup-label"},F=["innerHTML"],O={class:"flex"},N={class:"w-full"},j={class:"language-markup"},V={__name:"asides",setup(m){const e=[{name:"Keypoints Aside",comment:`<!-- Keypoints Aside HTML Usage -->
`,aside:`<aside class="adx keypoints">
  <header>
    <h3>Keypoints</h3>
  </header>
  <p>There are some really important things here:</p>
  <ul>
    <li>There's the first thing.</li>
    <li>Then the second thing.</li>
    <li>And finally the last thing.</li>
  </ul>
</aside>`,paragraph:`
<p>Hi there whats happening hope things are going well. I'm baby chartreuse cold-pressed green juice church-key, mixtape enamel pin migas shoreditch. Biodiesel af flannel, fixie literally kitsch slow-carb sriracha post-ironic. Live-edge celiac skateboard pork belly. Whatever pug poke hell of wolf franzen squid. Try-hard shoreditch ramps, church-key franzen artisan occupy chia copper mug lumbersexual. Tousled chambray artisan whatever next level brunch umami semiotics bespoke woke enamel pin typewriter pinterest. Live-edge celiac skateboard pork belly. Whatever pug poke hell of wolf franzen squid. Try-hard shoreditch ramps, church-key franzen artisan occupy chia copper mug lumbersexual. Tousled chambray artisan whatever next level brunch umami semiotics bespoke woke enamel pin typewriter pinterest.</p>`},{name:"Left-aligned Aside",comment:`<!-- Left Aside HTML Usage -->
`,aside:`<aside class="adx left">
  <p>There are some really important things here:</p>
  <ul>
    <li>There's the first thing.</li>
    <li>Then the second thing.</li>
    <li>And finally the last thing.</li>
  </ul>
</aside>`,paragraph:`
<p>Hi there whats happening hope things are going well. I'm baby chartreuse cold-pressed green juice church-key, mixtape enamel pin migas shoreditch. Biodiesel af flannel, fixie literally kitsch slow-carb sriracha post-ironic. Live-edge celiac skateboard pork belly. Whatever pug poke hell of wolf franzen squid. Try-hard shoreditch ramps, church-key franzen artisan occupy chia copper mug lumbersexual. Tousled chambray artisan whatever next level brunch umami semiotics bespoke woke enamel pin typewriter pinterest. Live-edge celiac skateboard pork belly. Whatever pug poke hell of wolf franzen squid. Try-hard shoreditch ramps, church-key franzen artisan occupy chia copper mug lumbersexual. Tousled chambray artisan whatever next level brunch umami semiotics bespoke woke enamel pin typewriter pinterest.</p>`}];return(l,r)=>(o(),i("div",I,[B,(o(),i(g,null,b(e,(n,u)=>t("div",null,[t("h4",R,a(n.name),1),t("div",{innerHTML:n.aside+n.paragraph},null,8,F),(o(!0),i(g,null,b(3-u,f=>(o(),i("br"))),256)),t("div",O,[s(d,{"data-to-copy":n.aside},null,8,["data-to-copy"]),t("pre",N,[t("code",j,a(n.comment)+a(n.aside)+a(n.paragraph),1)])])])),64))]))}},y={__name:"clipboardCode",props:["dataToCopy"],setup(m){const e=T(!1);function l(r){navigator.clipboard.writeText(r),e.value=!0,setTimeout(()=>{e.value=!1},1500)}return(r,n)=>(o(),i("code",{class:"cursor-pointer hover:text-brand-midblue",title:"Copy to clipboard",onClick:n[0]||(n[0]=u=>l(m.dataToCopy))},[c(a(m.dataToCopy)+" ",1),t("i",{class:w(["far",e.value?"fa-clipboard-check animate-bounce text-lime-600":"fa-clipboard"])},null,2)]))}},W={id:"Directions",class:"component-item"},G=t("h3",null,"Directions",-1),z=t("h4",{class:"adx-markup-label"},"Base Direction",-1),Y=t("div",{class:"adx-direction"},[t("p",null,[t("strong",null,"This is a Direction Box")]),t("p",null,[c("Directions are used to "),t("em",null,"direct"),c(" students to take action or do something external to the current content flow inside the LMS.")])],-1),X={class:"flex"},J={class:"adx-markup-label"},Q={__name:"directions",setup(m){const e=`<!-- Base Direction HTML Usage -->
`,l=`<div class="adx-direction">
  <p><strong>This is a Direction Box</strong></p>
  <p>Directions are used to <em>direct</em> students to take action or do something external to the current content flow inside the LMS.</p>
</div>`,r=[{type:"Direction Variants",intro:"Use the following direction boxes to markup specific directions for students. These are callouts to complete specific tasks external to the page and flow of the lesson.",items:[{title:"This is an Assessment Direction",textStart:"Use the",class:"adx-direction-assessment",textEnd:"class to define information on the page about assessment tasks. This would specifically include directions to complete the task itself, or elements of the task."},{title:"This is a Discussion Direction",textStart:"Use the",class:"adx-direction-discussion",textEnd:"class to alert students to tasks that relate to discussions. This maybe located on another page - but if context information is suitable, i.e. the information in this lesson is the logical point to carry out and contribute to the discussion, then use this direction."},{title:"This is an Extra Direction",textStart:"Use the",class:"adx-direction-extra",textEnd:`class to alert students to extra tasks. These are not required but could be seen as extensions beyond the content and activities required in this course. This may be useful for "parking" concepts and ideas that students aren't required to complete but may be useful in the longer term.`},{title:"This is an Interactive Direction",textStart:"Use the",class:"adx-direction-interactive",textEnd:"class to alert students to interactive activities and ways to engage with other students. Can be used for synchronous sessions on Zoom or on other tools."},{title:"This is an Investigate Direction",textStart:"Use the",class:"adx-direction-investigate",textEnd:"class to alert students to tasks that ask them to investigate, search and find information. Useful for research tasks like accessing databases, papers or articles."},{title:"This is a Listen Direction",textStart:"Use the",class:"adx-direction-listen",textEnd:"class to alert students to audio they need to listen to. This could include a podcast or other audio recording."},{title:"This is a Practice Direction",textStart:"Use the",class:"adx-direction-practice",textEnd:"class to alert students to activities where they practice skills, tasks and processes."},{title:"This is a Reading Direction",textStart:"Use the",class:"adx-direction-reading",textEnd:"class to alert students to reading tasks. This could include reading texts, articles and papers."},{title:"This is a Reflect Direction",textStart:"Use the",class:"adx-direction-reflect",textEnd:"class to alert students to reflection tasks."},{title:"This is a Watch Direction",textStart:"Use the",class:"adx-direction-watch",textEnd:"class to alert students to videos or presentations they need to watch. This can be used for any video that can't be embedded or if the video is not required viewing, but part of an extension task."},{title:"This is a Write Direction",textStart:"Use the",class:"adx-direction-write",textEnd:"class to alert students to writing tasks."},{title:"This is a University Direction",textStart:"Use the",class:"adx-direction-university",textEnd:"class to define information on the page about University services and engagement tasks."}]},{type:"Programme Directions",intro:"These are used to highlight activities or information specific to each programme for the shared courses in OUA.",items:[{title:"This is an HSM Direction",textStart:"Use the",class:"adx-direction-hsm",textEnd:"class to define information on the page about this programme."},{title:"This is an IB Direction",textStart:"Use the",class:"adx-direction-ib",textEnd:"class to define information on the page about this programme."}]}];return(n,u)=>(o(),i("div",W,[G,z,Y,t("div",X,[s(d,{"data-to-copy":l}),t("pre",{class:"w-full"},[t("code",{class:"language-markup"},a(e)+a(l))])]),(o(),i(g,null,b(r,f=>t("div",null,[t("h4",J,a(f.type),1),t("p",null,a(f.intro),1),(o(!0),i(g,null,b(f.items,h=>(o(),i("div",{class:w(h.class)},[t("p",null,[t("strong",null,a(h.title),1)]),t("p",null,[c(a(h.textStart)+" ",1),s(y,{"data-to-copy":h.class},null,8,["data-to-copy"]),c(" "+a(h.textEnd),1)])],2))),256))])),64))]))}},K={id:"Cues",class:"component-item"},Z=t("h3",null,"Cues",-1),tt={class:"adx-markup-label"},et={class:"flex"},at={class:"adx-markup-label"},st={class:"adx-cue-reference"},nt=t("code",null,"ul",-1),ot=t("code",null,"p",-1),it=x('<p>Albanese, A (Minister for Infrastructure, Transport, Regional Development and Local Government) 2009, Fairer compensation for air travellers, media release, 29 January, Department of Infrastructure, Transport, Regional Development and Local Government, Canberra, viewed 30 January 2009, <a href="http://www.minister.infrastructure.gov.au/releases/2009" target="_blank" rel="noreferrer noopener">www.minister.infrastructure.gov.au/releases/2009</a>. </p><ul><li><p>Albanese, A (Minister for Infrastructure, Transport, Regional Development and Local Government) 2009, Fairer compensation for air travellers, media release, 29 January, Department of Infrastructure, Transport, Regional Development and Local Government, Canberra, viewed 30 January 2009, <a href="http://www.minister.infrastructure.gov.au/releases/2009" target="_blank" rel="noreferrer noopener">www.minister.infrastructure.gov.au/releases/2009</a>.</p></li><li><p>Australian Government Publishing Service 1987, Commonwealth printing and publishing manual, 2nd edn, A.G.P.S., Canberra.</p></li><li><p>Australian Institute of Health and Welfare 2010, Child protection Australia 2008-09, Child welfare series no. 47. Cat. no. CWS 35, Australian Institute of Health and Welfare, Canberra, viewed 06 November 2012, <a href="https://www.aihw.gov.au/reports/child-protection/child-protection-australia-2008-09/contents/table-of-contents" target="_blank" rel="noreferrer noopener">www.aihw.gov.au/reports/child-protection/child-protection-australia-2008-09/contents/table-of-contents</a>.</p></li></ul>',2),lt={class:"adx-markup-label"},ct={__name:"cues",setup(m){const e={title:"Basic Cues",cues:[{class:"adx-cue",textStart:"This is a basic cue, with no border. This",textEnd:"is used as a low-tier hierarchy element and contains extra information inside the flow of the content on the page."},{class:"adx-cue-left",textStart:"This is a basic cue, with a border on the left. This",textEnd:"is used as a mid-tier hierarchy element inside the flow of content but can stand alone as a key point to draw the eye and interrupt the reading eyeline motion."},{class:"adx-cue-bordered",textStart:"This is a basic cue, with a border on the left and a surrounding border. This",textEnd:"is used as a top-tier hierarchy element to call extra attention to important information."}]},l=`<!-- Basic Cues HTML Usage -->
`,r=`<div class="adx-cue">
  <p>This is a basic cue, with no border. This is used as a low-tier hierarchy element and contains extra information inside the flow of the content on the page.</p>
</div>`,n={title:"Cue Variants",cues:[{class:"adx-cue-note",textStart:"The note cue should be used to call out information on a page without breaking the flow of the readers attention. Using the",textEnd:"cue should be used if there is useful content on the page - items that students should note down or could be marked with an N.B. (Nota Bene)."},{class:"adx-cue-case-study",textStart:"The case study cue should be used to call out the scaffolding text or context of a case study using the",textEnd:"cue should be used if there a case study layout on the page before the case study text content and then followed by a direction box with the appropriate call-to-action task."},{class:"adx-cue-example",textStart:"An example should use the",textEnd:"cue. This is a visual clue to an example and does not require a heading explaining that to a student, but should be evident in the text itself."},{class:"adx-cue-definition",textStart:"When providing a definition for a specific term or concept you should use the",textEnd:"cue. This will provide a visual cue to students that something important is being defined in the content."},{class:"adx-cue-phil-toolkit",textStart:"The",textEnd:'cue is there to call out content that is used to call out specific re-usable concepts in your "philosophical toolkit" used in the Introduction to Health Ethics course'},{class:"adx-cue-notification",textStart:"A notification should be used to notify the student of the information contained within the cue box. This might be to nudge students to complete certain tasks or activities, that there is an upcoming assessment or interactive session. The",textEnd:"cue is a subtle hint to students."},{class:"adx-cue-attention",textStart:"The",textEnd:"is a non-subtle cue that contains critical information that students must address or is of the utmost importance they take on. This might be useful to flag upcoming events, due dates, important tasks and reminders for students, or key content beyond simply assessment or course-related reasons (legal, safety, etc)."},{class:"adx-cue-content-warning",textStart:"The",textEnd:"is an obvious cue that contains a warning about possibly sensitive content. This might be used to warn students about content that may be upsetting or distressing, or content that may be triggering for students with a history of trauma."},{class:"adx-cue-summary",textStart:"The",textEnd:"cue is there to call out content that is a summary of prior content or learning. Use it to wrap up a lesson, module or course or to reintroduce content learnt earlier in the course or in a previous course."}]},u={title:"Direction Cues",cues:[{class:"adx-direction-cue-assessment",textStart:"The",textEnd:"cue is used to pair a direction box with a cue box. In this case, an Assessment direction box. The aim of this is to provide extra content to students to help them complete the task in the direction box."},{class:"adx-direction-cue-discussion",textStart:"The",textEnd:"cue is used to pair a direction box with a cue box. In this case, a Discussion direction box. The aim of this is to provide extra content to students to help them complete the task in the direction box."},{class:"adx-direction-cue-extra",textStart:"The",textEnd:"cue is used to pair a direction box with a cue box. In this case, an Extra direction box. The aim of this is to provide extra content to students to help them complete the task in the direction box."},{class:"adx-direction-cue-interactive",textStart:"The",textEnd:"cue is used to pair a direction box with a cue box. In this case, an Interactive direction box. The aim of this is to provide extra content to students to help them complete the task in the direction box."},{class:"adx-direction-cue-investigate",textStart:"The",textEnd:"cue is used to pair a direction box with a cue box. In this case, an Investigate direction box. The aim of this is to provide extra content to students to help them complete the task in the direction box."},{class:"adx-direction-cue-practice",textStart:"The",textEnd:"cue is used to pair a direction box with a cue box. In this case, a Practice direction box. The aim of this is to provide extra content to students to help them complete the task in the direction box."},{class:"adx-direction-cue-reading",textStart:"The",textEnd:"cue is used to pair a direction box with a cue box. In this case, a Reading direction box. The aim of this is to provide extra content to students to help them complete the task in the direction box."},{class:"adx-direction-cue-reflect",textStart:"The",textEnd:"cue is used to pair a direction box with a cue box. In this case, a Reflect direction box. The aim of this is to provide extra content to students to help them complete the task in the direction box."},{class:"adx-direction-cue-watch",textStart:"The",textEnd:"cue is used to pair a direction box with a cue box. In this case, a Watch direction box. The aim of this is to provide extra content to students to help them complete the task in the direction box."},{class:"adx-direction-cue-write",textStart:"The",textEnd:"cue is used to pair a direction box with a cue box. In this case, a Write direction box. The aim of this is to provide extra content to students to help them complete the task in the direction box."}]};return(f,h)=>(o(),i("div",K,[Z,t("h4",tt,a(e.title),1),(o(!0),i(g,null,b(e.cues,p=>(o(),i("div",{class:w(p.class)},[t("p",null,[c(a(p.textStart)+" ",1),s(y,{"data-to-copy":p.class},null,8,["data-to-copy"]),c(" "+a(p.textEnd),1)])],2))),256)),t("div",et,[s(d,{"data-to-copy":r}),t("pre",{class:"w-full"},[t("code",{class:"language-markup"},a(l)+a(r))])]),t("h4",at,a(n.title),1),(o(!0),i(g,null,b(n.cues,p=>(o(),i("div",{class:w(p.class)},[t("p",null,[c(a(p.textStart)+" ",1),s(y,{"data-to-copy":p.class},null,8,["data-to-copy"]),c(" "+a(p.textEnd),1)])],2))),256)),t("div",st,[t("p",null,[c("The "),s(y,{"data-to-copy":"adx-cue-reference"}),c(" cue is for a single or multiple references. These can be contained within a "),nt,c(" or as "),ot,c(". These are not resources for students to access, but rather to provide academic rigour to the content. Do not use this cue for readings or other student tasks. ")]),it]),t("h4",lt,a(u.title),1),(o(!0),i(g,null,b(u.cues,p=>(o(),i("div",{class:w(p.class)},[t("p",null,[c(a(p.textStart)+" ",1),s(y,{"data-to-copy":p.class},null,8,["data-to-copy"]),c(" "+a(p.textEnd),1)])],2))),256))]))}},k=""+new URL("persona.987c5b3c.jpg",import.meta.url).href,rt={id:"Personas",class:"component-item"},dt=t("h3",null,"Persona Boxes",-1),ut={class:"adx-markup-label"},ht=t("div",{class:"persona-image"},[t("img",{src:k,alt:"",class:"persona"})],-1),pt=t("div",{class:"persona-content"},[t("h5",null,"Persona Name"),t("p",null,"Testing content!")],-1),mt=[ht,pt],gt={class:"flex"},bt={class:"w-full"},ft={class:"language-markup"},_t={__name:"personas",setup(m){const e=[{name:"base",class:"adx-cue persona"},{name:"blue",class:"adx-cue persona-brand-midblue"},{name:"purple",class:"adx-cue persona-question"},{name:"orange",class:"adx-cue persona-warning"},{name:"green",class:"adx-cue persona-positive"}];function l(r){return'<div class="'+r+`">
  <div class="persona-image">
    <img src="image.png" alt="" class="persona">
  </div>
  <div class="persona-content">
    <h5>Persona Name</h5>
    <p>Testing content!</p>
  </div>
</div>`}return(r,n)=>(o(),i("div",rt,[dt,(o(),i(g,null,b(e,u=>t("div",null,[t("h4",ut,a(u.name)+" Persona",1),t("div",{class:w(u.class)},mt,2),t("div",gt,[s(d,{"data-to-copy":l(u.class)},null,8,["data-to-copy"]),t("pre",bt,[t("code",ft,a(l(u.class)),1)])])])),64))]))}},xt={id:"Quotes",class:"component-item"},wt=t("h3",null,"Quotes",-1),vt={class:"adx-markup-label"},yt=t("p",null,"You probably haven't heard of them artisan tbh, scenester slow-carb ethical shabby chic semiotics. Pickled chartreuse helvetica live-edge skateboard viral, 90's keffiyeh tofu roof party authentic direct trade tattooed 8-bit.",-1),kt=t("cite",null,"Albert Einstein",-1),Tt=[yt,kt],$t={class:"flex"},St={class:"w-full"},Ht={class:"language-markup"},Mt={__name:"quotes",setup(m){const e=[{name:"Blockquote",class:""},{name:"Fancy Blockquote",class:"fancyquote"}];function l(r){return"<!-- "+e[r].name+` HTML Usage -->
<blockquote${e[r].class?' class="'+e[r].class+'"':""}>
  <p>You probably haven't heard of them artisan tbh, scenester slow-carb ethical shabby chic semiotics. Pickled chartreuse helvetica live-edge skateboard viral, 90's keffiyeh tofu roof party authentic direct trade tattooed 8-bit.</p>
  <cite>Albert Einstein</cite>
</blockquote>`}return(r,n)=>(o(),i("div",xt,[wt,(o(),i(g,null,b(e,(u,f)=>t("div",null,[t("h4",vt,a(u.name),1),t("blockquote",{class:w(u.class)},Tt,2),t("div",$t,[s(d,{"data-to-copy":l(f)},null,8,["data-to-copy"]),t("pre",St,[t("code",Ht,a(l(f)),1)])])])),64))]))}},Ct={id:"Lists",class:"component-item"},Lt=t("h3",null,"Lists",-1),Dt={class:"adx-markup-label"},Et=["innerHTML"],Ut={class:"flex"},qt={class:"w-full"},Pt={class:"language-markup"},At={__name:"lists",setup(m){const e=[{name:"Fancy Ordered List",comment:`<!-- Fancy ordered list HTML Usage -->
`,code:`<ol class="fancy-ol">
  <li>Gather your ingredients</li>
  <li>Pour all the ingreients into a bowl</li>
  <li>Stir and mix together</li>
  <li>Place into the over to cook</li>
  <li>Remove from the oven and eat</li>
  <li>Meditation cray snackwave raw denim thundercats banh mi. XOXO pour-over unicorn bushwick YOLO brunch. Flexitarian direct trade hammock cloud bread art party occupy. Slow-carb glossier literally thundercats truffaut, church-key quinoa tousled. Pour-over asymmetrical brooklyn narwhal, hell of waistcoat 8-bit irony.</li>
</ol>`},{name:"Step List",comment:`<!-- Step list HTML Usage -->
`,code:`<ul class="step-list">
  <li class="step-2">Gather your ingredients</li>
  <li>Pour all the ingreients into a bowl</li>
  <li>Stir and mix together</li>
  <li>Place into the over to cook</li>
  <li>Remove from the oven and eat</li>
  <li>Meditation cray snackwave raw denim thundercats banh mi. XOXO pour-over unicorn bushwick YOLO brunch. Flexitarian direct trade hammock cloud bread art party occupy. Slow-carb glossier literally thundercats truffaut, church-key quinoa tousled. Pour-over asymmetrical brooklyn narwhal, hell of waistcoat 8-bit irony.</li>
</ul>`}];return(l,r)=>(o(),i("div",Ct,[Lt,(o(),i(g,null,b(e,n=>t("div",null,[t("h4",Dt,a(n.name),1),t("div",{innerHTML:n.code},null,8,Et),t("div",Ut,[s(d,{"data-to-copy":n.code},null,8,["data-to-copy"]),t("pre",qt,[t("code",Pt,a(n.comment)+a(n.code),1)])])])),64))]))}},It={},Bt={id:"Definitions",class:"component-item"},Rt=x('<h3>Definitions &amp; Glossaries</h3><h4 class="adx-markup-label">Definition List</h4><dl><dt>Here is a term</dt><dd>Meditation cray snackwave raw denim thundercats banh mi. XOXO pour-over unicorn bushwick YOLO brunch. Flexitarian direct trade hammock cloud bread art party occupy. Slow-carb glossier literally thundercats truffaut, church-key quinoa tousled. Pour-over asymmetrical brooklyn narwhal, hell of waistcoat 8-bit irony.</dd><dt>Here is a term</dt><dd>Here is the information about that term.</dd><dt>Here is a term</dt><dd>Here is the information about that term.</dd><dt>Here is a term</dt><dd>Here is the information about that term.</dd></dl><h4 class="adx-markup-label">Glossary Tooltip</h4><div style="width:60%;margin:auto;"><p>A <span class="tooltip">glossary<span class="tooltiptext">A page in MyUni containing terms and definitions </span></span> will provide definitions for a <span class="tooltip">term<span class="tooltiptext">Definition text</span></span> inside a course content page.</p></div><p><em>Note: this depends on some JavaScript being added to the OUA/LEI Development/Alliance sub-accounts. This won&#39;t work in-course until that&#39;s been completed!</em></p><p>Glossary page needs to be created in the same course, using a definition list layout. A script will then get all of the terms and matching definitions and apply a tooltip to the content.</p><button class="adx-button brand-midblue"><a href="https://adelaide.atlassian.net/wiki/spaces/LMP/pages/83559842795/Guide+Adding+Glossaries+and+Tooltips" target="_blank" rel="noreferrer noopener">Read Confluence Guide <i class="fa fa-external-link"></i></a></button>',8),Ft=[Rt];function Ot(m,e){return o(),i("div",Bt,Ft)}const Nt=S(It,[["render",Ot]]),jt={id:"Buttons",class:"component-item"},Vt=t("h3",null,"Buttons",-1),Wt=t("p",null,[t("em",null,[c("Note: Canvas automatically strips out "),t("code",null,"button"),c(" elements, but the following styles can be applied to "),t("code",null,"a"),c(" tags to mimic the look and experience.")])],-1),Gt=t("h4",{class:"adx-markup-label"},"Base Buttons",-1),zt={class:"flex"},Yt=t("div",{class:"my-auto min-w-[175px]"},[t("button",{class:"adx-button w-full"},"base")],-1),Xt={class:"adx-cue w-full"},Jt=t("h4",{class:"adx-markup-label"},"Button Variations",-1),Qt=t("p",null,[c("To add colour, add the "),t("code",null,"colour"),c(" reference class.")],-1),Kt={class:"flex"},Zt={class:"my-auto min-w-[175px]"},te={class:"adx-cue w-full"},ee=x('<h4 class="adx-markup-label">Button groups</h4><p>Button groups can be made from an <code>ul</code> and <code>li</code> elements,</p><ul class="adx-button-group"><li class="adx-button brand-midblue">Click Me</li><li class="adx-button brand-midblue">Click Me</li><li class="adx-button brand-midblue">Click Me</li></ul>',3),ae={class:"flex"},se={class:"w-full"},ne={class:"language-markup"},oe=t("p",null,[c("Or from "),t("code",null,"divs"),c(" and "),t("code",null,"p"),c(" tags,")],-1),ie=t("div",{class:"adx-button-group"},[t("button",{class:"adx-button accent"},"Click Me"),t("button",{disabled:"",class:"adx-button complimentary disabled"},"You can't Click Me"),t("button",{class:"adx-button primary"},"Click Me")],-1),le={class:"flex"},ce={class:"w-full"},re={class:"language-markup"},de=t("div",{class:"adx-button-stack"},[t("p",{class:"adx-button brand-red"},"Click Me"),t("p",{class:"adx-button brand-red"},"Click Me"),t("p",{class:"adx-button brand-red"},"Click Me")],-1),ue={class:"flex"},he={class:"w-full"},pe={class:"language-markup"},me={__name:"buttons",setup(m){const e=["adx-button brand-red","adx-button primary","adx-button accent","adx-button complimentary","adx-button brand-midblue"],l={comment:`<!-- List button group HTML Usage -->
`,html:`<ul class="adx-button-group">
  <li class="adx-button brand-midblue">Click Me</li>
  <li class="adx-button brand-midblue">Click Me</li>
  <li class="adx-button brand-midblue">Click Me</li>
</ul>`},r={comment:`<!-- Div button group with disabled button HTML Usage -->
`,html:`<div class="adx-button-group">
  <button class="adx-button accent">Click Me</button>
  <button disabled class="adx-button complimentary disabled">You can't Click Me</button>
  <button class="adx-button primary">Click Me</button>
</div>`},n={comment:`<!-- Button stack HTML Usage -->
`,html:`<div class="adx-button-stack">
  <p class="adx-button brand-red">Click Me</p>
  <p class="adx-button brand-red">Click Me</p>
  <p class="adx-button brand-red">Click Me</p>
</div>`};return(u,f)=>(o(),i("div",jt,[Vt,Wt,Gt,t("div",zt,[Yt,t("div",Xt,[t("p",null,[c("Use HTML class "),s(y,{"data-to-copy":"adx-button"})])])]),Jt,Qt,(o(),i(g,null,b(e,h=>t("div",Kt,[t("div",Zt,[t("button",{class:w(["w-full",h])},a(h.split(" ")[1]),3)]),t("div",te,[t("p",null,[c("Use HTML class "),s(y,{"data-to-copy":h},null,8,["data-to-copy"])])])])),64)),ee,t("div",ae,[s(d,{"data-to-copy":l.html},null,8,["data-to-copy"]),t("pre",se,[t("code",ne,a(l.comment)+a(l.html),1)])]),oe,ie,t("div",le,[s(d,{"data-to-copy":r.html},null,8,["data-to-copy"]),t("pre",ce,[t("code",re,a(r.comment)+a(r.html),1)])]),t("p",null,[c("And you can arrange them in a stack using class "),s(y,{"data-to-copy":"adx-button-stack"}),c(" . ")]),de,t("div",ue,[s(d,{"data-to-copy":n.html},null,8,["data-to-copy"]),t("pre",he,[t("code",pe,a(n.comment)+a(n.html),1)])])]))}},ge={id:"Dividers",class:"component-item"},be=t("h3",null,"Dividers & Signposts",-1),fe={class:"adx-markup-label"},_e=["innerHTML"],xe={class:"flex"},we={class:"w-full"},ve={class:"language-markup"},ye={__name:"dividers",setup(m){const e=[{name:"Horizontal Rule",comment:`<!-- Horizontal rules HTML Usage -->
`,html:'<hr class="adx-gradient-brand-midblue">'},{name:"Subsection",comment:`<!-- Custom subsection navigation HTML Usage -->
`,html:`<nav>
  <ul class="adx-subsection">
    <li><a href="#">Section Name</a></li>
    <li><a href="#" data-counter="1.1">Sub-section Name</a></li>
  </ul>
</nav>`},{name:"Stepped Sequence",comment:`<!-- Stepped Sequence navigation element HTML Usage -->
`,html:`<nav class="adx-sequence">
  <ul class="">
    <li class="complete">Step 1</li>
    <li class="progress">Step 2</li>
    <li>Step 3</li>
    <li>Step 4</li>
    <li>Step 5</li>
  </ul>
</nav>`}];return(l,r)=>(o(),i("div",ge,[be,(o(),i(g,null,b(e,n=>t("div",null,[t("h4",fe,a(n.name),1),t("div",{innerHTML:n.html},null,8,_e),t("div",xe,[s(d,{"data-to-copy":n.html},null,8,["data-to-copy"]),t("pre",we,[t("code",ve,a(n.comment)+a(n.html),1)])])])),64))]))}},ke=""+new URL("spacex-unsplash.d9507b06.jpg",import.meta.url).href,Te=""+new URL("adam-miller-unsplash.18bc8982.jpg",import.meta.url).href,H=""+new URL("dog-unsplash.bc1e3ba7.jpg",import.meta.url).href,$e=""+new URL("brand-eg.9337999c.png",import.meta.url).href;const Se={id:"Images",class:"component-item"},He=t("h3",null,"Figures and Images",-1),Me=t("h4",{class:"adx-markup-label"},"Default landscape image set to 80%",-1),Ce=t("figure",{class:"w80",style:{margin:"auto","text-align":"center"}},[t("img",{src:ke,alt:"",class:"top kl_popup_image"}),t("figcaption",null,[t("strong",null,"Figure 1.1.1: "),c("This is one hell of a rocket with its width set to 80%."),t("br"),t("em",null,[c("Source: "),t("a",{href:"http://www.unsplash.com/",target:"_blank",class:"text-brand-midblue underline"},"http://www.unsplash.com/")])])],-1),Le={class:"flex"},De={class:"w-full"},Ee={class:"language-markup"},Ue=t("h4",{class:"adx-markup-label"},"Default portrait image set to 40%",-1),qe=t("figure",{class:"w40",style:{margin:"auto","text-align":"center"}},[t("img",{src:Te,alt:"",class:"top kl_popup_image"}),t("figcaption",null,[t("strong",null,"Figure 1.1.2:"),c(" Astronaut with its width set to 40%."),t("br"),t("em",null,[c("Source: "),t("a",{href:"http://www.unsplash.com/",target:"_blank",class:"text-brand-midblue underline"},"http://www.unsplash.com/")])])],-1),Pe={class:"flex"},Ae={class:"w-full"},Ie={class:"language-markup"},Be=x('<h4 class="adx-markup-label">Aside Left image</h4><div class="bs-container"><div class="bs-row"><div class="bs-col-md"><figure><img src="'+H+'" alt="" style="margin:auto;max-width:80%;" class="kl_popup_image"><figcaption><strong>Figure 1.1.3:</strong> Good doggo.<br><em>Source: <a href="http://www.unsplash.com/" target="_blank" class="text-brand-midblue underline">http://www.unsplash.com/</a></em></figcaption></figure></div><div class="bs-col-md-8"><p>I&#39;m baby fashion axe ugh try-hard meditation palo santo post-ironic sustainable lomo kombucha hashtag crucifix four loko roof party. Cliche schlitz meggings prism next level. Meditation drinking vinegar woke thundercats yr umami kogi crucifix succulents flexitarian fam. Normcore health goth hoodie, gluten-free kogi bushwick beard jean shorts cronut dreamcatcher knausgaard pop-up schlitz. Viral palo santo kinfolk flannel banjo. Helvetica ennui kickstarter hoodie 3 wolf moon neutra hell of plaid.</p></div></div></div>',2),Re={class:"flex"},Fe={class:"w-full"},Oe={class:"language-markup"},Ne=x('<h4 class="adx-markup-label">Aside Right image</h4><div class="bs-container"><div class="bs-row"><div class="bs-col-md-8"><p>I&#39;m baby fashion axe ugh try-hard meditation palo santo post-ironic sustainable lomo kombucha hashtag crucifix four loko roof party. Cliche schlitz meggings prism next level. Meditation drinking vinegar woke thundercats yr umami kogi crucifix succulents flexitarian fam. Normcore health goth hoodie, gluten-free kogi bushwick beard jean shorts cronut dreamcatcher knausgaard pop-up schlitz. Viral palo santo kinfolk flannel banjo. Helvetica ennui kickstarter hoodie 3 wolf moon neutra hell of plaid.</p></div><div class="bs-col-md"><figure><img src="'+H+'" alt="" style="margin:auto;max-width:80%;" class="kl_popup_image"><figcaption><strong>Figure 1.1.4:</strong> Good doggo.<br><em>Source: <a href="http://www.unsplash.com/" target="_blank" class="text-brand-midblue underline">http://www.unsplash.com/</a></em></figcaption></figure></div></div></div>',2),je={class:"flex"},Ve={class:"w-full"},We={class:"language-markup"},Ge=x('<h4 class="adx-markup-label">Side by side</h4><section class="adx-gallery two-up"><figure><img src="'+k+'" alt="" class="top kl_popup_image"><figcaption><strong>Figure 1.1.5(a):</strong> Image on the left.<br><em>Source: <a href="http://www.unsplash.com/" target="_blank" class="text-brand-midblue underline">http://www.unsplash.com/</a></em></figcaption></figure><figure><img src="'+k+'" alt="" class="top kl_popup_image"><figcaption><strong>Figure 1.1.5(b):</strong> Image on the right.<br><em>Source: <a href="http://www.unsplash.com/" target="_blank" class="text-brand-midblue underline">http://www.unsplash.com/</a></em></figcaption></figure></section>',2),ze={class:"flex"},Ye={class:"w-full"},Xe={class:"language-markup"},Je=t("h4",{class:"adx-markup-label"},"Image excerpt",-1),Qe=t("figure",{class:"w60",style:{margin:"auto","text-align":"center"}},[t("img",{src:$e,alt:"",class:"top kl_popup_image"}),t("figcaption",null,[t("strong",null,"Figure 1.1.6:"),c(" Uses the w60 task to set the width to 60%."),t("br"),t("em",null,[c("Source: "),t("a",{href:"http://www.unsplash.com/",target:"_blank",class:"text-brand-midblue underline"},"http://www.unsplash.com/")])])],-1),Ke={class:"flex"},Ze={class:"w-full"},ta={class:"language-markup"},ea={__name:"images",setup(m){const e={w80Comment:`<!-- Landscape image HTML usage -->
`,w80:`<figure class="w80" style="margin: auto;text-align: center;">
  <img src="https://mediaproduction.adelaide.edu.au/uoa-styles/assets/spacex-unsplash.d9507b06.jpg" alt="" class="top kl_popup_image">
  <figcaption>
    <strong>Figure 1.1.1:</strong> This is one hell of a rocket with its width set to 80%.<br />
    <em><a href="http://www.unsplash.com/" target="_blank" >http://www.unsplash.com/</a></em>
  </figcaption>
</figure>`,w40Comment:`<!-- Portrait image HTML usage -->
`,w40:`<figure class="w40" style="margin: auto;text-align: center;">
  <img src="https://mediaproduction.adelaide.edu.au/uoa-styles/assets/adam-miller-unsplash.18bc8982.jpg" alt="" class="top kl_popup_image">
  <figcaption>
    <strong>Figure 1.1.2:</strong> Astronaut with its width set to 40%.<br />
    <em><a href="http://www.unsplash.com/" target="_blank" >http://www.unsplash.com/</a></em>
  </figcaption>
</figure>`,asideLeftComment:`<!-- Aside Left image with paragraph text HTML usage -->
`,asideLeft:`<div class="bs-row">
  <div class="bs-col-md">
    <figure>
      <img src="../assets/images/dog-unsplash.jpg" alt="" style="margin: auto; max-width: 80%;" class="kl_popup_image">
        <figcaption>
          <strong>Figure 1.1.3:</strong> Good doggo<br />
          <em>Source: <a href="http://www.unsplash.com/" target="_blank">http://www.unsplash.com/</a></em>
        </figcaption>
    </figure>
  </div>
  <div class="bs-col-md-8">
    <p>I'm baby fashion axe ugh try-hard meditation palo santo post-ironic sustainable lomo kombucha hashtag crucifix four loko roof party. Cliche schlitz meggings prism next level. Meditation drinking vinegar woke thundercats yr umami kogi crucifix succulents flexitarian fam. Normcore health goth hoodie, gluten-free kogi bushwick beard jean shorts cronut dreamcatcher knausgaard pop-up schlitz. Viral palo santo kinfolk flannel banjo. Helvetica ennui kickstarter hoodie 3 wolf moon neutra hell of plaid.</p>
  </div>
</div>`,asideRightComment:`<!-- Aside Right image with paragraph text HTML usage -->
`,asideRight:`<div class="bs-row">
  <div class="bs-col-md-8">
    <p>I'm baby fashion axe ugh try-hard meditation palo santo post-ironic sustainable lomo kombucha hashtag crucifix four loko roof party. Cliche schlitz meggings prism next level. Meditation drinking vinegar woke thundercats yr umami kogi crucifix succulents flexitarian fam. Normcore health goth hoodie, gluten-free kogi bushwick beard jean shorts cronut dreamcatcher knausgaard pop-up schlitz. Viral palo santo kinfolk flannel banjo. Helvetica ennui kickstarter hoodie 3 wolf moon neutra hell of plaid.</p>
  </div>
  <div class="bs-col-md">
    <figure>
      <img src="../assets/images/dog-unsplash.jpg" alt="" style="margin: auto; max-width: 80%;" class="kl_popup_image">
        <figcaption>
          <strong>Figure 1.1.4:</strong> Good doggo<br />
          <em>Source: <a href="http://www.unsplash.com/" target="_blank">http://www.unsplash.com/</a></em>
        </figcaption>
    </figure>
  </div>
</div>`,sideComment:`<!-- Side-by-side image gallery HTML usage  -->
`,side:`<section class="adx-gallery two-up">
  <figure>
    <img src="https://mediaproduction.adelaide.edu.au/uoa-styles/assets/persona.987c5b3c.jpg" alt="" class="top kl_popup_image">
    <figcaption>
      <strong>Figure 1.1.5(a):</strong> Image on the left.<br />
      <em>Source: <a href="http://www.unsplash.com/" target="_blank">http://www.unsplash.com/</a></em>
    </figcaption>
  </figure>
  <figure>
    <img src="https://mediaproduction.adelaide.edu.au/uoa-styles/assets/persona.987c5b3c.jpg" alt="" class="top kl_popup_image">
    <figcaption>
      <strong>Figure 1.1.5(b):</strong> Image on the right.<br />
      <em>Source: <a href="http://www.unsplash.com/" target="_blank">http://www.unsplash.com/</a></em>
    </figcaption>
  </figure>
</section>`,smallComment:`<!-- Small image excerpt HTML usage -->
`,small:`<figure class="w60" style="margin: auto;text-align: center;">
  <img src="https://mediaproduction.adelaide.edu.au/uoa-styles/assets/brand-eg.9337999c.png" alt="" class="top kl_popup_image">
  <figcaption>
    <strong>Figure 1.1.6:</strong> Uses the w60 task to set the width to 60%.<br />
    <em>Source: <a href="http://www.unsplash.com/" target="_blank">http://www.unsplash.com/</a></em>
  </figcaption>
</figure>`};return(l,r)=>(o(),i("div",Se,[He,Me,Ce,t("div",Le,[s(d,{"data-to-copy":e.w80},null,8,["data-to-copy"]),t("pre",De,[t("code",Ee,a(e.w80Comment)+a(e.w80),1)])]),Ue,qe,t("div",Pe,[s(d,{"data-to-copy":e.w40},null,8,["data-to-copy"]),t("pre",Ae,[t("code",Ie,a(e.w40Comment)+a(e.w40),1)])]),Be,t("div",Re,[s(d,{"data-to-copy":e.asideLeft},null,8,["data-to-copy"]),t("pre",Fe,[t("code",Oe,a(e.asideLeftComment)+a(e.asideLeft),1)])]),Ne,t("div",je,[s(d,{"data-to-copy":e.asideRight},null,8,["data-to-copy"]),t("pre",Ve,[t("code",We,a(e.asideRightComment)+a(e.asideRight),1)])]),Ge,t("div",ze,[s(d,{"data-to-copy":e.side},null,8,["data-to-copy"]),t("pre",Ye,[t("code",Xe,a(e.sideComment)+a(e.side),1)])]),Je,Qe,t("div",Ke,[s(d,{"data-to-copy":e.small},null,8,["data-to-copy"]),t("pre",Ze,[t("code",ta,a(e.smallComment)+a(e.small),1)])])]))}},aa={},sa={id:"Tables",class:"component-item"},na=x(`<h3>Tables</h3><h4 class="adx-markup-label">Basic table</h4><table class="adx"><caption><strong>Table 1.1.1: </strong>Here&#39;s an example basic table caption. </caption><thead><tr><th class="">Name</th><th>Contact</th><th>Team</th><th class="">Section</th><th>Points</th></tr></thead><tbody><tr><td>Dom</td><td>6000</td><td>Detroit</td><td>Back to front</td><td>40</td></tr><tr class="active-row"><td>Melissa</td><td>5150</td><td>Paris</td><td>Midfield</td><td>31</td></tr></tbody></table><pre class="w-full"><code class="language-markup">&lt;!-- Basic table HTML Usage --&gt;
    &lt;table class=&quot;adx&quot;&gt;
      &lt;caption&gt;
        &lt;strong&gt;Table 1.1.1: &lt;/strong&gt;Here&#39;s an example basic table caption.
      &lt;/caption&gt;
      &lt;thead&gt;
        &lt;tr&gt;
          &lt;th class=&quot;&quot;&gt;Name&lt;/th&gt;
          &lt;th&gt;Contact&lt;/th&gt;
          &lt;th&gt;Team&lt;/th&gt;
          &lt;th class=&quot;&quot;&gt;Section&lt;/th&gt;
          &lt;th&gt;Points&lt;/th&gt;
        &lt;/tr&gt;
      &lt;/thead&gt;
      &lt;tbody&gt;
      &lt;tr&gt;
        &lt;td&gt;Dom&lt;/td&gt;
        &lt;td&gt;6000&lt;/td&gt;
        &lt;td&gt;Detroit&lt;/td&gt;
        &lt;td&gt;Back to front&lt;/td&gt;
        &lt;td&gt;40&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr class=&quot;active-row&quot;&gt;
        &lt;td&gt;Melissa&lt;/td&gt;
        &lt;td&gt;5150&lt;/td&gt;
        &lt;td&gt;Paris&lt;/td&gt;
        &lt;td&gt;Midfield&lt;/td&gt;
        &lt;td&gt;31&lt;/td&gt;
      &lt;/tr&gt;
      &lt;/tbody&gt;
    &lt;/table&gt;</code></pre><h4 class="adx-markup-label">Dual-axis table</h4><table class="adx"><caption><strong>Table 1.1.2: </strong>Here&#39;s an example basic table with two axes </caption><tr><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th></tr><tr><th>B</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr><tr><th>C</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr><tr><th>D</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr><tr><th>E</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr></table><pre class="w-full"><code class="language-markup">&lt;!-- Basic table HTML Usage --&gt;
    &lt;table class=&quot;adx&quot;&gt;
      &lt;caption&gt;
        &lt;strong&gt;Table 1.1.2: &lt;/strong&gt;Here&#39;s an example basic table with two axes
      &lt;/caption&gt;
      &lt;tr&gt;
        &lt;th&gt;A&lt;/th&gt;
        &lt;th&gt;B&lt;/th&gt;
        &lt;th&gt;C&lt;/th&gt;
        &lt;th&gt;D&lt;/th&gt;
        &lt;th&gt;E&lt;/th&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;th&gt;B&lt;/th&gt;
        &lt;td&gt;1&lt;/td&gt;
        &lt;td&gt;2&lt;/td&gt;
        &lt;td&gt;3&lt;/td&gt;
        &lt;td&gt;4&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;th&gt;C&lt;/th&gt;
        &lt;td&gt;1&lt;/td&gt;
        &lt;td&gt;2&lt;/td&gt;
        &lt;td&gt;3&lt;/td&gt;
        &lt;td&gt;4&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;th&gt;D&lt;/th&gt;
        &lt;td&gt;1&lt;/td&gt;
        &lt;td&gt;2&lt;/td&gt;
        &lt;td&gt;3&lt;/td&gt;
        &lt;td&gt;4&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;th&gt;E&lt;/th&gt;
        &lt;td&gt;1&lt;/td&gt;
        &lt;td&gt;2&lt;/td&gt;
        &lt;td&gt;3&lt;/td&gt;
        &lt;td&gt;4&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/table&gt;</code></pre><h4 class="adx-markup-label">Simple table</h4><table class="adx simple"><caption><strong>Table 1.1.3: </strong>Here&#39;s an example simple table caption. </caption><thead><tr><th class="">Name</th><th>Contact</th><th>Team</th><th class="">Section</th><th>Points</th></tr></thead><tbody><tr><td>Dom</td><td>6000</td><td>Detroit</td><td>Back to front</td><td>40</td></tr><tr class="active-row"><td>Melissa</td><td>5150</td><td>Paris</td><td>Midfield</td><td>31</td></tr></tbody></table><pre class="w-full"><code class="language-markup">&lt;!-- Simple table HTML Usage --&gt;
    &lt;table class=&quot;adx simple&quot;&gt;
      &lt;caption&gt;
        &lt;strong&gt;Table 1.1.3: &lt;/strong&gt;Here&#39;s an example simple table caption.
      &lt;/caption&gt;
      &lt;thead&gt;
        &lt;tr&gt;
          &lt;th class=&quot;&quot;&gt;Name&lt;/th&gt;
          &lt;th&gt;Contact&lt;/th&gt;
          &lt;th&gt;Team&lt;/th&gt;
          &lt;th class=&quot;&quot;&gt;Section&lt;/th&gt;
          &lt;th&gt;Points&lt;/th&gt;
        &lt;/tr&gt;
      &lt;/thead&gt;
      &lt;tbody&gt;
      &lt;tr&gt;
        &lt;td&gt;Dom&lt;/td&gt;
        &lt;td&gt;6000&lt;/td&gt;
        &lt;td&gt;Detroit&lt;/td&gt;
        &lt;td&gt;Back to front&lt;/td&gt;
        &lt;td&gt;40&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr class=&quot;active-row&quot;&gt;
        &lt;td&gt;Melissa&lt;/td&gt;
        &lt;td&gt;5150&lt;/td&gt;
        &lt;td&gt;Paris&lt;/td&gt;
        &lt;td&gt;Midfield&lt;/td&gt;
        &lt;td&gt;31&lt;/td&gt;
      &lt;/tr&gt;
      &lt;/tbody&gt;
    &lt;/table&gt;</code></pre>`,10),oa=[na];function ia(m,e){return o(),i("div",sa,oa)}const la=S(aa,[["render",ia]]),M=""+new URL("diff-square.d23bf47b.jpg",import.meta.url).href,ca={id:"Multimedia",class:"component-item"},ra=t("h3",null,"Multimedia",-1),da=t("h4",{class:"adx-markup-label"},"Video Player with Transcript",-1),ua=t("section",{class:"adx video"},[t("div",{class:"videoWrapper"},[t("iframe",{title:"YouTube video player",src:"https://www.youtube.com/embed/U9OPRtMRwE0",width:"560",height:"315",allowfullscreen:"allowfullscreen",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})]),t("footer",null,[t("div",{class:"v-icon-holder"},[t("a",{href:"#",class:"adx-icon download"},"Transcript [.txt]")])])],-1),ha={class:"flex"},pa={class:"w-full"},ma={class:"language-markup"},ga=t("h4",{class:"adx-markup-label"},"Video Player without Transcript",-1),ba=t("section",{class:"adx video"},[t("div",{class:"videoWrapper"},[t("iframe",{title:"YouTube video player",src:"https://www.youtube.com/embed/PR269o7s66M",width:"560",height:"315",allowfullscreen:"allowfullscreen",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})])],-1),fa={class:"flex"},_a={class:"w-full"},xa={class:"language-markup"},wa=t("h4",{class:"adx-markup-label"},"Empty Section Wrapper for H5P and Echo360 Video",-1),va=t("section",{class:"adx video min-h-[200px] flex justify-center"},[t("span",{class:"my-auto font-bold"},"H5P / Echo360 video")],-1),ya={class:"flex"},ka={class:"w-full"},Ta={class:"language-markup"},$a=t("h4",{class:"adx-markup-label"},"Responsive iFrame Wrapper",-1),Sa=t("section",{class:"adx video"},[t("iframe",{class:"adx-frame",src:"https://mediaproduction.adelaide.edu.au/oua-interactives/#/economy-transition-map",width:"100%",height:"900px"})],-1),Ha={class:"flex"},Ma={class:"w-full"},Ca={class:"language-markup"},La=x('<h4 class="adx-markup-label">Podcast Square</h4><section class="adx-podcast-square"><div class="adx-aspect square adx-bg-primary"><img src="'+M+'" alt="" class="center-center"></div><h3>Track Title Goes Here</h3><p>Some track details go here.</p><audio controls src=""></audio></section>',2),Da={class:"flex"},Ea={class:"w-full"},Ua={class:"language-markup"},qa=x('<h4 class="adx-markup-label">Podcast Wide Player</h4><section class="adx-podcast-wide"><div class="track"><h3>Track Title Goes Here</h3><p>Some track details go here.</p></div><div class="adx-aspect square adx-bg-primary art"><img src="'+M+'" alt="" class="center-center"></div><audio controls src=""></audio></section>',2),Pa={class:"flex"},Aa={class:"w-full"},Ia={class:"language-markup"},Ba={__name:"multimedia",setup(m){const e={videoTranscript:{comment:`<!-- Video with Transcript box HTML Usage -->
`,code:`<section class="adx video">
  <div class="videoWrapper">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/U9OPRtMRwE0" width="560" height="315" allowfullscreen="allowfullscreen" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
  </div>
  <footer>
    <div class="v-icon-holder">
     <a href="#" class="adx-icon download">Transcript [.txt]</a>
    </div>
  </footer>
</section>`},videoOnly:{comment:`<!-- Video without Transcript box HTML Usage -->
`,code:`<section class="adx video">
  <div class="videoWrapper">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/U9OPRtMRwE0" width="560" height="315" allowfullscreen="allowfullscreen" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
  </div>
</section>`},emptySection:{comment:`<!-- Empty Section wrapper for H5P and Echo360 video HTML Usage -->
`,code:`<section class="adx video">

</section>`},iframe:{comment:`<!-- iFrame with wrapper HTML Usage; no height is required, this will update automatically -->
`,code:`<section class="adx video">
   <iframe class="adx-frame" src="INSERT_SOURCE_URL" width="100%"></iframe>
</section>`},podcastSquare:{comment:`<!-- Square podcast HTML Usage -->
`,code:`<section class="adx-podcast-square">
  <div class="adx-aspect square adx-bg-primary">
    <img src="../assets/images/diff-square.jpg" alt="" class="center-center">
  </div>
  <h3>Track Title Goes Here</h3>
  <p>Some track details go here.</p>
  <audio controls src="">
  </audio>
</section>`},podcastWide:{comment:`<!-- Wide podcast player HTML Usage -->
`,code:`<section class="adx-podcast-wide">
  <div class="track">
    <h3>Track Title Goes Here</h3>
    <p>Some track details go here.</p>
  </div>
  <div class="adx-aspect square adx-bg-primary art">
    <img src="../assets/images/diff-square.jpg" alt="" class="center-center">
  </div>
  <audio controls src="">
  </audio>
</section>`}};return(l,r)=>(o(),i("div",ca,[ra,da,ua,t("div",ha,[s(d,{"data-to-copy":e.videoTranscript.code},null,8,["data-to-copy"]),t("pre",pa,[t("code",ma,a(e.videoTranscript.comment)+a(e.videoTranscript.code),1)])]),ga,ba,t("div",fa,[s(d,{"data-to-copy":e.videoOnly.code},null,8,["data-to-copy"]),t("pre",_a,[t("code",xa,a(e.videoOnly.comment)+a(e.videoOnly.code),1)])]),wa,va,t("div",ya,[s(d,{"data-to-copy":e.emptySection.code},null,8,["data-to-copy"]),t("pre",ka,[t("code",Ta,a(e.emptySection.comment)+a(e.emptySection.code),1)])]),$a,Sa,t("div",Ha,[s(d,{"data-to-copy":e.iframe.code},null,8,["data-to-copy"]),t("pre",Ma,[t("code",Ca,a(e.iframe.comment)+a(e.iframe.code),1)])]),La,t("div",Da,[s(d,{"data-to-copy":e.podcastSquare.code},null,8,["data-to-copy"]),t("pre",Ea,[t("code",Ua,a(e.podcastSquare.comment)+a(e.podcastSquare.code),1)])]),qa,t("div",Pa,[s(d,{"data-to-copy":e.podcastWide.code},null,8,["data-to-copy"]),t("pre",Aa,[t("code",Ia,a(e.podcastWide.comment)+a(e.podcastWide.code),1)])])]))}},Ra={id:"Navigation",class:"component-item"},Fa=t("h3",null,"Navigation",-1),Oa=t("h4",{class:"adx-markup-label"},"Nav Table",-1),Na={class:"flex"},ja={__name:"navigation",setup(m){const e=`<!-- custom navigation table HTML usage -->
`,l=`<ul class="adx-nav-table">
  <li class="full"><h4><a href="#">About this course</a></h4></li>
  <li><h4><a href="#">Module 1</a></h4>
    <p>Digital Security</p></li>
  <li><h4><a href="#">Module 2</a></h4>
    <p>Security Audit</p></li>
  <li><h4><a href="#">Module 3</a></h4>
    <p>Cyber Security Attacks</p></li>
  <li><h4><a href="#">Module 4</a></h4>
    <p>Security Investigation</p></li>
  <li><h4><a href="#">Module 5</a></h4>
    <p>Security Management</p></li>
  <li><h4><a href="#">Module 6</a></h4>
    <p>Privacy and Ethics</p></li>
  <li class="full"><h4><a href="#">Online Orientations</a></h4>
    <p>Seperate MyUni course</p></li>
</ul>`;return(r,n)=>(o(),i("div",Ra,[Fa,Oa,t("div",{innerHTML:l}),t("div",Na,[s(d,{"data-to-copy":l}),t("pre",{class:"w-full"},[t("code",{class:"language-markup"},a(e)+a(l))])])]))}},Va={id:"Team",class:"component-item"},Wa=x('<h3>Course Team</h3><h4 class="adx-markup-label">Profile Card</h4><article class="adx-profile"><img src="'+k+'" alt=""><section><h3 class="name">Christian Surname</h3><p class="title">Senior Deputy Vice President</p><p class="location">Adelaide, Australia</p><p class="contact">christian.surname@adelaide.edu.au</p><p class="availability">Mon-Fri 9-3pm</p><p>Here&#39;s my bio about stuff</p></section></article>',3),Ga={class:"flex"},za={__name:"team",setup(m){const e=`<!-- Profile card HTML Usage -->
`,l=`<article class="adx-profile">
  <img src="image.png" alt="">
  <section>
    <h3 class="name">Christian Surname</h3>
    <p class="title">Senior Deputy Vice President</p>
    <p class="location">Adelaide, Australia</p>
    <p class="contact">christian.surname@adelaide.edu.au</p>
    <p class="availability">Mon-Fri 9-3pm</p>
    <p>Here's my bio about stuff</p>
  </section>
</article>`;return(r,n)=>(o(),i("div",Va,[Wa,t("div",Ga,[s(d,{"data-to-copy":l}),t("pre",{class:"w-full"},[t("code",{class:"language-markup"},a(e)+a(l))])])]))}},Ya={class:"flex flex-1 overflow-hidden"},Xa={id:"components-side-nav"},Ja=["id","onClick"],Qa={id:"components-wrapper",class:"adx"},as={__name:"HomeView",setup(m){const e=["Headings","Directions","Cues","Personas","Quotes","Images","Multimedia","Lists","Tables","Navigation","Team","Definitions","Asides","Buttons","Dividers"];let l=T(e.map(h=>({id:h,state:!1})));function r(h){document.getElementById(h).scrollIntoView(),document.getElementById("components-main").scrollBy(0,-32)}function n(h){const p=document.getElementById(h);if(!p)return!1;const _=118,$=16,v=p.getBoundingClientRect();return v.top>=_&&v.top<=window.innerHeight||v.bottom>=window.innerHeight-$&&v.bottom<window.innerHeight||v.bottom>=_&&v.bottom<=window.innerHeight&&e.indexOf(h)===e.length-1?!0:v.top<_&&v.bottom>window.innerHeight}function u(){let h=!1;l.value=e.map(p=>{const _=h?!1:n(p);return _&&(h=!0),{id:p,state:_}})}function f(){window.Prism=window.Prism||{},window.Prism.manual=!0,C.highlightAll()}return L(()=>{window.addEventListener("resize",u),f(),u()}),D(()=>{window.removeEventListener("resize",u)}),(h,p)=>(o(),i("div",Ya,[t("aside",Xa,[(o(!0),i(g,null,b(E(l),_=>(o(),i("div",{id:`${_.id}-menu`,class:w(["text-[1rem] text-slate-500 py-3 pl-6 mb-1 cursor-pointer",_.state?"text-brand-midblue-dark font-bold bg-gray-200 border-l-4 border-brand-red":""]),onClick:$=>r(_.id)},a(_.id),11,Ja))),256))]),t("div",{id:"components-main",onScroll:u},[t("div",Qa,[s(A),s(Q),s(ct),s(_t),s(Mt),s(ea),s(Ba),s(At),s(la),s(ja),s(za),s(Nt),s(V),s(me),s(ye)])],32)]))}};export{as as default};
