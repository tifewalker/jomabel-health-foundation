import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

// ── Your authentic images ──
import outreachImage from '../../assests/images/outreach2.jpeg';
import maternalImage from '../../assests/images/maternal-and-child-health-.jpg';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-page">
      <style>{`
        .contact-page {
          font-family: var(--font-body);
          background-color: #FFFFFF;
        }
        
        /* Hero Section with Image */
        .contact-hero {
          position: relative;
          height: 50vh;
          min-height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }
        .contact-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .contact-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%);
        }
        .contact-hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          padding: 0 24px;
        }
        .contact-hero h1 {
          font-family: var(--font-heading);
          font-size: clamp(36px, 5vw, 52px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .contact-hero p {
          font-size: 18px;
          color: rgba(255,255,255,0.9);
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }
        
        /* Contact Grid */
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 64px clamp(20px, 5vw, 48px);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }
        
        /* Left Column - Contact Info */
        .contact-info {
          background: #F9FAFB;
          border-radius: 28px;
          padding: 40px;
        }
        .info-header {
          margin-bottom: 32px;
        }
        .info-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1D8FD4;
          margin-bottom: 12px;
        }
        .info-title {
          font-family: var(--font-heading);
          font-size: 28px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 12px;
        }
        .info-description {
          font-size: 16px;
          color: #6B7280;
          line-height: 1.6;
        }
        
        .info-details {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin: 32px 0;
        }
        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .info-icon {
          width: 48px;
          height: 48px;
          background: #EFF6FF;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #1D8FD4;
        }
        .info-icon svg {
          width: 24px;
          height: 24px;
        }
        .info-content h4 {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 4px 0;
        }
        .info-content p, .info-content a {
          font-size: 14px;
          color: #6B7280;
          text-decoration: none;
          transition: color 0.2s;
          margin: 0;
          line-height: 1.5;
        }
        .info-content a:hover {
          color: #1D8FD4;
        }
        
        /* Map */
        .contact-map {
          margin-top: 32px;
          border-radius: 20px;
          overflow: hidden;
          height: 200px;
        }
        .contact-map iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }
        
        /* Right Column - Form */
        .contact-form-card {
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 28px;
          padding: 40px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }
        .form-header {
          margin-bottom: 28px;
        }
        .form-title {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 8px;
        }
        .form-subtitle {
          font-size: 14px;
          color: #6B7280;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        .form-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 6px;
        }
        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          font-size: 14px;
          color: #111827;
          outline: none;
          font-family: inherit;
          transition: all 0.2s;
          background: #FFFFFF;
        }
        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: #1D8FD4;
          box-shadow: 0 0 0 3px rgba(29,143,212,0.1);
        }
        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .submit-btn {
          background: #1D8FD4;
          color: #ffffff;
          border: none;
          border-radius: 12px;
          padding: 14px 28px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          justify-content: center;
        }
        .submit-btn:hover {
          background: #1570A6;
          transform: translateY(-1px);
        }
        
        .success-message {
          background: #DCFCE7;
          color: #166534;
          padding: 12px 16px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
        }
        
        /* Responsive */
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .contact-info, .contact-form-card {
            padding: 32px;
          }
        }
        @media (max-width: 768px) {
          .contact-hero {
            min-height: 320px;
          }
          .contact-hero h1 {
            font-size: 28px;
          }
          .contact-hero p {
            font-size: 16px;
          }
          .info-title {
            font-size: 24px;
          }
          .form-title {
            font-size: 22px;
          }
        }
        @media (max-width: 550px) {
          .contact-info, .contact-form-card {
            padding: 24px;
          }
        }
      `}</style>

      {/* Hero Section with Image */}
      <div className="contact-hero">
       
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <h1>Let's Connect</h1>
          <p>
            Have questions, want to donate, volunteer, or partner with us? 
            We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Grid */}
      <div className="contact-container">
        <div className="contact-grid">

          {/* Left Column - Contact Information */}
          <div className="contact-info">
            <div className="info-header">
              <div className="info-label">Get In Touch</div>
              <h2 className="info-title">Reach Out to Us</h2>
              <p className="info-description">
                We're here to answer your questions and discuss how you can be part 
                of our mission to transform healthcare in Nigeria.
              </p>
            </div>

            <div className="info-details">
              <div className="info-item">
                <div className="info-icon">
                  <Mail />
                </div>
                <div className="info-content">
                  <h4>Email Us</h4>
                  <a href="mailto:info@jomablhf.org">info@jomablhf.org</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Phone />
                </div>
                <div className="info-content">
                  <h4>Call Us</h4>
                  <a href="tel:+15125080277">+1 (512) 508-0277</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <MapPin />
                </div>
                <div className="info-content">
                  <h4>Our Location</h4>
                  <p>Ufuma, Anambra State, Nigeria<br />Texas, United States</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Clock />
                </div>
                <div className="info-content">
                  <h4>Office Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM (CST)</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="contact-map">
              <iframe
                title="Ufuma Anambra Nigeria"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15877.834034512345!2d6.985!3d6.034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043f3b0b0b0b0b1%3A0x0!2sUfuma%2C%20Anambra%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000"
                width="100%" 
                height="100%"
                style={{ border: 0, display: 'block' }}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="contact-form-card">
            <div className="form-header">
              <h3 className="form-title">Send Us a Message</h3>
              <p className="form-subtitle">We'll get back to you within 24-48 hours</p>
            </div>

            {submitted && (
              <div className="success-message">
                <CheckCircle size={18} />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input 
                  name="name" 
                  type="text" 
                  placeholder="Your full name"
                  value={form.name} 
                  onChange={handleChange} 
                  className="form-input" 
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  name="email" 
                  type="email" 
                  placeholder="your@email.com"
                  value={form.email} 
                  onChange={handleChange} 
                  className="form-input" 
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <select 
                  name="subject" 
                  value={form.subject} 
                  onChange={handleChange}
                  className="form-select" 
                  required
                >
                  <option value="">Select a topic</option>
                  <option>General Enquiry</option>
                  <option>Donations</option>
                  <option>Partnership</option>
                  <option>Volunteer</option>
                  <option>Legacy Giving</option>
                  <option>Media & Press</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea 
                  name="message" 
                  placeholder="Write your message here..." 
                  value={form.message}
                  onChange={handleChange} 
                  className="form-textarea" 
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;