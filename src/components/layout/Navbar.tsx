import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assests/images/logo.jpeg';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: 'home',        label: 'Home',        path: '/' },
    { id: 'programs',    label: 'Programs',    path: '/programs' },
    { id: 'campaign',    label: 'Campaign',    path: '/campaign' },
     { id: 'about',       label: 'About Us',    path: '/about' },
    { id: 'Contact Us', label: 'Contact Us', path: '/ContactUs' },
   
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="JoMabel Healthcare Foundation"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="relative text-sm font-medium transition-colors pb-1"
                style={{
                  color: isActive(item.path) ? '#22c55e' : '#374151',
                  borderBottom: isActive(item.path) ? '2px solid #22c55e' : '2px solid transparent',
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Donate Now Button */}
          <Link
            to="/donate"
            className="hidden md:inline-block px-6 py-2.5 text-sm font-semibold text-white rounded-md transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: '#22c55e', textDecoration: 'none' }}
          >
            Donate Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium rounded-lg"
                  style={{
                    color: isActive(item.path) ? '#22c55e' : '#374151',
                    backgroundColor: isActive(item.path) ? '#f0fdf4' : 'transparent',
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-3 px-5 py-3 text-sm font-semibold text-center text-white rounded-md"
                style={{ backgroundColor: '#22c55e', textDecoration: 'none' }}
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;