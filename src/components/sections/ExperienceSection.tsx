import { motion } from 'framer-motion';
import { Briefcase, Award, Calendar, CheckCircle2, ShieldCheck, Code, Brain } from 'lucide-react';
import { experiences } from '../../data/experience';
import { certifications } from '../../data/certifications';
import './ExperienceSection.css';

export default function ExperienceSection() {
  return (
    <section className="experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header__badge">
            <Briefcase size={14} />
            <span>Experience & Certifications</span>
          </div>
          <h2 className="section-header__title">
            Industry <span className="text-gradient">Training & Internships</span>.
          </h2>
          <p className="section-header__desc">
            Hands-on technical internships, data analytics programs, and domain certifications.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {idx < experiences.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="timeline-content">
                <div className="timeline-top">
                  <span className="exp-badge">{exp.badge}</span>
                  {exp.period && (
                    <div className="exp-period">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </div>
                  )}
                </div>

                <h3 className="exp-role">{exp.role}</h3>
                <h4 className="exp-org">{exp.organization}</h4>
                <p className="exp-desc">{exp.description}</p>

                <div className="exp-highlights">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="exp-h-row">
                      <CheckCircle2 size={15} className="text-indigo" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="exp-skills">
                  {exp.skills.map((s, i) => (
                    <span key={i} className="exp-skill-pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="certifications-block">
          <div className="cert-header">
            <Award size={20} className="text-amber" />
            <h3>Industry Certifications & Bootcamps</h3>
          </div>

          <div className="certifications-grid">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                className="cert-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="cert-icon-wrap">
                  {cert.icon === 'brain' && <Brain size={18} />}
                  {cert.icon === 'shield' && <ShieldCheck size={18} />}
                  {cert.icon === 'code' && <Code size={18} />}
                  {cert.icon === 'lock' && <ShieldCheck size={18} />}
                </div>
                <div>
                  <h4 className="cert-title">{cert.title}</h4>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
