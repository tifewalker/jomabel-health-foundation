import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../assests/images/logonavbar.png';
import AccessibilityWidget from '../common/AccessibilityWidget';
import TextToSpeech from './TextToSpeech';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

 // Dropdown menu structure
const menuGroups = [
  {
    id: 'work-group',
    label: 'Our Work',
    items: [
      { id: 'programs', label: 'Programs', path: '/programs' },
      { id: 'campaign', label: 'Campaign', path: '/campaign' },
      { id: 'impact', label: 'Impact', path: '/impact' },
      { id: 'roi', label: 'ROI', path: '/roi' },
    ]
  },
  {
    id: 'give-group',
    label: 'Give',
    items: [
      { id: 'donate', label: 'Donate Now', path: '/donate' },
      { id: 'legacy', label: 'Legacy Giving', path: '/legacy' },
    ]
  },
  {
    id: 'connect-group',
    label: 'Connect',
    items: [
      { id: 'blog', label: 'Blog', path: '/blog' },
      { id: 'contact', label: 'Contact', path: '/contact' },
    ]
  }
];
  // Simple items (no dropdown)
  const simpleItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    if (path.includes('#')) {
      const mainPath = path.split('#')[0];
      return location.pathname === mainPath;
    }
    return location.pathname.startsWith(path);
  };

  const isDropdownItemActive = (items: { path: string }[]) => {
    return items.some(item => {
      if (item.path.includes('#')) {
        const mainPath = item.path.split('#')[0];
        return location.pathname === mainPath;
      }
      return location.pathname.startsWith(item.path);
    });
  };

  const handleDropdownToggle = (dropdownId: string) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  // Close dropdown when clicking outside (for desktop)
  React.useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      {/* Skip to content link - for keyboard users */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <style>{`
        /* Skip to content link styles */
        .skip-to-content {
          position: absolute;
          top: -40px;
          left: 0;
          background: #1D8FD4;
          color: white;
          padding: 8px 16px;
          text-decoration: none;
          z-index: 10001;
          transition: top 0.2s;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          border-radius: 0 0 4px 0;
        }
        
        .skip-to-content:focus {
          top: 0;
        }

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
        
        /* Dropdown Styles */
        .dropdown {
          position: relative;
        }
        .dropdown-trigger {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          color: #ffffff;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 8px 0;
          border-bottom: 2px solid transparent;
          cursor: pointer;
          background: none;
          border: none;
        }
        .dropdown-trigger:hover {
          opacity: 0.85;
        }
        .dropdown-trigger.active {
          border-bottom-color: #ffffff;
          font-weight: 600;
        }
        .dropdown-trigger svg {
          width: 16px;
          height: 16px;
          transition: transform 0.2s;
        }
        .dropdown-trigger.open svg {
          transform: rotate(180deg);
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          min-width: 200px;
          overflow: hidden;
          z-index: 100;
          margin-top: 4px;
        }
        .dropdown-item {
          display: block;
          padding: 12px 20px;
          font-size: 14px;
          font-weight: 500;
          color: #4B5563;
          text-decoration: none;
          transition: all 0.2s;
          border-left: 3px solid transparent;
        }
        .dropdown-item:hover {
          background: #F0F9FF;
          color: #1D8FD4;
          border-left-color: #1D8FD4;
        }
        .dropdown-item.active {
          background: #EBF5FB;
          color: #1D8FD4;
          font-weight: 600;
          border-left-color: #1D8FD4;
        }
        
        /* Simple Link Styles */
        .navbar-link {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          color: #ffffff;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 8px 0;
          border-bottom: 2px solid transparent;
        }
        .navbar-link:hover { 
          color: #ffffff;
          opacity: 0.85;
        }
        .navbar-link.active { 
          color: #ffffff;
          border-bottom-color: #ffffff;
          font-weight: 600;
        }

        /* ── MOBILE MENU (with dropdowns) ── */
        .navbar-mobile {
          background: #ffffff;
          border-top: 1px solid #E5E7EB;
          padding: 16px 0 20px;
          max-height: 80vh;
          overflow-y: auto;
        }
        .navbar-mobile-links {
          display: flex;
          flex-direction: column;
        }
        .navbar-mobile-item {
          border-bottom: 1px solid #F3F4F6;
        }
        .navbar-mobile-link {
          display: block;
          padding: 14px clamp(20px, 4vw, 48px);
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
        .navbar-mobile-dropdown-trigger {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px clamp(20px, 4vw, 48px);
          font-size: 15px;
          font-weight: 500;
          color: #4B5563;
          cursor: pointer;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
        }
        .navbar-mobile-dropdown-trigger.active {
          color: #1D8FD4;
          background: #F0F9FF;
        }
        .navbar-mobile-submenu {
          background: #F9FAFB;
          padding-left: 20px;
        }
        .navbar-mobile-subitem {
          display: block;
          padding: 12px clamp(20px, 4vw, 48px) 12px calc(clamp(20px, 4vw, 48px) + 20px);
          font-size: 14px;
          font-weight: 500;
          color: #6B7280;
          text-decoration: none;
          border-left: 3px solid transparent;
        }
        .navbar-mobile-subitem:hover,
        .navbar-mobile-subitem.active {
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

        {/* BOTTOM ROW: Navigation Menu with Dropdowns */}
        <div className="navbar-bottom">
          <div className="navbar-bottom-inner">
            <ul className="navbar-links">
              {/* Simple Items (Home) */}
              {simpleItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`navbar-link${isActive(item.path) ? ' active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              
              {/* Dropdown Groups */}
              {menuGroups.map((group) => (
                <li key={group.id} className="dropdown">
                  <button
                    className={`dropdown-trigger ${isDropdownItemActive(group.items) ? 'active' : ''} ${openDropdown === group.id ? 'open' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDropdownToggle(group.id);
                    }}
                  >
                    {group.label}
                    <ChevronDown size={14} />
                  </button>
                  {openDropdown === group.id && (
                    <div className="dropdown-menu">
                      {group.items.map((item) => (
                        <Link
                          key={item.id}
                          to={item.path}
                          className={`dropdown-item ${isActive(item.path) ? 'active' : ''}`}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="navbar-mobile">
            <div className="navbar-mobile-links">
              {/* Home */}
              <div className="navbar-mobile-item">
                <Link
                  to="/"
                  className={`navbar-mobile-link${isActive('/') ? ' active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </div>
              
              {/* Mobile Dropdowns */}
              {menuGroups.map((group) => {
                const [isMobileOpen, setIsMobileOpen] = useState(false);
                return (
                  <div key={group.id} className="navbar-mobile-item">
                    <button
                      className={`navbar-mobile-dropdown-trigger ${isMobileOpen ? 'active' : ''}`}
                      onClick={() => setIsMobileOpen(!isMobileOpen)}
                    >
                      {group.label}
                      <ChevronDown size={16} style={{ transform: isMobileOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                    </button>
                    {isMobileOpen && (
                      <div className="navbar-mobile-submenu">
                        {group.items.map((item) => (
                          <Link
                            key={item.id}
                            to={item.path}
                            className={`navbar-mobile-subitem ${isActive(item.path) ? 'active' : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
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

      {/* Accessibility Widget - appears on every page */}
      <AccessibilityWidget />
    </>
  );
};

export default Navbar;