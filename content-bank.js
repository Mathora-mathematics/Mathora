/* MathsGrove private mathematics library.
   No answer keys are bundled in GitHub Pages. Mark schemes are fetched on demand
   from the staff-restricted Supabase mark_schemes table. */
export function initContentBank(db,studio){
 const $=id=>document.getElementById(id);
 const admin=['admin','partner'].includes(studio.membership?.member_role);
 const bank={boards:[],blueprints:[],drafts:[],serviceTiers:null,questions:[],practiceLabels:[],editorial:[],selected:null,loaded:false,hasEditorial:false,mockPacks:[],selectedMockQuestions:[]};
 const say=(message,error=false,id='bank-status')=>{const node=$(id);node.textContent=message;node.classList.toggle('is-error',error)};
 const txt=(tag,value,cls)=>{const node=document.createElement(tag);if(cls)node.className=cls;node.textContent=String(value??'');return node};
 const clear=id=>$(id).replaceChildren();
 const boardName=id=>bank.boards.find(x=>x.key===id)?.name||id||'Unmapped to board';
 const qualText=q=>({GCSE:'GCSE',IGCSE:'IGCSE',A_LEVEL:'AS / A Level',FURTHER_MATHS:'Further Maths',IB_AA:'IB AA',IB_AI:'IB AI',TMUA:'TMUA'})[q]||q;
 function setOptions(element,items,emptyLabel){
  const keep=element.value;element.replaceChildren();
  if(emptyLabel)element.add(new Option(emptyLabel,''));
  items.forEach(x=>element.add(new Option(x.label,x.value)));
  if([...element.options].some(x=>x.value===keep))element.value=keep;
 }
 function updateBoardOptions(){
  const level=$('bank-level').value;
  const list=bank.boards.filter(x=>x.qualification===level);
  setOptions($('bank-board'),list.map(x=>({label:x.name,value:x.key})),'All boards');
  renderBoards();renderMockBlueprints();renderQuestions();renderDrafts();
 }
 function updateAuthorOptions(){
  const qual=$('bank-author-qual').value;
  const list=bank.boards.filter(x=>x.qualification===qual&&x.verified);
  setOptions($('bank-author-board'),list.map(x=>({label:x.name,value:x.key})),'Select verified board');
  const board=bank.boards.find(x=>x.key===$('bank-author-board').value);
  setOptions($('bank-author-tier'),(board?.tierLabels||[]).map(x=>({label:x,value:x})),'Select tier');
  $('bank-author-save').disabled=!list.length||!admin||!bank.hasEditorial;
 }
 function renderBoards(){
  const root=$('bank-board-list');root.replaceChildren();
  const relevant=bank.boards.filter(x=>x.qualification===$('bank-level').value&&(!$('bank-board').value||$('bank-board').value===x.key));
  for(const b of relevant){
   const card=txt('article','', 'bank-board-item');
   const h=txt('h3',b.name),meta=txt('div','', 'bank-board-badges');
   meta.append(txt('span',b.key),txt('span',b.tierLabels.join(' / ')));
   if(!b.verified)meta.append(txt('span','Needs current specification verification','pending'));
   card.append(h,meta);
   if(b.notes)card.append(txt('p',b.notes));
   if(b.papers.length){
    for(const p of b.papers){
     const desc=p.title+' · '+p.minutes+' min · '+p.marks+' marks · '+(p.calculator?'Calculator':'Non-calculator');
     card.append(txt('p',desc));
    }
   }else card.append(txt('p','Specification directory only; mock format not yet authorised.'));
   const link=txt('a','Official awarding-body information ↗');link.href=b.source;link.target='_blank';link.rel='noopener noreferrer';card.append(link);
   root.append(card);
  }
  if(!relevant.length)root.append(txt('p','No board information is available yet.'));
  $('bank-board-count').textContent=String(bank.boards.filter(x=>x.qualification===$('bank-level').value&&x.verified).length);
 }
 function renderMockBlueprints(){
  const root=$('bank-mock-list');root.replaceChildren();
  const list=bank.blueprints.filter(p=>p.qualification===$('bank-level').value&&(!$('bank-board').value||p.board_key===$('bank-board').value));
  $('bank-mock-count').textContent=String(list.length);
  for(const p of list){
   const item=txt('div','', 'bank-mock-item');
   const name=txt('strong',p.title),sub=txt('small',p.target_marks+' target marks · '+p.minutes+' minutes · '+(p.calculator?'Calculator':'Non-calculator')+' · OUTLINE ONLY');
   item.append(name,sub);root.append(item);
  }
  if(!list.length)root.append(txt('p','No paper blueprints for this selection. AS / A Level will be researched in stage three.'));
 }
 function renderServiceTiers(){
  const root=$('tier-library-cards');root.replaceChildren();
  const plans=bank.serviceTiers?.plans||{};
  for(const key of ['weekly','daily','exam']){
   const plan=plans[key];if(!plan)continue;
   const card=txt('article','','tier-library-card');
   const caption=txt('span',key==='exam'?'TIMED ASSESSMENTS':key==='daily'?'DAILY PRACTICE':'WEEKLY PAPERS');
   const heading=txt('h3',plan.name);
   const p=txt('p',plan.cadence+' · '+plan.student_goal);
   const desc=txt('small',plan.status);
   card.append(caption,heading,p,desc);root.append(card);
  }
 }
 function mockBoardOptions(){
  const qual=$('mock-build-qual').value;
  const choices=bank.boards.filter(b=>b.qualification===qual&&b.verified);
  setOptions($('mock-build-board'),choices.map(b=>({label:b.name,value:b.key})),'Choose board');
  mockTierOptions();
 }
 function mockTierOptions(){
  const board=bank.boards.find(b=>b.key===$('mock-build-board').value);
  setOptions($('mock-build-tier'),(board?.tierLabels||[]).map(t=>({label:t,value:t})),'Choose tier');
  mockPaperOptions();renderMockPool();
 }
 function mockPaperOptions(){
  const board=bank.boards.find(b=>b.key===$('mock-build-board').value);
  const tier=$('mock-build-tier').value;
  const papers=(board?.papers||[]).filter(p=>!p.tier||p.tier===tier);
  setOptions($('mock-build-code'),papers.map(p=>({label:p.title+' · '+p.minutes+' min · '+p.marks+' marks',value:p.code})),'Choose official component');
  const selected=papers.find(p=>p.code===$('mock-build-code').value);
  $('mock-build-minutes').value=selected?.minutes||'';
  $('mock-build-target').value=selected?.marks||'';
  $('mock-build-calc').checked=Boolean(selected?.calculator);
 }
 function renderMockPool(){
  const root=$('mock-question-pool');root.replaceChildren();
  const items=bank.questions.filter(q=>{
   const e=editorialFor(q.id);
   return e&&e.owner_org===studio.membership.org_id&&e.review_status==='approved'&&
    q.qualification===$('mock-build-qual').value&&e.board_key===$('mock-build-board').value&&e.exam_tier===$('mock-build-tier').value;
  });
  for(const q of items){
   const label=document.createElement('label');label.className='mock-pool-option';
   const check=document.createElement('input');check.type='checkbox';check.value=q.id;check.dataset.marks=String(q.marks);
   check.addEventListener('change',updateMockSelection);
   const info=document.createElement('span');
   info.append(txt('strong',q.topic+' · '+q.marks+' marks'),txt('small',q.prompt.slice(0,155)));
   label.append(check,info);root.append(label);
  }
  if(!items.length)root.textContent='No approved original questions match this board and tier. Draft and check questions first.';
  updateMockSelection();
 }
 function updateMockSelection(){
  const selected=[...$('mock-question-pool').querySelectorAll('input:checked')];
  $('mock-selected-count').textContent=selected.length+' question(s)';
  $('mock-selected-marks').textContent=selected.reduce((n,x)=>n+Number(x.dataset.marks||0),0)+' marks';
 }
 async function loadMockPacks(){
  const {data,error}=await db.from('mock_packs').select('id,title,qualification,board_key,exam_tier,status,duration_seconds,target_marks,calculator_allowed')
   .eq('org_id',studio.membership.org_id).order('created_at',{ascending:false}).limit(60);
  if(error){$('mock-admin-packs').textContent='The secure mock-session migration is not installed yet. This is a blueprint-only administrator view.';return}
  bank.mockPacks=data||[];renderMockPacks();
 }
 function renderMockPacks(){
  const root=$('mock-admin-packs');root.replaceChildren();
  if(!bank.mockPacks.length){root.textContent='No completed mock packs have been assembled or approved yet.';return}
  for(const pack of bank.mockPacks){
   const row=document.createElement('div');row.className='mock-admin-row';
   const info=document.createElement('div');
   info.append(txt('strong',pack.title),txt('small',
    pack.board_key+' · '+pack.exam_tier+' · '+pack.target_marks+' marks · '+Math.floor(pack.duration_seconds/60)+' minutes · '+pack.status.toUpperCase()));
   const actions=document.createElement('div');
   if(pack.status==='draft'){
    const btn=txt('button','Publish after moderation','button outline');
    btn.type='button';btn.onclick=async()=>{
     if(!confirm('Have you checked every marking scheme, diagram and syllabus point? Publish this complete mock to make it assignable.'))return;
     btn.disabled=true;
     const {error}=await db.rpc('publish_mock_pack',{p_pack:pack.id});
     if(error)say(error.message,true,'mock-admin-feedback');
     else {say('Paper published. Assign it to a student to permit a timed sitting.',false,'mock-admin-feedback');await loadMockPacks()}
     btn.disabled=false;
    };
    actions.append(btn);
   }
   if(pack.status==='published'){
    const select=document.createElement('select');select.setAttribute('aria-label','Choose student for '+pack.title);
    select.add(new Option('Assign to student',''));
    for(const student of studio.students||[])if(student.pref?.qualification===pack.qualification&&student.pref?.exam_board===pack.board_key&&student.pref?.tier===pack.exam_tier)select.add(new Option(student.name,student.id));
    const btn=txt('button','Assign mock','button primary');btn.type='button';
    btn.onclick=async()=>{
     if(!select.value){say('Choose a learner whose qualification, board code and academic level exactly match this mock. Update the learner in Students & invitations if needed.',true,'mock-admin-feedback');return}
     btn.disabled=true;
     const {error}=await db.rpc('assign_mock_pack',{p_pack:pack.id,p_student:select.value});
     say(error?error.message:'Mock assigned successfully. Student may start the timed session from Grove Exam.',Boolean(error),'mock-admin-feedback');
     btn.disabled=false;
    };
    actions.append(select,btn);
   }
   row.append(info,actions);root.append(row);
  }
 }
 $('mock-build-qual').addEventListener('change',mockBoardOptions);
 $('mock-build-board').addEventListener('change',mockTierOptions);
 $('mock-build-tier').addEventListener('change',()=>{mockPaperOptions();renderMockPool()});
 $('mock-build-code').addEventListener('change',mockPaperOptions);
 $('mock-build-form').addEventListener('submit',async e=>{
  e.preventDefault();if(!admin||!bank.hasEditorial)return;
  const ids=[...$('mock-question-pool').querySelectorAll('input:checked')].map(x=>x.value);
  const btn=$('mock-build-save');btn.disabled=true;
  try{
   if(ids.length<6)throw Error('At least six original approved questions are required to draft a mock. Publication requires eight and three topic areas.');
   const data={
    p_org:studio.membership.org_id,p_qualification:$('mock-build-qual').value,
    p_board:$('mock-build-board').value,p_tier:$('mock-build-tier').value,
    p_title:$('mock-build-title').value.trim(),p_code:$('mock-build-code').value.trim(),
    p_minutes:Number($('mock-build-minutes').value),p_target:Number($('mock-build-target').value),
    p_calculator:$('mock-build-calc').checked,p_questions:ids
   };
   const {data:id,error}=await db.rpc('create_mock_pack',data);
   if(error||!id)throw Error(error?.message||'Could not assemble paper');
   say('Mock draft assembled from '+ids.length+' approved questions. Publication still requires 8+ questions, three distinct topics, exact marks and examiner approval.',false,'mock-admin-feedback');
   await loadMockPacks();
  }catch(err){say(err.message,true,'mock-admin-feedback')}
  finally{btn.disabled=false}
 });

 function renderDrafts(){
  const root=$('bank-draft-list');root.replaceChildren();
  const programme=$('bank-programme').value;const list=bank.drafts.filter(q=>q.qualification===$('bank-level').value&&(programme==='all'||q.programme===programme));
  for(const q of list){
   const item=txt('article','','bank-draft-item');
   item.append(txt('strong',q.id+' · '+q.topic),
    txt('small',(q.programme?'Grove '+q.programme.toUpperCase()+' · ':'')+q.tier+' · '+q.marks+' marks · '+q.suggested_minutes+' min · '+(q.calculator||'Calculator rule to check')+' · NOT APPROVED'),
    txt('p',''));
   const questionText=item.lastElementChild;
   if(window.MathsGroveMath)window.MathsGroveMath.write(questionText,q.prompt);else questionText.textContent=q.prompt;
   root.append(item);
  }
  if(!list.length)root.append(txt('p','No draft exemplars at this stage. AS/A Level comes later.'));
 }
 function editorialFor(id){return bank.editorial.find(x=>x.question_id===id)||null}
 function filteredQuestions(){
  const qual=$('bank-level').value,search=$('bank-search').value.trim().toLowerCase();
  const review=$('bank-review-filter').value,board=$('bank-board').value;
  return bank.questions.filter(q=>{
   const e=editorialFor(q.id),status=e?.review_status||'legacy_unmapped';
   const matchQual=qual==='AS_A_LEVEL'?['A_LEVEL','FURTHER_MATHS'].includes(q.qualification):q.qualification===qual;
   const query=(q.topic+' '+q.prompt+' '+q.qualification).toLowerCase();
   return matchQual&&(!search||query.includes(search))&&(review==='all'||status===review)&&(!board||!e?.board_key||e.board_key===board);
  });
 }
 function renderQuestions(){
  const root=$('bank-questions');root.replaceChildren();
  const list=filteredQuestions();
  for(const q of list){
   const row=document.createElement('tr');const e=editorialFor(q.id);
   const status=e?.review_status||'legacy_unmapped';
   const p=bank.practiceLabels.find(x=>x.question_id===q.id);
   const cols=[qualText(q.qualification),q.topic+'|'+q.prompt,q.marks,'Level '+q.difficulty,status,''];
   cols.forEach((value,index)=>{
    const td=document.createElement('td');
    if(index===1){
     td.append(txt('strong',(p?'Grove '+p.programme.toUpperCase()+' · ':'')+q.topic));
     const excerpt=txt('small','');if(window.MathsGroveMath)window.MathsGroveMath.write(excerpt,q.prompt.length>125?q.prompt.slice(0,125)+'…':q.prompt);else excerpt.textContent=q.prompt.slice(0,125);td.append(excerpt);
    }else if(index===4)td.append(txt('span',status.replaceAll('_',' '),'bank-status-pill '+status));
    else if(index===5){
     const button=txt('button','Inspect','button outline');button.type='button';
     button.onclick=()=>void showQuestion(q.id);
     td.append(button);
    }else td.textContent=String(value);
    row.append(td);
   });root.append(row);
  }
  if(!list.length){
   const row=document.createElement('tr'),cell=txt('td','No questions match these filters. Add an original question or select another level.');
   cell.colSpan=6;row.append(cell);root.append(row);
  }
  $('bank-question-count').textContent=String(bank.questions.length);
 }
 async function showQuestion(id){
  const q=bank.questions.find(x=>x.id===id);if(!q)return;
  bank.selected=id;
  $('bank-detail').hidden=false;
  $('bank-detail-title').textContent=q.topic;
  const e=editorialFor(id),p=bank.practiceLabels.find(x=>x.question_id===id),tags=$('bank-detail-meta');tags.replaceChildren();
  [qualText(q.qualification),e?.board_key?boardName(e.board_key):'No board mapping',
   e?.exam_tier||'Tier not mapped',q.marks+' marks','Difficulty '+q.difficulty,
   e?.suggested_seconds?Math.ceil(e.suggested_seconds/60)+' min suggested':'Time not set',
   e?.review_status||'Legacy pilot',p?'Grove '+p.programme.toUpperCase()+' · public practice':''].filter(Boolean).forEach(x=>tags.append(txt('span',x)));
  const prompt=$('bank-detail-prompt');
  if(window.MathsGroveMath)window.MathsGroveMath.write(prompt,q.prompt);else prompt.textContent=q.prompt;
  $('bank-detail-scheme').textContent='Loading private examiner guidance…';
  const canModerate=admin&&e?.owner_org===studio.membership.org_id&&bank.hasEditorial;
  $('bank-moderation').hidden=!canModerate;
  $('bank-review-note').value=e?.editorial_note||'';
  $('bank-detail').scrollIntoView({behavior:'smooth',block:'start'});
  const {data,error}=await db.from('mark_schemes').select('scheme').eq('question_id',id).maybeSingle();
  if(bank.selected!==id)return;
  $('bank-detail-scheme').textContent=error?
    'Examiner guidance unavailable. Verify staff permissions and network access.':
    data?.scheme||'No examiner scheme recorded for this pilot question. Do not approve without one.';
 }
 async function load(){
  say('Loading official board formats and your private question catalogue…');
  try{
   const [b,p,g,i,tierInfo,tierDrafts]=await Promise.all([
    fetch('./content/boards.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('Board catalogue unavailable');return r.json()}),
    fetch('./content/paper-blueprints.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('Blueprint register unavailable');return r.json()}),
    fetch('./content/GCSE/draft-exemplars.json',{cache:'no-store'}).then(r=>r.ok?r.json():{items:[]}),
    fetch('./content/IGCSE/draft-exemplars.json',{cache:'no-store'}).then(r=>r.ok?r.json():{items:[]}),
    fetch('./content/programmes/service-tiers.json',{cache:'no-store'}).then(r=>r.ok?r.json():{plans:{}}),
    fetch('./content/programmes/draft-questions.json',{cache:'no-store'}).then(r=>r.ok?r.json():{items:[]})
   ]);
   bank.boards=b.boards||[];bank.blueprints=p.blueprints||[];bank.serviceTiers=tierInfo;
   bank.drafts=[...(g.items||[]).map(q=>({...q,qualification:'GCSE',programme:'weekly'})),...(i.items||[]).map(q=>({...q,qualification:'IGCSE',programme:'weekly'})),...(tierDrafts.items||[])];
   renderServiceTiers();
   const {data:questions,error}=await db.from('question_bank')
     .select('id,qualification,topic,prompt,marks,difficulty,active,created_at')
     .order('created_at',{ascending:false}).limit(500);
   if(error)throw error;
   bank.questions=questions||[];
   const meta=await db.from('question_editorial')
     .select('question_id,owner_org,board_key,exam_tier,calculator_required,suggested_seconds,review_status,editorial_note')
     .limit(500);
   bank.hasEditorial=!meta.error;bank.editorial=meta.data||[];
   const labelResult=await db.from('practice_question_labels').select('question_id,programme,suggested_seconds').limit(500);
   bank.practiceLabels=labelResult.data||[];
   updateBoardOptions();updateAuthorOptions();mockBoardOptions();await loadMockPacks();
   if(!admin){$('bank-author').hidden=true;$('mock-admin').hidden=true}
   else{$('bank-author').hidden=false;$('mock-admin').hidden=false}
   say('Loaded '+bank.questions.length+' accessible questions. '+
     (bank.hasEditorial?'Private moderation metadata ready.':'The question content-studio SQL upgrade has not been installed. Viewing existing pilot items only.')+
     ' Mock blueprints are NOT yet assembled or timed.');
   bank.loaded=true;
  }catch(err){say('Unable to load mathematics library: '+(err?.message||'Connection error'),true)}
 }
 $('bank-level').addEventListener('change',updateBoardOptions);
 $('bank-board').addEventListener('change',()=>{renderBoards();renderQuestions();renderMockBlueprints()});
 $('bank-search').addEventListener('input',renderQuestions);
 $('bank-review-filter').addEventListener('change',renderQuestions);
 $('bank-programme').addEventListener('change',renderDrafts);
 $('bank-refresh').addEventListener('click',()=>void load());
 $('bank-detail-close').addEventListener('click',()=>{$('bank-detail').hidden=true;bank.selected=null});
 $('bank-author-qual').addEventListener('change',updateAuthorOptions);
 $('bank-author-board').addEventListener('change',updateAuthorOptions);
 $('bank-author-form').addEventListener('submit',async event=>{
  event.preventDefault();if(!admin||!bank.hasEditorial)return;
  const button=$('bank-author-save');button.disabled=true;
  try{
   const board=$('bank-author-board').value;
   if(!board)throw Error('Select a verified board');
   const payload={
    p_org:studio.membership.org_id,p_qualification:$('bank-author-qual').value,
    p_board_key:board,p_exam_tier:$('bank-author-tier').value,
    p_topic:$('bank-author-topic').value.trim(),p_prompt:$('bank-author-prompt').value.trim(),
    p_marks:Number($('bank-author-marks').value),
    p_difficulty:Number($('bank-author-difficulty').value),
    p_seconds:Number($('bank-author-minutes').value)*60,
    p_calculator:$('bank-author-calculator').checked,
    p_scheme:$('bank-author-scheme').value.trim(),
    p_note:$('bank-author-note').value.trim()
   };
   const {data,error}=await db.rpc('author_bank_question',payload);
   if(error||!data)throw Error(error?.message||'Could not save original question');
   say('Original question saved privately as an unpublished draft. Inspect it, solve independently, then approve when checked.',false,'bank-author-feedback');
   $('bank-author-form').reset();await load();
  }catch(err){say(err?.message||'Could not save question',true,'bank-author-feedback')}
  finally{button.disabled=false}
 });
 document.querySelectorAll('[data-bank-decision]').forEach(button=>button.addEventListener('click',async()=>{
  if(!bank.selected||!admin)return;
  button.disabled=true;
  try{
   const {data,error}=await db.rpc('moderate_bank_question',{
    p_question:bank.selected,p_status:button.dataset.bankDecision,p_note:$('bank-review-note').value.trim()
   });
   if(error||!data?.ok)throw Error(error?.message||'Moderation action failed');
   $('bank-detail').hidden=true;bank.selected=null;await load();
   say('Editorial status saved. Questions remain unpublished until a board-specific paper is moderated and explicitly released.');
  }catch(err){say(err?.message||'Could not moderate question',true)}
  finally{button.disabled=false}
 }));
 document.querySelector('[data-tab="bank"]')?.addEventListener('click',()=>{if(!bank.loaded)void load()});
}
