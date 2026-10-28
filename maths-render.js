/* MathsGrove mathematical notation, edition 2.
 * Prefer properly typeset KaTeX for explicitly delimited TeX,
 * falling back safely to text and native MathML for existing pilot questions.
 * No student-authored TeX is injected as HTML; trust:false is mandatory.
 */
(function(){
"use strict";
const NS="http://www.w3.org/1998/Math/MathML";
function n(tag,text){const e=document.createElementNS(NS,tag);e.textContent=text;return e}
function simple(kind,a,b){
 const root=document.createElementNS(NS,"math");root.setAttribute("display","inline");
 const wrap=document.createElementNS(NS,kind==="frac"?"mfrac":"msup");
 if(kind==="frac"){wrap.append(n("mn",a),n("mn",b));root.setAttribute("aria-label",a+" over "+b)}
 else{wrap.append(n("mi",a),n("mn",b==="²"?"2":"3"));root.setAttribute("aria-label",a+" to the power of "+(b==="²"?"two":"three"))}
 root.append(wrap);return root;
}
function legacy(target,source){
 const re=/(\b\d{1,4})\/(\d{1,4}\b)|([a-zA-Z])([²³])/g;
 let from=0;
 for(const m of source.matchAll(re)){
  if(m.index>from)target.append(document.createTextNode(source.slice(from,m.index)));
  target.append(m[1]?simple("frac",m[1],m[2]):simple("sup",m[3],m[4]));
  from=m.index+m[0].length;
 }
 if(from<source.length)target.append(document.createTextNode(source.slice(from)));
}
function renderExpression(parent,source,display){
 const el=document.createElement(display?"div":"span");
 el.className=display?"mg-math-display":"mg-math-inline";
 if(window.katex&&typeof window.katex.render==="function"){
  try{window.katex.render(source,el,{
   displayMode:display,throwOnError:true,strict:"warn",trust:false,
   output:"htmlAndMathml",maxExpand:250,maxSize:10
  });parent.append(el);return}
  catch(_){/* Show the source, not error-derived HTML. */}
 }
 el.textContent=source;el.setAttribute("aria-label",source);parent.append(el);
}
function write(element,source){
 if(!element)return;
 element.replaceChildren();
 const input=String(source??"").slice(0,8000);
 const re=/(\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\))/g;
 let from=0;
 for(const m of input.matchAll(re)){
  if(m.index>from)legacy(element,input.slice(from,m.index));
  const display=m[0].startsWith("\\[");
  renderExpression(element,m[0].slice(2,-2),display);
  from=m.index+m[0].length;
 }
 if(from<input.length)legacy(element,input.slice(from));
}
window.MathsGroveMath={write,renderExpression};
})();