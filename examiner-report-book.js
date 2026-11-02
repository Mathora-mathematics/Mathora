/* MathsGrove Signature public specimen: seven-page accessible report reader.
   Fictional content is authored in HTML, no student records, no network or storage. */
(()=>{
"use strict";
const book=document.getElementById("mg7-book");
if(!book)return;
const pages=[...book.querySelectorAll("[data-mg7-page]")];
const tabs=[...book.querySelectorAll("[data-mg7-nav]")];
const next=document.getElementById("mg7-next");
const prev=document.getElementById("mg7-prev");
const status=document.getElementById("mg7-page-status");
const counter=document.getElementById("mg7-counter");
const progress=document.getElementById("mg7-progress-indicator");
const print=document.getElementById("mg7-print");
const stage=document.getElementById("mg7-book-top");
const titles=["Cover","Executive summary","Topic analysis","Question review","Examiner annotations","Four-week action plan","Family and tutor guidance"];
if(pages.length!==7||tabs.length!==7||!next||!prev||!stage)return;
let current=0;
const reduced=()=>Boolean(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);
function show(index,{scroll=false,initial=false}={}){
 const target=Math.max(0,Math.min(pages.length-1,index));
 const direction=target-current>=0?"mg7-turn-forward":"mg7-turn-back";
 if(!initial&&target===current)return;
 current=target;
 pages.forEach((page,i)=>{
  page.hidden=i!==target;
  page.classList.remove("mg7-turn-forward","mg7-turn-back");
  if(i===target&&!initial&&!reduced()){
   void page.offsetWidth;
   page.classList.add(direction);
  }
 });
 tabs.forEach((tab,i)=>{
  if(i===target)tab.setAttribute("aria-current","page");
  else tab.removeAttribute("aria-current");
 });
 prev.disabled=target===0;
 next.disabled=target===pages.length-1;
 status.textContent="Page "+(target+1)+" of "+pages.length+" · "+titles[target];
 counter.textContent=String(target+1).padStart(2,"0")+" / 07 · "+titles[target].toUpperCase();
 progress.style.width=((target+1)/pages.length*100)+"%";
 if(scroll)stage.scrollIntoView({behavior:reduced()?"auto":"smooth",block:"start"});
}
book.dataset.enhanced="true";
tabs.forEach((tab,i)=>tab.addEventListener("click",()=>show(i,{scroll:true})));
next.addEventListener("click",()=>show(current+1,{scroll:true}));
prev.addEventListener("click",()=>show(current-1,{scroll:true}));
book.addEventListener("keydown",event=>{
 const tag=(event.target.tagName||"").toLowerCase();
 if(["input","select","textarea"].includes(tag)||event.altKey||event.ctrlKey||event.metaKey||event.target.isContentEditable)return;
 if(event.key==="ArrowRight"){event.preventDefault();show(current+1,{scroll:true})}
 if(event.key==="ArrowLeft"){event.preventDefault();show(current-1,{scroll:true})}
});
let start=null;
const surface=book.querySelector(".mg7-paper-shadow");
if(surface){
 surface.addEventListener("touchstart",event=>{
  if(event.touches.length!==1)return;
  start={x:event.touches[0].clientX,y:event.touches[0].clientY};
 },{passive:true});
 surface.addEventListener("touchend",event=>{
  if(!start||!event.changedTouches.length)return;
  const dx=event.changedTouches[0].clientX-start.x;
  const dy=event.changedTouches[0].clientY-start.y;
  start=null;
  if(Math.abs(dx)<65||Math.abs(dx)<Math.abs(dy)*1.35)return;
  show(current+(dx<0?1:-1),{scroll:false});
 },{passive:true});
 surface.addEventListener("touchcancel",()=>{start=null},{passive:true});
}
print?.addEventListener("click",()=>{
 if(typeof window.print==="function")window.print();
});
show(0,{initial:true});
})();
