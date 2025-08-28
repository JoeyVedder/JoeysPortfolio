import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface PlanetProps {
  position: [number, number, number];
  size: number;
  color: string;
  onClick: () => void;
  name: string;
  isActive: boolean;
}

const Planet: React.FC<PlanetProps> = ({ position, size, color, onClick, name, isActive }) => {
  const planetRef = useRef<THREE.Mesh>(null!);
  const orbitRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (orbitRef.current) {
      const distance = Math.sqrt(position[0] ** 2 + position[2] ** 2);
      if (distance > 0) {
        orbitRef.current.rotation.y += 0.01 * (1 / distance);
      }
    }
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.02;
    }
  });

  return (
    <group ref={orbitRef}>
      <group position={position} onClick={onClick} userData={{ name }}>
        <Sphere ref={planetRef} args={[size, 16, 16]}>
          <meshStandardMaterial color={color} />
        </Sphere>
        {isActive && (
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[size * 1.5, size * 1.7, 32]} />
            <meshBasicMaterial
              color="#ffffff"
              transparent
              opacity={0.6}
              side={THREE.DoubleSide}
            />
          </mesh>
        )}
      </group>
    </group>
  );
};

export default Planet;
