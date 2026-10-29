const token=new URLSearchParams(location.hash.slice(1)).get('token');const $=id=>document.getElementById(id);
const endpoint='https://nwakgkxytovprrrwyahs.supabase.co/functions/v1/grove-student-export';
const message=(s,error=false)=>{const e=$('progress');e.textContent=s;e.style.color=error?'#a12d32':'#325e48'};
async function call(action){const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action,token}),credentials:'omit',referrerPolicy:'no-referrer'});const data=await response.json().catch(()=>({}));if(!response.ok||!data.ok)throw Error(data.error||'Archive unavailable');return data}
if(!token||!/^[a-f\d]{64}$/.test(token)){$('download').disabled=true;message('This link is incomplete or invalid. Request a fresh archive email from your administrator.',true)}
$('download').addEventListener('click',async()=>{const btn=$('download');btn.disabled=true;message('Securing and transferring your complete archive…');
 try{const r=await call('download');const response=await fetch(r.url,{credentials:'omit',referrerPolicy:'no-referrer'});if(!response.ok)throw Error('Archive transfer failed');
 const zip=await response.blob();if(!zip.size)throw Error('The archive is empty');
 const url=URL.createObjectURL(zip),link=document.createElement('a');link.href=url;link.download='MathsGrove-learning-archive.zip';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);
 message('The ZIP was downloaded. Verify you can open it before confirming.');$('confirm-wrap').hidden=false;
 }catch(e){message(e.message||'Could not download your archive',true)}finally{btn.disabled=false}});
$('confirm').addEventListener('click',async()=>{if(!confirm('Confirm only after saving and opening your ZIP archive. This does not delete your account.'))return;
 const btn=$('confirm');btn.disabled=true;try{await call('confirm');message('Archive download acknowledged. Your administrator can now continue the protected removal process.');$('confirm-wrap').hidden=true;$('download').disabled=true;}catch(e){message(e.message||'Confirmation failed',true);btn.disabled=false}});
