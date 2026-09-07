import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './SectionHeading.css';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={`section-heading section-heading--${align}`}
      initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {label && <span className="section-heading__label">{label}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {description && (
        <p className="section-heading__description">{description}</p>
      )}
    </motion.div>
  );
}
