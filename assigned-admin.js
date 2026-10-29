export function initAssignedAdmin(db,state){
 const $=id=>document.getElementById(id),list=$('mg-assigned-admin-rows'),summary=$('mg-assigned-admin-summary');
 const el=(tag,t,cls)=>{const x=document.createElement(tag);if(t!==undefined)x.textContent=t;if(cls)x.className=cls;return x};
 const modes={daily:'Daily',weekly:'Weekly',exam_daily:'Exam Daily',mock_pending:'Mock awaiting approval'};
 async function refresh(){
  if(!state.membership?.org_id)return;
  const {data,error}=await db.rpc('grove_admin_schedule',{p_org:state.membership.org_id});
  if(error){summary.textContent='Cannot fetch the assigned practice register: '+error.message;return}
  const rows=data?.assignments||[];
  const completed=rows.filter(x=>['completed','expired'].includes(x.status)),active=rows.filter(x=>x.status==='active');
  const upcoming=rows.filter(x=>x.status==='scheduled');
  summary.replaceChildren();
  for(const [n,label] of [[completed.length,'COMPLETED'],[active.length,'IN PROGRESS'],[upcoming.length,'SCHEDULED']]){
   let b=el('div'),strong=el('strong',String(n)),span=el('span',label);b.append(strong,span);summary.append(b)
  }
  list.replaceChildren();
  if(!rows.length){list.append(el('p','When enrolled students sign in, their tier-specific calendar will be prepared automatically. No manually created paper is required.'));return}
  for(const r of rows.slice(0,45)){
   const wrap=el('div',undefined,'mg-assigned-row'),name=el('div');
   name.append(el('strong',r.student_name||'Student'),
    el('small',(modes[r.mode]||r.mode)+' · '+r.qualification+' '+r.level+' · '+r.due_date+' · '+r.status));
   if(['completed','expired'].includes(r.status)&&r.question_insights?.length){
    const detail=el('details',undefined,'mg-assigned-detail');
    detail.append(el('summary',(r.score||0)+'/'+r.question_count+' correct · '+(r.minutes_visible||0)+' minutes visible · View question insights'));
    const arr=r.question_insights.slice().sort((a,b)=>(a.correct===b.correct?b.seconds_visible-a.seconds_visible:a.correct?1:-1));
    for(const q of arr){
     const line=el('div',undefined,'mg-assigned-skill');
     const signal=!q.correct&&q.seconds_visible>=180?'Long attempt · review method':!q.correct&&q.seconds_visible<=45?'Quick incorrect · test misconception':q.correct&&q.seconds_visible>=180?'Correct, with sustained working':q.correct?'Correct':'Incorrect';
     line.append(el('strong','Q'+q.position+' · '+q.topic+' · '+q.skill),el('span',signal+' · '+q.seconds_visible+'s visible'));
     detail.append(line);
    }
    const gaps=arr.filter(q=>!q.correct).slice(0,3);
    if(gaps.length)detail.append(el('p','Suggested teaching rechecks: '+gaps.map(q=>q.skill).join('; ')+'. Ask for full written working on a fresh question.'));
    detail.append(el('p','Time signals are indicative only; idle time, assistive tools and connectivity may distort them.'));
    const label=el('label','Your examiner feedback · released to the learner');
    const input=el('textarea');input.value=r.teacher_feedback||'';
    input.maxLength=2500;input.rows=3;input.placeholder='A strength, one or two specific priorities, and the next independent practice step…';
    input.setAttribute('aria-label','Released examiner feedback for '+(r.student_name||'learner'));
    const save=el('button','Save and release feedback ↗');save.type='button';
    const feedbackStatus=el('p',r.teacher_feedback?'Previously released feedback is loaded.':'Feedback has not yet been released.');
    save.addEventListener('click',async()=>{
     save.disabled=true;feedbackStatus.textContent='Saving feedback…';
     try{
      const {data,error}=await db.rpc('grove_staff_save_feedback',{p_task:r.task_id,p_feedback:input.value.trim()});
      if(error||!data?.ok)throw Error(error?.message||'Feedback could not be saved.');
      feedbackStatus.textContent='Feedback saved and released. The learner will see it in their session report.';
     }catch(error){feedbackStatus.textContent=error.message||'Please try again.'}
     finally{save.disabled=false}
    });
    detail.append(label,input,save,feedbackStatus);
    wrap.append(name,detail)
   }else{wrap.append(name,el('small',r.status==='scheduled'?'Will open automatically on its date.':(r.status==='active'?'Timed and saved in progress.':'Requires an approved mock.')))}
   list.append(wrap);
  }
 }
 $('mg-assigned-admin-refresh').addEventListener('click',()=>void refresh());
 setInterval(()=>{if(!document.hidden&&!$('mg-assigned-admin').closest('[data-panel]')?.hidden)void refresh()},60000);
 return {refresh}
}