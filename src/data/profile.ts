export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  subTagline: string;
  bio: string;
  education: {
    degree: string;
    college: string;
    university: string;
    years: string;
    cgpa: string;
  };
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  highlights: string[];
}

export const profile: ProfileData = {
  name: 'THARANISH M.',
  role: 'AI & Data Science Student · Data & Software Builder',
  tagline: 'I build practical solutions with data, intelligence and technology.',
  subTagline:
    'Final-year AI & Data Science student exploring the intersection of Data Analytics, Machine Learning and modern software development.',
  bio: `I am a final-year B.Tech Artificial Intelligence & Data Science student with a strong focus on building practical technology solutions. Rather than studying theory in isolation, I enjoy working across the full project lifecycle — from data analysis, preprocessing, and machine learning model design to building developer tools, full-stack applications, and interactive dashboards. My experience spans hands-on internships, hackathon victories, and product development.`,
  education: {
    degree: 'B.Tech – Artificial Intelligence & Data Science',
    college: 'SKP Engineering College',
    university: 'Anna University',
    years: '2023–2027',
    cgpa: '8.50',
  },
  location: 'Tiruvannamalai, Tamil Nadu, India',
  email: 'tharanishm1@gmail.com',
  phone: '+91 9361427171',
  linkedin: 'https://linkedin.com/in/tharanish-m-270321338',
  github: 'https://github.com/Tharan-x',
  highlights: [
    'AI & Data Science Focus',
    'Data Analytics & BI',
    'Machine Learning & NLP',
    'Software & Product Development',
  ],
};
