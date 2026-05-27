// src/components/Navbar.jsx

import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper utility to safely close mobile drawer toggles upon selection
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="main-navbar">
      <div className="nav-container">
        
        {/* Brand Main Heading Identity Link */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          Cucina Matsepe
        </Link>

        {/* Smartphone Action Hamburger Toggle */}
        <button 
          className="nav-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Structural Navigation Route Links List */}
        <ul className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
          <li className="nav-item">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
              Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
              About Chef
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <Link to="/book" onClick={closeMenu}>
              <button className="nav-cta-btn">Book Chef</button>
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;