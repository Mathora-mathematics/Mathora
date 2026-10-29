import {readFileSync,existsSync} from 'node:fs';
import assert from 'node:assert/strict';
const read=path=>{assert.ok(existsSync(path),'Missing '+path);return readFileSync(path,'utf8')};
const admin=read('studio.html'),studio=read('studio.js'),portal=read('portal.html'),portalJs=read('portal.js');
const family=read('family.html'),familyJs=read('family-access.js'),manager=read('access-management.js'),router=read('access-router.js');
const sql=read('supabase/UPGRADE_EMAIL_FAMILY_ACCESS.sql');
const workflow=read('.github/workflows/pages.yml');
for(const [name,html] of [['studio',admin],['portal',portal],['family',family]]){
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
 assert.equal(ids.length,new Set(ids).size,name+' has duplicate element IDs');
}
for(const id of ['invite-name','invite-email','invite-programme','invite-parent-email','invite-tutor-email','mg-linked-form','mg-linked-student','mg-linked-parent','mg-linked-tutor'])assert.ok(admin.includes('id="'+id+'"'),'Missing admin control '+id);
const recovery=portal.match(/<input id="access-code"[^>]*>/)?.[0]||'';
assert.ok(recovery&&!/\srequired(?:\s|>)/.test(recovery),'Student email login must not require a code');
assert.ok(portal.includes('id="role-view"')&&portal.includes('id="role-options"'),'Multi-role chooser missing');
assert.ok(portalJs.includes("getAccessChoices(state.members,linked.learners,linked.awaiting)"),'Secure linked-role router not connected');
assert.ok(family.includes('href="./portal.html"')&&!family.includes('id="fa-login-form"'),'Family must use the universal sign-in rather than another email form');
assert.ok(familyJs.includes("location.replace('./portal.html')"),'Unauthenticated family visits must return to single sign-in');
assert.ok(!familyJs.includes("signInWithOtp("),'Family must not send a separate magic link');
assert.ok(studio.indexOf('save_pending_student_setup')<studio.indexOf('set_pending_student_name')&&studio.indexOf('set_pending_student_name')<studio.indexOf('configure_learner_viewers'),'Admin enrolment order changed');
assert.ok(portalJs.includes("sb.rpc('claim_my_student_access')")&&portalJs.includes("sb.rpc('claim_my_learner_views')"),'Verified-email self-claim not wired');
assert.ok(familyJs.includes("sb.rpc('get_my_learner_views')"),'Role-filtered family RPC not used');
for(const forbidden of ["sb.from('attempts'","sb.from('answers'","sb.from('reviews'","sb.from('profiles'"])assert.ok(!familyJs.includes(forbidden),'Family app must not read '+forbidden+' directly');
for(const phrase of ["email_confirmed_at is not null","not private.is_partner(p_org)","e.tier='exam'","if v_row.view_role='tutor' then","a.status='marked'","update public.learner_view_invitations set revoked_at=now()","revoke all on public.learner_view_invitations,public.learner_view_links from public,anon,authenticated"])assert.ok(sql.includes(phrase),'Access control security invariant missing: '+phrase);
assert.ok(sql.trim().endsWith('commit;'),'Database migration must finish transaction');
for(const p of ['family.html','family-access.css','family-access.js','access-management.js','access-management.css','access-router.js','showcase-v3.js','experience-v4.js'])assert.ok(workflow.includes(p),'Published assets omit '+p);
assert.ok(router.includes('preferredSingleChoice')&&router.includes('getAccessChoices'),'Unified routing helpers missing');
console.log('MathsGrove access-flow regression checks: PASS (static; real Supabase integration remains separately required).');
