import React, { useState } from 'react';
import { Heart, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <footer className="bg-blue-950 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-blue-900 py-6 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="bg-blue-800 rounded-full p-3">
              <Send className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl">Important Updates Waiting For You</h3>
              <p className="text-gray-300 text-sm">Stay informed about our healthcare initiatives and community programs.</p>
            </div>
          </div>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              className="px-6 py-3 rounded-full w-80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <button
              type="submit"
              className="bg-teal-400 hover:bg-teal-500 text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-8 h-8 text-teal-400" fill="currentColor" />
            <div>
              <h3 className="text-white font-bold text-xl">JOMABEL</h3>
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
          <h4 className="text-white font-bold text-lg mb-4">Our Services</h4>
          <ul className="space-y-3">
            <li>
              <a href="#health-education" className="text-gray-400 hover:text-teal-400 transition text-sm">
                Health Education Programs
              </a>
            </li>
            <li>
              <a href="#community-outreach" className="text-gray-400 hover:text-teal-400 transition text-sm">
                Community Outreach
              </a>
            </li>
            <li>
              <a href="#wellness-screenings" className="text-gray-400 hover:text-teal-400 transition text-sm">
                Wellness Screenings
              </a>
            </li>
            <li>
              <a href="#support-services" className="text-gray-400 hover:text-teal-400 transition text-sm">
                Support Services
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <a href="#about" className="text-gray-400 hover:text-teal-400 transition text-sm">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-teal-400 transition text-sm">
                Contact
              </a>
            </li>
            <li>
              <a href="#volunteer" className="text-gray-400 hover:text-teal-400 transition text-sm">
                Volunteer
              </a>
            </li>
            <li>
              <a href="#donate" className="text-gray-400 hover:text-teal-400 transition text-sm">
                Donate
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
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
              <a href="mailto:info@jomabelhealth.org" className="text-gray-400 hover:text-teal-400 transition text-sm">
                info@jomabelhealth.org
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-900">
        <div className="max-w-7xl mx-auto py-6 px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-400 mb-4 md:mb-0">
            Copyright © 2024 JoMabel Healthcare Foundation USA Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-400">
            <a href="#social" className="hover:text-teal-400 transition">
              Visit us on social networks
            </a>
            <span>|</span>
            <a href="#terms" className="hover:text-teal-400 transition">
              Terms and Conditions
            </a>
            <span>|</span>
            <a href="#privacy" className="hover:text-teal-400 transition">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;