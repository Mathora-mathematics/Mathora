/* MathsGrove private working evidence — original whiteboard PNGs and student photos. */
export function createEvidenceWorkspace({db,kind,canvas,toolbar,photos,saveButton,status,list,getSession,getPosition}){
 const $=id=>document.getElementById(id);
 const board=window.MathsGroveBoard.setup({canvas,toolbar,onChange:()=>notify('Unsaved whiteboard changes — save your working before leaving.')});
 let contextKey='',meta=[],uploading=false,identity=null;
 const notify=(msg,error=false)=>{status.textContent=msg;status.classList.toggle('is-error',error)};
 const validTypes=new Map([['image/png','png'],['image/jpeg','jpg'],['image/webp','webp']]);
 async function who(){
  if(identity)return identity;
  const {data:{user},error}=await db.auth.getUser();
  if(error||!user)throw Error('Your secure sign-in has expired.');
  const {data:member,error:memberError}=await db.from('memberships').select('org_id').eq('user_id',user.id).eq('member_role','student').limit(1).single();
  if(memberError||!member)throw Error('An enrolled student account is required.');
  identity={uid:user.id,org:member.org_id};return identity;
 }
 async function upload(blob,filename,fileKind){
  if(uploading)throw Error('Another file is being saved. Please try again.');
  const session=getSession(),position=getPosition();
  if(!session||!position)throw Error('Open an assessment question before submitting working.');
  if(blob.size>5*1024*1024||!validTypes.has(blob.type))throw Error('Use a JPG, PNG or WebP image up to 5 MB.');
  uploading=true;saveButton.disabled=true;notify('Saving your working securely…');
  try{
   const {uid,org}=await who();
   const ext=validTypes.get(blob.type);
   const path=[org,uid,kind,session,position,'work',crypto.randomUUID()+'.'+ext].join('/');
   const {error:uploadError}=await db.storage.from('student-work').upload(path,blob,{contentType:blob.type,upsert:false});
   if(uploadError)throw uploadError;
   const {data,error}=await db.rpc('grove_save_work_evidence',{
    p_kind:kind,p_session:session,p_position:position,p_path:path,
    p_name:String(filename||'working').slice(0,160),p_file_kind:fileKind
   });
   if(error||!data?.ok)throw Error(error?.message||'Could not register this working file.');
   if(fileKind==='whiteboard')board.markSaved();
   await refresh();
   notify('Saved privately. Your examiner can review this working.');
   return true;
  }catch(e){notify('Could not save: '+e.message,true);throw e}
  finally{uploading=false;saveButton.disabled=false}
 }
 async function saveDrawing(){
  if(!board.isDirty())return true;
  const blob=await board.exportBlob();
  if(!blob)throw Error('Could not export the whiteboard.');
  await upload(blob,'Whiteboard working — question '+getPosition(),'whiteboard');
  return true;
 }
 async function flush(){
  if(uploading)throw Error('Wait for the photograph to finish uploading.');
  if(board.isDirty())await saveDrawing();
  return true;
 }
 async function refresh(){
  const session=getSession();
  if(!session){meta=[];list.replaceChildren();return}
  const {data,error}=await db.rpc('grove_my_work_evidence',{p_kind:kind,p_session:session});
  if(error)throw error;
  meta=Array.isArray(data?.files)?data.files:[];
  drawList();
 }
 function drawList(){
  list.replaceChildren();
  const files=meta.filter(e=>Number(e.position)===Number(getPosition()));
  if(!files.length){let empty=document.createElement('span');empty.textContent='No saved working for this question yet.';list.append(empty);return}
  for(const f of files){
   const item=document.createElement('span');item.className='mg-evidence-chip';
   item.textContent=(f.file_kind==='photo'?'📷 ':'✎ ')+(f.name||'Working saved');
   list.append(item);
  }
 }
 function switchQuestion(){
  const key=getSession()+':'+getPosition();
  if(contextKey!==key){contextKey=key;board.clear();notify('Use the whiteboard or attach a photograph. Working is saved to your private account.')}
  drawList();
 }
 saveButton.addEventListener('click',()=>void saveDrawing().catch(()=>{}));
 photos.addEventListener('change',async()=>{
  const selected=Array.from(photos.files||[]).slice(0,4);photos.value='';
  if(!selected.length)return;
  for(const file of selected){try{await upload(file,file.name,'photo')}catch{break}}
 });
 return {flush,refresh,switchQuestion,savedCount:()=>meta.filter(x=>Number(x.position)===Number(getPosition())).length,
 totalSaved:()=>meta.length,isDirty:()=>board.isDirty(),getAll:()=>meta};
}
