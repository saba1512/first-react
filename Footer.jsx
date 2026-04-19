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
                            Passionate Front-end Developer focused on creating interactive and user-centric web experiences. Always striving to write clean, efficient, and scalable code.
                        </p>
                        <div className="social-icons">
                            <a target='blank' href="https://www.facebook.com/saba.xorguashvili.5" className="social-link"><ion-icon name="logo-facebook"></ion-icon></a>
                            <a target='blank' href="https://www.instagram.com/khorguashvilisaba/" className="social-link"><ion-icon name="logo-instagram"></ion-icon></a>
                            <a target='blank' href="#" className="social-link"><ion-icon name="logo-whatsapp"></ion-icon></a>
                            <a target='blank' href="https://www.tiktok.com/@saba.khorguashvili" className="social-link"><ion-icon name="logo-tiktok"></ion-icon></a>
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
                            <li>📍 khashuri, Georgia</li>
                            <li>📞 +995 598 306 007</li>
                            <li>✉️ khorguashvilisaba5@gmail.com</li>
                        </ul>
                    </div>

                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Saba khorguashvili. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}