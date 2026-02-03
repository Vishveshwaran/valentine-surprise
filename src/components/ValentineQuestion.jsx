import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ValentineQuestion({ onYes }) {
    const [noCount, setNoCount] = useState(0);

    const yesButtonSize = noCount * 20 + 16; // reduced growth rate, start at 16px (1rem) -> actually this is font size or padding? 
    // Let's control scale instead.

    const phrases = [
        "No",
        "Are you sure?",
        "Really sure?",
        "Think again!",
        "Last chance!",
        "Surely not?",
        "You might regret this!",
        "Give it another thought!",
        "Are you absolutely certain?",
        "This could be a mistake!",
        "Have a heart!",
        "Don't be so cold!",
        "Change of heart?",
        "Wouldn't you reconsider?",
        "Is that your final answer?",
        "You're breaking my heart ;(",
    ];

    const getNoButtonText = () => {
        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    return (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="mb-8"
            >
                <img
                    src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
                    alt="Cute bear"
                    className="h-[200px] rounded-lg shadow-lg"
                />
            </motion.div>

            <h2 className="text-4xl font-bold text-brand-red mb-8">
                Will you be my Valentine? 🌹
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.button
                    className={`bg-brand-red text-white font-bold rounded-lg shadow-lg hover:bg-red-600 transition-all`}
                    style={{
                        fontSize: Math.min(16 + noCount * 8, 100), // Cap at 100px
                        padding: `${Math.min(12 + noCount * 4, 60)}px ${Math.min(24 + noCount * 8, 100)}px`
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onYes}
                >
                    Yes
                </motion.button>

                <motion.button
                    className="bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg shadow hover:bg-gray-400 transition-all"
                    onClick={() => setNoCount(noCount + 1)}
                    whileHover={{ x: Math.random() * 50 - 25, y: Math.random() * 50 - 25 }} // Jiggle
                >
                    {getNoButtonText()}
                </motion.button>
            </div>
        </div>
    );
}
