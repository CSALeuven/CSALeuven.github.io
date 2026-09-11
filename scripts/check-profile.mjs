import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { site } from '../src/data/site.ts';
import { mission, responsibilities, homeThemes } from '../src/data/about.ts';

const source = JSON.parse(readFileSync('docs/official-profile/confirmed-source.json', 'utf8'));
assert.equal(mission.zh, source.mission, 'Chinese mission differs from committee-confirmed source');
assert.deepEqual(responsibilities.map(item => item.text.zh), source.responsibilities, 'Chinese responsibilities differ from committee-confirmed source');
assert.deepEqual(responsibilities.map(item => item.number), ['01','02','03','04']);
assert.deepEqual(site.officialNames, {
  zh: '鲁汶中国学生学者联合会',
  en: 'Chinese Students and Scholars Association in Leuven',
  nl: 'Chinese Studenten en Geleerden Vereniging van Leuven',
});
assert.deepEqual(site.shortNames, {zh:'鲁汶学联', en:'CSAL', nl:'CSAL'});
assert.equal(site.name, site.officialNames, 'Existing name consumers must use canonical names');
assert.equal(site.shortName, site.shortNames.en);
const archive = 'src/content/handbook-notes/about.md';
assert(existsSync(archive), 'Archived handbook profile removed');
assert.equal(createHash('sha256').update(readFileSync(archive)).digest('hex'), '0a5ed3ddcb17406793dac6601e4fcb22daba5b520d53793b222752a7080d76fd', 'Archived handbook profile changed');

if (process.argv.includes('--source-only')) {
  console.log('Profile source: five Chinese paragraphs match exactly; all three names, aliases and handbook archive passed.');
  process.exit(0);
}

const read = route => readFileSync(`dist/${route}index.html`, 'utf8');
const decode = value => value.replace(/&#(?:x([0-9a-f]+)|(\d+));/gi, (_,hex,decimal) => String.fromCodePoint(parseInt(hex ?? decimal, hex ? 16 : 10)))
  .replaceAll('&apos;', "'").replaceAll('&quot;', '"').replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&amp;', '&');
const text = html => decode(html.replace(/<[^>]+>/g, '')).trim();
const order = ['organization-name','our-mission','core-responsibilities','current-committee','previous-committees','our-story'];
for (const lang of ['zh','en']) {
  const prefix = lang === 'en' ? 'en/' : '';
  const about = read(`${prefix}about/`);
  const home = read(prefix);
  let previous = -1;
  for (const id of order) {
    const index = about.indexOf(`id="${id}"`);
    assert(index > previous, `Wrong section order or missing ${id} in ${lang}`);
    previous = index;
  }
  const renderedMission = about.match(/<p\b[^>]*\bdata-official-mission\b[^>]*>([\s\S]*?)<\/p>/)?.[1];
  assert(renderedMission, `Missing full mission in ${lang}`);
  assert.equal(text(renderedMission), mission[lang], `Rendered mission altered in ${lang}`);
  const renderedResponsibilities = [...about.matchAll(/<p\b[^>]*\bdata-official-responsibility="([0-9]+)"[^>]*>([\s\S]*?)<\/p>/g)];
  assert.equal(renderedResponsibilities.length, 4);
  renderedResponsibilities.forEach((match,index) => {
    assert.equal(match[1], responsibilities[index].number);
    assert.equal(text(match[2]), responsibilities[index].text[lang], `Rendered responsibility ${index+1} altered in ${lang}`);
  });
  const nameSection = about.match(/<dl\b[^>]*class="official-names"[^>]*>[\s\S]*?<\/dl>/)?.[0];
  assert(nameSection, 'Missing institutional name list');
  for (const name of Object.values(site.officialNames)) assert(text(nameSection).includes(name), `Missing official name: ${name}`);
  assert(nameSection.includes('lang="zh-CN"') && nameSection.includes('lang="en"') && nameSection.includes('lang="nl"'), 'Missing name language attributes');
  assert(about.includes(site.aboutDescription[lang]), 'Missing official About metadata');
  assert(about.includes(lang === 'zh' ? '连接你我，连接鲁汶。' : 'Connecting people. Connecting Leuven.'), 'About slogan changed');
  assert(!/HandbookAbout|2024 手册中的学联历史介绍|historical CSAL profile from the 2024 handbook|2024 手册中的 CSAL|协会详细介绍与正式使命表述待委员会确认|formal mission statement are awaiting committee confirmation|Our areas of focus|我们希望做的事/.test(about), 'Obsolete public About content remains');
  assert(about.includes(`href="/${lang === 'zh' ? 'en/' : ''}about/"`), 'About language counterpart missing');
  assert(home.includes(`href="/${prefix}about/"`), 'Homepage About link missing');
  for (const theme of homeThemes) assert(text(home).includes(theme.heading[lang]) && text(home).includes(theme.text[lang]), 'Homepage theme missing');
  assert(!text(home).includes(mission[lang]), 'Full formal mission copied onto homepage');
  for (const item of responsibilities) assert(!text(home).includes(item.text[lang]), 'Full responsibility copied onto homepage');
}

const walk = dir => readdirSync(dir,{withFileTypes:true}).flatMap(entry => entry.isDirectory() ? walk(`${dir}/${entry.name}`) : [`${dir}/${entry.name}`]);
const pages = walk('dist').filter(path => path.endsWith('.html'));
for (const path of pages) {
  const html = readFileSync(path, 'utf8');
  const lang = path.startsWith('dist/en/') ? 'en' : 'zh';
  const footer = html.match(/<footer\b[\s\S]*?<\/footer>/)?.[0];
  assert(footer && text(footer).includes(site.officialNames[lang]), `Wrong footer name: ${path}`);
  assert(text(footer).includes(site.disclaimer[lang]), `Independence disclaimer changed: ${path}`);
  assert(!html.includes('Chinese Students and Scholars Association Leuven'), `Old formal English name: ${path}`);
  assert(!html.includes('hreflang="nl"') && !html.includes('href="/nl/'), `Dutch navigation created: ${path}`);
}
assert(!existsSync('dist/nl'), 'Dutch routes created');
assert(!readFileSync('dist/sitemap-0.xml','utf8').includes('https://csaleuven.github.io/nl/'), 'Dutch route in sitemap');
console.log(`Profile: exact Chinese source text, bilingual rendering/order, three official names, ${pages.length} footers, concise homepages, archived handbook and no Dutch routes passed.`);
