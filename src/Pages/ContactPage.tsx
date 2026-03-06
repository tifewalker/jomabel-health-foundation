import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Contact from '../components/sections/Contact';
import OurSocials from '../components/sections/OurSocials';

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
const ContactPage = () => (
  <div style={{ fontFamily: "'Inter', sans-serif" }}>
    <Navbar />
    <Contact />
    <OurSocials />
    <Footer />
  </div>
);

export default ContactPage;