export interface ProjectCapability {
  title: string;
  description: string;
  iconName: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  type: 'flagship-saas' | 'flagship-hackathon' | 'application' | 'nlp-ai' | 'analytics' | 'supporting';
  description: string;
  detailedDescription?: string;
  badge?: string;
  achievement?: string;
  role?: string;
  teamSize?: string;
  status?: string;
  capabilities?: ProjectCapability[];
  features: string[];
  technologies: string[];
  focusPoints?: string[];
  metrics?: { label: string; value: string }[];
  links: {
    github?: string;
    demo?: string;
  };
  featured: boolean;
  order: number;
}

export const projects: Project[] = [
  {
    id: 'forgemind',
    slug: 'forgemind',
    title: 'ForgeMind',
    subtitle: 'Code Intelligence & Architecture Intelligence SaaS Platform',
    type: 'flagship-saas',
    description:
      'A developer-focused SaaS platform for understanding and managing complex codebases through repository intelligence, architecture analysis, dependency mapping, code health, impact analysis and engineering workflow tools, with AI-assisted explanations and remediation as an integrated intelligence layer.',
    detailedDescription:
      'ForgeMind is engineered as an enterprise-grade SaaS platform that transforms raw code repositories into clear, actionable architecture intelligence. Rather than relying on simple text search or disconnected AI chat, ForgeMind builds deep symbol dependency graphs, detects architectural decay, models change blast radius before pull requests merge, and provides deterministic code health metrics alongside context-aware AI explanations.',
    badge: 'Flagship SaaS Platform',
    status: 'Active Engineering Project',
    featured: true,
    order: 1,
    capabilities: [
      {
        title: 'GitHub Repository Connection',
        description: 'Seamless integration with GitHub organizations, repositories, and private codebases.',
        iconName: 'git-branch',
      },
      {
        title: 'Repository Intelligence',
        description: 'Deep indexing of AST, file structures, cross-file imports, and code churn velocity.',
        iconName: 'database',
      },
      {
        title: 'Code & Symbol Intelligence',
        description: 'Symbol-level resolution of functions, classes, interfaces, and call graphs.',
        iconName: 'code',
      },
      {
        title: 'Architecture Visualization',
        description: 'Interactive visual diagrams of multi-tier system components and layer boundaries.',
        iconName: 'layout',
      },
      {
        title: 'Dependency Analysis',
        description: 'Mapping circular dependencies, unused exports, and third-party library risks.',
        iconName: 'network',
      },
      {
        title: 'Graph & Topology Engine',
        description: 'High-performance interactive 2D/3D graph visualization of codebase interconnections.',
        iconName: 'share-2',
      },
      {
        title: 'Health & Risk Analysis',
        description: 'Automated maintainability index, cyclomatic complexity scoring, and hotspot detection.',
        iconName: 'activity',
      },
      {
        title: 'Impact & Blast-Radius Analysis',
        description: 'Predict exact downstream breakage risks before committing refactors or API changes.',
        iconName: 'alert-triangle',
      },
      {
        title: 'Time Machine Architecture History',
        description: 'Visual time-lapse showing how component dependencies evolved across git commits.',
        iconName: 'clock',
      },
      {
        title: 'What-If Change Simulation',
        description: 'Simulate removing or refactoring modules to see structural impact prior to code edit.',
        iconName: 'git-pull-request',
      },
      {
        title: 'Decision Memory & ADR Tracking',
        description: 'Capture architectural decisions directly tied to specific code modules.',
        iconName: 'bookmark',
      },
      {
        title: 'PR Gatekeeper Automated Reviews',
        description: 'Enforce structural rules and architectural boundaries on incoming pull requests.',
        iconName: 'shield-check',
      },
      {
        title: 'Analysis History & Trends',
        description: 'Track long-term codebase health score improvements and architectural refactors.',
        iconName: 'trending-up',
      },
      {
        title: 'AI-Assisted Explanations & Remediation',
        description: 'Context-aware AI generating code fixes and explaining complex legacy code blocks.',
        iconName: 'sparkles',
      },
    ],
    features: [
      'Multi-repository architecture graph ingestion',
      'Symbol-level blast radius and impact prediction',
      'Automated architectural drift detection & PR checks',
      'Integrated AI layer for automated refactoring proposals',
    ],
    technologies: [
      'TypeScript',
      'React',
      'Node.js / Python',
      'AST Parsers',
      'Graph Data Structures',
      'Tailwind / Custom CSS',
      'AI API Integration',
    ],
    links: {
      github: 'https://github.com/Tharan-x',
    },
  },
  {
    id: 'uzhavan-ai',
    slug: 'uzhavan-ai',
    title: 'Uzhavan AI',
    subtitle: 'AI-Powered Agricultural Assistance Platform',
    type: 'flagship-hackathon',
    description:
      'A farmer-focused application designed to bring crop guidance, weather information, market insights and personalized agricultural assistance into a unified platform.',
    detailedDescription:
      'Developed during an intense 24-hour hackathon, Uzhavan AI empowers agricultural communities by synthesizing real-time weather analytics, market commodity prices, soil data, and computer vision crop health diagnostic models into a simple, multi-lingual agricultural assistant.',
    badge: 'Hackathon Prize Winner',
    achievement: '24-Hour Hackathon — Prize Winner',
    role: 'AI Lead & Integration / Presentation Lead',
    teamSize: '4-member team',
    featured: true,
    order: 2,
    features: [
      'Crop recommendation based on soil and weather parameters',
      'Real-time market price trend tracking for regional crops',
      'Computer vision plant disease diagnostic concept',
      'Multilingual interactive farmer interface',
    ],
    technologies: [
      'Python',
      'Machine Learning',
      'Computer Vision',
      'OpenWeather API',
      'React / Web UI',
      'FastAPI',
    ],
    links: {
      github: 'https://github.com/Tharan-x',
    },
  },
  {
    id: 'skill-swap',
    slug: 'skill-swap-platform',
    title: 'Skill Swap Platform',
    subtitle: 'Peer-to-Peer Skill Exchange Platform',
    type: 'application',
    description:
      'A platform concept designed to connect people who want to exchange knowledge and skills directly with one another through structured matching and intuitive scheduling.',
    detailedDescription:
      'Skill Swap Platform enables users to list skills they possess and skills they wish to learn. Built around a clean REST/API-based backend architecture and React interface, the application prototype features skill matching, exchange requests, and user profile management.',
    badge: 'Application Prototype',
    status: 'Application Prototype — In Development',
    featured: true,
    order: 3,
    features: [
      'Peer-to-peer skill directory & search',
      'Exchange request & proposal workflow',
      'REST API architecture connecting React frontend to FastAPI backend',
      'AI-assisted development tools integration during build phase',
    ],
    technologies: ['React', 'FastAPI', 'REST API Architecture', 'Python', 'AI Development Tools'],
    links: {
      github: 'https://github.com/Tharan-x',
    },
  },
  {
    id: 'sentiment-analysis',
    slug: 'sentiment-analysis-social-media',
    title: 'Decoding Emotions Through Sentiment Analysis of Social Media Conversations',
    subtitle: 'NLP Sentiment Classification Application',
    type: 'nlp-ai',
    description:
      'An NLP-based application that analyzes social media conversations and classifies sentiment through an interactive web interface.',
    detailedDescription:
      'Built using Python, Pandas, and VADER (Valence Aware Dictionary and sEntiment Reasoner), this application handles social media text preprocessing, emoji interpretation, and sentiment scoring (positive, negative, neutral) with instant visual feedback provided via a Gradio web interface.',
    badge: 'NLP & Machine Learning',
    featured: true,
    order: 4,
    features: [
      'Text preprocessing and noise reduction pipeline',
      'Emoji-aware sentiment interpretation using VADER',
      'Three-class sentiment breakdown (Positive / Negative / Neutral)',
      'Interactive Gradio web interface for real-time analysis',
    ],
    technologies: ['Python', 'Pandas', 'VADER', 'Gradio', 'NLP'],
    links: {
      github: 'https://github.com/Tharan-x',
    },
  },
  {
    id: 'data-analytics-dashboard',
    slug: 'data-analytics-dashboard',
    title: 'Data Analytics Dashboard',
    subtitle: 'End-to-End Business Reporting & KPI Dashboard',
    type: 'analytics',
    description:
      'Comprehensive data analytics workflow demonstrating data preparation in Excel, SQL querying, and interactive dashboard development in Tableau and Power BI.',
    detailedDescription:
      'Presents practical capability across the full Data Analytics lifecycle: ingesting raw operational datasets, performing structured SQL transformations and aggregation, identifying business metrics/KPIs, and constructing interactive, executive-ready reporting dashboards in both Power BI and Tableau.',
    badge: 'Data Analytics Showcase',
    featured: true,
    order: 5,
    features: [
      'Data preparation and cleaning pipelines in Microsoft Excel',
      'Structured SQL queries for aggregations, CTEs, and trend analysis',
      'Interactive Tableau and Power BI visual dashboards',
      'KPI visualization, trend identification, and executive summaries',
    ],
    technologies: ['Microsoft Excel', 'SQL', 'Tableau', 'Power BI', 'EDA'],
    links: {
      github: 'https://github.com/Tharan-x',
    },
  },
  {
    id: 'crop-cure-bot',
    slug: 'crop-cure-bot',
    title: 'Crop Cure Bot',
    subtitle: 'Plant Disease Prediction Concept',
    type: 'supporting',
    description:
      'Agricultural AI concept focused on early plant disease detection and treatment suggestions.',
    featured: false,
    order: 6,
    features: [
      'Early disease identification concept',
      'Farmer-focused treatment advisory workflow',
    ],
    technologies: ['Python', 'Machine Learning', 'Computer Vision'],
    links: {
      github: 'https://github.com/Tharan-x',
    },
  },
  {
    id: 'sales-dashboard-excel',
    slug: 'sales-dashboard-excel',
    title: 'Sales Dashboard — Microsoft Excel',
    subtitle: 'Product & Region Insights Analytics',
    type: 'supporting',
    description:
      'Excel analytics dashboard built around Pivot Tables, Charts, Conditional Formatting, and lookup functions for product and regional sales insights.',
    featured: false,
    order: 7,
    features: [
      'Pivot Tables and dynamic Pivot Charts',
      'Lookup functions (VLOOKUP / XLOOKUP) and Conditional Formatting',
      'Product and region-wise revenue analysis',
    ],
    technologies: ['Microsoft Excel', 'Data Analysis', 'Pivot Tables'],
    links: {
      github: 'https://github.com/Tharan-x',
    },
  },
  {
    id: 'student-performance-dashboard',
    slug: 'student-performance-dashboard',
    title: 'Student Performance Dashboard',
    subtitle: 'Academic Reporting & Analytics',
    type: 'supporting',
    description:
      'Excel-based performance reporting tool leveraging logic formulas (IF, COUNTIF) and Data Validation for automated student grade analysis.',
    featured: false,
    order: 8,
    features: [
      'Automated grading logic with IF and nested functions',
      'Statistical summaries with COUNTIF, AVERAGE, and Data Validation',
      'Visual performance breakdown for academic evaluations',
    ],
    technologies: ['Microsoft Excel', 'Data Validation', 'Formula Analytics'],
    links: {
      github: 'https://github.com/Tharan-x',
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug || p.id === slug);
}
