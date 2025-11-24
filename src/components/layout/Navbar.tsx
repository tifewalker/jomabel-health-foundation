import React, { useState } from 'react';
import { Heart, Search, ChevronDown, Plus } from 'lucide-react';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('home');

  return (
    <nav className="bg-blue-950 py-4 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-lg p-2">
            <Heart className="w-8 h-8 text-teal-400" fill="currentColor" />
          </div>
          <div className="text-white">
            <div className="text-2xl font-bold tracking-wide">JOMABEL</div>
            <div className="text-xs text-teal-400 -mt-1">Revitalize Your Health</div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex items-center gap-8 text-white">
          <a 
            href="#home" 
            className={`flex items-center gap-1 font-medium hover:text-teal-400 transition ${activeMenu === 'home' ? 'text-teal-400' : ''}`}
            onClick={() => setActiveMenu('home')}
          >
            HOME
          </a>
          <a 
            href="#pages" 
            className="flex items-center gap-1 font-medium hover:text-teal-400 transition"
          >
            ABOUT
          </a>
          <a 
            href="#services" 
            className="flex items-center gap-1 font-medium hover:text-teal-400 transition"
          >
            SERVICES
            <ChevronDown className="w-4 h-4" />
          </a>
          <a 
            href="#involved" 
            className="flex items-center gap-1 font-medium hover:text-teal-400 transition"
          >
            GET INVOLVED
          </a>
          <a 
            href="#blog" 
            className="flex items-center gap-1 font-medium hover:text-teal-400 transition"
          >
            BLOG
            
          </a>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <button className="bg-blue-900 hover:bg-blue-800 p-3 rounded-full transition">
            <Search className="w-5 h-5 text-white" />
          </button>
          <button className="bg-white hover:bg-gray-100 text-blue-950 px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition">
            Appointment
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 3l7 7-7 7V3z" />
            </svg>
          </button>
          <button className="bg-red-500 hover:bg-red-600 p-3 rounded-full transition">
            <Plus className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;