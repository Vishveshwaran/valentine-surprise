import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const photos = [
    "WhatsApp Image 2026-02-11 at 6.44.52 PM.jpeg",

    "WhatsApp Image 2026-02-11 at 6.47.10 PM (1).jpeg",
    "WhatsApp Image 2026-02-11 at 6.47.10 PM.jpeg",
    "WhatsApp Image 2026-02-11 at 6.47.11 PM (1).jpeg",
    "WhatsApp Image 2026-02-11 at 6.47.11 PM.jpeg",
    "WhatsApp Image 2026-02-11 at 6.47.12 PM (1).jpeg",
    "WhatsApp Image 2026-02-11 at 6.47.12 PM (2).jpeg",
    "WhatsApp Image 2026-02-11 at 6.47.12 PM.jpeg",
    "WhatsApp Image 2026-02-11 at 6.47.15 PM.jpeg",
    "WhatsApp Image 2026-02-11 at 6.47.16 PM (1).jpeg",
    "WhatsApp Image 2026-02-11 at 6.47.16 PM.jpeg",
    "WhatsApp Image 2026-02-11 at 6.47.17 PM (1).jpeg",
    "WhatsApp Image 2026-02-11 at 6.47.17 PM.jpeg",
    "WhatsApp Image 2026-02-11 at 6.47.18 PM (1).jpeg",
    "WhatsApp Image 2026-02-11 at 6.47.18 PM (2).jpeg",
    "WhatsApp Image 2026-02-11 at 6.47.18 PM.jpeg",
    "WhatsApp Image 2026-02-11 at 6.47.19 PM (1).jpeg",
    "WhatsApp Image 2026-02-11 at 6.47.19 PM (2).jpeg",
    "WhatsApp Image 2026-02-11 at 6.47.19 PM.jpeg",
    "WhatsApp Image 2026-02-11 at 6.47.20 PM (1).jpeg",
    "WhatsApp Image 2026-02-11 at 6.47.20 PM (2).jpeg",
    "WhatsApp Image 2026-02-11 at 6.47.20 PM.jpeg",
    "WhatsApp Image 2026-02-11 at 6.47.21 PM.jpeg",
    "WhatsApp Image 2026-02-11 at 7.37.03 PM (1).jpeg",
    "WhatsApp Image 2026-02-11 at 7.37.03 PM.jpeg",
    "WhatsApp Image 2026-02-11 at 7.37.04 PM.jpeg"
];

const MemoryLane = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={containerRef} className="py-20 bg-dreamy-100 min-h-screen relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 relative">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-handwriting text-center text-dreamy-600 mb-20 relative z-10"
                >
                    Our Journey Together
                </motion.h2>

                {/* Central Line */}
                <div className="absolute left-1/2 top-40 bottom-20 w-1 bg-gradient-to-b from-dreamy-300 via-dreamy-400 to-dreamy-300 transform -translate-x-1/2 rounded-full hidden md:block" />

                <div className="space-y-24 relative z-10">
                    {photos.map((photo, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <motion.div
                                key={photo}
                                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center gap-8`}
                            >
                                {/* Photo Card */}
                                <div className="w-full md:w-5/12">
                                    <div className="bg-white p-4 rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-300 rotate-2 hover:rotate-0">
                                        <img
                                            src={`${import.meta.env.BASE_URL}memories/${encodeURIComponent(photo)}`}
                                            alt="Memory"
                                            className="w-full h-auto rounded-2xl object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                {/* Connector Dot (Desktop only) */}
                                <div className="hidden md:flex w-2/12 justify-center">
                                    <div className="w-8 h-8 bg-dreamy-400 rounded-full border-4 border-white shadow-lg z-10 animate-pulse" />
                                </div>

                                {/* Decorative Text/Space */}
                                <div className="w-full md:w-5/12 text-center md:text-left">
                                    <p className="font-handwriting text-2xl text-dreamy-500 transform rotate-1">
                                        {index % 3 === 0 ? "So beautiful..." : index % 3 === 1 ? "Unforgettable..." : "Pure magic ✨"}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MemoryLane;
