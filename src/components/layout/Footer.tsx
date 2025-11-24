import React, { useState } from 'react';
import { Heart, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <footer className="bg-blue-950 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-blue-900 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-800 rounded-full p-3 flex-shrink-0">
              <Send className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg sm:text-xl">Important Updates Waiting For You</h3>
              <p className="text-gray-300 text-xs sm:text-sm mt-1">Stay informed about our healthcare initiatives and community programs.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-full w-full sm:w-64 lg:w-80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
            />
            <button
              onClick={handleSubscribe}
              className="bg-teal-400 hover:bg-teal-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition text-sm whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-teal-400" fill="currentColor" />
            <div>
              <h3 className="text-white font-bold text-lg sm:text-xl">JOMABEL</h3>
              <p className="text-teal-400 text-xs">Revitalize Your Health</p>
            </div>
          </div>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            Building a healthier, stronger, and more prosperous future—one community at a time through affordable healthcare and support.
          </p>
          <div className="flex gap-3">
            <div className="bg-blue-900 hover:bg-teal-400 p-2 rounded-full cursor-pointer transition">
              <Linkedin className="w-5 h-5 text-white" />
            </div>
            <div className="bg-blue-900 hover:bg-teal-400 p-2 rounded-full cursor-pointer transition">
              <Facebook className="w-5 h-5 text-white" />
            </div>
            <div className="bg-blue-900 hover:bg-teal-400 p-2 rounded-full cursor-pointer transition">
              <Twitter className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-white font-bold text-base sm:text-lg mb-4">Our Services</h4>
          <ul className="space-y-3">
            <li>
              <a href="#health-education" className="text-gray-400 hover:text-teal-400 transition text-sm block">
                Health Education Programs
              </a>
            </li>
            <li>
              <a href="#community-outreach" className="text-gray-400 hover:text-teal-400 transition text-sm block">
                Community Outreach
              </a>
            </li>
            <li>
              <a href="#wellness-screenings" className="text-gray-400 hover:text-teal-400 transition text-sm block">
                Wellness Screenings
              </a>
            </li>
            <li>
              <a href="#support-services" className="text-gray-400 hover:text-teal-400 transition text-sm block">
                Support Services
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-base sm:text-lg mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <a href="#about" className="text-gray-400 hover:text-teal-400 transition text-sm block">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-teal-400 transition text-sm block">
                Contact
              </a>
            </li>
            <li>
              <a href="#volunteer" className="text-gray-400 hover:text-teal-400 transition text-sm block">
                Volunteer
              </a>
            </li>
            <li>
              <a href="#donate" className="text-gray-400 hover:text-teal-400 transition text-sm block">
                Donate
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="text-white font-bold text-base sm:text-lg mb-4">Contact Us</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <p className="text-gray-400 text-sm">
                725 Pinnacle View Drive,<br />Georgetown, TX 78628
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
              <a href="tel:+15551234567" className="text-gray-400 hover:text-teal-400 transition text-sm">
                +1 (555) 123-4567
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
              <a href="mailto:info@jomabelhealth.org" className="text-gray-400 hover:text-teal-400 transition text-sm break-all">
                info@jomabelhealth.org
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-900">
        <div className="max-w-7xl mx-auto py-6 px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-400 text-center md:text-left text-xs sm:text-sm">
            Copyright © 2024 JoMabel Healthcare Foundation USA Inc. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-gray-400 text-xs sm:text-sm">
            <a href="#social" className="hover:text-teal-400 transition whitespace-nowrap">
              Visit us on social networks
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="#terms" className="hover:text-teal-400 transition whitespace-nowrap">
              Terms and Conditions
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="#privacy" className="hover:text-teal-400 transition whitespace-nowrap">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;