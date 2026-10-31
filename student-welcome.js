/* First-time student experience. Auth credentials remain with Supabase Auth. */
export function initStudentWelcome(sb,{show,continueToDashboard}){
 const $=id=>document.getElementById(id);
 let busy=false,learner=null;
 const msg=(text,error=false)=>{const node=$('mg-welcome-message');node.textContent=text||'';node.classList.toggle('is-error',error)};
 const formatName=s=>String(s||'').trim().split(/\s+/)[0]||'there';
 const exams={GCSE:'GCSE Mathematics',IGCSE:'IGCSE Mathematics',A_LEVEL:'A Level Mathematics',FURTHER_MATHS:'Further Mathematics',IB_AA:'IB Mathematics AA',IB_AI:'IB Mathematics AI',TMUA:'TMUA'};
 const advance=step=>{
  $('mg-welcome-password').hidden=step!=='welcome-password';
  $('mg-welcome-intro').hidden=step!=='welcome-intro';
  $('mg-welcome-step-1').classList.toggle('is-active',step==='welcome-password');
  $('mg-welcome-step-1').classList.toggle('is-done',step==='welcome-intro');
  $('mg-welcome-step-2').classList.toggle('is-active',step==='welcome-intro');
  if(step==='welcome-intro')$('mg-welcome-next').focus({preventScroll:true});
 };
 async function maybeShow(user){
  const {data,error}=await sb.rpc('grove_student_welcome_status');
  if(error)throw Error('Could not check your first-time welcome: '+error.message);
  if(data?.completed===true)return false;
  learner=user;
  const [p,q,b]=await Promise.all([
   sb.from('profiles').select('display_name').eq('id',user.id).maybeSingle(),
   sb.from('student_preferences').select('qualification,exam_board,tier').eq('student_id',user.id).maybeSingle(),
   sb.rpc('baseline_status')
  ]);
  const displayName=p.data?.display_name||'';
  const route=q.data?[exams[q.data.qualification]||q.data.qualification,q.data.tier].filter(Boolean).join(' · '):'Your personal mathematics pathway';
  $('mg-welcome-name').textContent=formatName(displayName);
  $('mg-welcome-account-email').textContent=user.email||'Verified student';
  $('mg-welcome-route').textContent=route;
  const baseline=b.error?null:b.data;
  const available=baseline?.ready===true&&(baseline.status==='active'||(baseline.status==='not_started'&&baseline.bank_ready));
  $('mg-welcome-next').textContent=available?'Continue to my first assessment →':'Open my dashboard →';
  $('mg-welcome-assessment-title').textContent=available?'Your first milestone: the baseline':'Your personal dashboard is ready';
  $('mg-welcome-assessment-copy').textContent=available
   ?'20 original multiple-choice questions, tailored to your assigned mathematics route. You will review the rules and start the timer yourself. Your answers create a starting point for personalised practice.'
   :'Your administrator is preparing the first assessment for your route. You can enter your dashboard now, and the baseline will appear once it is ready.';
  $('mg-welcome-milestone').textContent=available?'20 questions · one diagnostic':'Personalised route · first assessment pending';
  $('mg-welcome-new-password').value='';$('mg-welcome-confirm-password').value='';
  msg('');
  advance('welcome-password');
  show('student-onboarding-view');
  return true;
 }
 function showIntro(){msg('');advance('welcome-intro')}
 $('mg-welcome-skip').addEventListener('click',showIntro);
 $('mg-welcome-password-form').addEventListener('submit',async event=>{
  event.preventDefault();
  if(busy||!learner)return;
  const password=$('mg-welcome-new-password').value,confirmation=$('mg-welcome-confirm-password').value;
  if(password.length<12||password.length>256){msg('Choose a unique password with at least 12 characters.',true);return}
  if(password!==confirmation){msg('The passwords do not match yet.',true);return}
  const button=$('mg-welcome-save');busy=true;button.disabled=true;
  try{
   const {data:{user},error:identityError}=await sb.auth.getUser();
   if(identityError||!user||user.id!==learner.id||!user.email_confirmed_at)throw Error('Please verify your email again.');
   const {error}=await sb.auth.updateUser({password});
   if(error)throw error;
   $('mg-welcome-new-password').value='';$('mg-welcome-confirm-password').value='';
   showIntro();
  }catch(error){msg(error.message||'Could not save your password. You can skip this step and set it later.',true)}
  finally{busy=false;button.disabled=false}
 });
 $('mg-welcome-next').addEventListener('click',async()=>{
  if(busy||!learner)return;
  busy=true;const button=$('mg-welcome-next');button.disabled=true;msg('Opening your personal learning journey…');
  try{
   const {data:{user},error:identityError}=await sb.auth.getUser();
   if(identityError||!user||user.id!==learner.id)throw Error('Your secure session needs to be refreshed.');
   const {data,error}=await sb.rpc('grove_student_welcome_complete');
   if(error||data!==true)throw Error(error?.message||'Your welcome could not be saved. Please try again.');
   await continueToDashboard();
  }catch(error){msg(error.message||'Unable to continue right now.',true)}
  finally{busy=false;button.disabled=false}
 });
 return{maybeShow};
}
