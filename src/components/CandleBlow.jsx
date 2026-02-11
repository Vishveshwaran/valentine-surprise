import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CandleBlow = ({ onComplete }) => {
    const [isBlown, setIsBlown] = useState(false);
    const [audioPermission, setAudioPermission] = useState(false);
    const audioContextRef = useRef(null);
    const analyserRef = useRef(null);
    const dataArrayRef = useRef(null);
    const sourceRef = useRef(null);

    useEffect(() => {
        // Attempt to get microphone access for "blowing" detection
        const initAudio = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                setAudioPermission(true);

                audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
                analyserRef.current = audioContextRef.current.createAnalyser();
                sourceRef.current = audioContextRef.current.createMediaStreamSource(stream);
                sourceRef.current.connect(analyserRef.current);

                analyserRef.current.fftSize = 256;
                const bufferLength = analyserRef.current.frequencyBinCount;
                dataArrayRef.current = new Uint8Array(bufferLength);

                checkBlow();
            } catch (err) {
                console.log("Audio permission denied or error:", err);
            }
        };

        initAudio();

        return () => {
            if (audioContextRef.current) audioContextRef.current.close();
        };
    }, []);

    const checkBlow = () => {
        if (!analyserRef.current || isBlown) return;

        requestAnimationFrame(checkBlow);
        analyserRef.current.getByteFrequencyData(dataArrayRef.current);

        // Simple logic: check if average volume exceeds a threshold
        const average = dataArrayRef.current.reduce((a, b) => a + b) / dataArrayRef.current.length;

        if (average > 50) { // Threshold for "blowing"
            handleBlow();
        }
    };

    const handleBlow = () => {
        setIsBlown(true);
        setTimeout(onComplete, 2000); // Wait for smoke animation before completing
    };

    return (
        <AnimatePresence>
            {!isBlown && (
                <motion.div
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                    className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center cursor-pointer"
                    onClick={handleBlow}
                >
                    <div className="relative">
                        {/* Candle Stick */}
                        <div className="w-8 h-40 bg-gradient-to-b from-dreamy-100 to-dreamy-200 rounded-lg relative mx-auto" />

                        {/* Flame */}
                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                            <div className="relative">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        rotate: [-2, 2, -2]
                                    }}
                                    transition={{ duration: 0.5, repeat: Infinity }}
                                    className="w-8 h-12 bg-orange-400 rounded-full blur-[2px] opacity-90"
                                />
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{ duration: 0.3, repeat: Infinity }}
                                    className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-8 bg-yellow-300 rounded-full blur-[1px]"
                                />
                            </div>
                        </div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-12 text-white font-handwriting text-2xl text-center px-4"
                    >
                        {audioPermission ? "Make a wish and blow into the mic..." : "Make a wish and tap the candle..."}
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CandleBlow;
