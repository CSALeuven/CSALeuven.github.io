export interface Partner {
  name: { zh: string; en: string };
  category: { zh: string; en: string };
  logo?: string;
  url?: string;
  placeholder: boolean;
}
export const partners: Partner[] = [
  { name: { zh: '学生社团', en: 'Student associations' }, category: { zh: '伙伴信息待确认', en: 'Partner details pending' }, placeholder: true },
  { name: { zh: '社区组织', en: 'Community organizations' }, category: { zh: '伙伴信息待确认', en: 'Partner details pending' }, placeholder: true },
  { name: { zh: '活动合作方', en: 'Event collaborators' }, category: { zh: '伙伴信息待确认', en: 'Partner details pending' }, placeholder: true },
  { name: { zh: '赞助伙伴', en: 'Sponsors' }, category: { zh: '伙伴信息待确认', en: 'Partner details pending' }, placeholder: true },
];
