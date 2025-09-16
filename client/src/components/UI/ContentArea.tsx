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
            case 'about':
                return <AboutContent />;
            case 'projects':
                return <ProjectsContent />;
            case 'skills':
                return <SkillsContent />;
            case 'contact':
                return <ContactContent />;
            default:
                return <HomeContent />;
        }
    };

    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none">
            <div className="w-full max-w-6xl px-6 pointer-events-auto">
                <AnimatePresence mode="wait">
                    {renderContent()}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ContentArea;