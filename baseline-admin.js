/* Private Studio · maths diagnostic baseline register. No public answer keys. */
export function initBaselineAdmin(db,state){
 const $=id=>document.getElementById(id);
 const create=(tag,cls,value)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(value!==undefined)e.textContent=String(value);return e};
 const root=$('mg-baseline-overview');
 const detail=$('mg-baseline-detail');
 let results=[];
 const qualification={GCSE:'GCSE',IGCSE:'IGCSE',A_LEVEL:'A Level',FURTHER_MATHS:'Further Maths',IB_AA:'IB AA',IB_AI:'IB AI',TMUA:'TMUA'};
 const format=(row)=>[qualification[row.qualification]||row.qualification,(row.level||'').toUpperCase()].filter(Boolean).join(' · ');
 function fillAccessStudents(){
  const select=$('mg-bl-time-student'),previous=select.value;
  select.replaceChildren(new Option('Select student',''));
  for(const st of state.students||[])select.add(new Option(st.name,st.id));
  if([...select.options].some(x=>x.value===previous))select.value=previous;
 }
 async function saveAccess(e){
  e.preventDefault();const student=$('mg-bl-time-student').value,pct=Number($('mg-bl-time-percent').value);
  const btn=$('mg-bl-time-save');if(!student)return;
  if(!['admin','partner'].includes(state.membership?.member_role)){
   $('mg-bl-time-status').textContent='Only an authorised administrator can change assessment time.';return
  }
  btn.disabled=true;
  try{
   const {data,error}=await db.rpc('baseline_set_accommodation',{p_student:student,p_extra_percent:pct});
   if(error||!data?.ok)throw Error(error?.message||'The time setting could not be saved.');
   $('mg-bl-time-status').textContent=(pct?pct+'% additional time':'Standard time')+' saved for this student. The setting applies to their first sitting.';
  }catch(error){$('mg-bl-time-status').textContent=error?.message||'Unable to save.'}
  finally{btn.disabled=false}
 }
 $('mg-bl-time-form').addEventListener('submit',saveAccess);
 async function refresh(){
  fillAccessStudents();
  if(!['admin','partner'].includes(state.membership?.member_role))$('mg-bl-time-form').querySelectorAll('input,select,button').forEach(x=>x.disabled=true);
  if(!db||!state.membership||!['admin','partner','examiner'].includes(state.membership.member_role))return;
  const {data,error}=await db.rpc('baseline_admin_overview',{p_org:state.membership.org_id});
  if(error){results=[];root.replaceChildren(create('p','muted','The baseline register could not reload: '+error.message));throw Error(error.message)}
  results=Array.isArray(data?.sessions)?data.sessions:[];
  render()
 }
 function render(){
  root.replaceChildren();
  const students=Array.isArray(state.students)?state.students:[];
  const seen=new Set(results.map(r=>r.student_id));
  const waiting=students.filter(st=>!seen.has(st.id));
  const completed=results.filter(r=>r.status==='submitted'||r.status==='expired').length;
  root.append(create('p','muted',completed+' completed · '+results.filter(r=>r.status==='active').length+' in progress · '+waiting.length+' not started. This register refreshes automatically while the Student section is open.'));
  if(!results.length&&!waiting.length){root.append(create('p','muted','No enrolled learners yet. Register a student to assign the automatic baseline.'));return}
  for(const st of waiting){
   const section=create('div','mg-bl-row'),left=create('div');
   left.append(create('strong','',st.name||'Enrolled student'),
    create('small','',((qualification[st.pref?.qualification]||st.pref?.qualification||'Academic route pending')+' · '+(st.pref?.tier||'Level pending'))+' · Not started'));
   section.append(left,create('span','mg-linked-status','Awaiting first sign-in'));
   root.append(section);
  }
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
   body.append(stats);
   const target=state.academic?.find(x=>x.student_id===studentId)?.target_grade||'Not set';
   body.append(create('p','mg-bl-priority','Learner target grade: '+target+' · Set by the administrator; this baseline is not a predicted grade.'));
   body.append(create('h3','','Topic-level evidence'));
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
   if(data.session_id){
    let examinerFeedback='';
    const evidenceHeading=create('h3','','Saved mathematical working & question time');
    body.append(evidenceHeading);
    try{
     const {data:work,error:workError}=await db.rpc('grove_staff_evidence',{p_kind:'baseline',p_session:data.session_id});
     if(workError)throw workError;
     examinerFeedback=work?.feedback||'';
     const files=Array.isArray(work?.files)?work.files:[];
     const times=Array.isArray(work?.timings)?work.timings:[];
     if(times.length){
      const timing=create('div','mg-baseline-times');
      for(const tm of times)timing.append(create('span','','Q'+tm.position+' · '+tm.seconds+' sec'));
      body.append(timing);
     }
     const events=Array.isArray(work?.events)?work.events:[];
     if(events.length)body.append(create('p','muted','Recorded browser focus events: '+events.map(e=>e.kind).join(' · ')+'. Changes in focus are contextual signals, not evidence of misconduct.'));
     if(!files.length)body.append(create('p','muted','No saved drawing or photo evidence. Check whether this sitting expired before evidence could be saved.'));
     const gallery=create('div','mg-evidence-gallery');
     for(const item of files){
      const {data:link,error:signErr}=await db.storage.from('student-work').createSignedUrl(item.storage_path,900);
      if(signErr||!link?.signedUrl){gallery.append(create('p','muted','Q'+item.position+' file unavailable.'));continue}
      const cell=create('div','mg-evidence-preview'),a=create('a','','');
      a.href=link.signedUrl;a.target='_blank';a.rel='noopener noreferrer';
      a.textContent='Question '+item.position+' · '+item.file_kind+' · '+item.original_name;
      const img=create('img');img.src=link.signedUrl;img.loading='lazy';img.alt='Saved mathematical working for question '+item.position;
      img.referrerPolicy='no-referrer';cell.append(a,img);gallery.append(cell);
     }
     body.append(gallery);
    }catch(workError){body.append(create('p','muted','Could not retrieve private working: '+workError.message))}
    const editor=create('section','mg-baseline-examiner-feedback');
    editor.append(create('h3','','Examiner feedback on the baseline'));
    editor.append(create('p','muted','Review the whiteboard and photographs above. The baseline multiple-choice score stays automatic; your written feedback is released separately to the student.'));
    const label=create('label','','Examiner comment and recommended next steps');
    const input=create('textarea');input.rows=4;input.maxLength=2500;
    input.value=examinerFeedback;
    input.placeholder='Describe the evidence in their working, one clear strength and one method to improve next.';
    label.append(input);
    const save=create('button','','Save & release baseline feedback ↗');
    save.type='button';save.className='button primary';
    const notice=create('p','mg-review-status',examinerFeedback?'Previous examiner feedback is loaded.':'No examiner feedback released yet.');
    save.addEventListener('click',async()=>{
     save.disabled=true;notice.textContent='Saving baseline feedback securely…';
     try{
      const {data:result,error:saveError}=await db.rpc('grove_staff_save_baseline_feedback',{
       p_session:data.session_id,p_feedback:input.value.trim()
      });
      if(saveError||!result?.ok)throw Error(saveError?.message||'The examiner feedback could not be released.');
      notice.textContent='Examiner comments released to the student. Automatic baseline marks remain unchanged.';
     }catch(err){notice.textContent='Could not release feedback: '+(err.message||'Please try again.')}
     finally{save.disabled=false}
    });
    editor.append(label,save,notice);body.append(editor);
   }
  }catch(e){body.replaceChildren(create('p','muted','Could not load diagnostic: '+(e?.message||'Unknown error')))}
 }
 $('mg-refresh-baselines').addEventListener('click',()=>void refresh());
 $('mg-baseline-detail-close').addEventListener('click',()=>{detail.hidden=true});
 const isShowing=()=>!document.hidden&&!!state.membership?.org_id&&
   !root.closest('[data-panel]')?.hidden;
 setInterval(()=>{if(isShowing())void refresh()},60000);
 document.addEventListener('visibilitychange',()=>{if(isShowing())void refresh()});
 return {refresh};
}
