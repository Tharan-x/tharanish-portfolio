import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Generate node positions in a spread-out cluster
function generateNodes(count: number): THREE.Vector3[] {
  const nodes: THREE.Vector3[] = [];
  for (let i = 0; i < count; i++) {
    nodes.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 4
      )
    );
  }
  return nodes;
}

// Generate connections between nearby nodes
function generateEdges(
  nodes: THREE.Vector3[],
  maxDist: number
): [number, number][] {
  const edges: [number, number][] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].distanceTo(nodes[j]) < maxDist) {
        edges.push([i, j]);
      }
    }
  }
  return edges;
}

function NetworkNode({
  position,
  size,
}: {
  position: THREE.Vector3;
  size: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float speed={1.5} rotationIntensity={0} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[size, 1]} />
        <meshStandardMaterial
          color="#7c6ef0"
          emissive="#5b4dc7"
          emissiveIntensity={0.3}
          roughness={0.6}
          metalness={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

function Edges({
  nodes,
  edges,
}: {
  nodes: THREE.Vector3[];
  edges: [number, number][];
}) {
  const lineRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions: number[] = [];

    for (const [i, j] of edges) {
      positions.push(nodes[i].x, nodes[i].y, nodes[i].z);
      positions.push(nodes[j].x, nodes[j].y, nodes[j].z);
    }

    geo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3)
    );
    return geo;
  }, [nodes, edges]);

  return (
    <lineSegments ref={lineRef} geometry={geometry}>
      <lineBasicMaterial color="#7c6ef0" transparent opacity={0.15} />
    </lineSegments>
  );
}

function NetworkScene() {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  const { nodes, edges, sizes } = useMemo(() => {
    const n = generateNodes(18);
    const e = generateEdges(n, 2.8);
    const s = n.map(() => 0.06 + Math.random() * 0.1);
    return { nodes: n, edges: e, sizes: s };
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      // Slow ambient rotation
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x += delta * 0.02;

      // Subtle mouse influence
      groupRef.current.rotation.y +=
        (pointer.x * 0.15 - groupRef.current.rotation.y) * 0.01;
      groupRef.current.rotation.x +=
        (-pointer.y * 0.1 - groupRef.current.rotation.x) * 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <NetworkNode key={i} position={pos} size={sizes[i]} />
      ))}
      <Edges nodes={nodes} edges={edges} />
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <pointLight position={[-3, -3, 2]} intensity={0.3} color="#a78bfa" />
      <NetworkScene />
    </Canvas>
  );
}
