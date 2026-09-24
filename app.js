(function(){
"use strict";
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));

function setDates(){
  const now=new Date();
  const long=new Intl.DateTimeFormat("en-GB",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(now);
  const short=new Intl.DateTimeFormat("en-GB",{day:"numeric",month:"short",year:"numeric"}).format(now);
  if($("#lessonDate"))$("#lessonDate").textContent=long;
  if($("#homeworkDate"))$("#homeworkDate").textContent=short;
}
setDates();

const sidebar=$("#sidebar");
$("#menuBtn")?.addEventListener("click",()=>sidebar.classList.toggle("open"));
$("#focusBtn")?.addEventListener("click",e=>{
  document.body.classList.toggle("focus-mode");
  $(".focus-text",e.currentTarget).textContent=document.body.classList.contains("focus-mode")?"Exit focus":"Focus mode";
});

const flowButtons=$$(".flow-button");
function setFlow(id){flowButtons.forEach(b=>b.classList.toggle("active",b.dataset.target===id));}
$$("[data-target]").forEach(btn=>btn.addEventListener("click",()=>{
  const id=btn.dataset.target,target=document.getElementById(id);
  if(!target)return; setFlow(id); target.scrollIntoView({behavior:"smooth",block:"start"});
}));
const observer=new IntersectionObserver(entries=>{
  const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if(visible)setFlow(visible.target.id);
},{rootMargin:"-145px 0px -48% 0px",threshold:[.15,.35,.6]});
$$(".section-anchor").forEach(s=>observer.observe(s));

$$("[data-reveal]").forEach(button=>button.addEventListener("click",()=>{
  const panel=document.getElementById(button.dataset.reveal);if(!panel)return;
  const open=panel.classList.toggle("open");button.classList.toggle("open",open);
  const icon=$(".reveal-icon",button);if(icon)icon.textContent=open?"×":"＋";
  if(button.classList.contains("answer-toggle"))button.textContent=open?"Hide answer":"Answer";
}));

let exampleIndex=0;
const cards=$$(".example-card"),dots=$$("#exampleDots button"),counter=$("#exampleCounter");
function showExample(next){
  if(!cards.length)return;
  const old=exampleIndex;exampleIndex=(next+cards.length)%cards.length;
  cards.forEach((c,i)=>{c.classList.toggle("active",i===exampleIndex);c.classList.toggle("exit-left",i===old&&i!==exampleIndex&&exampleIndex>old);});
  setTimeout(()=>cards.forEach(c=>c.classList.remove("exit-left")),450);
  dots.forEach((d,i)=>d.classList.toggle("active",i===exampleIndex));
  if(counter)counter.textContent=(exampleIndex+1)+" / "+cards.length;
}
$("#examplePrev")?.addEventListener("click",()=>showExample(exampleIndex-1));
$("#exampleNext")?.addEventListener("click",()=>showExample(exampleIndex+1));
dots.forEach(d=>d.addEventListener("click",()=>showExample(Number(d.dataset.exampleIndex))));

function initCanvas(canvas){
  const wrap=canvas.closest(".graph-paper"),toolbar=document.querySelector('[data-canvas="'+canvas.id+'"]');
  if(!wrap||!toolbar)return;
  let ctx,colour="#073241",erasing=false,drawing=false,last=null,restore=null;
  function resize(){
    const rect=wrap.getBoundingClientRect(),dpr=window.devicePixelRatio||1;
    try{if(canvas.width&&canvas.height)restore=canvas.toDataURL();}catch(e){}
    canvas.width=Math.max(1,Math.round(rect.width*dpr));canvas.height=Math.max(1,Math.round(rect.height*dpr));
    canvas.style.width=rect.width+"px";canvas.style.height=rect.height+"px";
    ctx=canvas.getContext("2d");ctx.setTransform(dpr,0,0,dpr,0,0);
    if(restore){const im=new Image();im.onload=()=>ctx.drawImage(im,0,0,rect.width,rect.height);im.src=restore;}
  }
  resize();
  window.addEventListener("resize",()=>requestAnimationFrame(resize));
  const point=e=>{const r=canvas.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top};};
  canvas.addEventListener("pointerdown",e=>{drawing=true;last=point(e);canvas.setPointerCapture?.(e.pointerId);});
  canvas.addEventListener("pointermove",e=>{
    if(!drawing||!last)return;const p=point(e);
    ctx.globalCompositeOperation=erasing?"destination-out":"source-over";ctx.strokeStyle=colour;
    ctx.lineWidth=erasing?24:Math.max(2.2,2+(e.pressure||.45)*3.5);ctx.lineCap="round";ctx.lineJoin="round";
    ctx.beginPath();ctx.moveTo(last.x,last.y);ctx.lineTo(p.x,p.y);ctx.stroke();last=p;
  });
  ["pointerup","pointercancel","pointerleave"].forEach(ev=>canvas.addEventListener(ev,()=>{drawing=false;last=null;}));
  $$(".pen-dot",toolbar).forEach(dot=>{dot.style.background=dot.dataset.colour;dot.addEventListener("click",()=>{erasing=false;colour=dot.dataset.colour;$$(".pen-dot",toolbar).forEach(x=>x.classList.toggle("active",x===dot));});});
  $(".eraser-tool",toolbar)?.addEventListener("click",()=>{erasing=true;});
  $(".clear-tool",toolbar)?.addEventListener("click",()=>{const r=canvas.getBoundingClientRect();ctx.clearRect(0,0,r.width,r.height);restore=null;});
}
$$("canvas").forEach(initCanvas);

$$(".lesson-row").forEach(row=>row.addEventListener("click",()=>{$$(".lesson-row").forEach(x=>x.classList.toggle("active",x===row));sidebar.classList.remove("open");}));
$$(".unit-row").forEach(row=>row.addEventListener("click",()=>{$$(".unit-row").forEach(x=>x.classList.toggle("active",x===row));}));
document.documentElement.dataset.ready="1";
})();