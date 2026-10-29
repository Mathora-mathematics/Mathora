import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const html=readFileSync('portal.html','utf8');
const source=readFileSync('auth-password.js','utf8');
const portal=readFileSync('portal.js','utf8');
const assets=readFileSync('.github/workflows/pages.yml','utf8');
for(const id of [
 'auth-email-tab','auth-password-tab','invite-login-form','password-login-form','password-recover-form',
 'password-email','password-input','password-recover-email','password-forgot','security-view',
 'security-password-form','security-new-password','security-confirm-password','security-account-email','security-message'
]) assert.ok(html.includes('id="'+id+'"'),'Missing password UI control: '+id);
for(const expected of [
 'sb.auth.signInWithPassword({email,password})',
 "sb.auth.resetPasswordForEmail(email",
 'sb.auth.updateUser({password})',
 'sb.auth.getUser()',
 "sb.from('memberships')",
 "sb.rpc('get_my_learner_views')",
 "event==='PASSWORD_RECOVERY'",
 "password.length<12",
 "password!==confirm",
 'new URL(\'./portal.html\',location.href)',
 "A password is optional"
])assert.ok((source+html).includes(expected),'Missing password security feature '+expected);
assert.ok(!source.includes('auth.signUp('),'New access must never be created by an unauthorised password signup');
assert.ok(!source.includes('localStorage.setItem('),'Never store passwords in local storage');
assert.ok(!source.includes('sessionStorage.setItem('),'Never store passwords in session storage');
assert.ok(portal.includes('initPasswordAccess(sb,{show,boot})'),'Password module not active in portal');
assert.ok(portal.includes("if(passwordAccess.wantsSecurityView())"),'Password view must require role checks');
assert.ok(portal.includes('getAccessChoices(state.members,linked.learners,linked.awaiting)'),'Existing role authorization must be retained');
assert.ok(portal.includes("sb.auth.signInWithOtp("),'Passwordless sign-in must remain available');
assert.ok(assets.includes('auth-password.js')&&assets.includes('auth-password.css'),'GitHub Pages deployment missing password assets');
for(const page of ['studio.html','family.html','baseline.html'])assert.ok(readFileSync(page,'utf8').includes('./portal.html?security=1'),page+' lacks account-security navigation');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
assert.equal(new Set(ids).size,ids.length,'Duplicate HTML identifiers in portal');
console.log('MathsGrove password sign-in security and navigation: 20+ invariant checks PASS.');
