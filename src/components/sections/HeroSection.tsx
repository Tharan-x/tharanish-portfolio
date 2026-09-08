import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Cpu, BarChart3, Download, FileText } from 'lucide-react';
import { profile } from '../../data/profile';
import type { SectionKey } from '../3d/SpatialCanvas3D';
import './HeroSection.css';

interface HeroSectionProps {
  onNavigate: (section: SectionKey) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="hero-section">
      <div className="container hero-section__container">
        <motion.div
          className="hero-section__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Top Position Tag */}
          <div className="hero-section__badge">
            <Sparkles size={14} className="hero-section__badge-icon" />
            <span>Final-Year B.Tech AI & Data Science Student</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-section__headline">
            I build practical solutions with <span className="hero-section__gradient-text">data</span>,{' '}
            <span className="hero-section__gradient-text--alt">intelligence</span> and technology.
          </h1>

          {/* Subtitle */}
          <p className="hero-section__subtext">{profile.subTagline}</p>

          {/* Core Focus Pillars */}
          <div className="hero-section__pillars">
            <div className="hero-pillar">
              <Cpu size={16} />
              <span>AI & Data Science</span>
            </div>
            <div className="hero-pillar">
              <BarChart3 size={16} />
              <span>Data Analytics</span>
            </div>
            <div className="hero-pillar">
              <Sparkles size={16} />
              <span>Machine Learning</span>
            </div>
            <div className="hero-pillar">
              <Code2 size={16} />
              <span>Software & Product Dev</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="hero-section__actions">
            <button
              className="btn btn--primary hero-btn"
              onClick={() => onNavigate('projects')}
            >
              <span>View Projects</span>
              <ArrowRight size={18} />
            </button>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary hero-btn"
            >
              <FileText size={18} />
              <span>Resume</span>
            </a>

            <button
              className="btn btn--secondary hero-btn"
              onClick={() => onNavigate('contact')}
            >
              <span>Contact Me</span>
            </button>

            <a
              href={`mailto:${profile.email}`}
              className="btn btn--ghost hero-btn--ghost"
            >
              <Download size={16} />
              <span>Quick Email</span>
            </a>
          </div>

          {/* Quick Metrics / Details Bar */}
          <div className="hero-section__meta">
            <div className="meta-card">
              <span className="meta-card__label">Education</span>
              <span className="meta-card__value">SKP Engineering College</span>
              <span className="meta-card__sub">Anna University · CGPA 8.50</span>
            </div>
            <div className="meta-card">
              <span className="meta-card__label">Flagship Platform</span>
              <span className="meta-card__value">ForgeMind SaaS</span>
              <span className="meta-card__sub">Code Intelligence Platform</span>
            </div>
            <div className="meta-card">
              <span className="meta-card__label">Hackathon Recognition</span>
              <span className="meta-card__value">Uzhavan AI</span>
              <span className="meta-card__sub">24-Hour Winner · AI Lead</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
