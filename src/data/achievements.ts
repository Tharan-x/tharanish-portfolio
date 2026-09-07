export interface Achievement {
  id: string;
  title: string;
  badge: string;
  project?: string;
  role?: string;
  team?: string;
  description: string;
  featured: boolean;
}

export const achievements: Achievement[] = [
  {
    id: 'hackathon-winner',
    title: '24-Hour Hackathon — Prize Winner',
    badge: 'Hackathon Victory',
    project: 'Uzhavan AI — AI-Powered Agricultural Assistance Platform',
    role: 'AI Lead & Integration / Presentation Lead',
    team: '4-member team',
    description:
      'Won prize recognition in an intensive 24-hour hackathon by engineering and presenting Uzhavan AI, an AI-powered agricultural assistant synthesizing crop diagnostics, weather data, and market pricing for farmers.',
    featured: true,
  },
];
