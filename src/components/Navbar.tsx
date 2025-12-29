import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  onOpenEnquiry: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRequestDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onOpenEnquiry();
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <img src="./Vyaptek_logo.svg" alt="Vyaptek Logo" className="brand-logo" />
          <span>Vyaptek</span>
        </a>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <li><a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#modules" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Modules</a></li>
          <li><a href="#features" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Features</a></li>
          <li><a href="#contact" className="btn btn-secondary" onClick={handleRequestDemo}>Request Demo</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
