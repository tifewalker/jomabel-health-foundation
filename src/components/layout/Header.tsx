import React from 'react';
import { MapPin, Mail, Clock, Linkedin, Facebook, Twitter, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-gray-100 py-3 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center gap-3">
          <div className="bg-teal-400 rounded-full p-2">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-gray-500 text-xs">Location Address Details:</div>
            <div className="text-gray-800 font-medium">725 Pinnacle View Drive, Georgetown, TX 78628</div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-teal-400 rounded-full p-2">
            <Mail className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-gray-500 text-xs">Support Email Address:</div>
            <div className="text-gray-800 font-medium">info@jomabelhealth.org</div>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-teal-400 rounded-full p-2">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-gray-500 text-xs">Working Hours Details:</div>
              <div className="text-gray-800 font-medium">Monday - Saturday: 8:00am - 5:00pm</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 border-l border-gray-300 pl-6">
            <Linkedin className="w-4 h-4 text-gray-600 cursor-pointer hover:text-teal-500 transition" />
            <div className="w-px h-4 bg-gray-300"></div>
            <Facebook className="w-4 h-4 text-gray-600 cursor-pointer hover:text-teal-500 transition" />
            <div className="w-px h-4 bg-gray-300"></div>
            <Twitter className="w-4 h-4 text-gray-600 cursor-pointer hover:text-teal-500 transition" />
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-1 cursor-pointer">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='15' viewBox='0 0 50 30'%3E%3Crect width='50' height='30' fill='%23012169'/%3E%3Cpath d='M0 0 L50 30 M50 0 L0 30' stroke='%23fff' stroke-width='6'/%3E%3Cpath d='M0 0 L50 30 M50 0 L0 30' stroke='%23C8102E' stroke-width='4'/%3E%3Cpath d='M25 0v30M0 15h50' stroke='%23fff' stroke-width='10'/%3E%3Cpath d='M25 0v30M0 15h50' stroke='%23C8102E' stroke-width='6'/%3E%3C/svg%3E" alt="UK Flag" className="w-5 h-3" />
              <span className="text-gray-800 font-medium">English</span>
              <ChevronDown className="w-3 h-3 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;