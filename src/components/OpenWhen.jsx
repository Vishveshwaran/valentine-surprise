import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Heart, PartyPopper, Frown, MessageCircleHeart, ShieldAlert } from 'lucide-react';

const cards = [
    {
        id: 'sad',
        title: 'Open When You Feel Sad',
        icon: <Frown className="w-8 h-8" />,
        color: 'bg-blue-100',
        content: "My love, please don't be sad. Every storm runs out of rain. I am always here for you, holding your hand even when we are apart. Smile, because your smile is my sunshine."
    },
    {
        id: 'miss',
        title: 'Open When You Miss Me',
        icon: <Heart className="w-8 h-8" />,
        color: 'bg-pink-100',
        content: "Close your eyes and feel your heartbeat. That's me knocking from the inside. We might be miles apart, but we are connected by a bond that distance can never break. I miss you too, more than words can say."
    },
    {
        id: 'doubt',
        title: 'Open When You Doubt Yourself',
        icon: <ShieldAlert className="w-8 h-8" />,
        color: 'bg-yellow-100',
        content: "You are stronger than you know, braver than you believe, and smarter than you think. You have conquered so much already. Avoid the noise, trust your gut. You are capable of amazing things."
    },
    {
        id: 'proud',
        title: 'Open When You Feel Proud',
        icon: <PartyPopper className="w-8 h-8" />,
        color: 'bg-purple-100',
        content: "YAYYY! I knew you could do it! I am so incredibly proud of you. Take a moment to soak it all in. You earned this success. Keep shining, my star!"
    },
    {
        id: 'angry',
        title: 'Open When You Are Angry At Me',
        icon: <MessageCircleHeart className="w-8 h-8" />,
        color: 'bg-red-100',
        content: "I'm sorry if I messed up. I never want to hurt you. Let's take a deep breath. I love you more than any silly argument. Please forgive me? THAKKU needs a hug."
    },
    {
        id: 'birthday',
        title: 'Open On Your Next Birthday',
        icon: <PartyPopper className="w-8 h-8" />,
        color: 'bg-green-100',
        content: "Another year around the sun! I hope this past year has been full of joy. I can't wait to celebrate this one and many more with you. Happy Birthday again, my love!"
    }
];

const OpenWhen = () => {
    const [activeCard, setActiveCard] = useState(null);
    const [password, setPassword] = useState('');
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [error, setError] = useState(false);

    const handleCardClick = (card) => {
        setActiveCard(card);
        setIsUnlocked(false);
        setPassword('');
        setError(false);
    };

    const handleUnlock = (e) => {
        e.preventDefault();
        if (password.toUpperCase() === 'THAKKU') {
            setIsUnlocked(true);
        } else {
            setError(true);
            setTimeout(() => setError(false), 500);
        }
    };

    return (
        <section className="py-20 px-4 min-h-screen bg-white relative">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-handwriting text-center text-dreamy-600 mb-16">Open When...</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card) => (
                        <motion.div
                            key={card.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleCardClick(card)}
                            className={`cursor-pointer rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-dreamy-300 transition-all ${card.color} flex flex-col items-center justify-center gap-4 h-64 relative overflow-hidden group`}
                        >
                            <div className="text-dreamy-600 group-hover:scale-110 transition-transform duration-300">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-surreal font-semibold text-slate-700 text-center">{card.title}</h3>
                            <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Lock className="w-8 h-8 text-slate-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {activeCard && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden"
                        >
                            <button
                                onClick={() => setActiveCard(null)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
                            >
                                ✕
                            </button>

                            {!isUnlocked ? (
                                <div className="text-center space-y-6">
                                    <div className="w-16 h-16 bg-dreamy-100 rounded-full flex items-center justify-center mx-auto text-dreamy-500">
                                        <Lock className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-800">Locked</h3>
                                    <p className="text-slate-500">Enter the secret password to open this card.</p>

                                    <form onSubmit={handleUnlock} className="space-y-4">
                                        <input
                                            type="text"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter password..."
                                            className={`w-full px-4 py-3 rounded-xl border-2 outline-none focus:border-dreamy-400 transition-colors ${error ? 'border-red-400 bg-red-50' : 'border-slate-200'}`}
                                            autoFocus
                                        />
                                        <button
                                            type="submit"
                                            className="w-full bg-dreamy-500 hover:bg-dreamy-600 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-dreamy-200"
                                        >
                                            Unlock
                                        </button>
                                        {error && <p className="text-red-500 text-sm">Incorrect password!</p>}
                                    </form>
                                </div>
                            ) : (
                                <div className="text-center space-y-6">
                                    <div className={`w-16 h-16 ${activeCard.color} rounded-full flex items-center justify-center mx-auto text-dreamy-600`}>
                                        {activeCard.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-800">{activeCard.title}</h3>
                                    <div className="bg-slate-50 p-6 rounded-2xl text-left border border-slate-100">
                                        <p className="text-lg text-slate-700 leading-relaxed font-handwriting">{activeCard.content}</p>
                                    </div>
                                    <button
                                        onClick={() => setActiveCard(null)}
                                        className="text-dreamy-500 hover:text-dreamy-700 font-semibold"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default OpenWhen;
