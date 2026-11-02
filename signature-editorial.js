/* Examiner-only Signature editorial library: read-only until independent human moderation. */
export function initSignatureEditorial(db,state){
 const list=document.getElementById('mg-signature-library-list');
 const caption=document.getElementById('mg-signature-library-caption');
 const refreshButton=document.getElementById('mg-signature-library-refresh');
 const make=(tag,text,cls)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=String(text);if(cls)e.className=cls;return e};
 const math=(root,value)=>{if(window.MathsGroveMath?.write)window.MathsGroveMath.write(root,String(value));else root.textContent=String(value)};
 let epoch=0;
 async function showPaper(row,root){
  root.replaceChildren(make('p','Loading confidential examiner paper and method scheme…'));
  const {data,error}=await db.rpc('grove_staff_signature_editorial',{p_org:state.membership.org_id,p_assessment:row.id});
  if(error||!data?.ok){root.replaceChildren(make('p','Cannot load private paper: '+(error?.message||'Unauthorised.')));return}
  const paper=data.assessment;
  root.replaceChildren();
  root.append(make('p',paper.paper_code+' · '+paper.total_marks+' marks · '+paper.duration_minutes+' minutes · '+(paper.calculator_allowed?'Calculator allowed':'No calculator'),'mg-signature-meta'));
  const source=make('a','View official specification','mg-signature-reference');
  try{const u=new URL(paper.syllabus_ref);if(u.protocol==='https:'){source.href=u.href;source.target='_blank';source.rel='noopener noreferrer';root.append(source)}}catch{}
  const schemeMap=new Map((paper.mark_scheme||[]).map(x=>[x.id,x]));
  for(const question of paper.question_paper||[]){
   const panel=make('article',undefined,'mg-signature-paper-question');
   panel.append(make('strong',question.id+' · '+question.topic+' · '+question.marks+' marks'));
   const marks=schemeMap.get(question.id);
   for(const part of question.parts||[]){
    const block=make('div',undefined,'mg-signature-part');
    const label=make('p',question.id+'('+part.id+') · '+part.marks+' marks');
    const prompt=make('div');math(prompt,part.prompt);block.append(label,prompt);
    const rubric=marks?.parts?.find(x=>x.id===part.id);
    if(rubric){
     const details=make('details');details.append(make('summary','Confidential examiner mark scheme'));
     for(const criterion of rubric.criteria||[]){
      const line=make('p');math(line,criterion.award+' mark'+(criterion.award===1?'':'s')+' · '+criterion.reason);
      details.append(line)
     }
     block.append(details);
    }
    panel.append(block);
   }
   root.append(panel);
  }
  root.append(make('p','EDITORIAL ONLY · A human examiner must independently moderate this paper before it can be approved or assigned. The secure marking and student-delivery workflow is separate.','mg-signature-alert'));
 }
 async function refresh(){
  if(!list||!caption||!state.membership?.org_id)return;
  const ticket=++epoch;caption.textContent='Checking private Signature assessment catalogue…';
  const {data,error}=await db.rpc('grove_staff_signature_catalog',{p_org:state.membership.org_id});
  if(ticket!==epoch)return;
  list.replaceChildren();
  if(error||!data?.ok){caption.textContent='Signature library unavailable: '+(error?.message||'Examiner permissions are required.');return}
  const rows=data.assessments||[];
  caption.textContent=rows.length+' secure Signature assessment drafts and moderated papers. Mark schemes are restricted to authorised staff.';
  if(!rows.length){list.append(make('p','No Signature editorial papers are currently staged.'));return}
  for(const row of rows){
   const card=make('article',undefined,'mg-signature-entry');
   const header=make('div',undefined,'mg-signature-entry-head');
   const title=make('strong',row.title);
   const badge=make('span',row.review_state==='approved'?'Human-moderated · approved':'Awaiting human moderation','mg-signature-status');
   header.append(title,badge);card.append(header);
   card.append(make('p',row.product.replaceAll('_',' ')+' · '+row.exam_board+' · '+row.qualification+' '+row.academic_level+' · '+row.total_marks+' marks · '+row.duration_minutes+' min','mg-signature-meta'));
   const button=make('button','Review questions and mark scheme','button outline');button.type='button';
   const content=make('div',undefined,'mg-signature-entry-detail');content.hidden=true;
   button.addEventListener('click',()=>{const expanded=content.hidden;content.hidden=!expanded;if(expanded){button.textContent='Hide confidential paper';void showPaper(row,content)}else button.textContent='Review questions and mark scheme'});
   card.append(button,content);list.append(card);
  }
 }
 refreshButton?.addEventListener('click',()=>void refresh());
 return {refresh};
}