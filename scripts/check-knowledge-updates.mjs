import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
const read = path => readFileSync(path, 'utf8');
const markdown = path => { const [, meta, body] = read(path).split('---'); return { ...JSON.parse(meta), body }; };
const walk = dir => readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(`${dir}/${e.name}`) : [`${dir}/${e.name}`]);
const audit = JSON.parse(read('docs/handbook-2026-updates/decisions.json'));
assert(audit.implementationAuthorized);
assert.match(audit.sourceWorkbookSha256, /^[a-f0-9]{64}$/);
assert.equal(audit.decisions.length, 129);
assert.equal(new Set(audit.decisions.map(d => d.id)).size, 129);
assert.equal(audit.decisions.filter(d => d.decision === 'Accept').length, 69);
assert.equal(audit.decisions.filter(d => d.decision === 'Edit and accept').length, 3);
const approved = audit.decisions.filter(d => d.applied);
const rejected = audit.decisions.filter(d => !d.applied);
assert.equal(approved.length, 72);
assert.equal(rejected.length, 57);
for (const d of audit.decisions) assert.equal(d.applied, d.decision !== 'Reject', d.id);
const expected = new Map();
for (const d of approved) {
  assert(d.approvedReplacement.zh.trim() && d.approvedReplacement.en.trim(), `${d.id}: both languages required`);
  for (const { file } of d.articles.filter(a => a.file.startsWith('src/content/knowledge/'))) {
    const key = file.slice('src/content/knowledge/'.length, -3);
    expected.set(key, new Set([...(expected.get(key) ?? []), d.id]));
  }
}
const updates = walk('src/content/knowledge-updates').filter(p => p.endsWith('.md')).map(markdown);
assert.equal(updates.length, expected.size);
assert.equal(new Set(updates.map(u => u.key)).size, updates.length);
const linkOnly = new Set(['NSG-114', 'NSG-115', 'NSG-116']);
// The decision ledger preserves the original annotations; public text omits editorial date prefixes.
const withoutReviewPrefix = text => text.replace(/^\d{4}-\d{2}-\d{2} 核实：\s*/, '')
  .replace(/^Checked \d{1,2} [A-Za-z]+ \d{4}: ([a-z]?)/, (_, first) => first.toUpperCase());
for (const update of updates) {
  const article = markdown(`src/content/knowledge/${update.key}.md`);
  assert.deepEqual(new Set(update.updateIds), expected.get(update.key), update.key);
  assert.deepEqual(article.approvedUpdateIds, update.updateIds);
  assert.equal(article.reviewStatus, 'partially-reviewed');
  assert.equal(article.sourceYear, 2024);
  assert.equal(article.lastReviewed, update.lastReviewed);
  for (const d of approved.filter(d => update.updateIds.includes(d.id))) {
    assert(update.body.includes(`<!-- ${d.id} -->`));
    if (!linkOnly.has(d.id)) {
      assert(article.body.includes(withoutReviewPrefix(d.approvedReplacement.zh)), `${d.id}: approved Chinese missing`);
      assert(update.body.includes(withoutReviewPrefix(d.approvedReplacement.en)), `${d.id}: matching English missing`);
    }
  }
  for (const d of rejected) assert(!update.body.includes(`<!-- ${d.id} -->`), `Rejected update ${d.id} was applied`);
  if (existsSync('dist/new-students/search.json')) {
    const html = read(`dist/en/new-students/${update.key}/index.html`);
    assert.equal((html.match(/id="approved-updates"/g) ?? []).length, 1);
    assert(html.includes('English translations of the reviewed topics'));
    const zh = read(`dist/new-students/${update.key}/index.html`);
    for (const page of [zh, html]) assert(!/\d{4}-\d{2}-\d{2}\s*(?:更新|核实)[:：]|(?:单项核对|单项核实记录|另行核实)\s*·\s*\d{4}-\d{2}-\d{2}|Checked \d{1,2} [A-Za-z]+ \d{4}:|English updates ·/.test(page), 'Editorial date label leaked into the page');
    assert(html.includes('noindex, follow'), 'Partial updates must not be advertised as a full English translation');
    assert(html.includes('lang="en" aria-labelledby="updates-title"'));
  }
}
// High-impact rejected wording and source data remain outside the approved scope.
assert(read('src/content/knowledge/transport/cycling-rules.md').includes('KU Leuven 当前说明将人行道骑行限制在 10 岁以下儿童'));
assert(read('src/content/knowledge/study/honours.md').includes('**手册所列百分比：** > 68%'));
assert(read('src/content/knowledge/sports/university-sports.md').includes('提前三天注册'));
for (const [key, stale] of [['arrival/university-registration','VISA'], ['life/eating-out','€3–7'], ['housing/deposit-and-condition','细小差异']]) {
  assert(!markdown(`src/content/knowledge/${key}.md`).quickAnswer.includes(stale), `Stale quick answer: ${key}`);
}
const publicGuide = [...walk('src/content/knowledge'), ...walk('src/content/knowledge-updates')].filter(p => p.endsWith('.md')).map(read).join('\n');
for (const stale of ['contact-station-form/formulier?station=157', '/insurance-social-security/health-insurance', 'https://www.sportoase.be/nl/zwembad', '#how-to-prepare-waste-for-collection-3']) assert(!publicGuide.includes(stale), `Obsolete link remains: ${stale}`);
if (existsSync('dist/new-students/search.json')) {
  const index = JSON.parse(read('dist/new-students/search.json'));
  assert(index.find(e => e.key === 'healthcare/student-health').body.includes('reimbursement for Gardasil 9'));
  assert(index.find(e => e.key === 'life/eating-out').body.includes('Student meals cost €6–12.'));
  assert(!index.some(e => /<!-- NSG-/.test(e.body)), 'Editorial markers must not leak into search');
  for (const path of ['new-students/healthcare', 'en/new-students/healthcare', 'new-students/healthcare/emergency', 'en/new-students/healthcare/emergency']) {
    const page = read(`dist/${path}/index.html`);
    assert(!page.includes('or when you cannot reach hospital yourself'));
    assert(!page.includes('若情况严重或无法自行前往医院'));
  }
}
console.log(`PASS: 72 approved updates, 57 rejections, 33 Chinese/English counterparts and source preservation; ${existsSync('dist/new-students/search.json') ? 'generated pages and search checked' : 'source-only checks (no build present)'}.`);
