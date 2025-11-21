// Footer.jsx
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-section company-info">
          <h3 className="footer-logo">Marsyn</h3>
          <p className="footer-description">
            Powering modern businesses with friction-free, enterprise-grade AI
            solutions that deliver measurable growth.
          </p>

          <div className="social-links">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>Services</h4>
          <ul className="footer-links">
            <li>
              <Link to="/services#voice-agents">AI Voice Agents</Link>
            </li>
            <li>
              <Link to="/services#lead-qualification">Lead Qualification</Link>
            </li>
            <li>
              <Link to="/services#media">AI-Generated Media</Link>
            </li>
            <li>
              <Link to="/services#chatbots">AI Chatbots</Link>
            </li>
            <li>
              <Link to="/services#content">Content Automation</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <p>📧 Marsyn.a1@gmail.com</p>
            <p>📞 +91-7702920845</p>
            <p>📍 Hyderabad, India</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© {new Date().getFullYear()} Marsyn. All rights reserved.</p>

          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
