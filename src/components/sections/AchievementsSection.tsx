import { motion } from 'framer-motion';
import { Trophy, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { achievements } from '../../data/achievements';
import './AchievementsSection.css';

export default function AchievementsSection() {
  return (
    <section className="achievements-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header__badge">
            <Trophy size={14} />
            <span>Honors & Recognitions</span>
          </div>
          <h2 className="section-header__title">
            Hackathon Victory & <span className="text-gradient">Achievements</span>.
          </h2>
          <p className="section-header__desc">
            Highlights of competitive hackathon performance and collaborative leadership.
          </p>
        </div>

        {/* Featured Achievement Card */}
        <div className="achievements-grid">
          {achievements.map((ach) => (
            <motion.div
              key={ach.id}
              className="achievement-card achievement-card--winner"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="ach-glow"></div>
              
              <div className="ach-badge-bar">
                <div className="ach-trophy-badge">
                  <Trophy size={16} />
                  <span>{ach.title}</span>
                </div>
                <span className="ach-tag">{ach.badge}</span>
              </div>

              <h3 className="ach-project-title">{ach.project}</h3>

              <div className="ach-meta-row">
                <div className="ach-meta-item">
                  <Sparkles size={15} className="text-amber" />
                  <span>Role: <strong>{ach.role}</strong></span>
                </div>
                <div className="ach-meta-item">
                  <Users size={15} className="text-amber" />
                  <span>Team: <strong>{ach.team}</strong></span>
                </div>
              </div>

              <p className="ach-desc">{ach.description}</p>

              <div className="ach-bullets">
                <div className="ach-bullet">
                  <CheckCircle2 size={15} className="text-amber" />
                  <span>Engineered AI crop advisory & disease diagnosis components under 24-hour hackathon constraints.</span>
                </div>
                <div className="ach-bullet">
                  <CheckCircle2 size={15} className="text-amber" />
                  <span>Led pitch integration, presentation delivery, and live prototype demonstration for judges.</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
