import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-dreamy-100 to-dreamy-300">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full mix-blend-overlay filter blur-xl"
                />
                <motion.div
                    animate={{ y: [0, 30, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 right-10 w-48 h-48 bg-dreamy-400 rounded-full mix-blend-multiply filter blur-2xl"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 w-64 h-64 bg-dreamy-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                />
            </div>

            {/* Content */}
            <div className="z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-6xl md:text-8xl font-handwriting text-dreamy-600 mb-6 drop-shadow-sm"
                >
                    Happy Birthday
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-2xl md:text-3xl font-light text-slate-700 max-w-lg mx-auto"
                >
                    To my favorite person in the universe <span className="text-dreamy-500">♥</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-12"
                >
                    <div className="animate-bounce">
                        <span className="text-dreamy-600 text-xl">Scroll for surprises ↓</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
