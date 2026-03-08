import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact-section">
      <style>{`
        .contact-section {
          font-family: var(--font-body);
          background-color: var(--color-bg);
        }
        .contact-heading-wrap {
          text-align: center;
          padding: clamp(36px, 5vw, 56px) clamp(16px, 4vw, 24px) clamp(28px, 4vw, 40px);
        }
        .contact-top-label {
          font-size: 11px;
          font-weight: 700;
          color: var(--color-primary-dark);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .contact-heading-wrap h2 {
          font-family: var(--font-heading);
          font-size: clamp(22px, 4vw, 32px);
          font-weight: 700;
          color: var(--color-navy);
          margin-bottom: 14px;
        }
        .contact-heading-wrap p {
          font-size: clamp(13px, 2vw, 14.5px);
          color: var(--color-text-muted);
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
          box-shadow: var(--shadow-lg);
        }

        /* ── LEFT — form panel ── */
        .contact-left {
          background: linear-gradient(160deg, var(--color-navy) 0%, var(--color-navy-mid) 60%, var(--color-primary-dark) 100%);
          padding: clamp(24px, 4vw, 36px) clamp(20px, 3vw, 32px);
        }
        .contact-left-label {
          color: rgba(255,255,255,0.80);
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 24px;
          font-weight: 400;
        }
        .contact-form-card {
          background-color: var(--color-white);
          border-radius: 12px;
          padding: clamp(20px, 3vw, 28px) clamp(16px, 2.5vw, 24px);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .contact-label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 6px;
        }
        .contact-input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid var(--color-border);
          border-radius: 8px;
          font-size: 13.5px;
          color: var(--color-text);
          outline: none;
          box-sizing: border-box;
          background-color: var(--color-white);
          font-family: inherit;
          transition: var(--transition);
        }
        .contact-input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(41,197,246,0.12);
        }
        .contact-send-btn {
          background-color: var(--color-primary-dark);
          color: var(--color-white);
          border: none;
          border-radius: var(--btn-radius);
          padding: 14px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          width: 100%;
          letter-spacing: 0.02em;
          font-family: inherit;
          transition: var(--transition);
        }
        .contact-send-btn:hover {
          background-color: var(--color-navy);
          transform: translateY(-1px);
        }

        /* ── RIGHT — info panel ── */
        .contact-right {
          background-color: var(--color-white);
          padding: clamp(24px, 4vw, 36px) clamp(20px, 3vw, 32px);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .contact-info-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background-color: var(--color-primary-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-email-link {
          font-size: 13px;
          color: var(--color-text-muted);
          text-decoration: none;
          transition: var(--transition);
        }
        .contact-email-link:hover { color: var(--color-primary-dark); }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            margin: 0 clamp(16px, 4vw, 32px) 40px;
            border-radius: 14px;
          }
        }
        @media (max-width: 480px) {
          .contact-grid { margin: 0 12px 32px; }
        }
      `}</style>

      {/* ── Heading ── */}
      <div className="contact-heading-wrap">
        <p className="contact-top-label">Get In Touch</p>
        <h2>We'd Love to Hear From You</h2>
        <p>
          Have questions, want to donate, volunteer, or partner with us?
          Reach out through the form below or contact us directly —
          we're here to help.
        </p>
      </div>

      <div className="contact-grid">

        {/* ── LEFT — Form ── */}
        <div className="contact-left">
          <p className="contact-left-label">
            Fill out the form and our team will get back to you as soon as possible.
          </p>

          <div className="contact-form-card">
            <div>
              <label className="contact-label">Full Name</label>
              <input name="name" type="text" placeholder="Your full name"
                value={form.name} onChange={handleChange} className="contact-input" />
            </div>
            <div>
              <label className="contact-label">Email Address</label>
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
                  <option>Donations</option>
                  <option>Partnership</option>
                  <option>Volunteer</option>
                  <option>Legacy Giving</option>
                  <option>Media & Press</option>
                </select>
                <svg style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
                  width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div>
              <label className="contact-label">Message</label>
              <textarea name="message" placeholder="Write your message here..." value={form.message}
                onChange={handleChange} rows={5}
                className="contact-input" style={{ resize: 'vertical', minHeight: '110px' }} />
            </div>

            {/* reCAPTCHA placeholder */}
            <div style={{
              border: '1px solid var(--color-border)', borderRadius: '8px', padding: '14px 16px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              backgroundColor: 'var(--color-surface)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '20px', height: '20px', border: '2px solid var(--color-border)', borderRadius: '4px', flexShrink: 0 }} />
                <span style={{ fontSize: '13.5px', color: 'var(--color-text)' }}>I'm not a robot</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '20px' }}>🔄</div>
                <div style={{ fontSize: '9px', color: 'var(--color-text-light)', lineHeight: '1.2' }}>reCAPTCHA<br/>Privacy · Terms</div>
              </div>
            </div>

            <button className="contact-send-btn">Send Message</button>
          </div>
        </div>

        {/* ── RIGHT — Map + Info ── */}
        <div className="contact-right">

          {/* Map */}
          <div style={{ borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
            <iframe
              title="Ufuma Anambra Nigeria"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15877.834034512345!2d6.985!3d6.034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043f3b0b0b0b0b1%3A0x0!2sUfuma%2C%20Anambra%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000"
              width="100%" height="200"
              style={{ border: 0, display: 'block' }}
              loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Foundation info */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '18px', fontWeight: '700',
              color: 'var(--color-navy)', marginBottom: '4px',
            }}>
              JoMabel Healthcare Foundation
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '14px' }}>
              Ufuma, Anambra State, Nigeria &nbsp;·&nbsp; Texas, USA
            </p>
            <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: '1.75', marginBottom: '24px' }}>
              We are committed to improving access to healthcare and community health
              education. To visit, collaborate, or learn more about our programs,
              please contact us to schedule an appointment.
            </p>

            {/* Contact details — real client info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div className="contact-info-icon">
                  <Mail size={15} color="var(--color-primary-dark)" />
                </div>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: '700', color: 'var(--color-navy)', margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Email</p>
                  <a href="mailto:claraogbaa2022@gmail.com" className="contact-email-link">
                    claraogbaa2022@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div className="contact-info-icon">
                  <Phone size={15} color="var(--color-primary-dark)" />
                </div>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: '700', color: 'var(--color-navy)', margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Phone</p>
                  <a href="tel:+15125080277" className="contact-email-link">
                    +1 (512) 508-0277
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div className="contact-info-icon">
                  <MapPin size={15} color="var(--color-primary-dark)" />
                </div>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: '700', color: 'var(--color-navy)', margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Location</p>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', margin: 0, lineHeight: '1.6' }}>
                    Ufuma, Anambra State, Nigeria<br />
                    Texas, United States
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;