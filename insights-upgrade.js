/* MathsGrove role-aware insights: presentation only. Uses existing permission-scoped data. */
(function(){
"use strict";
const $=id=>document.getElementById(id);
const make=(tag,cls,value)=>{const x=document.createElement(tag);if(cls)x.className=cls;if(value!==undefined&&value!==null)x.textContent=String(value);return x};
const number=x=>Number.isFinite(Number(x))?Number(x):0;
const pct=(a,b)=>b>0?Math.max(0,Math.min(100,Math.round(number(a)/number(b)*100))):null;
const total=(arr,key)=>arr.reduce((sum,x)=>sum+number(x[key]),0);
const add=(root,...items)=>{items.forEach(x=>x&&root.append(x));return root};
const paragraph=(s,cls)=>make("p",cls||"",s);
const head=(eyebrow,title,desc)=>{const x=make("div");add(x,make("span","mgx-eyebrow",eyebrow),make("h2","",title),paragraph(desc));return x};
const tile=(name,value,note)=>{const x=make("div","mgx-tile");add(x,make("small","",name),make("strong","",value),make("span","",note));return x};
const panel=(title,soft)=>{const x=make("div","mgx-panel"+(soft?" warm":""));add(x,make("h3","",title));return x};
const grid=(cols)=>make("div","mgx-grid"+(cols===2?" two":""));
const bar=(label,earned,available,caption)=>{
 const x=make("div","mgx-bar"),h=make("div","mgx-bar-head"),v=pct(earned,available),track=make("div","mgx-track"),fill=make("i");
 add(h,make("span","",label),make("strong","",v===null?"Awaiting evidence":v+"% · "+number(earned)+"/"+number(available)));
 fill.style.width=(v===null?0:v)+"%";
 track.append(fill);add(x,h,track);
 if(caption)add(x,paragraph(caption,"mgx-note"));
 return x;
};
const list=(items)=>{const ul=make("ul","mgx-list");items.forEach(t=>ul.append(make("li","",t)));return ul};
const note=(message)=>paragraph(message,"mgx-note");
function visual(items,unit){
 const root=make("div","mgx-visual");
 root.setAttribute("role","img");
 root.setAttribute("aria-label",items.map(i=>i.label+": "+i.value+(unit||"")).join("; "));
 items.forEach((item)=>{
  const col=make("div","mgx-column"); const v=Math.max(0,Math.min(100,number(item.value)));
  const fill=make("i");fill.style.height=Math.max(3,Math.round(v*1.16))+"px";
  add(col,make("b","",number(item.value)+(unit||"")),fill,make("small","",item.label));root.append(col);
 });
 return root;
}
const date=s=>{const d=new Date(s);return !s||Number.isNaN(d.getTime())?"Undated":d.toLocaleDateString("en-GB",{day:"numeric",month:"short"})};
function control(options,selected,onChange){
 const group=make("div","mgx-filter");group.setAttribute("role","group");group.setAttribute("aria-label","Analysis period");
 options.forEach(([key,label])=>{const b=make("button","",label);b.type="button";b.setAttribute("aria-pressed",String(selected===key));b.onclick=()=>onChange(key);group.append(b)});
 return group;
}
function link(text,target,cls){const b=make("button","mgx-cta"+(cls?" secondary":""));b.type="button";b.textContent=text;b.onclick=()=>{
  const found=document.querySelector(target);
  if(found)found.click();
 };return b}
let studioData=null,studioWindow="30";
function studio(payload){
 studioData=payload;const root=$("mg-admin-analytics");if(!root)return;
 root.replaceChildren();
 const all=Array.isArray(payload.attempts)?payload.attempts:[];
 const current=studioWindow==="all"?all:all.filter(a=>{
   const ms=new Date(a.started_at).getTime();return Number.isFinite(ms)&&Date.now()-ms<=number(studioWindow)*86400000&&ms<=Date.now();
 });
 const days=studioWindow==="all"?"the available register":"the past "+studioWindow+" days";
 const h=make("div","mgx-header");add(h,head("02 / ANALYTICS DESK","From activity to action.","A clear operating picture of assigned learners and assessment workflow."),control([["7","7 days"],["30","30 days"],["all","All records"]],studioWindow,key=>{studioWindow=key;studio(studioData)}));root.append(h);
 const counts={draft:current.filter(x=>x.status==="draft").length,submitted:current.filter(x=>x.status==="submitted").length,marked:current.filter(x=>x.status==="marked").length};
 const g=grid(3);
 add(g,tile("ASSESSMENTS STARTED",current.length,"Recorded starts in "+days),
  tile("NOW AWAITING REVIEW",counts.submitted,"Unreleased submissions in this selection"),
  tile("CURRENTLY RELEASED",counts.marked,"Reviewed items started in this selection"));
 root.append(g);
 const split=make("div","mgx-split");
 const funnel=panel("Assessment flow");
 add(funnel,paragraph("Current status of papers started in "+days+". This is a snapshot, not a time-to-mark metric."));
 const bars=make("div","mgx-bars");
 [["In progress",counts.draft],["Submitted",counts.submitted],["Released",counts.marked]].forEach(([t,c])=>bars.append(bar(t,c,current.length)));
 add(funnel,bars,note("Assigned-practice reviews are counted separately from the legacy paper register."));
 const cohort=panel("Programme mix",true);
 const enrolled=Array.isArray(payload.students)?payload.students:[];
 const entitlement=Array.isArray(payload.entitlements)?payload.entitlements:[];
 const active=entitlement.filter(x=>new Date(x.starts_at)<=new Date()&&(!x.ends_at||new Date(x.ends_at)>new Date()));
 const tiers=[["Grove Weekly","weekly"],["Grove Daily","daily"],["Grove Exam","exam"]];
 const tierBars=make("div","mgx-bars");
 tiers.forEach(([label,key])=>tierBars.append(bar(label,active.filter(x=>x.tier===key).length,enrolled.length)));
 add(cohort,paragraph("Active plans across "+enrolled.length+" currently enrolled learner"+(enrolled.length===1?"":"s")+"."),tierBars,note("Learners without an active plan are not included in any programme band."));
 add(split,funnel,cohort);root.append(split);
 const footer=make("div","mgx-foot");
 footer.textContent="Data scope: "+all.length+" most recent paper records"+(payload.capped?" (150-record limit reached)":"")+". "+number(payload.assignedOpen)+" additional assigned-practice reviews currently await marking; "+number(payload.assignedReleased)+" assigned-practice reviews released. Role permissions and the underlying records are unchanged.";
 root.append(footer);
 const actions=make("div","mgx-cards");
 add(actions,link("Open marking queue →",'[data-goto="marking"]'),link("Review student access →",'[data-goto="students"]',true));
 root.append(actions);
}
function student(data){
 const root=$("mg-student-deep-insights");if(!root)return;root.replaceChildren();
 const history=Array.isArray(data&&data.history)?data.history.filter(x=>number(x.total)>0):[];
 const topics=Array.isArray(data&&data.baseline_topics)?data.baseline_topics.filter(x=>number(x.total)>0):[];
 const focus=topics.filter(x=>number(x.correct)<number(x.total)).sort((a,b)=>number(a.correct)/number(a.total)-number(b.correct)/number(b.total)).slice(0,3);
 const h=make("div","mgx-header");add(h,head("THE LEARNING INTERPRETATION","Your next meaningful step.","Use your reviewed papers and baseline to decide what to strengthen next."),make("span","mgx-chip","EVIDENCE-LED"));
 root.append(h);
 const g=grid(3);
 add(g,tile("RECORDED STUDY TIME",number(data&&data.visible_minutes)+" min","Visible question time, not verified active study"),
  tile("REVIEWED PRACTICE",number(data&&data.reviewed),"Papers included in examiner analysis"),
  tile("LATEST MARKED PAPER",history.length?(pct(history[history.length-1].score,history[history.length-1].total)+"%"):"—","One paper score; not a grade prediction"));
 root.append(g);
 const split=make("div","mgx-split"),a=panel("Topic priorities",true),b=panel("Reviewed evidence");
 if(focus.length){
   add(a,paragraph("These are baseline multiple-choice gaps, not a full assessment of topic mastery."));
   const bars=make("div","mgx-bars");focus.forEach(t=>bars.append(bar(t.topic||"Topic",t.correct,t.total)));a.append(bars);
   add(a,note("Practise the first topic with a new problem, write every reasoning step, then check your method."));
 }else add(a,make("div","mgx-empty",topics.length?"No baseline gaps identified in the topics sampled. Progress to harder reasoning.":"Complete the baseline to unlock targeted topic priorities."));
 if(history.length){
  add(b,visual(history.slice(-6).map((x,i)=>({label:date(x.date||new Date().toISOString())||"Paper "+(i+1),value:pct(x.score,x.total)||0})),"%"));
  add(b,note("Individual paper percentages may differ in question difficulty and total marks. A rising bar alone is not a validated improvement or predicted grade."));
 }else add(b,make("div","mgx-empty","Once an examiner releases a marked paper, the latest evidence will appear here."));
 add(split,a,b);root.append(split);
 const actions=make("div","mgx-cards");
 add(actions,link("View my reports →",'[data-view="progress"]'),link("Continue my papers →",'[data-view="papers"]',true));root.append(actions);
}
function family(p,parent){
 const root=$("mg-family-analytics");if(!root)return;root.replaceChildren();
 const rows=Array.isArray(p.recent_results)?p.recent_results.filter(x=>number(x.maximum)>0).slice(0,8):[];
 const topics=Array.isArray(p.topics)?p.topics.filter(x=>number(x.available)>0):[];
 const weak=topics.slice().sort((a,b)=>number(a.earned)/number(a.available)-number(b.earned)/number(b.available)).slice(0,3);
 const earned=rows.reduce((a,b)=>a+number(b.score),0),possible=rows.reduce((a,b)=>a+number(b.maximum),0);
 const h=make("div","mgx-header");add(h,head(parent?"FAMILY PROGRESS BRIEF":"TUTOR'S EVIDENCE DESK",parent?"Progress you can understand.":"Turn evidence into intervention.",parent?"A calm view of released results and practical support at home.":"Released results, topic priority and next-session planning for this learner."),make("span","mgx-chip",parent?"READ-ONLY FAMILY VIEW":"ASSIGNED TUTOR"));
 root.append(h);
 const g=grid(3);
 add(g,tile("REVIEWED MARKS",possible?earned+" / "+possible:"—","Total across the available recent released results"),
 tile("MARK-WEIGHTED SCORE",possible?pct(earned,possible)+"%":"—","Not an exam grade or official forecast"),
 tile("TOPIC EVIDENCE",topics.length,"Topics with reviewed marks in this record"));root.append(g);
 const split=make("div","mgx-split"),trend=panel("Recent released assessments"),next=panel(parent?"How to support the next step":"Teaching priorities",true);
 if(rows.length)add(trend,visual(rows.slice().reverse().slice(-6).map((x,i)=>({label:date(x.date),value:pct(x.score,x.maximum)||0})),"%"));
 else add(trend,make("div","mgx-empty","No released score history yet. The graph will appear after reviewed work is available."));
 add(trend,note("Different assessments can have different lengths and difficulty. This displays recorded marks, not a prediction."));
 if(weak.length){const bars=make("div","mgx-bars");weak.forEach(x=>bars.append(bar(x.topic||"Mathematics",x.earned,x.available)));next.append(bars)}
 else next.append(make("div","mgx-empty","No topic-level reviewed evidence is available yet."));
 const lowest=weak[0]&&weak[0].topic;
 add(next,list(parent?[
  "Ask the learner to explain one method they used confidently.",
  lowest?"Revisit "+lowest+" with one new practice question.":"Use the next reviewed report to choose a specific topic.",
  "Praise corrections and clear mathematical working rather than focusing on rank."
 ]:[
  lowest?"Begin next lesson with a short diagnostic on "+lowest+".":"Start with a focused diagnostic before selecting an intervention.",
  "Compare student working with the examiner's released question feedback.",
  "Reassess with an unseen problem and document whether the same misconception returns."
 ]));
 add(split,trend,next);root.append(split);
 add(root,note("Only the learner evidence authorised for this account is displayed. Draft marks, unreleased work and private staff notes are excluded."));
}
function report(root,answers,questions,reviews){
 if(!root||!Array.isArray(answers)||!Array.isArray(questions)||!Array.isArray(reviews))return;
 const qmap=new Map(questions.map(q=>[q.id,q])),rmap=new Map(reviews.map(r=>[r.question_id,r]));
 const byTopic=new Map();
 answers.forEach(a=>{const q=qmap.get(a.question_id),r=rmap.get(a.question_id);if(!q||!r||r.marks_awarded===null)return;
  const label=q.topic||"Mathematics";const old=byTopic.get(label)||{earned:0,possible:0,count:0};
  old.earned+=number(r.marks_awarded);old.possible+=number(q.marks);old.count++;byTopic.set(label,old);
 });
 if(!byTopic.size)return;
 const section=make("section","mgx mgx-report");add(section,head("MARK ANALYSIS","Where marks were secured.","Based only on the examiner-released question scores in this paper."));
 const wrap=panel("Topic-level evidence");const bars=make("div","mgx-bars");
 [...byTopic].sort((a,b)=>(a[1].earned/(a[1].possible||1))-(b[1].earned/(b[1].possible||1))).forEach(([k,v])=>bars.append(bar(k,v.earned,v.possible)));
 add(wrap,bars,note("A score on one paper is not a reliable measure of syllabus mastery or a predicted grade."));
 section.append(wrap);
 const before=root.querySelector(".record-question");if(before)root.insertBefore(section,before);else root.append(section);
}

function assigned(task,root){
 if(!root||!task||task.review_status!=="released")return;
 const section=make("section","mgx mgx-report");
 add(section,head("YOUR RELEASED PRACTICE ANALYSIS","What the evidence shows.","A clearer interpretation of your marked practice, with a topic-by-topic next step."));
 const reviews=Array.isArray(task.review)?task.review:[];
 const seconds=reviews.filter(q=>Number.isFinite(Number(q.seconds))).reduce((a,q)=>a+Math.max(0,number(q.seconds)),0);
 const g=grid(3);
 add(g,tile("MARKED RESPONSES",number(task.score)+" / "+number(task.question_count),"Released examiner-reviewed results"),
 tile("ACCURACY",number(task.question_count)>0?pct(task.score,task.question_count)+"%":"—","On this assigned question set only"),
 tile("QUESTION VISIBILITY",reviews.length?Math.round(seconds/60)+" min":"—","Time the questions were visible"));
 section.append(g);
 const topics=Array.isArray(task.topics)?task.topics.filter(x=>number(x.total)>0):[];
 const split=make("div","mgx-split"),left=panel("Topic evidence"),right=panel("Your next action",true);
 if(topics.length){const bars=make("div","mgx-bars");topics.slice().sort((a,b)=>number(a.correct)/number(a.total)-number(b.correct)/number(b.total)).forEach(t=>bars.append(bar(t.topic||"Mathematics",t.correct,t.total)));left.append(bars);}
 else left.append(make("div","mgx-empty","Topic breakdown will appear when reviewed question details are available."));
 const weak=topics.filter(t=>number(t.correct)<number(t.total)).sort((a,b)=>number(a.correct)/number(a.total)-number(b.correct)/number(b.total))[0];
 right.append(list([weak?"Practise "+weak.topic+" again using a different question.":"Try a new reasoning problem and write out the full method.",
 "Read the examiner comments and rewrite any missing steps.",
 "Complete a fresh question independently before treating this topic as secure."]));
 add(split,left,right);section.append(split);
 add(section,note("Question visibility is not a verified measure of focused study. Individual task percentages are not official exam grades."));
 root.append(section);
}

function sample(){
 const root=$("mg-sample-insights");if(root){
  root.replaceChildren();add(root,head("LEARNING SIGNALS / FICTIONAL","From marks to understanding.","An example of how a short examiner-reviewed paper could be interpreted."));
  const g=grid(3);add(g,tile("REVIEWED QUESTIONS","4 / 4","Four fictional marked questions"),tile("MARKS AWARDED","14 / 18","78% on this specimen paper"),tile("NEXT PRIORITY","Probability","4 of 6 available marks"));root.append(g);
  const sp=make("div","mgx-split"),a=panel("Question-level mark profile"),b=panel("Recommended next steps",true);
  const bars=make("div","mgx-bars");[["Quadratics",3,3],["Simultaneous equations",3,4],["Pythagoras",4,5],["Probability",4,6]].forEach(r=>bars.append(bar(r[0],r[1],r[2])));
  a.append(bars);b.append(list(["Show substitution steps explicitly.","Include units in geometry answers.","Use a complete sample-space diagram before calculating probability."]));add(sp,a,b);root.append(sp);
  add(root,note("Fictional results. This is not a live student's data, a validated grade forecast or an exam-board mark scheme."));
 }
 const print=$("mg-sample-report-insights");
 if(print){
  print.replaceChildren();add(print,head("REPORT ANALYTICS / SPECIMEN","The marks behind the result.","An evidence breakdown from this fictional, 18-mark specimen."));
  const g=grid(2);add(g,tile("METHOD & ACCURACY","14 / 18","Four example questions marked"),tile("REASSESS FIRST","Probability · 4/6","Return to complete sample-space reasoning"));print.append(g);
  const bars=make("div","mgx-bars");[["Quadratics",3,3],["Simultaneous equations",3,4],["Pythagoras",4,5],["Probability",4,6]].forEach(r=>bars.append(bar(r[0],r[1],r[2])));
  print.append(bars);add(print,note("Illustrative analysis only; a real report uses a student's reviewed working and the actual awarded mark breakdown."));
 }
}
window.MGInsights={studio,student,family,report,assigned,sample};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",sample,{once:true});else sample();
})();
