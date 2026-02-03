import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ValentineQuestion({ onYes }) {
    const [noCount, setNoCount] = useState(0);
    const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

    // Mobile-friendly: Use ref to constrain movement within viewport if needed, 
    // currently just moving randomly.

    const handleNoInteraction = () => {
        setNoCount(noCount + 1);
        // Move the button to a random position
        // We use a larger range effectively making it jump around
        const x = Math.random() * 200 - 100; // -100 to 100
        const y = Math.random() * 200 - 100; // -100 to 100
        setNoPosition({ x, y });
    };

    const getNoButtonText = () => {
        const phrases = [
            "No", "Are you sure?", "Really?", "Think again!", "Last chance!",
            "Surely not?", "You might regret this!", "Give it another thought!",
            "Are you absolutely certain?", "This could be a mistake!", "Have a heart!",
            "Don't be so cold!", "Change of heart?", "Wouldn't you reconsider?",
            "Is that your final answer?", "You're breaking my heart ;("
        ];
        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    return (
        <div className="flex flex-col items-center justify-center h-full text-center px-4 relative overflow-hidden">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="mb-8"
            >
                <img
                    src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
                    alt="Cute bear"
                    className="h-[180px] md:h-[200px] rounded-lg shadow-lg object-cover"
                />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-brand-red mb-8">
                Will you be my Valentine? 🌹
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full relative min-h-[150px]">
                <motion.button
                    className={`bg-brand-red text-white font-bold rounded-lg shadow-lg hover:bg-red-600 transition-colors z-10`}
                    style={{
                        // We restrict max font size so it doesn't break mobile layout
                        fontSize: Math.min(16 + noCount * 2, 32),
                        padding: `${Math.min(12 + noCount * 2, 30)}px ${Math.min(24 + noCount * 4, 60)}px`
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onYes}
                >
                    Yes
                </motion.button>

                <motion.button
                    className="bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg shadow transition-all absolute md:static"
                    animate={{ x: noPosition.x, y: noPosition.y }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    // Both mouse and touch events to cover all bases
                    onMouseEnter={handleNoInteraction}
                    onTouchStart={handleNoInteraction}
                    onClick={handleNoInteraction} // Fallback
                    style={{
                        position: noCount > 0 ? 'absolute' : 'relative',
                        top: noCount > 0 ? '50%' : 'auto', // Center it initially if absolute
                        // Prevent it from blocking the Yes button by starting mostly clear
                    }}
                >
                    {getNoButtonText()}
                </motion.button>
            </div>
        </div>
    );
}
