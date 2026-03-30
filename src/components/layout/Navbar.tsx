import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../assests/images/logonavbar.png';
import TextToSpeech from './TextToSpeech';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: 'home',     label: 'Home',          path: '/' },
    { id: 'programs', label: 'Programs',      path: '/programs' },
    { id: 'campaign', label: 'Campaign',      path: '/campaign' },
    { id: 'about',    label: 'About Us',      path: '/about' },
    { id: 'legacy',   label: 'Legacy Giving', path: '/legacy' },
    { id: 'contact',  label: 'Contact Us',    path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <style>{`
        /* ── NAVBAR ROOT ── */
        .navbar-root {
          width: 100%;
          background: #ffffff;
          position: sticky;
          top: 0;
          z-index: 50;
        }

        /* ── TOP ROW: Logo + Donate ── */
        .navbar-top {
          background: #ffffff;
          border-bottom: 1px solid #F3F4F6;
        }
        .navbar-top-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 12px clamp(20px, 4vw, 48px);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .navbar-brand img {
          height: 65px;
          width: auto;
          object-fit: contain;
        }
        .navbar-brand-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .navbar-brand-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 18px;
          font-weight: 800;
          color: #111827;
          line-height: 1.2;
        }
        .navbar-brand-sub {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 500;
          color: #1D8FD4;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .navbar-top-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .navbar-donate {
          background: #16A34A;
          color: #ffffff;
          border: none;
          border-radius: 6px;
          padding: 10px 28px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          text-decoration: none;
          transition: all 0.2s;
        }
        .navbar-donate:hover { 
          background: #15803D; 
        }
        .navbar-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          color: #4B5563;
        }

        /* ── BOTTOM ROW: Navigation Menu (Different Background) ── */
        .navbar-bottom {
          background: #1D8FD4;
          border-bottom: 1px solid #1570A6;
        }
        .navbar-bottom-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(20px, 4vw, 48px);
        }
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
          height: 52px;
        }
        .navbar-link {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          color: #e7eaf0;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 8px 0;
          border-bottom: 2px solid transparent;
        }
        .navbar-link:hover { 
          color: #1D8FD4; 
        }
        .navbar-link.active { 
          color: #1D8FD4; 
          border-bottom-color: #1D8FD4;
          font-weight: 600;
        }
        .navbar-link svg {
          width: 16px;
          height: 16px;
          opacity: 0.6;
        }

        /* ── MOBILE MENU ── */
        .navbar-mobile {
          background: #ffffff;
          border-top: 1px solid #E5E7EB;
          padding: 16px 0 20px;
        }
        .navbar-mobile-links {
          display: flex;
          flex-direction: column;
        }
        .navbar-mobile-link {
          display: block;
          padding: 12px clamp(20px, 4vw, 48px);
          font-size: 15px;
          font-weight: 500;
          color: #4B5563;
          text-decoration: none;
          border-left: 3px solid transparent;
        }
        .navbar-mobile-link:hover,
        .navbar-mobile-link.active {
          color: #1D8FD4;
          background: #F0F9FF;
          border-left-color: #1D8FD4;
        }
        .navbar-mobile-donate {
          display: block;
          margin: 16px clamp(20px, 4vw, 48px) 8px;
          background: #16A34A;
          color: #ffffff;
          text-align: center;
          padding: 12px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
        }
        .navbar-mobile-tts {
          margin: 8px clamp(20px, 4vw, 48px);
          padding: 8px 0;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .navbar-links { display: none; }
          .navbar-donate { display: none; }
          .navbar-toggle { display: block; }
          .navbar-bottom { display: none; }
        }
        @media (min-width: 901px) {
          .navbar-mobile { display: none !important; }
          .navbar-toggle { display: none !important; }
        }
        @media (max-width: 550px) {
          .navbar-brand-text { display: none; }
          .navbar-brand img { height: 50px; }
        }
      `}</style>

      <header className="navbar-root">
        {/* TOP ROW: Logo + Donate Button */}
        <div className="navbar-top">
          <div className="navbar-top-inner">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="JoMabel Healthcare Foundation" />
              <div className="navbar-brand-text">
                <span className="navbar-brand-name">JoMabel Healthcare Foundation</span>
                <span className="navbar-brand-sub">JHF · USA Inc. · 501(c)(3)</span>
              </div>
            </Link>
            <div className="navbar-top-actions">
              <span className="navbar-tts hidden md:block"><TextToSpeech /></span>
              <Link to="/donate" className="navbar-donate">Donate Now</Link>
              <button
                className="navbar-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Navigation Menu (Different Background) */}
        <div className="navbar-bottom">
          <div className="navbar-bottom-inner">
            <ul className="navbar-links">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`navbar-link${isActive(item.path) ? ' active' : ''}`}
                  >
                    {item.label}
                    {item.id !== 'home' && item.id !== 'contact' && (
                      <ChevronDown size={14} />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="navbar-mobile">
            <div className="navbar-mobile-links">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`navbar-mobile-link${isActive(item.path) ? ' active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link to="/donate" className="navbar-mobile-donate" onClick={() => setMobileMenuOpen(false)}>
              Donate Now
            </Link>
            <div className="navbar-mobile-tts">
              <TextToSpeech />
            </div>
          </div>
        )}
      </header>

      {/* Floating TTS — mobile only */}
      <div
        className="fixed bottom-6 right-6 z-50 md:hidden"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(0,0,0,0.2)', borderRadius: '9999px', background: '#ffffff' }}
      >
        <TextToSpeech />
      </div>
    </>
  );
};

export default Navbar;