import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assests/images/logo.jpeg';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('home');

  const menuItems = [
    { id: 'home',        label: 'Home',        href: '#home' },
    { id: 'programs',    label: 'Programs',    href: '#programs' },
    { id: 'campaign',    label: 'Campaign',    href: '#campaign' },
    { id: 'testimonies', label: 'Testimonies', href: '#testimonies' },
    { id: 'about',       label: 'About Us',    href: '#about' },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">

          {/* Logo */}
          <a href="#home" onClick={() => setActiveMenu('home')} className="flex-shrink-0">
            <img
              src={logo}
              alt="JoMabel Healthcare Foundation"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation — centered */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveMenu(item.id)}
                className="relative text-sm font-medium transition-colors pb-1"
                style={{
                  color: activeMenu === item.id ? '#22c55e' : '#374151',
                  borderBottom: activeMenu === item.id ? '2px solid #22c55e' : '2px solid transparent',
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Donate Now Button */}
          <a
            href="#donate"
            onClick={() => setActiveMenu('donate')}
            className="hidden md:inline-block px-6 py-2.5 text-sm font-semibold text-white rounded-md transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: '#22c55e' }}
          >
            Donate Now
          </a>

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
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => { setActiveMenu(item.id); setMobileMenuOpen(false); }}
                  className="px-4 py-3 text-sm font-medium rounded-lg"
                  style={{
                    color: activeMenu === item.id ? '#22c55e' : '#374151',
                    backgroundColor: activeMenu === item.id ? '#f0fdf4' : 'transparent',
                  }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#donate"
                onClick={() => { setActiveMenu('donate'); setMobileMenuOpen(false); }}
                className="mx-4 mt-3 px-5 py-3 text-sm font-semibold text-center text-white rounded-md"
                style={{ backgroundColor: '#22c55e' }}
              >
                Donate Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;