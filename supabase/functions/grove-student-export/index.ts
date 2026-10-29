import { createClient } from 'npm:@supabase/supabase-js@2.57.0';
import { zipSync, strToU8 } from 'npm:fflate@0.8.2';

const site='https://mathora-mathematics.github.io';
const cors={'Access-Control-Allow-Origin':site,'Access-Control-Allow-Headers':'authorization, apikey, content-type, x-client-info','Access-Control-Allow-Methods':'POST, OPTIONS','Vary':'Origin'};
const send=(obj:unknown,status=200)=>Response.json(obj,{status,headers:{...cors,'Cache-Control':'no-store'}});
const uri=Deno.env.get('SUPABASE_URL')||'';
const serviceKey=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')||'';
const publishKey=Deno.env.get('SUPABASE_ANON_KEY')||'';
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
  const {data:jobId,error:jobError}=await admin.rpc('grove_offboarding_prepare',{p_org:org,p_student:student});
  // Do not assume a service-role call populates auth.uid(); use an explicitly user-scoped RPC call when needed.
  if(jobError||!jobId)return send({error:'The server could not create the export request. No data was erased.',detail:jobError?.message},409);
  const {data:jobs,error:jError}=await admin.schema('private').from('grove_offboarding_jobs').select('id,status,recipient_email').eq('id',jobId).single();
  if(jError||!jobs)return send({error:'Archive request unavailable'},409);
  if(jobs.status==='emailed'||jobs.status==='downloaded')return send({ok:true,status:jobs.status});
  if(jobs.status!=='requested')return send({error:'An export is already being prepared. Try later.'},409);
  const {data:dataset,error:exportError}=await admin.rpc('grove_offboarding_export',{p_org:org,p_student:student});
  if(exportError||!dataset)return send({error:'Could not complete the private data export. No data was erased.',detail:exportError?.message},503);
  const zip:Record<string,Uint8Array>={};
  zip['MathsGrove-archive-README.txt']=strToU8('MathsGrove personal academic export. The file data.json contains the account academic information, assessment attempts, answered questions, timing, released feedback and report history. The evidence/ directory contains uploaded workings. Passwords and other students\' data are excluded. Work that was never saved or uploaded, such as browser-only scratchpads, cannot be recovered.\n');
  zip['data.json']=strToU8(JSON.stringify(dataset,null,2));
  let total=zip['data.json'].length,files=0;
  for(const [i,item] of (dataset.uploaded_files||[]).entries()){
   const path=item.storage_path;
   if(typeof path!=='string'||!path.startsWith(org+'/'+student+'/'))return send({error:'Archive contains an invalid uploaded-file reference; no email sent.'},409);
   const result=await admin.storage.from('student-work').download(path);
   if(result.error||!result.data)return send({error:'An uploaded working file could not be retrieved; no email sent.'},503);
   const bytes=new Uint8Array(await result.data.arrayBuffer());
   total+=bytes.length;if(total>maxArchiveBytes)return send({error:'The complete student archive exceeds the safe email-export size limit. Manual secure transfer is required; nothing was erased.'},413);
   zip['evidence/'+String(i+1).padStart(3,'0')+'-'+title(item.original_name||'working')]=bytes;files++;
  }
  const zipped=zipSync(zip,{level:4});
  if(zipped.length>maxArchiveBytes)return send({error:'Archive is larger than the current safe limit; use assisted export.'},413);
  const archivePath=org+'/'+student+'/'+jobId+'.zip';
  const upload=await admin.storage.from('grove-student-exports').upload(archivePath,zipped,{contentType:'application/zip',upsert:false});
  if(upload.error&&!upload.error.message.toLowerCase().includes('already exists'))return send({error:'Secure archive storage failed; no email sent.'},503);
  const token=hex(crypto.getRandomValues(new Uint8Array(32))),tokenHash=await hash(token);
  const expires=new Date(Date.now()+72*3600*1000);
  const link='https://mathora-mathematics.github.io/Mathora/export.html#token='+token;
  const email=await fetch('https://api.resend.com/emails',{
   method:'POST',headers:{'Authorization':'Bearer '+resendKey,'Content-Type':'application/json','Idempotency-Key':String(jobId)},
   body:JSON.stringify({from,to:[studentUser.user.email],subject:'Your MathsGrove learning archive is ready',
    text:'Your MathsGrove administrator has prepared a private archive of your saved work, assessments and feedback. Open this secure link within 72 hours to save it: '+link+'\n\nAfter saving, confirm the download on the page. If you did not request this, contact your MathsGrove administrator.'})
  });
  const receipt=await email.json().catch(()=>({}));
  if(!email.ok||!receipt.id)return send({error:'The archive is stored privately, but email delivery was not accepted. No student was erased.'},503);
  const marked=await admin.rpc('grove_export_email_record',{p_job:jobId,p_path:archivePath,p_token_hash:tokenHash,p_message_id:receipt.id,p_expires:expires.toISOString()});
  if(marked.error)return send({error:'The email provider accepted the message, but tracking was not confirmed. Do not request removal yet.'},503);
  return send({ok:true,status:'emailed',uploads:files,expires_at:expires.toISOString()});
 }
 if(action==='download'||action==='confirm'){
  const token=input?.token;
  if(typeof token!=='string'||!/^[a-f0-9]{64}$/.test(token))return send({error:'Invalid or expired archive link'},403);
  const tokenHash=await hash(token);
  const {data:result,error}=await admin.rpc('grove_export_download_lookup',{p_hash:tokenHash});
  if(error||!result?.ok||typeof result.archive_path!=='string')return send({error:'Archive link is no longer available'},403);
  if(action==='confirm')return send({ok:true,confirmed:true});
  const {data:signed,error:signError}=await admin.storage.from('grove-student-exports').createSignedUrl(result.archive_path,90,{download:'MathsGrove-learning-archive.zip'});
  if(signError||!signed?.signedUrl)return send({error:'Archive cannot be downloaded at present'},503);
  return send({ok:true,url:signed.signedUrl});
 }
 return send({error:'Unknown request'},400);
}
Deno.serve(req=>handle(req).catch(e=>{console.error('MathsGrove archive operation failed',err(e));return send({error:'Archive service failed; no records were removed.'},503)}));
