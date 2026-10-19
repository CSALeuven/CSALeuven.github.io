import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { committees } from '../src/data/committees.ts';

const audit=JSON.parse(readFileSync('docs/committee-history/source-audit.json','utf8'));
const allowedKeys=['current','members','sourceTitle','sourceUrl','termEndYear','year'];
assert.deepEqual(committees.map(c=>c.year),[2026,2025,2024,2023,2022,2021,2020,2019]);
assert.deepEqual(committees.filter(c=>c.current).map(c=>c.year),[2026],'Only the explicitly confirmed 2026–2027 team is current');
assert.equal(audit.currentYear,2026);
assert.equal(committees[0].termEndYear,2027);
assert.deepEqual(committees[0].members,['安琪琪','李康昕','党夷然','洪艺萍','孙文悦','刘举瑞','仲韩啸','谢晓婷','程显喆','刑孝南']);
const yearLabel=(committee,lang)=>{
  const term=committee.termEndYear?`${committee.year}–${committee.termEndYear}`:`${committee.year}`;
  return lang==='zh'?`${term}届`:`${term} Committee`;
};
let total=0;
for(const committee of committees){
  assert(Object.keys(committee).every(key=>allowedKeys.includes(key)),'Public data must not acquire profile fields');
  assert(committee.members.every(name=>typeof name==='string' && name.trim()===name && name.length>0),'Members must be plain exact name strings');
  assert.equal(new Set(committee.members).size,committee.members.length,'Duplicate name within a year');
  const source=audit.committees.find(c=>c.year===committee.year);
  assert(source,'Missing source audit');
  assert.deepEqual(committee.members,source.members,'Names differ from the reviewed source transcription');
  assert.equal(committee.current,source.current);
  assert.equal(committee.termEndYear,source.termEndYear);
  assert.equal(committee.sourceUrl,source.sourceUrl);
  if(committee.sourceUrl){
    assert.equal(committee.sourceTitle,source.sourceTitle);
    const url=new URL(committee.sourceUrl);
    assert.equal(url.origin,'https://mp.weixin.qq.com');
    assert.deepEqual([...url.searchParams.keys()].sort(),['__biz','idx','mid','sn']);
  }else{
    assert.equal(committee.year,2026,'Only the directly confirmed roster has no public source URL');
    assert.equal(source.sourceType,'user-confirmed');
    assert.equal(committee.sourceTitle,undefined,'Do not invent a public announcement');
  }
  total+=committee.members.length;
}
assert.equal(total,audit.totalNameYearRecords);
assert(!existsSync('src/data/team.ts')&&!existsSync('src/components/TeamMember.astro'),'Old profile placeholders remain');

for(const lang of ['zh','en']){
  const html=readFileSync(`dist/${lang==='en'?'en/':''}about/index.html`,'utf8');
  const sections=[...html.matchAll(/<section\b[^>]*class="[^"]*committee-section[^"]*"[^>]*>[\s\S]*?<\/section>/g)].map(m=>m[0]);
  assert.equal(sections.length,2,'Missing current/history sections');
  assert(!/<(?:img|picture|svg|script|form)\b/.test(sections.join('')),'Names-only sections must not contain portraits, profile widgets or scripts');
  assert(!/Committee details to follow|委员会信息待更新|Committee &amp; team/.test(html),'Placeholder team remains');
  const disclosures=[...sections[1].matchAll(/<details\b([^>]*)>/g)].map(m=>m[1]);
  assert.equal(disclosures.length,7);
  assert(disclosures.every(attrs=>!/(?:^|\s)open(?:\s|=|$)/.test(attrs)),'Historical years must initially be collapsed');
  assert(sections[0].includes('data-committee-year="2026"'),'Current section must show the confirmed new team');
  assert(!/<a\b/.test(sections[0]),'Do not show an announcement link when none was supplied');
  assert(sections[1].includes('data-committee-year="2025"'),'The former current team must be archived');
  for(const committee of committees){
    const marker=`data-committee-year="${committee.year}"`;
    assert.equal(html.split(marker).length-1,1,'Year rendered more than once');
    const fragment=html.split(marker)[1];
    const list=fragment.match(/<ul\b[^>]*class="committee-names"[^>]*>[\s\S]*?<\/ul>/)?.[0];
    assert(list && list.includes('lang="zh-CN"'),'Chinese names need the same language in both versions');
    const names=[...list.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/g)].map(m=>m[1]);
    assert.deepEqual(names,committee.members,`Changed or embellished names in ${lang}/${committee.year}`);
    assert(fragment.includes(yearLabel(committee,lang)),'Missing confirmed committee term');
    if(committee.sourceUrl)assert(html.replaceAll('&amp;','&').includes(`href="${committee.sourceUrl}"`),'Missing canonical source link');
  }
  // An allowlist of visible text catches profile details even outside the name list.
  const labels=lang==='zh'?['现任成员','历届成员','现任','原换届公示','（新标签页）']:['Current Committee','Previous Committees','Current','Original announcement','(Chinese, new tab)'];
  const allowed=[...labels,...committees.map(c=>yearLabel(c,lang)),...committees.flatMap(c=>c.members),'↗','+'];
  let text=sections.join('').replace(/<[^>]*>/g,'');
  for(const value of allowed.sort((a,b)=>b.length-a.length))text=text.replaceAll(value,'');
  assert.equal(text.replace(/\s+/g,''),'',`Unexpected public committee text: ${text}`);
}
console.log(`Committees: ${committees.length} terms, ${total} exact name/year records, names-only data and both About pages passed.`);
