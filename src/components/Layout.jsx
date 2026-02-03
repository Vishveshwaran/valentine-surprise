import React from 'react';
import { motion } from 'framer-motion';

const FloatingHearts = () => {
    const hearts = Array.from({ length: 20 });
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {hearts.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-brand-pink opacity-20"
                    initial={{
                        y: "110vh",
                        x: Math.random() * 100 + "vw",
                        scale: Math.random() * 0.5 + 0.5,
                        rotate: 0
                    }}
                    animate={{
                        y: "-10vh",
                        x: Math.random() * 100 + "vw",
                        rotate: Math.random() * 360
                    }}
                    transition={{
                        duration: Math.random() * 15 + 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 15
                    }}
                    style={{ fontSize: Math.random() * 40 + 20 + "px" }}
                >
                    ♥
                </motion.div>
            ))}
        </div>
    );
};

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 flex flex-col items-center justify-center relative overflow-hidden font-sans text-brand-dark transition-colors duration-500">
            <FloatingHearts />
            <div className="z-10 w-full max-w-md p-6 relative">
                {children}
            </div>
        </div>
    );
}
