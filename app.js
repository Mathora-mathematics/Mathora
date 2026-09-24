(function(){
"use strict";

const LESSONS = Array.isArray(window.LESSONS) ? window.LESSONS : [];
const CONTENT = window.LESSON_CONTENT || {};
const $ = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>Array.from(r.querySelectorAll(s));
const DRIVE = {
  sow:"https://docs.google.com/spreadsheets/d/1YnmCS9DqRTNO4v5UrAC9WzQUleavA1br/edit",
  coursebook:"https://drive.google.com/file/d/1A_hJ2SAZEXpG2U1HRmTxMt1fxb-VYSGL/view",
  examSuccess:"https://drive.google.com/file/d/1FRNikzxut4HDIhkOf20QSmaeK-bwB5AH/view"
};
const CAMBRIDGE = {
  syllabus:"https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-0580/",
  papers:"https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-0580/past-papers/"
};
const EXISTING_ASSETS = new Set([
 "surds-rectangle.webp","angles-worked3.webp","bar-chart-worked.webp",
 "scatter-exercise.webp","histogram-students.webp","exam-pie-worked.webp",
 "polygons.webp","sector-area.webp","sets.webp","cumfreq.webp",
 "proportion.webp","functions.webp","exam-statistics.webp",
 "parallel-lines.webp","exam-algebra.webp","exam-geometry.webp","exam-mensuration.webp"
]);
const SOURCE_DEFAULTS={
 "12.1":["surds-rectangle.webp"],
 "16.1":["angles-worked3.webp"],
 "19.1":["bar-chart-worked.webp","exam-pie-worked.webp"],
 "19.2":["scatter-exercise.webp"],
 "19.7":["histogram-students.webp"]
};

let current = 0;
let tab = "teach";
let exampleIndex = 0;
const canvasStates = new Map();

function esc(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function attr(v){return esc(v);}
function fmt(text){
  const raw=String(text??"");
  const out=[];
  let last=0;
  const re=/\[\[([\s\S]*?)\]\]/g;
  let m;
  while((m=re.exec(raw))){
    out.push(esc(raw.slice(last,m.index)));
    out.push('<span class="math" data-tex="'+attr(m[1])+'">'+esc(m[1])+'</span>');
    last=re.lastIndex;
  }
  out.push(esc(raw.slice(last)));
  return out.join("");
}
function typeset(root){
  if(!root)return;
  $$(".math[data-tex]",root).forEach(el=>{
    if(el.dataset.done)return;
    const tex=el.dataset.tex||"";
    if(window.katex){
      try{
        katex.render(tex,el,{throwOnError:false,strict:"ignore",trust:false,output:"htmlAndMathml"});
        el.dataset.done="1";
        return;
      }catch(e){}
    }
    el.textContent=tex;
    el.classList.add("math-fallback");
    el.dataset.done="1";
  });
}
function lesson(){return LESSONS[current]||null;}
function data(){const l=lesson();return l?CONTENT[l.id]||null:null;}
function assetList(l,d){
  const arr=[...(SOURCE_DEFAULTS[l.id]||[]),...((d&&d.sourceImages)||[])];
  return [...new Set(arr)].filter(x=>EXISTING_ASSETS.has(x));
}
function sourceFigure(name,caption="Textbook source extract"){
  return '<figure class="source-figure"><div class="source-label">BOOK SOURCE</div>'+
    '<img src="assets/book/'+attr(name)+'" alt="'+attr(caption)+'" loading="lazy" onerror="this.closest(\'figure\').classList.add(\'missing-asset\')">'+
    '<figcaption>'+esc(caption)+'</figcaption></figure>';
}
function badge(text){return '<span class="tiny-badge">'+esc(text)+'</span>';}

function navHTML(filter=""){
  const q=filter.trim().toLowerCase();
  const groups=new Map();
  LESSONS.forEach((l,i)=>{
    const hay=(l.id+" "+l.title+" "+l.unit).toLowerCase();
    if(q&&!hay.includes(q))return;
    if(!groups.has(l.u))groups.set(l.u,[]);
    groups.get(l.u).push({l,i});
  });
  return [...groups.entries()].map(([u,rows])=>
    '<section class="nav-unit"><button class="nav-unit-title" type="button">'+
    '<span>UNIT '+esc(u)+'</span><strong>'+esc(rows[0].l.unit)+'</strong></button>'+
    '<div class="nav-lessons">'+rows.map(({l,i})=>
      '<button type="button" class="lesson-link '+(i===current?"active":"")+'" data-index="'+i+'">'+
      '<span>'+esc(l.id)+'</span><strong>'+esc(l.title)+'</strong></button>').join("")+'</div></section>'
  ).join("") || '<p class="empty-state">No lessons match that search.</p>';
}
function bindNav(){
  $("#lessonNav").innerHTML=navHTML($("#search").value||"");
  $$(".lesson-link").forEach(b=>b.onclick=()=>{
    current=Number(b.dataset.index); tab="teach"; exampleIndex=0; render();
    $("#sidebar").classList.remove("open");
  });
}
function hero(l){
  $("#unitPill").textContent="Unit "+l.u+" • "+l.unit;
  $("#lessonTitle").textContent=l.id+"  "+l.title;
  $("#lessonSubtitle").textContent=l.src;
  $("#prevBtn").disabled=current===0;
  $("#nextBtn").disabled=current===LESSONS.length-1;
}
function sectionHeading(num,title,sub){
  return '<div class="section-heading"><span>'+num+'</span><div><h3>'+esc(title)+'</h3>'+
    (sub?'<p>'+esc(sub)+'</p>':"")+'</div></div>';
}
function teachView(l,d){
  const rules=(d.rules||[]).map(r=>'<div class="rule-row"><div>'+fmt(r[0])+'</div><p>'+fmt(r[1])+'</p></div>').join("");
  const imgs=assetList(l,d);
  const mini=(d.examples||[])[0];
  return '<article class="lesson-slide teach-slide">'+
    '<div class="slide-topline"><span>TEACH / KEY NOTES</span><span>'+esc(l.id)+'</span></div>'+
    '<section class="teach-intro"><div><h2>Core explanation</h2><p>'+fmt(d.explain)+'</p></div>'+
      '<div class="vocab">'+(d.vocab||[]).map(v=>badge(v)).join("")+'</div></section>'+
    '<section class="key-grid">'+
      '<div class="panel key-panel">'+sectionHeading("01","Key points","What students should understand, not merely memorise")+
        '<ul class="big-list">'+(d.keyPoints||[]).map(x=>'<li>'+fmt(x)+'</li>').join("")+'</ul></div>'+
      '<div class="panel rule-panel">'+sectionHeading("02","Rules & facts","Keep these visible while modelling")+rules+'</div>'+
    '</section>'+
    '<section class="key-grid">'+
      '<div class="panel method-panel">'+sectionHeading("03","Reliable method","A repeatable route through the skill")+
        '<ol class="method-list">'+(d.method||[]).map(x=>'<li>'+fmt(x)+'</li>').join("")+'</ol></div>'+
      '<div class="panel mistake-panel">'+sectionHeading("04","Common mistakes","Misconceptions to address explicitly")+
        '<ul class="mistake-list">'+(d.mistakes||[]).map(x=>'<li>'+fmt(x)+'</li>').join("")+'</ul></div>'+
    '</section>'+
    (mini?'<section class="panel mini-model">'+sectionHeading("05","Quick model","One short example before the full example deck")+
      '<h4>'+fmt(mini.prompt)+'</h4><div class="mini-steps">'+mini.steps.map((x,i)=>'<div><span>'+(i+1)+'</span><p>'+fmt(x)+'</p></div>').join("")+'</div></section>':"")+
    (imgs.length?'<section class="panel source-panel">'+sectionHeading("06","Book visual","Actual extract from the supplied teaching books")+
       '<div class="source-grid">'+imgs.slice(0,2).map(n=>sourceFigure(n,l.title)).join("")+'</div></section>':"")+
    '<section class="alignment-strip"><div><strong>Cambridge alignment</strong><p>'+fmt(d.cambridge)+'</p></div>'+
      '<div><strong>Exam Success link</strong><p>'+fmt(d.examSuccess)+'</p></div></section>'+
    '<details class="prior"><summary>Prior knowledge & SoW objectives</summary><div class="prior-grid"><div><h4>Recall</h4><ul>'+
      (l.prior||[]).map(x=>'<li>'+esc(x)+'</li>').join("")+'</ul></div><div><h4>SoW objectives</h4><ul>'+
      (l.obj||[]).map(x=>'<li>'+esc(x)+'</li>').join("")+'</ul></div></div></details>'+
  '</article>';
}
function boardMarkup(id){
  return '<section class="model-zone"><div class="model-head"><div><strong>Model it live</strong><small>Squared board • mouse • touch • Apple Pencil</small></div>'+
    '<div class="model-tools" data-for="'+id+'">'+
      '<button class="ink active" data-colour="#142f39" aria-label="Dark pen"></button>'+
      '<button class="ink" data-colour="#2563eb" aria-label="Blue pen"></button>'+
      '<button class="ink" data-colour="#dc2626" aria-label="Red pen"></button>'+
      '<button class="ink" data-colour="#15803d" aria-label="Green pen"></button>'+
      '<button class="tool eraser" type="button">Eraser</button><button class="tool clear" type="button">Clear</button></div></div>'+
    '<div class="grid-canvas"><canvas id="'+id+'"></canvas></div></section>';
}
function exampleView(l,d){
  const ex=d.examples||[];
  if(!ex.length)return '<div class="empty-state">No examples yet.</div>';
  exampleIndex=Math.max(0,Math.min(exampleIndex,ex.length-1));
  const e=ex[exampleIndex], imgs=assetList(l,d);
  const img=(exampleIndex===0&&imgs.length)?sourceFigure(imgs[0],"Textbook visual for "+l.title):"";
  return '<div class="example-shell">'+
    '<div class="deckbar"><div><span>TEACHER EXAMPLES</span><strong>Example '+(exampleIndex+1)+' of '+ex.length+'</strong></div>'+
      '<div><button id="exPrev" class="btn secondary" type="button">← Previous</button><button id="exNext" class="btn primary" type="button">Next →</button></div></div>'+
    '<article class="lesson-slide example-slide-live"><div class="slide-topline"><span>MODEL</span><span>'+esc(e.source||l.src)+'</span></div>'+
      '<h2 class="example-prompt">'+fmt(e.prompt)+'</h2>'+
      img+
      boardMarkup("exampleBoard-"+l.id.replace(".","-")+"-"+exampleIndex)+
      '<details class="solution-reveal"><summary>Show full worked solution</summary><div class="solution-sheet">'+
        e.steps.map((s,i)=>'<div class="solution-step"><span>'+(i+1)+'</span><div>'+fmt(s)+'</div></div>').join("")+
      '</div></details>'+
    '</article>'+
    '<div class="deck-dots">'+ex.map((_,i)=>'<button type="button" data-e="'+i+'" class="'+(i===exampleIndex?"active":"")+'">'+(i+1)+'</button>').join("")+'</div>'+
  '</div>';
}
function qList(items){return '<ol class="question-list">'+(items||[]).map(x=>'<li>'+fmt(x)+'</li>').join("")+'</ol>';}
function practiceView(l,d){
  const p=d.practice||{};
  const count=["foundation","core","extension","reasoning"].reduce((n,k)=>n+(p[k]||[]).length,0);
  return '<article class="worksheet-view"><header class="worksheet-head"><div><span class="slide-kicker">INDEPENDENT PRACTICE</span>'+
    '<h2>'+esc(l.id)+" "+esc(l.title)+'</h2><p>Coursebook-style progression with added Cambridge reasoning.</p></div>'+
    '<span class="count-badge">'+count+' questions</span></header>'+
    '<div class="practice-grid">'+
      '<section class="practice-tier foundation"><h3>Foundation</h3><p>Secure the core skill.</p>'+qList(p.foundation)+'</section>'+
      '<section class="practice-tier core"><h3>Core</h3><p>Combine steps and representations.</p>'+qList(p.core)+'</section>'+
      '<section class="practice-tier extension"><h3>Extension</h3><p>Reverse, prove and generalise.</p>'+qList(p.extension)+'</section>'+
    '</div>'+
    '<section class="reasoning-bank"><div><span class="slide-kicker">REASONING & PROBLEM SOLVING</span><h3>Think like an examiner</h3></div>'+qList(p.reasoning)+'</section>'+
    '<footer class="source-footer"><strong>Textbook map:</strong> '+esc(l.src)+'</footer></article>';
}
function homeworkView(l,d){
  const hw=d.homework||[];
  return '<article class="worksheet-view homework-view"><header class="worksheet-head"><div><span class="slide-kicker">HOMEWORK</span>'+
    '<h2>'+esc(l.id)+" "+esc(l.title)+'</h2><p>Attempt first. Reveal solutions only after working.</p></div>'+
    '<span class="count-badge">'+hw.length+' questions</span></header>'+
    '<div class="homework-list">'+hw.map((h,i)=>'<section class="homework-item"><div class="hw-prompt"><span class="qnum">'+(i+1)+'</span>'+
      '<span class="level '+h.tier.toLowerCase()+'">'+esc(h.tier)+'</span><div>'+fmt(h.prompt)+'</div></div>'+
      '<details><summary>Show solution</summary><div class="hw-solution">'+h.steps.map((s,j)=>'<div class="solution-step"><span>'+(j+1)+'</span><div>'+fmt(s)+'</div></div>').join("")+'</div></details></section>').join("")+'</div></article>';
}
function wholeBoard(){
  return '<article class="board-page"><header><div><span class="slide-kicker">WHOLE-CLASS WHITEBOARD</span><h2>Squared working space</h2></div>'+
    '<div class="model-tools" data-for="wholeBoard"><button class="ink active" data-colour="#142f39"></button><button class="ink" data-colour="#2563eb"></button>'+
      '<button class="ink" data-colour="#dc2626"></button><button class="ink" data-colour="#15803d"></button><button class="tool eraser">Eraser</button><button class="tool clear">Clear</button></div></header>'+
    '<div class="whole-canvas"><canvas id="wholeBoard"></canvas></div></article>';
}
function sourcesView(l,d){
  const imgs=assetList(l,d);
  return '<article class="sources-view"><header class="worksheet-head"><div><span class="slide-kicker">BOOK & EXAM SOURCES</span><h2>'+esc(l.id)+" "+esc(l.title)+'</h2>'+
    '<p>Use the exact supplied sources alongside the transposed teaching content.</p></div></header>'+
    '<section class="source-cards">'+
      '<a target="_blank" rel="noopener" href="'+DRIVE.sow+'"><span>MASTER SEQUENCE</span><strong>Year 10 Scheme of Work</strong><small>'+esc(l.src)+'</small></a>'+
      '<a target="_blank" rel="noopener" href="'+DRIVE.coursebook+'"><span>TEXTBOOK 1</span><strong>Morrison & Hamshaw Coursebook</strong><small>Open supplied PDF</small></a>'+
      '<a target="_blank" rel="noopener" href="'+DRIVE.examSuccess+'"><span>TEXTBOOK 2</span><strong>Exam Success Mathematics</strong><small>'+esc(d.examSuccess)+'</small></a>'+
      '<a target="_blank" rel="noopener" href="'+CAMBRIDGE.syllabus+'"><span>OFFICIAL</span><strong>Cambridge IGCSE Mathematics 0580</strong><small>Current syllabus page</small></a>'+
    '</section>'+
    (imgs.length?'<section class="source-gallery">'+imgs.map(n=>sourceFigure(n,l.title)).join("")+'</section>':'<p class="source-note">This lesson currently uses transposed book examples and references; no separate source crop is attached yet.</p>')+
    '<section class="source-notes"><div><h3>Cambridge check</h3><p>'+fmt(d.cambridge)+'</p></div><div><h3>SoW reference</h3><p>'+esc(l.src)+'</p></div></section></article>';
}
function initCanvas(canvas){
  if(!canvas)return;
  const id=canvas.id, shell=canvas.parentElement, tools=$('[data-for="'+CSS.escape(id)+'"]');
  const dpr=window.devicePixelRatio||1;
  const rect=shell.getBoundingClientRect();
  canvas.width=Math.max(1,Math.round(rect.width*dpr));
  canvas.height=Math.max(1,Math.round(rect.height*dpr));
  canvas.style.width=rect.width+"px"; canvas.style.height=rect.height+"px";
  const ctx=canvas.getContext("2d"); ctx.scale(dpr,dpr);
  const saved=canvasStates.get(id);
  if(saved){const im=new Image();im.onload=()=>ctx.drawImage(im,0,0,rect.width,rect.height);im.src=saved;}
  let draw=false,last=null,colour="#142f39",eraser=false;
  const pos=e=>{const r=canvas.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top};};
  const persist=()=>{try{canvasStates.set(id,canvas.toDataURL("image/png"));}catch(e){}};
  canvas.addEventListener("pointerdown",e=>{draw=true;last=pos(e);canvas.setPointerCapture?.(e.pointerId);});
  canvas.addEventListener("pointermove",e=>{
    if(!draw)return; const p=pos(e);
    ctx.globalCompositeOperation=eraser?"destination-out":"source-over";
    ctx.strokeStyle=colour; ctx.lineWidth=eraser?24:Math.max(2.5,2+(e.pressure||.5)*3); ctx.lineCap="round";ctx.lineJoin="round";
    ctx.beginPath();ctx.moveTo(last.x,last.y);ctx.lineTo(p.x,p.y);ctx.stroke();last=p;
  });
  ["pointerup","pointercancel"].forEach(ev=>canvas.addEventListener(ev,()=>{draw=false;persist();}));
  if(tools){
    $$(".ink",tools).forEach(b=>b.onclick=()=>{eraser=false;colour=b.dataset.colour;$$(".ink",tools).forEach(x=>x.classList.toggle("active",x===b));});
    $(".eraser",tools).onclick=()=>{eraser=true;};
    $(".clear",tools).onclick=()=>{ctx.clearRect(0,0,rect.width,rect.height);canvasStates.delete(id);};
  }
}
function bindExampleControls(d){
  $("#exPrev")?.addEventListener("click",()=>{if(exampleIndex>0){exampleIndex--;renderContent();}});
  $("#exNext")?.addEventListener("click",()=>{if(exampleIndex<(d.examples||[]).length-1){exampleIndex++;renderContent();}});
  $$(".deck-dots button").forEach(b=>b.onclick=()=>{exampleIndex=Number(b.dataset.e);renderContent();});
  if($("#exPrev"))$("#exPrev").disabled=exampleIndex===0;
  if($("#exNext"))$("#exNext").disabled=exampleIndex===(d.examples||[]).length-1;
}
function renderContent(){
  const l=lesson(),d=data(),root=$("#content");
  if(!l||!d){
    root.innerHTML='<div class="fatal"><h2>Lesson content missing</h2><p>'+(l?esc(l.id):"No lesson data")+'</p></div>';
    return;
  }
  if(tab==="teach")root.innerHTML=teachView(l,d);
  if(tab==="examples")root.innerHTML=exampleView(l,d);
  if(tab==="practice")root.innerHTML=practiceView(l,d);
  if(tab==="homework")root.innerHTML=homeworkView(l,d);
  if(tab==="whiteboard")root.innerHTML=wholeBoard();
  if(tab==="sources")root.innerHTML=sourcesView(l,d);
  typeset(root);
  $$("canvas",root).forEach(initCanvas);
  if(tab==="examples")bindExampleControls(d);
}
function render(){
  const l=lesson();
  if(!l){$("#content").innerHTML='<div class="fatal"><h2>No lesson data loaded.</h2></div>';return;}
  hero(l); bindNav();
  $$(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));
  renderContent();
  history.replaceState(null,"","#"+l.id+"-"+tab);
  document.documentElement.dataset.appReady="1";
}
function start(){
  if(LESSONS.length!==47 || Object.keys(CONTENT).length<47){
    $("#content").innerHTML='<div class="fatal"><h2>Content validation failed</h2><p>Loaded '+LESSONS.length+' lesson records and '+Object.keys(CONTENT).length+' detailed lesson packs.</p></div>';
    return;
  }
  const hash=decodeURIComponent(location.hash.slice(1));
  if(hash){
    const m=hash.match(/^(\d+\.\d+)-(teach|examples|practice|homework|whiteboard|sources)$/);
    if(m){const i=LESSONS.findIndex(x=>x.id===m[1]);if(i>=0){current=i;tab=m[2];}}
  }
  $("#search").addEventListener("input",bindNav);
  $("#prevBtn").onclick=()=>{if(current>0){current--;tab="teach";exampleIndex=0;render();}};
  $("#nextBtn").onclick=()=>{if(current<LESSONS.length-1){current++;tab="teach";exampleIndex=0;render();}};
  $$(".tab").forEach(b=>b.onclick=()=>{tab=b.dataset.tab;exampleIndex=0;render();});
  $("#menuBtn").onclick=()=>$("#sidebar").classList.toggle("open");
  $("#presentBtn").onclick=()=>{
    document.body.classList.toggle("present");
    $("#presentBtn").textContent=document.body.classList.contains("present")?"Exit presentation":"Presentation mode";
  };
  render();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();