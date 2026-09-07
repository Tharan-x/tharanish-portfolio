import { motion } from 'framer-motion';
import {
  Wrench,
  Code,
  BarChart2,
  Cpu,
  Database,
  Terminal,
  Heart,
  Globe,
  Compass,
  Check,
} from 'lucide-react';
import { skillGroups, softSkills, languages, areasOfInterest } from '../../data/skills';
import './SkillsSection.css';

export default function SkillsSection() {
  return (
    <section className="skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header__badge">
            <Wrench size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-header__title">
            Structured <span className="text-gradient">Skill Matrix</span>.
          </h2>
          <p className="section-header__desc">
            Categorized technical stack across Data Analytics, Machine Learning, Databases, and Software Development.
          </p>
        </div>

        {/* Technical Skill Categories Grid */}
        <div className="skill-groups-grid">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              className="skill-group-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div className="group-header">
                <div className="group-icon-wrap">
                  {group.icon === 'code' && <Code size={18} />}
                  {group.icon === 'bar-chart-2' && <BarChart2 size={18} />}
                  {group.icon === 'cpu' && <Cpu size={18} />}
                  {group.icon === 'database' && <Database size={18} />}
                  {group.icon === 'wrench' && <Terminal size={18} />}
                </div>
                <h3>{group.category}</h3>
              </div>

              <div className="skill-pills-list">
                {group.skills.map((skill, i) => (
                  <div key={i} className="skill-pill-item">
                    <Check size={13} className="text-cyan" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills, Languages & Areas of Interest */}
        <div className="skills-meta-grid">
          {/* Soft Skills */}
          <motion.div
            className="meta-section-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="meta-card-header">
              <Heart size={18} className="text-purple" />
              <h4>Soft Skills</h4>
            </div>
            <div className="meta-pills-wrap">
              {softSkills.map((ss, i) => (
                <span key={i} className="meta-pill meta-pill--purple">
                  {ss}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            className="meta-section-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="meta-card-header">
              <Globe size={18} className="text-blue" />
              <h4>Languages</h4>
            </div>
            <div className="languages-list">
              {languages.map((lang, i) => (
                <div key={i} className="lang-row">
                  <span className="lang-name">{lang.language}</span>
                  <span className="lang-fluency">{lang.fluency}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Areas of Interest */}
          <motion.div
            className="meta-section-card meta-section-card--wide"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="meta-card-header">
              <Compass size={18} className="text-cyan" />
              <h4>Areas of Interest</h4>
            </div>
            <div className="meta-pills-wrap">
              {areasOfInterest.map((aoi, i) => (
                <span key={i} className="meta-pill meta-pill--cyan">
                  {aoi}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
