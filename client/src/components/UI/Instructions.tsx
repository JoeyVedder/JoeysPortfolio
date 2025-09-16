import React from 'react';
import { motion } from 'framer-motion';

const Instructions: React.FC = () => {
    return (
        <div className="fixed bottom-6 right-6 z-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <p className="text-sm text-gray-500">
                    Click on planets or use navigation to explore
                    <br />
                    Drag to orbit, scroll to zoom
                </p>
            </motion.div>
        </div>
    );
};

export default Instructions;