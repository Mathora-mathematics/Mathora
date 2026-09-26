(function(){
"use strict";

const LESSONS=Array.isArray(window.LESSONS)?window.LESSONS:[];
const CONTENT=window.LESSON_CONTENT||{};
const STARTERS=window.STARTERS||{};
const STARTER_ANSWERS=window.STARTER_ANSWERS||{};
const SOW=window.SOW_MAP||{};
const EXTRA=window.EXTRA_EXAMPLES||{};
const EXAM=window.EXAM_SUCCESS_MAP||{};
const BOOKS=window.TEXTBOOK_CONTENT||{};
const VERIFIED=window.VerifiedDiagrams||{render:()=>""};
const DIAGRAMS=window.MathoraDiagrams||{supports:()=>false,lesson:()=>"",practice:()=>"",question:()=>""};
const QUESTION_ENGINE=window.MathoraQuestionEngine||{build:()=>({practice:[],homework:[]})};
const COURSE_YEAR=String(window.COURSE_YEAR||"10");
const EXPECTED_LESSONS=Number(window.EXPECTED_LESSONS||47);

const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));

let currentIndex=0;
let exampleIndex=0;
let sectionObserver=null;
let slides=[], slideIndex=0;
const boardStates=new Map();

function esc(v){
 return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function fmt(text){
 const raw=String(text??"");let out="",last=0,m;
 const re=/\[\[([\s\S]*?)\]\]/g;
 while((m=re.exec(raw))){
   out+=esc(raw.slice(last,m.index));
   out+='<span class="math" data-tex="'+esc(m[1])+'">'+esc(m[1])+'</span>';
   last=re.lastIndex;
 }
 out+=esc(raw.slice(last));
 return out;
}
function typeset(root=document){
 $$(".math[data-tex]",root).forEach(el=>{
   if(el.dataset.done)return;
   const tex=el.dataset.tex||"";
   if(window.katex){
     try{katex.render(tex,el,{throwOnError:false,strict:"ignore",trust:false});el.dataset.done="1";return;}catch(e){}
   }
   el.textContent=tex;el.classList.add("math-fallback");el.dataset.done="1";
 });
}
function today(long=true){
 return new Intl.DateTimeFormat("en-GB",long?{weekday:"long",day:"numeric",month:"long",year:"numeric"}:{day:"numeric",month:"short",year:"numeric"}).format(new Date());
}
function lesson(){return LESSONS[currentIndex]||null;}
function data(){const l=lesson();return l?CONTENT[l.id]||null:null;}
function sow(){const l=lesson();return l?SOW[l.id]||{}:{};}
function sourcePill(t){return '<span class="source-pill">'+esc(t)+'</span>';}

function setTheme(theme,persist=true){
 const next=theme==="dark"?"dark":"light";
 document.documentElement.dataset.theme=next;
 if(persist){try{localStorage.setItem("mathora-theme",next);}catch(e){}}
 const btn=$("#themeBtn");
 if(btn){
   btn.setAttribute("aria-label",next==="dark"?"Switch to day view":"Switch to night view");
   const icon=$(".theme-icon",btn),label=$(".theme-text",btn);
   if(icon)icon.textContent=next==="dark"?"☀":"☾";
   if(label)label.textContent=next==="dark"?"Day":"Night";
 }
 requestAnimationFrame(()=>refreshBoardTheme());
}
function initTheme(){
 let saved="light";
 try{saved=localStorage.getItem("mathora-theme")||document.documentElement.dataset.theme||"light";}catch(e){}
 setTheme(saved,false);
}
function toggleTheme(){setTheme(document.documentElement.dataset.theme==="dark"?"light":"dark");}

function themeInk(colour){
 const raw=String(colour||"#073241").toLowerCase();
 if(document.documentElement.dataset.theme!=="dark")return raw;
 const map={
   "#073241":"#f4fbfd",
   "#00aee6":"#53d8ff",
   "#d85858":"#ff9696",
   "#2a9d76":"#72e0ad"
 };
 return map[raw]||raw;
}
function refreshBoardTheme(){
 $(".pen-dot").forEach(dot=>{dot.style.background=themeInk(dot.dataset.colour);});
 boardStates.forEach(state=>{if(state?.ctx)redrawBoard(state);});
}

function openDrawer(){
 const d=$("#lessonDrawer");if(!d)return;
 d.classList.add("open");d.setAttribute("aria-hidden","false");
 document.body.classList.add("drawer-open");
 setTimeout(()=>$("#lessonSearch")?.focus(),80);
}
function closeDrawer(){
 const d=$("#lessonDrawer");if(!d)return;
 d.classList.remove("open");d.setAttribute("aria-hidden","true");
 document.body.classList.remove("drawer-open");
}

function renderLessonDrawer(filter=""){
 const root=$("#lessonNav");if(!root)return;
 const q=filter.trim().toLowerCase(),groups=new Map();
 LESSONS.forEach((l,i)=>{
   const sm=SOW[l.id]||{};
   const hay=(l.id+" "+l.unit+" "+l.title+" "+(sm.objective||"")).toLowerCase();
   if(q&&!hay.includes(q))return;
   if(!groups.has(l.u))groups.set(l.u,[]);
   groups.get(l.u).push({l,i});
 });
 root.innerHTML=[...groups.entries()].map(([u,items])=>
  '<section class="drawer-unit">'+
   '<div class="drawer-unit-head"><span>'+esc(u)+'</span><div><strong>'+esc(items[0].l.unit)+'</strong><small>'+items.length+' lesson'+(items.length===1?"":"s")+'</small></div></div>'+
   '<div class="drawer-unit-grid">'+items.map(({l,i})=>
    '<button type="button" class="drawer-lesson '+(i===currentIndex?"active":"")+'" data-index="'+i+'">'+
      '<span>'+esc(l.id)+'</span><strong>'+esc(l.title)+'</strong>'+
    '</button>').join("")+'</div></section>'
 ).join("")||'<p class="page-loading">No lessons found.</p>';
 $$(".drawer-lesson",root).forEach(btn=>btn.addEventListener("click",()=>{
   currentIndex=Number(btn.dataset.index);exampleIndex=0;
   location.hash=LESSONS[currentIndex].id;
   renderAll();closeDrawer();window.scrollTo({top:0,behavior:"smooth"});
 }));
}

function starterCards(l){
 const qs=STARTERS[l.id]||[];
 return qs.slice(0,4).map((q,i)=>
  '<article class="question-card"><span class="question-number">'+String(i+1).padStart(2,"0")+'</span>'+
   '<p>'+fmt(q)+'</p><div class="mini-work-grid"></div></article>'
 ).join("");
}
function starterSolutions(l){
 const ans=STARTER_ANSWERS[l.id]||[];
 return '<div class="solution-grid">'+ans.slice(0,4).map((a,i)=>
  '<div><span>'+String(i+1).padStart(2,"0")+'</span><p>'+fmt(a)+'</p></div>').join("")+'</div>';
}

function openingHTML(l,d,sm){
 return '<section class="notebook-page opening-page title-starter-page section-anchor" id="opening"><div class="page-margin-line"></div>'+
  '<div class="opening-brand compact-opening-brand"><div class="cover-logo"></div><div class="opening-school-copy"><span>NEW ENGLISH SCHOOL • YEAR '+COURSE_YEAR+'</span><strong>'+esc(l.unit.toUpperCase())+'</strong></div><div class="lesson-chip">LESSON '+esc(l.id)+'</div></div>'+
  '<div class="title-starter-hero clean-title-hero">'+
    '<div class="title-block-compact"><div class="title-meta-line"><span>'+esc(today(true))+'</span></div><p class="overline">YEAR '+COURSE_YEAR+' MATHEMATICS</p><h1>'+esc(l.title)+'</h1><p class="lesson-intro compact-intro">'+fmt(d.explain)+'</p></div>'+
    '<div class="lesson-focus-card"><span>KEY FOCUS</span><strong>'+esc((l.obj||[]).slice(0,4).join(" • "))+'</strong></div>'+
  '</div>'+
  '<div class="starter-header compact-starter-head"><div><span class="section-kicker">STARTER</span><h2>Quick start</h2></div><button class="reveal-button" data-reveal="starterSolution" type="button"><span class="reveal-icon">＋</span>Solutions</button></div>'+
  '<div class="starter-grid title-starter-grid">'+starterCards(l)+'</div>'+
  '<div class="reveal-panel starter-solutions" id="starterSolution">'+starterSolutions(l)+'</div>'+
  '<div class="opening-footer compact-opening-footer"><div class="lesson-note"><span>LESSON</span><strong>'+esc(l.title)+'</strong></div><button class="start-button" data-target="teach" type="button">Continue <span>→</span></button></div>'+
 '</section>';
}

function teachHTML(l,d,sm){
 const key=(d.keyPoints||[]).slice(0,6).map(x=>'<li>'+fmt(x)+'</li>').join("");
 const rules=(d.rules||[]).slice(0,5).map(r=>'<div class="teach-rule"><strong>'+fmt(r[0])+'</strong><span>'+fmt(r[1])+'</span></div>').join("");
 const method=(d.method||[]).slice(0,6).map((x,i)=>'<li><span>'+String(i+1).padStart(2,"0")+'</span><p>'+fmt(x)+'</p></li>').join("");
 const mistakes=(d.mistakes||[]).slice(0,5).map(x=>'<li>'+fmt(x)+'</li>').join("");
 return '<section class="section-anchor teach-section" id="teach">'+
  '<article class="notebook-page teach-slide teach-concept-slide" data-teach-step="1"><div class="page-margin-line"></div>'+
   '<div class="section-head"><div><span class="section-kicker">02 • TEACH</span><h2>Understand the idea</h2></div><span class="page-tag">1 / 2</span></div>'+
   '<div class="teach-focus-grid">'+
    '<article class="note-card cyan-note"><small>LEARN</small><h3>Key points</h3><ul class="teach-list">'+key+'</ul></article>'+
    '<article class="note-card white-note"><small>KEEP</small><h3>Rules</h3><div class="teach-rules">'+rules+'</div></article>'+
   '</div>'+
   '<article class="mistake-strip"><div><span class="section-kicker">WATCH OUT</span><h3>Common mistakes</h3></div><ul class="teach-list mistakes">'+mistakes+'</ul></article>'+
  '</article>'+
  '<article class="notebook-page teach-slide teach-method-slide" data-teach-step="2" hidden><div class="page-margin-line"></div>'+
   '<div class="section-head"><div><span class="section-kicker">02 • TEACH</span><h2>Model the method</h2></div><span class="page-tag">2 / 2</span></div>'+
   '<div class="teach-method-layout">'+
    '<div class="method-card clean-method"><div><span class="section-kicker">METHOD</span><h3>Steps</h3></div><ol>'+method+'</ol></div>'+
    '<div class="teacher-board"><div class="board-title"><div><span>WHITEBOARD</span><strong>Model it here</strong></div><small>Apple Pencil / touch</small></div>'+boardMarkup("teachCanvas","teach",true)+'</div>'+
   '</div>'+
  '</article>'+
 '</section>';
}

function allExamples(l,d){
 const merged=[...(d.examples||[]),...((EXTRA[l.id]||[]))];
 return [...(BOOKS[l.id]?.examples||[]),...merged.slice(0,5)];
}
function boardMarkup(id,key,teach=false){
 return '<div class="interactive-board '+(teach?"teach-whiteboard":"")+'" data-board-key="'+esc(key)+'">'+
  '<div class="working-toolbar" data-canvas="'+id+'">'+
   '<div class="tool-cluster"><span class="tool-label">PEN</span>'+
    '<button class="pen-dot active" data-colour="#073241" type="button" aria-label="Dark pen"></button>'+
    '<button class="pen-dot" data-colour="#00aee6" type="button" aria-label="Blue pen"></button>'+
    '<button class="pen-dot" data-colour="#d85858" type="button" aria-label="Red pen"></button>'+
    '<button class="pen-dot" data-colour="#2a9d76" type="button" aria-label="Green pen"></button>'+
   '</div>'+
   '<div class="tool-cluster"><button class="mini-tool size-tool active" data-size="3" type="button">Thin</button><button class="mini-tool size-tool" data-size="6" type="button">Medium</button><button class="mini-tool size-tool" data-size="10" type="button">Thick</button></div>'+
   '<div class="tool-cluster board-actions"><button class="mini-tool eraser-tool" type="button">Eraser</button><button class="mini-tool undo-tool" type="button">Undo</button><button class="mini-tool redo-tool" type="button">Redo</button><button class="mini-tool grid-tool active" type="button">Grid</button><button class="mini-tool clear-tool danger" type="button">Clear</button><button class="mini-tool expand-tool" type="button">Expand</button></div>'+
  '</div>'+
  '<div class="graph-paper board-paper"><canvas id="'+id+'" data-board-key="'+esc(key)+'"></canvas><div class="board-hint">Write directly here with Apple Pencil, stylus, mouse or finger</div></div>'+
 '</div>';
}
function exampleCard(l,d,e,i){
 const diagram=VERIFIED.render(e.verifiedDiagram);
 const question=e.sourceQuestion?sourceImage(e.sourceQuestion,"Example question"):"";
 const answer=e.sourceSolution?sourceImage(e.sourceSolution,"Worked solution"):"";
 return '<article class="example-card '+(i===exampleIndex?"active":"")+'" data-example="'+i+'">'+
  '<div class="example-topline"><span class="example-number">EXAMPLE '+(i+1)+'</span><span class="example-progress">'+(i+1)+' / '+allExamples(l,d).length+'</span></div>'+
  '<div class="example-workspace example-split-workspace clean-example-workspace">'+
    '<aside class="example-question-pane">'+(e.sourceQuestion&&/^Coursebook worked example/.test(e.prompt)?'':'<div class="example-question"><h3>'+fmt(e.prompt)+'</h3></div>')+question+
      (diagram?'<div class="example-diagram-panel">'+diagram+'</div>':"")+
    '</aside>'+
  '<button class="reveal-button full-width example-solution-toggle" data-reveal="exampleSolution'+i+'" type="button"><span class="reveal-icon">＋</span>Solution</button>'+
  '<div class="reveal-panel solution-panel" id="exampleSolution'+i+'">'+answer+(e.steps||[]).map((s,j)=>'<div class="worked-step '+(j===(e.steps||[]).length-1?"final-step":"")+'"><span>'+(j+1)+'</span><p>'+fmt(s)+'</p></div>').join("")+'</div>'+
    '<div class="example-board-panel"><div class="board-prompt-pin"><strong>'+fmt(/^Coursebook worked example/.test(e.prompt)?'Work through the question below.':e.prompt)+'</strong></div>'+boardMarkup("exampleCanvas"+i,l.id+"-example-"+i,false)+'</div>'+
  '</div>'+
 '</article>';
}

function examplesHTML(l,d){
 const ex=allExamples(l,d);
 return '<section class="notebook-page examples-page section-anchor" id="examples"><div class="page-margin-line"></div>'+
  '<div class="section-head example-head"><div><span class="section-kicker">03</span><h2>Examples</h2></div><div class="example-nav"><button id="examplePrev" class="round-button" type="button">←</button><span id="exampleCounter">'+(exampleIndex+1)+' / '+ex.length+'</span><button id="exampleNext" class="round-button dark" type="button">→</button></div></div>'+
  '<div class="example-deck" id="exampleDeck">'+ex.map((e,i)=>exampleCard(l,d,e,i)).join("")+'</div>'+
  '<div class="example-dots" id="exampleDots">'+ex.map((_,i)=>'<button class="'+(i===exampleIndex?"active":"")+'" data-example-index="'+i+'" type="button" aria-label="Example '+(i+1)+'"></button>').join("")+'</div>'+
 '</section>';
}

function worksheetHeader(l,title,id,page,total){
 return '<div class="worksheet-top"><div class="worksheet-brand"><div class="worksheet-logo"></div><div><span>NEW ENGLISH SCHOOL • YEAR '+COURSE_YEAR+'</span><strong>'+esc(title)+'</strong></div></div><div class="worksheet-actions no-print"><button class="sheet-action reveal-all-btn" type="button" data-reveal-all="'+id+'" data-page="'+page+'">Show solutions</button><button class="sheet-action" type="button" data-print-target="'+id+'">Print / PDF</button></div></div>'+
  '<div class="worksheet-title-row"><div><span class="sheet-kicker">LESSON '+esc(l.id)+' • '+page+'/'+total+'</span><h2>'+esc(l.title)+'</h2></div><div class="sheet-meta"><label>Name <span></span></label><label>Date <strong>'+esc(today(false))+'</strong></label></div></div>';
}
function questionCard(l,x,globalIndex,kind){
 const diagram=VERIFIED.render(x.verifiedDiagram);
 return '<article class="worksheet-question compact-question '+(diagram?"has-diagram":"")+'">'+
  '<div class="worksheet-q-head"><span class="worksheet-q-number">'+String(globalIndex+1).padStart(2,"0")+'</span><button class="answer-toggle no-print solution-btn" data-bank="'+kind+'" data-index="'+globalIndex+'" type="button">Solution</button></div>'+
  '<p>'+fmt(x.prompt)+'</p>'+(diagram?'<div class="question-diagram">'+diagram+'</div>':"")+
 '</article>';
}
function solvedQuestionSets(l,d){
 const generated=QUESTION_ENGINE.build(l.type);
 const seen=new Set();
 const unique=items=>items.filter(x=>{
   const key=String(x?.prompt||"").replace(/\s+/g," ").trim().toLowerCase();
   if(!key||seen.has(key)||!x.steps?.length)return false;
   seen.add(key);return true;
 });
 // Keep homework distinct from practice and from the displayed teacher examples.
 const authoredPractice=Array.isArray(d.practice)
   ? d.practice.filter(x=>x&&typeof x==="object"&&x.prompt&&Array.isArray(x.steps)&&x.steps.length)
   : [];
 const practice=unique([...(window.SOURCE_QUESTIONS?.[l.id]||[]),...authoredPractice,...(generated.practice||[]).slice(0,8)]);
 const homework=unique(d.homework||[]);
 return {practice,homework};
}
function sourceImage(asset,alt){
 if(asset?.image) return '<a class="source-image-link" href="'+esc(asset.image)+'" target="_blank" rel="noopener" title="Open full-size extract"><img class="source-extract" src="'+esc(asset.image)+'" width="'+(asset.width||900)+'" height="'+(asset.height||1200)+'" style="max-width:'+Math.min(1040,Math.max(360,asset.width||900))+'px" loading="lazy" decoding="async" alt="'+esc(alt)+'"></a>';
 if(asset?.url) return '<a class="source-book-card" href="'+esc(asset.url)+'" target="_blank" rel="noopener"><span class="source-book-label">'+esc(asset.bookTitle||"Textbook source")+'</span><strong>'+esc(asset.heading||alt)+'</strong>'+(asset.page?'<small>Page / section: '+esc(asset.page)+'</small>':'')+(asset.excerpt?'<p>'+fmt(asset.excerpt)+'</p>':'')+'<em>Open source ↗</em></a>';
 return "";
}
function sourceMaterials(l,kind){
 const b=BOOKS[l.id];if(!b)return "";
 return (b[kind]||[]).map((a,i,arr)=>'<article class="worksheet-slide textbook-section print-sheet" data-print-sheet="'+kind+'">'+worksheetHeader(l,kind==='homework'?'Homework':'Independent practice',kind,i+1,arr.length).replace(/<button class="sheet-action reveal-all-btn"[\s\S]*?<\/button>/,'')+'<p class="textbook-assignment">'+esc(b[kind+'Assignment']||'Complete the questions below. Show clear working.')+'</p>'+sourceImage(a,'Questions and diagrams')+'</article>').join('');
}
function practiceHTML(l,d){
 const bank=solvedQuestionSets(l,d).practice;
 window.__currentPractice=bank;
 const pages=Array.from({length:Math.ceil(bank.length/8)},(_,i)=>bank.slice(i*8,i*8+8));
 return '<section class="section-anchor sheet-stack" id="practice">'+sourceMaterials(l,'practice')+pages.map((page,p)=>
  '<article class="worksheet-slide clean-question-sheet print-sheet" data-print-sheet="practice">'+worksheetHeader(l,"Independent practice","practice",p+1,pages.length)+
   '<div class="worksheet-question-grid sixteen-grid">'+page.map((x,i)=>questionCard(l,x,p*8+i,"practice")).join("")+'</div>'+
   '<div class="worksheet-footer"><span>Questions '+(p*8+1)+'–'+Math.min(p*8+8,bank.length)+'</span><strong>Show clear working in your book.</strong></div></article>'
 ).join("")+'</section>';
}
function homeworkHTML(l,d){
 const bank=solvedQuestionSets(l,d).homework;
 window.__currentHomework=bank;
 const pages=Array.from({length:Math.ceil(bank.length/8)},(_,i)=>bank.slice(i*8,i*8+8));
 return '<section class="section-anchor sheet-stack" id="homework">'+sourceMaterials(l,'homework')+pages.map((page,p)=>
  '<article class="worksheet-slide homework-sheet clean-question-sheet print-sheet" data-print-sheet="homework">'+worksheetHeader(l,"Homework","homework",p+1,pages.length)+
   '<div class="worksheet-question-grid sixteen-grid">'+page.map((x,i)=>questionCard(l,x,p*8+i,"homework")).join("")+'</div>'+
   '<div class="worksheet-footer"><span>Questions '+(p*8+1)+'–'+Math.min(p*8+8,bank.length)+'</span><strong>Solutions are available on screen.</strong></div></article>'
 ).join("")+
 '<div class="lesson-end no-print"><div><span>FINISHED</span><strong>'+esc(l.title)+'</strong></div><button id="nextFromHomework" class="next-lesson-button" type="button">Next lesson <span>→</span></button></div></section>';
}

function renderNotebook(){
 const l=lesson(),d=data(),sm=sow(),root=$("#notebook");
 if(!l||!d){root.innerHTML='<div class="page-loading">This lesson pack is missing from the content data.</div>';return;}
 boardStates.forEach(state=>{state.ro?.disconnect();});
 root.innerHTML=openingHTML(l,d,sm)+teachHTML(l,d,sm)+examplesHTML(l,d)+practiceHTML(l,d)+homeworkHTML(l,d);
 bindRevealButtons();bindTargets();bindExamples();bindPrint();bindWorksheetSolutions();buildSlides();
 $("#nextFromHomework")?.addEventListener("click",()=>goLesson(1));
}

function bindRevealButtons(){
 $$("[data-reveal]").forEach(button=>button.addEventListener("click",()=>{
  const panel=document.getElementById(button.dataset.reveal);if(!panel)return;
  const open=panel.classList.toggle("open");button.classList.toggle("open",open);
  const icon=$(".reveal-icon",button);if(icon)icon.textContent=open?"×":"＋";
 }));
}
function bindTargets(){
 $$("[data-target]").forEach(btn=>{btn.onclick=()=>{const n=slides.findIndex(x=>x.section===btn.dataset.target);if(n>=0)showSlide(n);};});
}
function buildSlides(){
 slides=[
  {section:'opening',node:$('#opening'),label:'Starter'},
  ...$$("#teach .teach-slide").map((node,i)=>({section:'teach',node,label:'Teach '+(i+1)})),
  ...$$(".example-card").map((node,i)=>({section:'examples',node,label:'Example '+(i+1)})),
  ...$$("#practice .print-sheet").map((node,i)=>({section:'practice',node,label:'Independent '+(i+1)})),
  ...$$("#homework .print-sheet").map((node,i)=>({section:'homework',node,label:'Homework '+(i+1)}))
 ];
 let nav=$('#slideControls');
 if(!nav){
   nav=document.createElement('nav');
   nav.id='slideControls';
   nav.className='slide-controls no-print';
   nav.setAttribute('aria-label','Slide navigation');
   nav.innerHTML='<button id="slidePrev" class="slide-nav-btn" type="button"><span>←</span><strong>Previous</strong></button>'+
    '<div class="slide-centre"><span id="slideStatus" aria-live="polite"></span><div class="slide-progress"><span id="slideProgressBar"></span></div></div>'+
    '<button id="slideNext" class="slide-nav-btn primary" type="button"><strong>Next</strong><span>→</span></button>';
   document.body.append(nav);
   $('#slidePrev').onclick=()=>showSlide(slideIndex-1);
   $('#slideNext').onclick=()=>showSlide(slideIndex+1);
 }
 showSlide(0,false);
}
function showSlide(index,scroll=true){
 if(index<0||index>=slides.length)return;
 const previous=slideIndex;
 slideIndex=index;
 const current=slides[index],direction=index>=previous?'forward':'back';
 $$(".section-anchor").forEach(el=>el.hidden=el.id!==current.section);
 $$("#teach .teach-slide").forEach(el=>el.hidden=current.section!=='teach'||el!==current.node);
 $$(".example-card").forEach(el=>el.hidden=current.section!=='examples'||el!==current.node);
 $$("#practice .print-sheet").forEach(el=>el.hidden=current.section!=='practice'||el!==current.node);
 $$("#homework .print-sheet").forEach(el=>el.hidden=current.section!=='homework'||el!==current.node);
 current.node.hidden=false;

 if(current.section==='examples'){
  exampleIndex=$$(".example-card").indexOf(current.node);
  $$(".example-card").forEach((el,i)=>el.classList.toggle('active',i===exampleIndex));
  $$("#exampleDots button").forEach((el,i)=>el.classList.toggle('active',i===exampleIndex));
  if($('#exampleCounter'))$('#exampleCounter').textContent=(exampleIndex+1)+' / '+$$(".example-card").length;
 }

 $$(".flow-button").forEach(b=>b.classList.toggle('active',b.dataset.target===current.section));
 document.body.classList.toggle('presenter-mode',current.section!=='opening');
 document.body.dataset.section=current.section;

 const status=$('#slideStatus');
 if(status)status.textContent=current.label+' · '+(index+1)+' / '+slides.length;
 const progress=$('#slideProgressBar');
 if(progress)progress.style.width=(((index+1)/slides.length)*100)+'%';
 $('#slidePrev').disabled=index===0;
 $('#slideNext').disabled=index===slides.length-1;

 current.node.classList.remove('slide-enter-forward','slide-enter-back');
 void current.node.offsetWidth;
 current.node.classList.add(direction==='forward'?'slide-enter-forward':'slide-enter-back');
 setTimeout(()=>current.node.classList.remove('slide-enter-forward','slide-enter-back'),420);

 typeset(current.node);
 requestAnimationFrame(()=>bindBoards(current.node));
 if(scroll)window.scrollTo({top:0,behavior:'instant'});
}
function bindExamples(){
 const cards=$$(".example-card"),dots=$$("#exampleDots button"),counter=$("#exampleCounter"),count=cards.length;
 if(!count)return;exampleIndex=Math.min(exampleIndex,count-1);
 function show(next){
  const n=Math.max(0,Math.min(count-1,next));
  showSlide(slides.findIndex(x=>x.node===cards[n]));
 }
 $("#examplePrev")?.addEventListener("click",()=>show(exampleIndex-1));
 $("#exampleNext")?.addEventListener("click",()=>show(exampleIndex+1));
 dots.forEach(dot=>dot.addEventListener("click",()=>show(Number(dot.dataset.exampleIndex))));
}

function boardStorageKey(canvas){return "mathora-board:y"+COURSE_YEAR+":"+lesson().id+":"+(canvas.dataset.boardKey||canvas.id);}
function loadBoardState(canvas){
 const key=boardStorageKey(canvas);
 if(boardStates.has(key)){const state=boardStates.get(key);state.canvas=canvas;state.ctx=null;return state;}
 let saved=null;try{saved=JSON.parse(localStorage.getItem(key)||"null");}catch(e){}
 const state={key,strokes:Array.isArray(saved?.strokes)?saved.strokes:[],redo:[],tool:"pen",colour:"#073241",size:3,lastPen:0,canvas,ctx:null,ro:null};
 boardStates.set(key,state);return state;
}
function saveBoard(state){
 try{localStorage.setItem(state.key,JSON.stringify({strokes:state.strokes.slice(-250)}));}catch(e){}
}
function drawOneStroke(state,s){
 const ctx=state.ctx,canvas=state.canvas,rect=canvas.getBoundingClientRect();
 if(!ctx||!rect.width||!s.points?.length)return;
 ctx.save();ctx.globalCompositeOperation=s.tool==="erase"?"destination-out":"source-over";ctx.strokeStyle=themeInk(s.colour||"#073241");ctx.lineCap="round";ctx.lineJoin="round";
 if(s.points.length===1){
   const p=s.points[0];ctx.beginPath();ctx.arc(p.x*rect.width,p.y*rect.height,(s.size||3)*(0.7+(p.p||.5)*.55),0,Math.PI*2);ctx.fillStyle=s.tool==="erase"?"rgba(0,0,0,1)":ctx.strokeStyle;ctx.fill();ctx.restore();return;
 }
 for(let i=1;i<s.points.length;i++){
   const a=s.points[i-1],b=s.points[i],pressure=(a.p+b.p)/2||.5;
   ctx.lineWidth=(s.size||3)*(0.72+pressure*.65);
   ctx.beginPath();ctx.moveTo(a.x*rect.width,a.y*rect.height);ctx.lineTo(b.x*rect.width,b.y*rect.height);ctx.stroke();
 }
 ctx.restore();
}
function redrawBoard(state){
 const c=state.canvas,ctx=state.ctx;if(!ctx)return;
 const r=c.getBoundingClientRect();ctx.clearRect(0,0,r.width,r.height);
 state.strokes.forEach(s=>drawOneStroke(state,s));
}
function resizeBoard(state){
 const c=state.canvas,r=c.parentElement.getBoundingClientRect(),dpr=Math.min(3,window.devicePixelRatio||1);
 if(r.width<10||r.height<10)return;
 c.width=Math.round(r.width*dpr);c.height=Math.round(r.height*dpr);c.style.width=r.width+"px";c.style.height=r.height+"px";
 state.ctx=c.getContext("2d");state.ctx.setTransform(dpr,0,0,dpr,0,0);redrawBoard(state);
}
function bindBoard(canvas){
 if(!canvas||canvas.dataset.bound)return;canvas.dataset.bound="1";
 const state=loadBoardState(canvas),toolbar=document.querySelector('[data-canvas="'+canvas.id+'"]'),wrap=canvas.closest(".interactive-board");
 resizeBoard(state);
 if(window.ResizeObserver){state.ro=new ResizeObserver(()=>resizeBoard(state));state.ro.observe(canvas.parentElement);}
 let drawing=false,current=null;
 const addPoint=e=>{
   const r=canvas.getBoundingClientRect();return{x:Math.max(0,Math.min(1,(e.clientX-r.left)/r.width)),y:Math.max(0,Math.min(1,(e.clientY-r.top)/r.height)),p:Math.max(.15,e.pressure||.45)};
 };
 canvas.addEventListener("contextmenu",e=>e.preventDefault());
 canvas.addEventListener("pointerdown",e=>{
   if(e.pointerType==="pen")state.lastPen=Date.now();
   if(e.pointerType==="touch"&&Date.now()-state.lastPen<5000)return;
   e.preventDefault();drawing=true;canvas.setPointerCapture?.(e.pointerId);
   current={tool:state.tool,colour:state.colour,size:state.size,points:[addPoint(e)]};state.strokes.push(current);state.redo=[];
   drawOneStroke(state,current);
 });
 canvas.addEventListener("pointermove",e=>{
   if(!drawing||!current)return;e.preventDefault();
   const events=e.getCoalescedEvents?e.getCoalescedEvents():[e];
   for(const ev of events)current.points.push(addPoint(ev));
   redrawBoard(state);
 });
 const stop=e=>{if(!drawing)return;e?.preventDefault?.();drawing=false;current=null;saveBoard(state);};
 ["pointerup","pointercancel"].forEach(ev=>canvas.addEventListener(ev,stop));
 if(toolbar){
   $(".pen-dot",toolbar).forEach(dot=>{dot.style.background=themeInk(dot.dataset.colour);dot.addEventListener("click",()=>{state.tool="pen";state.colour=dot.dataset.colour;$$(".pen-dot",toolbar).forEach(x=>x.classList.toggle("active",x===dot));$(".eraser-tool",toolbar)?.classList.remove("active");});});
   $$(".size-tool",toolbar).forEach(btn=>btn.addEventListener("click",()=>{state.size=Number(btn.dataset.size)||3;$$(".size-tool",toolbar).forEach(x=>x.classList.toggle("active",x===btn));}));
   $(".eraser-tool",toolbar)?.addEventListener("click",e=>{state.tool="erase";e.currentTarget.classList.add("active");});
   $(".undo-tool",toolbar)?.addEventListener("click",()=>{const x=state.strokes.pop();if(x)state.redo.push(x);redrawBoard(state);saveBoard(state);});
   $(".redo-tool",toolbar)?.addEventListener("click",()=>{const x=state.redo.pop();if(x)state.strokes.push(x);redrawBoard(state);saveBoard(state);});
   $(".clear-tool",toolbar)?.addEventListener("click",()=>{state.strokes=[];state.redo=[];redrawBoard(state);saveBoard(state);});
   $(".grid-tool",toolbar)?.addEventListener("click",e=>{wrap?.classList.toggle("no-grid");e.currentTarget.classList.toggle("active",!wrap?.classList.contains("no-grid"));});
   $(".expand-tool",toolbar)?.addEventListener("click",e=>{
     const card=canvas.closest(".example-card")||canvas.closest(".teacher-board");
     if(!card)return;
     const open=card.classList.toggle("board-expanded");document.body.classList.toggle("board-open",open);e.currentTarget.textContent=open?"Close":"Expand";
     setTimeout(()=>resizeBoard(state),120);
   });
 }
}
function bindBoards(root=document){$$("canvas[data-board-key]",root).filter(c=>c.getBoundingClientRect().width>0).forEach(bindBoard);}

function bindPrint(){
 $$("[data-print-target]").forEach(button=>button.addEventListener("click",async()=>{
  const sheet=button.closest('.print-sheet');if(!sheet)return;
  const frame=document.createElement('iframe');frame.className='print-frame';frame.title='Printable worksheet';document.body.append(frame);
  const doc=frame.contentDocument,copy=sheet.cloneNode(true);copy.hidden=false;
  copy.querySelectorAll('.no-print,button,.source-credit').forEach(el=>el.remove());
  copy.querySelectorAll('img').forEach(img=>{img.src=new URL(img.getAttribute('src'),location.href).href;img.loading='eager';});
  const ready=new Promise(resolve=>frame.onload=resolve);
  doc.open();doc.write('<!doctype html><html><head><title>'+esc(lesson().title)+' — '+(button.dataset.printTarget==='homework'?'Homework':'Independent practice')+'</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"><style>@page{size:A4 portrait;margin:12mm}*{box-sizing:border-box}body{margin:0;font:12pt Arial,sans-serif;color:#153b4a}h2{font-size:21pt;margin:10px 0}p{line-height:1.5} .worksheet-brand span,.sheet-kicker{font-size:10pt;display:block}.worksheet-brand strong{font-size:15pt}.sheet-meta{display:flex;justify-content:space-between;margin:12px 0 20px}.sheet-meta label:first-child{min-width:55%;border-bottom:1px solid #abc}.worksheet-question-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.worksheet-question{break-inside:avoid;border-top:1px solid #bcd;padding:10px 4px;min-height:48mm}.worksheet-question p{font-size:12pt}.worksheet-q-number{font-weight:bold}.question-diagram svg{width:100%;height:auto;max-height:52mm}.source-extract{display:block;width:100%;height:auto;max-height:225mm;object-fit:contain;object-position:top}.source-image-link{display:block}.textbook-assignment{font-size:10pt;margin:8px 0}.worksheet-footer{font-size:9pt;border-top:1px solid #ccc;margin-top:14px;padding-top:8px;display:flex;justify-content:space-between}.worksheet-logo{display:none}.math{display:inline-block}.katex{font-size:1.05em}.worksheet-top{border-bottom:2px solid #7dc8de;padding-bottom:10px}</style></head><body>'+copy.outerHTML+'</body></html>');doc.close();
  await ready;
  await Promise.all(Array.from(doc.images).map(img=>img.decode().catch(()=>{})));
  await doc.fonts.ready;
  frame.contentWindow.addEventListener('afterprint',()=>frame.remove(),{once:true});
  frame.contentWindow.focus();frame.contentWindow.print();
 }));
}
function ensureSolutionModal(){
 const modal=$("#solutionModal");if(!modal)return null;
 if(!modal.innerHTML)modal.innerHTML='<div class="solution-modal-card"><button class="solution-close" type="button" aria-label="Close">×</button><span class="section-kicker">WORKED SOLUTION</span><h3 id="solutionTitle"></h3><div id="solutionBody"></div></div>';
 if(!modal.dataset.bound){
   modal.dataset.bound="1";modal.addEventListener("click",e=>{if(e.target===modal||e.target.classList.contains("solution-close")){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");}});
 }
 return modal;
}
function bindWorksheetSolutions(){
 const modal=ensureSolutionModal();if(!modal)return;
 const openSolution=(item)=>{
  if(!item)return;
  $("#solutionTitle").innerHTML=fmt(item.prompt);
  $("#solutionBody").innerHTML=(item.steps||[]).map((s,j)=>'<div class="worked-step '+(j===(item.steps||[]).length-1?"final-step":"")+'"><span>'+(j+1)+'</span><p>'+fmt(s)+'</p></div>').join("");
  if(item.solutionDiagram)$("#solutionBody").innerHTML+=VERIFIED.render(item.solutionDiagram);
  typeset(modal);modal.classList.add("open");modal.setAttribute("aria-hidden","false");$(".solution-close",modal)?.focus();
 };
 $$(".solution-btn").forEach(btn=>btn.addEventListener("click",()=>{
  const bank=btn.dataset.bank==="practice"?(window.__currentPractice||[]):(window.__currentHomework||[]);
  openSolution(bank[Number(btn.dataset.index)]);
 }));
 $$(".reveal-all-btn").forEach(btn=>btn.addEventListener("click",()=>{
   const bank=btn.dataset.revealAll==="practice"?(window.__currentPractice||[]):(window.__currentHomework||[]);
   const page=Number(btn.dataset.page)||1,start=(page-1)*8,items=bank.slice(start,start+8);
   $("#solutionTitle").textContent=(btn.dataset.revealAll==="practice"?"Practice":"Homework")+" solutions "+(start+1)+"–"+(start+items.length);
   $("#solutionBody").innerHTML=items.map((item,i)=>'<section class="bulk-solution"><h4>'+(start+i+1)+'. '+fmt(item.prompt)+'</h4>'+(item.steps||[]).map((s,j)=>'<div class="worked-step '+(j===(item.steps||[]).length-1?"final-step":"")+'"><span>'+(j+1)+'</span><p>'+fmt(s)+'</p></div>').join("")+'</section>').join("");
   typeset(modal);modal.classList.add("open");modal.setAttribute("aria-hidden","false");$(".solution-close",modal)?.focus();
 }));
}

function updateHeader(){
 const l=lesson(),sm=sow();if(!l)return;
 $("#currentUnit").textContent="UNIT "+l.u+" • "+l.unit.toUpperCase();
 $("#currentLessonTitle").textContent=l.title;
 $("#currentLessonId").textContent="Lesson "+l.id+" • "+(currentIndex+1)+" of "+LESSONS.length;
 $("#courseProgress").textContent=(currentIndex+1)+" of "+LESSONS.length+" selected";
 if($("#openLessonsBtn"))$("#openLessonsBtn").innerHTML="Year "+COURSE_YEAR+" <span>• Lessons ⌄</span>";
 $("#prevLessonBtn").disabled=currentIndex===0;$("#nextLessonBtn").disabled=currentIndex===LESSONS.length-1;
 document.title=l.id+" "+l.title+" | NES";
}
function goLesson(delta){
 const next=currentIndex+delta;if(next<0||next>=LESSONS.length)return;
 currentIndex=next;exampleIndex=0;location.hash=LESSONS[currentIndex].id;renderAll();window.scrollTo({top:0,behavior:"smooth"});
}
function initFromHash(){
 const id=decodeURIComponent(location.hash.replace(/^#/,"")),i=LESSONS.findIndex(l=>l.id===id);if(i>=0)currentIndex=i;
}
function validate(){
 return LESSONS.length===EXPECTED_LESSONS&&LESSONS.every(l=>CONTENT[l.id]&&SOW[l.id]);
}
function renderAll(){
 updateHeader();renderLessonDrawer($("#lessonSearch")?.value||"");renderNotebook();
}
function start(){
 initTheme();
 if(!validate()){ $("#notebook").innerHTML='<div class="page-loading">The SoW/content map is incomplete. Refresh after deployment.</div>';return;}
 initFromHash();
 $("#lessonSearch")?.addEventListener("input",e=>renderLessonDrawer(e.target.value));
 $("#openLessonsBtn")?.addEventListener("click",openDrawer);$("#closeLessonsBtn")?.addEventListener("click",closeDrawer);
 $("#lessonDrawer")?.addEventListener("click",e=>{if(e.target.id==="lessonDrawer")closeDrawer();});
 document.addEventListener("keydown",e=>{if(e.key==="Escape"){
   closeDrawer();$(".board-expanded").forEach(x=>x.classList.remove("board-expanded"));document.body.classList.remove("board-open");
   $("#solutionModal")?.classList.remove("open");$("#solutionModal")?.setAttribute("aria-hidden","true");
   if(document.body.classList.contains("focus-mode")){document.body.classList.remove("focus-mode");const t=$("#focusBtn .focus-text");if(t)t.textContent="Focus";}
 }});
 $("#focusBtn")?.addEventListener("click",e=>{
   document.body.classList.toggle("focus-mode");
   $(".focus-text",e.currentTarget).textContent=document.body.classList.contains("focus-mode")?"Exit focus":"Focus";
 });
 $("#themeBtn")?.addEventListener("click",toggleTheme);
 $("#prevLessonBtn")?.addEventListener("click",()=>goLesson(-1));$("#nextLessonBtn")?.addEventListener("click",()=>goLesson(1));
 window.addEventListener("hashchange",()=>{const old=currentIndex;initFromHash();if(old!==currentIndex){exampleIndex=0;renderAll();}});
 document.addEventListener("keydown",e=>{if(["INPUT","TEXTAREA","SELECT","BUTTON"].includes(e.target.tagName)||$(".solution-modal.open")||$(".lesson-drawer.open"))return;if(e.key==="ArrowRight"||e.key==="PageDown"){e.preventDefault();showSlide(slideIndex+1);}if(e.key==="ArrowLeft"||e.key==="PageUp"){e.preventDefault();showSlide(slideIndex-1);}});
 let swipeStartX=null,swipeStartY=null;
 document.addEventListener("touchstart",e=>{if(e.touches.length!==1)return;swipeStartX=e.touches[0].clientX;swipeStartY=e.touches[0].clientY;},{passive:true});
 document.addEventListener("touchend",e=>{
   if(swipeStartX===null||!e.changedTouches?.length)return;
   const dx=e.changedTouches[0].clientX-swipeStartX,dy=e.changedTouches[0].clientY-swipeStartY;
   swipeStartX=swipeStartY=null;
   if(Math.abs(dx)>70&&Math.abs(dx)>Math.abs(dy)*1.35)showSlide(slideIndex+(dx<0?1:-1));
 },{passive:true});
 renderAll();document.documentElement.dataset.ready="1";
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();