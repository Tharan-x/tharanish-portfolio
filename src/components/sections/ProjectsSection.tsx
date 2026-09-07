import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Trophy,
  ExternalLink,
  GitBranch,
  Layers,
  BarChart3,
  CheckCircle,
  Maximize2,
  Users,
} from 'lucide-react';
import { projects } from '../../data/projects';
import ForgeMindModal from '../projects/ForgeMindModal';
import SentimentInteractiveDemo from '../projects/SentimentInteractiveDemo';
import './ProjectsSection.css';

export default function ProjectsSection() {
  const [isForgeMindOpen, setIsForgeMindOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'flagship' | 'analytics' | 'supporting'>('all');

  const forgemind = projects.find((p) => p.id === 'forgemind')!;
  const uzhavan = projects.find((p) => p.id === 'uzhavan-ai')!;
  const skillswap = projects.find((p) => p.id === 'skill-swap')!;
  const sentiment = projects.find((p) => p.id === 'sentiment-analysis')!;
  const analytics = projects.find((p) => p.id === 'data-analytics-dashboard')!;

  const supportingProjects = projects.filter((p) => p.type === 'supporting');

  return (
    <section className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header__badge">
            <Layers size={14} />
            <span>Featured Solutions & Systems</span>
          </div>
          <h2 className="section-header__title">
            Engineering <span className="text-gradient">SaaS, AI & Analytics</span> Platforms.
          </h2>
          <p className="section-header__desc">
            Organized hierarchy showcasing flagship developer platforms, hackathon achievements, and data analytics dashboards.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="projects-filter-bar">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${activeFilter === 'flagship' ? 'active' : ''}`}
            onClick={() => setActiveFilter('flagship')}
          >
            Flagship Platforms
          </button>
          <button
            className={`filter-btn ${activeFilter === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveFilter('analytics')}
          >
            Data Analytics
          </button>
          <button
            className={`filter-btn ${activeFilter === 'supporting' ? 'active' : ''}`}
            onClick={() => setActiveFilter('supporting')}
          >
            Supporting Projects
          </button>
        </div>

        {/* FLAGSHIP 1: FORGEMIND (Strongest Visual Treatment) */}
        {(activeFilter === 'all' || activeFilter === 'flagship') && (
          <motion.div
            className="flagship-card flagship-card--forgemind"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flagship-glow"></div>
            <div className="flagship-content">
              <div className="flagship-top">
                <div className="flagship-badge flagship-badge--saas">
                  <GitBranch size={14} />
                  <span>Flagship 1 · SaaS Platform</span>
                </div>
                <span className="flagship-status">{forgemind.status}</span>
              </div>

              <h3 className="flagship-title">{forgemind.title}</h3>
              <p className="flagship-subtitle">{forgemind.subtitle}</p>
              <p className="flagship-desc">{forgemind.description}</p>

              <div className="flagship-highlights-grid">
                <div className="f-highlight">
                  <CheckCircle size={16} className="text-cyan" />
                  <span>SaaS Architecture Platform (Not just AI)</span>
                </div>
                <div className="f-highlight">
                  <CheckCircle size={16} className="text-cyan" />
                  <span>14 Core Intelligence Capabilities</span>
                </div>
                <div className="f-highlight">
                  <CheckCircle size={16} className="text-cyan" />
                  <span>Blast-Radius & PR Gatekeeper Checks</span>
                </div>
                <div className="f-highlight">
                  <CheckCircle size={16} className="text-cyan" />
                  <span>Integrated Context-Aware AI Layer</span>
                </div>
              </div>

              <div className="flagship-tech-bar">
                {forgemind.technologies.map((tech, i) => (
                  <span key={i} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flagship-actions">
                <button
                  className="btn btn--primary"
                  onClick={() => setIsForgeMindOpen(true)}
                >
                  <Maximize2 size={16} />
                  <span>Explore 14 SaaS Capabilities</span>
                </button>
                <a
                  href={forgemind.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary"
                >
                  <ExternalLink size={16} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* FLAGSHIP 2: UZHAVAN AI (Second Strongest Visual Treatment & Hackathon Winner) */}
        {(activeFilter === 'all' || activeFilter === 'flagship') && (
          <motion.div
            className="flagship-card flagship-card--uzhavan"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flagship-content">
              <div className="flagship-top">
                <div className="flagship-badge flagship-badge--winner">
                  <Trophy size={14} />
                  <span>24-Hour Hackathon — Prize Winner</span>
                </div>
                <div className="flagship-role-badge">
                  <Users size={12} />
                  <span>{uzhavan.role} ({uzhavan.teamSize})</span>
                </div>
              </div>

              <h3 className="flagship-title">{uzhavan.title}</h3>
              <p className="flagship-subtitle">{uzhavan.subtitle}</p>
              <p className="flagship-desc">{uzhavan.description}</p>

              <div className="uzhavan-features">
                {uzhavan.features.map((feat, idx) => (
                  <div key={idx} className="u-feat">
                    <Sparkles size={14} className="text-amber" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flagship-tech-bar">
                {uzhavan.technologies.map((tech, i) => (
                  <span key={i} className="tech-pill tech-pill--amber">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* SECONDARY PROJECTS GRID: Skill Swap, Sentiment Analysis, Data Analytics Dashboard */}
        {(activeFilter === 'all' || activeFilter === 'flagship' || activeFilter === 'analytics') && (
          <div className="secondary-projects-grid">
            {/* Project 3: Skill Swap */}
            {(activeFilter === 'all' || activeFilter === 'flagship') && (
              <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="card-top">
                  <span className="card-badge card-badge--purple">{skillswap.badge}</span>
                  <span className="card-status">{skillswap.status}</span>
                </div>
                <h4 className="card-title">{skillswap.title}</h4>
                <p className="card-subtitle">{skillswap.subtitle}</p>
                <p className="card-desc">{skillswap.description}</p>
                <div className="card-tech">
                  {skillswap.technologies.map((t, i) => (
                    <span key={i} className="tech-pill">{t}</span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Project 4: Sentiment Analysis */}
            {(activeFilter === 'all' || activeFilter === 'flagship') && (
              <motion.div
                className="project-card project-card--wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="card-top">
                  <span className="card-badge card-badge--cyan">{sentiment.badge}</span>
                </div>
                <h4 className="card-title">{sentiment.title}</h4>
                <p className="card-subtitle">{sentiment.subtitle}</p>
                <p className="card-desc">{sentiment.description}</p>
                <div className="card-tech">
                  {sentiment.technologies.map((t, i) => (
                    <span key={i} className="tech-pill">{t}</span>
                  ))}
                </div>
                <SentimentInteractiveDemo />
              </motion.div>
            )}

            {/* Project 5: Data Analytics Dashboard */}
            {(activeFilter === 'all' || activeFilter === 'analytics') && (
              <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="card-top">
                  <span className="card-badge card-badge--green">{analytics.badge}</span>
                </div>
                <h4 className="card-title">{analytics.title}</h4>
                <p className="card-subtitle">{analytics.subtitle}</p>
                <p className="card-desc">{analytics.description}</p>
                <div className="analytics-features-list">
                  {analytics.features.map((f, i) => (
                    <div key={i} className="a-feat">
                      <BarChart3 size={14} className="text-emerald" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="card-tech">
                  {analytics.technologies.map((t, i) => (
                    <span key={i} className="tech-pill tech-pill--green">{t}</span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* SUPPORTING PROJECTS */}
        {(activeFilter === 'all' || activeFilter === 'supporting') && (
          <div className="supporting-section">
            <h3 className="supporting-title">Supporting Projects & Concepts</h3>
            <div className="supporting-grid">
              {supportingProjects.map((sp) => (
                <div key={sp.id} className="supporting-card">
                  <h4 className="sp-title">{sp.title}</h4>
                  <p className="sp-desc">{sp.description}</p>
                  <div className="sp-tech">
                    {sp.technologies.map((t, i) => (
                      <span key={i} className="sp-pill">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      <ForgeMindModal
        isOpen={isForgeMindOpen}
        onClose={() => setIsForgeMindOpen(false)}
      />
    </section>
  );
}
