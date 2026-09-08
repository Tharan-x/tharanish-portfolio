import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles, FileText } from 'lucide-react';
import { profile } from '../../data/profile';
import type { SectionKey } from '../3d/SpatialCanvas3D';
import './Navbar.css';

interface NavbarProps {
  activeSection: SectionKey;
  setActiveSection: (section: SectionKey) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const navItems: { key: SectionKey; label: string }[] = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'projects', label: 'Projects' },
  { key: 'experience', label: 'Experience' },
  { key: 'skills', label: 'Skills' },
  { key: 'achievements', label: 'Achievements' },
  { key: 'contact', label: 'Contact' },
];

export default function Navbar({
  activeSection,
  setActiveSection,
  theme,
  toggleTheme,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (key: SectionKey) => {
    setActiveSection(key);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container" aria-label="Main navigation">
        <button
          className="navbar__logo"
          onClick={() => handleNavClick('home')}
          aria-label="THARANISH M. Home"
        >
          <div className="navbar__logo-badge">
            <span className="navbar__logo-text">THARANISH M.</span>
          </div>
          <span className="navbar__logo-tag">B.Tech AI & DS</span>
        </button>

        <div className="navbar__status-pill">
          <span className="navbar__status-dot"></span>
          <span className="navbar__status-text">Open for Roles & Projects</span>
        </div>

        <div className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.key)}
              className={`navbar__link ${
                activeSection === item.key ? 'navbar__link--active' : ''
              }`}
            >
              {item.label}
              {activeSection === item.key && <span className="navbar__link-glow" />}
            </button>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link navbar__link--mobile-resume"
            onClick={() => setIsOpen(false)}
          >
            <FileText size={14} />
            <span>Resume</span>
          </a>
        </div>

        <div className="navbar__actions">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__resume"
            aria-label="View Resume PDF"
          >
            <FileText size={14} />
            <span>Resume</span>
          </a>

          <button
            className="navbar__quick-hire"
            onClick={() => handleNavClick('contact')}
          >
            <Sparkles size={14} />
            <span>Connect</span>
          </button>

          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="navbar__hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
