// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Layout Shell Assets
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Your Page Components Modules Imports
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage'; 
import PortfolioPage from './pages/PortfolioPage';
import About from './pages/About';
import Contact from './pages/Contact'; 
import BookChef from './pages/BookChef';

// 🌟 Fixed path to use your dedicated styles folder matching main.jsx
import './styles/global.css';

function App() {
  return (
    <Router>
      {/* Navbar stays pinned dynamically across all page views */}
      <Navbar />

      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<BookChef />} />
        </Routes>
      </div>

      {/* Footer stays anchored across views */}
      <Footer />
    </Router>
  );
}

export default App;