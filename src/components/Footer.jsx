// Footer.jsx
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section company-info">
          <h3 className="footer-logo">Marsyn</h3>
          <p className="footer-description">
            Powering modern businesses with friction-free, enterprise-grade AI
            solutions that deliver measurable growth.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">
              Twitter
            </a>
            <a href="#" className="social-link">
              LinkedIn
            </a>
            <a href="#" className="social-link">
              Facebook
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="Home">Home</a>
            </li>
            <li>
              <a href="About">About</a>
            </li>
            <li>
              <a href="Services">Services</a>
            </li>
            <li>
              <a href="Blogs">Blogs</a>
            </li>
            <li>
              <a href="Contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul className="footer-links">
            <li>
              <a href="#">AI Voice Agents</a>
            </li>
            <li>
              <a href="#">Lead Qualification</a>
            </li>
            <li>
              <a href="#">AI-Generated Media</a>
            </li>
            <li>
              <a href="#">AI Chatbots</a>
            </li>
            <li>
              <a href="#">Content Automation</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <p>📧 Marsyn.a1@gmail.com</p>
            <p>📞 +91-7702920845</p>
            <p>📍 Hyderabad, India</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© {new Date().getFullYear()} Marsyn. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
