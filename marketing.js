(function(){
"use strict";
const button=document.getElementById("mobile-toggle"),nav=document.getElementById("primary-nav");
if(!button||!nav)return;
function close(){nav.classList.remove("show");button.setAttribute("aria-expanded","false");button.textContent="☰"}
button.addEventListener("click",()=>{
 const open=button.getAttribute("aria-expanded")!=="true";
 nav.classList.toggle("show",open);button.setAttribute("aria-expanded",String(open));button.textContent=open?"✕":"☰";
});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",close));
document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
})();
