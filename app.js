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

const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));

let currentIndex=0;
let exampleIndex=0;
let sectionObserver=null;
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
  '<div class="opening-brand compact-opening-brand"><div class="cover-logo"></div><div class="opening-school-copy"><span>NEW ENGLISH SCHOOL • YEAR 10</span><strong>'+esc(l.unit.toUpperCase())+'</strong></div><div class="lesson-chip">LESSON '+esc(l.id)+'</div></div>'+
  '<div class="title-starter-hero clean-title-hero">'+
    '<div class="title-block-compact"><div class="title-meta-line"><span>'+esc(today(true))+'</span></div><p class="overline">YEAR 10 MATHEMATICS</p><h1>'+esc(l.title)+'</h1><p class="lesson-intro compact-intro">'+fmt(d.explain)+'</p></div>'+
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
 const visuals="";
 return '<section class="notebook-page section-anchor" id="teach"><div class="page-margin-line"></div>'+
  '<div class="section-head"><div><span class="section-kicker">02</span><h2>Key ideas</h2></div></div>'+
  '<div class="teach-grid deep-teach clean-teach">'+
   '<article class="note-card cyan-note"><small>LEARN</small><h3>Key points</h3><ul class="teach-list">'+key+'</ul></article>'+
   '<article class="note-card white-note"><small>KEEP</small><h3>Rules</h3><div class="teach-rules">'+rules+'</div></article>'+
   '<article class="note-card soft-note"><small>CHECK</small><h3>Common mistakes</h3><ul class="teach-list mistakes">'+mistakes+'</ul></article>'+
  '</div>'+visuals+
  '<div class="method-card clean-method"><div><span class="section-kicker">METHOD</span><h3>Steps</h3></div><ol>'+method+'</ol></div>'+
  '<div class="teacher-board"><div class="board-title"><div><span>WHITEBOARD</span><strong>Working space</strong></div><small>Apple Pencil / touch</small></div>'+boardMarkup("teachCanvas","teach",true)+'</div>'+
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
 const question=e.sourceQuestion?sourceImage(e.sourceQuestion,e.source):"";
 const answer=e.sourceSolution?sourceImage(e.sourceSolution,"Original worked solution — "+e.source):"";
 return '<article class="example-card '+(i===exampleIndex?"active":"")+'" data-example="'+i+'">'+
  '<div class="example-topline"><span class="example-number">EXAMPLE '+(i+1)+'</span><span class="example-progress">'+(i+1)+' / '+allExamples(l,d).length+'</span></div>'+
  '<div class="example-workspace example-split-workspace clean-example-workspace">'+
    '<aside class="example-question-pane"><div class="example-question"><h3>'+fmt(e.prompt)+'</h3></div>'+question+(e.source?'<p class="source-credit">'+esc(e.source)+'</p>':'')+
      (diagram?'<div class="example-diagram-panel">'+diagram+'</div>':"")+
    '</aside>'+
    '<div class="example-board-panel"><div class="board-prompt-pin"><strong>'+fmt(e.prompt)+'</strong></div>'+boardMarkup("exampleCanvas"+i,l.id+"-example-"+i,false)+'</div>'+
  '</div>'+
  '<button class="reveal-button full-width example-solution-toggle" data-reveal="exampleSolution'+i+'" type="button"><span class="reveal-icon">＋</span>Solution</button>'+
  '<div class="reveal-panel solution-panel" id="exampleSolution'+i+'">'+answer+(e.steps||[]).map((s,j)=>'<div class="worked-step '+(j===(e.steps||[]).length-1?"final-step":"")+'"><span>'+(j+1)+'</span><p>'+fmt(s)+'</p></div>').join("")+'</div>'+
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
 return '<div class="worksheet-top"><div class="worksheet-brand"><div class="worksheet-logo"></div><div><span>NEW ENGLISH SCHOOL • YEAR 10</span><strong>'+esc(title)+'</strong></div></div><div class="worksheet-actions no-print"><button class="sheet-action reveal-all-btn" type="button" data-reveal-all="'+id+'" data-page="'+page+'">Show solutions</button><button class="sheet-action" type="button" data-print-target="'+id+'">Print</button></div></div>'+
  '<div class="worksheet-title-row"><div><span class="sheet-kicker">LESSON '+esc(l.id)+' • '+page+'/'+total+'</span><h2>'+esc(l.title)+'</h2></div><div class="sheet-meta"><label>Name <span></span></label><label>Date <strong>'+esc(today(false))+'</strong></label></div></div>';
}
function questionCard(l,x,globalIndex,kind){
 const diagram=VERIFIED.render(x.verifiedDiagram);
 return '<article class="worksheet-question compact-question '+(diagram?"has-diagram":"")+'">'+
  '<div class="worksheet-q-head"><span class="worksheet-q-number">'+String(globalIndex+1).padStart(2,"0")+'</span><button class="answer-toggle no-print solution-btn" data-bank="'+kind+'" data-index="'+globalIndex+'" type="button">Solution</button></div>'+
  '<p>'+fmt(x.prompt)+'</p>'+(x.source?'<p class="source-credit">'+esc(x.source)+'</p>':'')+(diagram?'<div class="question-diagram">'+diagram+'</div>':"")+
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
 const practice=unique([...(window.SOURCE_QUESTIONS?.[l.id]||[]),...(generated.practice||[]).slice(0,8)]);
 const homework=unique(d.homework||[]);
 return {practice,homework};
}
function sourceImage(asset,alt){
 return '<a class="source-image-link" href="'+esc(asset.image)+'" target="_blank" rel="noopener" title="Open full-size extract"><img class="source-extract" src="'+esc(asset.image)+'" width="'+asset.width+'" height="'+asset.height+'" loading="lazy" alt="'+esc(alt)+'"></a>';
}
function sourceMaterials(l,kind){
 const b=BOOKS[l.id];if(!b)return "";
 const assets=b[kind]||[];if(!assets.length)return "";
 const ox=kind==='homework';
 const assigned=b[kind+'Assignment']||(ox?'Complete the questions for this topic shown below.':'Work through the selected exercise, starting with routine questions and progressing to applications.');
 return '<section class="textbook-section print-sheet" data-print-sheet="'+kind+'"><div class="section-head"><div><span class="section-kicker">'+(ox?'EXAM SUCCESS':'CAMBRIDGE COURSEBOOK')+'</span><h2>'+(ox?'Textbook homework':'Textbook practice')+'</h2></div></div><p class="textbook-assignment">'+esc(assigned)+'</p>'+(b.supportingSelection?'<p class="source-credit">Supporting selection for this objective; the scheme of work does not specify a textbook exercise.</p>':'')+'<div class="source-pages">'+assets.map((a,i)=>'<details class="source-page" '+(i===0?'open':'')+'><summary>Page '+a.page+' · '+esc(a.heading||'Selected questions')+'</summary><p class="source-credit">'+(a.book==='oxford'?'Bettison & Taylor, Exam Success (2021)':'Morrison & Hamshaw, Cambridge IGCSE Mathematics (2023)')+' · printed p. '+a.page+' · PDF p. '+a.pdfPage+'</p>'+sourceImage(a,'Original '+(ox?'Exam Success':'Coursebook')+' questions and diagrams, printed page '+a.page)+'</details>').join('')+'</div></section>';
}
function practiceHTML(l,d){
 const bank=solvedQuestionSets(l,d).practice;
 window.__currentPractice=bank;
 const pages=Array.from({length:Math.ceil(bank.length/8)},(_,i)=>bank.slice(i*8,i*8+8));
 return '<section class="section-anchor sheet-stack" id="practice">'+sourceMaterials(l,'practice')+pages.map((page,p)=>
  '<article class="worksheet-slide clean-question-sheet print-sheet" data-print-sheet="practice">'+worksheetHeader(l,"Further practice","practice",p+1,pages.length)+
   '<div class="worksheet-question-grid sixteen-grid">'+page.map((x,i)=>questionCard(l,x,p*8+i,"practice")).join("")+'</div>'+
   '<div class="worksheet-footer"><span>Questions '+(p*8+1)+'–'+(p*8+8)+'</span><strong>Show clear working in your book.</strong></div></article>'
 ).join("")+'</section>';
}
function homeworkHTML(l,d){
 const bank=solvedQuestionSets(l,d).homework;
 window.__currentHomework=bank;
 const pages=Array.from({length:Math.ceil(bank.length/8)},(_,i)=>bank.slice(i*8,i*8+8));
 return '<section class="section-anchor sheet-stack" id="homework">'+sourceMaterials(l,'homework')+pages.map((page,p)=>
  '<article class="worksheet-slide homework-sheet clean-question-sheet print-sheet" data-print-sheet="homework">'+worksheetHeader(l,"Further homework","homework",p+1,pages.length)+
   '<div class="worksheet-question-grid sixteen-grid">'+page.map((x,i)=>questionCard(l,x,p*8+i,"homework")).join("")+'</div>'+
   '<div class="worksheet-footer"><span>Questions '+(p*8+1)+'–'+(p*8+8)+'</span><strong>Solutions are available on screen.</strong></div></article>'
 ).join("")+
 '<div class="lesson-end no-print"><div><span>FINISHED</span><strong>'+esc(l.title)+'</strong></div><button id="nextFromHomework" class="next-lesson-button" type="button">Next lesson <span>→</span></button></div></section>';
}

function renderNotebook(){
 const l=lesson(),d=data(),sm=sow(),root=$("#notebook");
 if(!l||!d){root.innerHTML='<div class="page-loading">This lesson pack is missing from the content data.</div>';return;}
 root.innerHTML=openingHTML(l,d,sm)+teachHTML(l,d,sm)+examplesHTML(l,d)+practiceHTML(l,d)+homeworkHTML(l,d);
 typeset(root);
 bindRevealButtons();bindTargets();bindExamples();bindBoards();bindPrint();bindWorksheetSolutions();bindSectionObserver();
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
 $$("[data-target]").forEach(btn=>btn.addEventListener("click",()=>{
   const target=document.getElementById(btn.dataset.target);if(target)target.scrollIntoView({behavior:"smooth",block:"start"});
 }));
}
function bindSectionObserver(){
 if(sectionObserver)sectionObserver.disconnect();
 sectionObserver=new IntersectionObserver(entries=>{
   const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
   if(!visible)return;
   $$(".flow-button").forEach(b=>b.classList.toggle("active",b.dataset.target===visible.target.id));
 },{rootMargin:"-150px 0px -55% 0px",threshold:[.08,.2,.45]});
 $$(".section-anchor").forEach(s=>sectionObserver.observe(s));
}

function bindExamples(){
 const cards=$$(".example-card"),dots=$$("#exampleDots button"),counter=$("#exampleCounter"),count=cards.length;
 if(!count)return;exampleIndex=Math.min(exampleIndex,count-1);
 function show(next){
   exampleIndex=(next+count)%count;
   cards.forEach((c,i)=>c.classList.toggle("active",i===exampleIndex));
   dots.forEach((x,i)=>x.classList.toggle("active",i===exampleIndex));
   counter.textContent=(exampleIndex+1)+" / "+count;
   setTimeout(()=>{typeset(cards[exampleIndex]);bindBoards(cards[exampleIndex]);},40);
 }
 $("#examplePrev")?.addEventListener("click",()=>show(exampleIndex-1));
 $("#exampleNext")?.addEventListener("click",()=>show(exampleIndex+1));
 dots.forEach(dot=>dot.addEventListener("click",()=>show(Number(dot.dataset.exampleIndex))));
}

function boardStorageKey(canvas){return "mathora-board:"+lesson().id+":"+(canvas.dataset.boardKey||canvas.id);}
function loadBoardState(canvas){
 const key=boardStorageKey(canvas);
 if(boardStates.has(key))return boardStates.get(key);
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
 ctx.save();ctx.globalCompositeOperation=s.tool==="erase"?"destination-out":"source-over";ctx.strokeStyle=s.colour||"#073241";ctx.lineCap="round";ctx.lineJoin="round";
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
   $$(".pen-dot",toolbar).forEach(dot=>{dot.style.background=dot.dataset.colour;dot.addEventListener("click",()=>{state.tool="pen";state.colour=dot.dataset.colour;$$(".pen-dot",toolbar).forEach(x=>x.classList.toggle("active",x===dot));$(".eraser-tool",toolbar)?.classList.remove("active");});});
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
function bindBoards(root=document){$$("canvas[data-board-key]",root).forEach(bindBoard);}

function bindPrint(){
 $$("[data-print-target]").forEach(button=>button.addEventListener("click",()=>{
  const cls=button.dataset.printTarget==="homework"?"print-homework":"print-practice";
  document.body.classList.add(cls);const cleanup=()=>document.body.classList.remove(cls);
  window.addEventListener("afterprint",cleanup,{once:true});setTimeout(()=>window.print(),60);setTimeout(cleanup,3500);
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
  typeset(modal);modal.classList.add("open");modal.setAttribute("aria-hidden","false");
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
   typeset(modal);modal.classList.add("open");modal.setAttribute("aria-hidden","false");
 }));
}

function updateHeader(){
 const l=lesson(),sm=sow();if(!l)return;
 $("#currentUnit").textContent="UNIT "+l.u+" • "+l.unit.toUpperCase();
 $("#currentLessonTitle").textContent=l.title;
 $("#currentLessonId").textContent="Lesson "+l.id+" • "+(currentIndex+1)+" of "+LESSONS.length;
 $("#courseProgress").textContent=(currentIndex+1)+" of "+LESSONS.length+" selected";
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
 return LESSONS.length===47&&LESSONS.every(l=>CONTENT[l.id]&&SOW[l.id]);
}
function renderAll(){
 updateHeader();renderLessonDrawer($("#lessonSearch")?.value||"");renderNotebook();
}
function start(){
 if(!validate()){ $("#notebook").innerHTML='<div class="page-loading">The SoW/content map is incomplete. Refresh after deployment.</div>';return;}
 initFromHash();
 $("#lessonSearch")?.addEventListener("input",e=>renderLessonDrawer(e.target.value));
 $("#openLessonsBtn")?.addEventListener("click",openDrawer);$("#closeLessonsBtn")?.addEventListener("click",closeDrawer);
 $("#lessonDrawer")?.addEventListener("click",e=>{if(e.target.id==="lessonDrawer")closeDrawer();});
 document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeDrawer();$$(".board-expanded").forEach(x=>x.classList.remove("board-expanded"));document.body.classList.remove("board-open");}});
 $("#focusBtn")?.addEventListener("click",e=>{document.body.classList.toggle("focus-mode");$(".focus-text",e.currentTarget).textContent=document.body.classList.contains("focus-mode")?"Exit focus":"Focus";});
 $("#prevLessonBtn")?.addEventListener("click",()=>goLesson(-1));$("#nextLessonBtn")?.addEventListener("click",()=>goLesson(1));
 window.addEventListener("hashchange",()=>{const old=currentIndex;initFromHash();if(old!==currentIndex){exampleIndex=0;renderAll();}});
 renderAll();document.documentElement.dataset.ready="1";
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();