import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {webcrypto} from 'node:crypto';
const read=path=>readFileSync(path,'utf8');
if(!globalThis.crypto)globalThis.crypto=webcrypto;
const source=read('evidence-workspace.js');
const {createEvidenceWorkspace}=await import('data:text/javascript;charset=utf-8,'+encodeURIComponent(source));
const submissions=[];
globalThis.window={MathsGroveBoard:{setup(){let dirty=true;return{
 isDirty(){return dirty},
 markSaved(){dirty=false},
 clear(){dirty=false},
 async exportBlob(){return new Blob([new Uint8Array([137,80,78,71])],{type:'image/png'})}
}}}};
globalThis.document={createElement(tag){return{tag,textContent:'',className:'',append(){}}}};
const uid='e9c6f913-6b77-475d-8f6b-2f441800024a',org='7016db18-6f16-474f-9b90-57fb5a74dc5e';
const modes=[
 ['baseline','baseline','20-question diagnostic'],
 ['weekly','practice','Grove Weekly'],
 ['daily','practice','Grove Daily'],
 ['exam_daily','practice','Grove Exam daily']
];
for(const [mode,kind,label] of modes){
 const session=crypto.randomUUID(),rows=[],events={};
 const db={
  auth:{async getUser(){return{data:{user:{id:uid}},error:null}}},
  from(name){assert.equal(name,'memberships');const query={select(){return query},eq(){return query},limit(){return query},async single(){return{data:{org_id:org},error:null}}};return query},
  storage:{from(name){assert.equal(name,'student-work');return{async upload(path,blob,opts){
   assert.equal(opts.upsert,false);assert.ok(blob.type==='image/png'||blob.type==='image/jpeg');
   const parts=path.split('/');
   assert.equal(parts.length,7);
   assert.deepEqual(parts.slice(0,6),[org,uid,kind,session,'1','work']);
   submissions.push({mode,kind,path,mime:blob.type});
   return {error:null};
  }}}},
  async rpc(name,args){
   if(name==='grove_save_work_evidence'){
    assert.equal(args.p_kind,kind);assert.equal(args.p_session,session);
    assert.equal(args.p_position,1);assert.equal(args.p_file_kind,submissions.at(-1).mime==='image/png'?'whiteboard':'photo');
    rows.push({position:args.p_position,file_kind:args.p_file_kind,name:args.p_name});
    return{data:{ok:true},error:null};
   }
   assert.equal(name,'grove_my_work_evidence');
   assert.equal(args.p_kind,kind);assert.equal(args.p_session,session);
   return{data:{files:rows},error:null};
  }
 };
 const list={items:[],replaceChildren(){this.items=[]},append(item){this.items.push(item)}};
 const status={textContent:'',classList:{toggle(){}}},saveButton={disabled:false,addEventListener(name,callback){events[name]=callback}};
 const photos={files:[],value:'',addEventListener(name,callback){events[name]=callback}};
 const space=createEvidenceWorkspace({
  db,kind,canvas:{},toolbar:{},photos,saveButton,status,list,
  getSession:()=>session,getPosition:()=>1
 });
 await space.flush();
 assert.equal(space.totalSaved(),1,label+' whiteboard did not register');
 const photo=Object.assign(new Blob([new Uint8Array([0xff,0xd8,0xff])],{type:'image/jpeg'}),{name:'my-method.jpg'});
 photos.files=[photo];
 await events.change();
 assert.equal(space.totalSaved(),2,label+' photo did not register');
 assert.ok(status.textContent.includes('Saved privately'),label+' photo success did not reach UI');
 assert.equal(list.items.length,2,label+' files not shown to learner');
 console.log(label+': whiteboard and uploaded photo were registered against the same private session and question.');
}
assert.equal(submissions.length,8);
const sql=read('supabase/migrations/20261031_evidence_manual_marking.sql');
const repair=read('supabase/migrations/20261031_fix_working_image_validation.sql');
const baselineFeedback=read('supabase/migrations/20261031_unified_evidence_inbox_baseline_feedback.sql');
const student=read('assigned-practice.js'),staff=read('assigned-admin.js');
const baseline=read('baseline.js'),staffBase=read('baseline-admin.js'),portal=read('portal.js'),studio=read('studio.html'),studioJs=read('studio.js');
const checks=[
 ['All three tiers use the shared assessment mode',sql.includes("mode IN('weekly','daily','exam_daily'")||read('supabase/UPGRADE_AUTOMATED_TIER_PRACTICE.sql').includes("mode IN('weekly','daily','exam_daily'")],
 ['Tiered daily and weekly use identical upload code',student.includes("kind:'practice'")&&student.includes('createEvidenceWorkspace')],
 ['Personal mock papers use image/photo storage',portal.includes("sb.storage.from('student-work').upload")&&portal.includes("sb.from('answer_files').insert")],
 ['Examiner can open normal paper working',studioJs.includes("db.from('answer_files')")&&studioJs.includes('createSignedUrl(file.storage_path')],
 ['Examiner can open assigned working',staff.includes("db.rpc('grove_staff_review_task'")&&staff.includes("createSignedUrl(f.path")],
 ['Examiner can inspect baseline working',staffBase.includes("db.rpc('grove_staff_evidence'")&&staffBase.includes('createSignedUrl(item.storage_path')],
 ['Baseline examiner feedback can be saved and shown',staffBase.includes('grove_staff_save_baseline_feedback')&&baseline.includes('grove_my_baseline_feedback')],
 ['All assessment categories appear in Marking',studio.slice(studio.indexOf('data-panel="marking"'),studio.indexOf('data-panel="reports"')).includes('id="mg-assigned-admin"')&&studio.slice(studio.indexOf('data-panel="marking"'),studio.indexOf('data-panel="reports"')).includes('id="mg-baseline-register"')],
 ['Overview counts assigned examiner work',studioJs.includes('assignedReviewRows')&&studioJs.includes('openReviewCount')],
 ['No automatic marks for assigned practices',sql.includes("review_status='awaiting_review',score=NULL")],
 ['Only examiner marking can release scores',sql.includes("v_count<>v.question_count")&&staff.includes('grove_staff_mark_task')],
 ['Missing files cannot count as valid working',sql.includes("NOT EXISTS(SELECT 1 FROM storage.objects")],
 ['Images secured to exact owner and task',repair.includes("t.student_id=v_uid")&&repair.includes("s.student_id=v_uid")],
 ['Student snapshots include human marks and evidence',read('supabase/functions/grove-student-export/index.ts').includes('grove_offboarding_extra')],
 ['Old unmarked work remains visible',baselineFeedback.includes("t.review_status<>'released'")&&baselineFeedback.includes("LIMIT 600")],
 ['Screenshot/image formats accepted',repair.includes("(png|jpg|jpeg|webp)")],
];
for(const [label,ok] of checks)assert.ok(ok,'Examiner evidence regression: '+label);
console.log('MathsGrove: '+modes.length+' assessment routes × 2 upload types passed; '+checks.length+' cross-system invariants passed.');
