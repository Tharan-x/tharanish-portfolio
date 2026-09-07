export interface SkillGroup {
  category: string;
  skills: string[];
  icon: string;
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming',
    skills: ['Python', 'SQL', 'Java — Basic'],
    icon: 'code',
  },
  {
    category: 'Data Analytics',
    skills: [
      'Microsoft Excel',
      'Power BI',
      'Tableau',
      'Data Analysis',
      'Exploratory Data Analysis',
    ],
    icon: 'bar-chart-2',
  },
  {
    category: 'AI / Machine Learning',
    skills: [
      'Machine Learning',
      'Data Preprocessing',
      'Classification',
      'Model Evaluation',
      'NLP',
      'Sentiment Analysis',
    ],
    icon: 'cpu',
  },
  {
    category: 'Database',
    skills: ['MySQL'],
    icon: 'database',
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab'],
    icon: 'wrench',
  },
];

export const softSkills: string[] = [
  'Problem Solving',
  'Analytical Thinking',
  'Teamwork',
  'Adaptability',
  'Time Management',
];

export const languages: { language: string; fluency: string }[] = [
  { language: 'Tamil', fluency: 'Native / Native Proficiency' },
  { language: 'English', fluency: 'Professional Working Proficiency' },
];

export const areasOfInterest: string[] = [
  'Artificial Intelligence',
  'Machine Learning',
  'Data Analytics',
  'Data Science',
  'Business Intelligence',
  'Software Development',
  'Cybersecurity',
];
