/* MathsGrove student offboarding review. The UI requests service-side email/archive delivery and removal.
 * A complete, downloaded archive is required before permanent account removal can be enabled. */
export function initStudentOffboarding(db,state){
 const $=id=>document.getElementById(id),root=$('mg-offboarding-roster');
 const el=(tag,text,cls)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=String(text);if(cls)e.className=cls;return e};
 const tell=text=>{$('mg-offboarding-status').textContent=text};
 let busy=false,emailAvailable=false;
 async function refresh(){
  if(state.membership?.member_role!=='admin'){
   $('mg-student-offboarding').hidden=true;return;
  }
  $('mg-student-offboarding').hidden=false;
  try{
   const check=await db.functions.invoke('grove-student-export',{body:{action:'health'}});
   emailAvailable=Boolean(!check.error&&check.data?.available);
  }catch{emailAvailable=false}
  $('mg-offboarding-email-setup').hidden=emailAvailable;
  const {data,error}=await db.rpc('grove_offboarding_list',{p_org:state.membership.org_id});
  root.replaceChildren();
  if(error){tell('Could not verify the private removal register: '+error.message);return}
  const students=data?.students||[];
  tell(students.length+' currently enrolled · '+(emailAvailable?'Secure archive email is configured.':'Archive email is not configured yet; no removal can proceed.')+' Nothing is erased by opening this list.');
  if(!students.length){root.append(el('p','No enrolled student accounts. You can start a new trial.','subtext'));return}
  for(const student of students){
   const wrapper=el('div',undefined,'mg-offboarding-member'),meta=el('div');
   meta.append(el('strong',student.name||'Student'));
   meta.append(el('small',student.email||'Registered email not found'));
   meta.append(el('p',
    student.attempts+' paper attempt(s) · '+student.uploads+' uploaded file(s) · '+
    student.baseline+' baseline(s) · '+student.scheduled+' scheduled session(s)',
    'mg-offboarding-meta'));
   const queued=['requested','preparing','emailed','downloaded','purging'].includes(student.status);
   const label=queued?(student.status==='requested'?'Export queued · email not yet sent':
     student.status==='failed'?'Export needs attention':student.status==='emailed'?'Archive link sent':
     student.status==='downloaded'?'Download confirmed · ready for administrator removal':student.status==='purging'?'Removal requires review':'Export preparing')
    :'Export not requested';
   meta.append(el('span',label,'mg-offboarding-state'));
   if(student.last_error)meta.append(el('p','Archive preparation issue: '+student.last_error,'mg-offboarding-details'));
   const button=el('button',queued?'View export status':student.status==='failed'?'Retry secure archive email':'Email complete student archive');button.type='button';
   if(!student.verified||(!queued&&!emailAvailable))button.disabled=true;
   button.addEventListener('click',async()=>{
    if(queued){tell('Current status: '+label+'. No records have been deleted.');return}
    if(busy)return;
    const result=confirm('Prepare and email a complete private archive to '+student.email+'? No data will be deleted. If secure email delivery is not configured, this action will stop safely.');
    if(!result)return;
    busy=true;button.disabled=true;
    try{
     const {data,error}=await db.functions.invoke('grove-student-export',{
      body:{action:'prepare',orgId:state.membership.org_id,studentId:student.student_id}
     });
     if(error||!data?.ok)throw Error(data?.error||error?.message||'Secure archive delivery is unavailable.');
     tell('Archive email accepted by the delivery provider. No student has been removed.');
     await refresh()
    }catch(e){tell('Could not prepare this export: '+e.message);button.disabled=false}
    finally{busy=false}
   });
   wrapper.append(meta,button);
   if(student.status==='downloaded'){
    const erase=el('button','Permanently remove this student');erase.type='button';
    erase.classList.add('mg-offboarding-erase');
    erase.addEventListener('click',async()=>{
     if(busy)return;
     const typed=prompt('PERMANENT REMOVAL: This student has confirmed receipt of their archive. Type their exact registered email address to continue. This cannot be undone.');
     if(typed===null)return;
     if(typed.trim().toLowerCase()!==String(student.email||'').toLowerCase()){tell('Account confirmation did not match. No data was deleted.');return}
     if(!confirm('Final confirmation: permanently remove this learner account, saved work and uploaded evidence? You cannot restore this data from MathsGrove.'))return;
     busy=true;erase.disabled=true;
     try{
      const {data,error}=await db.functions.invoke('grove-student-export',{body:{
       action:'erase',orgId:state.membership.org_id,studentId:student.student_id,confirmEmail:typed.trim()
      }});
      if(error||!data?.ok)throw Error(data?.error||error?.message||'Removal did not finish; contact the MathsGrove administrator for review.');
      tell('The student account and associated records were removed. The data archive had already been saved by the student.');
      await refresh();
     }catch(e){tell('Removal stopped: '+e.message+'. Do not retry until any partial cleanup has been checked.');erase.disabled=false}
     finally{busy=false}
    });
    wrapper.append(erase)
   }
   root.append(wrapper)
  }
 }
 $('mg-offboarding-refresh').addEventListener('click',()=>void refresh());
 $('mg-offboarding-check-email').addEventListener('click',async()=>{
  const button=$('mg-offboarding-check-email');button.disabled=true;
  tell('Rechecking secure archive email sender. This sends no email and changes no student data.');
  try{await refresh()}finally{button.disabled=false}
 });
 return {refresh}
}