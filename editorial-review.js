export function initEditorialReview(db,state){
 const $=id=>document.getElementById(id),root=$('mg-editorial-list');
 const node=(tag,text,cls)=>{const el=document.createElement(tag);if(text!==undefined)el.textContent=String(text);if(cls)el.className=cls;return el};
 let drafts=[];
 async function refresh(){
  if(!state.membership?.org_id)return;
  const {data,error}=await db.rpc('grove_admin_editorial_bank',{p_org:state.membership.org_id,p_route:null});
  if(error){drafts=[];render();$('mg-editorial-caption').textContent='Question review could not reload: '+error.message;throw Error(error.message)}
  drafts=data?.drafts||[];render();
 }
 function render(){
  const qualification=$('mg-editorial-route').value,programme=$('mg-editorial-tier').value;
  const shown=drafts.filter(q=>(qualification==='all'||q.qualification===qualification)&&(programme==='all'||q.programme_scope===programme));
  $('mg-editorial-caption').textContent=drafts.length+' new mathematics drafts awaiting review · '+shown.length+' shown';
  root.replaceChildren();
  if(!shown.length){root.append(node('p','No pending drafts for this filter.'));return}
  for(const q of shown){
   const card=node('details',undefined,'mg-editorial-item'),summary=node('summary',q.qualification+' '+q.level+' · '+q.programme_scope.toUpperCase()+' · '+q.topic+' · '+q.skill);
   card.append(summary,node('p',q.prompt));
   const opts=node('div',undefined,'mg-editorial-options');
   for(const choice of q.choices||[]){
    const line=node('div',choice+(choice===q.correct_text?'  ✓ AUTHORING KEY':''),choice===q.correct_text?'correct':'');
    opts.append(line)
   }
   card.append(opts,node('p','Worked rationale: '+q.explanation),
    node('p','Draft review · '+(q.expected_seconds||'—')+' seconds suggested · '+q.exam_board+' · '+q.syllabus_objective));
   const label=node('label','Examiner verification notes (required before approval)');
   const notes=node('textarea');notes.placeholder='Check solution, all distractors, wording, syllabus level, calculator policy and answer uniqueness.';
   const status=node('p','This item remains inactive until approved.');
   const btn=node('button','Approve checked mathematics ↗');btn.type='button';
   btn.addEventListener('click',async()=>{
    if(notes.value.trim().length<15){status.textContent='Add specific mathematical verification notes (at least 15 characters).';return}
    if(!confirm('Confirm that you have checked the worked solution, all four choices and academic level?'))return;
    btn.disabled=true;status.textContent='Saving approval…';
    const {data,error}=await db.rpc('grove_admin_approve_question',{
     p_org:state.membership.org_id,p_item:q.id,p_comment:notes.value.trim()
    });
    if(error||!data?.ok){status.textContent=error?.message||'Approval failed.';btn.disabled=false;return}
    drafts=drafts.filter(x=>x.id!==q.id);render()
   });
   card.append(label,notes,btn,status);root.append(card)
  }
 }
 $('mg-editorial-route').addEventListener('change',render);
 $('mg-editorial-tier').addEventListener('change',render);
 $('mg-editorial-refresh').addEventListener('click',()=>void refresh());
 return {refresh}
}