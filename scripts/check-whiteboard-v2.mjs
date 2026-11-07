// No-dependency regression checks for the graph-paper whiteboard.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {runInNewContext} from "node:vm";

const handlers=new Map(),frames=[],store=new Map(),drawingCalls=[];
function context(){
 const ctx={};
 for(const name of ["save","restore","clearRect","fillRect","beginPath","moveTo",
  "lineTo","stroke","arc","fill","drawImage"]){
  ctx[name]=(...args)=>drawingCalls.push({name,args});
 }
 return ctx;
}
function canvas(visible=false){
 const ctx=context();
 return {
  width:900,height:520,dataset:{},
  getContext:()=>ctx,
  getBoundingClientRect:()=>({left:0,top:0,width:450,height:260}),
  setPointerCapture:()=>{},
  addEventListener:(name,fn)=>{if(visible)handlers.set(name,fn)},
  toBlob:fn=>fn({type:"image/png",size:1024})
 };
}
const visibleCanvas=canvas(true);
const toolbar={querySelectorAll:()=>[],querySelector:()=>null};
const globalState={
 window:{},
 document:{createElement:tag=>{assert.equal(tag,"canvas");return canvas()}},
 sessionStorage:{
  getItem:key=>store.get(key)??null,
  setItem:(key,value)=>store.set(key,value),
  removeItem:key=>store.delete(key)
 },
 requestAnimationFrame:fn=>{frames.push(fn);return frames.length},
};
runInNewContext(readFileSync(new URL("../whiteboard.js",import.meta.url),"utf8"),globalState);
const board=globalState.window.MathsGroveBoard.setup({canvas:visibleCanvas,toolbar});
const event=(x,y,pointerId=7)=>({clientX:x,clientY:y,pointerId,isPrimary:true,preventDefault(){}});
function fire(name,e){assert.ok(handlers.has(name),name);handlers.get(name)(e)}
function flush(){while(frames.length)frames.shift()()}
board.setContext("session-a:1");
fire("pointerdown",event(20,20));fire("pointermove",event(40,40));
fire("pointerup",event(40,40));flush();
assert.equal(board.getStrokeCount(),1);
assert.equal(board.isDirty(),true);
const savedVersion=board.getVersion();
assert.equal(board.markSaved(savedVersion),true);
assert.equal(board.isDirty(),false);
board.setContext("session-a:2");flush();
assert.equal(board.getStrokeCount(),0);
board.setContext("session-a:1");flush();
assert.equal(board.getStrokeCount(),1,"the first question should be restored from this tab");
assert.equal(board.isDirty(),false);
fire("pointerdown",event(80,80));fire("pointermove",event(90,90));
assert.equal(board.markSaved(savedVersion),false,"stale upload must not mark fresh ink as saved");
assert.equal(board.isDirty(),true);
fire("pointerup",event(90,90));flush();
board.undo();flush();
assert.equal(board.getStrokeCount(),1,"undo only removes the latest stroke");
board.setGrid("blank");flush();
assert.equal(visibleCanvas.dataset.grid,"blank");
const blob=await board.exportBlob();
assert.equal(blob.type,"image/png");
assert.ok(drawingCalls.some(c=>c.name==="drawImage"),"the rendered page should include the paper layer");
console.log("MathsGrove whiteboard checks passed: drawing, restoration, undo, grid, export and stale-save protection.");
