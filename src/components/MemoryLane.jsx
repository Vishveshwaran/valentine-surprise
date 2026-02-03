import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const memories = [
    {
        id: 1,
        text: "Remember when we first met?",
        subtext: "It felt like time stopped. ✨",
        img: "https://media.tenor.com/M6LgV7x8-hAAAAAi/cute-bear.gif", // PLACEHOLDER: Replace with "/memories/photo1.jpg"
        color: "bg-pink-100"
    },
    {
        id: 2,
        text: "You make me the happiest person.",
        subtext: "Every single day.",
        img: "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif", // PLACEHOLDER: Replace with "/memories/photo2.jpg"
        color: "bg-red-100"
    },
    {
        id: 3,
        text: "I can't wait for our future.",
        subtext: "It's going to be amazing.",
        img: "https://media.tenor.com/N2wJ2y6sC3sAAAAi/brown-bear-cute.gif", // PLACEHOLDER: Replace with "/memories/photo3.jpg"
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
        <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center">Our Journey Together</h2>

            <div className="relative w-full max-w-sm aspect-[3/4]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className={`absolute inset-0 rounded-3xl shadow-2xl flex flex-col overflow-hidden ${memories[currentIndex].color}`}
                    >
                        {/* Image Area */}
                        <div className="h-3/5 w-full bg-white overflow-hidden relative">
                            <img
                                src={memories[currentIndex].img}
                                alt="Memory"
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.src = "https://placehold.co/400x500?text=Your+Photo+Here" }}
                            />
                        </div>

                        {/* Content Area */}
                        <div className="h-2/5 p-6 flex flex-col justify-center text-center">
                            <p className="text-xl font-bold text-gray-800 mb-2">
                                {memories[currentIndex].text}
                            </p>
                            <p className="text-gray-600 italic">
                                {memories[currentIndex].subtext}
                            </p>
                        </div>

                        <div className="absolute top-4 right-4 bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-600">
                            {currentIndex + 1} / {memories.length}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex justify-between items-center w-full max-w-sm mt-8 px-4">
                <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className={`p-4 rounded-full transition-all ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'bg-white shadow-md hover:scale-110 active:scale-95'}`}
                >
                    <ChevronLeft className="w-6 h-6 text-brand-dark" />
                </button>

                <button
                    onClick={nextSlide}
                    className="bg-brand-red text-white py-3 px-8 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                    {currentIndex === memories.length - 1 ? 'Finish ❤️' : 'Next'}
                    {currentIndex !== memories.length - 1 && <ChevronRight className="w-4 h-4" />}
                </button>
            </div>
        </div>
    );
}
