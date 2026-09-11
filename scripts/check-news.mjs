import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';

const key = 'embassy-back-to-school-safety-2026';
const sourceUrl = 'https://mp.weixin.qq.com/s/ZGzRSXimtxFkrC-dYU7maA';
const read = route => readFileSync(`dist/${route}index.html`, 'utf8').replaceAll('&amp;', '&');
const text = html => html.replace(/<[^>]+>/g, ' ')
  .replace(/&#(?:x([0-9a-f]+)|(\d+));/gi, (_, hex, decimal) => String.fromCodePoint(parseInt(hex ?? decimal, hex ? 16 : 10)))
  .replaceAll('&apos;', "'").replaceAll('&quot;', '"').replace(/\s+/g, ' ');
const sitemap = readFileSync('dist/sitemap-0.xml', 'utf8');

for (const lang of ['zh', 'en']) {
  const prefix = lang === 'en' ? 'en/' : '';
  const route = `${prefix}news/${key}/`;
  const page = read(route);
  const content = text(page);
  const category = lang === 'zh' ? '安全提醒' : 'Safety Advisory';
  const source = lang === 'zh' ? '中国驻比利时大使馆' : "Embassy of the People's Republic of China in Belgium";
  const label = lang === 'zh' ? '原文链接' : 'Read the original notice';

  assert(content.includes(category) && content.includes(source), `Missing category/issuer: ${route}`);
  assert(page.includes('id="news-source-heading"'), `Missing visible source block: ${route}`);
  assert(page.includes(`href="${sourceUrl}"`) && content.includes(label), `Missing canonical original-notice link: ${route}`);
  assert(content.includes(lang === 'zh' ? '并非通知发布方' : 'not issuing it'), `Unclear CSAL/issuer distinction: ${route}`);
  if (lang === 'en') assert(content.includes('not an official translation'), 'Missing English summary disclosure');
  assert(page.includes('datetime="2026-08-31T16:30:40.000Z"'), `Wrong source publication timestamp: ${route}`);
  assert(content.includes(lang === 'zh' ? '比利时时间' : 'Belgium time'), `Unlabeled source date timezone: ${route}`);
  assert(page.includes(`<meta property="og:type" content="article"`), `Wrong news share type: ${route}`);
  assert(page.includes(`href="https://csaleuven.github.io/${route}"`), `Wrong news canonical: ${route}`);
  assert(sitemap.includes(`https://csaleuven.github.io/${route}`), `News missing from sitemap: ${route}`);
  assert(!page.includes('noindex') && !page.includes('"@type":"Event"'), `News treated as a sample/event: ${route}`);
  assert(!content.includes(lang === 'zh' ? '活动信息' : 'Event details'), `News shows event details: ${route}`);
  const counterpart = lang === 'zh' ? `/en/news/${key}/` : `/news/${key}/`;
  assert(page.includes(`href="${counterpart}"`), `Missing language counterpart: ${route}`);

  for (const listing of [prefix, `${prefix}news/`]) {
    const html = read(listing);
    const cards = html.match(/<article class="news-card"[\s\S]*?<\/article>/g) ?? [];
    assert(cards.some(card => card.includes(`href="/${route}"`) && card.includes(category)), `Notice missing from Community Updates: ${listing || '/'}`);
    assert(!html.includes('sample-community-update'), `Placeholder link remains: ${listing || '/'}`);
  }
  assert(!read(`${prefix}events/`).includes(`/news/${key}/`), `Notice appears in event archive: ${lang}`);
  assert(!existsSync(`dist/${prefix}events/${key}/index.html`), 'News generated an event route');
  assert(!existsSync(`dist/${prefix}news/sample-community-update/index.html`), 'Removed placeholder still built');

  // Existing CSAL updates without either optional source field must keep working.
  const legacy = read(`${prefix}news/welcome-to-csal/`);
  assert(!legacy.includes('id="news-source-heading"') && !legacy.includes('Source published (Belgium time)'), 'External-source UI leaked into CSAL-authored news');
  assert(!legacy.includes('undefined') && !legacy.includes(sourceUrl), 'Optional source fields broke existing news');
}
assert(!sitemap.includes('sample-community-update'), 'Placeholder remains in sitemap');
console.log('News: bilingual safety advisory, canonical source, CSAL attribution, homepage/news listings, language links, legacy compatibility and non-event classification passed.');
