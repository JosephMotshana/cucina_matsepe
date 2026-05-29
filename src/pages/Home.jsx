// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      {/* 1. Immersive Hero Stage Graphic Wrapper */}
      <section className="hero-section">
        
        {/* 🌟 FIVE REVOLVING BACKGROUND PANELS */}
        <div className="hero-slide-deck">
          <div className="slide-bg slide-1"></div>
          <div className="slide-bg slide-2"></div>
          <div className="slide-bg slide-3"></div>
          <div className="slide-bg slide-4"></div>
          <div className="slide-bg slide-5"></div>
        </div>

        {/* Content Wrapper to force texts on top of moving backgrounds */}
        <div className="hero-content-layer">
          <span className="hero-subtitle">Bespoke Culinary Artistry</span>
          <h1 className="hero-title">CUCINA MATSEPE</h1>
          <p className="hero-tagline">
            Bringing fine dining, luxury event catering, and exclusive 
            private estate cooking directly into your private spaces.
          </p>
          
          <div className="hero-actions">
            <Link to="/book">
              <button className="btn-primary">Book An Experience</button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Specialized Brand Focus Pillars Highlights */}
      <section className="home-highlights">
        <div className="highlights-grid">
          
          <div className="highlight-card">
            <div className="highlight-icon"></div>
            <h3>Bespoke Dining</h3>
            <p>
              Elevated indoor dates and intimate curated tasting experiences for private settings, tailored precisely to your palette.
            </p>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon"></div>
            <h3>Luxury Catering & Events</h3>
            <p>
              Premium menu concepts, flawless styling, and high-end coordination for executive galas and milestone occasions across Gauteng.
            </p>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon"></div>
            <h3>Estate Residence Cooking</h3>
            <p>
              Exclusive full-day private culinary services mapped to elite estates in Sandton, Fourways, Rosebank, and beyond.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Home;