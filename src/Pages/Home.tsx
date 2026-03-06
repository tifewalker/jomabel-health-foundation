import React from 'react';

//import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import MissionVision from '../components/sections/MissionVision';
import PriorityStats from '../components/sections/PriorityStats';
import RecentProjects from '../components/sections/RecentProjects';
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
      <PriorityStats />
      <RecentProjects />
      <OurPrograms />
      <CampaignBanner />
      <Testimonies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;