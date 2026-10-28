/* Accessibility-first MathsGrove maths typesetting.
 * Uses DOM text nodes and native MathML, never untrusted HTML injection.
 * Supports exponents and small numeric fractions in ORIGINAL pilot prompts.
 * The source content remains accessible as text if MathML isn't supported. */
(function(){
"use strict";
const NS="http://www.w3.org/1998/Math/MathML";
function node(tag,content){const el=document.createElementNS(NS,tag);el.textContent=content;return el}
function math(kind,x,y){
 const el=document.createElementNS(NS,"math");el.setAttribute("display","inline");
 el.setAttribute("aria-label",kind==="fraction"?x+" divided by "+y:x+" to the power of "+(y==="²"?"2":"3"));
 if(kind==="fraction"){
  const frac=document.createElementNS(NS,"mfrac");
  frac.append(node("mn",x),node("mn",y));el.append(frac);
 } else {
  const sup=document.createElementNS(NS,"msup");sup.append(node("mi",x),node("mn",y==="²"?"2":"3"));el.append(sup);
 }
 return el;
}
function write(el,source){
 el.replaceChildren();
 const s=String(source??"");
 const re=/(\b\d{1,3})\/(\d{1,3}\b)|([a-zA-Z])([²³])/g;
 let start=0;
 for(const m of s.matchAll(re)){
  if(m.index>start)el.append(document.createTextNode(s.slice(start,m.index)));
  el.append(m[1]?math("fraction",m[1],m[2]):math("exponent",m[3],m[4]));
  start=m.index+m[0].length;
 }
 if(start<s.length)el.append(document.createTextNode(s.slice(start)));
 if(!el.childNodes.length)el.textContent=s;
}
window.MathsGroveMath={write};
})();
