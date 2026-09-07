import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export type SectionKey =
  | 'home'
  | 'about'
  | 'projects'
  | 'experience'
  | 'skills'
  | 'achievements'
  | 'contact';

interface SpatialCanvasProps {
  activeSection: SectionKey;
}

// Generate background star/particle field
function ParticlesField({ count = 300 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#6366f1'), // Indigo
      new THREE.Color('#3b82f6'), // Blue
      new THREE.Color('#06b6d4'), // Cyan
      new THREE.Color('#a855f7'), // Purple
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;

      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Interactive Network Graph Nodes
function NeuralNetworkMesh({ activeSection }: { activeSection: SectionKey }) {
  const groupRef = useRef<THREE.Group>(null);

  // Targets for camera / transform morphing per section
  const targetTransform = useMemo(() => {
    switch (activeSection) {
      case 'home':
        return { pos: [0, 0, 0], rot: [0, 0, 0], scale: 1 };
      case 'about':
        return { pos: [-2.5, 0.8, -1.5], rot: [0.3, 0.5, 0], scale: 1.2 };
      case 'projects':
        return { pos: [2.8, -0.5, -2], rot: [-0.2, -0.8, 0.2], scale: 1.1 };
      case 'experience':
        return { pos: [0, -2, -1], rot: [0.5, 0, 0.4], scale: 0.9 };
      case 'skills':
        return { pos: [-1.8, -1.2, 0.5], rot: [0.1, 1.2, -0.2], scale: 1.3 };
      case 'achievements':
        return { pos: [0, 1.5, -0.5], rot: [-0.4, 0.6, 0], scale: 1.4 };
      case 'contact':
        return { pos: [0, 0, 1.5], rot: [0, 0, 0], scale: 0.8 };
      default:
        return { pos: [0, 0, 0], rot: [0, 0, 0], scale: 1 };
    }
  }, [activeSection]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smooth lerp position, rotation, and scale based on active section
      const g = groupRef.current;
      g.position.x = THREE.MathUtils.lerp(g.position.x, targetTransform.pos[0], delta * 3);
      g.position.y = THREE.MathUtils.lerp(g.position.y, targetTransform.pos[1], delta * 3);
      g.position.z = THREE.MathUtils.lerp(g.position.z, targetTransform.pos[2], delta * 3);

      g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, targetTransform.rot[0] + state.pointer.y * 0.1, delta * 2);
      g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, targetTransform.rot[1] + state.pointer.x * 0.15 + state.clock.getElapsedTime() * 0.05, delta * 2);
      g.rotation.z = THREE.MathUtils.lerp(g.rotation.z, targetTransform.rot[2], delta * 2);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central 3D Tech Core */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh>
          <octahedronGeometry args={[1.2, 2]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#4338ca"
            emissiveIntensity={0.4}
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
      </Float>

      {/* Inner Glowing Core */}
      <Float speed={3} rotationIntensity={0.8} floatIntensity={0.4}>
        <mesh>
          <icosahedronGeometry args={[0.6, 1]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0284c7"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      {/* Orbital Ring 1 */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.2, 0.015, 16, 100]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.4} />
      </mesh>

      {/* Orbital Ring 2 */}
      <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[2.8, 0.012, 16, 100]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

// Camera Rig Controller
function CameraRig({ activeSection }: { activeSection: SectionKey }) {
  useFrame((state, delta) => {
    let targetX = 0;
    let targetY = 0;
    let targetZ = 7;

    switch (activeSection) {
      case 'home':
        targetX = 0;
        targetY = 0;
        targetZ = 7;
        break;
      case 'about':
        targetX = 1.2;
        targetY = 0.5;
        targetZ = 6.2;
        break;
      case 'projects':
        targetX = -1.5;
        targetY = -0.3;
        targetZ = 6.5;
        break;
      case 'experience':
        targetX = 0;
        targetY = 1.2;
        targetZ = 6.0;
        break;
      case 'skills':
        targetX = 1.0;
        targetY = -0.8;
        targetZ = 5.8;
        break;
      case 'achievements':
        targetX = -0.8;
        targetY = 0.8;
        targetZ = 6.2;
        break;
      case 'contact':
        targetX = 0;
        targetY = 0;
        targetZ = 5.2;
        break;
    }

    // Dynamic mouse parallax effect
    targetX += state.pointer.x * 0.4;
    targetY += state.pointer.y * 0.4;

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, delta * 2.5);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, delta * 2.5);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, delta * 2.5);

    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function SpatialCanvas3D({ activeSection }: SpatialCanvasProps) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -2]} intensity={0.4} color="#818cf8" />
        <pointLight position={[5, -5, 5]} intensity={0.5} color="#38bdf8" />
        <CameraRig activeSection={activeSection} />
        <NeuralNetworkMesh activeSection={activeSection} />
        <ParticlesField count={350} />
      </Canvas>
    </div>
  );
}
