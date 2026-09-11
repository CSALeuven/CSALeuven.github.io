/** Normalize consistently without depending on language-specific tokenizers. */
export function normalize(value) {
  return value.normalize('NFKC').toLocaleLowerCase('en').replace(/[^\p{L}\p{N}]+/gu, ' ').trim().replace(/\s+/g, ' ');
}
function contains(text, term) {
  // Short Latin words such as GP / ISP must not match the middle of another word.
  return /^[a-z0-9]+$/.test(term) ? (` ${text} `).includes(` ${term} `) : text.includes(term);
}
export function searchKnowledge(entries, query, lang = 'zh') {
  const normalized = normalize(query);
  if (!normalized) return [];
  const terms = normalized.split(' ');
  return entries.map(entry => {
    const title = normalize(entry.titleZh + ' ' + entry.titleEn);
    const aliases = normalize(entry.aliases.join(' '));
    const description = normalize(entry.descriptionZh + ' ' + entry.descriptionEn);
    const body = normalize(entry.body);
    const haystack = [title, aliases, description, body].join(' ');
    if (!terms.every(term => contains(haystack, term))) return null;
    let score = terms.reduce((n, term) => n + (contains(title,term)?12:0) + (contains(aliases,term)?10:0) + (contains(description,term)?4:0), 0);
    if (title.includes(normalized)) score += 20;
    if (normalize(entry.titleZh).startsWith(normalized) || normalize(entry.titleEn).startsWith(normalized)) score += 5;
    if (entry.aliases.some(a => normalize(a) === normalized)) score += 28;
    const excerpt = lang === 'en' ? entry.descriptionEn : entry.descriptionZh;
    const rawMatch = entry.body.toLowerCase().indexOf(query.trim().toLowerCase());
    const snippet = lang === 'zh' && rawMatch >= 0 ? (rawMatch > 35 ? '…' : '') + entry.body.slice(Math.max(0,rawMatch-35), rawMatch+100) + '…' : excerpt;
    return { ...entry, score, excerpt: snippet };
  }).filter(Boolean).sort((a,b) => b.score-a.score || a.order-b.order);
}
