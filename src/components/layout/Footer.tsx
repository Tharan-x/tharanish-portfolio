import { profile } from '../../data/profile';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { Mail, Sparkles } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__name">{profile.name}</span>
          <span className="footer__sep">·</span>
          <span className="footer__tagline">Final-Year B.Tech AI & Data Science</span>
        </div>
        <div className="footer__right">
          <span className="footer__copyright">
            Designed & Built with <Sparkles size={12} className="footer__sparkle" /> © {new Date().getFullYear()}
          </span>
          <div className="footer__links">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="footer__link"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="footer__link"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email Me"
              className="footer__link"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
