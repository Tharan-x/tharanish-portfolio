import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  icon?: ReactNode;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  external,
  onClick,
  className = '',
  ariaLabel,
  icon,
}: ButtonProps) {
  const classes = `btn btn--${variant} btn--${size} ${className}`;

  const content = (
    <>
      {icon && <span className="btn__icon">{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
