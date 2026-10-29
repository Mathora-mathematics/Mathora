/* Private Studio · maths diagnostic baseline register. No public answer keys. */
export function initBaselineAdmin(db,state){
 const $=id=>document.getElementById(id);
 const create=(tag,cls,value)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(value!==undefined)e.textContent=String(value);return e};
 const root=$('mg-baseline-overview');
 const detail=$('mg-baseline-detail');
 let results=[];
 const qualification={GCSE:'GCSE',IGCSE:'IGCSE',A_LEVEL:'A Level',FURTHER_MATHS:'Further Maths',IB_AA:'IB AA',IB_AI:'IB AI',TMUA:'TMUA'};
 const format=(row)=>[qualification[row.qualification]||row.qualification,(row.level||'').toUpperCase()].filter(Boolean).join(' · ');
 async function refresh(){
  if(!db||!state.membership||!['admin','partner','examiner'].includes(state.membership.member_role))return;
  const {data,error}=await db.rpc('baseline_admin_overview',{p_org:state.membership.org_id});
  if(error){root.replaceChildren(create('p','muted','The baseline register is not yet active. Apply the MathsGrove baseline database upgrade. '+error.message));return}
  results=Array.isArray(data?.sessions)?data.sessions:[];
  render()
 }
 function render(){
  root.replaceChildren();
  if(!results.length){root.append(create('p','muted','No student baselines have started yet. Newly enrolled students will receive the 20-question diagnostic after account activation.'));return}
  for(const row of results){
   const section=create('div','mg-bl-row'),left=create('div'),heading=create('strong','',row.student_name||'Student');
   const status=row.status==='submitted'?'Completed':row.status==='expired'?'Time elapsed':row.status==='active'?'In progress':'Awaiting result';
   const detailText=format(row)+' · '+status+(row.score!==null&&row.score!==undefined?' · '+row.score+'/20':' · '+(row.submitted_count||0)+'/20 selected');
   left.append(heading,create('small','',detailText));section.append(left);
   const button=create('button','','Review diagnostic ↗');button.type='button';button.addEventListener('click',()=>void openReport(row.student_id,row.student_name));
   section.append(button);root.append(section)
  }
 }
 async function openReport(studentId,name){
  detail.hidden=false;detail.scrollIntoView({behavior:'smooth',block:'start'});
  $('mg-baseline-detail-title').textContent=name+' · Mathematics diagnostic';
  const body=$('mg-baseline-detail-body');body.replaceChildren(create('p','muted','Loading private diagnostic report…'));
  try{
   const {data,error}=await db.rpc('baseline_staff_report',{p_student:studentId});
   if(error)throw error;
   body.replaceChildren();
   if(!data?.ready){body.append(create('p','muted',data?.reason||'No completed baseline.'));return}
   if(data.status==='active'){body.append(create('p','muted',(data.submitted_count||0)+' of 20 questions answered. The server timer is still running. No marks or answers are released before completion.'));return}
   const score=data.score??0,topics=Array.isArray(data.topics)?data.topics:[];
   const stats=create('div','mg-bl-report-stats');
   for(const [value,label] of [[score+'/20','CORRECT ANSWERS'],[Math.round(score/20*100)+'%','SAMPLE ACCURACY'],[data.band||'—','STARTING BAND']]){
    const card=create('div');card.append(create('strong','',value),create('span','',label));stats.append(card)
   }
   body.append(stats,create('h3','','Topic-level evidence'));
   for(const t of topics){
    const row=create('div','mg-bl-topic'),a=create('strong','',t.topic),b=create('small','',t.correct+' / '+t.total);
    row.append(a,b);body.append(row)
   }
   const weakest=topics.filter(x=>x.correct<x.total).sort((x,y)=>x.correct/x.total-y.correct/y.total).slice(0,3);
   const summary=weakest.length
      ? 'Recommended first practice: '+weakest.map(t=>t.priority_skill||t.topic).join('; ')+'. Use new questions and ask the learner to explain each method.'
      : 'All multiple-choice responses were correct. Check written reasoning and introduce more demanding, unfamiliar questions.';
   body.append(create('p','mg-bl-priority',summary));
   const e=data.integrity||{};
   body.append(create('p','muted','Focus context: tab-hidden events '+(e.tab_hidden||0)+', fullscreen exits '+(e.fullscreen_exit||0)+'. These browser signals do not establish misconduct.'));
   body.append(create('p','muted',data.disclaimer||'A short diagnostic is not an official predicted grade.'));
  }catch(e){body.replaceChildren(create('p','muted','Could not load diagnostic: '+(e?.message||'Unknown error')))}
 }
 $('mg-refresh-baselines').addEventListener('click',()=>void refresh());
 $('mg-baseline-detail-close').addEventListener('click',()=>{detail.hidden=true});
 return {refresh};
}
