import fs from 'node:fs';
import vm from 'node:vm';

const appSource=fs.readFileSync('app.js','utf8').replace(
  /if\(document\.readyState==="loading"\)document\.addEventListener\("DOMContentLoaded",start,\{once:true\}\);else start\(\);/,
  'window.__debug={openingHTML,teachHTML,examplesHTML,practiceHTML,homeworkHTML,validate};'
);

function smoke(file,expected){
  const ctx={
    window:{},
    document:{querySelector(){return null},querySelectorAll(){return []},readyState:'loading'},
    navigator:{},
    localStorage:{getItem(){return null},setItem(){}},
    requestAnimationFrame(){return 0},
    ResizeObserver:class{observe(){} disconnect(){}},
    location:{hash:''},
    innerWidth:1400,
    devicePixelRatio:1,
    console
  };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(file,'utf8'),ctx,{filename:file});
  vm.runInContext(appSource,ctx,{filename:'app.js'});
  if(!ctx.window.__debug.validate()) throw Error(file+' validate() failed');
  if(ctx.window.LESSONS.length!==expected) throw Error(file+' unexpected lesson count');
  for(const l of ctx.window.LESSONS){
    const d=ctx.window.LESSON_CONTENT[l.id],sm=ctx.window.SOW_MAP[l.id];
    for(const fn of ['openingHTML','teachHTML','examplesHTML','practiceHTML','homeworkHTML']){
      try{ctx.window.__debug[fn](l,d,sm)}
      catch(e){throw Error(file+' '+l.id+' '+fn+': '+e.message)}
    }
  }
  console.log('Renderer smoke PASS:',file,expected+' lessons');
}
smoke('year10-data.js',47);
smoke('year9-data.js',60);

smoke('year8-data.js',54);

smoke('year7-data.js',69);
