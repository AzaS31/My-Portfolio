import Header from '../components/Header';
import Projects from '../components/Projects';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Portfolio() {
  return (
    <div className="portfolio-wrapper" style={{ position: 'relative' }}>
      <Header />

      <Projects />
      <About />
      <Footer />
    </div>
  );
}
