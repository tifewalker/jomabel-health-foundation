import React from 'react';
import { Facebook, Linkedin } from 'lucide-react';
import logo from '../../assests/images/logo.jpeg';

const Footer = () => {
  return (
    <footer style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
      <style>{`
        .footer-main {
          background-color: #14532d;
          padding: clamp(36px, 5vw, 48px) clamp(20px, 5vw, 48px) clamp(32px, 4vw, 40px);
        }
        .footer-grid {
          max-width: 1080px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1.2fr 1fr 0.8fr;
          gap: 32px;
          align-items: start;
        }
        .footer-link {
          color: #bbf7d0;
          font-size: 13px;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #ffffff; }
        .footer-col-heading {
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .footer-donate-btn {
          background-color: #ffffff;
          color: #14532d;
          font-weight: 700;
          font-size: 14px;
          padding: 10px 24px;
          border-radius: 6px;
          text-decoration: none;
          white-space: nowrap;
          display: inline-block;
          transition: background-color 0.2s;
        }
        .footer-donate-btn:hover { background-color: #f0fdf4; }
        .footer-bottom {
          background-color: #14532d;
          padding: 18px clamp(20px, 5vw, 48px);
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .footer-bottom-inner {
          max-width: 1080px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: background-color 0.2s;
          cursor: pointer;
          flex-shrink: 0;
        }
        .footer-icon:hover { background-color: #22c55e; }

        /* Tablet — 2 col layout */
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }
          /* Donate button spans full width on tablet */
          .footer-donate-col {
            grid-column: 1 / -1;
            display: flex;
            justify-content: flex-start !important;
          }
        }

        /* Mobile — single column */
        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .footer-donate-col {
            grid-column: 1;
          }
          .footer-bottom-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
        }
      `}</style>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-grid">

          {/* Col 1: Logo + About */}
          <div>
            <div style={{
              backgroundColor: '#ffffff', borderRadius: '8px',
              padding: '6px', display: 'inline-block', marginBottom: '16px',
            }}>
              <img src={logo} alt="JoMabel" style={{ height: '56px', width: 'auto', display: 'block' }} />
            </div>
            <p style={{ color: '#d1fae5', fontSize: '12.5px', lineHeight: '1.7', margin: 0 }}>
              JoMabel Healthcare Foundation USA Inc. is a faith-guided, U.S.-based nonprofit developing a world-class medical and healthcare training campus in Nigeria.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="footer-col-heading">Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['About Us', 'Programs', 'Capital Campaign', 'Gallery', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="footer-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 className="footer-col-heading">Programs</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Medical Center', 'Skills Center', 'Outreach Mission', 'Maternal Health', 'Health Education', 'Infrastructure'].map((item) => (
                <li key={item}>
                  <a href="#" className="footer-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contacts */}
          <div>
            <h4 className="footer-col-heading">Contacts</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['info@jomabel.org', 'support@jomabel.org', 'donation@jomabel.org'].map((email) => (
                <a key={email} href={`mailto:${email}`} className="footer-link">{email}</a>
              ))}
            </div>
          </div>

          {/* Col 5: Donate button */}
          <div className="footer-donate-col" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', paddingTop: '4px' }}>
            <a href="/donate" className="footer-donate-btn">Donate Now</a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ backgroundColor: '#166534', height: '1px' }} />

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p style={{ color: '#bbf7d0', fontSize: '12.5px', margin: 0 }}>
            © JOMABEL. HEALTHCARE FOUNDATION 2026. All rights reserved.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#bbf7d0', fontSize: '13px' }}>Follow us:</span>

            {/* Threads */}
            <a href="#" className="footer-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#111827">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </a>

            {/* X */}
            <a href="#" className="footer-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#111827">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.25 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" className="footer-icon">
              <Linkedin size={15} color="#111827" />
            </a>

            {/* Facebook */}
            <a href="#" className="footer-icon">
              <Facebook size={15} color="#111827" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;