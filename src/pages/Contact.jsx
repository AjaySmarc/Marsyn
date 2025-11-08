import { useState } from 'react';
import './Contact.css'; // Assuming you have a CSS file for styling

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>Get In Touch</h1>
        <p>
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-method">
            <div className="icon">📧</div>
            <h3>Email Us</h3>
            <p>hello@company.com</p>
            <span>We'll respond within 24 hours</span>
          </div>

          <div className="contact-method">
            <div className="icon">📞</div>
            <h3>Call Us</h3>
            <p>+1 (555) 123-4567</p>
            <span>Mon-Fri from 9am to 5pm</span>
          </div>

          <div className="contact-method">
            <div className="icon">📍</div>
            <h3>Visit Us</h3>
            <p>123 Business Avenue</p>
            <p>Suite 100, New York, NY 10001</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitStatus === 'success' && (
            <div className="alert success">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="alert error">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What is this regarding?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell us how we can help you..."
            />
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="map-section">
        <h2>Find Us Here</h2>
        <div className="map-placeholder">
          {/* Replace with your actual map component */}
          <div className="map-frame">
            <p>Interactive Map Would Appear Here</p>
            <p>📍 123 Business Avenue, Suite 100, New York, NY 10001</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
