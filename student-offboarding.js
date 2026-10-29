/* MathsGrove administrator-only ZIP/PDF student archive and protected deletion. */
export function initStudentOffboarding(db,state){
 const $=id=>document.getElementById(id),root=$('mg-offboarding-roster');
 const el=(tag,value,cls)=>{const x=document.createElement(tag);if(value!==undefined)x.textContent=String(value);if(cls)x.className=cls;return x};
 const status=text=>{$('mg-offboarding-status').textContent=text};
 const bytesToHex=bytes=>Array.from(new Uint8Array(bytes),x=>x.toString(16).padStart(2,'0')).join('');
 const hexDigest=async blob=>bytesToHex(await crypto.subtle.digest('SHA-256',await blob.arrayBuffer()));
 let busy=false,manualServiceReady=false,readyForConfirmation=new Map();
 async function server(action,student){
  const {data,error}=await db.functions.invoke('grove-student-export',{body:{
   action,orgId:state.membership.org_id,studentId:student.student_id
  }});
  if(error||!data?.ok)throw Error(data?.error||error?.message||'Private archive service unavailable.');
  return data
 }
 async function downloadArchive(student,action,button){
  if(busy)return;busy=true;button.disabled=true;
  try{
   status('Preparing a complete private student ZIP with printable PDF reports and original uploaded workings. No account data is being deleted.');
   const result=await server(action,student);
   if(!result.downloadUrl||!/^[a-f\d]{64}$/i.test(result.sha256||''))throw Error('Archive response did not include a secure URL and SHA-256 checksum.');
   const response=await fetch(result.downloadUrl,{credentials:'omit',referrerPolicy:'no-referrer'});
   if(!response.ok)throw Error('The private ZIP could not be downloaded. No data has been removed.');
   const blob=await response.blob();
   if(blob.size<400)throw Error('The ZIP is unexpectedly small. No deletion is permitted.');
   const digest=await hexDigest(blob);
   if(digest.toLowerCase()!==result.sha256.toLowerCase())throw Error('ZIP integrity verification failed. Do not delete this student.');
   const url=URL.createObjectURL(blob),link=document.createElement('a');
   link.href=url;link.download='MathsGrove-'+String(student.name||'Student').replace(/[^a-z0-9_-]/gi,'_')+'-Complete-Records.zip';
   document.body.append(link);link.click();link.remove();
   setTimeout(()=>URL.revokeObjectURL(url),60000);
   readyForConfirmation.set(student.student_id,{digest});
   status('ZIP downloaded and SHA-256 verified. Open it to check the PDF reports and uploaded evidence. Then select “I saved and checked the ZIP” to enable removal.');
   await refresh(false);
  }catch(e){status('Archive download stopped: '+e.message+'. No student has been deleted.')}
  finally{busy=false;button.disabled=false}
 }
 async function acknowledge(student,btn){
  if(busy)return;const verified=readyForConfirmation.get(student.student_id);
  if(!verified){status('Download and verify a fresh archive ZIP first.');return}
  if(!confirm('Have you opened the ZIP and confirmed the PDF reports and original submissions are included? This acknowledges that YOU have saved the only copy you may email to the student.'))return;
  busy=true;btn.disabled=true;
  try{
   const {data:details,error:e}=await db.rpc('grove_offboarding_manual_details',{p_org:state.membership.org_id,p_student:student.student_id});
   if(e||details?.status!=='ready_manual'||details.checksum!==verified.digest)throw Error('Archive selection has changed. Download it again.');
   const {data,error}=await db.rpc('grove_offboarding_manual_confirm',{p_org:state.membership.org_id,p_job:details.job_id,p_checksum:verified.digest});
   if(error||data!==true)throw Error(error?.message||'Archive confirmation was not accepted.');
   readyForConfirmation.delete(student.student_id);
   status('Saved ZIP confirmed. The permanent removal action can now be used after you have verified the PDF contents.');
   await refresh(false);
  }catch(e){status('Could not confirm ZIP: '+e.message+'. No deletion occurred.')}
  finally{busy=false;btn.disabled=false}
 }
 async function eraseStudent(student,btn){
  if(busy)return;
  const typed=prompt('PERMANENT DELETION: Type the student’s exact registered email address to remove ALL their account data. You must already have saved their ZIP.');
  if(typed===null)return;
  if(typed.trim().toLowerCase()!==String(student.email||'').toLowerCase()){
   status('Email confirmation did not match. No account was deleted.');return
  }
  if(!confirm('FINAL CONFIRMATION: Permanently delete this student account, saved work, results, uploaded evidence and sign-in? Only your downloaded archive will remain.'))return;
  busy=true;btn.disabled=true;
  try{
   status('Removing this specific student account and associated private data…');
   const {data,error}=await db.functions.invoke('grove-student-export',{body:{
    action:'erase',orgId:state.membership.org_id,studentId:student.student_id,confirmEmail:typed.trim()
   }});
   if(error||!data?.ok)throw Error(data?.error||error?.message||'Deletion did not finish. Do not repeat until a recovery check is completed.');
   status('Student removed permanently. Their PDF ZIP has already been saved by you for manual delivery.');
   await refresh(false)
  }catch(e){status('Removal stopped: '+e.message+'. Check the job before attempting a retry.')}
  finally{busy=false;btn.disabled=false}
 }
 function makeButton(label,action,disabled=false,cls=''){
  const b=el('button',label,cls);b.type='button';b.disabled=disabled;b.addEventListener('click',action);return b
 }
 async function refresh(resetStatus=true){
  if(state.membership?.member_role!=='admin'){$('mg-student-offboarding').hidden=true;return}
  $('mg-student-offboarding').hidden=false;
  $('mg-offboarding-email-setup').hidden=true;
  try{
   const health=await db.functions.invoke('grove-student-export',{body:{action:'health'}});
   manualServiceReady=Boolean(!health.error&&health.data?.method==='manual_zip_pdf');
  }catch{manualServiceReady=false}
  if(resetStatus)status(manualServiceReady
   ?'Loading students. Archives are downloaded by the administrator; no email service is required.'
   :'The new PDF ZIP export service is awaiting server deployment. Student deletion is disabled; all data remains unchanged.');
  const {data,error}=await db.rpc('grove_offboarding_list',{p_org:state.membership.org_id});
  root.replaceChildren();
  if(error){status('Cannot display the private student register: '+error.message);return}
  const students=data?.students||[];
  if(resetStatus&&manualServiceReady)status(students.length+' student account(s) · generate a PDF ZIP, verify it, then choose whether to remove the student.');
  if(!students.length){root.append(el('p','No students enrolled. The next trial will start with a new account.','subtext'));return}
  for(const student of students){
   const card=el('div',undefined,'mg-offboarding-member'),meta=el('div');
   meta.append(el('strong',student.name||'Student'),el('small',student.email||'Account email unavailable'));
   meta.append(el('p',student.attempts+' paper attempts · '+student.uploads+' uploads · '+
    student.baseline+' baseline sittings · '+student.scheduled+' scheduled assignments','mg-offboarding-meta'));
   const st=student.status||'not_started';
   const names={requested:'Preparing archive',preparing:'Preparing archive',ready_manual:'Archive ready for administrator download',
    downloaded:'Administrator confirmed saved ZIP',purging:'Removal interrupted; contact administrator',
    failed:'Export failed; retry available',emailed:'Old email archive; manual review required'};
   meta.append(el('span',names[st]||'Not yet exported','mg-offboarding-state'));
   if(student.last_error)meta.append(el('p',student.last_error,'mg-offboarding-details'));
   const actions=el('div',undefined,'mg-offboarding-actions');
   if(st==='not_started'||st==='failed'||st==='requested'||st==='ready_manual'){
    const button=makeButton(st==='ready_manual'?'Download PDF ZIP again':'Generate & download PDF ZIP',()=>void downloadArchive(student,st==='ready_manual'?'manual_download':'prepare_manual',button),false);
    button.disabled=!manualServiceReady;
    actions.append(button);
   }
   if(st==='ready_manual'&&readyForConfirmation.has(student.student_id)){
    const confirmButton=makeButton('I saved and checked the ZIP',()=>void acknowledge(student,confirmButton),false,'mg-offboarding-confirm');
    confirmButton.disabled=!manualServiceReady;
    actions.append(confirmButton);
   }
   if(st==='downloaded'){
    const deletion=makeButton('Permanently remove student',()=>void eraseStudent(student,deletion),false,'mg-offboarding-erase');
    deletion.disabled=!manualServiceReady;
    actions.append(deletion)
   }
   card.append(meta,actions);root.append(card)
  }
 }
 $('mg-offboarding-refresh').addEventListener('click',()=>void refresh());
 const legacyCheck=$('mg-offboarding-check-email');
 if(legacyCheck)legacyCheck.addEventListener('click',()=>void refresh());
 return {refresh}
}