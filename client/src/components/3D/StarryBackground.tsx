import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const StarryBackground: React.FC = () => {
    const starsRef = useRef<THREE.Points>(null);
    const starGeometry = useRef<THREE.BufferGeometry>(new THREE.BufferGeometry());

    useEffect(() => {
        const positions = new Float32Array(2000 * 3); // Typed Array for 2000 vertices, each needing 3 values (x, y, and z)
        for (let i = 0; i < 2000; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 2000;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
        }
        starGeometry.current.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    }, []);

    useFrame(() => {
        if (starsRef.current) {
            starsRef.current.rotation.y += 0.0003;
        }
    });

    return (
        <points ref={starsRef}>
            <bufferGeometry ref={starGeometry} />
            <pointsMaterial color='#ffffff' size={1} />
        </points>
    );
};

export default StarryBackground;