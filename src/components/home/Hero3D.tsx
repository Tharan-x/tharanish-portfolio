import { Suspense, lazy } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './Hero3D.css';

const Scene3D = lazy(() => import('./Scene3D'));

export default function Hero3D() {
  const prefersReduced = useReducedMotion();

  // On reduced motion or if we want a lightweight fallback
  if (prefersReduced) {
    return (
      <div className="hero3d hero3d--fallback" aria-hidden="true">
        <div className="hero3d__gradient" />
      </div>
    );
  }

  return (
    <div className="hero3d" aria-hidden="true">
      <Suspense
        fallback={
          <div className="hero3d--fallback">
            <div className="hero3d__gradient" />
          </div>
        }
      >
        <Scene3D />
      </Suspense>
    </div>
  );
}
