import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb,
  SiDocker, SiJavascript, SiHtml5, SiCss3, SiMysql
} from 'react-icons/si';
import './about.css';

function About() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-card"
        initial={{ opacity: 0, x: 1000 }}
        animate={isImageLoaded ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="about-inner">
          <div className="about-image">
            <img
              src="/images/man.webp"
              alt="About Me"
              onLoad={() => setIsImageLoaded(true)}
              style={{
                opacity: isImageLoaded ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }}
            />
          </div>

          <div className="about-content">
            <h2>About Me</h2>
            <p>
              I'm a fullstack web developer who builds modern, responsive, and production-ready applications.
              My stack includes <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, <strong>PostgreSQL</strong>/<strong>MongoDB</strong>, and <strong>Docker</strong>.
            </p>
            <p>
              I focus on clean and functional user experiences, whether it's admin panels, landing pages, or complex dashboards.
            </p>
            <div className="tech-icons">
              <SiJavascript title="JavaScript" />
              <SiHtml5 title="HTML5" />
              <SiCss3 title="CSS3" />
              <SiReact title="React" />
              <SiNodedotjs title="Node.js" />
              <SiExpress title="Express" />
              <SiPostgresql title="PostgreSQL" />
              <SiMysql title="MySQL" />
              <SiMongodb title="MongoDB" />
              <SiDocker title="Docker" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
