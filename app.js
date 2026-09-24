(function(){
"use strict";

const LESSONS=Array.isArray(window.LESSONS)?window.LESSONS:[];
const CONTENT=window.LESSON_CONTENT||{};
const STARTERS=window.STARTERS||{};
const STARTER_ANSWERS=window.STARTER_ANSWERS||{};
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));

const EXAM_SUCCESS={
 "12":"Exam Success Ch. 1 Number • irrational numbers, powers and roots • Raise your grade p.49",
 "13":"Exam Success Ch. 2 Algebra and graphs • curriculum item 2.3 algebraic fractions",
 "14":"Exam Success Ch. 2 Algebra and graphs • items 2.1 and 2.5 equations/formulae",
 "15":"Exam Success Ch. 2 Algebra and graphs • items 2.5–2.6 inequalities",
 "16":"Exam Success Ch. 4 Geometry • items 4.6–4.7 symmetry and angle reasoning",
 "17":"Exam Success Ch. 5 Mensuration • items 5.1–5.3",
 "18":"Exam Success Ch. 9 Statistics • items 9.1–9.5",
 "19":"Exam Success Ch. 9 Statistics • items 9.2–9.8",
 "20":"Exam Success Ch. 2 Algebra and graphs • item 2.9 functions",
 "21":"Exam Success Ch. 1 Number • item 1.2 sets and Venn diagrams",
 "22":"Exam Success Ch. 2 Algebra and graphs • item 2.8 direct and inverse proportion"
};

const BOOK_DRIVE="https://drive.google.com/drive/folders/1LvLNWyQsmxSEQ3u1YuLlEohK0ZIle6Yx?usp=drive_link";
let currentIndex=0;
let exampleIndex=0;
let observer=null;
let canvasMemory=new Map();

function esc(v){
 return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function fmt(text){
 const raw=String(text??"");
 let out="",last=0,m;
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
 const d=new Date();
 return new Intl.DateTimeFormat("en-GB",long?{weekday:"long",day:"numeric",month:"long",year:"numeric"}:{day:"numeric",month:"short",year:"numeric"}).format(d);
}
function lesson(){return LESSONS[currentIndex]||null;}
function data(){const l=lesson();return l?CONTENT[l.id]||null:null;}
function sourceText(l){
 return "Morrison & Hamshaw: "+l.src+" • "+(EXAM_SUCCESS[l.u]||"Exam Success Mathematics");
}
function sourceBadge(label){return '<span class="source-pill">'+esc(label)+'</span>';}

function renderNav(filter=""){
 const nav=$("#lessonNav");
 const q=filter.trim().toLowerCase();
 const groups=new Map();
 LESSONS.forEach((l,i)=>{
   const hay=(l.id+" "+l.unit+" "+l.title).toLowerCase();
   if(q&&!hay.includes(q))return;
   if(!groups.has(l.u))groups.set(l.u,[]);
   groups.get(l.u).push({l,i});
 });
 nav.innerHTML=[...groups.entries()].map(([u,items])=>{
   const open=items.some(x=>x.i===currentIndex);
   return '<section class="nav-unit">'+
     '<button class="unit-row '+(open?"active":"")+'" type="button"><span class="unit-number">'+esc(u)+'</span>'+
     '<span class="unit-copy"><strong>'+esc(items[0].l.unit)+'</strong><small>'+items.length+' lesson'+(items.length===1?"":"s")+'</small></span><span class="unit-chevron">'+(open?"⌄":"›")+'</span></button>'+
     '<div class="lesson-list '+(open?"show":"")+'">'+items.map(({l,i})=>
       '<button class="lesson-row '+(i===currentIndex?"active":"")+'" data-index="'+i+'" type="button"><span>'+esc(l.id)+'</span><strong>'+esc(l.title)+'</strong></button>'
     ).join("")+'</div></section>';
 }).join("")||'<p class="sidebar-loading">No lessons found.</p>';

 $$(".unit-row",nav).forEach(row=>row.addEventListener("click",()=>{
   const list=row.parentElement.querySelector(".lesson-list");
   list.classList.toggle("show");
   row.classList.toggle("active",list.classList.contains("show"));
   const chevron=row.querySelector(".unit-chevron");
   if(chevron)chevron.textContent=list.classList.contains("show")?"⌄":"›";
 }));
 $$(".lesson-row",nav).forEach(row=>row.addEventListener("click",()=>{
   currentIndex=Number(row.dataset.index);exampleIndex=0;
   location.hash=LESSONS[currentIndex].id;
   renderAll();
   $("#sidebar").classList.remove("open");
   window.scrollTo({top:0,behavior:"smooth"});
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
   '<div><span>'+String(i+1).padStart(2,"0")+'</span><p>'+fmt(a)+'</p></div>'
 ).join("")+'</div>';
}
function openingHTML(l,d){
 return '<section class="notebook-page opening-page section-anchor" id="opening">'+
 '<div class="page-margin-line"></div>'+
 '<div class="opening-brand"><div class="cover-logo"></div><div class="opening-school-copy"><span>NEW ENGLISH SCHOOL • YEAR 10</span><strong>'+esc(l.unit.toUpperCase())+'</strong></div><div class="lesson-chip">LESSON '+esc(l.id)+'</div></div>'+
 '<div class="opening-header"><div class="date-card"><span>TODAY</span><strong>'+esc(today(true))+'</strong></div><div class="teacher-card"><span>TEACHER</span><strong>Mr Niculae</strong></div></div>'+
 '<div class="title-copy"><p class="overline">YEAR 10 MATHEMATICS</p><h1>'+esc(l.title)+'</h1><p class="lesson-intro">'+fmt(d.explain)+'</p></div>'+
 '<div class="book-source-strip"><div><span>SCHEME / COURSEBOOK</span><strong>'+esc(l.src)+'</strong></div><div><span>SECOND TEXTBOOK</span><strong>'+esc(EXAM_SUCCESS[l.u]||"Exam Success Mathematics")+'</strong></div><a href="'+BOOK_DRIVE+'" target="_blank" rel="noopener">Open Drive sources ↗</a></div>'+
 '<div class="starter-header"><div><span class="section-kicker">STARTER • 5 MIN</span><h2>Quick retrieval</h2></div><button class="reveal-button" data-reveal="starterSolution" type="button"><span class="reveal-icon">＋</span>Show answers</button></div>'+
 '<div class="starter-grid">'+starterCards(l)+'</div>'+
 '<div class="reveal-panel starter-solutions" id="starterSolution">'+starterSolutions(l)+'</div>'+
 '<div class="opening-footer"><div class="lesson-note"><span>LEARNING FOCUS</span><strong>'+esc((l.obj||[]).join(" • "))+'</strong></div><button class="start-button" data-target="teach" type="button">Begin teaching <span>→</span></button></div>'+
 '</section>';
}

function teachHTML(l,d){
 const key=(d.keyPoints||[]).slice(0,5).map(x=>'<li>'+fmt(x)+'</li>').join("");
 const rules=(d.rules||[]).slice(0,4).map(r=>'<div class="teach-rule"><strong>'+fmt(r[0])+'</strong><span>'+fmt(r[1])+'</span></div>').join("");
 const method=(d.method||[]).slice(0,5).map((x,i)=>'<li><span>'+String(i+1).padStart(2,"0")+'</span><p>'+fmt(x)+'</p></li>').join("");
 const mistakes=(d.mistakes||[]).slice(0,4).map(x=>'<li>'+fmt(x)+'</li>').join("");
 return '<section class="notebook-page section-anchor" id="teach"><div class="page-margin-line"></div>'+
 '<div class="section-head"><div><span class="section-kicker">02 — TEACH</span><h2>Key ideas</h2></div><div class="page-tag">TEXTBOOK-LED NOTES</div></div>'+
 '<div class="teach-grid populated-teach">'+
   '<article class="note-card cyan-note"><small>KEY IDEAS</small><h3>What students need to know</h3><ul class="teach-list">'+key+'</ul></article>'+
   '<article class="note-card white-note"><small>RULES / FACTS</small><h3>Keep these visible</h3><div class="teach-rules">'+rules+'</div></article>'+
   '<article class="note-card soft-note"><small>WATCH OUT</small><h3>Common mistakes</h3><ul class="teach-list mistakes">'+mistakes+'</ul></article>'+
 '</div>'+
 '<div class="method-card"><div><span class="section-kicker">RELIABLE METHOD</span><h3>Model this process explicitly</h3></div><ol>'+method+'</ol></div>'+
 '<div class="teacher-board"><div class="board-title"><div><span>LIVE MODELLING</span><strong>Teacher working space</strong></div><small>Square paper</small></div><div class="square-paper tall-paper"></div></div>'+
 '<div class="source-footnote">'+sourceBadge("Coursebook mapped from the SoW")+sourceBadge("Exam Success exam-style structure")+'<span>'+esc(sourceText(l))+'</span></div>'+
 '</section>';
}

function sourceVisual(d){
 const imgs=(d.sourceImages||[]).filter(Boolean);
 if(!imgs.length)return "";
 const name=imgs[0];
 return '<figure class="example-source-visual"><img src="assets/book/'+esc(name)+'" alt="Textbook source visual" loading="lazy"><figcaption>Relevant source visual from the supplied teaching materials</figcaption></figure>';
}
function exampleCard(l,d,e,i){
 const source=i===0?"Coursebook-led model":i===1?"Exam Success-style model":"Blended Cambridge-style model";
 return '<article class="example-card '+(i===exampleIndex?"active":"")+'" data-example="'+i+'">'+
 '<div class="example-question"><div class="example-source-line">'+sourceBadge(source)+'<span>'+esc(e.source||l.src)+'</span></div><span>EXAMPLE '+(i+1)+'</span><h3>'+fmt(e.prompt)+'</h3><p>Model the method live first, then reveal the worked solution.</p></div>'+
 (i===0?sourceVisual(d):"")+
 '<div class="working-toolbar" data-canvas="exampleCanvas'+i+'"><div class="pen-group"><button class="pen-dot active" data-colour="#073241" type="button" aria-label="Dark pen"></button><button class="pen-dot" data-colour="#00aee6" type="button" aria-label="School blue pen"></button><button class="pen-dot" data-colour="#e24b4b" type="button" aria-label="Red pen"></button></div><div><button class="mini-tool eraser-tool" type="button">Eraser</button><button class="mini-tool clear-tool" type="button">Clear</button></div></div>'+
 '<div class="graph-paper"><canvas id="exampleCanvas'+i+'"></canvas></div>'+
 '<button class="reveal-button full-width" data-reveal="exampleSolution'+i+'" type="button"><span class="reveal-icon">＋</span>Reveal worked solution</button>'+
 '<div class="reveal-panel solution-panel" id="exampleSolution'+i+'">'+e.steps.map((s,j)=>'<div class="worked-step '+(j===e.steps.length-1?"final-step":"")+'"><span>'+(j+1)+'</span><p>'+fmt(s)+'</p></div>').join("")+'</div></article>';
}
function examplesHTML(l,d){
 const ex=(d.examples||[]).slice(0,4);
 return '<section class="notebook-page section-anchor" id="examples"><div class="page-margin-line"></div>'+
 '<div class="section-head example-head"><div><span class="section-kicker">03 — EXAMPLES</span><h2>Worked examples</h2></div><div class="example-nav"><button id="examplePrev" class="round-button" type="button">←</button><span id="exampleCounter">'+(exampleIndex+1)+' / '+ex.length+'</span><button id="exampleNext" class="round-button dark" type="button">→</button></div></div>'+
 '<div class="example-deck" id="exampleDeck">'+ex.map((e,i)=>exampleCard(l,d,e,i)).join("")+'</div>'+
 '<div class="example-dots" id="exampleDots">'+ex.map((_,i)=>'<button class="'+(i===exampleIndex?"active":"")+'" data-example-index="'+i+'" type="button"></button>').join("")+'</div>'+
 '</section>';
}

function selectedPractice(d){
 const p=d.practice||{};
 return [
  {level:"secure",label:"SECURE",q:(p.foundation||[])[0]},
  {level:"secure",label:"SECURE",q:(p.foundation||[])[1]||(p.foundation||[])[0]},
  {level:"apply",label:"APPLY",q:(p.core||[])[0]},
  {level:"apply",label:"APPLY",q:(p.core||[])[1]||(p.core||[])[0]},
  {level:"stretch",label:"STRETCH",q:(p.extension||[])[0]},
  {level:"stretch",label:"REASON",q:(p.reasoning||[])[0]||(p.extension||[])[1]}
 ].filter(x=>x.q);
}
function worksheetHeader(l,title,id){
 return '<div class="worksheet-top"><div class="worksheet-brand"><div class="worksheet-logo"></div><div><span>NEW ENGLISH SCHOOL • YEAR 10</span><strong>'+esc(title)+'</strong></div></div><div class="worksheet-actions no-print"><button class="sheet-action" type="button" data-print-target="'+id+'">Print worksheet</button></div></div>'+
 '<div class="worksheet-title-row"><div><span class="sheet-kicker">LESSON '+esc(l.id)+'</span><h2>'+esc(l.title)+'</h2></div><div class="sheet-meta"><label>Name <span></span></label><label>Date <strong>'+esc(today(false))+'</strong></label></div></div>';
}
function practiceHTML(l,d){
 const qs=selectedPractice(d);
 return '<section class="worksheet-slide section-anchor print-sheet" id="practice" data-print-sheet="practice">'+worksheetHeader(l,"Independent Practice","practice")+
 '<div class="worksheet-question-grid">'+qs.map((x,i)=>'<article class="worksheet-question"><div class="worksheet-q-head"><span class="worksheet-q-number">'+String(i+1).padStart(2,"0")+'</span><span class="difficulty '+x.level+'">'+x.label+'</span></div><p>'+fmt(x.q)+'</p><div class="worksheet-work-grid"></div></article>').join("")+'</div>'+
 '<div class="worksheet-footer"><span>Questions adapted from both supplied books; wording is original.</span><strong>'+esc(l.src)+' • '+esc(EXAM_SUCCESS[l.u]||"Exam Success")+'</strong></div></section>';
}
function homeworkHTML(l,d){
 const hw=(d.homework||[]).slice(0,6);
 return '<section class="worksheet-slide homework-sheet section-anchor print-sheet" id="homework" data-print-sheet="homework">'+worksheetHeader(l,"Homework","homework")+
 '<div class="worksheet-question-grid">'+hw.map((h,i)=>'<article class="worksheet-question homework-question-card"><div class="worksheet-q-head"><span class="worksheet-q-number">'+String(i+1).padStart(2,"0")+'</span><span class="difficulty '+(i<2?"secure":i<4?"apply":"stretch")+'">'+esc(h.tier||"CORE").toUpperCase()+'</span><button class="answer-toggle no-print homework-solution-btn" data-hw-index="'+i+'" type="button">Solution</button></div><p>'+fmt(h.prompt)+'</p><div class="worksheet-work-grid"></div></article>').join("")+'</div>'+
 '<div class="worksheet-footer homework-footer"><span>Complete all questions and show every stage.</span><strong>'+esc(l.src)+' • '+esc(EXAM_SUCCESS[l.u]||"Exam Success")+'</strong></div>'+
 '<div class="lesson-end no-print"><div><span>END OF LESSON</span><strong>Ready for the next lesson?</strong></div><button id="nextFromHomework" class="next-lesson-button" type="button">Next lesson <span>→</span></button></div></section>';
}

function renderNotebook(){
 const l=lesson(),d=data(),root=$("#notebook");
 if(!l||!d){root.innerHTML='<div class="page-loading">This lesson pack is missing from the content data.</div>';return;}
 root.innerHTML=openingHTML(l,d)+teachHTML(l,d)+examplesHTML(l,d)+practiceHTML(l,d)+homeworkHTML(l,d);
 typeset(root);
 bindRevealButtons();
 bindTargets();
 bindExamples();
 bindCanvases();
 bindPrint();
 bindHomeworkSolutions();
 bindSectionObserver();
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
   const target=document.getElementById(btn.dataset.target);
   if(target)target.scrollIntoView({behavior:"smooth",block:"start"});
 }));
}
function bindSectionObserver(){
 if(observer)observer.disconnect();
 const flow=$$(".flow-button");
 observer=new IntersectionObserver(entries=>{
   const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
   if(!visible)return;
   flow.forEach(b=>b.classList.toggle("active",b.dataset.target===visible.target.id));
 },{rootMargin:"-145px 0px -48% 0px",threshold:[.15,.35,.6]});
 $$(".section-anchor").forEach(s=>observer.observe(s));
}
function bindExamples(){
 const d=data(),cards=$$(".example-card"),dots=$$("#exampleDots button"),counter=$("#exampleCounter");
 const count=cards.length;if(!count)return;
 exampleIndex=Math.min(exampleIndex,count-1);
 function show(next){
   const old=exampleIndex;exampleIndex=(next+count)%count;
   cards.forEach((c,i)=>{c.classList.toggle("active",i===exampleIndex);c.classList.toggle("exit-left",i===old&&i!==exampleIndex&&exampleIndex>old);});
   setTimeout(()=>cards.forEach(c=>c.classList.remove("exit-left")),450);
   dots.forEach((x,i)=>x.classList.toggle("active",i===exampleIndex));
   counter.textContent=(exampleIndex+1)+" / "+count;
   setTimeout(()=>{typeset(cards[exampleIndex]);bindCanvas(cards[exampleIndex].querySelector("canvas"));},30);
 }
 $("#examplePrev")?.addEventListener("click",()=>show(exampleIndex-1));
 $("#exampleNext")?.addEventListener("click",()=>show(exampleIndex+1));
 dots.forEach(dot=>dot.addEventListener("click",()=>show(Number(dot.dataset.exampleIndex))));
}
function bindCanvas(canvas){
 if(!canvas||canvas.dataset.bound)return;
 canvas.dataset.bound="1";
 const wrap=canvas.closest(".graph-paper"),toolbar=document.querySelector('[data-canvas="'+canvas.id+'"]');
 let ctx,colour="#073241",erasing=false,drawing=false,last=null;
 function resize(){
   if(!wrap)return;const rect=wrap.getBoundingClientRect(),dpr=window.devicePixelRatio||1;
   const saved=canvasMemory.get(canvas.id);
   canvas.width=Math.max(1,Math.round(rect.width*dpr));canvas.height=Math.max(1,Math.round(rect.height*dpr));
   canvas.style.width=rect.width+"px";canvas.style.height=rect.height+"px";
   ctx=canvas.getContext("2d");ctx.setTransform(dpr,0,0,dpr,0,0);
   if(saved){const im=new Image();im.onload=()=>ctx.drawImage(im,0,0,rect.width,rect.height);im.src=saved;}
 }
 resize();
 const point=e=>{const r=canvas.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top};};
 canvas.addEventListener("pointerdown",e=>{drawing=true;last=point(e);canvas.setPointerCapture?.(e.pointerId);});
 canvas.addEventListener("pointermove",e=>{if(!drawing||!last)return;const p=point(e);ctx.globalCompositeOperation=erasing?"destination-out":"source-over";ctx.strokeStyle=colour;ctx.lineWidth=erasing?24:Math.max(2.2,2+(e.pressure||.45)*3.5);ctx.lineCap="round";ctx.lineJoin="round";ctx.beginPath();ctx.moveTo(last.x,last.y);ctx.lineTo(p.x,p.y);ctx.stroke();last=p;});
 ["pointerup","pointercancel","pointerleave"].forEach(ev=>canvas.addEventListener(ev,()=>{drawing=false;last=null;try{canvasMemory.set(canvas.id,canvas.toDataURL());}catch(e){}}));
 if(toolbar){
   $$(".pen-dot",toolbar).forEach(dot=>{dot.style.background=dot.dataset.colour;dot.addEventListener("click",()=>{erasing=false;colour=dot.dataset.colour;$$(".pen-dot",toolbar).forEach(x=>x.classList.toggle("active",x===dot));});});
   $(".eraser-tool",toolbar)?.addEventListener("click",()=>{erasing=true;});
   $(".clear-tool",toolbar)?.addEventListener("click",()=>{const r=canvas.getBoundingClientRect();ctx.clearRect(0,0,r.width,r.height);canvasMemory.delete(canvas.id);});
 }
}
function bindCanvases(){$$("canvas").forEach(bindCanvas);}
function bindPrint(){
 $$("[data-print-target]").forEach(button=>button.addEventListener("click",()=>{
   const target=button.dataset.printTarget;
   const cls=target==="homework"?"print-homework":"print-practice";
   document.body.classList.add(cls);
   const cleanup=()=>document.body.classList.remove(cls);
   window.addEventListener("afterprint",cleanup,{once:true});
   setTimeout(()=>window.print(),50);setTimeout(cleanup,2500);
 }));
}
function ensureSolutionModal(){
 let modal=$("#solutionModal");
 if(modal)return modal;
 modal=document.createElement("div");modal.id="solutionModal";modal.className="solution-modal";
 modal.innerHTML='<div class="solution-modal-card"><button class="solution-close" type="button" aria-label="Close">×</button><span class="section-kicker">HOMEWORK SOLUTION</span><h3 id="solutionTitle"></h3><div id="solutionBody"></div></div>';
 document.body.appendChild(modal);
 modal.addEventListener("click",e=>{if(e.target===modal||e.target.classList.contains("solution-close"))modal.classList.remove("open");});
 return modal;
}
function bindHomeworkSolutions(){
 const d=data(),hw=(d.homework||[]).slice(0,6),modal=ensureSolutionModal();
 $$(".homework-solution-btn").forEach(btn=>btn.addEventListener("click",()=>{
   const i=Number(btn.dataset.hwIndex),h=hw[i];if(!h)return;
   $("#solutionTitle").innerHTML=fmt(h.prompt);
   $("#solutionBody").innerHTML=h.steps.map((s,j)=>'<div class="worked-step '+(j===h.steps.length-1?"final-step":"")+'"><span>'+(j+1)+'</span><p>'+fmt(s)+'</p></div>').join("");
   typeset(modal);modal.classList.add("open");
 }));
}
function updateHeader(){
 const l=lesson();if(!l)return;
 $("#breadcrumb").innerHTML='<span>YEAR 10</span><i></i><span>UNIT '+esc(l.u)+'</span><i></i><strong>LESSON '+esc(l.id)+'</strong>';
 $("#prevLessonBtn").disabled=currentIndex===0;
 $("#nextLessonBtn").disabled=currentIndex===LESSONS.length-1;
 $("#courseProgress").textContent=(currentIndex+1)+" of "+LESSONS.length+" lessons";
 $(".progress-track span").style.width=((currentIndex+1)/LESSONS.length*100)+"%";
 document.title=l.id+" "+l.title+" | NES";
}
function goLesson(delta){
 const next=currentIndex+delta;if(next<0||next>=LESSONS.length)return;
 currentIndex=next;exampleIndex=0;location.hash=LESSONS[currentIndex].id;renderAll();window.scrollTo({top:0,behavior:"smooth"});
}
function renderAll(){
 updateHeader();
 renderNav($("#lessonSearch")?.value||"");
 renderNotebook();
}
function initFromHash(){
 const id=decodeURIComponent(location.hash.replace(/^#/,""));
 const i=LESSONS.findIndex(l=>l.id===id);if(i>=0)currentIndex=i;
}
function validate(){
 const missing=LESSONS.filter(l=>!CONTENT[l.id]);
 return LESSONS.length===47&&missing.length===0;
}
function start(){
 if(!validate()){
   $("#notebook").innerHTML='<div class="page-loading">Content validation failed. Please refresh after the latest deployment.</div>';return;
 }
 initFromHash();
 $("#lessonSearch")?.addEventListener("input",e=>renderNav(e.target.value));
 $("#menuBtn")?.addEventListener("click",()=>$("#sidebar").classList.toggle("open"));
 $("#focusBtn")?.addEventListener("click",e=>{document.body.classList.toggle("focus-mode");$(".focus-text",e.currentTarget).textContent=document.body.classList.contains("focus-mode")?"Exit focus":"Focus mode";});
 $("#prevLessonBtn")?.addEventListener("click",()=>goLesson(-1));
 $("#nextLessonBtn")?.addEventListener("click",()=>goLesson(1));
 window.addEventListener("hashchange",()=>{const old=currentIndex;initFromHash();if(old!==currentIndex){exampleIndex=0;renderAll();}});
 renderAll();
 document.documentElement.dataset.ready="1";
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();