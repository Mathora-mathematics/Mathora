/* MathsGrove Atelier v9 — section entrances without persistent animation.
   The content stays visible when JavaScript is disabled, reduced motion is on,
   or IntersectionObserver is unavailable. */
(()=>{
 'use strict';
 const reduce=Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches);
 if(reduce||!('IntersectionObserver' in window))return;
 const items=[...document.querySelectorAll('.mg9-reveal')];
 if(!items.length)return;
 const observer=new IntersectionObserver(entries=>{
  for(const entry of entries){
   if(entry.isIntersecting){
    entry.target.classList.add('mg9-visible');
    observer.unobserve(entry.target);
   }
  }
 },{threshold:0,rootMargin:'0px 0px 80px 0px'});
 items.forEach(item=>observer.observe(item));
 document.body.classList.add('mg9-motion-ready');
})();
