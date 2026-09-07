export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: 'AI/ML' | 'Cloud/Security' | 'Full Stack';
  icon: string;
}

export const certifications: Certification[] = [
  {
    id: 'internpe-cert',
    title: 'AI/ML Internship',
    issuer: 'InternPe',
    category: 'AI/ML',
    icon: 'brain',
  },
  {
    id: 'gcp-security',
    title: 'Google Cloud Beginner: Cybersecurity',
    issuer: 'Google Cloud',
    category: 'Cloud/Security',
    icon: 'shield',
  },
  {
    id: 'novitech-fullstack',
    title: '30 Days MasterClass in Full Stack Development',
    issuer: 'NoviTech',
    category: 'Full Stack',
    icon: 'code',
  },
  {
    id: 'novitech-zerotrust',
    title: 'Zero Trust Security & Access Control Bootcamp',
    issuer: 'NoviTech',
    category: 'Cloud/Security',
    icon: 'lock',
  },
];
