import { createClient } from 'npm:@supabase/supabase-js@2.57.0';
import { zipSync, strToU8 } from 'npm:fflate@0.8.2';

const site='https://mathora-mathematics.github.io';
const cors={'Access-Control-Allow-Origin':site,'Access-Control-Allow-Headers':'authorization, apikey, content-type, x-client-info','Access-Control-Allow-Methods':'POST, OPTIONS','Vary':'Origin'};
const send=(obj:unknown,status=200)=>Response.json(obj,{status,headers:{...cors,'Cache-Control':'no-store'}});
const uri=Deno.env.get('SUPABASE_URL')||'';
function defaultKey(name:string):string{
 try{return JSON.parse(Deno.env.get(name)||'{}').default||''}catch{return ''}
}
const serviceKey=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')||defaultKey('SUPABASE_SECRET_KEYS');
const publishKey=Deno.env.get('SUPABASE_ANON_KEY')||defaultKey('SUPABASE_PUBLISHABLE_KEYS');
function client(key:string){return createClient(uri,key,{auth:{persistSession:false,autoRefreshToken:false}})}
const hex=(bytes:Uint8Array)=>Array.from(bytes,b=>b.toString(16).padStart(2,'0')).join('');
const hash=async(s:string)=>hex(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s))));
const title=(s:string)=>String(s).replace(/[^a-zA-Z0-9._-]/g,'_').slice(0,110);
const err=(e:unknown)=>e instanceof Error?e.message:String(e);
const maxArchiveBytes=48*1024*1024;

async function handle(req:Request):Promise<Response>{
 if(req.method==='OPTIONS')return new Response(null,{headers:cors});
 if(req.method!=='POST')return send({error:'Use POST'},405);
 const origin=req.headers.get('origin');if(origin&&origin!==site)return send({error:'Origin not authorised'},403);
 if(!uri||!serviceKey||!publishKey)return send({error:'Archive service configuration unavailable'},503);
 const input=await req.json().catch(()=>null);
 const action=input?.action;
 const admin=client(serviceKey);
 if(action==='health')return send({available:Boolean(Deno.env.get('RESEND_API_KEY')&&Deno.env.get('MATHSGROVE_EXPORT_FROM'))});
 if(action==='prepare'){
  // Check sending configuration before mutating or queuing any student records.
  const resendKey=Deno.env.get('RESEND_API_KEY'),from=Deno.env.get('MATHSGROVE_EXPORT_FROM');
  if(!resendKey||!from)return send({error:'Archive email sender is not configured. No student has been changed.'},503);
  const authHeader=req.headers.get('Authorization')||'';
  const bearer=authHeader.startsWith('Bearer ')?authHeader.slice(7):'';
  if(!bearer)return send({error:'Administrator sign-in required'},401);
  const actor=client(publishKey);
  const {data:{user},error:authError}=await actor.auth.getUser(bearer);
  if(authError||!user?.email_confirmed_at)return send({error:'Verified administrator session required'},401);
  const org=input?.orgId,student=input?.studentId;
  if(typeof org!=='string'||typeof student!=='string'||!/^[\da-f-]{36}$/i.test(org)||!/^[\da-f-]{36}$/i.test(student))return send({error:'Invalid student selection'},400);
  const {data:roles,error:roleError}=await admin.from('memberships').select('user_id').eq('org_id',org).eq('user_id',user.id).eq('member_role','admin').limit(1);
  if(roleError||!roles?.length)return send({error:'MathsGrove administrator role required'},403);
  const {data:member,error:memberError}=await admin.from('memberships').select('user_id').eq('org_id',org).eq('user_id',student).eq('member_role','student').limit(1);
  if(memberError||!member?.length)return send({error:'Student is not enrolled in your organisation'},403);
  const {data:studentUser,error:studentError}=await admin.auth.admin.getUserById(student);
  if(studentError||!studentUser?.user?.email||!studentUser.user.email_confirmed_at)return send({error:'Student must have a verified address'},409);
  // This user-scoped RPC checks staff membership and prevents shared-account deletion.
  const scoped=client(publishKey);
  const {data:authInfo,error:scopeError}=await scoped.auth.getUser(bearer);
  if(scopeError||authInfo.user?.id!==user.id)return send({error:'Session not authorised'},403);
  const userDb=createClient(uri,publishKey,{
   global:{headers:{Authorization:'Bearer '+bearer}},
   auth:{persistSession:false,autoRefreshToken:false}
  });
  const {data:jobId,error:jobError}=await userDb.rpc('grove_offboarding_prepare',{p_org:org,p_student:student});
  // Do not assume a service-role call populates auth.uid(); use an explicitly user-scoped RPC call when needed.
  if(jobError||!jobId)return send({error:'The server could not create the export request. No data was erased.',detail:jobError?.message},409);
  const failJob=async(message:string,status=503):Promise<Response>=>{
   try{await admin.rpc('grove_export_mark_failed',{p_job:jobId,p_message:message})}catch{/* original failure remains authoritative */}
   return send({error:message},status);
  };
  const {data:roster,error:rosterError}=await userDb.rpc('grove_offboarding_list',{p_org:org});
  if(rosterError)return await failJob('Cannot check the private archive queue');
  const entry=(roster?.students||[]).find((x:{student_id:string})=>x.student_id===student);
  if(!entry||entry.job_id!==jobId)return send({error:'Export request mismatch'},409);
  if(entry.status==='emailed'||entry.status==='downloaded')return send({ok:true,status:entry.status});
  if(entry.status!=='requested')return send({error:'An export is already being prepared. Try later.'},409);
  const {data:dataset,error:exportError}=await admin.rpc('grove_offboarding_export',{p_org:org,p_student:student});
  if(exportError||!dataset)return await failJob('Could not complete the private data export. No data was erased.');
  const zip:Record<string,Uint8Array>={};
  zip['MathsGrove-archive-README.txt']=strToU8('MathsGrove personal academic export. The file data.json contains the account academic information, assessment attempts, answered questions, timing, released feedback and report history. The evidence/ directory contains uploaded workings. Passwords and other students\' data are excluded. Work that was never saved or uploaded, such as browser-only scratchpads, cannot be recovered.\n');
  zip['data.json']=strToU8(JSON.stringify(dataset,null,2));
  let total=zip['data.json'].length,files=0;
  for(const [i,item] of (dataset.uploaded_files||[]).entries()){
   const path=item.storage_path;
   if(typeof path!=='string'||!path.startsWith(org+'/'+student+'/'))return await failJob('Archive contains an invalid uploaded-file reference; no email sent.',409);
   const result=await admin.storage.from('student-work').download(path);
   if(result.error||!result.data)return await failJob('An uploaded working file could not be retrieved; no email sent.');
   const bytes=new Uint8Array(await result.data.arrayBuffer());
   total+=bytes.length;if(total>maxArchiveBytes)return await failJob('The complete student archive exceeds the safe export size limit; manual secure transfer is required.',413);
   zip['evidence/'+String(i+1).padStart(3,'0')+'-'+title(item.original_name||'working')]=bytes;files++;
  }
  const zipped=zipSync(zip,{level:4});
  if(zipped.length>maxArchiveBytes)return await failJob('Archive is larger than the current safe limit; use assisted export.',413);
  const archivePath=org+'/'+student+'/'+jobId+'.zip';
  const upload=await admin.storage.from('grove-student-exports').upload(archivePath,zipped,{contentType:'application/zip',upsert:false});
  if(upload.error&&!upload.error.message.toLowerCase().includes('already exists'))return await failJob('Secure archive storage failed; no email sent.');
  const token=hex(crypto.getRandomValues(new Uint8Array(32))),tokenHash=await hash(token);
  const expires=new Date(Date.now()+72*3600*1000);
  const link='https://mathora-mathematics.github.io/Mathora/export.html#token='+token;
  const email=await fetch('https://api.resend.com/emails',{
   method:'POST',headers:{'Authorization':'Bearer '+resendKey,'Content-Type':'application/json','Idempotency-Key':String(jobId)},
   body:JSON.stringify({from,to:[studentUser.user.email],subject:'Your MathsGrove learning archive is ready',
    text:'Your MathsGrove administrator has prepared a private archive of your saved work, assessments and feedback. Open this secure link within 72 hours to save it: '+link+'\n\nAfter saving, confirm the download on the page. If you did not request this, contact your MathsGrove administrator.'})
  });
  const receipt=await email.json().catch(()=>({}));
  if(!email.ok||!receipt.id)return await failJob('The email provider did not accept the archive delivery. No student was erased.');
  const marked=await admin.rpc('grove_export_email_record',{p_job:jobId,p_path:archivePath,p_token_hash:tokenHash,p_message_id:receipt.id,p_expires:expires.toISOString()});
  if(marked.error)return await failJob('An email was accepted but tracking was not confirmed; request a fresh archive link.');
  return send({ok:true,status:'emailed',uploads:files,expires_at:expires.toISOString()});
 }
 if(action==='erase'){
  const bearer=(req.headers.get('Authorization')||'').replace(/^Bearer /,'');
  if(!bearer)return send({error:'Administrator sign-in required'},401);
  const actor=client(publishKey);
  const {data:{user},error:authError}=await actor.auth.getUser(bearer);
  if(authError||!user?.email_confirmed_at)return send({error:'Verified administrator required'},401);
  const org=input?.orgId,student=input?.studentId,confirmEmail=input?.confirmEmail;
  if(typeof org!=='string'||typeof student!=='string'||typeof confirmEmail!=='string')return send({error:'Invalid student selection'},400);
  const {data:roles}=await admin.from('memberships').select('user_id').eq('org_id',org).eq('user_id',user.id).eq('member_role','admin').limit(1);
  if(!roles?.length)return send({error:'Only the MathsGrove organisation administrator may remove accounts'},403);
  const {data:subject,error:subjectError}=await admin.auth.admin.getUserById(student);
  if(subjectError||!subject?.user?.email)return send({error:'Student account not found; escalate to administrator review'},409);
  if(subject.user.id===user.id||subject.user.email.toLowerCase()!==confirmEmail.trim().toLowerCase())return send({error:'Confirmation does not match the selected student'},409);
  const userDb=createClient(uri,publishKey,{global:{headers:{Authorization:'Bearer '+bearer}},auth:{persistSession:false,autoRefreshToken:false}});
  const {data:roster,error:rosterError}=await userDb.rpc('grove_offboarding_list',{p_org:org});
  const entry=(roster?.students||[]).find((r:{student_id:string})=>r.student_id===student);
  if(rosterError||!entry||entry.status!=='downloaded'||!entry.job_id)return send({error:'The student must first confirm their complete archive download'},409);
  const {data:exportData,error:exportError}=await admin.rpc('grove_offboarding_export',{p_org:org,p_student:student});
  if(exportError||!exportData)return send({error:'Cannot verify the student archive before removal'},503);
  // Collect all attached work, including orphan objects belonging to this specific learner prefix.
  const owned=new Set<string>();
  for(const file of exportData.uploaded_files||[]){
   const path=file.storage_path;
   if(typeof path!=='string'||!path.startsWith(org+'/'+student+'/'))return send({error:'Unsafe file ownership found; removal cancelled'},409);
   owned.add(path);
  }
  async function gather(prefix:string,depth=0):Promise<void>{
   if(depth>6)throw Error('Student storage structure requires manual review');
   for(let offset=0;offset<=5000;offset+=100){
    const {data:objects,error}=await admin.storage.from('student-work').list(prefix,{limit:100,offset});
    if(error)throw error;
    const found=objects||[];
    for(const item of found){
     const path=prefix+'/'+item.name;
     if(item.id)owned.add(path);
     else await gather(path,depth+1);
    }
    if(found.length<100)return;
   }
   throw Error('Too many student files; manual export required');
  }
  try{await gather(org+'/'+student)}catch{return send({error:'Could not safely enumerate all student files. No removal started.'},503)}
  const {data:job,error:beginError}=await admin.rpc('grove_offboarding_begin_removal',{p_job:entry.job_id});
  if(beginError||job?.student_id!==student||job?.org_id!==org)return send({error:'Removal permission or download confirmation failed'},409);
  // Delete only the verified learner's original files, never content bank or other learners' work.
  const paths=[...owned];
  for(let i=0;i<paths.length;i+=100){
   const {error}=await admin.storage.from('student-work').remove(paths.slice(i,i+100));
   if(error)return send({error:'Storage cleanup failed; specialist review is required before continuing.'},503);
  }
  const {error:recordsError}=await admin.rpc('grove_offboarding_remove_records',{p_job:entry.job_id});
  if(recordsError)return send({error:'Database cleanup could not finish; specialist review required.'},503);
  const deleted=await admin.auth.admin.deleteUser(student,false);
  if(deleted.error)return send({error:'Account authentication removal requires manual review.'},503);
  // A copy was acknowledged by the learner; remove the temporary server ZIP.
  const {data:oldArchives,error:listError}=await admin.storage.from('grove-student-exports').list(org+'/'+student,{limit:1000});
  if(listError)return send({error:'Student account removed; archive cleanup requires manual review.'},503);
  const archivePaths=(oldArchives||[]).filter(a=>a.id).map(a=>org+'/'+student+'/'+a.name);
  if(!archivePaths.includes(job.archive_path))archivePaths.push(job.archive_path);
  for(let i=0;i<archivePaths.length;i+=100){
   const {error:zipError}=await admin.storage.from('grove-student-exports').remove(archivePaths.slice(i,i+100));
   if(zipError)return send({error:'Student account removed; temporary archive cleanup needs administrator attention.'},503);
  }
  const {error:finishError}=await admin.rpc('grove_offboarding_record_completion',{p_job:entry.job_id});
  if(finishError)return send({error:'Student account removed; final audit update requires review.'},503);
  return send({ok:true,status:'purged'});
 }
 if(action==='download'||action==='confirm'){
  const token=input?.token;
  if(typeof token!=='string'||!/^[a-f0-9]{64}$/.test(token))return send({error:'Invalid or expired archive link'},403);
  const tokenHash=await hash(token);
  const {data:result,error}=await admin.rpc('grove_export_download_lookup',{p_hash:tokenHash});
  if(error||!result?.ok||typeof result.archive_path!=='string')return send({error:'Archive link is no longer available'},403);
  if(action==='confirm'){
   const {data:confirmed,error:confirmError}=await admin.rpc('grove_export_confirm_download',{p_hash:tokenHash});
   if(confirmError||!confirmed)return send({error:'Unable to confirm archive access'},503);
   return send({ok:true,confirmed:true});
  }
  const {data:signed,error:signError}=await admin.storage.from('grove-student-exports').createSignedUrl(result.archive_path,90,{download:'MathsGrove-learning-archive.zip'});
  if(signError||!signed?.signedUrl)return send({error:'Archive cannot be downloaded at present'},503);
  return send({ok:true,url:signed.signedUrl});
 }
 return send({error:'Unknown request'},400);
}
Deno.serve(req=>handle(req).catch(e=>{console.error('MathsGrove archive operation failed',err(e));return send({error:'Archive service failed; no records were removed.'},503)}));
