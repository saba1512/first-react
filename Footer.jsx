import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    
                    <div className="footer-column about">
                        <img className="footer-logo" src="https://itstep.ge/static/images/logo.png" alt="logo" />
                        <p className="footer-desc">
                            We offer world-class IT education. Join our community and start shaping the future of technology today.
                        </p>
                        <div className="social-icons">
                            <a href="#" className="social-link">FB</a>
                            <a href="#" className="social-link">IG</a>
                            <a href="#" className="social-link">LN</a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#courses">Courses</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Contact Info</h3>
                        <ul className="contact-info">
                            <li>📍 Tbilisi, Georgia</li>
                            <li>📞 +995 322 000 000</li>
                            <li>✉️ info@itstep.ge</li>
                        </ul>
                    </div>

                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} IT STEP Academy. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}