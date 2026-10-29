export function initAccessManagement(db,state){
  const $=id=>document.getElementById(id);
  const email=s=>String(s||'').trim().toLowerCase();
  const valid=s=>/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s)&&s.length<=250;
  let records=[];
  const label=(id,copy)=>{const e=$(id);if(e)e.textContent=copy};
  const status=(t,error=false)=>{const el=$('mg-linked-feedback');el.textContent=t;el.classList.toggle('error',error)};
  const syncTier=()=>{
    const top=$('invite-programme').value==='exam';
    $('invite-viewers').hidden=!top;
    for(const id of ['invite-parent-email','invite-tutor-email']){$(id).disabled=!top;if(!top)$(id).value=''}
  };
  $('invite-programme').addEventListener('change',syncTier);syncTier();
  const studentEmail=id=>state.invites.find(i=>i.redeemed_by===id)?.email||'';
  const fillStudents=()=>{
    const sel=$('mg-linked-student'),old=sel.value;sel.replaceChildren(new Option('Choose an enrolled student',''));
    state.students.forEach(student=>{
      const plan=state.entitlements.find(x=>x.student_id===student.id);
      sel.add(new Option(student.name+' · '+(plan?.tier==='exam'?'Grove Exam':plan?.tier==='daily'?'Grove Daily':'Grove Weekly'),student.id))
    });
    if([...sel.options].some(x=>x.value===old))sel.value=old
  };
  const matching=emailValue=>records.filter(x=>x.student_email===email(emailValue)&&!x.revoked_at);
  const loadStudent=()=>{
    const id=$('mg-linked-student').value,e=studentEmail(id);
    if(e)$('mg-linked-email').value=e;
    const rows=matching($('mg-linked-email').value);
    $('mg-linked-parent').value=rows.find(x=>x.view_role==='parent')?.viewer_email||'';
    $('mg-linked-tutor').value=rows.find(x=>x.view_role==='tutor')?.viewer_email||'';
    const p=state.entitlements.find(x=>x.student_id===id);
    status(id&&p?.tier!=='exam'?'This learner is not on Grove Exam. Upgrade their programme before adding parent or tutor access.':'');
  };
  $('mg-linked-student').addEventListener('change',loadStudent);
  $('mg-linked-email').addEventListener('change',loadStudent);
  const render=()=>{
    const root=$('mg-linked-list');root.replaceChildren();
    if(!records.length){const p=document.createElement('p');p.className='muted';p.textContent='No family or tutor accounts have been nominated yet.';root.append(p);return}
    const title=document.createElement('h3');title.textContent='Linked invitation register';root.append(title);
    for(const x of records){
      const div=document.createElement('div');div.className='mg-linked-row';
      const text=document.createElement('div'),head=document.createElement('strong'),sub=document.createElement('small');
      head.textContent=(x.view_role==='parent'?'Parent / guardian':'Tutor / teacher')+' · '+x.viewer_email;
      sub.textContent='Learner: '+x.student_email+' · '+(x.revoked_at?'Access revoked':x.active?'Verified and linked':'Awaiting verified email sign-in');
      text.append(head,sub);div.append(text);const badge=document.createElement('span');badge.className='mg-linked-status';badge.textContent=x.revoked_at?'Revoked':x.active?'Connected':'Pending';div.append(badge);root.append(div);
    }
  };
  async function refresh(){
    if(!['admin','partner'].includes(state.membership?.member_role))return;
    fillStudents();
    const {data,error}=await db.rpc('list_learner_viewers',{p_org:state.membership.org_id});
    if(error){status('Linked-access setup needs the new Supabase migration: '+error.message,true);return}
    records=Array.isArray(data)?data:[];render();
  }
  const save=async(e)=>{
    e.preventDefault();if(!['admin','partner'].includes(state.membership?.member_role))return;
    const id=$('mg-linked-student').value,st=state.students.find(x=>x.id===id),plan=state.entitlements.find(x=>x.student_id===id);
    const student=email($('mg-linked-email').value),parent=email($('mg-linked-parent').value),tutor=email($('mg-linked-tutor').value);
    if(!st||!valid(student)){status('Choose an enrolled learner and enter their registered email.',true);return}
    if((parent&&!valid(parent))||(tutor&&!valid(tutor))||parent===student||tutor===student||(parent&&tutor&&parent===tutor)){status('Each person needs a distinct, valid email address.',true);return}
    if(plan?.tier!=='exam'&&(parent||tutor)){status('Change this learner to Grove Exam first.',true);return}
    const button=$('mg-linked-save');button.disabled=true;
    try{
      const {data,error}=await db.rpc('configure_learner_viewers',{p_org:state.membership.org_id,p_student_email:student,p_parent_email:parent,p_tutor_email:tutor});
      if(error||!data?.ok)throw Error(error?.message||'Access permissions were not saved');
      status('Permissions updated. Each nominated person opens the family dashboard and verifies their own email. Previous assignments have been deactivated when changed.');
      await refresh();
    }catch(err){status(err.message||'Unable to save linked permissions.',true)}finally{button.disabled=false}
  };
  $('mg-linked-form').addEventListener('submit',save);
  $('mg-linked-copy').addEventListener('click',async()=>{
    const student=email($('mg-linked-email').value),family=email($('mg-linked-parent').value),tutor=email($('mg-linked-tutor').value);
    const text='MathsGrove private progress access\n\nYour student is enrolled in Grove Exam. The nominated parent and tutor can open '+new URL('./portal.html',location.href).href+' and enter their own registered email to receive a secure sign-in link. No student password or access code is shared.\n\nStudent email: '+student+'\nParent: '+(family||'Not nominated')+'\nTutor: '+(tutor||'Not nominated')+'\n\nThis invitation is only valid for nominated email addresses and access is controlled by MathsGrove.';
    try{await navigator.clipboard.writeText(text);status('Guidance copied. Share privately with each intended recipient.')}catch{status('Copy unavailable. Please share the MathsGrove sign-in page privately.',true)}
  });
  return {refresh,syncTier,fillStudents};
}
