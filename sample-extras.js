(function(){
"use strict";
const $=id=>document.getElementById(id);
const plans={
 weekly:{name:"Grove Weekly",summary:"Four focused weekly paper opportunities per month. All progress and reviewed work stays in your learning record.",next:["Weekly paper"]},
 daily:{name:"Grove Daily",summary:"Up to five short Daily Focus sessions each week, with topic-based recovery activities and an evolving learning record.",next:["Daily Focus","Daily Focus","Recovery","Daily Focus","Daily Focus"]},
 exam:{name:"Grove Exam",summary:"Daily Focus with weekly structured practice and one mock-preview opportunity monthly; Signature Review may be added separately.",next:["Daily Focus","Weekly paper","Daily Focus","Review","Mock preview"]}
};
const scores=[{name:"Paper 1",value:60},{name:"Paper 2",value:65},{name:"Paper 3",value:71},{name:"Paper 4",value:78}];
const tier=$("sample-tier"),ribbon=$("sample-tier-features");
function calendar(plan){
 const root=$("demo-calendar");root.replaceChildren();
 const now=new Date();now.setHours(12,0,0,0);
 const weekday=new Intl.DateTimeFormat("en-GB",{weekday:"short"});
 let slots=plan==="weekly"?[3]:plan==="daily"?[0,1,2,3,4]:[0,1,2,4,6];
 for(let i=0;i<7;i++){
  const d=new Date(now);d.setDate(d.getDate()+i);
  const box=document.createElement("div");box.className="demo-day"+(slots.includes(i)?" has-task":"");
  const label=document.createElement("small");label.textContent=weekday.format(d);
  const day=document.createElement("strong");day.textContent=String(d.getDate());
  const caption=document.createElement("span");
  const task=slots.indexOf(i);
  caption.textContent=task>=0?(plans[plan].next[task]||"Practice"):"Rest / review";
  box.append(label,day,caption);root.append(box);
 }
}
function applyTier(){
 const plan=tier.value;const data=plans[plan];if(!data)return;
 ribbon.replaceChildren();
 const info=document.createElement("div"),h=document.createElement("strong"),p=document.createElement("p"),tag=document.createElement("span");
 h.textContent=data.name;p.textContent=data.summary;tag.textContent="SAMPLE VIEW · NO PAYMENT";
 info.append(h,p);ribbon.append(info,tag);
 calendar(plan);
}
tier.addEventListener("change",applyTier);applyTier();
const trend=$("demo-trend");
for(const score of scores){
 const col=document.createElement("div");col.className="trend-col";
 const percentage=document.createElement("strong");percentage.className="trend-value";percentage.textContent=score.value+"%";
 const bar=document.createElement("span");bar.className="trend-bar";bar.style.height=(score.value*1.4)+"px";
 const label=document.createElement("small");label.className="trend-label";label.textContent=score.name;
 col.append(percentage,bar,label);trend.append(col);
}
// Illustrative MODEL only: intentionally fictional calibration, never a board grade boundary.
// Four past fictional percentages and a hypothetical fifth paper equally weighted.
const model=[60,65,71,78],slider=$("grade-projection");
function scenario(){
 const next=Number(slider.value);
 $("grade-projection-value").textContent=next+"%";
 const avg=Math.round((model.reduce((a,b)=>a+b,0)+next)/5);
 $("grade-projection-note").textContent="Illustrative 5-paper mean: "+avg+"%";
 const label=$("sample-grade-label");
 // A working RANGE is shown; not a certified GCSE prediction.
 // Fictional calibration solely for product demonstration. These are NOT
 // Pearson/AQA/OCR boundaries and must never be used for a real prediction.
 const band=avg<35?"2–3":avg<45?"3–4":avg<55?"4–5":avg<65?"5–6":avg<75?"6–7":avg<85?"7–8":"8–9";
 label.replaceChildren();
 const text=document.createTextNode("Grade "+band),span=document.createElement("span");
 span.textContent="Hypothetical model only · NOT an official predicted grade";
 label.append(text,span);
}
slider.addEventListener("input",scenario);
scenario();
})();
