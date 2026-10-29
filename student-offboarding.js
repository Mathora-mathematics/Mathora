/* MathsGrove student offboarding review. The UI does not delete or email private records.
 * A complete, downloaded archive is required before permanent account removal can be enabled. */
export function initStudentOffboarding(db,state){
 const $=id=>document.getElementById(id),root=$('mg-offboarding-roster');
 const el=(tag,text,cls)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=String(text);if(cls)e.className=cls;return e};
 const tell=text=>{$('mg-offboarding-status').textContent=text};
 let busy=false;
 async function refresh(){
  if(state.membership?.member_role!=='admin'){
   $('mg-student-offboarding').hidden=true;return;
  }
  $('mg-student-offboarding').hidden=false;
  const {data,error}=await db.rpc('grove_offboarding_list',{p_org:state.membership.org_id});
  root.replaceChildren();
  if(error){tell('Could not verify the private removal register: '+error.message);return}
  const students=data?.students||[];
  tell(students.length+' currently enrolled · no permanent deletion performed · archives must be delivered before any removal.');
  if(!students.length){root.append(el('p','No enrolled student accounts. You can start a new trial.','subtext'));return}
  for(const student of students){
   const wrapper=el('div',undefined,'mg-offboarding-member'),meta=el('div');
   meta.append(el('strong',student.name||'Student'));
   meta.append(el('small',student.email||'Registered email not found'));
   meta.append(el('p',
    student.attempts+' paper attempt(s) · '+student.uploads+' uploaded file(s) · '+
    student.baseline+' baseline(s) · '+student.scheduled+' scheduled session(s)',
    'mg-offboarding-meta'));
   const queued=['requested','preparing','emailed','downloaded','failed'].includes(student.status);
   const label=queued?(student.status==='requested'?'Export queued · email not yet sent':
     student.status==='failed'?'Export needs attention':student.status==='emailed'?'Archive link sent':
     student.status==='downloaded'?'Archive accessed · retain until safe purge':'Export preparing')
    :'Export not requested';
   meta.append(el('span',label,'mg-offboarding-state'));
   if(student.last_error)meta.append(el('p','Archive preparation issue: '+student.last_error,'mg-offboarding-details'));
   const button=el('button',queued?'View export status':'Prepare student export');button.type='button';
   if(!student.verified)button.disabled=true;
   button.addEventListener('click',async()=>{
    if(queued){tell('Current status: '+label+'. No records have been deleted.');return}
    if(busy)return;
    const result=confirm('Queue a complete private export for the registered email '+student.email+'? This does NOT send an email or delete any data until the secure delivery service has been configured.');
    if(!result)return;
    busy=true;button.disabled=true;
    try{
     const {data,error}=await db.rpc('grove_offboarding_prepare',{
      p_org:state.membership.org_id,p_student:student.student_id
     });
     if(error)throw error;
     if(!data)throw Error('No export request identifier returned');
     tell('Archive request recorded. No email has been sent and the student remains enrolled. Secure delivery configuration is still required.');
     await refresh()
    }catch(e){tell('Could not prepare this export: '+e.message);button.disabled=false}
    finally{busy=false}
   });
   wrapper.append(meta,button);root.append(wrapper)
  }
 }
 $('mg-offboarding-refresh').addEventListener('click',()=>void refresh());
 return {refresh}
}