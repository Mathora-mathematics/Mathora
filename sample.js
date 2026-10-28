(function(){
"use strict";
const $=id=>document.getElementById(id);
const sampleQuestions=[
 {prompt:"Solve x² − 7x + 12 = 0. Show your working.",marks:3},
 {prompt:"Solve the simultaneous equations 2x + y = 11 and x − y = 1.",marks:4},
 {prompt:"A right-angled triangle has perpendicular sides of 6 cm and 8 cm. Calculate the hypotenuse and show your method.",marks:5}
];
const paperNotes=sampleQuestions.map(()=>({text:"",feeling:"About right",confidence:"Quite confident"}));
let current=0;
function show(tab){
 document.querySelectorAll(".sample-panel").forEach(p=>p.hidden=p.id!=="sample-"+tab);
 document.querySelectorAll("[data-sample-tab]").forEach(b=>b.classList.toggle("active",b.dataset.sampleTab===tab));
 if(tab==="paper")displayQuestion();history.replaceState(null,"",location.pathname+"#"+tab);window.scrollTo({top:0,behavior:"smooth"});
}
for(const b of document.querySelectorAll("[data-sample-tab]"))b.addEventListener("click",()=>show(b.dataset.sampleTab));
for(const b of document.querySelectorAll("[data-jump]"))b.addEventListener("click",()=>show(b.dataset.jump));
const canvas=$("sample-canvas");
const board=window.MathsGroveBoard.setup({canvas,toolbar:$("sample-board-toolbar"),onChange:()=>{$("sample-board-status").textContent="Unsaved drawing — use Save as PNG before leaving this sample question."}});
function saveNote(){const note=paperNotes[current];note.text=$("sample-answer").value;note.feeling=$("sample-feeling").value;note.confidence=$("sample-confidence").value}
function displayQuestion(){
 const q=sampleQuestions[current],note=paperNotes[current];
 $("sample-question-number").textContent=String(current+1);
 $("sample-question-marks").textContent=q.marks+" MARKS";
 $("sample-question").textContent=q.prompt;
 $("sample-answer").value=note.text;
 $("sample-feeling").value=note.feeling;
 $("sample-confidence").value=note.confidence;
 $("sample-back").disabled=current===0;
 $("sample-next").textContent=current===sampleQuestions.length-1?"Review specimen report ↗":"Next question ↗";
 $("sample-board-status").textContent="Drawing is local to this sample page.";
 board.clear();
}
$("sample-back").addEventListener("click",()=>{if(current>0){saveNote();current--;displayQuestion()}});
$("sample-next").addEventListener("click",()=>{saveNote();if(current<sampleQuestions.length-1){current++;displayQuestion()}else show("report")});
$("sample-download").addEventListener("click",async()=>{
 const blob=await board.exportBlob();
 if(!blob)return;
 const url=URL.createObjectURL(blob),a=document.createElement("a");
 a.href=url;a.download="MathsGrove_sample_graph_working_"+(current+1)+".png";
 document.body.append(a);a.click();a.remove();
 setTimeout(()=>URL.revokeObjectURL(url),1000);
 board.markSaved();$("sample-board-status").textContent="Drawing downloaded to your device (not uploaded).";
});
$("print-sample").addEventListener("click",()=>window.print());
displayQuestion();
const requested=location.hash.replace("#","");show(["home","paper","report","history"].includes(requested)?requested:"home");
})();
