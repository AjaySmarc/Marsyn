import React, { useState } from 'react';
import './BookDemo.css';

const BookDemo = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      // Final submission
      console.log('Form submitted:', formData);
      setSubmitted(true);

      // Reset after 3 seconds and close
      setTimeout(() => {
        setSubmitted(false);
        setCurrentStep(1);
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          message: '',
        });
        onClose();
      }, 3000);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="demo-popup-overlay" onClick={handleOverlayClick}>
      <div className="demo-popup-container">
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <div className="popup-content">
          {/* Left Side - Hero/Info */}
          <div className="popup-hero">
            <div className="hero-badge">
              <span className="hero-icon">🎬</span>
              <span className="badge-text">Free Demo</span>
            </div>

            <h2 className="popup-title">Ready to Transform Your Business?</h2>
            <p className="popup-subtitle">
              Let's create something amazing together. Schedule your free
              consultation.
            </p>

            <div className="demo-benefits">
              <h4>What you'll get:</h4>
              <ul className="benefits-list">
                <li className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <span>Personalized solution walkthrough</span>
                </li>
                <li className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <span>30-minute expert consultation</span>
                </li>
                <li className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <span>Live Q&A session</span>
                </li>
                <li className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <span>Custom ROI analysis</span>
                </li>
              </ul>
            </div>

            <div className="contact-alternative">
              <p>Prefer to chat first?</p>
              <button className="contact-btn">
                <span className="icon">📞</span>
                <span>Contact Us Instead</span>
              </button>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="popup-form-section">
            <div className="form-progress">
              <div className="progress-steps">
                <div className={`step ${currentStep === 1 ? 'active' : ''}`}>
                  <span className="step-number">1</span>
                  <span className="step-label">Details</span>
                </div>
                <div className={`step ${currentStep === 2 ? 'active' : ''}`}>
                  <span className="step-number">2</span>
                  <span className="step-label">Schedule</span>
                </div>
              </div>
            </div>

            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Demo Scheduled Successfully!</h3>
                <p>
                  Thank you {formData.name}. We'll contact you shortly to
                  confirm your demo.
                </p>
                <div className="demo-details">
                  <p>
                    <strong>Date:</strong> {formData.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {formData.time}
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="demo-form">
                <div className="form-header">
                  <h3>Schedule Your Demo</h3>
                  <p>Step {currentStep} of 2</p>
                </div>

                {currentStep === 1 ? (
                  <div className="form-step">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="company">Company Name *</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Inc."
                        required
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">
                        How can we help you? (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Briefly describe your goals or challenges..."
                        rows="3"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="form-step">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="date">Preferred Date *</label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="time">Preferred Time *</label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a time slot</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="timezone-note">
                      <span className="note-icon">⏰</span>
                      <span>All times are in your local timezone</span>
                    </div>

                    <div className="calendar-integration">
                      <p className="integration-title">Add to calendar:</p>
                      <div className="calendar-buttons">
                        <button type="button" className="calendar-btn google">
                          Google Calendar
                        </button>
                        <button type="button" className="calendar-btn outlook">
                          Outlook
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="form-actions">
                  {currentStep === 2 && (
                    <button
                      type="button"
                      className="back-btn"
                      onClick={handleBack}
                    >
                      ← Back
                    </button>
                  )}

                  <button type="submit" className="submit-btn">
                    {currentStep === 1
                      ? 'Continue to Schedule →'
                      : 'Schedule My Demo'}
                  </button>
                </div>

                <div className="form-footer">
                  <p className="disclaimer">
                    By scheduling, you agree to our Privacy Policy. We'll never
                    share your information.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
