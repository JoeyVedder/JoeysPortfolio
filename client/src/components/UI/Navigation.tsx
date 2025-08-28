import React from 'react';
import { motion } from 'framer-motion';
import * as SolarSystemPortfolio from '../SolarSystemPortfolio';

interface NavigationProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    planets: SolarSystemPortfolio.PlanetInfo[];
}