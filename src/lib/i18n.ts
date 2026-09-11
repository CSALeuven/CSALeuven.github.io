export type Lang = 'zh' | 'en';
export const languages: Lang[] = ['zh', 'en'];
export const t = (lang: Lang, zh: string, en: string) => lang === 'zh' ? zh : en;
export const localized = (value: { zh: string; en: string }, lang: Lang) => value[lang];
export function href(lang: Lang, path = '') {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return `${lang === 'en' ? '/en' : ''}/${clean ? clean + '/' : ''}`;
}
export const nav = [
  { path: '', zh: '首页', en: 'Home' },
  { path: 'events', zh: '活动', en: 'Events' },
  { path: 'new-students', zh: '新生指南', en: 'New Students' },
  { path: 'leuven-guide', zh: '鲁汶生活', en: 'Leuven Guide' },
  { path: 'about', zh: '关于我们', en: 'About' },
  { path: 'partners', zh: '合作伙伴', en: 'Partners' },
  { path: 'contact', zh: '联系我们', en: 'Contact' },
] as const;
export function formatDate(date: Date, lang: Lang) {
  return new Intl.DateTimeFormat(lang === 'zh' ? 'zh-CN' : 'en-GB', {
    year: 'numeric', month: 'short', day: 'numeric', timeZone: 'Europe/Brussels',
  }).format(date);
}
