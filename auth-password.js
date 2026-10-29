/* MathsGrove optional password access. Passwords are handled only by Supabase Auth. */
export function initPasswordAccess(sb,{show,boot}){
 const $=id=>document.getElementById(id);
 const note=(id,value,error=false)=>{const e=$(id);e.textContent=String(value||'');e.classList.toggle('is-error',error)};
 const validEmail=email=>/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)&&email.length<=250;
 let recoveryMode=/(?:^|[&#?])type=recovery(?:[&#]|$)/.test(location.hash+location.search);
 const accountRequested=new URLSearchParams(location.search).has('security');
 function selectMode(mode){
  const email=mode==='email',forgot=mode==='forgot';
  $('invite-login-form').hidden=!email;
  $('password-login-form').hidden=email||forgot;
  $('password-recover-form').hidden=!forgot;
  for(const id of ['auth-email-tab','auth-password-tab']){
   const b=$(id),active=(id==='auth-email-tab'&&email)||(id==='auth-password-tab'&&!email);
   b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active));
  }
  if(!email&&!forgot&&!$('password-email').value)$('password-email').value=$('access-email').value.trim();
  if(forgot&&!$('password-recover-email').value)$('password-recover-email').value=$('password-email').value.trim()||$('access-email').value.trim();
  note('login-message','');
 }
 $('auth-email-tab').addEventListener('click',()=>selectMode('email'));
 $('auth-password-tab').addEventListener('click',()=>selectMode('password'));
 $('password-forgot').addEventListener('click',()=>selectMode('forgot'));
 $('password-recover-back').addEventListener('click',()=>selectMode('password'));
 $('password-login-form').addEventListener('submit',async e=>{
  e.preventDefault();const button=$('password-submit');
  const email=$('password-email').value.trim().toLowerCase(),password=$('password-input').value;
  if(!validEmail(email)||!password){note('login-message','Enter your registered email and password.',true);return}
  button.disabled=true;
  try{
   if(!sb)throw Error('Private sign-in is not available.');
   const {error}=await sb.auth.signInWithPassword({email,password});
   if(error)throw error;
   $('password-input').value='';
   await boot();
  }catch{
   note('login-message','Email or password not recognised. First-time users should sign in with their secure email link, then create a password.',true);
  }finally{button.disabled=false}
 });
 $('password-recover-form').addEventListener('submit',async e=>{
  e.preventDefault();const button=$('password-recover-send'),email=$('password-recover-email').value.trim().toLowerCase();
  if(!validEmail(email)){note('login-message','Enter a valid email address.',true);return}
  button.disabled=true;
  try{
   if(!sb)throw Error('Private sign-in is not available.');
   const {error}=await sb.auth.resetPasswordForEmail(email,{redirectTo:new URL('./portal.html',location.href).href});
   if(error)throw error;
   note('login-message','If this email has a MathsGrove account, a secure recovery link has been sent. Check your inbox and spam folder.');
  }catch(err){note('login-message',err?.message||'Could not request a recovery link. Try again shortly.',true)}
  finally{button.disabled=false}
 });
 $('security-password-form').addEventListener('submit',async e=>{
  e.preventDefault();const button=$('security-save');
  const password=$('security-new-password').value,confirm=$('security-confirm-password').value;
  if(password.length<12||password.length>256){note('security-message','Use a unique password of at least 12 characters.',true);return}
  if(password!==confirm){note('security-message','The two passwords do not match.',true);return}
  button.disabled=true;
  try{
   if(!sb)throw Error('Secure account access is unavailable.');
   const {data,error:verifiedError}=await sb.auth.getUser();
   if(verifiedError||!data?.user?.email_confirmed_at)throw Error('Verify your email link before setting a password.');
   const {data:members,error:membershipError}=await sb.from('memberships').select('member_role').eq('user_id',data.user.id).limit(1);
   if(membershipError)throw membershipError;
   let authorized=(members||[]).length>0;
   if(!authorized){const linked=await sb.rpc('get_my_learner_views');authorized=!linked.error&&(linked.data?.learners?.length||0)>0}
   if(!authorized)throw Error('No authorised MathsGrove account is assigned to this email. Contact your administrator.');
   const {error}=await sb.auth.updateUser({password});
   if(error)throw error;
   $('security-new-password').value='';$('security-confirm-password').value='';
   note('security-message','Password saved. Next time, sign in with your registered email and password or use a secure email link.');
  }catch(err){note('security-message',err?.message||'Could not update your password. Use a new recovery link.',true)}
  finally{button.disabled=false}
 });
 if(sb)sb.auth.onAuthStateChange(event=>{
  if(event==='PASSWORD_RECOVERY'){recoveryMode=true;Promise.resolve().then(()=>boot())}
 });
 return {
  wantsSecurityView(){return accountRequested||recoveryMode},
  showForUser(email){
   $('security-account-email').textContent=email||'Verified account';
   show('security-view');
   if(recoveryMode)note('security-message','Email recovery verified. Choose a new password for your authorised account.');
  }
 };
}