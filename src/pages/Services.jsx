import { useState } from 'react';
import './Services.css';

function Services() {
  const [activeService, setActiveService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [notification, setNotification] = useState('');

  const services = [
    {
      id: 1,
      icon: '🚀',
      title: 'Web Development',
      description:
        'Custom web applications built with modern technologies like React, Node.js, and cloud infrastructure.',
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Fast Performance',
        'Scalable Architecture',
      ],
      price: 'Starting at $2,999',
      duration: '4-6 weeks',
      popular: true,
    },
    {
      id: 2,
      icon: '📱',
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android with seamless user experience.',
      features: [
        'iOS & Android',
        'Cross-Platform',
        'App Store Deployment',
        'Push Notifications',
      ],
      price: 'Starting at $4,999',
      duration: '6-8 weeks',
    },
    {
      id: 3,
      icon: '🛠️',
      title: 'UI/UX Design',
      description:
        'Beautiful and intuitive user interfaces that enhance user engagement and conversion rates.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Design Systems',
      ],
      price: 'Starting at $1,999',
      duration: '2-4 weeks',
    },
    {
      id: 4,
      icon: '☁️',
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and deployment solutions using AWS, Azure, and Google Cloud.',
      features: [
        'Cloud Migration',
        'Serverless Architecture',
        'DevOps Setup',
        '24/7 Monitoring',
      ],
      price: 'Starting at $3,499',
      duration: '3-5 weeks',
    },
    {
      id: 5,
      icon: '🔍',
      title: 'Digital Marketing',
      description:
        'Comprehensive digital marketing strategies to boost your online presence and drive growth.',
      features: [
        'SEO Optimization',
        'Social Media Marketing',
        'Content Strategy',
        'Analytics',
      ],
      price: 'Starting at $1,499/mo',
      duration: 'Ongoing',
    },
    {
      id: 6,
      icon: '⚡',
      title: 'Consulting',
      description:
        'Expert technology consulting to help you make informed decisions and optimize your digital strategy.',
      features: [
        'Technical Audit',
        'Strategy Planning',
        'Team Training',
        'Ongoing Support',
      ],
      price: '$150/hour',
      duration: 'Flexible',
    },
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ];

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 4000);
  };

  const handleInquiry = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    showNotification(
      `📧 Inquiry sent for ${service.title}! We'll contact you soon.`
    );
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Contact Form Data:', data);

    // Simulate form submission
    setTimeout(() => {
      setIsModalOpen(false);
      showNotification(
        "🎉 Thank you! We've received your inquiry and will contact you within 24 hours."
      );
      e.target.reset();
    }, 1500);
  };

  return (
    <div className="services-container">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your <span className="highlight">Digital Presence</span>
          </h1>
          <p className="hero-subtitle">
            We deliver cutting-edge digital solutions that drive growth, enhance
            user experience, and transform your business for the modern era.
          </p>
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById('services-grid')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            >
              Explore Services
            </button>
            <button
              className="btn-secondary"
              onClick={() => setIsModalOpen(true)}
            >
              Get Free Consultation
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="floating-element element-1">🚀</div>
            <div className="floating-element element-2">📱</div>
            <div className="floating-element element-3">⚡</div>
            <div className="floating-element element-4">🎨</div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="services-grid-section">
        <div className="section-header">
          <h2>Our Premium Services</h2>
          <p>Comprehensive digital solutions tailored to your business needs</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${service.popular ? 'popular' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              {service.popular && (
                <div className="popular-badge">Most Popular</div>
              )}

              <div className="service-icon">{service.icon}</div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <div className="service-features">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">
                    ✓ {feature}
                  </span>
                ))}
              </div>

              <div className="service-meta">
                <div className="price">{service.price}</div>
                <div className="duration">⏱️ {service.duration}</div>
              </div>

              <div className="service-actions">
                <button
                  className="btn-outline"
                  onClick={() => setActiveService(service.id)}
                >
                  Learn More
                </button>
                <button
                  className="btn-primary"
                  onClick={() => handleInquiry(service)}
                >
                  Get Quote
                </button>
              </div>

              {/* Expanded Details */}
              {activeService === service.id && (
                <div className="service-expanded" data-aos="fade-down">
                  <div className="expanded-content">
                    <h4>What's Included:</h4>
                    <ul>
                      <li>Detailed project analysis and planning</li>
                      <li>Regular progress updates and demos</li>
                      <li>Quality assurance and testing</li>
                      <li>Post-launch support and maintenance</li>
                    </ul>
                    <button
                      className="btn-contact"
                      onClick={() => handleInquiry(service)}
                    >
                      Start Project
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-header">
          <h2>Our Working Process</h2>
          <p>Streamlined approach to deliver exceptional results</p>
        </div>

        <div className="process-steps">
          <div className="process-step" data-aos="fade-right">
            <div className="step-number">01</div>
            <h3>Discovery & Planning</h3>
            <p>
              We analyze your requirements and create a detailed project roadmap
            </p>
          </div>

          <div
            className="process-step"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="step-number">02</div>
            <h3>Design & Development</h3>
            <p>
              Our team creates stunning designs and robust technical solutions
            </p>
          </div>

          <div
            className="process-step"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="step-number">03</div>
            <h3>Testing & Quality Assurance</h3>
            <p>
              Rigorous testing ensures flawless performance across all devices
            </p>
          </div>

          <div
            className="process-step"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="step-number">04</div>
            <h3>Launch & Support</h3>
            <p>
              We deploy your solution and provide ongoing maintenance support
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content" data-aos="zoom-in">
          <h2>Ready to Start Your Project?</h2>
          <p>
            Let's discuss how we can help transform your business with our
            digital solutions
          </p>
          <button
            className="btn-primary large"
            onClick={() => setIsModalOpen(true)}
          >
            Start Free Consultation
          </button>
        </div>
      </section>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>

            <div className="modal-header">
              <h2>Get Your Free Consultation</h2>
              <p>
                Fill out the form below and we'll get back to you within 24
                hours
              </p>
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Enter your company name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  defaultValue={selectedService?.title || ''}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell us about your project requirements, timeline, and budget..."
                />
              </div>

              <button type="submit" className="btn-primary full-width">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Notification */}
      {notification && <div className="notification">{notification}</div>}
    </div>
  );
}

export default Services;
