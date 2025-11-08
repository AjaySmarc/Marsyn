import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/shop', label: 'Shop' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        {/* Floating Orbs Background */}
        <div className="floating-orbs">
          <div className="floating-orb"></div>
          <div className="floating-orb"></div>
          <div className="floating-orb"></div>
        </div>

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">M</div>
          <span className="logo-text">Marsyn</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`nav-link ${
                  location.pathname === link.path ? 'active' : ''
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>
      </nav>

      {/* Mobile Side Panel */}
      <div className={`mobile-side-panel ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`mobile-nav-link ${
                  location.pathname === link.path ? 'active' : ''
                }`}
                onClick={toggleMobileMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      <div
        className={`overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
      ></div>
    </>
  );
}

export default Navbar;
