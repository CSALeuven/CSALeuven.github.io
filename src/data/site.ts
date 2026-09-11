// Organization names supplied and confirmed by the CSAL committee.
const officialNames = {
  zh: '鲁汶中国学生学者联合会',
  en: 'Chinese Students and Scholars Association in Leuven',
  nl: 'Chinese Studenten en Geleerden Vereniging van Leuven',
} as const;
const shortNames = { zh: '鲁汶学联', en: 'CSAL', nl: 'CSAL' } as const;

export const site = {
  officialNames,
  shortNames,
  // Compatibility aliases for existing components and event metadata.
  shortName: shortNames.en,
  name: officialNames,
  url: 'https://csaleuven.github.io',
  description: {
    zh: '服务同学，连接校园，融入鲁汶。了解鲁汶学联活动，查阅新生与城市生活指南，关注 CSAL 官方账号。',
    en: 'Supporting students, building community, and connecting Leuven. Explore CSAL events, new student resources, and life in Leuven.',
  },
  aboutDescription: {
    zh: `${officialNames.zh}的正式名称、宗旨、基本任务及现任与历届成员。`,
    en: `Official names, mission, core responsibilities and committee history of the ${officialNames.en} (CSAL).`,
  },
  logo: '/images/brand/csal-logo.jpg',
  wechatQr: '/images/social/wechat-csal.jpg',
  email: null as string | null,
  socials: {
    wechat: { name: '鲁汶学联 CSAL' },
    instagram: { name: 'Instagram', handle: '@csaleuven', url: 'https://www.instagram.com/csaleuven/' },
    facebook: { name: 'Facebook', handle: 'CSAL Leuven', url: 'https://www.facebook.com/page.csal/?locale=zh_CN' },
  },
  disclaimer: {
    zh: 'CSAL 是独立学生组织。除非另有明确说明，本网站内容不代表 KU Leuven。',
    en: 'CSAL is an independent student organization. Unless explicitly stated, content on this website does not represent KU Leuven.',
  },
  // Email and founding date must not be invented. Dutch is reference information, not a site language.
};
