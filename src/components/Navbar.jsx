import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClick = (path) => {
    navigate(path);
    setIsDropdownOpen(false);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Main navigation items (prominent)
  const mainNavLinks = [
    { path: '/', label: 'Home' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/shop', label: 'Shop' },
    // { path: '/services', label: 'Services' },
  ];

  // Dropdown items (secondary)
  const dropdownItems = [
    { path: '/SocialMedia', label: 'Online Presence', icon: '🌐' },
    { path: '/about', label: 'About Me', icon: '👨‍💻' },
    { path: '/contact', label: 'Contact', icon: '📧' },
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
          {/* Main Links */}
          {mainNavLinks.map((link) => (
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

          {/* Dropdown Container */}
          <li className="nav-dropdown-container" ref={dropdownRef}>
            <button
              className={`nav-link dropdown-toggle ${
                isDropdownOpen ? 'open' : ''
              } ${
                dropdownItems.some((item) => location.pathname === item.path)
                  ? 'active'
                  : ''
              }`}
              onClick={toggleDropdown}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              More
              <span className="dropdown-arrow">⌵</span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="dropdown-menu">
                {dropdownItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`dropdown-item ${
                      location.pathname === item.path ? 'active' : ''
                    }`}
                    onClick={() => handleDropdownClick(item.path)}
                  >
                    <span className="dropdown-icon">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
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
        {/* Mobile Navigation */}
        <ul className="mobile-nav-links">
          {/* Main Mobile Links */}
          {mainNavLinks.map((link) => (
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

          {/* Separator for dropdown items in mobile */}
          <li className="mobile-divider">
            <span>More Options</span>
          </li>

          {/* Dropdown Items in Mobile */}
          {dropdownItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`mobile-nav-link secondary ${
                  location.pathname === item.path ? 'active' : ''
                }`}
                onClick={toggleMobileMenu}
              >
                <span className="mobile-nav-icon">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Footer */}
        <div className="mobile-footer">
          <p className="mobile-tagline">
            Digital Solutions • Professional Services
          </p>
          <div className="mobile-social-links">
            <span className="social-dot"></span>
            <span className="social-dot"></span>
            <span className="social-dot"></span>
          </div>
        </div>
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
