import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const html=readFileSync(new URL('../studio.html',import.meta.url),'utf8');
const headEnd=html.indexOf('</head>'),bodyStart=html.search(/<body\b/i);
assert.ok(headEnd>0&&bodyStart>headEnd,'Expected an explicit head and body');
const head=html.slice(0,headEnd),body=html.slice(bodyStart);
assert.ok(!/<(?:datalist|option|section|div|main|aside)\b/i.test(head),
  'Visible/flow content must not be nested in Studio <head>');
assert.ok(head.includes('<title>Examiner Studio'),'Keep the Studio title in head');
assert.ok(head.includes('name="robots" content="noindex,nofollow"'),
  'Keep private Studio pages excluded from search engines');
for(const id of ['mg-academic-levels','mg-exam-board-codes']){
 assert.ok(body.includes('<datalist id="'+id+'">'),'Studio dropdown datalist '+id+' must exist in body');
 assert.ok(html.includes('list="'+id+'"'),'An input must reference '+id);
}
assert.ok(head.includes('studio.css'),'Main Studio CSS must remain in head');
console.log('Studio HTML structure checks passed: data lists are in body and head metadata/styles stay intact.');
