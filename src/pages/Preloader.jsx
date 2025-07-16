import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './preloader.css'; 

const words = ['MODERN', 'FAST', 'DYNAMIC', 'CLEAN'];

export default function Preloader({ onFinish }) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 800);

    const timeout = setTimeout(() => {
      onFinish(); 
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onFinish]);

  return (
    <div className="preloader-container">
      <AnimatePresence mode="wait">
        <motion.h1
          key={wordIndex}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="preloader-word"
        >
          {words[wordIndex]}
        </motion.h1>
      </AnimatePresence>
      <p className="loading-text">LOADING...</p>
    </div>
  );
}
