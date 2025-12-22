import { useState } from 'react';
import './Services.css';
import { services, stats, processSteps } from '../data/serviceitems';
import { Helmet } from 'react-helmet-async';

function Services() {
  const [activeService, setActiveService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState('');
  const [formStep, setFormStep] = useState(1); // For multi-step form

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(''), 4000);
  };

  const handleServiceInquiry = (service) => {
    setSelectedService(service);
    setFormStep(1);
    setIsModalOpen(true);
  };

  const handleScheduleDemo = (service) => {
    setSelectedService(service);
    setFormStep(3); // Jump to scheduling step
    setIsModalOpen(true);
  };

  const handleViewDetails = (service) => {
    setActiveService(activeService === service.id ? null : service.id);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log('Service Inquiry:', {
      ...data,
      service: selectedService?.title,
    });

    // Simulate API call
    setTimeout(() => {
      setIsModalOpen(false);
      showNotification(
        `🎉 Thank you for your interest in ${selectedService?.title}! We'll contact you within 24 hours.`,
        'success'
      );
      e.target.reset();
      setSelectedService(null);
      setFormStep(1);
    }, 1500);
  };

  const handleScheduleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log('Demo Scheduled:', {
      ...data,
      service: selectedService?.title,
    });

    // Simulate API call
    setTimeout(() => {
      setIsModalOpen(false);
      showNotification(
        `✅ Demo scheduled for ${selectedService?.title}! Calendar invite sent to your email.`,
        'success'
      );
      e.target.reset();
      setSelectedService(null);
      setFormStep(1);
    }, 1500);
  };

  return (
    <div className="services-container">
      <Helmet>
        <title>Marsyn Services | Web, Mobile & AI Solutions</title>
        <meta
          name="description"
          content="Explore Marsyn's professional software development, UI/UX design, and AI-powered solutions for startups and businesses."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <div className="badge">Professional Services</div>
          <h1>Transform Your Digital Vision Into Reality</h1>
          <p className="subtitle">
            Expert software development and design services tailored to drive
            your business growth. From concept to deployment, I deliver
            solutions that work.
          </p>
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">{stat.icon}</div>
                <div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById('services')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            >
              Explore Services
            </button>
            <button
              className="btn-secondary"
              onClick={() => setIsModalOpen(true)}
            >
              Book Consultation
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-snippet">
            <pre>
              <code>
                {`// Your solution awaits
const project = {
  expertise: ['React', 'Node.js', 'AWS'],
  delivery: 'On Time',
  quality: 'Top Tier',
  support: '24/7'
};`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="services-section">
        <div className="section-header">
          <h2>My Services</h2>
          <p>
            Comprehensive digital solutions designed to solve real business
            challenges
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card ${service.popular ? 'featured' : ''}`}
            >
              {service.popular && (
                <div className="popular-badge">Most Requested</div>
              )}

              <div className="service-header">
                <div className="service-icon-circle">
                  <span className="icon">{service.icon}</span>
                </div>
                <span className="service-category">{service.category}</span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <div className="service-features">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="service-details">
                <div className="price-info">
                  <span className="price-label">Investment</span>
                  <span className="price">{service.price}</span>
                </div>
                <div className="duration-info">
                  <span className="duration-label">Timeline</span>
                  <span className="duration">{service.duration}</span>
                </div>
              </div>

              <div className="service-actions">
                <button
                  className="btn-outline"
                  onClick={() => handleViewDetails(service)}
                >
                  {activeService === service.id ? 'Show Less' : 'View Details'}
                </button>
                <button
                  className="btn-primary"
                  onClick={() => handleServiceInquiry(service)}
                >
                  Get Quote
                </button>
              </div>

              {/* Expanded Details */}
              {activeService === service.id && (
                <div className="service-expanded">
                  <div className="expanded-content">
                    <h4>What You'll Get:</h4>
                    <ul className="deliverables-list">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx}>
                          <span className="check-icon">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="expanded-actions">
                      <button
                        className="btn-secondary"
                        onClick={() => handleScheduleDemo(service)}
                      >
                        Schedule Demo
                      </button>
                      <button
                        className="btn-primary"
                        onClick={() => handleServiceInquiry(service)}
                      >
                        Start Project
                      </button>
                    </div>
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
          <h2>How I Work</h2>
          <p>A transparent, collaborative process designed for success</p>
        </div>

        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <div key={step.step} className="process-step">
              <div className="step-circle">
                <span className="step-number">0{step.step}</span>
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <span className="step-duration">{step.duration}</span>
              </div>
              {index < processSteps.length - 1 && (
                <div className="step-connector"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-card">
          <div className="cta-content">
            <h2>Ready to Bring Your Project to Life?</h2>
            <p>Let's discuss how I can help you achieve your digital goals.</p>
            <div className="cta-features">
              <span>✅ Free initial consultation</span>
              <span>✅ Detailed project proposal</span>
              <span>✅ Flexible engagement models</span>
            </div>
          </div>
          <div className="cta-actions">
            <button
              className="btn-primary"
              onClick={() => setIsModalOpen(true)}
            >
              Start Conversation
            </button>
            <button
              className="btn-secondary"
              onClick={() => {
                const subject = encodeURIComponent('Service Inquiry');
                window.location.href = `mailto:contact@example.com?subject=${subject}`;
              }}
            >
              Email Directly
            </button>
          </div>
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

            {selectedService && (
              <div className="selected-service-header">
                <span className="service-modal-icon">
                  {selectedService.icon}
                </span>
                <h3>{selectedService.title}</h3>
              </div>
            )}

            {/* Multi-step form */}
            {formStep === 1 && (
              <>
                <h2>Get a Quote</h2>
                <p>
                  Tell me about your project and I'll provide a detailed
                  proposal.
                </p>

                <form className="contact-form" onSubmit={handleContactSubmit}>
                  <div className="form-group">
                    <label>Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your work email"
                    />
                  </div>

                  <div className="form-group">
                    <label>Company</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="form-group">
                    <label>Project Budget</label>
                    <select name="budget">
                      <option value="">Select budget range</option>
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-30k">$15,000 - $30,000</option>
                      <option value="30k+">$30,000+</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Project Details *</label>
                    <textarea
                      name="details"
                      required
                      rows="4"
                      placeholder="Briefly describe your project requirements, goals, and timeline..."
                    />
                  </div>

                  <button type="submit" className="btn-primary full-width">
                    Next: Review Details →
                  </button>
                </form>
              </>
            )}

            {formStep === 2 && (
              <>
                <h2>Review Your Information</h2>
                <p>Please review and confirm your details.</p>

                <div className="review-details">
                  <div className="review-item">
                    <span>Service:</span>
                    <strong>{selectedService?.title}</strong>
                  </div>
                  <div className="review-item">
                    <span>Package:</span>
                    <strong>{selectedService?.price}</strong>
                  </div>
                  {/* Form data would be displayed here */}
                </div>

                <div className="modal-actions">
                  <button
                    className="btn-outline"
                    onClick={() => setFormStep(1)}
                  >
                    ← Go Back
                  </button>
                  <button
                    className="btn-primary"
                    onClick={() => {
                      // In real app, submit form data
                      setFormStep(3);
                    }}
                  >
                    Schedule Free Consultation
                  </button>
                </div>
              </>
            )}

            {formStep === 3 && (
              <>
                <h2>Schedule a Demo/Consultation</h2>
                <p>Choose a time that works best for you.</p>

                <form className="schedule-form" onSubmit={handleScheduleSubmit}>
                  <div className="form-group">
                    <label>Preferred Date *</label>
                    <input type="date" name="date" required />
                  </div>

                  <div className="form-group">
                    <label>Preferred Time *</label>
                    <select name="time" required>
                      <option value="">Select time slot</option>
                      <option value="9-10">9:00 AM - 10:00 AM</option>
                      <option value="10-11">10:00 AM - 11:00 AM</option>
                      <option value="11-12">11:00 AM - 12:00 PM</option>
                      <option value="1-2">1:00 PM - 2:00 PM</option>
                      <option value="2-3">2:00 PM - 3:00 PM</option>
                      <option value="3-4">3:00 PM - 4:00 PM</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Meeting Type</label>
                    <select name="meetingType">
                      <option value="video">
                        Video Call (Zoom/Google Meet)
                      </option>
                      <option value="phone">Phone Call</option>
                      <option value="in-person">In-Person (If local)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Additional Notes</label>
                    <textarea
                      name="notes"
                      rows="3"
                      placeholder="Any specific topics you'd like to discuss..."
                    />
                  </div>

                  <div className="modal-actions">
                    <button
                      type="button"
                      className="btn-outline"
                      onClick={() => setFormStep(2)}
                    >
                      ← Back
                    </button>
                    <button type="submit" className="btn-primary">
                      Confirm Schedule
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Notification */}
      {notification && (
        <div className={`notification ${notification.type}`}>
          <div className="notification-icon">
            {notification.type === 'success' ? '✅' : '📧'}
          </div>
          <div>{notification.message}</div>
        </div>
      )}
    </div>
  );
}

export default Services;
