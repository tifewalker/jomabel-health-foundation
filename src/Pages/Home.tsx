import React from 'react';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import FounderQuote from '../components/sections/FounderQuote';
import MissionVision from '../components/sections/MissionVision';
import PriorityStats from '../components/sections/PriorityStats';
import OurPrograms from '../components/sections/Ourprograms';
import CampaignBanner from '../components/sections/CampaignBanner';
import Testimonies from '../components/sections/Testimonies';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
        <MissionVision />
      <FounderQuote />
      <PriorityStats />
      <OurPrograms />
      <CampaignBanner />
      <Testimonies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;