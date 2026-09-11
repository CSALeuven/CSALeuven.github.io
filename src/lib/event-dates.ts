/** Calendar dates stay strings: a historical day must never become a fabricated start time. */
export interface EventDates { date?: Date; endDate?: Date; dateOnly?: string; endDateOnly?: string; }
const belgiumDay = (date: Date) => new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Brussels', year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
export const eventCalendarDate = (event: EventDates) => event.dateOnly ?? (event.date ? belgiumDay(event.date) : undefined);
export const eventDateTime = (event: EventDates) => event.dateOnly ?? event.date?.toISOString();
export const eventSortTime = (event: EventDates) => event.dateOnly ? Date.parse(event.dateOnly) : event.date?.getTime() ?? Infinity;
export function eventHasNotEnded(event: EventDates, now = new Date()) {
  if (event.dateOnly) return (event.endDateOnly ?? event.dateOnly) >= belgiumDay(now);
  return (event.endDate ?? event.date ?? new Date(0)) >= now;
}
export function formatEventDate(event: EventDates, lang: 'zh' | 'en', includeTime = false) {
  const locale = lang === 'zh' ? 'zh-CN' : 'en-GB';
  const calendar = (value: string) => new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(value));
  const timed = (value: Date) => new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Europe/Brussels', ...(includeTime ? { hour: '2-digit' as const, minute: '2-digit' as const, timeZoneName: 'short' as const } : {}) }).format(value);
  if (event.dateOnly) return calendar(event.dateOnly) + (event.endDateOnly && event.endDateOnly !== event.dateOnly ? ` – ${calendar(event.endDateOnly)}` : '');
  if (event.date) return timed(event.date) + (includeTime && event.endDate ? ` – ${timed(event.endDate)}` : '');
  return lang === 'zh' ? '日期待定' : 'Date to be confirmed';
}
