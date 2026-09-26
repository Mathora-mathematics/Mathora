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
 $$(".pen-dot").forEach(dot=>{dot.style.background=themeInk(dot.dataset.colour);});
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
    '<div class="title-block-compact"><p class="overline">YEAR '+COURSE_YEAR+' MATHEMATICS • LESSON '+esc(l.id)+'</p><div class="lesson-title-date-row"><h1>'+esc(l.title)+'</h1><div class="student-date-pill"><span>DATE</span><strong>'+esc(today(false))+'</strong></div></div><p class="lesson-intro compact-intro">'+fmt(d.explain)+'</p></div>'+
    '<div class="lesson-focus-card"><span>KEY FOCUS</span><strong>'+esc((l.obj||[]).slice(0,4).join(" • "))+'</strong></div>'+
  '</div>'+
  '<div class="starter-header compact-starter-head"><div><span class="section-kicker">STARTER</span><h2>Quick start</h2></div><button class="reveal-button" data-reveal="starterSolution" type="button"><span class="reveal-icon">＋</span>Solutions</button></div>'+
  '<div class="starter-grid title-starter-grid">'+starterCards(l)+'</div>'+
  '<div class="reveal-panel starter-solutions" id="starterSolution">'+starterSolutions(l)+'</div>'+
  '<div class="opening-footer compact-opening-footer"><div class="lesson-note"><span>LESSON</span><strong>'+esc(l.title)+' • '+esc(today(false))+'</strong></div><button class="start-button" data-target="teach" type="button">Continue <span>→</span></button></div>'+
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

function sheetAnnotationMarkup(id,key){
 return '<div class="sheet-annotation-wrap interactive-board" data-board-key="'+esc(key)+'">'+
  '<div class="working-toolbar sheet-annotation-toolbar no-print" data-canvas="'+id+'">'+
   '<div class="tool-cluster"><span class="tool-label">PEN</span>'+
    '<button class="pen-dot active" data-colour="#073241" type="button" aria-label="Dark pen"></button>'+
    '<button class="pen-dot" data-colour="#00aee6" type="button" aria-label="Blue pen"></button>'+
    '<button class="pen-dot" data-colour="#d85858" type="button" aria-label="Red pen"></button>'+
    '<button class="pen-dot" data-colour="#2a9d76" type="button" aria-label="Green pen"></button>'+
   '</div>'+
   '<div class="tool-cluster"><button class="mini-tool size-tool active" data-size="3" type="button">Thin</button><button class="mini-tool size-tool" data-size="6" type="button">Medium</button><button class="mini-tool size-tool" data-size="10" type="button">Thick</button></div>'+
   '<div class="tool-cluster board-actions"><button class="mini-tool eraser-tool" type="button">Eraser</button><button class="mini-tool undo-tool" type="button">Undo</button><button class="mini-tool redo-tool" type="button">Redo</button><button class="mini-tool clear-tool danger" type="button">Clear</button><button class="mini-tool done-annotate-tool" data-annotation-done="'+id+'" type="button">Done</button></div>'+
  '</div>'+
  '<canvas id="'+id+'" class="sheet-annotation-canvas" data-board-key="'+esc(key)+'" aria-label="Page annotation layer"></canvas>'+
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
  '<div class="section-head example-head"><div><span class="section-kicker">03</span><h2>Examples</h2></div><div class="example-nav"><button class="sheet-action example-print-all" type="button" data-print-target="examples">Print all / PDF</button><button id="examplePrev" class="round-button" type="button">←</button><span id="exampleCounter">'+(exampleIndex+1)+' / '+ex.length+'</span><button id="exampleNext" class="round-button dark" type="button">→</button></div></div>'+
  '<div class="example-deck" id="exampleDeck">'+ex.map((e,i)=>exampleCard(l,d,e,i)).join("")+'</div>'+
  '<div class="example-dots" id="exampleDots">'+ex.map((_,i)=>'<button class="'+(i===exampleIndex?"active":"")+'" data-example-index="'+i+'" type="button" aria-label="Example '+(i+1)+'"></button>').join("")+'</div>'+
 '</section>';
}

function worksheetHeader(l,title,id,page,total,annotationId){
 const annotate=annotationId?'<button class="sheet-action annotate-page-btn" type="button" data-annotate-target="'+annotationId+'">✎ Annotate</button>':'';
 return '<div class="worksheet-top"><div class="worksheet-brand"><div class="worksheet-logo"></div><div><span>NEW ENGLISH SCHOOL • YEAR '+COURSE_YEAR+'</span><strong>'+esc(title)+'</strong></div></div><div class="worksheet-actions no-print"><button class="sheet-action reveal-all-btn" type="button" data-reveal-all="'+id+'" data-page="'+page+'">Show solutions</button>'+annotate+'<button class="sheet-action print-all-btn" type="button" data-print-target="'+id+'">Print all / PDF</button></div></div>'+
  '<div class="worksheet-title-row"><div><span class="sheet-kicker">LESSON '+esc(l.id)+' • '+page+'/'+total+'</span><div class="worksheet-title-date"><h2>'+esc(l.title)+'</h2><span>'+esc(today(false))+'</span></div></div><div class="sheet-meta"><label>Name <span></span></label></div></div>';
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
 return (b[kind]||[]).map((a,i,arr)=>{
  const aid=kind+'SourceAnnot'+i;
  return '<article class="worksheet-slide textbook-section print-sheet annotatable-sheet" data-print-sheet="'+kind+'">'+worksheetHeader(l,kind==='homework'?'Homework':'Independent practice',kind,i+1,arr.length,aid).replace(/<button class="sheet-action reveal-all-btn"[\s\S]*?<\/button>/,'')+'<p class="textbook-assignment">'+esc(b[kind+'Assignment']||'Complete the questions below. Show clear working.')+'</p>'+sourceImage(a,'Questions and diagrams')+sheetAnnotationMarkup(aid,l.id+'-'+kind+'-source-'+i)+'</article>';
 }).join('');
}

function practiceHTML(l,d){
 const bank=solvedQuestionSets(l,d).practice;
 window.__currentPractice=bank;
 const pages=Array.from({length:Math.ceil(bank.length/8)},(_,i)=>bank.slice(i*8,i*8+8));
 const sourceCount=(BOOKS[l.id]?.practice||[]).length;
 const total=sourceCount+pages.length;
 return '<section class="section-anchor sheet-stack" id="practice">'+sourceMaterials(l,'practice')+pages.map((page,p)=>{
  const aid='practiceAnnot'+p;
  return '<article class="worksheet-slide clean-question-sheet print-sheet annotatable-sheet" data-print-sheet="practice">'+worksheetHeader(l,"Independent practice","practice",sourceCount+p+1,total,aid)+
   '<div class="worksheet-question-grid sixteen-grid">'+page.map((x,i)=>questionCard(l,x,p*8+i,"practice")).join("")+'</div>'+
   '<div class="worksheet-footer"><span>Questions '+(p*8+1)+'–'+Math.min(p*8+8,bank.length)+'</span><strong>Show clear working in your book.</strong></div>'+sheetAnnotationMarkup(aid,l.id+'-practice-page-'+p)+'</article>';
 }).join("")+'</section>';
}

function homeworkHTML(l,d){
 const bank=solvedQuestionSets(l,d).homework;
 window.__currentHomework=bank;
 const pages=Array.from({length:Math.ceil(bank.length/8)},(_,i)=>bank.slice(i*8,i*8+8));
 const sourceCount=(BOOKS[l.id]?.homework||[]).length;
 const total=sourceCount+pages.length;
 return '<section class="section-anchor sheet-stack" id="homework">'+sourceMaterials(l,'homework')+pages.map((page,p)=>{
  const aid='homeworkAnnot'+p;
  return '<article class="worksheet-slide homework-sheet clean-question-sheet print-sheet annotatable-sheet" data-print-sheet="homework">'+worksheetHeader(l,"Homework","homework",sourceCount+p+1,total,aid)+
   '<div class="worksheet-question-grid sixteen-grid">'+page.map((x,i)=>questionCard(l,x,p*8+i,"homework")).join("")+'</div>'+
   '<div class="worksheet-footer"><span>Questions '+(p*8+1)+'–'+Math.min(p*8+8,bank.length)+'</span><strong>Solutions are available on screen.</strong></div>'+sheetAnnotationMarkup(aid,l.id+'-homework-page-'+p)+'</article>';
 }).join("")+
 '<div class="lesson-end no-print"><div><span>FINISHED</span><strong>'+esc(l.title)+'</strong></div><button id="nextFromHomework" class="next-lesson-button" type="button">Next lesson <span>→</span></button></div></section>';
}

function renderNotebook(){
 const l=lesson(),d=data(),sm=sow(),root=$("#notebook");
 if(!l||!d){root.innerHTML='<div class="page-loading">This lesson pack is missing from the content data.</div>';return;}
 boardStates.forEach(state=>{state.ro?.disconnect();});
 root.innerHTML=openingHTML(l,d,sm)+teachHTML(l,d,sm)+examplesHTML(l,d)+practiceHTML(l,d)+homeworkHTML(l,d);
 bindRevealButtons();bindTargets();bindExamples();bindPrint();bindWorksheetSolutions();bindAnnotationButtons();buildSlides();
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
 if(!canvas||canvas.dataset.bound)return;
 canvas.dataset.bound="1";
 const state=loadBoardState(canvas);
 const toolbar=document.querySelector('[data-canvas="'+canvas.id+'"]');
 const wrap=canvas.closest(".interactive-board");
 resizeBoard(state);
 if(window.ResizeObserver){
  state.ro=new ResizeObserver(()=>resizeBoard(state));
  state.ro.observe(canvas.parentElement);
 }

 let drawing=false,current=null;
 const addPoint=e=>{
  const r=canvas.getBoundingClientRect();
  return{
   x:Math.max(0,Math.min(1,(e.clientX-r.left)/Math.max(1,r.width))),
   y:Math.max(0,Math.min(1,(e.clientY-r.top)/Math.max(1,r.height))),
   p:Math.max(.15,e.pressure||.45)
  };
 };
 const finishStroke=e=>{
  if(!drawing)return;
  e?.preventDefault?.();
  drawing=false;current=null;saveBoard(state);
 };

 canvas.addEventListener("contextmenu",e=>e.preventDefault());
 canvas.addEventListener("pointerdown",e=>{
  if(e.pointerType==="pen")state.lastPen=Date.now();
  if(e.pointerType==="touch"&&Date.now()-state.lastPen<1400)return;
  e.preventDefault();
  drawing=true;
  canvas.setPointerCapture?.(e.pointerId);
  current={tool:state.tool,colour:state.colour,size:state.size,points:[addPoint(e)]};
  state.strokes.push(current);state.redo=[];
  drawOneStroke(state,current);
 });
 canvas.addEventListener("pointermove",e=>{
  if(!drawing||!current)return;
  e.preventDefault();
  const events=e.getCoalescedEvents?e.getCoalescedEvents():[e];
  events.forEach(ev=>current.points.push(addPoint(ev)));
  redrawBoard(state);
 });
 ["pointerup","pointercancel","lostpointercapture"].forEach(ev=>canvas.addEventListener(ev,finishStroke));

 if(!toolbar)return;

 const syncToolUI=()=>{
  $$(".pen-dot",toolbar).forEach(dot=>{
   dot.style.background=themeInk(dot.dataset.colour);
   dot.classList.toggle("active",state.tool==="pen"&&String(dot.dataset.colour).toLowerCase()===String(state.colour).toLowerCase());
  });
  $$(".size-tool",toolbar).forEach(btn=>btn.classList.toggle("active",Number(btn.dataset.size)===Number(state.size)));
  $(".eraser-tool",toolbar)?.classList.toggle("active",state.tool==="erase");
  const undo=$(".undo-tool",toolbar),redo=$(".redo-tool",toolbar);
  if(undo)undo.disabled=state.strokes.length===0;
  if(redo)redo.disabled=state.redo.length===0;
 };
 syncToolUI();

 toolbar.addEventListener("click",e=>{
  const button=e.target.closest("button");
  if(!button||!toolbar.contains(button))return;
  e.preventDefault();

  if(button.classList.contains("pen-dot")){
   state.tool="pen";
   state.colour=button.dataset.colour||"#073241";
   syncToolUI();return;
  }
  if(button.classList.contains("size-tool")){
   state.size=Number(button.dataset.size)||3;
   syncToolUI();return;
  }
  if(button.classList.contains("eraser-tool")){
   state.tool=state.tool==="erase"?"pen":"erase";
   syncToolUI();return;
  }
  if(button.classList.contains("undo-tool")){
   const stroke=state.strokes.pop();
   if(stroke)state.redo.push(stroke);
   redrawBoard(state);saveBoard(state);syncToolUI();return;
  }
  if(button.classList.contains("redo-tool")){
   const stroke=state.redo.pop();
   if(stroke)state.strokes.push(stroke);
   redrawBoard(state);saveBoard(state);syncToolUI();return;
  }
  if(button.classList.contains("clear-tool")){
   state.strokes=[];state.redo=[];
   redrawBoard(state);saveBoard(state);syncToolUI();return;
  }
  if(button.classList.contains("grid-tool")){
   wrap?.classList.toggle("no-grid");
   button.classList.toggle("active",!wrap?.classList.contains("no-grid"));
   return;
  }
  if(button.classList.contains("expand-tool")){
   const card=canvas.closest(".example-card")||canvas.closest(".teacher-board");
   if(!card)return;
   const open=card.classList.toggle("board-expanded");
   document.body.classList.toggle("board-open",open);
   button.classList.toggle("active",open);
   button.textContent=open?"Close":"Expand";
   setTimeout(()=>resizeBoard(state),120);
  }
 });
}

function bindBoards(root=document){$$("canvas[data-board-key]",root).filter(c=>c.getBoundingClientRect().width>0).forEach(bindBoard);}


function bindAnnotationButtons(){
 $$("[data-annotate-target]").forEach(button=>{
  if(button.dataset.annotationBound)return;button.dataset.annotationBound="1";
  button.addEventListener("click",()=>{
   const canvas=document.getElementById(button.dataset.annotateTarget);if(!canvas)return;
   const wrap=canvas.closest(".sheet-annotation-wrap");if(!wrap)return;
   const open=!wrap.classList.contains("annotating");
   $$(".sheet-annotation-wrap.annotating").forEach(x=>x!==wrap&&x.classList.remove("annotating"));
   $$(".annotate-page-btn").forEach(x=>{if(x!==button){x.classList.remove("active");x.textContent="✎ Annotate";}});
   wrap.classList.toggle("annotating",open);
   button.classList.toggle("active",open);
   button.textContent=open?"Done annotating":"✎ Annotate";
   if(open){bindBoard(canvas);setTimeout(()=>resizeBoard(loadBoardState(canvas)),40);}
  });
 });
 $$("[data-annotation-done]").forEach(done=>{
  if(done.dataset.annotationBound)return;done.dataset.annotationBound="1";
  done.addEventListener("click",()=>{
   const canvas=document.getElementById(done.dataset.annotationDone);if(!canvas)return;
   canvas.closest(".sheet-annotation-wrap")?.classList.remove("annotating");
   const button=$$("[data-annotate-target]").find(x=>x.dataset.annotateTarget===done.dataset.annotationDone);
   if(button){button.classList.remove("active");button.textContent="✎ Annotate";}
  });
 });
}

function storedStrokes(canvas){
 const key=boardStorageKey(canvas),live=boardStates.get(key);
 if(live?.strokes)return live.strokes;
 try{
  const saved=JSON.parse(localStorage.getItem(key)||"null");
  return Array.isArray(saved?.strokes)?saved.strokes:[];
 }catch(e){return [];}
}

function boardSnapshot(canvas){
 const strokes=storedStrokes(canvas),annotation=canvas.classList.contains("sheet-annotation-canvas");
 const visible=canvas.getBoundingClientRect(),fallbackRatio=annotation?(297/210):1.58;
 const ratio=visible.width>20&&visible.height>20?visible.width/visible.height:fallbackRatio;
 const width=annotation?1680:1600,height=Math.max(600,Math.round(width/ratio));
 const surface=document.createElement("canvas");surface.width=width;surface.height=height;
 const ctx=surface.getContext("2d");
 ctx.clearRect(0,0,width,height);
 const scale=width/900;
 strokes.forEach(s=>{
  if(!s?.points?.length)return;
  ctx.save();ctx.globalCompositeOperation=s.tool==="erase"?"destination-out":"source-over";
  ctx.strokeStyle=s.colour||"#073241";ctx.fillStyle=s.colour||"#073241";ctx.lineCap="round";ctx.lineJoin="round";
  if(s.points.length===1){
   const p=s.points[0];ctx.beginPath();ctx.arc(p.x*width,p.y*height,(s.size||3)*scale*(.7+(p.p||.5)*.55),0,Math.PI*2);ctx.fill();
  }else{
   for(let i=1;i<s.points.length;i++){
    const a=s.points[i-1],b=s.points[i],pressure=(a.p+b.p)/2||.5;
    ctx.lineWidth=(s.size||3)*scale*(.72+pressure*.65);
    ctx.beginPath();ctx.moveTo(a.x*width,a.y*height);ctx.lineTo(b.x*width,b.y*height);ctx.stroke();
   }
  }
  ctx.restore();
 });
 return {url:surface.toDataURL("image/png"),empty:strokes.length===0,annotation};
}

function flattenCanvases(original,copy){
 const originals=Array.from(original.querySelectorAll("canvas[data-board-key]"));
 const copies=Array.from(copy.querySelectorAll("canvas[data-board-key]"));
 originals.forEach((canvas,i)=>{
  const target=copies[i];if(!target)return;
  const snap=boardSnapshot(canvas);
  if(snap.annotation&&snap.empty){target.closest(".sheet-annotation-wrap")?.remove();return;}
  const img=document.createElement("img");
  img.src=snap.url;img.alt=snap.annotation?"Handwritten page annotations":"Handwritten whiteboard annotations";
  img.className=snap.annotation?"print-annotation-capture":"print-board-capture";
  target.replaceWith(img);
 });
}

function preparePrintCopy(original){
 const copy=original.cloneNode(true);copy.hidden=false;copy.removeAttribute("hidden");
 copy.querySelectorAll(".no-print,button,.source-credit,.board-hint").forEach(el=>el.remove());
 copy.querySelectorAll(".sheet-annotation-wrap").forEach(el=>el.classList.remove("annotating"));
 flattenCanvases(original,copy);
 copy.querySelectorAll("img").forEach(img=>{
  const raw=img.getAttribute("src");if(raw&&!raw.startsWith("data:"))img.src=new URL(raw,location.href).href;
  img.loading="eager";
 });
 return copy;
}

function buildPrintDocument(target){
 const l=lesson(),wrapper=document.createElement("main");
 wrapper.className="print-document print-"+target;
 if(target==="examples"){
  const source=$("#examples");typeset(source);
  $$(".example-card",source).forEach((card,i)=>{
   const page=document.createElement("section");page.className="print-example-page";
   page.innerHTML='<header class="print-example-header"><div><span>NEW ENGLISH SCHOOL • YEAR '+COURSE_YEAR+' • LESSON '+esc(l.id)+'</span><h1>'+esc(l.title)+'</h1></div><div><span>DATE</span><strong>'+esc(today(false))+'</strong><small>Example '+(i+1)+'</small></div></header>';
   const copy=preparePrintCopy(card);copy.classList.add("active");copy.style.position="relative";copy.style.inset="auto";copy.style.opacity="1";copy.style.transform="none";
   copy.querySelectorAll(".solution-panel,.example-solution-toggle").forEach(el=>el.remove());
   page.append(copy);wrapper.append(page);
  });
 }else{
  const source=$("#"+target);typeset(source);
  $$(".print-sheet",source).forEach(sheet=>{
   const copy=preparePrintCopy(sheet);copy.classList.add("print-export-sheet");wrapper.append(copy);
  });
 }
 return wrapper;
}

function bindPrint(){
 $$("[data-print-target]").forEach(button=>{
  if(button.dataset.printBound)return;button.dataset.printBound="1";
  button.addEventListener("click",async()=>{
   const target=button.dataset.printTarget;
   if(!["examples","practice","homework"].includes(target))return;
   const frame=document.createElement("iframe");frame.className="print-frame";frame.title="Printable lesson pages";document.body.append(frame);
   const doc=frame.contentDocument,content=buildPrintDocument(target),l=lesson();
   const ready=new Promise(resolve=>frame.addEventListener("load",resolve,{once:true}));
   const cssHref=new URL("styles.css?v=presenter-10",location.href).href;
   const title=l.title+" — "+(target==="examples"?"Examples":target==="homework"?"Homework":"Independent practice");
   doc.open();doc.write('<!doctype html><html data-theme="light"><head><meta charset="utf-8"><title>'+esc(title)+'</title><link rel="stylesheet" href="'+cssHref+'"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"><style>'+
    '@page{size:A4 landscape;margin:7mm}html,body{background:#fff!important;color:#153b4a!important}body{margin:0!important;padding:0!important;font-family:Arial,sans-serif!important}.print-document{display:block!important}.print-export-sheet,.print-example-page{width:100%!important;height:196mm!important;min-height:196mm!important;max-height:196mm!important;margin:0!important;padding:6mm 7mm!important;border:0!important;border-radius:0!important;box-shadow:none!important;overflow:hidden!important;break-after:page!important;page-break-after:always!important;background:#fff!important;position:relative!important}.print-export-sheet:last-child,.print-example-page:last-child{break-after:auto!important;page-break-after:auto!important}.print-example-header{height:23mm;display:flex;align-items:flex-start;justify-content:space-between;gap:10mm;border-bottom:1px solid #cfe2e8;padding-bottom:3mm;margin-bottom:4mm}.print-example-header span{display:block;font-size:7pt;letter-spacing:.12em;font-weight:800;color:#5e8c99}.print-example-header h1{font-family:Georgia,serif;font-size:22pt;font-weight:500;line-height:1.05;margin:2mm 0 0;color:#073241}.print-example-header>div:last-child{text-align:right}.print-example-header strong{display:block;font-size:10pt;margin-top:1mm}.print-example-header small{display:block;font-size:8pt;margin-top:2mm;color:#657f88}.print-example-page .example-card{height:160mm!important;min-height:0!important;position:relative!important;inset:auto!important;opacity:1!important;transform:none!important;pointer-events:auto!important}.print-example-page .example-workspace{height:151mm!important;display:grid!important;grid-template-columns:36% 64%!important;gap:5mm!important}.print-example-page .example-question-pane{min-height:0!important;overflow:hidden!important}.print-example-page .example-question h3{font-size:16pt!important}.print-example-page .example-board-panel{height:100%!important;min-height:0!important}.print-example-page .interactive-board{height:100%!important}.print-example-page .board-paper{height:138mm!important;min-height:138mm!important;border:1px solid #cbdde3!important;border-radius:3mm!important;background-color:#fff!important;background-image:linear-gradient(rgba(0,174,230,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(0,174,230,.12) 1px,transparent 1px)!important;background-size:6mm 6mm!important;position:relative!important;overflow:hidden!important}.print-board-capture{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;object-fit:fill!important;z-index:4!important}.print-annotation-capture{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;object-fit:fill!important;z-index:50!important;pointer-events:none!important}.sheet-annotation-wrap{position:absolute!important;inset:0!important;z-index:50!important;pointer-events:none!important}.sheet-annotation-toolbar{display:none!important}.worksheet-slide::before{display:none!important}.print-export-sheet .worksheet-top{padding-bottom:2.5mm!important}.print-export-sheet .worksheet-logo{width:29mm!important;height:15mm!important}.print-export-sheet .worksheet-brand span{font-size:7pt!important}.print-export-sheet .worksheet-brand strong{font-size:14pt!important}.print-export-sheet .worksheet-title-row{padding:2.5mm 0 2mm!important;align-items:center!important}.print-export-sheet .worksheet-title-row h2{font-size:17pt!important}.print-export-sheet .worksheet-title-date{display:flex!important;align-items:baseline!important;gap:4mm!important}.print-export-sheet .worksheet-title-date>span{font-size:8pt!important}.print-export-sheet .sheet-meta label{font-size:8pt!important}.print-export-sheet .sixteen-grid{display:grid!important;grid-template-columns:repeat(2,1fr)!important;grid-template-rows:repeat(4,1fr)!important;height:148mm!important;min-height:148mm!important;gap:2mm!important}.print-export-sheet .compact-question{min-height:0!important;padding:2mm 2.4mm!important;border-radius:1.5mm!important;box-shadow:none!important}.print-export-sheet .compact-question>p{font-size:10.5pt!important;line-height:1.22!important;margin:1.2mm 0!important}.print-export-sheet .compact-question .question-diagram{height:19mm!important}.print-export-sheet .question-math-diagram{max-height:18mm!important}.print-export-sheet .worksheet-footer{font-size:7pt!important;margin-top:1.6mm!important;padding-top:1mm!important}.print-export-sheet.textbook-section .source-extract{display:block!important;width:100%!important;height:auto!important;max-height:145mm!important;object-fit:contain!important;object-position:top!important}.print-export-sheet.textbook-section .source-book-card{box-shadow:none!important;min-height:125mm!important}.print-export-sheet .textbook-assignment{font-size:9pt!important;margin:2mm 0!important}.no-print{display:none!important}'+
   '</style></head><body>'+content.outerHTML+'</body></html>');doc.close();
   await ready.catch(()=>{});
   await Promise.all(Array.from(doc.images).map(img=>img.decode?.().catch(()=>{})||Promise.resolve()));
   if(doc.fonts?.ready)await doc.fonts.ready;
   await new Promise(resolve=>setTimeout(resolve,120));
   frame.contentWindow.addEventListener("afterprint",()=>frame.remove(),{once:true});
   frame.contentWindow.focus();frame.contentWindow.print();
  });
 });
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
 if($("#currentLessonDate"))$("#currentLessonDate").textContent=today(false);
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
 try{
 initTheme();
 if(!validate()){ $("#notebook").innerHTML='<div class="page-loading">The SoW/content map is incomplete. Refresh after deployment.</div>';return;}
 initFromHash();
 $("#lessonSearch")?.addEventListener("input",e=>renderLessonDrawer(e.target.value));
 $("#openLessonsBtn")?.addEventListener("click",openDrawer);$("#closeLessonsBtn")?.addEventListener("click",closeDrawer);
 $("#lessonDrawer")?.addEventListener("click",e=>{if(e.target.id==="lessonDrawer")closeDrawer();});
 document.addEventListener("keydown",e=>{if(e.key==="Escape"){
   closeDrawer();$$(".board-expanded").forEach(x=>x.classList.remove("board-expanded"));document.body.classList.remove("board-open");
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
 }catch(error){
   console.error("Lesson renderer failed",error);
   const root=$("#notebook");
   if(root)root.innerHTML='<div class="page-loading load-error"><strong>Lesson could not load.</strong><span>Please refresh this page. If it continues, open All lessons and choose the lesson again.</span></div>';
 }
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();