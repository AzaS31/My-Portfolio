import { useEffect, useState } from 'react';
import './header.css';

function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Активация текущего раздела при скролле
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

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div>
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
    </div>
  );
}

export default Header;
