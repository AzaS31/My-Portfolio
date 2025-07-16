import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './header.css';

function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projects', 'about', 'contact'];
      const offset = 100;

      const current = sections.find((id) => {
        const section = document.getElementById(id);
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= offset && rect.bottom >= offset;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleReady = () => {
      setTimeout(() => setIsReady(true), 100);
    };

    if (document.readyState === 'complete') {
      handleReady();
    } else {
      window.addEventListener('load', handleReady);
      return () => window.removeEventListener('load', handleReady);
    }
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={isReady ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <header className="header">
        <div className="logo">Azamat S.</div>

        <div className="burger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'active-link' : ''}
            onClick={closeMenu}
          >
            Projects
          </a>
          <a
            href="#about"
            className={activeSection === 'about' ? 'active-link' : ''}
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'active-link' : ''}
            onClick={closeMenu}
          >
            Contact
          </a>
        </nav>
      </header>
    </motion.div>
  );
}

export default Header;
