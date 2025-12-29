import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h2><img src="/Vyaptek_logo.svg" alt="Vyaptek Logo" className="brand-logo-footer" /> Vyaptek</h2>
                        <p>
                            Empowering healthcare institutions with next-generation ERP solutions.
                            Simple, Secure, Smart.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="social-icon"><Facebook size={20} /></a>
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                            <a href="#" className="social-icon"><Linkedin size={20} /></a>
                            <a href="#" className="social-icon"><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h3>Product</h3>
                        <ul className="footer-links">
                            <li><a href="#modules">All Modules</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Case Studies</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Company</h3>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Contact Us</h3>
                        <ul className="footer-links">
                            <li>
                                <a href="mailto:info@vyaptek.com" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                    <Mail size={16} /> info@vyaptek.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919935608849" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                    <Phone size={16} /> +91 99356 08849
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                                    <MapPin size={16} style={{ marginTop: '4px' }} />
                                    J 166 World Bank Colony, Barra, Kanpur
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Vyaptek Healthcare Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
