import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';

const source=readFileSync(new URL('../portal.js',import.meta.url),'utf8');
const start=source.indexOf('let answerWriteQueue=Promise.resolve();');
const end=source.indexOf("['work-text','work-difficulty'",start);
assert.ok(start>0&&end>start,'paper answer save functions must exist');
const fragment=source.slice(start,end);

const fields={
 'work-text':{value:'first response'},
 'work-difficulty':{value:'right'},
 'work-confidence':{value:'sure'},
 'work-clarity':{value:'clear'}
};
const pending=[],statuses=[];
const sb={from(table){
 assert.equal(table,'answers');
 return {upsert(data,options){
  assert.equal(options.onConflict,'attempt_id,question_id');
  return {select(){return {single(){return new Promise(resolve=>pending.push({data,resolve}))}}}};
 }};
}};
const state={attempt:{id:'attempt-1'},questions:[{id:'question-a'},{id:'question-b'}],question:0,
 user:{id:'student-1'},answer:null};
const context={sb,state,performance:{now:()=>1000},mockMode:()=>false,
 $:key=>fields[key],text:(id,message)=>statuses.push({id,message}),friendlyError:e=>String(e)};
runInNewContext(fragment+'\nglobalThis.persistAnswer=persistAnswer;',context);
const settle=async()=>{for(let i=0;i<6;i++)await Promise.resolve()};

const first=context.persistAnswer();
await settle();
assert.equal(pending.length,1);
fields['work-text'].value='second and final response';
const second=context.persistAnswer();
await settle();
assert.equal(pending.length,1,'second save must wait for first');
pending[0].resolve({data:{id:'saved-first'},error:null});
await settle();
assert.equal(pending.length,2);
assert.equal(pending[0].data.typed_answer,'first response');
assert.equal(pending[1].data.typed_answer,'second and final response');
pending[1].resolve({data:{id:'saved-second'},error:null});
await Promise.all([first,second]);
assert.equal(state.answer.id,'saved-second');
assert.equal(statuses.at(-1).message,'Saved securely');

fields['work-text'].value='answer for question a';
const third=context.persistAnswer();
await settle();
assert.equal(pending.length,3);
state.question=1;state.answer=null;
pending[2].resolve({data:{id:'previous-question'},error:null});
await third;
assert.equal(state.answer,null,'old question save cannot replace new question state');

console.log('Paper save queue checks passed: latest edit persists, writes are serialized, and old questions cannot overwrite new question UI.');
