import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import BirthdayStage from './components/BirthdayStage';
import MemoryLane from './components/MemoryLane';
import ValentineQuestion from './components/ValentineQuestion';
import Success from './components/Success';

function App() {
  const [stage, setStage] = useState('welcome'); // welcome, birthday, memories, valentine, success

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {stage === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="text-center space-y-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-brand-red drop-shadow-sm">
              Hey My Love! ❤️
            </h1>
            <p className="text-lg text-gray-700">
              I have a little surprise for you...
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStage('birthday')}
              className="bg-brand-red text-white px-8 py-4 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all"
            >
              Open Surprise ✨
            </motion.button>
          </motion.div>
        )}

        {stage === 'birthday' && (
          <motion.div
            key="birthday"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="w-full"
          >
            <BirthdayStage onComplete={() => setStage('memories')} />
          </motion.div>
        )}

        {stage === 'memories' && (
          <motion.div
            key="memories"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="w-full"
          >
            <MemoryLane onComplete={() => setStage('valentine')} />
          </motion.div>
        )}

        {stage === 'valentine' && (
          <motion.div
            key="valentine"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="w-full h-full"
          >
            <ValentineQuestion onYes={() => setStage('success')} />
          </motion.div>
        )}

        {stage === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full"
          >
            <Success />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}

export default App;
