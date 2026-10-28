/* MathsGrove original mathematical typesetting.
 * Delimited TeX: \(inline\) and \[display\]. KaTeX renders accessible
 * HTML + MathML with trust:false. No input is ever interpolated as HTML.
 * Offline fallback: legacy fractions, indices and plain source text. */
(function(){
"use strict";
const NS="http://www.w3.org/1998/Math/MathML";
function mathNode(tag,value){const n=document.createElementNS(NS,tag);n.textContent=value;return n}
function legacyMath(kind,a,b){
 const math=document.createElementNS(NS,"math");math.setAttribute("display","inline");
 const el=document.createElementNS(NS,kind==="fraction"?"mfrac":"msup");
 if(kind==="fraction"){
  el.append(mathNode("mn",a),mathNode("mn",b));
  math.setAttribute("aria-label",a+" divided by "+b);
 }else{
  el.append(mathNode("mi",a),mathNode("mn",b==="²"?"2":"3"));
  math.setAttribute("aria-label",a+" to the power of "+(b==="²"?"2":"3"));
 }
 math.append(el);return math;
}
function appendPlain(root,value){
 const s=String(value||"");
 const re=/(\b\d{1,3})\/(\d{1,3}\b)|([a-zA-Z])([²³])/g;
 let i=0;
 for(const m of s.matchAll(re)){
  if(m.index>i)root.append(document.createTextNode(s.slice(i,m.index)));
  root.append(m[1]?legacyMath("fraction",m[1],m[2]):legacyMath("power",m[3],m[4]));
  i=m.index+m[0].length;
 }
 if(i<s.length)root.append(document.createTextNode(s.slice(i)));
}
function mathSegment(root,latex,display){
 const span=document.createElement("span");
 span.className=display?"mg-math-display":"mg-math-inline";
 span.setAttribute("aria-label",latex);
 if(window.katex&&typeof window.katex.render==="function"){
  try{
   window.katex.render(latex,span,{
    displayMode:display,throwOnError:true,trust:false,
    strict:"warn",output:"htmlAndMathml",maxExpand:200,maxSize:8
   });
  }catch(error){
   span.classList.add("mg-math-fallback");
   span.textContent=latex;span.title="Mathematical notation is unavailable";
  }
 }else{
  span.classList.add("mg-math-fallback");
  span.textContent=latex;
 }
 root.append(span);
}
function write(root,source){
 if(!root)return;
 root.replaceChildren();
 const s=String(source??"");
 const re=/\\\[((?:.|\n)*?)\\\]|\\\(((?:.|\n)*?)\\\)/g;
 let i=0;
 for(const m of s.matchAll(re)){
  if(m.index>i)appendPlain(root,s.slice(i,m.index));
  mathSegment(root,m[1]??m[2],m[1]!==undefined);
  i=m.index+m[0].length;
 }
 if(i<s.length)appendPlain(root,s.slice(i));
 if(!root.childNodes.length)root.textContent=s;
}
function containsMath(value){return /\\\(|\\\[|[²³]|(\b\d{1,3})\/(\d{1,3}\b)/.test(String(value||""))}
window.MathsGroveMath={write,containsMath};
})();
