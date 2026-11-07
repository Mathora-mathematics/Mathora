/* MathsGrove public/unauthenticated browser smoke checks.
   Runs a local static preview: no real accounts, tokens or student data. */
import assert from 'node:assert/strict';
import {readFile, mkdir} from 'node:fs/promises';
import {createServer} from 'node:http';
import {resolve, dirname, extname, sep} from 'node:path';
import {fileURLToPath} from 'node:url';
import {chromium} from 'playwright';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const screenshotDir=resolve(root,'audits','browser-smoke');
await mkdir(screenshotDir,{recursive:true});
const MIME={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8',
 '.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8',
 '.json':'application/json; charset=utf-8','.svg':'image/svg+xml',
 '.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.woff2':'font/woff2'};
const server=createServer(async(req,res)=>{
 try{
  const parsed=new URL(req.url||'/', 'http://127.0.0.1');
  const uri=decodeURIComponent(parsed.pathname)==='/'?'/index.html':decodeURIComponent(parsed.pathname);
  const path=resolve(root,'.'+uri);
  if(!path.startsWith(root+sep))throw Error('Untrusted file request');
  const bytes=await readFile(path);
  res.writeHead(200,{'Content-Type':MIME[extname(path)]||'application/octet-stream',
   'Cache-Control':'no-store'});
  res.end(bytes);
 }catch{
  res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Not found');
 }
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const port=server.address().port,base='http://127.0.0.1:'+port;
const pages=['/','/portal.html','/studio.html','/family.html','/baseline.html','/sample.html'];
const viewports=[{label:'phone',width:390,height:844},{label:'desktop',width:1440,height:900}];
const failures=[],reports=[];
const browser=await chromium.launch({headless:true});
try{
 for(const viewport of viewports){
  const context=await browser.newContext({viewport:{width:viewport.width,height:viewport.height},
   deviceScaleFactor:1,reducedMotion:'reduce'});
  for(const path of pages){
   const page=await context.newPage();
   const pageErrors=[],brokenAssets=[];
   page.on('pageerror',err=>pageErrors.push(String(err.message).slice(0,200)));
   page.on('response',response=>{
    if(response.url().startsWith(base)&&response.status()>=400&&
       !response.url().includes('favicon.ico'))brokenAssets.push(response.url());
   });
   try{
    const response=await page.goto(base+path,{waitUntil:'domcontentloaded',timeout:20000});
    await page.waitForTimeout(750);
    const stats=await page.evaluate(()=>{
     const doc=document.documentElement;
     const images=[...document.querySelectorAll('img')];
     const unlabeledButtons=[...document.querySelectorAll('button')].filter(x=>
      !x.textContent.trim()&&!x.getAttribute('aria-label')&&!x.getAttribute('title')).length;
     const brokenHashAnchors=[...document.querySelectorAll('a[href^="#"]')].filter(a=>{
      const target=a.getAttribute('href');return target.length>1&&!document.getElementById(target.slice(1));
     }).length;
     return {
      title:document.title,
      overflow:Math.max(doc.scrollWidth,document.body?.scrollWidth||0)-doc.clientWidth,
      imageMissingAlt:images.filter(x=>!x.hasAttribute('alt')).length,
      unlabeledButtons,brokenHashAnchors,
      bodyCharacters:document.body?.innerText?.trim().length||0,
      overflowElements:[...document.querySelectorAll('body *')].map(el=>{
       const r=el.getBoundingClientRect();
       return {tag:el.tagName.toLowerCase(),id:el.id,cls:String(el.className||'').slice(0,100),
        left:Math.round(r.left),right:Math.round(r.right),width:Math.round(r.width)}
      }).filter(r=>r.right>doc.clientWidth+8&&r.width>0).sort((a,b)=>b.right-a.right).slice(0,10)
     };
    });
    const status=response?.status()||0;
    const key=(path==='/'?'home':path.replace(/\W+/g,'-'))+'-'+viewport.label;
    await page.screenshot({path:resolve(screenshotDir,key+'.png'),fullPage:false});
    reports.push({path,viewport:viewport.label,status,...stats,
     brokenAssets:brokenAssets.length,scriptErrors:pageErrors.length});
    if(status!==200)failures.push(key+' returned HTTP '+status);
    if(stats.bodyCharacters<80)failures.push(key+' rendered an empty or tiny document');
    if(stats.overflow>12)failures.push(key+' horizontal overflow '+stats.overflow+' px');
    if(brokenAssets.length)failures.push(key+' missing local asset(s): '+brokenAssets.slice(0,3).join('; '));
    // Record JavaScript faults for investigation; external auth/CDN failures are treated separately.
    if(pageErrors.length)console.log('Browser script warnings ('+key+'): '+pageErrors.slice(0,4).join(' | '));
   }catch(error){
    failures.push(path+' ('+viewport.label+'): '+String(error.message||error).slice(0,230));
   }finally{await page.close()}
  }
  await context.close();
 }
}finally{await browser.close();await new Promise(resolve=>server.close(resolve))}
for(const r of reports)console.log(JSON.stringify(r));
if(failures.length){console.error('MathsGrove browser smoke findings:\n'+failures.join('\n'));process.exitCode=1}
else console.log('MathsGrove public-page browser smoke passed at desktop and phone widths.');
