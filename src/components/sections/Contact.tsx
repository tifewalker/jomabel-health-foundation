import React, { useState } from "react";
import { Mail } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", backgroundColor: '#f9fafb' }}>

      {/* Top heading */}
      <div style={{ textAlign: 'center', padding: '56px 24px 40px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>
          We'd Love to Hear From You
        </h2>
        <p style={{ fontSize: '14.5px', color: '#6b7280', lineHeight: '1.75', maxWidth: '560px', margin: '0 auto' }}>
          Have questions, need support or want to partner with us?<br />
          Our team is have to help. Reach out through the contact form below or use<br />
          any of our dedicated email addresses for specific enquiries
        </p>
      </div>

      {/* Two column layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0',
        maxWidth: '1000px',
        margin: '0 auto 64px',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      }}>

        {/* LEFT — Green form panel */}
        <div style={{
          background: 'linear-gradient(160deg, #16a34a 0%, #15803d 60%, #166534 100%)',
          padding: '36px 32px',
        }}>
          <p style={{ color: '#ffffff', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px', fontWeight: '500' }}>
            Please fill out the form below and we'll get back<br />to you as soon as possible.
          </p>

          {/* Form card */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {/* Name */}
            <div>
              <label style={labelStyle}>Name</label>
              <input
                name="name"
                type="text"
                placeholder="Adefolayan Eromax"
                value={form.name}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            {/* Email */}
            <div>
              <label style={labelStyle}>Email address</label>
              <input
                name="email"
                type="email"
                placeholder="eromax@mymail.com"
                value={form.email}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            {/* Subject dropdown */}
            <div>
              <label style={labelStyle}>Subject</label>
              <div style={{ position: 'relative' }}>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                >
                  <option value="">Select a topic</option>
                  <option>General Enquiry</option>
                  <option>Support</option>
                  <option>Donations</option>
                  <option>Partnership</option>
                  <option>Volunteer</option>
                </select>
                <svg style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Message */}
            <div>
              <label style={labelStyle}>Subject</label>
              <textarea
                name="message"
                placeholder="Write a message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
              />
            </div>

            {/* reCAPTCHA placeholder */}
            <div style={{
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fafafa',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '20px', height: '20px', border: '2px solid #d1d5db', borderRadius: '4px', flexShrink: 0
                }} />
                <span style={{ fontSize: '13.5px', color: '#374151' }}>I'm not a robot</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '20px' }}>🔄</div>
                <div style={{ fontSize: '9px', color: '#9ca3af', lineHeight: '1.2' }}>reCAPTCHA<br/>Privacy · Terms</div>
              </div>
            </div>

            {/* Send button */}
            <button
              style={{
                backgroundColor: '#1d4ed8',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '14px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                width: '100%',
                letterSpacing: '0.02em',
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#1e40af'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#1d4ed8'}
            >
              Send Message
            </button>
          </div>
        </div>

        {/* RIGHT — Map + info */}
        <div style={{ backgroundColor: '#ffffff', padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* Google Map — Ufuma, Anambra */}
          <div style={{ borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
            <iframe
              title="Ufuma Anambra Nigeria"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15877.834034512345!2d6.985!3d6.034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043f3b0b0b0b0b1%3A0x0!2sUfuma%2C%20Anambra%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000"
              width="100%"
              height="220"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Foundation info */}
          <div>
            <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#111827', marginBottom: '4px' }}>
              JoMabel Healthcare Foundation
            </h3>
            <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '14px' }}>
              Anambra State, Nigeria
            </p>
            <p style={{ fontSize: '13px', color: '#4b5563', lineHeight: '1.7', marginBottom: '24px' }}>
              We are committed to improving access to healthcare service and community health education across. If you would like to visit, collaborate or learn more about our programs, please contact us first to schedule an appointment.
            </p>

            {/* Email contacts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { label: 'General Enquiries', email: 'info@jomabel.org' },
                { label: 'Support',           email: 'support@jomabel.org' },
                { label: 'Donations',         email: 'donations@jomabel.org' },
              ].map(({ label, email }) => (
                <div key={email} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '6px',
                    backgroundColor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Mail size={14} color="#16a34a" />
                  </div>
                  <div>
                    <p style={{ fontSize: '13px', fontWeight: '600', color: '#111827', margin: '0 0 2px' }}>{label}</p>
                    <a href={`mailto:${email}`} style={{ fontSize: '13px', color: '#6b7280', textDecoration: 'none' }}
                      onMouseOver={e => e.currentTarget.style.color = '#16a34a'}
                      onMouseOut={e => e.currentTarget.style.color = '#6b7280'}
                    >
                      {email}
                    </a>
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

const labelStyle = {
  display: 'block',
  fontSize: '12px',
  fontWeight: '600',
  color: '#374151',
  marginBottom: '6px',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  fontSize: '13.5px',
  color: '#111827',
  outline: 'none',
  boxSizing: 'border-box',
  backgroundColor: '#ffffff',
};

export default Contact;