import {readFileSync, readdirSync, existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import {searchKnowledge} from '../src/lib/knowledge-search.mjs';
const walk=dir=>readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(resolve(dir,e.name)):[resolve(dir,e.name)]);
const files=walk(resolve('src/content/knowledge')).filter(p=>p.endsWith('.md'));
const records=files.map(path=>{const [,meta,body]=readFileSync(path,'utf8').split('---');return {...JSON.parse(meta),body};});
assert(records.length>=45,'Complete first-pass handbook corpus');
const keys=new Set(records.map(r=>r.key));assert.equal(keys.size,records.length);
assert(new Set(records.map(r=>r.category)).size>=9);
for(const record of records){
  assert.equal(record.sourceYear,2024);assert(['legacy-2024','reviewed','partially-reviewed','needs-verification'].includes(record.reviewStatus));
  if(record.reviewStatus==='reviewed')assert(record.lastReviewed&&record.officialSources.length,'Reviewed content needs a dated official review');
  assert(record.sourcePages.length>0);assert(record.related.length>0);
  for(const key of record.related)assert(keys.has(key),`Broken related ${key}`);
  assert(!/^\|/m.test(record.body),`Wide Markdown table remains in ${record.key}`);
  assert(record.body.trim().length>150,`Thin content: ${record.key}`);
}
const cases=[
 ['租房',['housing/choosing-a-room','housing/finding-housing','housing/contracts']],['合同',['housing/contracts']],['押金',['housing/deposit-and-condition','housing/contracts']],
 ['Kotwijs',['housing/finding-housing']],['居留卡',['arrival/residence-card']],['Annex 15',['arrival/residence-card','arrival/bank-account']],
 ['银行',['arrival/bank-account']],['保险',['arrival/health-insurance']],['医保',['arrival/health-insurance']],['GP',['healthcare/seeing-a-doctor','healthcare/student-health']],
 ['急诊',['healthcare/emergency']],['112',['healthcare/emergency']],['自行车',['transport/bike-rental','transport/buying-bikes','transport/cycling-rules']],
 ['公交',['transport/bus']],['De Lijn',['transport/bus']],['火车',['transport/train']],['SNCB',['transport/train']],['行李',['before-arrival/packing']],
 ['垃圾',['life/waste-recycling']],['Toledo',['study/learning-platforms']],['ISP',['study/isp']],['警察查房',['arrival/residence-card']],
 ['bus pass',['transport/bus']],['verblijfskaart',['arrival/residence-card']],['huisarts',['healthcare/seeing-a-doctor','healthcare/student-health']],
 ['Individual Study Programme',['study/isp']],['Ａｎｎｅｘ　１５',['arrival/residence-card','arrival/bank-account']],['de lijn',['transport/bus']],
];
for(const [query,expected] of cases){const hits=searchKnowledge(records,query);assert(hits.slice(0,3).some(h=>expected.includes(h.key)),`Search ${query}: ${hits.slice(0,3).map(h=>h.key)}`);}
assert.equal(searchKnowledge(records,'').length,0);assert.equal(searchKnowledge(records,'zzzznoresultzzzzz').length,0);
const packing=JSON.parse(readFileSync('src/data/packing-2024.json','utf8'));
assert(packing.length>=98);assert.equal(new Set(packing.map(p=>p.id)).size,packing.length);assert.equal(new Set(packing.map(p=>p.category)).size,11);
const counts={documents:7,stationery:10,clothing:29,electronics:10,kitchen:5,toiletries:4,tools:5,food:10,medicine:8,cosmetics:7,other:3};
for(const [category,count] of Object.entries(counts))assert.equal(packing.filter(p=>p.category===category).length,count);
assert.equal(createHash('sha256').update(readFileSync('public/documents/csal-student-handbook-2024.pdf')).digest('hex'),'56ff11f79be2eed61851b02c4c0e3d85aa413b09d28e41b30f7499614bb4b8b5');
if(existsSync('dist/new-students/search.json')){
 const built=JSON.parse(readFileSync('dist/new-students/search.json','utf8'));assert.equal(built.length,records.length);
 for(const [query,expected] of cases)assert(searchKnowledge(built,query).slice(0,3).some(h=>expected.includes(h.key)),`Built search failed: ${query}`);
 assert.equal(searchKnowledge(built,'充电宝')[0]?.key,'before-arrival/packing','Packing item names must be searchable from the main guide');
 for(const record of records){const zh=readFileSync(`dist/new-students/${record.key}/index.html`,'utf8'), en=readFileSync(`dist/en/new-students/${record.key}/index.html`,'utf8');assert(zh.includes('2024 手册'));if(!en.includes('Reviewed English translation')){assert(en.includes('noindex, follow'));assert(en.includes(record.approvedUpdateIds?.length?'English translations of the dated updates':'English discovery summary only'));}}
 const page=readFileSync('dist/new-students/before-arrival/packing/index.html','utf8');assert.equal((page.match(/data-pack-category=/g)??[]).length,98);assert(page.includes('携带药品须遵守中国出境'));
}
console.log(`PASS: 45 articles, 9 categories, ${cases.length} Chinese/English search cases, 98 packing items, original PDF hash and review metadata.`);
