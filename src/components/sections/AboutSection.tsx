import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award, Terminal, Code2, Database, Brain, Sparkles, BookOpen } from 'lucide-react';
import { profile } from '../../data/profile';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header__badge">
            <BookOpen size={14} />
            <span>Background & Philosophy</span>
          </div>
          <h2 className="section-header__title">
            Building technology through <span className="text-gradient">practical execution</span>.
          </h2>
          <p className="section-header__desc">
            A developer mindset grounded in data, structured analysis, and hands-on application.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Bio Card */}
          <motion.div
            className="about-card about-card--bio"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bio-header">
              <div className="bio-avatar-placeholder">
                <Terminal size={24} className="bio-avatar-icon" />
              </div>
              <div>
                <h3 className="bio-name">{profile.name}</h3>
                <p className="bio-role">{profile.role}</p>
                <div className="bio-location">
                  <MapPin size={14} />
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>

            <div className="bio-body">
              <p>
                I am a final-year <strong>B.Tech Artificial Intelligence & Data Science</strong> student at SKP Engineering College (Anna University). My approach to technology is driven by practical problem solving — applying data analytics, machine learning algorithms, and modern software engineering principles to build real working systems rather than remaining strictly in theory.
              </p>
              <p>
                Throughout my academic journey, I have focused on building hands-on projects, taking part in intensive hackathons, and completing industry internship programs. Whether constructing developer platforms like <em>ForgeMind</em>, winning hackathon recognition with <em>Uzhavan AI</em>, or crafting executive Data Analytics dashboards, I value clean logic, accurate data interpretation, and intuitive user experiences.
              </p>
            </div>

            <div className="bio-tags">
              <span className="bio-tag">Practical Solutions</span>
              <span className="bio-tag">Full Lifecycle Dev</span>
              <span className="bio-tag">Data-Driven Insights</span>
              <span className="bio-tag">Continuous Learning</span>
            </div>
          </motion.div>

          {/* Education & Academic Credentials */}
          <motion.div
            className="about-card about-card--education"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="card-header">
              <GraduationCap size={20} className="card-header-icon" />
              <h3>Academic Background</h3>
            </div>

            <div className="edu-block">
              <span className="edu-degree">{profile.education.degree}</span>
              <h4 className="edu-college">{profile.education.college}</h4>
              <p className="edu-univ">{profile.education.university}</p>
              
              <div className="edu-meta-grid">
                <div className="edu-meta-item">
                  <span className="edu-meta-label">Duration</span>
                  <span className="edu-meta-val">{profile.education.years}</span>
                </div>
                <div className="edu-meta-item">
                  <span className="edu-meta-label">CGPA</span>
                  <span className="edu-meta-val edu-meta-val--highlight">
                    {profile.education.cgpa} / 10.0
                  </span>
                </div>
                <div className="edu-meta-item">
                  <span className="edu-meta-label">Status</span>
                  <span className="edu-meta-val">Final Year</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Areas of Focus */}
          <motion.div
            className="about-card about-card--focus"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card-header">
              <Sparkles size={20} className="card-header-icon" />
              <h3>Core Capabilities & Focus</h3>
            </div>

            <div className="focus-list">
              <div className="focus-item">
                <div className="focus-icon-wrap">
                  <Database size={18} />
                </div>
                <div>
                  <h4>Data Analytics & BI</h4>
                  <p>Excel, SQL querying, Power BI, Tableau dashboards, trend extraction, and business reporting.</p>
                </div>
              </div>

              <div className="focus-item">
                <div className="focus-icon-wrap">
                  <Brain size={18} />
                </div>
                <div>
                  <h4>Machine Learning & NLP</h4>
                  <p>Data preprocessing, classification models, evaluation metrics, VADER sentiment analysis.</p>
                </div>
              </div>

              <div className="focus-item">
                <div className="focus-icon-wrap">
                  <Code2 size={18} />
                </div>
                <div>
                  <h4>Software & Product Dev</h4>
                  <p>Building SaaS platform tools, REST APIs, Python applications, and user-centered interactive interfaces.</p>
                </div>
              </div>

              <div className="focus-item">
                <div className="focus-icon-wrap">
                  <Award size={18} />
                </div>
                <div>
                  <h4>Applied Learning</h4>
                  <p>Practical learning through 24-hour hackathons, industry internships, and self-directed project execution.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
