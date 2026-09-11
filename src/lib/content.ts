import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './i18n';
import { eventSortTime, eventHasNotEnded } from './event-dates';
export const getEvents = async (lang: Lang) => (await getCollection('events', e => e.data.lang === lang && !e.data.draft)).sort((a, b) => eventSortTime(a.data) - eventSortTime(b.data) || a.data.order - b.data.order);
export const getGuides = async (lang: Lang) => (await getCollection('guides', e => e.data.lang === lang && !e.data.draft)).sort((a,b) => a.data.order - b.data.order);
export const getNews = async (lang: Lang) => (await getCollection('news', e => e.data.lang === lang && !e.data.draft)).sort((a,b) => b.data.date.getTime() - a.data.date.getTime());
export function isUpcoming(event: CollectionEntry<'events'>, now = new Date()) {
  return event.data.status === 'upcoming' && eventHasNotEnded(event.data, now);
}
export function eventStatus(event: CollectionEntry<'events'>) {
  if (event.data.status === 'upcoming' && !isUpcoming(event)) return 'past';
  return event.data.status;
}
