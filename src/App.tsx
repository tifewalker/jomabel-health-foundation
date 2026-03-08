import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Programs from './Pages/Programs';
import Donate from './Pages/Donate';
import ContactPage from './Pages/ContactPage';
import Campaign from './Pages/Campaign';
import LegacyGiving from './Pages/LegacyGiving';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/legacy" element={<LegacyGiving />} />
      </Routes>
     
    </Router>
   
  );
}

export default App;