import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Programs from './Pages/Programs';
import Donate from './Pages/Donate';
import ContactPage from './Pages/ContactPage';
import Campaign from './Pages/Campaign';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/ContactUs" element={<ContactPage />} />
        <Route path="/campaign" element={<Campaign />} />
      </Routes>
     
    </Router>
   
  );
}

export default App;