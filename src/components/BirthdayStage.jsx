import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const Candle = ({ active, onClick }) => {
    return (
        <div className="relative flex flex-col items-center mx-2 cursor-pointer" onClick={onClick}>
            {/* Flame */}
            <motion.div
                animate={{
                    scale: active ? [1, 1.1, 1] : 0,
                    opacity: active ? 1 : 0,
                }}
                transition={{
                    duration: 0.5,
                    repeat: active ? Infinity : 0,
                    ease: "easeInOut"
                }}
                className="w-4 h-6 bg-yellow-400 rounded-full drop-shadow-[0_0_10px_rgba(255,200,0,0.8)] mb-1"
            />
            {/* Stick */}
            <div className="w-3 h-12 bg-blue-300 rounded-sm border-b-2 border-blue-400" />
        </div>
    );
};

export default function BirthdayStage({ onComplete }) {
    const [candles, setCandles] = useState([true, true, true]); // 3 candles
    const [celebrating, setCelebrating] = useState(false);

    const blowCandle = (index) => {
        if (!candles[index]) return;
        const newCandles = [...candles];
        newCandles[index] = false;
        setCandles(newCandles);
    };

    useEffect(() => {
        const allOut = candles.every(c => !c);
        if (allOut && !celebrating) {
            setCelebrating(true);
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    }, [candles]);

    return (
        <div className="text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-brand-dark mb-8"
            >
                {celebrating ? "Happy Birthday My Love! 🎉" : "Make a Wish..."}
            </motion.h2>

            <div className="relative bg-white p-8 rounded-2xl shadow-xl inline-block">
                {/* Cake Base */}
                <div className="relative">
                    {/* Candles Row */}
                    <div className="flex justify-center -mt-16 mb-2">
                        {candles.map((isActive, i) => (
                            <Candle key={i} active={isActive} onClick={() => blowCandle(i)} />
                        ))}
                    </div>

                    {/* Cake Layers */}
                    <div className="w-64 h-24 bg-pink-300 rounded-t-lg relative border-b-4 border-pink-400">
                        <div className="absolute inset-x-0 top-0 h-4 bg-white/50 rounded-[50%]" /> {/* Frosting details */}
                    </div>
                    <div className="w-64 h-20 bg-pink-200 rounded-b-lg relative shadow-lg flex items-center justify-center">
                        <span className="text-pink-500 font-cursive text-xl">Happy B'day</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 min-h-[60px]">
                {!celebrating ? (
                    <p className="text-gray-500 animate-pulse">Tap the candles to blow them out!</p>
                ) : (
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        onClick={onComplete}
                        className="bg-brand-red text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-brand-pink transition-colors"
                    >
                        Continue the Journey ➡️
                    </motion.button>
                )}
            </div>
        </div>
    );
}
