import {createClient} from 'https://esm.sh/@supabase/supabase-js@2.49.4';
import {evaluateMath} from './baseline-calc.js';
import {createEvidenceWorkspace} from './evidence-workspace.js';
const $=id=>document.getElementById(id),conf=window.MATHSGROVE_CONFIG||{};
const enabled=/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(conf.url||'')&&!!conf.publishableKey;
const db=enabled?createClient(conf.url,conf.publishableKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}}):null;
let payload=null,current=1,saving=false,closing=false,serverOffset=0,clock=null,fullSession=false,focused=true;
const lookups={GCSE:'GCSE Mathematics',IGCSE:'IGCSE Mathematics',A_LEVEL:'A Level Mathematics',FURTHER_MATHS:'Further Mathematics',IB_AA:'IB Analysis & Approaches',IB_AI:'IB Applications & Interpretation',TMUA:'TMUA'};
const visible=id=>['bl-loading','bl-unavailable','bl-intro','bl-exam','bl-report'].forEach(x=>$(x).hidden=x!==id);
const set=(id,value)=>{const n=$(id);if(n)n.textContent=String(value??'')};
const mark=(id,msg)=>set(id,msg);
const friendly=e=>e?.message||'Unable to reach the assessment service. Please try again.';
const title=p=>(lookups[p?.qualification]||p?.qualification||'Mathematics')+' · '+String(p?.level||'').toUpperCase();
const math=(el,source)=>{if(window.MathsGroveMath?.write)window.MathsGroveMath.write(el,source);else el.textContent=String(source??'')};
const now=()=>Date.now()+serverOffset;
const reportStatus=()=>payload&&payload.status&&payload.status!=='active';

function updateSession(p){
 if(!p||p.ready!==true)throw Error(p?.reason||'Your administrator has not yet assigned an eligible baseline.');
 payload=p;
 if(p.server_time){serverOffset=new Date(p.server_time).getTime()-Date.now()}
 if(p.status==='active')startActive();
 else if(p.status==='submitted'||p.status==='expired')showReport();
 else showIntro();
}
function unavailable(titleText,body){set('bl-unavailable-title',titleText);set('bl-unavailable-text',body);visible('bl-unavailable')}
async function load(){
 if(!db){unavailable('Secure assessment connection needed.','Your MathsGrove Supabase project is not configured. Please contact your programme administrator.');return}
 try{
  const {data:{user},error}=await db.auth.getUser();
  if(error||!user||!user.email_confirmed_at){location.replace('./portal.html');return}
  const {data,error:rpcError}=await db.rpc('baseline_status');
  if(rpcError)throw Error('The baseline database upgrade has not been activated yet. Ask the administrator to install and check the baseline migration.');
  if(!data?.ready){unavailable('Your academic route needs a baseline.',data?.reason||'Ask your administrator to assign your qualification and academic level.');return}
  if(data.status==='not_started'&&!data.bank_ready){unavailable('Your 20 questions are being moderated.','This academic route has '+(data.item_count||0)+' of 20 approved diagnostic questions. A baseline cannot begin until all 20 have been checked and installed privately.');return}
  updateSession(data)
 }catch(e){unavailable('The baseline is not available yet.',friendly(e))}
}
function showIntro(){
 set('bl-route-title',title(payload));set('bl-route',title(payload));set('bl-duration',payload.minutes);set('bl-programme','Included for every MathsGrove programme · '+String(payload.programme||'').toUpperCase());
 set('bl-calculator-note',payload.calculator_allowed?'An on-page calculator is available for this diagnostic.':'This route is non-calculator; the calculator tool is not available.');
 visible('bl-intro');
}
$('bl-understood').addEventListener('change',e=>$('bl-start').disabled=!e.target.checked);
$('bl-start').addEventListener('click',async()=>{
 const btn=$('bl-start');btn.disabled=true;
 // Fullscreen is requested only on a genuine click. Denial does not exclude students.
 if(document.documentElement.requestFullscreen&&!document.fullscreenElement){
  try{await document.documentElement.requestFullscreen();fullSession=true;document.body.classList.add('bl-exam-focused')}catch{}
 }
 try{
  const {data,error}=await db.rpc('baseline_start');
  if(error)throw error;
  updateSession(data);
 }catch(e){
  if(document.fullscreenElement)await document.exitFullscreen().catch(()=>{});
  unavailable('Could not begin the baseline.',friendly(e));
 }finally{btn.disabled=false}
});
function renderNumbers(){
 const root=$('bl-number-grid');root.replaceChildren();
 const answered=new Map((payload.questions||[]).filter(q=>q.selected).map(q=>[q.position,q.selected]));
 (payload.questions||[]).forEach(q=>{const b=document.createElement('button');b.type='button';b.textContent=String(q.position);b.setAttribute('aria-label','Question '+q.position+(q.selected?', answered':', unanswered'));if(q.selected)b.classList.add('answered');if(q.position===current){b.classList.add('current');b.setAttribute('aria-current','step')}b.addEventListener('click',()=>navigate(q.position));root.append(b)});
 set('bl-answered-count',answered.size+' / 20 answered');
}
function renderQuestion(){
 const q=payload.questions?.find(x=>x.position===current);
 if(!q)return;
 set('bl-question-topic',String(q.topic||'Mathematics').toUpperCase());set('bl-question-number','Question '+String(q.position).padStart(2,'0')+' of 20');
 math($('bl-question-prompt'),q.prompt);
 const root=$('bl-options');root.replaceChildren();
 (q.choices||[]).forEach(choice=>{
  const lab=document.createElement('label');lab.className='bl-option'+(q.selected===choice.id?' chosen':'');const input=document.createElement('input');input.type='radio';input.name='baseline-answer';input.value=choice.id;input.checked=q.selected===choice.id;input.disabled=saving;
  const letter=document.createElement('span');letter.className='bl-opt-letter';letter.textContent=choice.id;
  const answer=document.createElement('span');answer.className='bl-opt-text';math(answer,choice.text);
  lab.append(input,letter,answer);input.addEventListener('change',()=>void saveAnswer(q.position,choice.id));
  root.append(lab);
 });
 set('bl-answer-status',q.selected?'Answer recorded for this question. You can change it before submission.':'Choose one option; each selection is saved immediately.');
 $('bl-previous').disabled=current===1||saving;
 $('bl-next').textContent=current===20?'Review & submit ↗':'Next question →';
 $('bl-next').disabled=saving;
 $('bl-calculator-status').textContent=payload.calculator_allowed?'CALCULATOR ALLOWED':'NON-CALCULATOR';
 renderNumbers();evidence.switchQuestion();
}
async function saveAnswer(position,choice){
 if(!payload||reportStatus()||saving)return;
 saving=true;mark('bl-autosave','Saving answer…');renderQuestion();
 try{
  const {data,error}=await db.rpc('baseline_answer',{p_session:payload.session_id,p_position:position,p_choice:choice});
  if(error)throw error;
  if(data?.status&&data.status!=='active'){await refreshState();return}
  if(!data?.ok)throw Error('Answer was not saved.');
  const q=payload.questions.find(x=>x.position===position);if(q)q.selected=choice;
  mark('bl-autosave','Answer saved securely');
 }catch(e){mark('bl-autosave','Not saved — try again');set('bl-focus-message','Connection interrupted: the last answer was NOT saved. Select it again. '+friendly(e))}
 finally{saving=false;renderQuestion()}
}
async function navigate(n){
 if(saving||closing||reportStatus()||!payload)return;
 saving=true;
 try{
  await evidence.flush();
  current=Math.min(20,Math.max(1,n));renderQuestion();
  document.querySelector('.bl-paper')?.scrollIntoView({behavior:'smooth',block:'nearest'});
 }catch(e){set('bl-focus-message','Working could not be saved: '+friendly(e)+'. Try again before changing questions.')}
 finally{saving=false}
}
$('bl-previous').addEventListener('click',()=>navigate(current-1));
$('bl-next').addEventListener('click',()=>current===20?confirmSubmit():navigate(current+1));
const openDialog=dialog=>{if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','')};
const closeDialog=dialog=>{if(dialog.open&&typeof dialog.close==='function')dialog.close();else dialog.removeAttribute('open')};
async function confirmSubmit(){
 if(!payload||reportStatus()||saving)return;
 try{await evidence.flush()}catch(e){set('bl-focus-message','Save or clear your current working before submitting: '+friendly(e));return}
 const answered=(payload.questions||[]).filter(x=>x.selected).length;
 set('bl-confirm-description',answered+' of 20 questions answered. Multiple-choice answers are marked automatically; saved working is available for your examiner to review. Unanswered questions count as zero.');
 openDialog($('bl-confirm'))
}
$('bl-submit-side').addEventListener('click',confirmSubmit);
$('bl-submit-bottom').addEventListener('click',confirmSubmit);
$('bl-cancel-submit').addEventListener('click',()=>closeDialog($('bl-confirm')));
$('bl-confirm-submit').addEventListener('click',async()=>{
 closeDialog($('bl-confirm'));if(closing||!payload)return;
 closing=true;mark('bl-autosave','Submitting…');
 try{
  await evidence.flush();
  const {data,error}=await db.rpc('baseline_finish',{p_session:payload.session_id});
  if(error)throw error;updateSession(data)
 }catch(e){set('bl-focus-message','Submission was not confirmed. '+friendly(e)+' Your answers remain saved; try again.')}
 finally{closing=false}
});
async function refreshState(){
 if(!db||closing)return;
 closing=true;
 try{const {data,error}=await db.rpc('baseline_status');if(error)throw error;updateSession(data)}
 catch(e){set('bl-focus-message','Reconnecting to the server clock. '+friendly(e))}
 finally{closing=false}
}
function startActive(){
 visible('bl-exam');document.body.classList.toggle('bl-exam-focused',!!document.fullscreenElement);
 const missing=(payload.questions||[]).find(q=>!q.selected);
 if(missing&&current===1)current=missing.position;
 set('bl-exam-path',title(payload));
 $('bl-calc-box').hidden=!payload.calculator_allowed;
 void evidence.refresh().then(()=>evidence.switchQuestion()).catch(e=>set('bl-focus-message','Evidence unavailable: '+friendly(e)));renderQuestion();tick();
 if(clock!==null)clearInterval(clock);
 clock=setInterval(tick,700);
}
let expiryTriggered=false;
function tick(){
 if(!payload||payload.status!=='active')return;
 const left=Math.max(0,Math.ceil((new Date(payload.ends_at).getTime()-now())/1000));
 const mm=String(Math.floor(left/60)).padStart(2,'0'),ss=String(left%60).padStart(2,'0');
 set('bl-timer',mm+':'+ss);document.querySelector('.bl-timer-box')?.classList.toggle('urgent',left<=300);
 if(left<=0&&!expiryTriggered){expiryTriggered=true;set('bl-focus-message','Time has elapsed. The server is closing your sitting.');void refreshState()}
}
async function logEvent(kind){
 if(!payload||reportStatus()||!db)return;
 try{await db.rpc('baseline_event',{p_session:payload.session_id,p_kind:kind})}catch{}
}
document.addEventListener('visibilitychange',()=>{
 if(!payload||reportStatus())return;
 if(document.hidden){void logEvent('tab_hidden')}
 else{void logEvent('returned');set('bl-focus-message','Welcome back. Time continued while this tab was hidden; browser-focus events are noted for your report.')}
});
window.addEventListener('blur',()=>{if(payload&&!reportStatus())void logEvent('window_blur')});
document.addEventListener('fullscreenchange',()=>{
 const inFull=!!document.fullscreenElement;
 document.body.classList.toggle('bl-exam-focused',inFull);
 if(!inFull&&fullSession&&payload&&!reportStatus()){
  fullSession=false;void logEvent('fullscreen_exit');
  set('bl-focus-message','Focus mode was exited. This is recorded as context only, not proof of outside help. Your timer continues.');
 }
});
$('bl-fullscreen').addEventListener('click',async()=>{
 if(!payload||reportStatus())return;
 try{
  if(document.fullscreenElement){await document.exitFullscreen()}
  else if(document.documentElement.requestFullscreen){await document.documentElement.requestFullscreen();fullSession=true}
  else set('bl-focus-message','Fullscreen focus is not supported in this browser. The timed assessment remains available.')
 }catch{set('bl-focus-message','Fullscreen permission was not granted. You can continue the test in this window.')}
});
window.addEventListener('beforeunload',e=>{if(payload?.status==='active'){e.preventDefault();e.returnValue=''}});
function reportItem(kind,title,body){
 const div=document.createElement('div');div.className=kind;const a=document.createElement('strong');a.textContent=title;const b=document.createElement('p');b.textContent=body;div.append(a,b);return div;
}
function showReport(){
 expiryTriggered=false;clearInterval(clock);clock=null;visible('bl-report');
 document.body.classList.remove('bl-exam-focused');
 if(document.fullscreenElement)document.exitFullscreen().catch(()=>{});
 set('bl-score',(payload.score??'—')+' / 20');
 set('bl-percent',payload.score===null?'—%':Math.round(payload.score/20*100)+'%');
 set('bl-band',payload.band||'Starting point recorded');
 set('bl-report-route',title(payload)+(payload.status==='expired'?' · Time expired':' · Completed'));
 set('bl-report-narrative',payload.score>=17?'This is a strong starting point in this short sample. Further exam-standard evidence and review of complete working are still needed.':payload.score>=13?'Several methods are secure. Use the topic breakdown below to identify where a short targeted practice set will add value.':payload.score>=7?'Your answers show developing understanding. A small number of focused topics should be revisited before repeating more complex questions.':'Your answers identify some useful foundations to revisit. Begin with short supported steps, then recheck with fresh questions.');
 const topics=[...(payload.topics||[])].sort((a,b)=>a.topic.localeCompare(b.topic)),box=$('bl-topic-report');box.replaceChildren();
 for(const t of topics){
  const row=document.createElement('div');row.className='bl-topic-row';const top=document.createElement('div');top.className='bl-topic-top';
  const topic=document.createElement('span');topic.textContent=t.topic;const score=document.createElement('strong');score.textContent=t.correct+' / '+t.total;
  top.append(topic,score);const track=document.createElement('div');track.className='bl-track';const bar=document.createElement('i');bar.style.width=Math.round(100*t.correct/t.total)+'%';track.append(bar);row.append(top,track);box.append(row);
 }
 const priorities=$('bl-priority-report');priorities.replaceChildren();
 const weak=topics.filter(t=>t.correct<t.total).sort((a,b)=>(a.correct/a.total)-(b.correct/b.total)||b.total-a.total).slice(0,4);
 if(!weak.length)priorities.append(reportItem('bl-priority','Keep stretching your reasoning','Your baseline responses were all correct. Ask for harder unfamiliar problems and a review of written mathematical methods.'));
 else weak.forEach((t,i)=>{
  const row=document.createElement('div');row.className='bl-priority';const idx=document.createElement('span');idx.className='index';idx.textContent='0'+(i+1);
  const body=document.createElement('div');const strong=document.createElement('strong');strong.textContent=t.topic+' · '+t.correct+'/'+t.total;
  const p=document.createElement('p');
  const skill=(payload.review||[]).find(x=>x.topic===t.topic&&!x.correct)?.skill||'the relevant mathematical method';
  p.textContent='Revisit '+skill.toLowerCase()+'. Explain each step, then check with two new examples.';
  body.append(strong,p);row.append(idx,body);priorities.append(row)
 });
 const integ=payload.integrity||{};set('bl-integrity-report','Tab hidden: '+(integ.tab_hidden||0)+' · Window focus changes: '+(integ.window_blur||0)+' · Fullscreen exits: '+(integ.fullscreen_exit||0)+'. These are non-diagnostic browser events and do not establish misconduct.');
 const review=$('bl-review-list');review.replaceChildren();const questions=new Map((payload.questions||[]).map(x=>[x.position,x]));
 for(const answer of payload.review||[]){
  const row=document.createElement('article');row.className='bl-review-entry';
  const h=document.createElement('h4');h.textContent='Question '+answer.position+' · '+answer.topic+' · ';const s=document.createElement('span');s.className=answer.correct?'bl-good':'bl-needs';s.textContent=answer.correct?'Correct':'Review recommended';h.append(s);
  const selected=document.createElement('p');const chosen=questions.get(answer.position)?.choices?.find(c=>c.id===answer.selected);
  const correct=questions.get(answer.position)?.choices?.find(c=>c.id===answer.correct_choice);
  selected.textContent='Your choice: '+(chosen?answer.selected+'. '+chosen.text:'No answer')+'.';
  const reference=document.createElement('p');reference.className='bl-answer-key';reference.textContent='Correct answer: '+answer.correct_choice+'. '+(correct?.text||'')+'. '+answer.explanation;
  row.append(h,selected,reference);review.append(row)
 }
}
$('bl-print').addEventListener('click',()=>window.print());
// The working is saved to private storage with each question and photo attachment.
const evidence=createEvidenceWorkspace({
 db,kind:'baseline',canvas:$('bl-board'),toolbar:$('bl-toolbar'),
 photos:$('bl-photos'),saveButton:$('bl-save-work'),
 status:$('bl-work-status'),list:$('bl-work-list'),
 getSession:()=>payload?.session_id,getPosition:()=>current
});
// No arbitrary code execution in the local calculator.
const calc=$('bl-calc-display');
function calculate(){try{const num=evaluateMath(calc.value);const out=Number(num.toPrecision(12));set('bl-calc-output','Result: '+out);calc.value=String(out)}catch(e){set('bl-calc-output',friendly(e))}}
$('bl-calc-keys').addEventListener('click',e=>{
 const b=e.target.closest('button[data-key]');if(!b)return;
 const k=b.dataset.key;
 if(k==='clear'){calc.value='';set('bl-calc-output','')}
 else if(k==='back')calc.value=calc.value.slice(0,-1);
 else if(k==='=')calculate();
 else if(calc.value.length<80)calc.value+=k;
 calc.focus()
});
calc.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();calculate()}});
void load();
