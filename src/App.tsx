import React from 'react';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import GetInvolved from './components/sections/GetInvolved';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <GetInvolved />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;