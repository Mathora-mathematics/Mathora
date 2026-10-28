// Supabase Edge Function: invitations
// Deploy with supabase functions deploy invitations --no-verify-jwt.
// JWT validation is performed manually using auth.getUser(token).
// NEVER embed the service-role key in browser code.
import {createClient} from 'npm:@supabase/supabase-js@2';
const url=Deno.env.get('SUPABASE_URL')||'';
const secret=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')||'';
const origins=(Deno.env.get('APP_ORIGINS')||'').split(',').map(s=>s.trim()).filter(Boolean);
const admin=createClient(url,secret,{auth:{persistSession:false,autoRefreshToken:false}});
const encode=new TextEncoder();
function codeHash(code){return crypto.subtle.digest('SHA-256',encode.encode(code)).then(x=>[...new Uint8Array(x)].map(y=>y.toString(16).padStart(2,'0')).join(''))}
function makeCode(){const b=crypto.getRandomValues(new Uint8Array(12));const x=[...b].map(y=>y.toString(16).padStart(2,'0')).join('').toUpperCase();return 'MG-'+x.slice(0,8)+'-'+x.slice(8,16)+'-'+x.slice(16,24)}
function json(body,status=200,origin=''){return new Response(status===204?null:JSON.stringify(body),{status,headers:{'Content-Type':'application/json','Cache-Control':'no-store','Vary':'Origin',...(origin?{'Access-Control-Allow-Origin':origin}:{}),'Access-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type','Access-Control-Allow-Methods':'POST,OPTIONS'}})}
Deno.serve(async req=>{
 const origin=req.headers.get('origin')||'';
 const allowed=!origin||origins.includes(origin);
 if(req.method==='OPTIONS')return allowed?json({},204,origin):json({error:'Origin not allowed'},403);
 if(!allowed)return json({error:'Origin not allowed'},403);
 if(req.method!=='POST')return json({error:'Method not allowed'},405,origin);
 try{
  if(!url||!secret||!origins.length)return json({error:'Invitation service not configured'},503,origin);
  const jwt=req.headers.get('authorization')?.replace(/^Bearer\s+/i,'')||'';
  if(!jwt)return json({error:'Sign in first'},401,origin);
  const {data:auth,error:authError}=await admin.auth.getUser(jwt);
  const user=auth?.user;
  if(authError||!user?.id||!user.email_confirmed_at)return json({error:'Verified session required'},401,origin);
  const body=await req.json().catch(()=>({}));
  if(body.action==='issue'){
   const email=String(body.email||'').trim().toLowerCase();
   const orgId=String(body.orgId||'');
   if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)||email.length>250||!/^[a-f0-9-]{36}$/i.test(orgId))return json({error:'Valid student email and organisation required'},400,origin);
   const {data:role,error:roleErr}=await admin.from('memberships').select('member_role').eq('org_id',orgId).eq('user_id',user.id).maybeSingle();
   if(roleErr||!['admin','partner'].includes(role?.member_role))return json({error:'Not authorised for this organisation'},403,origin);
   const code=makeCode(),hash=await codeHash(code);
   const {error}=await admin.from('invitations').insert({org_id:orgId,email,code_hash:hash,issued_by:user.id});
   if(error)return json({error:'Unable to create invitation'},500,origin);
   return json({ok:true,code},200,origin);
  }
  if(body.action==='redeem'){
   const code=String(body.code||'').trim().toUpperCase();
   if(!/^MG-[0-9A-F]{8}-[0-9A-F]{8}-[0-9A-F]{8}$/.test(code))return json({error:'Invalid invitation'},400,origin);
   const hash=await codeHash(code);
   const {data:invite,error}=await admin.from('invitations').select('id,org_id,email,expires_at,redeemed_at').eq('code_hash',hash).maybeSingle();
   if(error||!invite||invite.redeemed_at||new Date(invite.expires_at)<=new Date()||invite.email!==String(user.email).toLowerCase())return json({error:'Invalid or expired invitation for this email'},403,origin);
   const {data:existing,error:existingErr}=await admin.from('memberships').select('org_id,member_role').eq('user_id',user.id);
   if(existingErr)return json({error:'Could not check memberships'},500,origin);
   if(existing?.some(m=>m.member_role==='student'&&m.org_id!==invite.org_id))return json({error:'This student account is enrolled with another partner'},409,origin);
   const {data:claimed,error:claimErr}=await admin.from('invitations').update({redeemed_at:new Date().toISOString(),redeemed_by:user.id}).eq('id',invite.id).is('redeemed_at',null).select('id').maybeSingle();
   if(claimErr||!claimed)return json({error:'Invitation has already been used'},409,origin);
   const {error:membershipErr}=await admin.from('memberships').upsert({org_id:invite.org_id,user_id:user.id,member_role:'student'},{onConflict:'org_id,user_id'});
   if(membershipErr)return json({error:'Enrolment could not be completed; contact your tutor for a replacement invitation'},500,origin);
   return json({ok:true},200,origin);
  }
  return json({error:'Unknown request'},400,origin);
 }catch(_err){return json({error:'Unexpected invitation service error'},500,origin)}
});
