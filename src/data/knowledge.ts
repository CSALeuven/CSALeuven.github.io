export const categories = [
  { key: 'before-arrival', zh: '行前准备', en: 'Before arrival', descriptionZh: '签证、材料、资金与行李', descriptionEn: 'Visa, documents, funds and packing', stageZh: '准备出发', stageEn: 'Preparing to leave' },
  { key: 'arrival', zh: '抵达鲁汶', en: 'Arrival', descriptionZh: '注册、开户、医保与居留', descriptionEn: 'Registration, banking, insurance and residence', stageZh: '刚到鲁汶', stageEn: 'Just arrived' },
  { key: 'housing', zh: '住宿', en: 'Housing', descriptionZh: '找房、合同、押金与入住', descriptionEn: 'Finding a room, contracts, deposits and moving in', stageZh: '找房 / 入住', stageEn: 'Finding a home' },
  { key: 'study', zh: '学习', en: 'Study', descriptionZh: '学制、选课与校园系统', descriptionEn: 'Credits, courses and learning platforms', stageZh: '开始上课', stageEn: 'Starting classes' },
  { key: 'life', zh: '日常生活', en: 'Daily life', descriptionZh: '衣食、购物、家具与垃圾分类', descriptionEn: 'Clothes, food, shopping, furniture and waste', stageZh: '日常生活', stageEn: 'Everyday life' },
  { key: 'transport', zh: '交通', en: 'Transport', descriptionZh: '自行车、公交、火车与机场', descriptionEn: 'Bikes, buses, trains and the airport', stageZh: '交通出行', stageEn: 'Getting around' },
  { key: 'healthcare', zh: '医疗', en: 'Healthcare', descriptionZh: '家庭医生、校医、急诊与牙医', descriptionEn: 'GPs, student health, emergencies and dental care', stageZh: '看病 / 医保', stageEn: 'Health and insurance' },
  { key: 'sports', zh: '体育', en: 'Sports', descriptionZh: '运动卡、健身与体育社群', descriptionEn: 'Sports cards, fitness and student communities', stageZh: '运动起来', stageEn: 'Staying active' },
  { key: 'about-leuven', zh: '认识鲁汶', en: 'About Leuven', descriptionZh: '大学城与这里的高校', descriptionEn: 'The university town and its institutions', stageZh: '认识这座城', stageEn: 'Discovering Leuven' },
] as const;
export const sourceNotice = {
  zh: '本内容整理自《鲁汶学联新生手册 2024》。涉及价格、政策、办理流程等时效性信息时，请以相关官方机构最新信息为准。',
  en: 'Adapted from the CSAL Student Handbook 2024. Check the relevant official institution for current prices, policies and procedures.',
};
export const reviewLabels = {
  'legacy-2024': { zh: '2024 手册 · 待复核', en: '2024 handbook · awaiting review' },
  reviewed: { zh: '已复核', en: 'Reviewed' },
  'partially-reviewed': { zh: '部分已复核', en: 'Partially reviewed' },
  'needs-verification': { zh: '需要核实', en: 'Needs verification' },
};
export const popular = [
  ['居留卡', 'Residence card', 'arrival/residence-card'], ['租房合同', 'Rental contract', 'housing/contracts'],
  ['银行开户', 'Bank account', 'arrival/bank-account'], ['健康保险', 'Health insurance', 'arrival/health-insurance'],
  ['公交', 'Bus', 'transport/bus'], ['火车', 'Train', 'transport/train'],
  ['自行车', 'Bikes', 'transport/bike-rental'], ['垃圾分类', 'Waste sorting', 'life/waste-recycling'],
];
export const firstWeek = [
  { id: 'move-in', title: '确认入住与钥匙交接时间', note: '管理员或前台可能并非 24 小时在岗；长期住宿也需提前联系。', href: 'housing/temporary-accommodation' },
  { id: 'inspect', title: '核对合同与房间状况', note: '核对家具、设施及损坏记录，确认水电暖网的费用安排。', href: 'housing/deposit-and-condition' },
  { id: 'register', title: '查看学校注册通知并准备材料', note: '手册列出录取通知、学历学位复印件与缴费银行卡；以学校当期通知为准。', href: 'arrival/university-registration' },
  { id: 'residence', title: '开始市政登记与居留手续', note: '手册流程包括材料准备、Annex 15、地址核查和预约领卡；不是要求一周内完成。', href: 'arrival/residence-card' },
  { id: 'bank', title: '了解银行开户条件', note: '手册以领取 Annex 15 为开户起点，并建议比较银行产品及成本。', href: 'arrival/bank-account' },
  { id: 'insurance', title: '开始办理健康保险', note: '查看学校与保险机构的现行要求，并关注居留所需证明。', href: 'arrival/health-insurance' },
  { id: 'systems', title: '熟悉 Toledo、KU Loket 与 ISP', note: '了解课程、证明下载与选课截止时间。', href: 'study/learning-platforms' },
  { id: 'transport', title: '熟悉日常通勤方式', note: '确定教学楼位置，查看自行车与公交的最新服务信息。', href: 'transport/getting-around' },
];
export const contractChecks = [
  '学生、房东身份，以及房屋地址和具体房间位置', '实际房间状况与附录一致，家具、设备及已有损坏均已记录',
  '租期与起租日期适合自己，短期交换的安排已确认', '租金数额、包含与不包含的水、电、暖、网及其他费用',
  '能源按实结算或固定收费，是否需要自行开通服务', '付款方式与每月付款截止日期', '押金约定与可能扣留的房间损坏、清洁问题',
  '城市税与学生减免', '保险安排（例如火灾保险）', '转租条件以及提前终止租约的约定',
  '维护、维修、安全设施与适宜居住条件', '房东进入房间的条件、频率与提前通知',
  '宠物及家人朋友短住是否已获同意', '打孔、粉刷等改动是否需要许可', '额外商议事项已在签约前以书面、邮件或短信确认',
  '不明白的合同条款已向 Housing Service 求助',
];
