(function(){
"use strict";

const LESSONS=Array.isArray(window.LESSONS)?window.LESSONS:[];
const $=(s)=>document.querySelector(s);
const $$=(s)=>Array.from(document.querySelectorAll(s));
let current=0;
let tab="learn";

const SOURCE={
 "12.1":"assets/book/surds-rectangle.webp",
 "16.1":"assets/book/angles-worked3.webp",
 "19.1":"assets/book/bar-chart-worked.webp",
 "19.2":"assets/book/scatter-exercise.webp",
 "19.7":"assets/book/histogram-students.webp"
};

const THEORY={
 surds:{
  concept:"A surd is an irrational root kept in exact form. Simplify by taking out square factors; only like surds can be collected.",
  rules:["√(ab)=√a·√b","√(a/b)=√a/√b","a√m+b√m=(a+b)√m","√a+√b is not generally √(a+b)"]
 },
 rationalise:{
  concept:"Rationalising rewrites an equivalent fraction so the denominator is rational. For a two-term denominator, multiply by its conjugate.",
  rules:["a/√b = a√b/b","(p+√q)(p−√q)=p²−q"]
 },
 "algfrac-simplify":{
  concept:"Algebraic fractions simplify by factorising first and then cancelling common factors. Terms joined by + or − cannot be cancelled directly.",
  rules:["factorise numerator","factorise denominator","state restrictions","cancel common factors"]
 },
 "algfrac-four":{
  concept:"For multiplication and division, factor first and cancel. For addition and subtraction, create a common denominator before combining numerators.",
  rules:["a/b × c/d = ac/bd","a/b ÷ c/d = ad/bc","use the lowest common denominator"]
 },
 forming:{
  concept:"Translate words into algebra by defining the unknown first, then representing each relationship carefully.",
  rules:["define the variable","write the expression/equation","check units and context"]
 },
 linear:{
  concept:"Solve a linear equation by performing equivalent operations on both sides until the unknown is isolated.",
  rules:["expand brackets","collect like terms","move variable terms together","check by substitution"]
 },
 quadratic:{
  concept:"A quadratic equation has highest power 2. Solve by factorisation where possible, otherwise use completing the square or the quadratic formula.",
  rules:["set equation equal to 0","factorise or use formula","check both roots"]
 },
 "fractional-eq":{
  concept:"Clear fractional denominators using a common multiple, while remembering values that make an original denominator zero are excluded.",
  rules:["state restrictions","multiply every term by the LCD","solve","reject invalid roots"]
 },
 "simultaneous-linear":{
  concept:"A simultaneous solution satisfies both equations. Use elimination or substitution to reduce two equations to one unknown.",
  rules:["align terms","eliminate one variable","back-substitute","check both equations"]
 },
 "simultaneous-nonlinear":{
  concept:"When one equation is nonlinear, substitute the linear equation into the nonlinear one, solve the resulting quadratic, then find paired values.",
  rules:["substitute","solve quadratic","find corresponding second values","check pairs"]
 },
 rearrange:{
  concept:"Rearranging a formula uses inverse operations to isolate the required subject without changing the equality.",
  rules:["clear fractions if useful","collect subject terms","factor subject","divide"]
 },
 "ineq-numberline":{
  concept:"An inequality describes a range of values. Open circles represent strict inequalities; filled circles include the endpoint.",
  rules:["< or > uses open endpoint","≤ or ≥ uses closed endpoint","shade the solution direction"]
 },
 "ineq-linear":{
  concept:"Solve inequalities like equations, except multiplying or dividing by a negative reverses the inequality sign.",
  rules:["keep inequality balanced","reverse sign after × or ÷ by a negative"]
 },
 "ineq-regions":{
  concept:"A region on a graph is the set of points satisfying all inequalities at once.",
  rules:["draw each boundary","use dashed line for strict inequality","test a point","shade intersection"]
 },
 angles:{
  concept:"Angle problems are solved by combining standard angle facts with clear reasons at every step.",
  rules:["straight line = 180°","around a point = 360°","vertically opposite angles are equal","triangle angles = 180°"]
 },
 parallel:{
  concept:"Parallel-line angle facts allow unknown angles to be transferred across a transversal.",
  rules:["corresponding angles equal","alternate angles equal","co-interior angles total 180°"]
 },
 polygons:{
  concept:"Polygon angle sums depend on the number of sides. Regular polygons have equal interior and exterior angles.",
  rules:["interior sum=(n−2)×180°","exterior angles total 360°","regular exterior angle=360°/n"]
 },
 symmetry2d:{
  concept:"Line symmetry maps a shape onto itself by reflection; rotational symmetry maps it onto itself by turning.",
  rules:["order = number of matches in 360°","smallest angle=360°/order"]
 },
 symmetry3d:{
  concept:"Three-dimensional symmetry is described using planes of symmetry and rotational axes.",
  rules:["identify mirror planes","identify axes and rotational order"]
 },
 units:{
  concept:"Length, area and volume scale differently. Squared units use the square of the conversion factor; cubed units use the cube.",
  rules:["1 m=100 cm","1 m²=10,000 cm²","1 m³=1,000,000 cm³"]
 },
 area:{
  concept:"Choose the correct area formula, use perpendicular heights, and split compound shapes into known regions.",
  rules:["triangle=½bh","parallelogram=bh","trapezium=½(a+b)h"]
 },
 circle:{
  concept:"Circle measurements use radius consistently. Circumference measures boundary length; area measures the region inside.",
  rules:["C=2πr=πd","A=πr²"]
 },
 sector:{
  concept:"A sector is a fraction of a full circle, so its area and arc length are proportional to its central angle.",
  rules:["sector area=(θ/360)πr²","arc length=(θ/360)2πr"]
 },
 tables:{
  concept:"A frequency table organises data so each observation is counted once. Two-way tables classify by two variables.",
  rules:["clear categories","non-overlapping classes","check totals"]
 },
 averages:{
  concept:"Measures of central tendency describe a typical value; measures of spread describe variability.",
  rules:["mean=total/frequency","range=max−min","IQR=Q3−Q1"]
 },
 "grouped-mean":{
  concept:"For grouped data, use class midpoints to estimate the mean because exact values are unknown.",
  rules:["midpoint=(lower+upper)/2","estimated mean=Σfx/Σf"]
 },
 modalclass:{
  concept:"The modal class is the class interval with the greatest frequency.",
  rules:["identify highest frequency","quote the full interval"]
 },
 "data-interpret":{
  concept:"Interpret data by referring to both centre and spread, and support comparisons with numerical evidence.",
  rules:["compare medians/means","compare range/IQR","use context"]
 },
 "data-compare":{
  concept:"A complete comparison normally comments on typical value and consistency.",
  rules:["higher median/mean → higher typical value","smaller spread → more consistent"]
 },
 "data-limits":{
  concept:"Statistical conclusions depend on sample size, sampling method, representation and whether the data supports causation.",
  rules:["correlation ≠ causation","watch bias","avoid unjustified extrapolation"]
 },
 charts:{
  concept:"Choose a statistical diagram suited to the data type and label scales clearly.",
  rules:["bar charts for discrete/categorical data","pie angles=(frequency/total)×360°","stem-and-leaf needs a key"]
 },
 scatter:{
  concept:"Scatter diagrams show the relationship between two variables. Describe direction, strength and unusual points.",
  rules:["positive/negative/no correlation","plot crosses accurately","identify outliers"]
 },
 correlation:{
  concept:"Correlation describes association, not proof that one variable causes the other.",
  rules:["state direction","state strength","do not claim causation without evidence"]
 },
 bestfit:{
  concept:"A line of best fit represents the overall trend and can be used for interpolation. Extrapolation is less reliable.",
  rules:["balance points above/below","do not force through origin","interpolate cautiously"]
 },
 cumfreq:{
  concept:"Cumulative frequency is a running total. For grouped continuous data, plot totals against upper class boundaries.",
  rules:["running total","plot upper boundaries","join with a smooth increasing curve"]
 },
 "cumfreq-read":{
  concept:"Quartiles and percentiles are read from cumulative-frequency positions.",
  rules:["Q1 at n/4","median at n/2","Q3 at 3n/4","IQR=Q3−Q1"]
 },
 histogram:{
  concept:"A histogram represents continuous grouped data. Bar area is proportional to frequency, so unequal class widths require frequency density.",
  rules:["frequency density=frequency/class width","bars touch","area represents frequency"]
 },
 freqdensity:{
  concept:"Frequency density adjusts bar height so histogram area remains proportional to frequency.",
  rules:["density=f/class width","frequency=density×class width"]
 },
 "chart-infer":{
  concept:"Use charts to make conclusions that are supported by the displayed data, and distinguish exact readings from estimates.",
  rules:["quote evidence","state limitations","avoid overclaiming"]
 },
 "graph-compare":{
  concept:"Compare statistical graphs using centre, spread, shape and context.",
  rules:["compare median/mean","compare IQR/range","mention skew/outliers if visible"]
 },
 "graph-limits":{
  concept:"A graph can mislead through scale, truncation, sampling or extrapolation.",
  rules:["inspect axes","check sample","separate correlation from causation"]
 },
 functions:{
  concept:"A function maps each allowed input to exactly one output. Domain is the set of allowed inputs; range is the resulting outputs.",
  rules:["f(x) means output of f at x","substitute carefully","state domain restrictions"]
 },
 inverse:{
  concept:"An inverse function reverses the original mapping and exists as a function only when the original mapping is one-to-one on its domain.",
  rules:["write y=f(x)","swap x and y","rearrange for y","check composition"]
 },
 composite:{
  concept:"A composite function applies one function and then another. Order matters.",
  rules:["gf(x)=g(f(x))","apply the inside function first","fg and gf are usually different"]
 },
 sets:{
  concept:"Set notation describes membership and relationships between groups. Venn diagrams organise overlaps visually.",
  rules:["A∪B = union","A∩B = intersection","A′ = complement","start with deepest overlap"]
 },
 proportion:{
  concept:"Proportion models how one quantity changes with another through a constant of proportionality.",
  rules:["direct: y=kx","inverse: y=k/x","square: y=kx²","inverse square: y=k/x²"]
 }
};

THEORY["ineq-region"]={
 concept:"A feasible region is the overlap of all half-planes that satisfy the given inequalities. Each boundary line must be drawn correctly before shading.",
 rules:["draw each boundary from its equation","solid line for ≤ or ≥","dashed line for < or >","test a point to choose the correct side","the final feasible region satisfies every inequality"]
};
THEORY["ineq-graph"]={
 concept:"A linear inequality in two variables represents a half-plane. The boundary is the corresponding equality; shading shows all coordinate pairs that satisfy the inequality.",
 rules:["replace the inequality temporarily by = to draw the boundary","solid boundary for ≤ or ≥","dashed boundary for < or >","test a point such as (0,0) when suitable","shade only the side that satisfies the inequality"]
};

function escapeHtml(s){
 return String(s??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function sourceFigure(l){
 const src=SOURCE[l.id];
 if(!src)return "";
 return '<figure class="textbook-extract"><img src="'+src+'" alt="Textbook source extract"><figcaption><strong>Textbook source extract</strong><span>'+escapeHtml(l.src)+'</span></figcaption></figure>';
}
function safeMath(root){
 if(!root||!window.renderMathInElement)return;
 try{
  window.renderMathInElement(root,{delimiters:[
   {left:"\\(",right:"\\)",display:false},
   {left:"\\[",right:"\\]",display:true}
  ],throwOnError:false,strict:"ignore"});
 }catch(e){ console.warn("Math rendering skipped",e); }
}
function theoryFor(l){
 return THEORY[l.type]||{
  concept:"Use the definitions, rules and methods in the scheme of work for this lesson. Model one clear method before moving to independent practice.",
  rules:l.obj||[]
 };
}
function exampleSet(l){
 const t=l.type;
 const map={
  surds:[
   ["Simplify \\(\\sqrt{72}\\).",["\\(72=36\\times2\\)","\\(\\sqrt{72}=6\\sqrt2\\)"]],
   ["Simplify \\(3\\sqrt{12}+2\\sqrt{27}\\).",["\\(\\sqrt{12}=2\\sqrt3\\), \\(\\sqrt{27}=3\\sqrt3\\)","Answer: \\(12\\sqrt3\\)"]],
   ["A square has area \\(98\\text{ cm}^2\\). Find its exact side length.",["Side \\(=\\sqrt{98}\\)","\\(=7\\sqrt2\\text{ cm}\\)"]]
  ],
  rationalise:[
   ["Rationalise \\(5/\\sqrt3\\).",["Multiply top and bottom by \\(\\sqrt3\\)","Answer \\(5\\sqrt3/3\\)"]],
   ["Rationalise \\(4/(3-\\sqrt5)\\).",["Multiply by conjugate \\(3+\\sqrt5\\)","Denominator \\(=9-5=4\\)","Answer \\(3+\\sqrt5\\)"]]
  ],
  linear:[
   ["Solve \\(3x+4=19\\).",["\\(3x=15\\)","\\(x=5\\)"]],
   ["Solve \\(5-2x=3x+20\\).",["\\(-5x=15\\)","\\(x=-3\\)"]]
  ],
  quadratic:[
   ["Solve \\(x^2-7x+12=0\\).",["Factorise: \\((x-3)(x-4)=0\\)","\\(x=3\\) or \\(x=4\\)"]],
   ["Solve \\(2x^2+3x-2=0\\).",["Factorise: \\((2x-1)(x+2)=0\\)","\\(x=1/2\\) or \\(x=-2\\)"]]
  ],
  angles:[
   ["Find x if \\(x+112^\\circ=180^\\circ\\).",["Angles on a straight line total \\(180^\\circ\\)","\\(x=68^\\circ\\)"]],
   ["Two vertically opposite angles are \\(5x-8\\) and \\(3x+28\\). Find x.",["Set equal","\\(5x-8=3x+28\\)","\\(x=18\\)"]]
  ],
  parallel:[
   ["Two corresponding angles are \\(3x+10\\) and \\(5x-30\\). Find x.",["Corresponding angles are equal","\\(3x+10=5x-30\\)","\\(x=20\\)"]]
  ],
  polygons:[
   ["Find the interior angle of a regular octagon.",["Exterior angle \\(=360/8=45^\\circ\\)","Interior angle \\(=135^\\circ\\)"]]
  ],
  area:[
   ["Find the area of a trapezium with parallel sides 9 cm and 14 cm and height 6 cm.",["\\(A=\\tfrac12(a+b)h\\)","\\(A=69\\text{ cm}^2\\)"]]
  ],
  circle:[
   ["Find the circumference of a circle of radius 7 cm.",["\\(C=2\\pi r\\)","\\(C=14\\pi\\text{ cm}\\)"]]
  ],
  sector:[
   ["Find the area of a \\(72^\\circ\\) sector of radius 10 cm.",["\\(A=(72/360)\\pi(10)^2\\)","\\(A=20\\pi\\text{ cm}^2\\)"]]
  ],
  averages:[
   ["Find the mean, median and range of 4, 6, 6, 9, 10.",["Mean \\(=35/5=7\\)","Median \\(=6\\)","Range \\(=6\\)"]]
  ],
  "grouped-mean":[
   ["Estimate the mean for classes with midpoints 5,15,25 and frequencies 3,7,5.",["\\(\\sum fx=245\\)","\\(\\sum f=15\\)","Estimated mean \\(=16.3\\)"]]
  ],
  scatter:[
   ["A scatter plot slopes upward with points close to a line. Describe the correlation.",["Strong positive correlation"]]
  ],
  correlation:[
   ["Shoe size and reading age show positive correlation in children. Does one cause the other?",["No","Age is a plausible third variable","Correlation does not prove causation"]]
  ],
  bestfit:[
   ["Explain how to draw a line of best fit.",["Use one straight line across the data cloud","Balance points above and below","Do not force through the origin"]]
  ],
  cumfreq:[
   ["Frequencies are 5,8,7. Find cumulative frequencies.",["5","13","20"]]
  ],
  "cumfreq-read":[
   ["A cumulative-frequency graph has 80 values. State the positions of Q1, median and Q3.",["20th","40th","60th"]]
  ],
  histogram:[
   ["A class has frequency 24 and width 10. Find frequency density.",["\\(24/10=2.4\\)"]]
  ],
  freqdensity:[
   ["A histogram bar has density 3.2 and class width 5. Find frequency.",["\\(3.2\\times5=16\\)"]]
  ],
  functions:[
   ["Given \\(f(x)=3x-1\\), find \\(f(5)\\).",["\\(f(5)=15-1=14\\)"]]
  ],
  inverse:[
   ["Find the inverse of \\(f(x)=3x+1\\).",["\\(y=3x+1\\)","Swap x and y","\\(f^{-1}(x)=(x-1)/3\\)"]]
  ],
  composite:[
   ["Given \\(f(x)=x+2\\), \\(g(x)=2x\\), find \\(gf(5)\\).",["\\(f(5)=7\\)","\\(g(7)=14\\)"]]
  ],
  sets:[
   ["In a class, 23 study French, 19 Spanish and 8 both. How many study at least one?",["\\(23+19-8=34\\)"]]
  ],
  proportion:[
   ["\\(y\\propto x^2\\), and \\(y=18\\) when \\(x=3\\). Find y when x=5.",["\\(18=9k\\Rightarrow k=2\\)","\\(y=2(25)=50\\)"]]
  ]
 };
 return map[t]||[
  ["Model the first skill in this lesson.",["State the rule or definition.","Substitute or transform one step at a time.","Check the result in context."]],
  ["Apply the skill in a less familiar context.",["Identify the mathematical structure.","Choose the correct method.","Give a justified final answer."]]
 ];
}
function practiceFor(l){
 const base=(l.obj||[]).map((x,i)=>"Use the lesson method to "+x.charAt(0).toLowerCase()+x.slice(1)+".");
 const more=[
  "Complete a straightforward fluency question from the referenced exercise.",
  "Complete a multi-step question using the same skill.",
  "Explain one common error and correct it.",
  "Solve a context problem and justify the method.",
  "Create your own example that satisfies the lesson rule.",
  "Write one sentence explaining why your answer is reasonable."
 ];
 return base.concat(more);
}
function homeworkFor(l){
 return [
  {tier:"Foundation",q:"Complete a basic fluency question on "+l.title+".",sol:["Identify the rule.","Apply it one step at a time.","Check the final answer."]},
  {tier:"Core",q:"Complete a two-step application question on "+l.title+".",sol:["Translate the information into mathematics.","Apply the lesson method.","Simplify and check."]},
  {tier:"Core",q:"Explain a common misconception from this topic and correct it.",sol:["State the incorrect idea.","Give the correct rule.","Use a short example to demonstrate it."]},
  {tier:"Extension",q:"Solve a reasoning/problem-solving question using "+l.title+".",sol:["Identify the hidden structure.","Choose an efficient method.","Justify the conclusion."]}
 ];
}
function renderNav(filter=""){
 const nav=$("#lessonNav");
 if(!nav)return;
 const q=String(filter||"").trim().toLowerCase();
 const groups={};
 LESSONS.forEach((l,i)=>{
  if(q && !(l.id+" "+l.title+" "+l.unit).toLowerCase().includes(q))return;
  (groups[l.u]||(groups[l.u]=[])).push([l,i]);
 });
 nav.innerHTML=Object.keys(groups).map(u=>{
  const rows=groups[u];
  return '<div class="unit-nav"><h3>Unit '+escapeHtml(u)+' • '+escapeHtml(rows[0][0].unit)+'</h3>'+
   rows.map(([l,i])=>'<button type="button" class="lesson-link '+(i===current?"active":"")+'" data-i="'+i+'"><strong>'+escapeHtml(l.id)+'</strong> '+escapeHtml(l.title)+'</button>').join("")+
   '</div>';
 }).join("");
 $$(".lesson-link").forEach(btn=>btn.addEventListener("click",()=>{
  current=Number(btn.dataset.i)||0;
  tab="learn";
  render();
  const sb=$("#sidebar"); if(sb)sb.classList.remove("open");
 }));
}
function renderLearn(l){
 const th=theoryFor(l);
 return '<section class="teaching-slide notes-slide">'+
  '<div class="slide-kicker">TEACH • KEY NOTES</div>'+
  '<article class="card flat"><h3>Core explanation</h3><p class="lead">'+escapeHtml(th.concept)+'</p></article>'+
  '<article class="card flat"><h3>Rules & key facts</h3><ul class="clean-list">'+th.rules.map(x=>'<li>'+escapeHtml(x)+'</li>').join("")+'</ul></article>'+
  sourceFigure(l)+
  '<article class="card flat"><h3>Lesson objectives</h3><ul class="clean-list">'+(l.obj||[]).map(x=>'<li>'+escapeHtml(x)+'</li>').join("")+'</ul></article>'+
  '<details class="prior-knowledge"><summary>Prior knowledge</summary><ul class="clean-list">'+(l.prior||[]).map(x=>'<li>'+escapeHtml(x)+'</li>').join("")+'</ul></details>'+
  '<p class="source-note"><strong>SoW / book reference:</strong> '+escapeHtml(l.src)+'</p>'+
 '</section>';
}
function modelBoard(id){
 return '<div class="model-area"><div class="model-label"><span>Model here</span><small>Mouse, finger or Apple Pencil</small></div>'+
 '<div class="board-tools compact" data-tools="'+id+'"><button type="button" class="colour-dot active" data-colour="#132d36"></button><button type="button" class="colour-dot" data-colour="#2563eb"></button><button type="button" class="colour-dot" data-colour="#dc2626"></button><button type="button" class="tool-btn erase-model">Eraser</button><button type="button" class="tool-btn clear-model">Clear</button></div>'+
 '<div class="model-canvas-shell"><canvas class="model-board" id="'+id+'"></canvas></div></div>';
}
function renderExamples(l){
 const exs=exampleSet(l);
 return '<div class="example-deck">'+exs.map((e,i)=>'<section class="teaching-slide example-slide-stable">'+
  '<div class="slide-kicker">TEACHER EXAMPLE '+(i+1)+'</div>'+
  '<div class="example-question">'+e[0]+'</div>'+
  (i===0?sourceFigure(l):"")+
  modelBoard("model-"+current+"-"+i)+
  '<details class="worked-solution"><summary>Show model solution</summary><div class="solution-paper"><div class="steps">'+e[1].map((s,j)=>'<div class="step"><span class="step-badge">'+(j+1)+'</span><div>'+s+'</div></div>').join("")+'</div></div></details>'+
 '</section>').join("")+'</div>';
}
function renderPractice(l){
 const qs=practiceFor(l);
 return '<article class="card practice-sheet"><div class="sheet-head"><div><div class="slide-kicker">INDEPENDENT PRACTICE</div><h3>Progressive practice</h3></div><span class="question-count">'+qs.length+' questions</span></div>'+
 '<div class="tiers"><section class="tier foundation"><h4>Foundation</h4><ol class="q-list">'+qs.slice(0,3).map(q=>'<li>'+escapeHtml(q)+'</li>').join("")+'</ol></section>'+
 '<section class="tier core"><h4>Core</h4><ol class="q-list">'+qs.slice(3,6).map(q=>'<li>'+escapeHtml(q)+'</li>').join("")+'</ol></section>'+
 '<section class="tier extension"><h4>Extension / reasoning</h4><ol class="q-list">'+qs.slice(6).concat(["Solve a textbook-style problem from "+l.src+"."]).map(q=>'<li>'+escapeHtml(q)+'</li>').join("")+'</ol></section></div></article>';
}
function renderHomework(l){
 const hw=homeworkFor(l);
 return '<article class="card homework-sheet"><div class="slide-kicker">HOMEWORK</div><h3>Homework with worked self-check</h3>'+
 hw.map((h,i)=>'<div class="hw-item"><div class="hw-q"><span class="q-number">'+(i+1)+'</span><span class="pill">'+h.tier+'</span><span>'+escapeHtml(h.q)+'</span></div><details class="solution"><summary>Show solution</summary><div class="solution-body"><div class="steps">'+h.sol.map((s,j)=>'<div class="step"><span class="step-badge">'+(j+1)+'</span><div>'+escapeHtml(s)+'</div></div>').join("")+'</div></div></details></div>').join("")+
 '</article>';
}
function renderWhiteboard(){
 return '<article class="card board-card"><div class="board-tools"><strong>Whole-class whiteboard</strong><button type="button" class="colour-dot active" data-colour="#132d36"></button><button type="button" class="colour-dot" data-colour="#2563eb"></button><button type="button" class="colour-dot" data-colour="#dc2626"></button><button type="button" id="eraser" class="tool-btn">Eraser</button><button type="button" id="clearBoard" class="tool-btn">Clear</button></div><div class="canvas-shell"><canvas id="board"></canvas></div></article>';
}
function bindCanvas(canvas,tools){
 if(!canvas||!tools)return;
 const shell=canvas.parentElement,ctx=canvas.getContext("2d");
 let drawing=false,last=null,colour="#132d36",erase=false;
 function resize(){
  const r=shell.getBoundingClientRect(),dpr=window.devicePixelRatio||1;
  const w=Math.max(1,Math.floor(r.width*dpr)),h=Math.max(1,Math.floor(r.height*dpr));
  if(canvas.width===w&&canvas.height===h)return;
  canvas.width=w;canvas.height=h;canvas.style.width=r.width+"px";canvas.style.height=r.height+"px";
  ctx.setTransform(dpr,0,0,dpr,0,0);
 }
 resize();
 const pos=e=>{const r=canvas.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top};};
 canvas.addEventListener("pointerdown",e=>{drawing=true;last=pos(e);try{canvas.setPointerCapture(e.pointerId);}catch(_){}});
 canvas.addEventListener("pointermove",e=>{if(!drawing)return;const p=pos(e);ctx.globalCompositeOperation=erase?"destination-out":"source-over";ctx.lineWidth=erase?22:3.5;ctx.lineCap="round";ctx.strokeStyle=colour;ctx.beginPath();ctx.moveTo(last.x,last.y);ctx.lineTo(p.x,p.y);ctx.stroke();last=p;});
 ["pointerup","pointercancel"].forEach(ev=>canvas.addEventListener(ev,()=>drawing=false));
 tools.querySelectorAll(".colour-dot").forEach(b=>b.addEventListener("click",()=>{colour=b.dataset.colour||"#132d36";erase=false;tools.querySelectorAll(".colour-dot").forEach(x=>x.classList.toggle("active",x===b));}));
 const er=tools.querySelector(".erase-model,#eraser"); if(er)er.addEventListener("click",()=>{erase=true;});
 const cl=tools.querySelector(".clear-model,#clearBoard"); if(cl)cl.addEventListener("click",()=>{ctx.clearRect(0,0,canvas.width,canvas.height);});
}
function initCanvases(){
 $$(".model-board").forEach(c=>bindCanvas(c,c.parentElement.previousElementSibling));
 const b=$("#board"); if(b)bindCanvas(b,$(".board-tools"));
}
function render(){
 if(!LESSONS.length){
  const c=$("#content"); if(c)c.innerHTML='<article class="card"><h3>Lesson data did not load.</h3><p>Please refresh the page.</p></article>';
  return;
 }
 const l=LESSONS[current];
 $("#unitPill").textContent="Unit "+l.u+" • "+l.unit;
 $("#lessonTitle").textContent=l.id+"  "+l.title;
 $("#lessonSubtitle").textContent="Cambridge IGCSE Mathematics • Year 10";
 $("#prevBtn").disabled=current===0;
 $("#nextBtn").disabled=current===LESSONS.length-1;
 $$(".tab").forEach(x=>x.classList.toggle("active",x.dataset.tab===tab));
 renderNav($("#search")?$("#search").value:"");
 const c=$("#content");
 if(tab==="learn")c.innerHTML=renderLearn(l);
 if(tab==="examples")c.innerHTML=renderExamples(l);
 if(tab==="practice")c.innerHTML=renderPractice(l);
 if(tab==="homework")c.innerHTML=renderHomework(l);
 if(tab==="whiteboard")c.innerHTML=renderWhiteboard();
 safeMath(c);
 initCanvases();
 history.replaceState(null,"","#"+l.id+"-"+tab);
 document.documentElement.dataset.mathoraReady="true";
}
function start(){
 if(!LESSONS.length){render();return;}
 const hash=decodeURIComponent(location.hash.slice(1));
 if(hash){
  const parts=hash.split("-");
  const idx=LESSONS.findIndex(l=>l.id===parts[0]);
  if(idx>=0)current=idx;
  const t=parts.slice(1).join("-");
  if(["learn","examples","practice","homework","whiteboard"].includes(t))tab=t;
 }
 $$(".tab").forEach(b=>b.addEventListener("click",()=>{tab=b.dataset.tab;render();}));
 $("#prevBtn").addEventListener("click",()=>{if(current>0){current--;tab="learn";render();}});
 $("#nextBtn").addEventListener("click",()=>{if(current<LESSONS.length-1){current++;tab="learn";render();}});
 $("#search").addEventListener("input",e=>renderNav(e.target.value));
 $("#menuBtn").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));
 $("#presentBtn").addEventListener("click",()=>{
  document.body.classList.toggle("present");
  $("#presentBtn").textContent=document.body.classList.contains("present")?"Exit presentation":"Presentation mode";
 });
 render();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true}); else start();
})();