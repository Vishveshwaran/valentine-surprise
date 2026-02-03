import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const memories = [
    {
        id: 1,
        text: "Remember when we first met?",
        subtext: "It felt like time stopped. ✨",
        color: "bg-pink-100"
    },
    {
        id: 2,
        text: "You make me the happiest person.",
        subtext: "Every single day.",
        color: "bg-red-100"
    },
    {
        id: 3,
        text: "I can't wait for our future.",
        subtext: "It's going to be amazing.",
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
        <div className="w-full max-w-sm mx-auto text-center">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">Our Journey</h2>

            <div className="relative h-64 w-full perspective-1000">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, rotateY: 90 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, rotateY: -90 }}
                        transition={{ duration: 0.5 }}
                        className={`absolute inset-0 rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 ${memories[currentIndex].color}`}
                    >
                        <p className="text-xl font-semibold mb-4 text-gray-800">
                            {memories[currentIndex].text}
                        </p>
                        <p className="text-gray-600 italic">
                            {memories[currentIndex].subtext}
                        </p>

                        <div className="absolute bottom-4 text-xs text-gray-400">
                            {currentIndex + 1} / {memories.length}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex justify-between mt-8 px-4">
                <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className={`p-3 rounded-full ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'bg-white shadow hover:bg-gray-50'}`}
                >
                    <ChevronLeft className="w-6 h-6 text-brand-dark" />
                </button>

                <button
                    onClick={nextSlide}
                    className="bg-brand-red text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
                >
                    {currentIndex === memories.length - 1 ? 'Next Chapter ❤️' : 'Next'}
                    {currentIndex !== memories.length - 1 && <ChevronRight className="w-4 h-4" />}
                </button>
            </div>
        </div>
    );
}
