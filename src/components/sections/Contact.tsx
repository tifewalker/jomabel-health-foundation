import React, { useState } from "react";
import { Mail } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact-section">
      <style>{`
        .contact-section {
          font-family: 'Inter', 'Segoe UI', sans-serif;
          background-color: #f9fafb;
        }
        .contact-heading-wrap {
          text-align: center;
          padding: clamp(36px, 5vw, 56px) clamp(16px, 4vw, 24px) clamp(28px, 4vw, 40px);
        }
        .contact-heading-wrap h2 {
          font-size: clamp(22px, 4vw, 28px);
          font-weight: 700;
          color: #111827;
          margin-bottom: 14px;
        }
        .contact-heading-wrap p {
          font-size: clamp(13px, 2vw, 14.5px);
          color: #6b7280;
          line-height: 1.75;
          max-width: 560px;
          margin: 0 auto;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          max-width: 1000px;
          margin: 0 auto clamp(40px, 6vw, 64px);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        }
        .contact-left {
          background: linear-gradient(160deg, #0d1f4e 0%, #1e3a8a 60%, #1e40af 100%);
          padding: clamp(24px, 4vw, 36px) clamp(20px, 3vw, 32px);
        }
        .contact-left-label {
          color: rgba(255,255,255,0.85);
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 24px;
          font-weight: 500;
        }
        .contact-form-card {
          background-color: #ffffff;
          border-radius: 12px;
          padding: clamp(20px, 3vw, 28px) clamp(16px, 2.5vw, 24px);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .contact-right {
          background-color: #ffffff;
          padding: clamp(24px, 4vw, 36px) clamp(20px, 3vw, 32px);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .contact-input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 13.5px;
          color: #111827;
          outline: none;
          box-sizing: border-box;
          background-color: #ffffff;
          font-family: inherit;
        }
        .contact-input:focus {
          border-color: #1e3a8a;
          box-shadow: 0 0 0 3px rgba(30,58,138,0.08);
        }
        .contact-label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 6px;
        }
        .contact-send-btn {
          background-color: #1e3a8a;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          padding: 14px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          letter-spacing: 0.02em;
          font-family: inherit;
          transition: background-color 0.2s;
        }
        .contact-send-btn:hover {
          background-color: #0d1f4e;
        }
        .contact-email-link {
          font-size: 13px;
          color: #6b7280;
          text-decoration: none;
        }
        .contact-email-link:hover {
          color: #1e3a8a;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            margin: 0 clamp(16px, 4vw, 32px) 40px;
            border-radius: 14px;
          }
        }
        @media (max-width: 480px) {
          .contact-heading-wrap p br { display: none; }
          .contact-grid { margin: 0 12px 32px; }
        }
      `}</style>

      {/* Heading */}
      <div className="contact-heading-wrap">
        <h2>We'd Love to Hear From You</h2>
        <p>
          Have questions, need support or want to partner with us?<br />
          Our team is here to help. Reach out through the contact form below or use<br />
          any of our dedicated email addresses for specific enquiries
        </p>
      </div>

      <div className="contact-grid">

        {/* LEFT — Navy blue form panel */}
        <div className="contact-left">
          <p className="contact-left-label">
            Please fill out the form below and we'll get back to you as soon as possible.
          </p>

          <div className="contact-form-card">
            <div>
              <label className="contact-label">Name</label>
              <input name="name" type="text" placeholder="Your full name"
                value={form.name} onChange={handleChange} className="contact-input" />
            </div>
            <div>
              <label className="contact-label">Email address</label>
              <input name="email" type="email" placeholder="your@email.com"
                value={form.email} onChange={handleChange} className="contact-input" />
            </div>
            <div>
              <label className="contact-label">Subject</label>
              <div style={{ position: 'relative' }}>
                <select name="subject" value={form.subject} onChange={handleChange}
                  className="contact-input" style={{ appearance: 'none', cursor: 'pointer' }}>
                  <option value="">Select a topic</option>
                  <option>General Enquiry</option>
                  <option>Support</option>
                  <option>Donations</option>
                  <option>Partnership</option>
                  <option>Volunteer</option>
                </select>
                <svg style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
                  width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div>
              <label className="contact-label">Message</label>
              <textarea name="message" placeholder="Write a message" value={form.message}
                onChange={handleChange} rows={5}
                className="contact-input" style={{ resize: 'vertical', minHeight: '110px' }} />
            </div>

            {/* reCAPTCHA placeholder */}
            <div style={{
              border: '1px solid #e5e7eb', borderRadius: '8px', padding: '14px 16px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fafafa',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '20px', height: '20px', border: '2px solid #d1d5db', borderRadius: '4px', flexShrink: 0 }} />
                <span style={{ fontSize: '13.5px', color: '#374151' }}>I'm not a robot</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '20px' }}>🔄</div>
                <div style={{ fontSize: '9px', color: '#9ca3af', lineHeight: '1.2' }}>reCAPTCHA<br/>Privacy · Terms</div>
              </div>
            </div>

            <button className="contact-send-btn">Send Message</button>
          </div>
        </div>

        {/* RIGHT — Map + info */}
        <div className="contact-right">
          <div style={{ borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
            <iframe
              title="Ufuma Anambra Nigeria"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15877.834034512345!2d6.985!3d6.034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043f3b0b0b0b0b1%3A0x0!2sUfuma%2C%20Anambra%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000"
              width="100%" height="220"
              style={{ border: 0, display: 'block' }}
              loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div>
            <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#111827', marginBottom: '4px' }}>
              JoMabel Healthcare Foundation
            </h3>
            <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '14px' }}>
              Anambra State, Nigeria
            </p>
            <p style={{ fontSize: '13px', color: '#4b5563', lineHeight: '1.7', marginBottom: '24px' }}>
              We are committed to improving access to healthcare service and community health education. If you would like to visit, collaborate or learn more about our programs, please contact us first to schedule an appointment.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { label: 'General Enquiries', email: 'info@jomabel.org' },
                { label: 'Support',           email: 'support@jomabel.org' },
                { label: 'Donations',         email: 'donations@jomabel.org' },
              ].map(({ label, email }) => (
                <div key={email} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '6px',
                    backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Mail size={14} color="#1e3a8a" />
                  </div>
                  <div>
                    <p style={{ fontSize: '13px', fontWeight: '600', color: '#111827', margin: '0 0 2px' }}>{label}</p>
                    <a href={`mailto:${email}`} className="contact-email-link">{email}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;