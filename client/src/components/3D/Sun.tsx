import React, { useRef } from 'react';
import {useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Sphere } from '@react-three/drei';

interface SunProps {
    onClick: () => void;
    isActive: boolean;
}

const Sun: React.FC<SunProps> = ({ onClick, isActive }) => {
    const sunRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (sunRef.current) {
            sunRef.current.rotation.y += 0.005;
            const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.5;

            sunRef.current.scale.setScalar(scale);
        }
    });

    return(
        <group onClick={onClick} >
            <Sphere ref={sunRef} args={[2, 32, 32]}>
                <meshStandardMaterial
                    color='#FFA500'
                    emissive='#FF4500'
                    emissiveIntensity={isActive ? 0.8 : 0.5}
                    />
            </Sphere>
            <pointLight position={[0, 0, 0]} intensity={2} color='#FFA500' />
        </group>
    );
};

export default Sun;