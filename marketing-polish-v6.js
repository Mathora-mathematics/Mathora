/* MathsGrove v6 — concise interactive examiner proof, accessible controls, sticky-header state. */
(()=>{
 'use strict';
 const buttons=[...document.querySelectorAll('[data-mg6-step]')];
 const panels=[...document.querySelectorAll('[data-mg6-panel]')];
 if(buttons.length&&panels.length){
  let active=0;
  function activate(next,focus=false){
   const index=(next+buttons.length)%buttons.length;
   active=index;
   buttons.forEach((b,i)=>{
    const selected=i===index;
    b.setAttribute('aria-selected',String(selected));
    b.tabIndex=selected?0:-1;
   });
   panels.forEach((p,i)=>{
    const selected=i===index;
    p.hidden=!selected;
    p.classList.remove('mg6-stage-enter');
    if(selected){
     void p.offsetWidth;
     p.classList.add('mg6-stage-enter');
    }
   });
   if(focus)buttons[index].focus();
  }
  buttons.forEach((b,i)=>{
   b.addEventListener('click',()=>activate(i));
   b.addEventListener('keydown',event=>{
    let target=null;
    if(event.key==='ArrowRight')target=i+1;
    else if(event.key==='ArrowLeft')target=i-1;
    else if(event.key==='Home')target=0;
    else if(event.key==='End')target=buttons.length-1;
    if(target===null)return;
    event.preventDefault();
    activate(target,true);
   });
  });
  activate(active);
 }
 const sentinel=document.getElementById('mg6-top-observer');
 if(sentinel&&'IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{
   document.body.classList.toggle('mg6-scrolled',!entries[0].isIntersecting);
  },{threshold:0});
  observer.observe(sentinel);
 }
})();
