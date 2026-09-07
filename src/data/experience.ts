export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period?: string;
  badge?: string;
  type: 'internship' | 'training-internship';
  description: string;
  highlights: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'cybernaut-da',
    role: 'Data Analytics — Course & Internship',
    organization: 'Cybernaut',
    type: 'training-internship',
    badge: 'Program & Internship',
    description:
      'Completed a structured Data Analytics program covering Excel, SQL, Power BI, Tableau, data analysis and visualization, with a 3-month industry internship component through Cybernaut.',
    highlights: [
      'Mastered end-to-end data preparation, cleaning, and transformation workflows',
      'Wrote complex SQL queries for business intelligence reporting and KPI calculations',
      'Designed interactive dashboards in Power BI and Tableau for data-driven insights',
      'Completed a 3-month industry internship component delivering practical analytics projects',
    ],
    skills: ['Microsoft Excel', 'SQL', 'Power BI', 'Tableau', 'Data Analysis', 'EDA'],
  },
  {
    id: 'internpe-aiml',
    role: 'AI/ML Intern',
    organization: 'InternPe',
    period: 'July 2025 – August 2025',
    type: 'internship',
    badge: 'AI / ML Internship',
    description:
      'Practical exposure to AI/ML through Python-based tasks, data preprocessing, model evaluation and problem-solving.',
    highlights: [
      'Implemented machine learning workflows for data classification and evaluation',
      'Performed exploratory data analysis and feature preprocessing using Python & Pandas',
      'Applied standard model evaluation metrics to measure algorithm accuracy',
    ],
    skills: ['Python', 'Machine Learning', 'Data Preprocessing', 'Model Evaluation', 'Pandas'],
  },
];
