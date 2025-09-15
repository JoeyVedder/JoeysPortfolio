import React from 'react';
import { motion } from 'framer-motion';
import type { PlanetInfo } from '../SolarSystemPortfolio';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  planets: PlanetInfo[];
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab, planets }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 p-6">
      <div className="flex justify-center">
        <motion.div 
          className="bg-black/50 backdrop-blur-md rounded-full px-6 py-3 border border-white/20"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeTab === 'home' 
                  ? 'bg-yellow-500 text-black font-semibold' 
                  : 'text-yellow-400 hover:bg-yellow-500/20'
              }`}
            >
              ☉ Sun
            </button>
            {planets.map((planet) => (
              <button
                key={planet.name}
                onClick={() => setActiveTab(planet.name)}
                className={`px-4 py-2 rounded-full transition-all capitalize ${
                  activeTab === planet.name 
                    ? `bg-opacity-100 text-black font-semibold`
                    : `hover:bg-opacity-20`
                }`}
                style={{
                  backgroundColor: activeTab === planet.name ? planet.color : 'transparent',
                  color: activeTab === planet.name ? '#000' : planet.color,
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== planet.name) {
                    (e.target as HTMLButtonElement).style.backgroundColor = `${planet.color}33`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== planet.name) {
                    (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
                  }
                }}
              >
                {planet.name}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navigation;