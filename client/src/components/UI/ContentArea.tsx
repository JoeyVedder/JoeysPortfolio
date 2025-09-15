import React from 'react';
import { AnimatePresence } from 'framer-motion';
import HomeContent from '../Content/HomeContent';
import AboutContent from '../Content/AboutContent';
import ProjectsContent from '../Content/ProjectsContent';
import SkillsContent from '../Content/SkillsContent';
import ContactContent from '../Content/ContactContent';

interface ContentAreaProps {
    activeTab: string;
}

const ContentArea: React.FC<ContentAreaProps> = ({ activeTab }) => {
    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return <HomeContent />;
        }
    }
}