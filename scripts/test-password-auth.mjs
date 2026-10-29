import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
const code=readFileSync('auth-password.js','utf8').replace('export function initPasswordAccess','function initPasswordAccess')+'\ninitPasswordAccess';
function harness({allowed=true,confirmed=true,recovery=false}={}){
 const elements=new Map(),listeners=new Map(),calls={signIn:[],reset:[],update:[],boot:0,views:[]};let authCallback;
 const elem=id=>{
  if(!elements.has(id)){
   const e={value:'',textContent:'',hidden:false,disabled:false,
    classList:{toggle(){}},setAttribute(){},addEventListener(name,fn){listeners.set(id+':'+name,fn)}};
   elements.set(id,e);
  }
  return elements.get(id);
 };
 const sb={
  auth:{
   async signInWithPassword(args){calls.signIn.push(args);return {error:null}},
   async resetPasswordForEmail(email,opts){calls.reset.push({email,opts});return {error:null}},
   async getUser(){return {data:{user:{id:'adult-test-id',email:'adult@example.test',email_confirmed_at:confirmed?'2026-10-28T00:00:00Z':null}}}},
   async updateUser(args){calls.update.push(args);return {error:null}},
   onAuthStateChange(cb){authCallback=cb;return {data:{subscription:{unsubscribe(){}}}}}
  },
  from(){return {select(){return {eq(){return {limit(){return Promise.resolve({data:allowed?[{member_role:'student'}]:[],error:null})}}}}}}},
  async rpc(){return {data:{learners:[]},error:null}}
 };
 const ctx={document:{getElementById:elem},location:{hash:recovery?'#type=recovery':'',search:'',href:'https://example.test/Mathora/portal.html'},URL,URLSearchParams,Promise,console,setTimeout:fn=>Promise.resolve().then(fn)};
 const init=runInNewContext(code,ctx);
 const controller=init(sb,{show:id=>calls.views.push(id),boot:async()=>{calls.boot++}});
 return {elem,calls,controller,emit:async(id,event)=>{assert.ok(listeners.has(id+':'+event),'Missing listener '+id+':'+event);await listeners.get(id+':'+event)({preventDefault(){}})},authEvent:ev=>authCallback(ev)};
}
{
 const t=harness();await t.emit('auth-password-tab','click');
 assert.equal(t.elem('password-login-form').hidden,false);
 assert.equal(t.elem('invite-login-form').hidden,true);
 t.elem('password-email').value='adult@example.test';t.elem('password-input').value='CorrectHorseBattery2026!';
 await t.emit('password-login-form','submit');
 assert.equal(t.calls.signIn.length,1);assert.equal(t.calls.signIn[0].email,'adult@example.test');
 assert.equal(t.calls.boot,1);assert.equal(t.elem('password-input').value,'');
 await t.emit('password-forgot','click');t.elem('password-recover-email').value='adult@example.test';
 await t.emit('password-recover-form','submit');
 assert.equal(t.calls.reset.length,1);
 assert.equal(t.calls.reset[0].opts.redirectTo,'https://example.test/Mathora/portal.html');
 assert.match(t.elem('login-message').textContent,/If this email has a MathsGrove account/);
 await t.emit('password-recover-back','click');
 assert.equal(t.elem('password-login-form').hidden,false);
}
{
 const t=harness();t.elem('security-new-password').value='UniquePassphrase2026!';t.elem('security-confirm-password').value='DifferentPassphrase2026!';
 await t.emit('security-password-form','submit');assert.equal(t.calls.update.length,0);
 t.elem('security-confirm-password').value='UniquePassphrase2026!';
 await t.emit('security-password-form','submit');assert.equal(t.calls.update.length,1);
 assert.equal(t.calls.update[0].password,'UniquePassphrase2026!');
 assert.equal(t.elem('security-new-password').value,'');
 assert.match(t.elem('security-message').textContent,/Password saved/);
}
{
 const t=harness({allowed:false});t.elem('security-new-password').value='UniquePassphrase2026!';t.elem('security-confirm-password').value='UniquePassphrase2026!';
 await t.emit('security-password-form','submit');assert.equal(t.calls.update.length,0);
 assert.match(t.elem('security-message').textContent,/No authorised MathsGrove account/);
}
{
 const t=harness({confirmed:false});t.elem('security-new-password').value='UniquePassphrase2026!';t.elem('security-confirm-password').value='UniquePassphrase2026!';
 await t.emit('security-password-form','submit');assert.equal(t.calls.update.length,0);
 assert.match(t.elem('security-message').textContent,/Verify your email/);
}
{
 const t=harness({recovery:true});
 assert.equal(t.controller.wantsSecurityView(),true);
 t.controller.showForUser('adult@example.test');
 assert.equal(t.calls.views[0],'security-view');
 t.authEvent('PASSWORD_RECOVERY');
 await Promise.resolve();await Promise.resolve();
 assert.equal(t.calls.boot,1);
}
console.log('MathsGrove password behaviour: 6 simulated flows passed (login, reset, update, mismatch, revoked role, recovery).');
