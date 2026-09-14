import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import assert from 'node:assert/strict';

const root = resolve('dist');
const cloudflareSrc = 'https://static.cloudflareinsights.com/beacon.min.js';
const cloudflareToken = '9d4cad873ea74623813b1816c8e84b30';
function walk(dir) { return readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(resolve(dir,e.name)):[resolve(dir,e.name)]); }
const files = walk(root), pages=files.filter(f=>f.endsWith('.html'));
assert(pages.length >= 50, `Expected bilingual content pages, found ${pages.length}`);
let links=0;
for(const file of pages){
  const html=readFileSync(file,'utf8'), path=relative(root,file).replaceAll('\\','/');
  assert(html.includes('<html lang="'), `Missing language: ${path}`);
  assert(/<h1(?:\s|>)/.test(html), `Missing heading: ${path}`);
  assert(/<meta name="description"/.test(html), `Missing description: ${path}`);
  assert(/<link rel="canonical" href="https:\/\/csaleuven.github.io\//.test(html),`Invalid canonical: ${path}`);
  assert(!html.includes('/CSALeuven.github.io/'), `Incorrect base path: ${path}`);
  assert(!/<form\b/.test(html), `Unexpected server form: ${path}`);
  assert.equal(html.split(cloudflareSrc).length - 1, 1, `Expected one Cloudflare beacon URL: ${path}`);
  assert.equal(html.split(cloudflareToken).length - 1, 1, `Expected one Cloudflare site token: ${path}`);
  assert.equal((html.match(/\bdata-cf-beacon=/g) ?? []).length, 1, `Expected one Cloudflare configuration: ${path}`);
  const beacon = [...html.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].find(match => match[0].includes(cloudflareSrc));
  assert(beacon, `Missing Cloudflare script element: ${path}`);
  assert(beacon[0].includes(`src="${cloudflareSrc}"`), `Rewritten Cloudflare script source: ${path}`);
  assert(/\btype="module"/.test(beacon[0]), `Cloudflare script must retain module type: ${path}`);
  const config = beacon[0].match(/\bdata-cf-beacon=(["'])(.*?)\1/);
  assert(config, `Missing Cloudflare script configuration: ${path}`);
  assert.deepEqual(JSON.parse(config[2].replaceAll('&quot;', '"')), { token: cloudflareToken }, `Incorrect Cloudflare configuration: ${path}`);
  assert(/^\s*(?:<!--[\s\S]*?-->\s*)?<\/body>/.test(html.slice(beacon.index + beacon[0].length)), `Cloudflare script must end the body: ${path}`);
  if(path.includes('sample-')) {
    assert(/noindex, follow/.test(html), `Sample must not be indexed: ${path}`);
    assert(!html.includes('"@type":"Event"'), `Sample must not advertise a real Event: ${path}`);
  }
  const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
  for(const match of html.matchAll(/<(?:a|img|script|link)\b[^>]*?\b(?:href|src)="([^\"]+)"/g)){
    const value=match[1].replaceAll('&amp;','&');
    if(value.startsWith('#')){assert(ids.has(value.slice(1)),`Broken anchor ${value}: ${path}`);continue;}
    if(!value.startsWith('/') || value.startsWith('//')) continue;
    const pathname=decodeURIComponent(value.split(/[?#]/)[0]);
    const target=resolve(root,'.'+pathname,pathname.endsWith('/')?'index.html':'');
    assert(existsSync(target),`Broken internal reference ${value}: ${path}`);links++;
  }
}
assert(existsSync(resolve(root,'sitemap-index.xml')),'Missing sitemap');
assert(existsSync(resolve(root,'robots.txt')),'Missing robots.txt');
assert(!readFileSync(resolve(root,'sitemap-0.xml'),'utf8').includes('/sample-'),'Samples found in sitemap');
for(const asset of ['images/brand/csal-logo.jpg','images/social/wechat-csal.jpg']) {
  assert(readFileSync(resolve(root,asset)).equals(readFileSync(resolve('public',asset))),`Altered official asset: ${asset}`);
}
console.log(`PASS: ${pages.length} pages, ${links} internal references, metadata, sample safeguards, unchanged official assets and exactly one Cloudflare beacon per page.`);
