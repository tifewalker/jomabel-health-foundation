import React from 'react';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import logo from '../../assests/images/logo.jpeg';

const Footer = () => {
  return (
    <footer style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>

      {/* Main Footer — dark green */}
      <div style={{
        backgroundColor: '#14532d',
        padding: '48px 48px 40px',
      }}>
        <div style={{
          maxWidth: '1080px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1.2fr 1fr 0.8fr',
          gap: '32px',
          alignItems: 'start',
        }}>

          {/* Col 1: Logo + About */}
          <div>
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              padding: '6px',
              display: 'inline-block',
              marginBottom: '16px',
            }}>
              <img
                src={logo}
                alt="JoMabel"
                style={{ height: '56px', width: 'auto', display: 'block' }}
              />
            </div>
            <p style={{
              color: '#d1fae5',
              fontSize: '12.5px',
              lineHeight: '1.7',
              margin: 0,
            }}>
              "JoMabel Healthcare Foundation USA Inc. is a faith-guided, U.S.-based nonprofit developing a world-class medical and healthcare training campus in Nigeria."
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: '700', marginBottom: '16px' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['About Us', 'Programs', 'Capital Campaign', 'Gallery', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" style={{ color: '#bbf7d0', fontSize: '13px', textDecoration: 'none' }}
                    onMouseOver={e => e.currentTarget.style.color = '#ffffff'}
                    onMouseOut={e => e.currentTarget.style.color = '#bbf7d0'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: '700', marginBottom: '16px' }}>
              Programs
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Medical Center', 'Skills Center', 'Outreach Mission', 'Maternal Health', 'Health Education', 'Infrastructure'].map((item) => (
                <li key={item}>
                  <a href="#" style={{ color: '#bbf7d0', fontSize: '13px', textDecoration: 'none' }}
                    onMouseOver={e => e.currentTarget.style.color = '#ffffff'}
                    onMouseOut={e => e.currentTarget.style.color = '#bbf7d0'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contacts */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: '700', marginBottom: '16px' }}>
              Contacts
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['info@jomabel.org', 'support@jomabel.org', 'donation@jomabel.org'].map((email) => (
                <a key={email} href={`mailto:${email}`}
                  style={{ color: '#bbf7d0', fontSize: '13px', textDecoration: 'none' }}
                  onMouseOver={e => e.currentTarget.style.color = '#ffffff'}
                  onMouseOut={e => e.currentTarget.style.color = '#bbf7d0'}
                >
                  {email}
                </a>
              ))}
            </div>
          </div>

          {/* Col 5: Donate Now button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', paddingTop: '4px' }}>
            <a
              href="#donate"
              style={{
                backgroundColor: '#ffffff',
                color: '#14532d',
                fontWeight: '700',
                fontSize: '14px',
                padding: '10px 24px',
                borderRadius: '6px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                display: 'inline-block',
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#f0fdf4'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#ffffff'}
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ backgroundColor: '#166534', height: '1px' }} />

      {/* Bottom bar */}
      <div style={{
        backgroundColor: '#14532d',
        padding: '18px 48px',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}>
        <div style={{
          maxWidth: '1080px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          {/* Copyright */}
          <p style={{ color: '#bbf7d0', fontSize: '12.5px', margin: 0 }}>
            © JOMABEL. HEALTHCARE FOUNDATION!
          </p>

          {/* Follow us + icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#bbf7d0', fontSize: '13px' }}>Follow us:</span>

            {/* Threads */}
            <a href="#" style={iconStyle} onMouseOver={e => e.currentTarget.style.backgroundColor = '#22c55e'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#ffffff'}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#111827">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </a>

            {/* X / Twitter */}
            <a href="#" style={iconStyle} onMouseOver={e => e.currentTarget.style.backgroundColor = '#22c55e'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#ffffff'}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#111827">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.25 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" style={iconStyle} onMouseOver={e => e.currentTarget.style.backgroundColor = '#22c55e'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#ffffff'}>
              <Linkedin size={15} color="#111827" />
            </a>

            {/* Facebook */}
            <a href="#" style={iconStyle} onMouseOver={e => e.currentTarget.style.backgroundColor = '#22c55e'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#ffffff'}>
              <Facebook size={15} color="#111827" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const iconStyle = {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  backgroundColor: '#ffffff',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  transition: 'background-color 0.2s',
  cursor: 'pointer',
};

export default Footer;