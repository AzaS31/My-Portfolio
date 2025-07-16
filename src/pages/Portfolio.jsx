import { motion } from 'framer-motion';
import Header from '../components/Header';
import Projects from '../components/Projects';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Portfolio() {
  return (
    <div className="portfolio-wrapper" style={{ position: 'relative' }}>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10 }}
      >
        <Header />
      </motion.div>

      <Projects />
      <About />
      <Footer />
    </div>
  );
}
