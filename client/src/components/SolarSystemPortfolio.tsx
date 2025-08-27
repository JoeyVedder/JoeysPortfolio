
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { AnimatePresence } from 'framer-motion';

import StarryBackground from './3D/StarryBackground';
import Sun from './3D/Sun';
import Planet from './3D/Planet';
import Navigation from './UI/Navigation';
import ContentArea from './UI/ContentArea';
import Instructions from './UI/Instructions';

export interface PlanetInfo {
    name: string;
    position: [number, number, number];
    size: number;
    color: string;
    label: string;
}

const SolarSystemPortfolio: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('home');

    const planets: PlanetInfo[] = [
        {name: 'about', position: [6, 0, 0], size: 1, color: '#504E51', label: 'Mercury - About Me'},
        {name: 'projects', position: [9, 0, 0], size: 1, color: '#f4c9a8', label: 'Venus - Projects'},
        {name: 'skills', position: [12, 0, 0], size: 1, color: '#E27B58', label: 'Mars - Skills'},
        {name: 'contact', position: [16, 0, 0], size: 1.2, color: '#B07F35', label: 'Jupiter - Contact' },
    ];

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            <div className="fixed inset-0 z-0">
                <Canvas camera={{ position: [0, 5, 20], fov: 60 }}>
                    <ambientLight intensity={0.1} />
                    <StarryBackground />
                    <Sun
                      onClick={() => setActiveTab('home')}
                      isActive={activeTab === 'home'}
                      />
                      {planets.map((planet) => (
                        <Planet
                          key={planet.name}
                          position={planet.position}
                          size={planet.size}
                          color={planet.color}
                          onClick={() => setActiveTab(planet.name)}
                          name={planet.name}
                          isActive={activeTab === planet.name}
                          />
                      ))}
                      <OrbitControls
                      enableZoom={true}
                      enablePan={true}
                      maxDistance={30}
                      minDistance={8}
                      />
                </Canvas>
            </div>

            <Navigation
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            planets={planets}
            />

            <ContentArea activeTab={activeTab} />

            <Instructions />
        </div>
    );
};

export default SolarSystemPortfolio;