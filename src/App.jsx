import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import MemoryLane from './components/MemoryLane';
import CandleBlow from './components/CandleBlow';
import EmergencyKit from './pages/EmergencyKit';

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-dreamy-100">
      {!showContent && <CandleBlow onComplete={() => setShowContent(true)} />}

      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Hero />
            <MemoryLane />

            <section className="py-20 text-center">
              <Link
                to="/emergency-kit"
                className="inline-block bg-white text-dreamy-600 px-8 py-4 rounded-full text-xl font-bold font-surreal shadow-lg hover:shadow-xl hover:scale-105 transition-all border-2 border-dreamy-200"
              >
                Open Your Emergency Kit 🍬
              </Link>
            </section>

            <footer className="py-8 text-center text-dreamy-600 font-handwriting text-xl bg-dreamy-100/50">
              Made with love for you ♥
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emergency-kit" element={<EmergencyKit />} />
      </Routes>
    </Router>
  );
}

export default App;
