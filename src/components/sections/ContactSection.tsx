import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles, MessageSquare } from 'lucide-react';
import { profile } from '../../data/profile';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import './ContactSection.css';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header__badge">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-header__title">
            Let's build something <span className="text-gradient">exceptional</span>.
          </h2>
          <p className="section-header__desc">
            Open for full-time roles, software & AI engineering opportunities, and collaborative project builds.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Contact Details Card */}
          <motion.div
            className="contact-card contact-card--info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="info-header">
              <h3 className="info-title">{profile.name}</h3>
              <p className="info-role">{profile.role}</p>
            </div>

            <div className="contact-methods">
              {/* Email */}
              <div className="contact-method-item">
                <div className="method-icon-wrap">
                  <Mail size={18} />
                </div>
                <div className="method-details">
                  <span className="method-label">Email Address</span>
                  <a href={`mailto:${profile.email}`} className="method-value">
                    {profile.email}
                  </a>
                </div>
                <button
                  className="copy-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={16} className="text-green" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone */}
              <div className="contact-method-item">
                <div className="method-icon-wrap">
                  <Phone size={18} />
                </div>
                <div className="method-details">
                  <span className="method-label">Phone / WhatsApp</span>
                  <a href={`tel:${profile.phone}`} className="method-value">
                    {profile.phone}
                  </a>
                </div>
                <button
                  className="copy-btn"
                  onClick={handleCopyPhone}
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check size={16} className="text-green" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location */}
              <div className="contact-method-item">
                <div className="method-icon-wrap">
                  <MapPin size={18} />
                </div>
                <div className="method-details">
                  <span className="method-label">Location</span>
                  <span className="method-value">{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links-block">
              <span className="social-label">Connect & Explore Code</span>
              <div className="social-buttons">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn social-btn--linkedin"
                >
                  <LinkedinIcon size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Recruiter / Collaboration Message Form */}
          <motion.div
            className="contact-card contact-card--form"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="form-title">Send a Direct Message</h3>
            <p className="form-subtitle">
              Whether you are a recruiter, collaborator, or engineering lead, feel free to drop a message.
            </p>

            {formSent ? (
              <div className="form-success-banner">
                <Sparkles size={24} className="text-cyan" />
                <h4>Message Received!</h4>
                <p>Thank you for reaching out. I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, role opportunity, or ideas..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn--primary submit-btn">
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
