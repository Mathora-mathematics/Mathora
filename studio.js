import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.4';
const $ = id => document.getElementById(id);
const config = window.MATHSGROVE_CONFIG || {};
const connected = /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(config.url || '') && !!config.publishableKey;
const db = connected ? createClient(config.url, config.publishableKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}}) : null;
const state = {user:null,org:null,membership:null,memberships:[],students:[],attempts:[],invites:[],activeReview:null,reviewFields:[],lastCode:null,lastEmail:null};
const examLabels={IGCSE:'IGCSE Mathematics',GCSE:'GCSE Mathematics',A_LEVEL:'A Level Mathematics',IB_AA:'IB Mathematics AA',IB_AI:'IB Mathematics AI',TMUA:'TMUA'};
const date=s=>s?new Date(s).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'}):'—';
const fmt=s=>String(s||'').trim();
const status={submitted:'Awaiting marking',marked:'Released',draft:'In progress'};
const adminRole=()=>['partner','admin'].includes(state.membership?.member_role);
const markRole=()=>['examiner','partner','admin'].includes(state.membership?.member_role);
const shortId=id=>'MG-'+String(id||'').slice(0,8).toUpperCase();
function showStatus(title,description){$('status-title').textContent=title;$('status-description').textContent=description;$('status-screen').hidden=false;$('application').hidden=true;}
function inform(message,error=false,id='app-message'){const el=$(id);el.textContent=message;el.classList.toggle('error',error)}
function clear(el){el.replaceChildren()}
function make(tag,cls,text){const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=String(text);return el}
function pill(t,cls=''){return make('span','status-pill '+cls,t)}
function itemRow(title,description,trailing){const row=make('div','record'),a=make('div');a.append(make('strong','',title),make('small','',description));row.append(a);if(trailing)row.append(trailing);return row}
function setTab(tab){document.querySelectorAll('[data-panel]').forEach(p=>p.hidden=p.dataset.panel!==tab);document.querySelectorAll('.nav [data-tab]').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));if(tab==='reports')renderReleased();if(tab==='marking')renderQueue();}
document.querySelectorAll('.nav [data-tab]').forEach(b=>b.addEventListener('click',()=>setTab(b.dataset.tab)));
document.querySelectorAll('[data-goto]').forEach(b=>b.addEventListener('click',()=>setTab(b.dataset.goto)));
$('logout').onclick=async()=>{if(db)await db.auth.signOut();location.href='./portal.html'};
function inviteStatus(a){if(a.redeemed_at)return 'Redeemed';if(a.revoked_at)return 'Revoked';if(new Date(a.expires_at).getTime()<=Date.now())return 'Expired';return 'Awaiting claim'}
async function edge(action,body={}){if(!db)throw Error('Supabase is not configured.');const {data,error}=await db.functions.invoke('invitations',{body:{action,...body}});if(error)throw Error('Invitation service is unavailable. Check the Edge Function deployment.');if(!data?.ok)throw Error(data?.error||'Invitation request failed.');return data}
async function init(){
 if(!connected){showStatus('Supabase connection required.','The marking board is installed on GitHub, but your Supabase project must be connected before it can create student keys or save marks. No example keys will be mistaken for real credentials.');return}
 try{
  const {data:{user},error}=await db.auth.getUser();
  if(error||!user){showStatus('Please sign in first.','Use the MathsGrove portal and a verified email address. Then return to this private administration page.');return}
  state.user=user;
  const {data:memberships,error:me}=await db.from('memberships').select('org_id,member_role').eq('user_id',user.id);
  if(me)throw me;
  state.memberships=(memberships||[]).filter(x=>['admin','partner','examiner'].includes(x.member_role));
  if(!state.memberships.length){showStatus('Authorised staff only.','Your account is verified, but is not assigned an administrator, partner or examiner role. An existing administrator must authorise it.');return}
  state.membership=state.memberships.find(x=>x.member_role==='admin')||state.memberships[0];
  const {data:org,error:oe}=await db.from('organisations').select('id,name').eq('id',state.membership.org_id).single();
  if(oe)throw oe;
  state.org=org;
  $('org-name').textContent=org.name;
  $('admin-name').textContent=user.email||'MathsGrove team';
  $('logout').hidden=false;
  $('status-screen').hidden=true;$('application').hidden=false;
  // Restrict sensitive administrative actions to organisation owners/partners.
  if(!adminRole()){
   $('invite-form').querySelectorAll('input,button').forEach(x=>x.disabled=true);
   $('invite-feedback').textContent='Only an authorised partner administrator can issue or revoke student invitation keys.';
  }
  await refresh();
  setTab('overview');
 }catch(e){showStatus('Could not open the studio.','The secure connection could not verify your permissions: '+(e?.message||'Unknown error'));}
}
async function refresh(){
 await Promise.allSettled([loadRoster(),loadAttempts(),loadInvites()]);
 renderOverview();renderRoster();renderInvites();renderQueue();renderReleased();
}
async function loadRoster(){
 const {data,error}=await db.from('memberships').select('user_id,member_role').eq('org_id',state.membership.org_id).eq('member_role','student').limit(200);
 if(error)throw error;
 const members=data||[],ids=members.map(x=>x.user_id);
 if(!ids.length){state.students=[];return}
 const [p,q]=await Promise.all([
  db.from('profiles').select('id,display_name').in('id',ids),
  db.from('student_preferences').select('student_id,qualification,exam_board,tier').in('student_id',ids)
 ]);
 if(p.error||q.error)throw p.error||q.error;
 const names=new Map((p.data||[]).map(x=>[x.id,x.display_name]));
 const prefs=new Map((q.data||[]).map(x=>[x.student_id,x]));
 state.students=ids.map(id=>({id,name:names.get(id)||'Enrolled student',pref:prefs.get(id)||null}));
}
async function loadAttempts(){
 const {data,error}=await db.from('attempts').select('id,student_id,org_id,qualification,status,started_at,submitted_at')
  .eq('org_id',state.membership.org_id).order('started_at',{ascending:false}).limit(150);
 if(error)throw error;
 state.attempts=data||[];
}
async function loadInvites(){
 if(!adminRole()){state.invites=[];return}
 const result=await edge('list',{orgId:state.membership.org_id});
 state.invites=result.invitations||[];
}
function renderOverview(){
 const students=state.students,attempts=state.attempts;
 $('s-students').textContent=students.length;
 $('s-invites').textContent=state.invites.filter(x=>inviteStatus(x)==='Awaiting claim').length;
 $('s-awaiting').textContent=attempts.filter(x=>x.status==='submitted').length;
 $('s-marked').textContent=attempts.filter(x=>x.status==='marked').length;
 const root=$('recent-attempts');clear(root);
 const queue=attempts.filter(x=>x.status==='submitted').slice(0,5);
 if(!queue.length){root.append(make('p','empty','No papers waiting for a review.'));return}
 for(const a of queue){const student=students.find(x=>x.id===a.student_id);
 const button=make('button','link-action','Review →');button.onclick=()=>{setTab('marking');void openReview(a)};
 root.append(itemRow(student?.name||'Student', (examLabels[a.qualification]||a.qualification)+' · Submitted '+date(a.submitted_at),button))}
}
function renderRoster(){
 const root=$('students-body');clear(root);
 const term=$('student-search').value.trim().toLowerCase();
 const filtered=state.students.filter(x=>(x.name+' '+x.id+' '+(x.pref?.qualification||'')).toLowerCase().includes(term));
 if(!filtered.length){const row=make('tr'),cell=make('td','','No enrolled students match your search.');cell.colSpan=4;row.append(cell);root.append(row);return}
 for(const student of filtered){
  const row=make('tr');
  const name=make('td');name.append(make('strong','',student.name));
  const ref=make('td','',shortId(student.id));
  const route=make('td','',student.pref?(examLabels[student.pref.qualification]||student.pref.qualification)+(student.pref.exam_board?' · '+student.pref.exam_board:''):'Not selected');
  const count=state.attempts.filter(x=>x.student_id===student.id&&x.status==='draft').length;
  row.append(name,ref,route,make('td','',count));root.append(row);
 }
}
$('student-search').oninput=renderRoster;
function renderInvites(){
 const root=$('invite-table');clear(root);
 if(!adminRole()){root.append(make('p','empty','Invitations are managed by authorised partner administrators.'));return}
 if(!state.invites.length){root.append(make('p','empty','No invitations issued yet.'));return}
 state.invites.slice(0,60).forEach(inv=>{
  const label=inviteStatus(inv);
  const group=make('div','record-actions');
  group.append(pill(label,label==='Redeemed'?'done':label==='Awaiting claim'?'':'danger'));
  if(label==='Awaiting claim'){
   const revoke=make('button','link-action','Revoke');
   revoke.onclick=async()=>{if(!confirm('Revoke the invitation for '+inv.email+'? This code will stop working.'))return;
     revoke.disabled=true;try{await edge('revoke',{orgId:state.membership.org_id,invitationId:inv.id});inform('Invitation revoked.');await loadInvites();renderInvites();renderOverview()}catch(e){inform(e.message,true)}finally{revoke.disabled=false}};
   group.append(revoke);
  }
  root.append(itemRow(inv.email,date(inv.created_at)+' · Expires '+date(inv.expires_at),group));
 })
}
$('invite-form').onsubmit=async e=>{
 e.preventDefault();
 if(!adminRole())return;
 const email=$('invite-email').value.trim().toLowerCase();
 if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){inform('Enter a valid registered student email.',true,'invite-feedback');return}
 const button=$('invite-submit');button.disabled=true;
 try{
  const r=await edge('issue',{email,orgId:state.membership.org_id});
  state.lastCode=r.code;state.lastEmail=email;
  $('new-code').textContent=r.code;
  $('key-result').hidden=false;
  inform('One-time key generated successfully. Copy it now and share it securely.','','invite-feedback');
  await loadInvites();renderInvites();renderOverview();
 }catch(err){inform(err.message,true,'invite-feedback')}
 finally{button.disabled=false}
};
async function copy(t){try{await navigator.clipboard.writeText(t);inform('Copied to clipboard.','','invite-feedback')}catch{inform('Clipboard access unavailable. Select the code above and copy it manually.',true,'invite-feedback')}}
$('copy-code').onclick=()=>state.lastCode&&copy(state.lastCode);
$('copy-message').onclick=()=>state.lastCode&&copy(
 'Welcome to MathsGrove. Your private invitation code is '+state.lastCode+
 '. Open '+new URL('./portal.html',location.href).href+
 ' and enter the code with your registered email ('+state.lastEmail+
 '). Verify your email to claim your private mathematics dashboard. Do not share your code or sign-in link.');
function renderQueue(){
 const root=$('marking-queue');clear(root);
 const filter=$('marking-filter').value;
 const matched=state.attempts.filter(a=>filter==='all'||a.status===filter);
 if(!matched.length){root.append(make('p','empty','No assessments match this filter.'));return}
 for(const a of matched){
  const student=state.students.find(x=>x.id===a.student_id);
  const btn=make('button','link-action','Open review →');
  btn.onclick=()=>void openReview(a);
  const trailing=make('div','record-actions');trailing.append(pill(status[a.status]||a.status,a.status==='marked'?'done':''),btn);
  root.append(itemRow(student?.name||'Student', (examLabels[a.qualification]||a.qualification)+' · '+date(a.submitted_at||a.started_at),trailing));
 }
}
$('marking-filter').onchange=renderQueue;
$('refresh-marking').onclick=async()=>{await refresh();inform('Queue refreshed.')};
$('close-review').onclick=()=>{$('review-card').hidden=true;state.activeReview=null;state.reviewFields=[]};
async function openReview(attempt){
 try{
  if(!markRole())throw Error('Only authorised staff can review work.');
  if(attempt.status==='draft')throw Error('A student must submit the paper before it can be marked.');
  state.activeReview=attempt;
  const [ar,qr,fr,rr]=await Promise.all([
   db.from('answers').select('question_id,typed_answer,difficulty,confidence,clarity').eq('attempt_id',attempt.id),
   db.from('question_bank').select('id,topic,prompt,marks').eq('qualification',attempt.qualification),
   db.from('answer_files').select('question_id,storage_path,original_name,file_kind').eq('attempt_id',attempt.id),
   db.from('reviews').select('id,question_id,marks_awarded,feedback').eq('attempt_id',attempt.id)
  ]);
  for(const r of [ar,qr,fr,rr])if(r.error)throw r.error;
  const answers=ar.data||[],qmap=new Map((qr.data||[]).map(x=>[x.id,x]));
  const rmap=new Map((rr.data||[]).map(x=>[x.question_id,x]));
  const questionIds=answers.map(x=>x.question_id);
  const {data:schemes,error:schemeErr}=await db.from('mark_schemes').select('question_id,scheme').in('question_id',questionIds);
  if(schemeErr)throw schemeErr;
  const schemeMap=new Map((schemes||[]).map(x=>[x.question_id,x.scheme]));
  const root=$('review-questions');clear(root);state.reviewFields=[];
  const name=state.students.find(x=>x.id===attempt.student_id)?.name||'Student';
  $('review-title').textContent=name+' — '+(examLabels[attempt.qualification]||attempt.qualification);
  $('review-caption').textContent=shortId(attempt.student_id)+' · '+(attempt.status==='marked'?'Previously released':'Awaiting examiner review');
  if(!answers.length){root.append(make('p','empty','No saved answers found for this paper.'));$('review-card').hidden=false;return}
  for(let i=0;i<answers.length;i++){
   const answer=answers[i],q=qmap.get(answer.question_id);if(!q)continue;
   const section=make('section','review-question');
   section.append(make('h3','','Question '+(i+1)+' · '+q.topic+' · '+q.marks+' marks'));
   section.append(make('p','prompt',q.prompt));
   const work=make('div','student-work',answer.typed_answer||'No typed response; check the student’s attached working.');
   section.append(work);
   section.append(make('p','reflection','Student confidence: '+(answer.confidence||'Not provided')+'  ·  Difficulty: '+(answer.difficulty||'Not provided')+'  ·  Clarity: '+(answer.clarity||'Not provided')));
   const scheme=schemeMap.get(q.id);
   if(scheme){const details=make('details');const summary=make('summary','','Approved marking guidance');const guidance=make('p','student-work',scheme);details.append(summary,guidance);section.append(details)}
   const attachments=make('div','files');
   for(const file of (fr.data||[]).filter(f=>f.question_id===q.id)){
    const b=make('button','','View '+file.original_name+' ↗');b.type='button';
    b.onclick=async()=>{try{
     const {data,error}=await db.storage.from('student-work').createSignedUrl(file.storage_path,60);
     if(error)throw error;
     window.open(data.signedUrl,'_blank','noopener,noreferrer');
    }catch(e){inform('Could not open student working: '+e.message,true)}};
    attachments.append(b);
   }
   section.append(attachments);
   const fields=make('div','review-fields');
   const marklabel=make('label','','Marks / '+q.marks),mark=make('input');
   mark.type='number';mark.min='0';mark.max=String(q.marks);mark.step='1';mark.required=true;
   const existing=rmap.get(q.id);mark.value=existing?.marks_awarded??'';
   marklabel.append(mark);
   const commentlabel=make('label','','Examiner feedback'),comment=make('textarea');comment.rows=3;comment.maxLength=5000;
   comment.placeholder='What did the student understand? What should they improve next?';comment.value=existing?.feedback||'';
   commentlabel.append(comment);fields.append(marklabel,commentlabel);section.append(fields);root.append(section);
   state.reviewFields.push({question:q,mark,comment,existing});
  }
  $('review-confirm').checked=false;$('review-card').hidden=false;
  $('release-review').disabled=attempt.status==='marked';
  $('save-review').disabled=attempt.status==='marked';
  if(attempt.status==='marked'){for(const field of state.reviewFields){field.mark.readOnly=true;field.comment.readOnly=true}}
  $('review-card').scrollIntoView({behavior:'smooth',block:'start'});
 }catch(err){inform('Unable to load the paper: '+err.message,true)}
}
function validateReview(releasing){
 if(!state.activeReview||!state.reviewFields.length)throw Error('No submitted answers available to mark.');
 for(const field of state.reviewFields){const value=Number(field.mark.value);
  if(field.mark.value===''||!Number.isInteger(value)||value<0||value>field.question.marks)throw Error('Enter a whole-number mark from 0 to '+field.question.marks+' for each question.');
  if(releasing&&!field.comment.value.trim())throw Error('Enter feedback for every question before releasing the paper.');
 }
 if(releasing&&!$('review-confirm').checked)throw Error('Confirm you have checked all marks and feedback.');
}
async function writeReview(releasing){
 const buttons=[$('save-review'),$('release-review')];buttons.forEach(b=>b.disabled=true);
 try{
  validateReview(releasing);
  const attempt=state.activeReview;
  if(attempt.status==='marked')throw Error('This report is already released and locked.');
  const items=state.reviewFields.map(field=>({
   question_id:field.question.id,
   marks_awarded:Number(field.mark.value),
   feedback:field.comment.value.trim()
  }));
  // One Postgres transaction validates all marks and saves/release all at once.
  const {data,error}=await db.rpc('save_marking_review',{
    p_attempt:attempt.id,p_items:items,p_release:releasing
  });
  if(error)throw error;
  if(!data?.ok)throw Error('The database did not confirm that the review was saved.');
  if(releasing){
   $('review-card').hidden=true;state.activeReview=null;
   inform('Examiner assessment released to the student dashboard.');
  }else{inform('Draft examiner marks saved privately. They are not yet visible to the student.')}
  await loadAttempts();renderOverview();renderQueue();renderReleased();
 }catch(err){inform('Review not saved: '+err.message,true)}
 finally{buttons.forEach(b=>b.disabled=false);if(state.activeReview?.status==='marked')buttons.forEach(b=>b.disabled=true)}
}
$('save-review').onclick=()=>void writeReview(false);
$('release-review').onclick=()=>void writeReview(true);
function renderReleased(){
 const root=$('released-list');clear(root);
 const done=state.attempts.filter(a=>a.status==='marked');
 if(!done.length){root.append(make('p','empty','No examiner reports have been released yet.'));return}
 for(const a of done){const st=state.students.find(x=>x.id===a.student_id);
 const button=make('button','link-action','View marks →');button.onclick=()=>{setTab('marking');void openReview(a)};
 root.append(itemRow(st?.name||'Student',(examLabels[a.qualification]||a.qualification)+' · '+date(a.submitted_at),button))}
}
void init();
