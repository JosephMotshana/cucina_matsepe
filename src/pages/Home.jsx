// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      {/* 1. Immersive Hero Stage Graphic Wrapper */}
      <section className="hero-section">
        <span className="hero-subtitle">Bespoke Culinary Artistry</span>
        <h1 className="hero-title">CUCINA MATSEPE</h1>
        <p className="hero-tagline">
          Bringing restaurant-quality fine dining, luxury event catering, and exclusive 
          private estate cooking directly into your private spaces.
        </p>
        
        {/* Call to Actions Interaction Array */}
        <div className="hero-actions">
          <Link to="/book">
            <button className="btn-primary">Book An Experience</button>
          </Link>
          <Link to="/portfolio">
            <button className="btn-secondary">View Past Work</button>
          </Link>
        </div>
      </section>

      {/* 2. Specialized Brand Focus Pillars Highlights */}
      <section className="home-highlights">
        <div className="highlights-grid">
          
          <div className="highlight-card">
            <div className="highlight-icon">🍷</div>
            <h3>Bespoke Dining</h3>
            <p>
              Elevated indoor dates and intimate curated tasting experiences for private settings, tailored precisely to your palette.
            </p>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon">✨</div>
            <h3>Luxury Catering & Events</h3>
            <p>
              Premium menu concepts, flawless styling, and high-end coordination for executive galas and milestone occasions across Gauteng.
            </p>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon">🏡</div>
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