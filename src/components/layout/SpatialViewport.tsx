import type { ReactNode } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import type { SectionKey } from '../3d/SpatialCanvas3D';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface SpatialViewportProps {
  activeSection: SectionKey;
  children: ReactNode;
}

// 3D Spatial variants tailored per section
const spatialVariants: Record<SectionKey, Variants> = {
  home: {
    initial: { opacity: 0, scale: 0.92, z: -250, rotateX: 10 },
    animate: { opacity: 1, scale: 1, z: 0, rotateX: 0, rotateY: 0 },
    exit: { opacity: 0, scale: 0.9, z: -350, rotateY: -15 },
  },
  about: {
    initial: { opacity: 0, rotateY: 35, z: -300, scale: 0.88, x: -100 },
    animate: { opacity: 1, rotateY: 0, z: 0, scale: 1, x: 0 },
    exit: { opacity: 0, rotateY: -35, z: -250, scale: 0.9, x: 100 },
  },
  projects: {
    initial: { opacity: 0, x: 250, rotateY: -25, z: -200, scale: 0.9 },
    animate: { opacity: 1, x: 0, rotateY: 0, z: 0, scale: 1 },
    exit: { opacity: 0, x: -250, rotateY: 25, z: -200, scale: 0.9 },
  },
  experience: {
    initial: { opacity: 0, y: -200, rotateX: -30, z: -150, scale: 0.92 },
    animate: { opacity: 1, y: 0, rotateX: 0, z: 0, scale: 1 },
    exit: { opacity: 0, y: 200, rotateX: 30, z: -150, scale: 0.92 },
  },
  skills: {
    initial: { opacity: 0, scale: 0.75, rotateZ: 12, z: -400 },
    animate: { opacity: 1, scale: 1, rotateZ: 0, z: 0 },
    exit: { opacity: 0, scale: 1.15, rotateZ: -12, z: 200 },
  },
  achievements: {
    initial: { opacity: 0, rotateX: 40, y: -150, z: -300, scale: 0.85 },
    animate: { opacity: 1, rotateX: 0, y: 0, z: 0, scale: 1 },
    exit: { opacity: 0, rotateX: -40, y: 150, z: -300, scale: 0.85 },
  },
  contact: {
    initial: { opacity: 0, z: 450, scale: 0.8, filter: 'blur(12px)' },
    animate: { opacity: 1, z: 0, scale: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, z: -450, scale: 0.8, filter: 'blur(12px)' },
  },
};

// Reduced motion fallback
const reducedVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function SpatialViewport({ activeSection, children }: SpatialViewportProps) {
  const prefersReduced = useReducedMotion();

  const currentVariants = prefersReduced ? reducedVariants : spatialVariants[activeSection];

  return (
    <div
      style={{
        perspective: '1200px',
        perspectiveOrigin: '50% 50%',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        zIndex: 1,
        overflowX: 'hidden',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          variants={currentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1], // Smooth cubic bezier easing
          }}
          style={{
            transformStyle: 'preserve-3d',
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
