import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const memories = [
    {
        id: 1,
        text: "Remember when we first met?",
        subtext: "It felt like time stopped. ✨",
        img: "https://media.tenor.com/M6LgV7x8-hAAAAAi/cute-bear.gif", // PLACEHOLDER
        color: "bg-pink-100"
    },
    {
        id: 2,
        text: "You make me the happiest person.",
        subtext: "Every single day.",
        img: "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif", // PLACEHOLDER
        color: "bg-red-100"
    },
    {
        id: 3,
        text: "I can't wait for our future.",
        subtext: "It's going to be amazing.",
        img: "https://media.tenor.com/N2wJ2y6sC3sAAAAi/brown-bear-cute.gif", // PLACEHOLDER
        color: "bg-purple-100"
    }
];

export default function MemoryLane({ onComplete }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex === memories.length - 1) {
            onComplete();
        } else {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 w-full h-full">
            <h2 className="text-2xl font-bold text-brand-dark mb-6 text-center">Our Journey Together</h2>

            {/* Container aspect ratio tweaked for mobile screens */}
            <div className="relative w-full max-w-xs aspect-[3/4] md:max-w-sm">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute inset-0 rounded-3xl shadow-2xl flex flex-col overflow-hidden ${memories[currentIndex].color}`}
                    >
                        {/* Image Area - 60% height */}
                        <div className="h-[60%] w-full bg-white overflow-hidden relative">
                            <img
                                src={memories[currentIndex].img}
                                alt="Memory"
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.src = "https://placehold.co/400x500?text=Your+Photo+Here" }}
                            />
                        </div>

                        {/* Content Area - 40% height */}
                        <div className="h-[40%] p-4 flex flex-col justify-center text-center">
                            <p className="text-lg md:text-xl font-bold text-gray-800 mb-2 leading-tight">
                                {memories[currentIndex].text}
                            </p>
                            <p className="text-sm md:text-base text-gray-600 italic">
                                {memories[currentIndex].subtext}
                            </p>
                        </div>

                        <div className="absolute top-3 right-3 bg-white/50 backdrop-blur-sm px-2 py-1 rounded-full text-[10px] md:text-xs font-bold text-gray-600">
                            {currentIndex + 1} / {memories.length}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex justify-between items-center w-full max-w-xs mt-6 px-2">
                <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className={`p-3 rounded-full transition-all ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'bg-white shadow-md active:scale-95'}`}
                >
                    <ChevronLeft className="w-6 h-6 text-brand-dark" />
                </button>

                <button
                    onClick={nextSlide}
                    className="bg-brand-red text-white py-3 px-6 rounded-full font-bold shadow-xl active:scale-95 transition-all flex items-center gap-2 text-sm md:text-base"
                >
                    {currentIndex === memories.length - 1 ? 'Finish ❤️' : 'Next'}
                    {currentIndex !== memories.length - 1 && <ChevronRight className="w-4 h-4" />}
                </button>
            </div>
        </div>
    );
}
