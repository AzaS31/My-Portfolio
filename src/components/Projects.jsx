import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
    SiReact,
    SiExpress,
    SiMongodb,
    SiNodedotjs,
    SiHtml5,
    SiCss3,
    SiMysql,
} from 'react-icons/si';
import './projects.css';

const projects = [
    {
        title: 'TeamPicker App',
        description:
            'A dynamic web app for randomly selecting FIFA teams based on user-selected leagues and star ratings. Built with Express.js and React, featuring animated UI, league filtering, and responsive design. Deployed on a custom domain with full backend integration.',
        link: 'https://github.com/AzaS31/Teampicker_Express.js_React',
        link2: 'https://teampicker.me',
        image: '/images/teampicker.webp',
        tech: [
            <SiReact title="React" />,
            <SiNodedotjs title="Node.js" />,
            <SiExpress title="Express" />,
            <SiHtml5 title="HTML5" />,
            <SiCss3 title="CSS3" />,
        ],
    },
    {
        title: 'User Management',
        description:
            'A fullstack user management system with authentication (JWT), registration, and CRUD operations. Built using Express.js, MongoDB, and React. Features protected routes, role-based access control, modern UI, API documentation with Swagger, and full Docker containerization for both backend and frontend.',
        link: 'https://github.com/AzaS31/usersApp-express-mongodb-react',
        image: '/images/user-management.webp',
        tech: [
            <SiReact title="React" />,
            <SiNodedotjs title="Node.js" />,
            <SiExpress title="Express" />,
            <SiMongodb title="MongoDB" />,
            <span title="Docker">🐳</span>,
        ],
    },
    {
        title: 'Telegram Bot',
        description:
            'A Laravel-based backend project featuring user registration with both Email and Telegram notifications. Integrates Mailtrap for testing email delivery and Telegram Bot API for real-time registration alerts. Includes a test route for Telegram functionality.',
        link: 'https://github.com/AzaS31/Laravel-Telegram',
        image: '/images/telegram-bot.webp',
        tech: [
            <span title="Laravel">🅻</span>,
            <span title="PHP">🐘</span>,
            <SiMysql title="MySQL" />,
        ],
    },
];

function Projects() {
    const [xOffset, setXOffset] = useState(1000);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 1024) {
                setXOffset(300);
            } else {
                setXOffset(1000);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="projects-section" id="projects">
            <div className="projects-list">
                {projects.map((project, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <motion.div
                            key={index}
                            className="project-full"
                            initial={{ opacity: 0, x: isEven ? -200 : 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >

                            <div className="project-inner">
                                {isEven ? (
                                    <>
                                        <div className="project-text">
                                            <h3>{project.title}</h3>
                                            <p>{project.description}</p>
                                            <div className="tech-icons">
                                                {project.tech.map((icon, i) => (
                                                    <span key={i}>{icon}</span>
                                                ))}
                                            </div>
                                            <div className="project-links">
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Code
                                                </a>
                                                {project.link2 && (
                                                    <a
                                                        href={project.link2}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Demo
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <div className="project-image">
                                            <img src={project.image} alt={project.title} />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="project-image">
                                            <img src={project.image} alt={project.title} />
                                        </div>
                                        <div className="project-text">
                                            <h3>{project.title}</h3>
                                            <p>{project.description}</p>
                                            <div className="tech-icons">
                                                {project.tech.map((icon, i) => (
                                                    <span key={i}>{icon}</span>
                                                ))}
                                            </div>
                                            <div className="project-links">
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Code
                                                </a>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

export default Projects;
