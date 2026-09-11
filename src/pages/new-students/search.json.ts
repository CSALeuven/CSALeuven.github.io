import { getKnowledge } from '../../lib/knowledge';
import packing from '../../data/packing-2024.json';
export async function GET() {
  const entries = await getKnowledge();
  return new Response(JSON.stringify(entries.map(e => ({
    key: e.data.key, titleZh:e.data.titleZh, titleEn:e.data.titleEn, descriptionZh:e.data.descriptionZh, descriptionEn:e.data.descriptionEn,
    aliases:e.data.aliases, category:e.data.category, reviewStatus:e.data.reviewStatus, lastReviewed:e.data.lastReviewed?.toISOString().slice(0,10) ?? null,
    order:e.data.order, body:((e.body ?? '') + (e.data.key==='before-arrival/packing' ? '\n' + packing.map(item=>`${item.name} ${item.quantity} ${item.notes}`).join('\n') : '')).replace(/\[([^\]]+)\]\([^)]*\)/g,'$1').replace(/[#*>`_|]/g,'').replace(/\s+/g,' '),
  }))), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
