import {createClient} from 'https://esm.sh/@supabase/supabase-js@2.49.4';
const $=id=>document.getElementById(id);
const config=window.MATHSGROVE_CONFIG||{};
const configured=Boolean(config.url&&config.publishableKey&&/^https:\/\//.test(config.url)&&!config.url.includes('YOUR_PROJECT'));
const sb=configured?createClient(config.url,config.publishableKey,{auth:{autoRefreshToken:true,persistSession:true,detectSessionInUrl:true}}):null;
const state={entitlement:null,user:null,member:null,members:[],profile:null,preference:null,attempts:[],questions:[],attempt:null,question:0,answer:null,autosave:null,photos:[],pen:false,eraser:false,drawingChanged:false,mouseDown:false};
const quals={IGCSE:'IGCSE Mathematics',GCSE:'GCSE Mathematics',A_LEVEL:'A Level Mathematics',FURTHER_MATHS:'A Level Further Mathematics',IB_AA:'IB Mathematics: Analysis & Approaches',IB_AI:'IB Mathematics: Applications & Interpretation',TMUA:'TMUA'};
function show(id){['configure-view','login-view','claim-view','dashboard-view'].forEach(x=>$(x).hidden=x!==id)}
function text(id,value){$(id).textContent=String(value??'')}
function message(id,s,error=false){let e=$(id);e.textContent=s;e.classList.toggle('is-error',error)}
function safe(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function labelState(s){return ({draft:'In progress',submitted:'Awaiting examiner',marked:'Reviewed'})[s]||s}
function friendlyError(e){return e?.message||'Something went wrong. Please try again.'}
function requireReady(){if(!sb)throw Error('The Supabase connection is not configured yet.')}
function isStaff(){return state.member&&['partner','examiner','admin'].includes(state.member.member_role)}
function isPartner(){return state.member&&['partner','admin'].includes(state.member.member_role)}
function showPanel(id){document.querySelectorAll('.dash-panel').forEach(e=>e.hidden=e.id!==id+'-panel');document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===id));if(id==='papers')renderPaperList();if(id==='progress')renderProgress()}
function initials(name){return (name||'Student').trim().split(/\s+/).slice(0,2).map(x=>x[0]?.toUpperCase()||'').join('')||'MG'}
async function requestLink(e){e.preventDefault();try{requireReady();const email=$('access-email').value.trim().toLowerCase(),code=$('access-code').value.trim().toUpperCase().replace(/\s/g,'');const needsCode=$('access-code').required;if(needsCode&&!/^MG-[0-9A-F]{8}-[0-9A-F]{8}-[0-9A-F]{8}$/.test(code))throw Error('Use the invitation code supplied by your tutor.');if(code)sessionStorage.setItem('mathsgrove_pending_code',code);else sessionStorage.removeItem('mathsgrove_pending_code');$('send-link').disabled=true;const {error}=await sb.auth.signInWithOtp({email,options:{emailRedirectTo:location.origin+location.pathname}});if(error)throw error;message('login-message','Please check your email for your secure MathsGrove sign-in link. If you are joining for the first time, return to this browser to finish claiming your invitation.')}catch(err){message('login-message',friendlyError(err),true)}finally{$('send-link').disabled=false}}
async function redeem(code){const {data,error}=await sb.functions.invoke('invitations',{body:{action:'redeem',code:code.trim().toUpperCase()}});if(error)throw Error('Invitation could not be verified. Ensure your code matches the email address you used.');if(!data?.ok)throw Error(data?.error||'Invitation could not be redeemed.');sessionStorage.removeItem('mathsgrove_pending_code');return data}
async function loadMembership(){let {data,error}=await sb.from('memberships').select('org_id,member_role').eq('user_id',state.user.id).limit(10);if(error)throw error;state.members=data||[];state.member=state.members.find(x=>x.member_role==='student')||state.members[0]||null;return state.member}
async function boot(){if(!sb){show('configure-view');return}try{const {data:{session},error}=await sb.auth.getSession();if(error)throw error;if(!session?.user){show('login-view');return}state.user=session.user;await loadMembership();if(!state.member){const pending=sessionStorage.getItem('mathsgrove_pending_code');if(pending){try{await redeem(pending);await loadMembership()}catch(err){message('claim-message',friendlyError(err),true)}}}if(!state.member){show('claim-view');return}await dashboard()}catch(err){show('login-view');message('login-message',friendlyError(err),true)}}
async function dashboard(){if(isStaff()){location.replace('./studio.html');return}const [p,org,prof]=await Promise.all([sb.from('profiles').select('id,display_name').eq('id',state.user.id).maybeSingle(),sb.from('organisations').select('id,name').eq('id',state.member.org_id).maybeSingle(),sb.from('student_preferences').select('qualification,exam_board,tier').eq('student_id',state.user.id).maybeSingle()]);if(p.error||org.error||prof.error)throw(p.error||org.error||prof.error);state.profile=p.data||{display_name:'Student'};state.preference=prof.data||null;$('student-name').value=state.profile.display_name==='Student'?'':(state.profile.display_name||'');text('organisation-label',org.data?.name?.toUpperCase()||'YOUR PROGRAMME');text('sidebar-name',state.profile.display_name||'Student');text('sidebar-role',state.member.member_role.toUpperCase());text('member-initials',initials(state.profile.display_name));text('welcome-text','Welcome'+(state.profile.display_name?' back, '+state.profile.display_name.split(' ')[0]:'')+'.');text('membership-pill',state.member.member_role==='student'?'Student access':'Organisation team');$('pathway-form').hidden=isStaff();$('begin-paper').disabled=isStaff();if(state.preference){$('qualification-select').value=state.preference.qualification||'';$('exam-board').value=state.preference.exam_board||'';$('exam-tier').value=state.preference.tier||''}show('dashboard-view');await refresh();showPanel('overview')}
async function refresh(){if(!state.member)return;let query=sb.from('attempts').select('*').eq('org_id',state.member.org_id).order('started_at',{ascending:false}).limit(80);if(!isStaff())query=query.eq('student_id',state.user.id);let {data,error}=await query;if(error)throw error;state.attempts=data||[];text('metric-progress',state.attempts.filter(a=>a.status==='draft').length);text('metric-submitted',state.attempts.filter(a=>a.status==='submitted').length);text('metric-marked',state.attempts.filter(a=>a.status==='marked').length);const q=state.preference?.qualification;text('paper-availability',q?('Your selected pathway: '+quals[q]+'. Only original pilot questions are currently available; board-specific past papers are not yet provided.'): 'Ask your administrator to assign an exam pathway before building a paper.');if(q)await loadTopicOptions(q);await loadProgrammeAndEvidence()}

const programmeNames={weekly:'Grove Weekly',daily:'Grove Daily',exam:'Grove Exam'};
const programmeDescriptions={
 weekly:'Up to four selected weekly or topic-focused papers per calendar month.',
 daily:'Daily Focus opportunities seven days per week, with a weekly progress report when supported.',
 exam:'Grove Daily plus one timed mock-preview assessment per month and an exam-readiness outlook when enough assessed evidence is available.'
};
async function loadProgrammeAndEvidence(){
 state.entitlement=null;
 const {data:e,error}=await sb.from('student_entitlements')
  .select('tier,signature_credits,starts_at,ends_at').eq('student_id',state.user.id).maybeSingle();
 const active=e&&!error&&new Date(e.starts_at)<=new Date()&&(!e.ends_at||new Date(e.ends_at)>new Date());
 if(active)state.entitlement=e;
 $('student-programme-title').textContent=active?programmeNames[e.tier]||'Private programme':'Programme awaiting activation';
 $('student-programme-description').textContent=active?programmeDescriptions[e.tier]:'Your tutor assigns Weekly, Daily or Exam access. Until your programme is activated, no new paper can be created.';
 $('student-programme-expiry').textContent=active?(e.ends_at?'Active until '+new Date(e.ends_at).toLocaleDateString('en-GB'):'Access currently active'):'Ask your tutor to confirm programme access';
 $('student-signature-credits').textContent='Signature Reviews: '+(active?e.signature_credits:'—');
 $('membership-pill').textContent=active?programmeNames[e.tier]:'Invited · pending access';
 const allowed=active?(e.tier==='weekly'?['weekly','topic']:e.tier==='daily'?['daily','weekly','topic']:['daily','weekly','topic','mock']):[];
 for(const option of $('paper-mode').options)option.disabled=!allowed.includes(option.value);
 if(!allowed.includes($('paper-mode').value))$('paper-mode').value=allowed[0]||'weekly';
 $('paper-mode').dispatchEvent(new Event('change'));
 $('begin-paper').disabled=!active||!state.preference?.qualification;
 showPracticeDiary(e,Boolean(active));
 await renderEvidence();
}
function showPracticeDiary(e,active){
 const root=$('student-calendar');root.replaceChildren();
 if(!active){root.textContent='Your next practice pattern will appear when your tutor activates a programme.';return}
 const now=new Date();now.setHours(12,0,0,0);
 const days=e.tier==='weekly'?[3]:e.tier==='daily'?[0,1,2,3,4,5,6]:[0,1,2,4,6];
 for(let i=0;i<7;i++){
  const d=new Date(now);d.setDate(d.getDate()+i);
  const day=document.createElement('div');day.className='practice-day'+(days.includes(i)?' scheduled':'');
  const name=document.createElement('small');name.textContent=d.toLocaleDateString('en-GB',{weekday:'short'});
  const number=document.createElement('strong');number.textContent=d.getDate();
  const task=document.createElement('span');task.textContent=days.includes(i)?(e.tier==='weekly'?'Paper':'Focus'):'Review';
  day.append(name,number,task);root.append(day);
 }
}
async function renderEvidence(){
 const root=$('student-evidence');root.replaceChildren();
 const marked=state.attempts.filter(x=>x.status==='marked').slice(0,8);
 if(!marked.length){root.textContent='No released reviews yet. Your first examiner-marked paper will start your learning record.';return}
 try{
  const ids=marked.map(a=>a.id);
  const rv=await sb.from('reviews').select('attempt_id,question_id,marks_awarded').in('attempt_id',ids);
  if(rv.error)throw rv.error;
  const questionIds=[...new Set((rv.data||[]).map(x=>x.question_id))];
  if(!questionIds.length){root.textContent='Examiner marks are not yet available for these papers.';return}
  const qResult=await sb.from('question_bank').select('id,marks').in('id',questionIds);
  if(qResult.error)throw qResult.error;
  const maximum=new Map((qResult.data||[]).map(q=>[q.id,q.marks]));
  const rows=marked.map(a=>{
   const parts=(rv.data||[]).filter(r=>r.attempt_id===a.id);
   const earned=parts.reduce((x,r)=>x+Number(r.marks_awarded||0),0);
   const available=parts.reduce((x,r)=>x+Number(maximum.get(r.question_id)||0),0);
   return{a,earned,available,percent:available?Math.round(earned/available*100):0};
  }).filter(x=>x.available>0).reverse();
  if(!rows.length){root.textContent='Marks are not yet available for your reviewed papers.';return}
  const total=rows.reduce((a,x)=>a+x.earned,0),outOf=rows.reduce((a,x)=>a+x.available,0);
  const summary=document.createElement('p');summary.className='evidence-overview';
  summary.textContent=rows.length+' reviewed paper(s) · '+total+'/'+outOf+' marks across reviewed questions · '+Math.round(total/outOf*100)+'% mark-weighted score';
  root.append(summary);
  const chart=document.createElement('div');chart.className='student-trend';
  for(const x of rows){
    const item=document.createElement('div');item.className='student-trend-col';
    const val=document.createElement('strong');val.textContent=x.percent+'%';
    const bar=document.createElement('i');bar.style.height=(25+x.percent*1.25)+'px';
    const when=document.createElement('small');when.textContent=new Date(x.a.started_at).toLocaleDateString('en-GB',{day:'numeric',month:'short'});
    item.append(val,bar,when);chart.append(item);
  }
  root.append(chart);
  const caveat=document.createElement('p');caveat.className='insight-disclaimer';
  caveat.textContent=rows.length>=3&&outOf>=60?'Multiple marked papers are available. A formal predicted grade still requires representative timed assessments and moderated board-specific grade boundaries.':'Predicted grade unavailable: at least three substantial reviewed papers plus board-specific calibration are needed.';
  root.append(caveat);
 }catch(err){root.textContent='Evidence summary unavailable. Your saved papers remain accessible in My progress.'}
}

$('invite-login-form').addEventListener('submit',requestLink);
$('existing-member').addEventListener('click',()=>{let code=$('access-code');code.required=false;code.value='';code.placeholder='No invitation code needed for existing members';message('login-message','Enter your registered email to receive a secure sign-in link.')});
$('claim-form').addEventListener('submit',async e=>{e.preventDefault();try{await redeem($('claim-code').value);await loadMembership();if(!state.member)throw Error('Enrolment pending.');message('claim-message','Invitation accepted.');await dashboard()}catch(err){message('claim-message',friendlyError(err),true)}});
$('sign-out').addEventListener('click',async()=>{await sb?.auth.signOut();sessionStorage.removeItem('mathsgrove_pending_code');location.href='./portal.html'});
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>showPanel(b.dataset.view)));
$('pathway-form').addEventListener('submit',async e=>{
 e.preventDefault();
 try{
  const name=$('student-name').value.trim();
  if(!name||name.length>100)throw Error('Enter a valid display name.');
  const {error}=await sb.from('profiles').update({display_name:name}).eq('id',state.user.id);
  if(error)throw error;
  state.profile.display_name=name;
  text('sidebar-name',name);text('member-initials',initials(name));
  text('welcome-text','Welcome back, '+name.split(' ')[0]+'.');
  message('global-message','Your display name was saved. Your tutor manages examination route and programme settings.');
 }catch(err){message('global-message',friendlyError(err),true)}
});
const paperTargets={daily:3,weekly:5,topic:3,mock:8};
async function loadTopicOptions(qualification){
 const {data,error}=await sb.from('question_bank').select('topic').eq('qualification',qualification).eq('active',true).limit(100);
 if(error)return;
 const el=$('paper-topic'),previous=el.value;el.replaceChildren();
 el.add(new Option('Mixed topics',''));
 for(const t of [...new Set((data||[]).map(x=>x.topic).filter(Boolean))].sort())el.add(new Option(t,t));
 if([...el.options].some(o=>o.value===previous))el.value=previous;
 const count=(data||[]).length;
 if(count)text('paper-availability',count+' original pilot question(s) available for '+(quals[qualification]||qualification)+'. Your paper may contain fewer questions than requested. Exam-board-specific past papers are not yet available.');
 else text('paper-availability','No original pilot questions are available for this pathway yet. Your administrator can still enrol you, but the question bank needs expanding.');
}
$('paper-mode').addEventListener('change',e=>{
 $('paper-length').value=String(paperTargets[e.target.value]||3);
 $('paper-topic').disabled=e.target.value!=='topic' && e.target.value!=='weekly';
 if(e.target.value==='topic')$('paper-topic').focus();
});
$('paper-mode').dispatchEvent(new Event('change'));
$('begin-paper').addEventListener('click',async()=>{
 const btn=$('begin-paper');btn.disabled=true;
 try{
  if(!state.preference?.qualification)throw Error('Save your exam pathway first.');
  const mode=$('paper-mode').value,topic=$('paper-topic').disabled?'':$('paper-topic').value,level=$('paper-level').value;
  const wanted=Number($('paper-length').value)||3;
  const {data:q,error}=await sb.from('question_bank').select('id,qualification,topic,prompt,marks,difficulty').eq('qualification',state.preference.qualification).eq('active',true).order('difficulty',{ascending:true}).limit(100);
  if(error)throw error;
  const allowed={foundation:[1,2],standard:[2,3],challenge:[3,4,5]};
  let chosen=(q||[]).filter(x=>(!topic||x.topic===topic)&&(!allowed[level]||allowed[level].includes(x.difficulty)));
  if(!chosen.length)throw Error('No original pilot questions match those settings yet. Try Mixed topics or Balanced mix.');
  // Deterministic within difficulty; do not imply psychometric adaptation.
  chosen=chosen.slice(0,wanted);
  const ids=chosen.map(x=>x.id);
  const {data:id,error:createError}=await sb.rpc('create_student_paper',{p_mode:mode,p_topic:topic,p_difficulty:level,p_requested_count:wanted,p_questions:ids});
  if(createError)throw Error('The student paper builder is not activated yet. Your tutor needs to install the additional MathsGrove database migration.');
  const {data:a,error:fetchError}=await sb.from('attempts').select('*').eq('id',id).single();
  if(fetchError)throw fetchError;
  state.attempt=a;state.questions=chosen;state.question=0;
  await refresh();showPanel('papers');await showQuestion();
  if(chosen.length<wanted)message('global-message','Created a pilot paper with '+chosen.length+' of '+wanted+' requested questions. More original questions are being prepared.');
 }catch(err){message('global-message',friendlyError(err),true)}finally{btn.disabled=!state.preference?.qualification}
});
async function renderPaperList(){
 const box=$('paper-list');box.replaceChildren();
 if(!state.attempts.length){box.textContent='No papers yet. Go to Overview, select your paper type and create a practice set.';return}
 for(const a of state.attempts){
  const row=document.createElement('div');row.className='paper-row';
  const left=document.createElement('div'),title=document.createElement('strong'),sub=document.createElement('small');
  title.textContent=quals[a.qualification]||a.qualification;
  const mode=({daily:'Daily Focus',weekly:'Weekly Paper',topic:'Topic Focus',mock:'Mock Preview'})[a.paper_mode]||'Practice paper';
  sub.textContent=mode+' · '+labelState(a.status)+' · '+new Date(a.started_at).toLocaleDateString();
  left.append(title,sub);
  const button=document.createElement('button');button.type='button';button.className='button button-muted';
  button.textContent=a.status==='draft'?'Resume paper':'View learning record';
  button.onclick=()=>a.status==='draft'?resume(a):showPanel('progress');
  row.append(left,button);box.append(row);
 }
}
async function resume(a){
 try{
  const {data:links,error:linkError}=await sb.from('paper_questions')
   .select('position,question_bank(id,qualification,topic,prompt,marks,difficulty)')
   .eq('attempt_id',a.id).order('position',{ascending:true});
  if(linkError)throw Error('Your paper record could not be loaded. Ask your tutor to complete the student paper database upgrade.');
  let questions=(links||[]).map(x=>x.question_bank).filter(Boolean);
  if(!questions.length && !['daily','weekly','mock','topic'].includes(a.paper_mode)){
   // Compatibility for legacy pilot papers created before the question-sequence migration.
   const legacy=await sb.from('question_bank').select('id,qualification,topic,prompt,marks,difficulty')
    .eq('qualification',a.qualification).eq('active',true).order('difficulty',{ascending:true}).limit(8);
   if(legacy.error)throw legacy.error;questions=legacy.data||[];
  }
  if(!questions.length)throw Error('There are no saved questions for this assessment. Please contact your tutor.');
  state.attempt=a;state.questions=questions;state.question=0;
  await showQuestion();
 }catch(err){message('global-message',friendlyError(err),true)}
}
async function showQuestion(){const q=state.questions[state.question];if(!q)return;$('question-workspace').hidden=false;text('work-count','QUESTION '+(state.question+1)+' OF '+state.questions.length);text('work-topic',q.topic);text('work-marks',q.marks+' MARKS');if(window.MathsGroveMath)window.MathsGroveMath.write($('work-prompt'),q.prompt);else text('work-prompt',q.prompt);const {data,error}=await sb.from('answers').select('id,typed_answer,difficulty,confidence,clarity').eq('attempt_id',state.attempt.id).eq('question_id',q.id).maybeSingle();if(error)throw error;state.answer=data||null;$('work-text').value=data?.typed_answer||'';$('work-difficulty').value=data?.difficulty||'';$('work-confidence').value=data?.confidence||'';$('work-clarity').value=data?.clarity||'';$('previous-work').disabled=state.question===0;$('save-and-next').textContent=state.question===state.questions.length-1?'Submit completed paper →':'Save & next →';state.photos=[];state.drawingChanged=false;clearCanvas();board.setEnabled(true);await showFiles();text('save-status','Question '+(state.question+1)+' ready');$('question-workspace').scrollIntoView({behavior:'smooth',block:'start'})}
async function persistAnswer(){if(!state.attempt||!state.questions.length)return;const q=state.questions[state.question];const fields={typed_answer:$('work-text').value.slice(0,20000),difficulty:$('work-difficulty').value||null,confidence:$('work-confidence').value||null,clarity:$('work-clarity').value||null};let data,error;if(state.answer){({data,error}=await sb.from('answers').update(fields).eq('id',state.answer.id).select().single())}else{({data,error}=await sb.from('answers').insert({...fields,attempt_id:state.attempt.id,question_id:q.id,student_id:state.user.id}).select().single())}if(error)throw error;state.answer=data;text('save-status','Saved securely');return data}
let saving=false;async function autosave(){if(!state.attempt||saving)return;saving=true;try{await persistAnswer()}catch(err){text('save-status','Save failed — '+friendlyError(err))}finally{saving=false}}
['work-text','work-difficulty','work-confidence','work-clarity'].forEach(id=>$(id).addEventListener(id==='work-text'?'input':'change',()=>{if(state.autosave)clearTimeout(state.autosave);text('save-status','Saving…');state.autosave=setTimeout(autosave,1300)}));
async function uploadOne(file,kind){const q=state.questions[state.question];const valid=['image/png','image/jpeg','image/webp'];if(!valid.includes(file.type)||file.size>5*1024*1024)throw Error('Use a JPG, PNG or WebP image smaller than 5 MB.');const ext=file.type==='image/png'?'png':file.type==='image/webp'?'webp':'jpg';const path=[state.member.org_id,state.user.id,state.attempt.id,q.id,crypto.randomUUID()+'.'+ext].join('/');const {error}=await sb.storage.from('student-work').upload(path,file,{contentType:file.type,upsert:false});if(error)throw error;const {error:e}=await sb.from('answer_files').insert({attempt_id:state.attempt.id,question_id:q.id,student_id:state.user.id,org_id:state.member.org_id,storage_path:path,original_name:kind==='drawing'?'Whiteboard working':file.name,file_kind:kind});if(e)throw e}
async function uploadPending(){if(!state.photos.length&&!state.drawingChanged)return;if(state.photos.length>3)throw Error('Maximum three photographs per question.');for(const file of state.photos)await uploadOne(file,'photo');state.photos=[];if(state.drawingChanged){const blob=await board.exportBlob();if(!blob)throw Error('Could not save whiteboard image.');await uploadOne(new File([blob],'whiteboard.png',{type:'image/png'}),'drawing');state.drawingChanged=false}await showFiles()}
async function showFiles(){const q=state.questions[state.question];const {data,error}=await sb.from('answer_files').select('id,original_name,storage_path,file_kind').eq('attempt_id',state.attempt.id).eq('question_id',q.id);if(error)throw error;const el=$('attached-files');el.replaceChildren();for(const f of data||[]){const btn=document.createElement('button');btn.type='button';btn.className='small-button';btn.textContent='📎 '+f.original_name+' ↗';btn.onclick=async()=>{const {data:d,error:e}=await sb.storage.from('student-work').createSignedUrl(f.storage_path,60);if(e){message('global-message',friendlyError(e),true);return}window.open(d.signedUrl,'_blank','noopener,noreferrer')};el.append(btn)}if(state.photos.length){const pending=document.createElement('span');pending.textContent=state.photos.length+' photo(s) selected for upload';el.append(pending)}}
$('work-photos').addEventListener('change',e=>{state.photos=Array.from(e.target.files||[]).slice(0,3);const el=$('attached-files');const row=document.createElement('span');row.textContent=state.photos.length+' new photo(s) selected; saved when you continue.';el.append(row);e.target.value=''});
async function saveNext(){if(state.autosave)clearTimeout(state.autosave);const btn=$('save-and-next');btn.disabled=true;try{await persistAnswer();await uploadPending();if(state.question<state.questions.length-1){state.question++;await showQuestion()}else{if(!confirm('Submit your paper for examiner review? You will not be able to edit it afterwards.'))return;const {error}=await sb.from('attempts').update({status:'submitted',submitted_at:new Date().toISOString()}).eq('id',state.attempt.id);if(error)throw error;state.attempt=null;state.questions=[];$('question-workspace').hidden=true;await refresh();await renderPaperList();showPanel('progress');message('global-message','Your paper has been submitted and saved for authorised examiner review.')}}catch(err){message('global-message',friendlyError(err),true)}finally{btn.disabled=false}}
$('save-and-next').addEventListener('click',saveNext);
$('previous-work').addEventListener('click',async()=>{if(state.question===0)return;try{await persistAnswer();await uploadPending();state.question--;await showQuestion()}catch(err){message('global-message',friendlyError(err),true)}});
const board=window.MathsGroveBoard.setup({
 canvas:$('student-canvas'),
 toolbar:$('student-board-toolbar'),
 onChange:()=>{state.drawingChanged=true;text('save-status','Whiteboard changes not yet saved')}
});
function clearCanvas(){board.clear()}
async function renderProgress(){
 const el=$('progress-list');el.replaceChildren();$('report-detail').hidden=true;
 if(!state.attempts.length){el.textContent='You have no saved papers yet. Create your first practice set from Overview to begin building your personal learning record.';return}
 for(const attempt of state.attempts){
  const row=document.createElement('div');row.className='paper-row';
  const details=document.createElement('div'),name=document.createElement('strong'),meta=document.createElement('small');
  name.textContent=quals[attempt.qualification]||attempt.qualification;
  const mode=({daily:'Daily Focus',weekly:'Weekly Paper',mock:'Mock Preview',topic:'Topic Focus'})[attempt.paper_mode]||'Practice paper';
  meta.textContent=mode+' · '+labelState(attempt.status)+' · '+new Date(attempt.started_at).toLocaleDateString();
  details.append(name,meta);
  const btn=document.createElement('button');btn.type='button';btn.className='button button-muted';
  btn.textContent=attempt.status==='marked'?'Open examiner report':'View saved work';
  btn.onclick=()=>viewPaperRecord(attempt);row.append(details,btn);el.append(row);
 }
}
async function viewPaperRecord(attempt){
 const root=$('report-detail');root.hidden=false;root.replaceChildren();
 const loading=document.createElement('p');loading.textContent='Opening your private paper record…';root.append(loading);
 try{
  const [answers,reviewResult,files,questions,summaryResult]=await Promise.all([
   sb.from('answers').select('question_id,typed_answer,difficulty,confidence,clarity').eq('attempt_id',attempt.id),
   sb.from('reviews').select('question_id,marks_awarded,feedback').eq('attempt_id',attempt.id),
   sb.from('answer_files').select('question_id,original_name,storage_path,file_kind').eq('attempt_id',attempt.id),
   sb.from('question_bank').select('id,topic,prompt,marks').eq('qualification',attempt.qualification),
   sb.from('review_summaries').select('overview,strengths,gaps,next_steps,readiness_note,released_at').eq('attempt_id',attempt.id).maybeSingle()
  ]);
  for(const r of [answers,reviewResult,files,questions])if(r.error)throw r.error;
  root.replaceChildren();
  const qs=new Map((questions.data||[]).map(q=>[q.id,q])),reviews=new Map((reviewResult.data||[]).map(r=>[r.question_id,r]));
  const label=document.createElement('p');label.className='card-kicker';label.textContent=attempt.status==='marked'?'YOUR RELEASED EXAMINER REVIEW':'YOUR SAVED WORK';
  const title=document.createElement('h2');title.textContent=(quals[attempt.qualification]||attempt.qualification)+' · '+(attempt.paper_mode||'practice');
  const note=document.createElement('p');note.className='record-intro';note.textContent=attempt.status==='marked'?'This report reflects examiner marks and feedback saved to your own account.':'Your paper is saved in your private history. Question-by-question examiner feedback appears here after review.';
  root.append(label,title,note);
  const actual=(answers.data||[]).reduce((sum,r)=>sum+(reviews.get(r.question_id)?.marks_awarded||0),0);
  const maximum=(answers.data||[]).reduce((sum,r)=>sum+(qs.get(r.question_id)?.marks||0),0);
  if(attempt.status==='marked'){
   const score=document.createElement('div');score.className='record-score';
   const scoreValue=document.createElement('strong');scoreValue.textContent=actual+' / '+maximum;
   const scoreNote=document.createElement('span');scoreNote.textContent=maximum?Math.round(100*actual/maximum)+'% · Marks recorded by your examiner':'Examiner marks recorded';
   score.append(scoreValue,scoreNote);root.append(score);
   const summary=summaryResult?.data;
   if(summary){
    const heading=document.createElement('h3');heading.className='report-narrative-title';heading.textContent='Your detailed examiner review';root.append(heading);
    const parts=[['Examiner overview',summary.overview],['Your mathematical strengths',summary.strengths],
      ['Misconceptions and lost marks',summary.gaps],['Your individual next steps',summary.next_steps],
      ['Exam-readiness evidence',summary.readiness_note]];
    for(const [label,value] of parts){
     if(!value)continue;
     const sec=document.createElement('section');sec.className='review-summary-card';
     const h=document.createElement('h3');h.textContent=label;
     const p=document.createElement('p');p.textContent=value;sec.append(h,p);root.append(sec);
    }
   }else{
    const note=document.createElement('p');note.className='record-intro';
    note.textContent='This paper contains released question marks. A narrative report has not yet been added; ask your examiner for a full Signature Review.';
    root.append(note);
   }
  }
  const sorted=(answers.data||[]).sort((a,b)=>String(qs.get(a.question_id)?.topic||'').localeCompare(String(qs.get(b.question_id)?.topic||'')));
  for(let i=0;i<sorted.length;i++){
   const a=sorted[i],q=qs.get(a.question_id),r=reviews.get(a.question_id);
   const section=document.createElement('section');section.className='record-question';
   const h=document.createElement('h3');h.textContent='Question '+(i+1)+' · '+(q?.topic||'Mathematics');
   const prompt=document.createElement('p');prompt.textContent=q?.prompt||'Original question';
   const response=document.createElement('div');response.className='record-working';response.textContent=a.typed_answer||'Handwritten working was supplied separately.';
   const refl=document.createElement('small');refl.textContent='Your reflection: '+(a.difficulty||'not recorded')+' · confidence '+(a.confidence||'not recorded');
   section.append(h,prompt,response,refl);
   if(attempt.status==='marked'){
    const examiner=document.createElement('div');examiner.className='record-examiner';
    const marks=document.createElement('strong');marks.textContent='Examiner marks: '+(r?.marks_awarded??'—')+' / '+(q?.marks??'—');
    const feedback=document.createElement('p');feedback.textContent=r?.feedback||'No written comment recorded for this question.';
    examiner.append(marks,feedback);section.append(examiner);
   }
   for(const file of (files.data||[]).filter(x=>x.question_id===a.question_id)){
    const btn=document.createElement('button');btn.type='button';btn.className='small-button record-attachment';btn.textContent='View saved '+(file.file_kind==='drawing'?'graph-paper working':'photo')+' · '+file.original_name+' ↗';
    btn.onclick=async()=>{
      try{const {data,error}=await sb.storage.from('student-work').createSignedUrl(file.storage_path,60);if(error)throw error;window.open(data.signedUrl,'_blank','noopener,noreferrer')}
      catch(err){message('global-message',friendlyError(err),true)}
    };
    section.append(btn);
   }
   root.append(section);
  }
  if(!(answers.data||[]).length){const p=document.createElement('p');p.textContent='No saved answers were found for this paper.';root.append(p)}
  if(attempt.status==='marked'){
   const tip=document.createElement('div');tip.className='record-next';tip.textContent='Your next step: revisit questions where method or accuracy marks were lost, then select a new practice paper from your Dashboard.';root.append(tip);
  }
  const actions=document.createElement('div');actions.className='record-actions';
  const print=document.createElement('button');print.type='button';print.className='button button-primary';print.textContent='Print / Save this record as PDF';print.onclick=()=>window.print();
  const sample=document.createElement('a');sample.className='button button-muted';sample.href='./sample.html#report';sample.textContent='Compare specimen report ↗';
  actions.append(print,sample);root.append(actions);
  root.scrollIntoView({behavior:'smooth',block:'start'});
 }catch(err){root.replaceChildren();message('global-message','Unable to open your private record: '+friendlyError(err),true)}
}
$('export-history').addEventListener('click',async()=>{
 try{
  const [answers,files,reviews]=await Promise.all([
   sb.from('answers').select('attempt_id,question_id,typed_answer,difficulty,confidence,clarity,updated_at').eq('student_id',state.user.id).limit(500),
   sb.from('answer_files').select('attempt_id,question_id,original_name,file_kind,created_at').eq('student_id',state.user.id).limit(500),
   sb.from('reviews').select('attempt_id,question_id,marks_awarded,feedback').limit(500)
  ]);
  for(const result of [answers,files,reviews])if(result.error)throw result.error;
  const ids=new Set(state.attempts.map(a=>a.id));
  const record={label:'MathsGrove private student record',exported_at:new Date().toISOString(),
    note:'JSON contains records and attachment names, but does not include photograph image binaries.',
    profile:{display_name:state.profile?.display_name||'',qualification:state.preference?.qualification||'',exam_board:state.preference?.exam_board||'',tier:state.preference?.tier||''},
    papers:state.attempts,
    answers:(answers.data||[]).filter(x=>ids.has(x.attempt_id)),
    attachments:(files.data||[]).filter(x=>ids.has(x.attempt_id)),
    released_reviews:(reviews.data||[]).filter(x=>ids.has(x.attempt_id))
  };
  const url=URL.createObjectURL(new Blob([JSON.stringify(record,null,2)],{type:'application/json'}));
  const link=document.createElement('a');link.href=url;link.download='MathsGrove_my_learning_record.json';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  message('global-message','Your learning record JSON has been downloaded. Uploaded photographs remain private in Supabase.');
 }catch(err){message('global-message',friendlyError(err),true)}
});
await boot();
$('sign-out').hidden=!state.user;
