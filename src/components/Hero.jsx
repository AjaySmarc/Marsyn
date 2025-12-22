import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import './Navbar.jsx';
import { useNavigate } from 'react-router-dom';
import BookDemo from '../pages/BookDemo';
import { Helmet } from 'react-helmet-async';

const Hero = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const [showDemo, setShowDemo] = useState(false);
  // const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Counter animation
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach((counter) => {
      const target = +counter.getAttribute('data-target');
      const increment = target / 100;
      let current = 0;

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.innerText = Math.ceil(current);
          setTimeout(updateCounter, 20);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // const tabs = [
  //   { id: 'home', label: 'Home', icon: '🏠' },
  //   { id: 'services', label: 'Services', icon: '⚡' },
  //   { id: 'blogs', label: 'Blogs', icon: '📝' },
  //   { id: 'shop', label: 'Shop', icon: '🛒' },
  //   { id: 'about', label: 'About', icon: '👥' },
  //   { id: 'contact', label: 'Contact', icon: '📞' },
  // ];

  const services = [
    {
      title: 'Web Development',
      desc: 'Custom solutions for your business',
      icon: '💻',
    },
    {
      title: 'UI/UX Design',
      desc: 'Beautiful, intuitive interfaces',
      icon: '🎨',
    },
    {
      title: 'Digital Marketing',
      desc: 'Grow your online presence',
      icon: '📈',
    },
    { title: 'Consulting', desc: 'Strategic technology advice', icon: '🤝' },
  ];

  const featuredBlogs = [
    { title: 'Future of Web Development', readTime: '5 min', tag: 'Tech' },
    { title: 'AI in Modern Business', readTime: '7 min', tag: 'AI' },
    { title: 'Design Trends 2024', readTime: '4 min', tag: 'Design' },
  ];

  return (
    <div className="hero-container" ref={heroRef}>
      <Helmet>
        <title>Marsyn</title>
        <meta
          name="description"
          content="Boost your business with Marsyn Digital - Expert web development, design, and marketing services tailored for your success."
        />
      </Helmet>
      {/* Animated Background */}
      <div className="professional-background">
        <div className="grid-pattern"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="gradient-overlay"></div>
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <div className="welcome-section">
          <div className="badge">
            <span className="badge-dot"></span>
            Welcome to Marsyn Digital
          </div>

          <h1 className="main-heading">
            Transform Your Digital
            <span className="highlighted-text"> Presence</span>
          </h1>

          <p className="subheading">
            We craft exceptional digital experiences that drive growth, enhance
            engagement, and deliver measurable results for your business.
          </p>

          <div className="cta-group">
            <button className="primary-btn">
              <span className="btn-icon">🚀</span>
              Start Project
            </button>
            <button className="secondary-btn">
              <span className="btn-icon">▶</span>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="quick-access-grid">
          <div className="access-card">
            <div className="card-icon">⚡</div>
            <h3>Services</h3>
            <p>Explore our comprehensive digital solutions</p>
            <button className="card-cta" onClick={() => navigate('/services')}>
              View Services →
            </button>
          </div>

          <div className="access-card">
            <div className="card-icon">📝</div>
            <h3>Blogs</h3>
            <p>Latest insights & industry trends</p>
            <button className="card-cta" onClick={() => navigate('/blogs')}>
              Read Articles →
            </button>
          </div>

          <div className="access-card">
            <div className="card-icon">🛒</div>
            <h3>Shop</h3>
            <p>Digital products & templates</p>
            <button className="card-cta" onClick={() => navigate('/shop')}>
              Browse Shop →
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-card">
            <div className="stat-value" data-target="250">
              23
            </div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat-card">
            <div className="stat-value" data-target="98">
              90
            </div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-card">
            <div className="stat-value" data-target="50">
              24
            </div>
            <div className="stat-label">Team Experts</div>
          </div>
          <div className="stat-card">
            <div className="stat-value" data-target="5">
              1
            </div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>

        {/* Featured Services Preview */}
        <div className="services-preview">
          <h2 className="section-title">Our Core Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card"
                style={{
                  transform: `translate(${(mousePosition.x - 50) * 0.05}px, ${
                    (mousePosition.y - 50) * 0.05
                  }px)`,
                }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <button className="service-link">Learn More →</button>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Blogs Preview */}
        <div className="blogs-preview">
          <div className="section-header">
            <h2 className="section-title">Latest from Our Blog</h2>
            <button className="view-all">View All →</button>
          </div>
          <div className="blogs-grid">
            {featuredBlogs.map((blog, index) => (
              <div key={index} className="blog-card">
                <div className="blog-tag">{blog.tag}</div>
                <h3>{blog.title}</h3>
                <div className="blog-meta">
                  <span className="read-time">{blog.readTime} read</span>
                  <span className="read-link">Read Article →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="final-cta">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Let's create something amazing together. Schedule a free
            consultation today.
          </p>
          <div className="action-buttons">
            <button
              className="contact-btn"
              onClick={() => navigate('/contact')}
            >
              <span className="btn-icon">📞</span>
              Contact Us
            </button>
            <div>
              <button className="demo-btn" onClick={() => setShowDemo(true)}>
                <span className="btn-icon">🎬</span>
                Book Demo
              </button>

              {/* {showDemo && <BookDemo onClose={() => setShowDemo(false)} />}
               */}
              {showDemo && (
                <BookDemo
                  isOpen={showDemo}
                  onClose={() => setShowDemo(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
