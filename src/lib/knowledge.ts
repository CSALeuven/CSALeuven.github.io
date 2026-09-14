import { getCollection } from 'astro:content';
import { categories } from '../data/knowledge';
import type { Lang } from './i18n';
export async function getKnowledge() {
  const entries = (await getCollection('knowledge')).filter(e => !e.data.draft).sort((a,b) => a.data.order-b.data.order || a.data.key.localeCompare(b.data.key));
  const keys = new Set(entries.map(e => e.data.key));
  if (keys.size !== entries.length) throw new Error('Duplicate knowledge article key');
  for (const e of entries) for (const key of e.data.related) if (!keys.has(key)) throw new Error(`Unknown related article ${key} in ${e.id}`);
  return entries;
}
export async function getKnowledgeUpdates() {
  const entries = await getKnowledge();
  const updates = await getCollection('knowledgeUpdates');
  const keys = new Set(updates.map(e => e.data.key));
  if (keys.size !== updates.length) throw new Error('Duplicate knowledge update key');
  for (const update of updates) {
    const article = entries.find(e => e.data.key === update.data.key);
    const expected = article?.data.approvedUpdateIds;
    if (!expected || [...expected].sort().join() !== [...update.data.updateIds].sort().join()) {
      throw new Error(`Chinese/English approved updates do not match: ${update.data.key}`);
    }
  }
  for (const article of entries) {
    if (article.data.approvedUpdateIds.length && !keys.has(article.data.key)) {
      throw new Error(`Missing English approved updates: ${article.data.key}`);
    }
  }
  return updates;
}
export async function knowledgePaths(lang: Lang) {
  const entries = await getKnowledge();
  return [...categories.map(c => c.key), 'handbook-2024', ...entries.map(e => e.data.key)].map(slug => ({ params: { slug }, props: { lang, slug } }));
}
