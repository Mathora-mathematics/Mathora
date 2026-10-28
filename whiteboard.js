/* MathsGrove graph-paper whiteboard. No dependencies; drawing happens locally until
   the student explicitly saves a question to protected Supabase storage. */
(function(){
"use strict";
function setup(options){
 const canvas=options.canvas,ctx=canvas.getContext("2d"),root=options.toolbar;
 if(!ctx||!canvas||!root)throw Error("Whiteboard container missing");
 const board={strokes:[],active:null,tool:"pen",color:"#19304D",thickness:3,grid:"square",enabled:true,dirty:false};
 function grid(ctx,width,height,mode){
  ctx.save();ctx.fillStyle="#ffffff";ctx.fillRect(0,0,width,height);
  if(mode!=="blank"){
   const step=mode==="line"?28:24;
   ctx.beginPath();ctx.strokeStyle="#e2eaf2";ctx.lineWidth=1;
   for(let y=step+.5;y<height;y+=step){ctx.moveTo(0,y);ctx.lineTo(width,y)}
   if(mode==="square")for(let x=step+.5;x<width;x+=step){ctx.moveTo(x,0);ctx.lineTo(x,height)}
   ctx.stroke();
   if(mode==="square"){ctx.beginPath();ctx.lineWidth=1;ctx.strokeStyle="#cbd8e6";
    for(let y=step*5+.5;y<height;y+=step*5){ctx.moveTo(0,y);ctx.lineTo(width,y)}
    for(let x=step*5+.5;x<width;x+=step*5){ctx.moveTo(x,0);ctx.lineTo(x,height)}
    ctx.stroke();}
  }
  ctx.restore();
 }
 function drawInk(target){
  target.save();
  for(const stroke of board.strokes){
   if(!stroke.points.length)continue;
   target.globalCompositeOperation=stroke.tool==="eraser"?"destination-out":"source-over";
   target.globalAlpha=stroke.tool==="highlighter"?0.32:1;
   target.strokeStyle=stroke.color;
   target.fillStyle=stroke.color;
   target.lineWidth=stroke.tool==="eraser"?24:stroke.tool==="highlighter"?19:stroke.width;
   target.lineJoin="round";target.lineCap="round";target.beginPath();
   target.moveTo(stroke.points[0].x,stroke.points[0].y);
   if(stroke.points.length===1){
    const pt=stroke.points[0];target.beginPath();target.arc(pt.x,pt.y,target.lineWidth/2,0,Math.PI*2);target.fill();
   }else{
    for(const pt of stroke.points.slice(1))target.lineTo(pt.x,pt.y);
    target.stroke();
   }
  }
  target.restore();
 }
 function render(){ctx.clearRect(0,0,canvas.width,canvas.height);drawInk(ctx)}
 function setDirty(){board.dirty=true;options.onChange?.()}
 function updateControls(){
  root.querySelectorAll("[data-board-tool]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.boardTool===board.tool)));
  root.querySelectorAll("[data-board-color]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.boardColor===board.color)));
 }
 function setTool(v){if(!["pen","highlighter","eraser"].includes(v))return;board.tool=v;updateControls()}
 function coords(e){const r=canvas.getBoundingClientRect();return{x:(e.clientX-r.left)*canvas.width/r.width,y:(e.clientY-r.top)*canvas.height/r.height}}
 canvas.addEventListener("pointerdown",e=>{
  if(!board.enabled)return;e.preventDefault();canvas.setPointerCapture(e.pointerId);
  const stroke={tool:board.tool,color:board.color,width:board.thickness,points:[coords(e)]};
  board.active=stroke;board.strokes.push(stroke);render();setDirty();
 });
 canvas.addEventListener("pointermove",e=>{
  if(!board.active||!board.enabled)return;e.preventDefault();board.active.points.push(coords(e));render();setDirty();
 });
 for(const event of ["pointerup","pointercancel","lostpointercapture"])canvas.addEventListener(event,()=>{board.active=null});
 root.querySelectorAll("[data-board-tool]").forEach(el=>el.addEventListener("click",()=>setTool(el.dataset.boardTool)));
 root.querySelectorAll("[data-board-color]").forEach(el=>el.addEventListener("click",()=>{board.color=el.dataset.boardColor;setTool("pen")}));
 root.querySelector("[data-board-undo]")?.addEventListener("click",()=>{if(!board.enabled||!board.strokes.length)return;board.strokes.pop();render();setDirty()});
 root.querySelector("[data-board-clear]")?.addEventListener("click",()=>{if(!board.enabled)return;board.strokes=[];render();setDirty()});
 root.querySelector("[data-board-grid]")?.addEventListener("change",e=>{board.grid=e.target.value;canvas.dataset.grid=board.grid;options.onGridChange?.(board.grid)});
 root.querySelector("[data-board-width]")?.addEventListener("input",e=>{board.thickness=Number(e.target.value)||3});
 canvas.dataset.grid=board.grid;updateControls();render();
 return {
  clear(){board.strokes=[];board.dirty=false;render()},
  isDirty(){return board.dirty},
  markSaved(){board.dirty=false},
  setEnabled(value){board.enabled=Boolean(value)},
  setGrid(v){if(["square","line","blank"].includes(v)){board.grid=v;canvas.dataset.grid=v;const input=root.querySelector("[data-board-grid]");if(input)input.value=v}},
  undo(){if(!board.enabled||!board.strokes.length)return;board.strokes.pop();render();setDirty()},
  exportBlob(){return new Promise(resolve=>{
    const out=document.createElement("canvas");out.width=canvas.width;out.height=canvas.height;
    const temp=out.getContext("2d");grid(temp,out.width,out.height,board.grid);temp.drawImage(canvas,0,0);
    out.toBlob(blob=>resolve(blob),"image/png");
  })},
  getStrokeCount(){return board.strokes.length}
 };
}
window.MathsGroveBoard={setup};
})();
