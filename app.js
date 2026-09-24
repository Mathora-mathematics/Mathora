(function(){
"use strict";

const LESSONS=Array.isArray(window.LESSONS)?window.LESSONS:[];
const CONTENT=window.LESSON_CONTENT||{};
const CAMBRIDGE_DRIVE="https://drive.google.com/file/d/1A_hJ2SAZEXpG2U1HRmTxMt1fxb-VYSGL/view";
const EXAM_DRIVE="https://drive.google.com/file/d/1FRNikzxut4HDIhkOf20QSmaeK-bwB5AH/view";
const CAMBRIDGE_SYLLABUS="https://www.cambridgeinternational.org/Images/662466-2025-2027-syllabus.pdf";

const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
let current=0, tab="teach", exampleIndex=0;

function esc(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function mathHtml(text){
  let s=esc(text);
  if(window.katex){
    s=s.replace(/\\\[([\s\S]*?)\\\]/g,(m,t)=>{try{return katex.renderToString(t,{displayMode:true,throwOnError:false,strict:"ignore"});}catch(e){return '<code>'+esc(t)+'</code>';}});
    s=s.replace(/\\\(([\s\S]*?)\\\)/g,(m,t)=>{try{return katex.renderToString(t,{displayMode:false,throwOnError:false,strict:"ignore"});}catch(e){return '<code>'+esc(t)+'</code>';}});
  }
  return s.replace(/\n/g,"<br>");
}
function pageNumbers(src){
  const out=new Set();
  const re=/pp?\.\s*(\d+)(?:\s*[–-]\s*(\d+))?/gi;
  let m;
  while((m=re.exec(src||""))){let a=+m[1],b=m[2]?+m[2]:a;for(let p=a;p<=b;p++)out.add(p);}
  return [...out];
}
function sourceUrl(base,printed,offset){return base+(printed?("#page="+(printed+offset)):"");}
function sourceAsset(id){
  return {
    "12.1":"assets/book/surds-rectangle.webp",
    "16.1":"assets/book/angles-worked3.webp",
    "19.1":"assets/book/bar-chart-worked.webp",
    "19.2":"assets/book/scatter-exercise.webp",
    "19.7":"assets/book/histogram-students.webp"
  }[id]||"";
}
function diagram(name){
  const common='font-family="Inter,Arial,sans-serif"';
  const map={
    "numberline":'<svg viewBox="0 0 700 210" role="img" aria-label="Number line"><line x1="70" y1="105" x2="635" y2="105" stroke="#15323d" stroke-width="4"/><path d="M635 105 l-16 -9 v18 z" fill="#15323d"/>'+[-3,-2,-1,0,1,2,3].map((n,i)=>'<line x1="'+(140+i*72)+'" y1="94" x2="'+(140+i*72)+'" y2="116" stroke="#15323d" stroke-width="3"/><text '+common+' x="'+(135+i*72)+'" y="145" font-size="20">'+n+'</text>').join("")+'<circle cx="356" cy="105" r="10" fill="white" stroke="#2563eb" stroke-width="4"/><line x1="368" y1="105" x2="610" y2="105" stroke="#2563eb" stroke-width="7"/></svg>',
    "ineq-region":'<svg viewBox="0 0 620 390" role="img" aria-label="Linear inequality region"><defs><pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#e2eef2"/></pattern></defs><rect x="70" y="35" width="500" height="300" fill="url(#g)"/><line x1="70" y1="335" x2="570" y2="335" stroke="#15323d" stroke-width="3"/><line x1="110" y1="360" x2="110" y2="35" stroke="#15323d" stroke-width="3"/><polygon points="110,335 410,35 570,35 570,335" fill="#cfeaf5" opacity=".65"/><line x1="110" y1="335" x2="410" y2="35" stroke="#2563eb" stroke-width="4"/><text '+common+' x="405" y="58" font-size="20">x + y = 6</text><text '+common+' x="470" y="315" font-size="20">solution region</text></svg>',
    "angle-straight":'<svg viewBox="0 0 650 300"><line x1="70" y1="215" x2="585" y2="215" stroke="#15323d" stroke-width="5"/><line x1="325" y1="215" x2="430" y2="65" stroke="#15323d" stroke-width="5"/><path d="M325 215 A100 100 0 0 0 268 133" fill="none" stroke="#65b8d8" stroke-width="4"/><path d="M325 215 A90 90 0 0 1 377 141" fill="none" stroke="#dc7b61" stroke-width="4"/><text '+common+' x="210" y="145" font-size="28">112°</text><text '+common+' x="390" y="160" font-size="28">x</text></svg>',
    "parallel":'<svg viewBox="0 0 660 360"><line x1="90" y1="100" x2="565" y2="100" stroke="#15323d" stroke-width="5"/><line x1="90" y1="270" x2="565" y2="270" stroke="#15323d" stroke-width="5"/><line x1="220" y1="35" x2="430" y2="330" stroke="#15323d" stroke-width="5"/><path d="M253 100 A45 45 0 0 1 276 139" fill="none" stroke="#2563eb" stroke-width="4"/><path d="M369 270 A45 45 0 0 1 346 231" fill="none" stroke="#dc7b61" stroke-width="4"/><text '+common+' x="280" y="135" font-size="24">68°</text><text '+common+' x="315" y="250" font-size="24">x</text><text '+common+' x="500" y="82" font-size="18">parallel</text><text '+common+' x="500" y="252" font-size="18">parallel</text></svg>',
    "polygon":'<svg viewBox="0 0 600 390"><polygon points="300,40 485,175 415,345 185,345 115,175" fill="#eef8fc" stroke="#15323d" stroke-width="5"/><path d="M300 40 L300 345 M115 175 L415 345" stroke="#8bb8c9" stroke-width="2" stroke-dasharray="8 8"/><text '+common+' x="235" y="210" font-size="22">interior angles</text></svg>',
    "trapezium":'<svg viewBox="0 0 650 350"><polygon points="150,265 515,265 445,85 225,85" fill="#eef8fc" stroke="#15323d" stroke-width="5"/><line x1="225" y1="85" x2="225" y2="265" stroke="#dc7b61" stroke-width="3" stroke-dasharray="7 7"/><text '+common+' x="310" y="75" font-size="22">a</text><text '+common+' x="325" y="300" font-size="22">b</text><text '+common+' x="235" y="180" font-size="22">h</text></svg>',
    "circle":'<svg viewBox="0 0 520 360"><circle cx="260" cy="180" r="125" fill="#eef8fc" stroke="#15323d" stroke-width="5"/><line x1="260" y1="180" x2="385" y2="180" stroke="#2563eb" stroke-width="4"/><line x1="135" y1="180" x2="385" y2="180" stroke="#8bb8c9" stroke-width="3"/><text '+common+' x="310" y="166" font-size="22">r</text><text '+common+' x="220" y="210" font-size="22">diameter</text></svg>',
    "sector":'<svg viewBox="0 0 520 360"><path d="M260 180 L260 55 A125 125 0 0 1 377 136 Z" fill="#cfeaf5" stroke="#15323d" stroke-width="4"/><line x1="260" y1="180" x2="260" y2="55" stroke="#15323d" stroke-width="4"/><line x1="260" y1="180" x2="377" y2="136" stroke="#15323d" stroke-width="4"/><text '+common+' x="315" y="135" font-size="24">θ</text><text '+common+' x="270" y="100" font-size="21">r</text></svg>',
    "bar":'<svg viewBox="0 0 650 390"><line x1="80" y1="325" x2="610" y2="325" stroke="#15323d" stroke-width="3"/><line x1="80" y1="325" x2="80" y2="45" stroke="#15323d" stroke-width="3"/>'+[5,8,4,10,7].map((h,i)=>'<rect x="'+(120+i*90)+'" y="'+(325-h*23)+'" width="56" height="'+(h*23)+'" fill="#cfeaf5" stroke="#4a9cbd" stroke-width="3"/>').join("")+'<text '+common+' x="20" y="55" font-size="18">Frequency</text></svg>',
    "pie":'<svg viewBox="0 0 520 360"><circle cx="260" cy="180" r="125" fill="#fff" stroke="#15323d" stroke-width="4"/><path d="M260 180 L260 55 A125 125 0 0 1 385 180 Z" fill="#cfeaf5" stroke="#15323d" stroke-width="2"/><path d="M260 180 L385 180 A125 125 0 0 1 197 288 Z" fill="#f2eadb" stroke="#15323d" stroke-width="2"/><text '+common+' x="307" y="112" font-size="22">90°</text></svg>',
    "scatter":'<svg viewBox="0 0 650 390"><line x1="70" y1="330" x2="610" y2="330" stroke="#15323d" stroke-width="3"/><line x1="70" y1="330" x2="70" y2="45" stroke="#15323d" stroke-width="3"/>'+[[120,285],[160,260],[210,242],[245,205],[300,198],[345,156],[390,142],[450,105],[505,95],[560,65]].map(p=>'<g stroke="#2563eb" stroke-width="3"><line x1="'+(p[0]-6)+'" y1="'+(p[1]-6)+'" x2="'+(p[0]+6)+'" y2="'+(p[1]+6)+'"/><line x1="'+(p[0]+6)+'" y1="'+(p[1]-6)+'" x2="'+(p[0]-6)+'" y2="'+(p[1]+6)+'"/></g>').join("")+'</svg>',
    "bestfit":'<svg viewBox="0 0 650 390"><line x1="70" y1="330" x2="610" y2="330" stroke="#15323d" stroke-width="3"/><line x1="70" y1="330" x2="70" y2="45" stroke="#15323d" stroke-width="3"/>'+[[120,285],[160,260],[210,242],[245,205],[300,198],[345,156],[390,142],[450,105],[505,95],[560,65]].map(p=>'<circle cx="'+p[0]+'" cy="'+p[1]+'" r="5" fill="#2563eb"/>').join("")+'<line x1="100" y1="305" x2="575" y2="62" stroke="#dc7b61" stroke-width="4"/></svg>',
    "cumfreq":'<svg viewBox="0 0 680 400"><line x1="80" y1="340" x2="630" y2="340" stroke="#15323d" stroke-width="3"/><line x1="80" y1="340" x2="80" y2="45" stroke="#15323d" stroke-width="3"/><path d="M85 336 C155 330,215 300,275 250 C340 190,405 120,480 82 C535 57,585 50,625 48" fill="none" stroke="#4a9cbd" stroke-width="5"/>'+[[150,320],[240,280],[335,195],[470,87],[560,58]].map(p=>'<g stroke="#2563eb" stroke-width="3"><line x1="'+(p[0]-5)+'" y1="'+(p[1]-5)+'" x2="'+(p[0]+5)+'" y2="'+(p[1]+5)+'"/><line x1="'+(p[0]+5)+'" y1="'+(p[1]-5)+'" x2="'+(p[0]-5)+'" y2="'+(p[1]+5)+'"/></g>').join("")+'<text '+common+' x="15" y="55" font-size="17">Cumulative frequency</text><text '+common+' x="270" y="380" font-size="17">Upper class boundary</text></svg>',
    "histogram":'<svg viewBox="0 0 680 410"><line x1="80" y1="345" x2="630" y2="345" stroke="#15323d" stroke-width="3"/><line x1="80" y1="345" x2="80" y2="45" stroke="#15323d" stroke-width="3"/><rect x="105" y="255" width="80" height="90" fill="#cfeaf5" stroke="#4a9cbd" stroke-width="3"/><rect x="185" y="155" width="120" height="190" fill="#cfeaf5" stroke="#4a9cbd" stroke-width="3"/><rect x="305" y="85" width="60" height="260" fill="#cfeaf5" stroke="#4a9cbd" stroke-width="3"/><rect x="365" y="205" width="150" height="140" fill="#cfeaf5" stroke="#4a9cbd" stroke-width="3"/><text '+common+' x="10" y="55" font-size="17">Frequency density</text></svg>',
    "venn":'<svg viewBox="0 0 620 360"><rect x="45" y="40" width="530" height="280" rx="8" fill="#fff" stroke="#15323d" stroke-width="3"/><circle cx="250" cy="180" r="105" fill="#cfeaf5" fill-opacity=".65" stroke="#2563eb" stroke-width="4"/><circle cx="370" cy="180" r="105" fill="#f2eadb" fill-opacity=".65" stroke="#b48c45" stroke-width="4"/><text '+common+' x="183" y="95" font-size="25">A</text><text '+common+' x="427" y="95" font-size="25">B</text><text '+common+' x="52" y="66" font-size="20">ξ</text></svg>',
    "function":'<svg viewBox="0 0 720 280"><rect x="55" y="80" width="140" height="100" rx="18" fill="#fff" stroke="#15323d" stroke-width="3"/><rect x="290" y="80" width="140" height="100" rx="18" fill="#cfeaf5" stroke="#4a9cbd" stroke-width="3"/><rect x="525" y="80" width="140" height="100" rx="18" fill="#f2eadb" stroke="#b48c45" stroke-width="3"/><text '+common+' x="115" y="140" font-size="28">x</text><text '+common+' x="330" y="140" font-size="25">f(x)</text><text '+common+' x="555" y="140" font-size="23">g(f(x))</text><line x1="195" y1="130" x2="285" y2="130" stroke="#15323d" stroke-width="3"/><line x1="430" y1="130" x2="520" y2="130" stroke="#15323d" stroke-width="3"/></svg>',
    "symmetry":'<svg viewBox="0 0 620 360"><polygon points="310,45 485,145 420,315 200,315 135,145" fill="#eef8fc" stroke="#15323d" stroke-width="5"/><line x1="310" y1="28" x2="310" y2="332" stroke="#dc7b61" stroke-width="3" stroke-dasharray="9 8"/><text '+common+' x="330" y="65" font-size="19">line of symmetry</text></svg>'
  };
  return map[name]||"";
}
function lessonVisual(l,c){
  const asset=sourceAsset(l.id);
  if(asset)return '<figure class="book-extract"><img src="'+asset+'" alt="Textbook source extract"><figcaption>Direct source extract from the supplied textbook material.</figcaption></figure>';
  if(c&&c.diagram)return '<div class="diagram-card">'+diagram(c.diagram)+'</div>';
  return "";
}
function sourcePanel(l,c){
  const pages=pageNumbers(l.src);
  const exam=(c&&c.examSuccess)||null;
  const pageLinks=pages.map(p=>'<a class="source-page" target="_blank" rel="noopener" href="'+sourceUrl(CAMBRIDGE_DRIVE,p,12)+'">Cambridge p.'+p+'</a>').join("");
  const examLinks=exam&&exam.pages?exam.pages.map(p=>'<a class="source-page" target="_blank" rel="noopener" href="'+sourceUrl(EXAM_DRIVE,p,2)+'">Exam Success p.'+p+'</a>').join(""):"";
  return '<section class="source-box"><h3>Source map</h3><div class="source-row">'+pageLinks+examLinks+'</div>'+
    '<div class="source-copy"><strong>Scheme / coursebook:</strong> '+esc(l.src)+(exam&&exam.note?'<br><strong>Exam Success:</strong> '+esc(exam.note):'')+'</div>'+
    '<div class="source-actions"><a class="ghost-btn" target="_blank" rel="noopener" href="'+CAMBRIDGE_DRIVE+'">Open Cambridge book</a><a class="ghost-btn" target="_blank" rel="noopener" href="'+EXAM_DRIVE+'">Open Exam Success</a><a class="ghost-btn" target="_blank" rel="noopener" href="'+CAMBRIDGE_SYLLABUS+'">0580 syllabus</a></div></section>';
}
function renderNav(filter=""){
  const nav=$("#lessonNav"); if(!nav)return;
  const q=filter.trim().toLowerCase();
  const groups={};
  LESSONS.forEach((l,i)=>{if(q&&!((l.id+" "+l.title+" "+l.unit).toLowerCase().includes(q)))return;(groups[l.u]||(groups[l.u]=[])).push([l,i]);});
  nav.innerHTML=Object.keys(groups).map(u=>'<section class="unit-group"><h2 class="unit-title">Unit '+u+' • '+esc(groups[u][0][0].unit)+'</h2>'+groups[u].map(([l,i])=>'<button type="button" class="lesson-link '+(i===current?'active':'')+'" data-index="'+i+'"><span class="lesson-id">'+l.id+'</span><span class="lesson-name">'+esc(l.title)+'</span></button>').join("")+'</section>').join("")||'<p class="loading-copy">No matching lessons.</p>';
  $$(".lesson-link",nav).forEach(b=>b.addEventListener("click",()=>{current=+b.dataset.index;tab="teach";exampleIndex=0;render();$("#sidebar").classList.remove("open");}));
}
function renderTeach(l,c){
  const rules=(c.rules||[]).map((x,i)=>'<div class="rule-row"><span class="rule-num">'+(i+1)+'</span><div>'+mathHtml(x)+'</div></div>').join("");
  const method=(c.method||[]).map(x=>'<li>'+mathHtml(x)+'</li>').join("");
  const mistakes=(c.mistakes||[]).map(x=>'<li>'+mathHtml(x)+'</li>').join("");
  const formulas=(c.formulas||[]).map(x=>'<div class="formula-chip">'+mathHtml('\\('+x+'\\)')+'</div>').join("");
  const keywords=(c.keywords||[]).map(x=>'<span class="keyword">'+esc(x)+'</span>').join("");
  return '<article class="teaching-slide"><div class="section-kicker">TEACH • EXPLAIN • CONNECT</div><h2 class="section-title">'+esc(c.heading||l.title)+'</h2><p class="section-intro">'+mathHtml(c.summary||"")+'</p>'+
    '<div class="keywords">'+keywords+'</div><div class="formula-strip">'+formulas+'</div>'+
    '<div class="teach-grid"><section class="note-card"><h3>What students need to understand</h3>'+(c.explain||[]).map(p=>'<p style="margin:.6rem 0">'+mathHtml(p)+'</p>').join("")+'</section><section class="note-card"><h3>Rules and key facts</h3><div class="rule-list">'+rules+'</div></section></div>'+
    '<div class="teach-grid"><section class="note-card"><h3>Reliable method</h3><ol>'+method+'</ol></section><section class="note-card"><h3>Checks and misconceptions</h3><ul>'+mistakes+'</ul></section></div>'+
    lessonVisual(l,c)+sourcePanel(l,c)+'</article>';
}
function boardHtml(id){
 return '<div class="model-area"><div class="model-head"><div><div class="model-title">Model it on the board</div><div class="model-hint">Squared grid • mouse • touch • Apple Pencil</div></div></div><div class="board-tools"><button class="colour-dot active" data-colour="#15323d" type="button" aria-label="Black pen"></button><button class="colour-dot" data-colour="#2563eb" type="button" aria-label="Blue pen"></button><button class="colour-dot" data-colour="#dc2626" type="button" aria-label="Red pen"></button><button class="colour-dot" data-colour="#15803d" type="button" aria-label="Green pen"></button><button class="tool-btn eraser-btn" type="button">Eraser</button><button class="tool-btn undo-btn" type="button">Undo</button><button class="tool-btn clear-btn" type="button">Clear</button></div><div class="model-canvas-shell"><canvas class="model-board" id="'+id+'"></canvas></div></div>';
}
function renderExamples(l,c){
  const ex=c.examples||[];
  if(exampleIndex>=ex.length)exampleIndex=0;
  return '<div class="example-toolbar"><div><div class="section-kicker">TEACHER MODELLING</div><div class="example-count">Example <span id="examplePos">'+(exampleIndex+1)+'</span> of '+ex.length+'</div></div><div class="example-controls"><button id="exPrev" class="ghost-btn" type="button">← Previous</button><button id="exNext" class="primary-btn" type="button">Next →</button></div></div>'+
   '<div id="exampleDeck">'+ex.map((e,i)=>'<article class="teaching-slide example-slide '+(i===exampleIndex?'active':'')+'" data-ex="'+i+'"><div class="section-kicker">'+esc(e.source||"Worked example")+'</div><div class="example-question">'+mathHtml(e.q)+'</div>'+(e.context?'<div class="example-context">'+mathHtml(e.context)+'</div>':'')+
     '<div class="example-layout '+(e.diagram?'':'single')+'"><div>'+boardHtml('board-'+l.id.replace(".","-")+'-'+i)+'</div>'+(e.diagram?'<div class="diagram-card">'+diagram(e.diagram)+'</div>':'')+'</div>'+
     '<details class="solution-toggle"><summary>Show full model solution</summary><div class="solution-paper"><div class="step-list">'+(e.steps||[]).map((s,j)=>'<div class="step"><span class="step-badge">'+(j+1)+'</span><div>'+mathHtml(s)+'</div></div>').join("")+'</div></div></details></article>').join("")+'</div>'+
   '<div class="example-dots">'+ex.map((_,i)=>'<button class="example-dot '+(i===exampleIndex?'active':'')+'" type="button" data-ex-dot="'+i+'">'+(i+1)+'</button>').join("")+'</div>';
}
function tier(name,cls,qs){return '<section class="tier '+cls+'"><h3>'+name+'</h3><ol class="q-list">'+(qs||[]).map(q=>'<li>'+mathHtml(q)+'</li>').join("")+'</ol></section>';}
function sourceExercises(l,c){
  const exam=c.examSuccess||{};
  return '<div class="source-exercise-grid"><article class="source-exercise"><h4>Cambridge Coursebook practice</h4><p>'+esc(l.src)+'</p><a target="_blank" rel="noopener" href="'+CAMBRIDGE_DRIVE+'">Open supplied coursebook →</a></article>'+
   '<article class="source-exercise"><h4>Exam Success consolidation</h4><p>'+(exam.note?esc(exam.note):'Use the matched Exam Success chapter as an additional worked-example and exam-language source.')+'</p><a target="_blank" rel="noopener" href="'+EXAM_DRIVE+'">Open supplied Exam Success book →</a></article></div>';
}
function renderPractice(l,c){
 const p=c.practice||{};
 const total=["foundation","core","extension","reasoning"].reduce((n,k)=>n+(p[k]||[]).length,0);
 return '<article class="panel"><div class="practice-head"><div><div class="section-kicker">INDEPENDENT PRACTICE</div><h2 class="section-title">Progressive practice</h2><p class="section-intro">Fluency first, then mixed application, then unfamiliar reasoning. The direct textbook exercises remain available underneath.</p></div><span class="question-count">'+total+' site questions + book exercises</span></div>'+
   '<div class="tiers">'+tier("Foundation","foundation",p.foundation)+tier("Core","core",p.core)+tier("Extension","extension",p.extension)+'</div>'+
   '<section class="reasoning"><h3>Reasoning & problem solving</h3><ol class="q-list">'+(p.reasoning||[]).map(q=>'<li>'+mathHtml(q)+'</li>').join("")+'</ol></section>'+sourceExercises(l,c)+'</article>';
}
function renderHomework(l,c){
 const hw=c.homework||[];
 return '<article class="panel"><div class="homework-head"><div><div class="section-kicker">HOMEWORK</div><h2 class="section-title">Retrieval, application and reasoning</h2><p class="section-intro">Students attempt first, then reveal a complete method.</p></div><span class="question-count">'+hw.length+' worked homework questions + book exercise</span></div>'+
  hw.map((h,i)=>'<section class="hw-item"><div class="hw-q"><span class="q-number">'+(i+1)+'</span><span class="difficulty">'+esc(h.tier||"Core")+'</span><span>'+mathHtml(h.q)+'</span></div><details><summary>Show solution</summary><div class="solution-paper"><div class="step-list">'+(h.steps||[]).map((s,j)=>'<div class="step"><span class="step-badge">'+(j+1)+'</span><div>'+mathHtml(s)+'</div></div>').join("")+'</div></div></details></section>').join("")+sourceExercises(l,c)+'</article>';
}
function renderWhiteboard(){
 return '<article class="panel whiteboard-card"><div class="whiteboard-toolbar"><div><div class="section-kicker">WHOLE-CLASS WHITEBOARD</div><h2 class="section-title">Blank squared board</h2></div><div class="board-tools"><button class="colour-dot active" data-colour="#15323d" type="button"></button><button class="colour-dot" data-colour="#2563eb" type="button"></button><button class="colour-dot" data-colour="#dc2626" type="button"></button><button class="colour-dot" data-colour="#15803d" type="button"></button><button id="eraser" class="tool-btn eraser-btn" type="button">Eraser</button><button class="tool-btn undo-btn" type="button">Undo</button><button class="tool-btn clear-btn" type="button">Clear</button></div></div><div class="canvas-shell"><canvas id="board"></canvas></div></article>';
}
function bindCanvas(canvas,tools){
 if(!canvas||!tools||canvas.dataset.bound)return; canvas.dataset.bound="1";
 const shell=canvas.parentElement,ctx=canvas.getContext("2d"); let drawing=false,last=null,colour="#15323d",erase=false,undo=[];
 function resize(){const r=shell.getBoundingClientRect(),dpr=window.devicePixelRatio||1;const w=Math.max(1,Math.round(r.width*dpr)),h=Math.max(1,Math.round(r.height*dpr));if(canvas.width===w&&canvas.height===h)return;let snap=null;if(canvas.width&&canvas.height){try{snap=canvas.toDataURL();}catch(e){}}canvas.width=w;canvas.height=h;canvas.style.width=r.width+"px";canvas.style.height=r.height+"px";ctx.setTransform(dpr,0,0,dpr,0,0);if(snap){const im=new Image();im.onload=()=>ctx.drawImage(im,0,0,r.width,r.height);im.src=snap;}}
 function save(){try{undo.push(canvas.toDataURL());if(undo.length>15)undo.shift();}catch(e){}}
 function pos(e){const r=canvas.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top,p:e.pressure||.5};}
 resize();
 canvas.addEventListener("pointerdown",e=>{save();drawing=true;last=pos(e);try{canvas.setPointerCapture(e.pointerId);}catch(_){}});
 canvas.addEventListener("pointermove",e=>{if(!drawing)return;const q=pos(e);ctx.globalCompositeOperation=erase?"destination-out":"source-over";ctx.strokeStyle=colour;ctx.lineWidth=erase?24:Math.max(2.2,2.5+q.p*3.5);ctx.lineCap="round";ctx.lineJoin="round";ctx.beginPath();ctx.moveTo(last.x,last.y);ctx.lineTo(q.x,q.y);ctx.stroke();last=q;});
 ["pointerup","pointercancel","pointerleave"].forEach(ev=>canvas.addEventListener(ev,()=>drawing=false));
 $$(".colour-dot",tools).forEach(b=>b.addEventListener("click",()=>{colour=b.dataset.colour||"#15323d";erase=false;$$(".colour-dot",tools).forEach(x=>x.classList.toggle("active",x===b));}));
 const er=$(".eraser-btn",tools);if(er)er.addEventListener("click",()=>{erase=true;$$(".colour-dot",tools).forEach(x=>x.classList.remove("active"));});
 const cl=$(".clear-btn",tools);if(cl)cl.addEventListener("click",()=>{save();ctx.clearRect(0,0,canvas.width,canvas.height);});
 const un=$(".undo-btn",tools);if(un)un.addEventListener("click",()=>{const snap=undo.pop();if(!snap){ctx.clearRect(0,0,canvas.width,canvas.height);return;}const im=new Image();im.onload=()=>{const r=canvas.getBoundingClientRect();ctx.clearRect(0,0,r.width,r.height);ctx.drawImage(im,0,0,r.width,r.height)};im.src=snap;});
 window.addEventListener("resize",resize,{passive:true});
}
function initBoards(){
 $$(".model-board").forEach(c=>bindCanvas(c,c.parentElement.previousElementSibling));
 const b=$("#board");if(b)bindCanvas(b,$(".board-tools",b.closest(".whiteboard-card")));
}
function setupExamples(){
 const exs=$$(".example-slide");
 const show=n=>{exampleIndex=Math.max(0,Math.min(exs.length-1,n));exs.forEach((e,i)=>e.classList.toggle("active",i===exampleIndex));$$(".example-dot").forEach((d,i)=>d.classList.toggle("active",i===exampleIndex));const pos=$("#examplePos");if(pos)pos.textContent=exampleIndex+1;$("#exPrev").disabled=exampleIndex===0;$("#exNext").disabled=exampleIndex===exs.length-1;requestAnimationFrame(initBoards);};
 $("#exPrev")?.addEventListener("click",()=>show(exampleIndex-1));$("#exNext")?.addEventListener("click",()=>show(exampleIndex+1));$$("[data-ex-dot]").forEach(b=>b.addEventListener("click",()=>show(+b.dataset.exDot)));show(exampleIndex);
}
function sourceDialog(){
 const l=LESSONS[current],c=CONTENT[l.id]||{};const pages=pageNumbers(l.src);const exam=c.examSuccess||{};
 $("#sourceDialogBody").innerHTML='<div class="source-library"><article class="source-library-card"><h3>Year 10 Scheme of Work</h3><p>This lesson follows the sub-unit order and textbook mapping in the supplied 2026–2027 Year 10 SoW.</p></article><article class="source-library-card"><h3>Cambridge IGCSE Mathematics Coursebook</h3><p>'+esc(l.src)+'</p><div class="source-row">'+pages.map(p=>'<a class="source-page" target="_blank" href="'+sourceUrl(CAMBRIDGE_DRIVE,p,12)+'">p.'+p+'</a>').join("")+'</div></article><article class="source-library-card"><h3>Exam Success in Mathematics</h3><p>'+esc(exam.note||"Matched chapter used for exam-language, worked-example structure and consolidation where relevant.")+'</p></article><article class="source-library-card"><h3>Cambridge IGCSE Mathematics 0580</h3><p>2025–2027 syllabus used to verify current content depth, mathematical communication and problem-solving emphasis.</p><a target="_blank" href="'+CAMBRIDGE_SYLLABUS+'">Open official syllabus →</a></article></div>';
 $("#sourceDialog").showModal();
}
function render(){
 if(!LESSONS.length){$("#content").innerHTML='<article class="panel error-panel"><h2>Lesson data did not load.</h2></article>';return;}
 const l=LESSONS[current],c=CONTENT[l.id];
 $("#unitPill").textContent="Unit "+l.u+" • "+l.unit;$("#lessonNumber").textContent=(current+1)+" / "+LESSONS.length;$("#lessonTitle").textContent=l.id+"  "+l.title;
 $("#prevBtn").disabled=current===0;$("#nextBtn").disabled=current===LESSONS.length-1;$$(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));renderNav($("#search").value||"");
 if(!c){$("#content").innerHTML='<article class="panel error-panel"><h2>Content pack missing for '+esc(l.id)+'</h2><p>The navigation is working, but this lesson has not yet been populated.</p></article>';return;}
 if(tab==="teach")$("#content").innerHTML=renderTeach(l,c);
 if(tab==="examples")$("#content").innerHTML=renderExamples(l,c);
 if(tab==="practice")$("#content").innerHTML=renderPractice(l,c);
 if(tab==="homework")$("#content").innerHTML=renderHomework(l,c);
 if(tab==="whiteboard")$("#content").innerHTML=renderWhiteboard();
 if(tab==="examples")setupExamples();else initBoards();
 history.replaceState(null,"","#"+l.id+"-"+tab);document.documentElement.dataset.mathoraReady="1";
}
function start(){
 if(!LESSONS.length){render();return;}
 const hash=location.hash.slice(1),m=hash.match(/^(\d+\.\d+)-(teach|examples|practice|homework|whiteboard)$/);
 if(m){const i=LESSONS.findIndex(x=>x.id===m[1]);if(i>=0)current=i;tab=m[2];}
 $$(".tab").forEach(b=>b.addEventListener("click",()=>{tab=b.dataset.tab;exampleIndex=0;render();}));
 $("#prevBtn").addEventListener("click",()=>{if(current>0){current--;tab="teach";exampleIndex=0;render();}});
 $("#nextBtn").addEventListener("click",()=>{if(current<LESSONS.length-1){current++;tab="teach";exampleIndex=0;render();}});
 $("#search").addEventListener("input",e=>renderNav(e.target.value));
 $("#menuBtn").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));
 $("#presentBtn").addEventListener("click",()=>{document.body.classList.toggle("present");$("#presentBtn").textContent=document.body.classList.contains("present")?"Exit presentation":"Presentation mode";});
 $("#sourceBtn").addEventListener("click",sourceDialog);
 render();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();