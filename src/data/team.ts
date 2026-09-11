export interface TeamMember {
  name: { zh: string; en: string };
  role: { zh: string; en: string };
  bio?: { zh: string; en: string };
  image?: string;
  placeholder?: boolean;
}
export const team: TeamMember[] = [{
  name: { zh: '委员会信息待更新', en: 'Committee details to follow' },
  role: { zh: '待确认', en: 'To be confirmed' },
  bio: { zh: '经本人同意并核实后，将在此公布本届委员介绍。', en: 'Profiles will be added after details are confirmed and members consent to publication.' },
  placeholder: true,
}];
