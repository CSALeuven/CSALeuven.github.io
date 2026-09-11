import { site } from './site.ts';

// The Chinese mission and four responsibilities were supplied and confirmed by the CSAL committee.
// Preserve the complete Chinese source wording, including numbering and punctuation.
// English translations preserve the organizational meaning; headings are display labels only.
export const mission = {
  zh: "鲁汶中国学生学者联合会是注册于荷兰语天主教鲁汶大学（KU Leuven）的、由鲁汶中国留学生及学者自发组成的非营利、非政治、非宗教组织，旨在服务在鲁汶学习和生活的中国学生与学者，为广大中国留学、访学人员搭建共享平台、组织交流活动并提供帮助。",
  en: `The ${site.officialNames.en} is a nonprofit, nonpolitical and nonreligious organization registered at KU Leuven and formed voluntarily by Chinese students and scholars in Leuven. It serves Chinese students and scholars studying and living in Leuven by providing a shared platform, organizing exchange activities and offering assistance to Chinese students studying abroad and visiting scholars.`,
} as const;

export const responsibilities = [
  {
    number: '01',
    heading: {
      zh: "交流与联系",
      en: "Communication and Connections",
    },
    text: {
      zh: "（一）加强鲁汶大学中国学生、学者之间的交流和联系，发挥家园、窗口、桥梁的作用。",
      en: "Strengthen communication and connections among Chinese students and scholars at KU Leuven, serving as a community home, a point of contact and a bridge.",
    },
  },
  {
    number: '02',
    heading: {
      zh: "权益与沟通",
      en: "Rights and Representation",
    },
    text: {
      zh: "（二）代表和维护鲁汶地区中国学生学者的正当权益，及时向鲁汶大学校方、当地政府机构、中国驻比大使馆反映学生的合理意见和建议，使学联成为鲁汶校方、当地政府、中国学生学者和中国驻比使馆教育处的桥梁纽带。",
      en: "Represent and safeguard the legitimate rights and interests of Chinese students and scholars in the Leuven area. Communicate students' reasonable views and suggestions promptly to KU Leuven, local government institutions and the Embassy of the People's Republic of China in Belgium, making CSAL a link between KU Leuven, local government, Chinese students and scholars, and the Embassy's Education Section.",
    },
  },
  {
    number: '03',
    heading: {
      zh: "学术、文化与文体活动",
      en: "Academic, Cultural and Sports Activities",
    },
    text: {
      zh: "（三）积极开展和支持面向中国文化背景群体的学习、文体等活动，丰富中国学生学者的文化生活，促进学术交流。",
      en: "Actively organize and support learning, cultural, sports and other activities for people with a Chinese cultural background, enriching the cultural lives of Chinese students and scholars and promoting academic exchange.",
    },
  },
  {
    number: '04',
    heading: {
      zh: "团结与交流",
      en: "Solidarity and Exchange",
    },
    text: {
      zh: "（四）增进中国学生学者之间、学联与校内其他学生团体之间、不同国家地区学联之间的团结和交流，促进留学人员与当地华人华侨、比利时及其他各国人员之间的友谊。",
      en: "Strengthen solidarity and exchange among Chinese students and scholars, between CSAL and other student organizations on campus, and among Chinese student and scholar associations in different countries and regions. Promote friendship between Chinese students and scholars abroad and local overseas Chinese communities, Belgians and people from other countries.",
    },
  },
] as const;

// Editorial homepage summaries; these do not replace the formal wording above.
export const homeIntro = {
  zh: `${site.officialNames.zh}致力于服务在鲁汶学习和生活的中国学生与学者，提供支持，促进学术文化交流，连接校园与当地社区。`,
  en: `The ${site.officialNames.en} (CSAL) supports Chinese students and scholars in Leuven through practical help, academic and cultural exchange, and connections across campus and the local community.`,
} as const;

export const homeThemes = [
  { heading: { zh: '同学支持与权益', en: 'Student Support and Rights' }, text: { zh: '提供信息与帮助，倾听并反映合理需求。', en: 'Provide information and assistance, listen to students and communicate their reasonable needs.' } },
  { heading: { zh: '学术文化与社区活动', en: 'Academic, Cultural and Community Activities' }, text: { zh: '促进学习、文化、体育与社区交流。', en: 'Encourage learning and exchange through culture, sport and community activities.' } },
  { heading: { zh: '校园与社会连接', en: 'Campus and Community Connections' }, text: { zh: '连接学生学者、校园、当地社区及不同学生组织。', en: 'Connect students and scholars with campus, local communities and other student organizations.' } },
] as const;
