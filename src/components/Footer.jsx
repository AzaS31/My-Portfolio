import './Footer.css';
import { SiGithub, SiTelegram, SiGmail } from 'react-icons/si';

function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="footer-content">
                <h2>Let's Work Together</h2>
                <p>If you have a project in mind or just want to connect, feel free to reach out!</p>

                <div className="footer-info">
                    <p><strong>Email:</strong> azamatsalaly@gmail.com</p>
                    <p>
                        <strong>GitHub:</strong>{' '}
                        <a href="https://github.com/AzaS31" target="_blank" rel="noopener noreferrer">
                            github.com/AzaS31
                        </a>
                    </p>
                    <p><strong>Location:</strong> Kazakhstan, Astana</p>
                </div>

                <div className="footer-icons">
                    <a
                        href="mailto:azamatsalaly@gmail.com"
                        title="Email"
                        aria-label="Email"
                    >
                        <SiGmail />
                    </a>
                    <a
                        href="https://t.me/SalalyAzamat"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Telegram"
                        aria-label="Telegram"
                    >
                        <SiTelegram />
                    </a>
                    <a
                        href="https://github.com/AzaS31"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                        aria-label="GitHub"
                    >
                        <SiGithub />
                    </a>
                </div>
                <p className="footer-copy">© 2025 Azamat S. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
