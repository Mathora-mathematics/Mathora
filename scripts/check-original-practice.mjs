import {readFileSync} from 'node:fs';
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const assert=(condition,message)=>{if(!condition)throw new Error(message)};
const paths=['operational-gcse-daily.json','operational-igcse-daily.json',
 'operational-gcse-weekly.json','operational-igcse-weekly.json'];
const items=paths.flatMap(p=>read('content/programmes/'+p).items);
const codes=new Set(),prompts=new Set(),count={};
for(const q of items){
 assert(!codes.has(q.id),'Duplicate item: '+q.id);
 codes.add(q.id);prompts.add(q.prompt);
 assert(q.qualification==='GCSE'||q.qualification==='IGCSE','Unexpected qualification');
 assert(q.programme==='daily'||q.programme==='weekly','Unexpected practice tier');
 assert(q.marks>=2&&q.marks<=10&&q.difficulty>=1&&q.difficulty<=5,'Invalid marks or difficulty '+q.id);
 const sum=[...q.scheme.matchAll(/\b[AMB](\d+)\b/g)].reduce((n,m)=>n+Number(m[1]),0);
 assert(sum===q.marks,'Mark scheme does not sum to stated marks: '+q.id);
 assert(q.answer&&q.prompt.length>55,'Incomplete question: '+q.id);
 assert((q.prompt.match(/\\\(/g)||[]).length===(q.prompt.match(/\\\)/g)||[]).length,'Unmatched inline TeX: '+q.id);
 assert(q.suggested_minutes>=2&&q.suggested_minutes<=30,'Invalid working-time estimate');
 const key=q.qualification+'-'+q.programme;count[key]=(count[key]||0)+1;
}
assert(items.length===120,'Expected 120 original practice items');
assert(prompts.size===120,'No exact duplicate questions permitted');
for(const key of ['GCSE-daily','IGCSE-daily','GCSE-weekly','IGCSE-weekly'])
 assert(count[key]===30,'Each qualification/practice-tier group must contain 30 questions: '+key);
const sql=readFileSync('supabase/INSTALL_ORIGINAL_PRACTICE_120.sql','utf8');
assert((sql.match(/INSERT INTO public.question_bank/g)||[]).length===120,'Seed SQL must contain 120 questions');
assert((sql.match(/INSERT INTO public.mark_schemes/g)||[]).length===120,'One mark scheme per item');
assert(sql.includes('Question is assigned to another Grove practice tier'),'Server must enforce programme tags');
const examDrafts=read('content/programmes/exam-reasoning-drafts-12.json').items;
assert(examDrafts.length===12&&examDrafts.every(q=>q.programme==='exam'&&!q.available_to_students),
 'Exam-style specimens must remain separately unpublished');
console.log('Verified 120 original practice items, 120 mark schemes, four tier/qualification groups and 12 private-mock-excluded Exam examples.');
