import {readFileSync} from 'node:fs';
const data=p=>JSON.parse(readFileSync(p,'utf8')).items;
const verify=(cond,msg)=>{if(!cond)throw Error(msg)};
const extra=data('content/programmes/extra-practice-120.json');
const base=[...data('content/programmes/practice-gcse-v2.json'),
 ...data('content/programmes/practice-igcse-v2.json'),
 ...data('content/programmes/practice-foundation-core-v2.json')];
verify(extra.length===120&&base.length===180,'Expected 180 original plus 120 supplementary questions');
const all=[...base,...extra];
verify(new Set(all.map(x=>x.id)).size===300,'Duplicate question id');
verify(new Set(all.map(x=>x.prompt)).size===300,'Exact duplicate question wording');
for(const q of extra){
 const total=q.mark_scheme.reduce((n,s)=>n+Number(s.code.slice(1)),0);
 verify(total===q.marks,'Bad mark allocation '+q.id);
 verify(q.programme==='daily'||q.programme==='weekly','Supplementary candidates must be Daily or Weekly');
 verify(q.qualification==='GCSE'||q.qualification==='IGCSE','Unexpected qualification');
 verify(['Core','Extended','Foundation','Higher'].includes(q.exam_tier),'Missing academic tier '+q.id);
 verify((q.prompt.match(/\\\(/g)||[]).length===(q.prompt.match(/\\\)/g)||[]).length,'Bad TeX delimiters '+q.id);
 verify(q.answer&&q.prompt.length>55&&!q.unseen_mock_eligible,'Incomplete, unsafe question '+q.id);
}
const sql=readFileSync('supabase/ADD_120_ORIGINAL_PRACTICE_VARIANTS.sql','utf8');
verify(sql.includes('public.practice_content_index'),'Installer must use existing content index');
verify(sql.includes('MGX-')&&sql.includes('public.mark_schemes'),'Missing question ids or staff marking schemes');
verify((sql.match(/^BEGIN;$/gm)||[]).length===1&&(sql.match(/^COMMIT;$/gm)||[]).length===1,'Atomic installer required');
const exam=data('content/programmes/exam-reasoning-drafts-12.json');
verify(exam.length===12&&exam.every(q=>q.programme==='exam'&&!q.available_to_students),'Exam specimens must remain unpublished');
console.log('Verified 300 combined practice candidates, 120 supplementary schemes and 12 unpublished Exam reasoning drafts.');
