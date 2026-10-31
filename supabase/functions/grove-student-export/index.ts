import { makeStudentPdfs, type Evidence } from './archive-pdfs.ts';
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
const hashFile=async(bytes:Uint8Array)=>hex(new Uint8Array(await crypto.subtle.digest('SHA-256',new Uint8Array(bytes).buffer as ArrayBuffer)));
// JSONB object and row-array ordering can change without changing academic records.
function canonical(value:unknown):string{
 if(Array.isArray(value))return '['+value.map(canonical).sort().join(',')+']';
 if(value!==null&&typeof value==='object'){
  const obj=value as Record<string,unknown>;
  return '{'+Object.keys(obj).sort().map(k=>JSON.stringify(k)+':'+canonical(obj[k])).join(',')+'}';
 }
 return JSON.stringify(value);
}
async function sourceFingerprint(data:Record<string,unknown>,fileDigests:Record<string,string>):Promise<string>{
 const snapshot={...data};delete snapshot.exported_at;
 return hash(canonical({snapshot,fileDigests}));
}
const title=(s:string)=>String(s).replace(/[^a-zA-Z0-9._-]/g,'_').slice(0,110);
const err=(e:unknown)=>e instanceof Error?e.message:String(e);
const maxArchiveBytes=48*1024*1024;
async function fullStudentExport(admin:ReturnType<typeof client>,org:string,student:string){
 const [base,extra]=await Promise.all([
  admin.rpc('grove_offboarding_export',{p_org:org,p_student:student}),
  admin.rpc('grove_offboarding_extra',{p_org:org,p_student:student})
 ]);
 if(base.error||extra.error||!base.data||!extra.data)throw Error('Student export is incomplete. Nothing has been removed.');
 return {...base.data,...extra.data} as Record<string,any>;
}

async function handle(req:Request):Promise<Response>{
 if(req.method==='OPTIONS')return new Response(null,{headers:cors});
 if(req.method!=='POST')return send({error:'Use POST'},405);
 const origin=req.headers.get('origin');if(origin&&origin!==site)return send({error:'Origin not authorised'},403);
 if(!uri||!serviceKey||!publishKey)return send({error:'Archive service configuration unavailable'},503);
 const input=await req.json().catch(()=>null);
 const action=input?.action;
 const admin=client(serviceKey);
 if(action==='health')return send({available:true,method:'manual_zip_pdf',email_required:false});

 if(action==='prepare_manual'||action==='manual_download'){
  const authHeader=req.headers.get('Authorization')||'';
  const bearer=authHeader.startsWith('Bearer ')?authHeader.slice(7):'';
  if(!bearer)return send({error:'Administrator sign-in required'},401);
  const actor=client(publishKey);
  const {data:{user},error:authError}=await actor.auth.getUser(bearer);
  if(authError||!user?.email_confirmed_at)return send({error:'Verified administrator required'},401);
  const org=input?.orgId,student=input?.studentId;
  if(typeof org!=='string'||typeof student!=='string'||!/^[\da-f-]{36}$/i.test(org)||!/^[\da-f-]{36}$/i.test(student))
   return send({error:'Invalid student selection'},400);
  const {data:roles,error:roleError}=await admin.from('memberships').select('user_id')
   .eq('org_id',org).eq('user_id',user.id).eq('member_role','admin').limit(1);
  if(roleError||!roles?.length)return send({error:'MathsGrove administrator role required'},403);
  const {data:member,error:memberError}=await admin.from('memberships').select('user_id')
   .eq('org_id',org).eq('user_id',student).eq('member_role','student').limit(1);
  if(memberError||!member?.length||student===user.id)return send({error:'Only a single-role student account can be exported'},403);
  const {data:subject,error:subjectError}=await admin.auth.admin.getUserById(student);
  if(subjectError||!subject?.user?.email)return send({error:'Student account no longer exists'},409);
  const userDb=createClient(uri,publishKey,{
   global:{headers:{Authorization:'Bearer '+bearer}},
   auth:{persistSession:false,autoRefreshToken:false}
  });
  const getDetails=async()=>await userDb.rpc('grove_offboarding_manual_details',{p_org:org,p_student:student});
  const signed=async(path:string,checksum:string)=>{
   const {data:link,error}=await admin.storage.from('grove-student-exports')
    .createSignedUrl(path,90,{download:'MathsGrove-'+title(subject.user.email||'student')+'-complete-archive.zip'});
   if(error||!link?.signedUrl)throw Error('Unable to issue the private ZIP download link');
   return send({ok:true,downloadUrl:link.signedUrl,sha256:checksum,status:'ready_manual'});
  };
  const {data:existing,error:existingError}=await getDetails();
  if(existingError)return send({error:'Cannot inspect this student archive request'},503);
  if(existing?.status==='ready_manual'&&existing?.archive_path&&existing?.checksum)
   return await signed(existing.archive_path,existing.checksum);
  if(action==='manual_download')return send({error:'Create a new student ZIP first'},409);
  if(existing?.status==='downloaded')
   return send({error:'An archive has already been acknowledged for deletion. No new export will be created.'},409);
  if(existing?.status==='emailed')
   return send({error:'A previous email archive is pending. Contact support before changing its workflow.'},409);
  const {data:jobId,error:queueError}=await userDb.rpc('grove_offboarding_prepare',{p_org:org,p_student:student});
  if(queueError||!jobId)return send({error:'Could not prepare an administrator-controlled export'},409);
  const fail=async(reason:string,status=503)=>{
   await admin.rpc('grove_export_mark_failed',{p_job:jobId,p_message:reason});
   return send({error:reason+' No student records were deleted.'},status);
  };
  let dataset:Record<string,any>;
  try{dataset=await fullStudentExport(admin,org,student)}catch{return await fail('The complete student records could not be exported')}
  const zip:Record<string,Uint8Array>={};
  const evidence:Evidence[]=[];
  const paths=new Map<string,string>();
  const fileDigests:Record<string,string>={};
  const prefix=org+'/'+student+'/';
  for(const item of dataset.uploaded_files||[]){
   const filePath=item.storage_path;
   if(typeof filePath!=='string'||!filePath.startsWith(prefix))
    return await fail('An uploaded-file record does not belong to this student',409);
   paths.set(filePath,String(item.original_name||filePath.split('/').pop()||'working'));
  }
  async function gather(folder:string,depth=0):Promise<void>{
   if(depth>6)throw Error('Student files require manual archive review');
   for(let offset=0;offset<=2000;offset+=100){
    const {data:objects,error}=await admin.storage.from('student-work').list(folder,{limit:100,offset});
    if(error)throw error;
    const found=objects||[];
    for(const item of found){
     const next=folder+'/'+item.name;
     if(item.id&&!paths.has(next))paths.set(next,item.name);
     else if(!item.id)await gather(next,depth+1);
    }
    if(found.length<100)return;
   }
   throw Error('Student evidence count exceeds safe archive capacity');
  }
  try{await gather(org+'/'+student)}catch{return await fail('Could not verify every uploaded file')}
  let total=0,number=0;
  for(const [filePath,originalName] of paths.entries()){
   const {data:blob,error}=await admin.storage.from('student-work').download(filePath);
   if(error||!blob)return await fail('At least one original student working file could not be recovered');
   const bytes=new Uint8Array(await blob.arrayBuffer());
   fileDigests[filePath]=await hashFile(bytes);
   total+=bytes.byteLength;
   if(total>maxArchiveBytes)return await fail('Student evidence is larger than the standard ZIP limit',413);
   number++;
   const name=String(number).padStart(3,'0')+'-'+title(originalName);
   const mime=/\.png$/i.test(name)?'image/png':/\.jpe?g$/i.test(name)?'image/jpeg':(blob.type||'application/octet-stream');
   evidence.push({name,bytes,kind:mime});
   zip['Original_Submissions/'+name]=bytes;
  }
  let pdfs:Record<string,Uint8Array>;
  try{pdfs=await makeStudentPdfs(dataset,evidence)}
  catch{return await fail('The report PDF set could not be generated; no partial archive was released')}
  for(const [name,bytes] of Object.entries(pdfs)){zip['PDF_Reports/'+name]=bytes;total+=bytes.byteLength}
  if(total>maxArchiveBytes)return await fail('PDF reports and evidence exceed the standard ZIP capacity',413);
  // Remove private examiner-only keys and internal user identifiers from the portable copy.
  const safeData=JSON.parse(JSON.stringify(dataset,(key,value)=>{
   if(['staff_notes','correct_option','bank_id','download_token_hash','secret','raw_user_meta_data'].includes(key))return undefined;
   return value;
  }));
  zip['Complete_Data.json']=strToU8(JSON.stringify(safeData,null,2));
  zip['README.txt']=strToU8(
   'MathsGrove Complete Student Archive\n\nPDF_Reports contains printable PDF reports of programme, baseline, practice, papers and examiner feedback.\nOriginal_Submissions contains unchanged original student evidence. Supported JPEG and PNG images are also reproduced in the work overview PDF.\nComplete_Data.json contains all portable student-facing academic records. Passwords, unpublished bank keys and confidential staff-only notes are excluded.\n\nPlease confirm this ZIP opens and all expected work is present BEFORE using the permanent deletion option. The administrator is responsible for securely emailing the archive to the student if desired.\n');
  const zipped=zipSync(zip,{level:4});
  if(zipped.byteLength>maxArchiveBytes)return await fail('Complete ZIP exceeds the safe export size limit',413);
  const digest=await hashFile(zipped);
  const archivePath=org+'/'+student+'/'+jobId+'-manual.zip';
  const {error:uploadError}=await admin.storage.from('grove-student-exports')
   .upload(archivePath,zipped,{contentType:'application/zip',upsert:true});
  if(uploadError)return await fail('The private archive could not be stored');
  const snapshotDigest=await sourceFingerprint(dataset,fileDigests);
  const {error:readyError}=await admin.rpc('grove_offboarding_mark_manual_ready_v2',{
   p_job:jobId,p_path:archivePath,p_checksum:digest,p_fingerprint:snapshotDigest
  });
  if(readyError)return await fail('The archive could not be marked ready for administrator download');
  return await signed(archivePath,digest);
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
  if(rosterError||!entry||entry.status!=='downloaded'||!entry.job_id)return send({error:'Download the ZIP, verify its contents, and confirm you saved it before deletion'},409);
  let exportData:Record<string,any>;
  try{exportData=await fullStudentExport(admin,org,student)}catch{return send({error:'Cannot verify complete records before removal'},503)}
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
  // Check that every saved response, grade, comment and original file is still
  // identical to the ZIP before permitting any destructive operation.
  const currentFileDigests:Record<string,string>={};
  for(const path of [...owned].sort()){
   const {data:blob,error:fileError}=await admin.storage.from('student-work').download(path);
   if(fileError||!blob)return send({error:'Cannot recheck all original files. No removal started.'},503);
   currentFileDigests[path]=await hashFile(new Uint8Array(await blob.arrayBuffer()));
  }
  const currentFingerprint=await sourceFingerprint(exportData,currentFileDigests);
  const {data:fresh,error:freshError}=await admin.rpc('grove_offboarding_verify_source',{
   p_job:entry.job_id,p_fingerprint:currentFingerprint
  });
  if(freshError)return send({error:'Could not confirm the archive is current. No removal started.'},503);
  if(fresh!==true)return send({
   error:'New or changed student work was found since the ZIP was downloaded. No data was deleted. Generate, save and check a fresh ZIP before removing this student.',
   code:'ARCHIVE_STALE'
  },409);
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
  // The administrator confirmed saving the PDF archive; remove the server's temporary ZIP.
  const {data:oldArchives,error:listError}=await admin.storage.from('grove-student-exports').list(org+'/'+student,{limit:1000});
  if(listError)return send({error:'Student account removed; archive cleanup requires manual review.'},503);
  const archivePaths=(oldArchives||[]).filter(a=>a.id).map(a=>org+'/'+student+'/'+a.name);
  if(!archivePaths.includes(job.archive_path))archivePaths.push(job.archive_path);
  for(let i=0;i<archivePaths.length;i+=100){
   const {error:zipError}=await admin.storage.from('grove-student-exports').remove(archivePaths.slice(i,i+100));
   if(zipError)return send({error:'Student account removed; temporary archive cleanup needs administrator attention.'},503);
  }
  const {data:verifiedCleanup,error:verifyError}=await admin.rpc('grove_offboarding_verify_cleanup',{p_job:entry.job_id});
  if(verifyError||verifiedCleanup!==true)
   return send({error:'Student account cleanup is incomplete. The administrator must investigate before this removal can be marked complete.'},503);
  const {error:finishError}=await admin.rpc('grove_offboarding_record_completion',{p_job:entry.job_id});
  if(finishError)return send({error:'Student account removed; final audit update requires review.'},503);
  return send({ok:true,status:'purged'});
 }
 return send({error:'Unknown request'},400);
}
Deno.serve(req=>handle(req).catch(e=>{console.error('MathsGrove archive operation failed',err(e));return send({error:'Archive service failed; no records were removed.'},503)}));
