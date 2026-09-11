import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
const manifest = JSON.parse(readFileSync('docs/historical-events/wechat-import-manifest.json', 'utf8'));
const imported = manifest.articles.filter(a => a.importStatus === 'imported').sort((a,b) => b.dateOnly.localeCompare(a.dateOnly));
const read = route => readFileSync(`dist/${route}index.html`, 'utf8').replaceAll('&amp;', '&');
let checked = 0;
assert.equal(new Set(manifest.articles.map(a=>a.sourceUrl)).size, manifest.articles.length, 'Duplicate source articles');
for (const lang of ['zh','en']) {
  const prefix = lang === 'en' ? 'en/' : '';
  const archive = read(`${prefix}events/`), home = read(prefix);
  assert(!archive.includes('/events/sample-') && !home.includes('/events/sample-'), 'Demo event links remain');
  let previous = -1;
  for (const event of imported) {
    const route = `${prefix}events/${event.eventKey}/`;
    const index = archive.indexOf(`href="/${route}"`);
    assert(index > previous, `Archive date order or missing event: ${route}`); previous = index;
    assert(archive.includes(`id="year-${event.dateOnly.slice(0,4)}"`), 'Missing year group');
    const html = read(route);
    assert(!html.includes('noindex'), `Historical event excluded from indexing: ${route}`);
    assert(!html.includes('"@type":"Event"'), `Past recap emits current Event structured data: ${route}`);
    assert(!html.includes('>Register ↗') && !html.includes('>前往报名 ↗'), `Past recap accepts registration: ${route}`);
    assert(html.includes(`<time datetime="${event.dateOnly}">`), `Event calendar date missing: ${route}`);
    assert(!html.includes(`datetime="${event.dateOnly}T`), `Invented event timestamp: ${route}`);
    assert(html.includes(`datetime="${new Date(event.sourcePublishedAt).toISOString()}"`), 'Source publication missing');
    assert(html.includes(`href="${event.sourceUrl}"`), 'Original source link missing');
    assert(html.includes('id="original-sources"') && html.includes('id="gallery-heading"'), 'Missing source/gallery headings');
    assert(html.includes('<meta property="og:type" content="article"'), 'Wrong recap metadata type');
    assert(html.includes(`<meta property="og:url" content="https://csaleuven.github.io/${route}"`), 'Wrong recap canonical');
    assert(!/<img[^>]+src="https?:/.test(html), 'Remote image hotlink');
    for (const photo of event.images) {
      assert(html.includes(`src="${photo.path}"`), `Missing photograph: ${photo.path}`);
      assert.equal(createHash('sha256').update(readFileSync(`dist${photo.path}`)).digest('hex'), photo.sha256, 'Photo bytes changed');
    }
    const cover = event.images.find(p=>p.cover);
    assert(html.includes(`<meta property="og:image" content="https://csaleuven.github.io${cover.path}"`), 'Wrong recap share image');
    checked++;
  }
  if (home.includes('RECENT MEMORIES')) {
    const archiveKeys = [...new Set([...archive.matchAll(new RegExp(`href="/${prefix}events/([a-z0-9-]+)/"`, 'g'))].map(m=>m[1]))];
    for (const key of archiveKeys.slice(0,3)) assert(home.includes(`href="/${prefix}events/${key}/"`), 'Missing recent homepage event');
  }
}
for (const event of manifest.articles.filter(a=>a.importStatus!=='imported')) {
  assert(!event.eventKey || !existsSync(`dist/events/${event.eventKey}/index.html`), 'Held source leaked into archive');
}
console.log(`Events: ${checked} bilingual recap pages, source dates, archive ordering, year navigation, local images and SEO passed.`);
