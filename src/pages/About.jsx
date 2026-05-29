// src/pages/About.jsx

import React from 'react';
// 🌟 Native import for your new chef portrait asset
import chefImg from '../assets/images/about.jpg'; 

function About() {
  return (
    <div className="about-container">
      
      {/* 1. Brand Manifesto Statement Display Box */}
      <section className="manifesto-hero">
        <span className="manifesto-tagline">Cucina Matsepe</span>
        <h2 className="manifesto-title">Redefining the Art of Hospitality</h2>
        
        <div className="manifesto-body">
          <p>
            At Cucina Matsepe, we believe that dining is not just about food,it is about how people feel
            We exist to transform everyday spaces into meaningful experiences.To turn meals into memories. 
            To make every guest feel seen,valued and deeply cared for.
          </p>
          <p>
            We do not simply cook,we curate moments. Moments that are thoughtful,intentional and personal.
            Because true hospitality goes beyond service.It anticipates.It listens.It connects.
            We believe in going beyond what is expected in the smallest details,the quiet gestures and the 
            unforgettable touches that stay with you long after the table is cleared.
          </p>
          <p>
            This is our standard. This is our craft.This is Cucina Matsepe.
          </p>
        </div>
      </section>

      {/* 🌟 2. NEW: Chef Biography Twin-Column Layout Split */}
      <section className="chef-profile-split">
        <div className="profile-split-container">
          
          {/* Left Column: Image Asset frame block */}
          <div className="chef-image-frame">
            <img src={chefImg} alt="Chef Kamogelo Matsepe" className="chef-portrait" />
          </div>

          {/* Right Column: Narrative Editorial Biography String text */}
          <div className="chef-bio-content">
            <span className="bio-label">The Artisan Behind the Craft</span>
            <h3 className="bio-name">Chef Kamogelo Matsepe</h3>
            <p className="bio-main-text">
              With almost a decade of professional fine dining,luxury event catering and exclusive private estate cooking experience, Chef Kamogelo Matsepe has established himself as a prominent force in South Africa's high-end culinary arts sphere.
            </p>
            <p className="bio-sub-text">
              His culinary philosophy blends elite technical kitchen expertise with an artistic devotion to flavor design and presentation. Having mapped high-end events across Sandton, Fourways, Rosebank, and estate residences across Gauteng, his mission focuses entirely on designing highly customized, premium gastronomic experiences tailored directly to each patron's palate.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Brand Value Matrix Grid */}
      <section className="values-section">
        <h3 className="values-title">Our Core Values</h3>
        <div className="values-grid">
          
          <div className="value-item">
            <h4>Intentional Excellence</h4>
            <p>Every detail is deliberate.</p>
          </div>

          <div className="value-item">
            <h4>Emotional Hospitality</h4>
            <p>We create how guests feel.</p>
          </div>

          <div className="value-item">
            <h4>Personalisation Over Standardisation</h4>
            <p>Every experience is tailored.</p>
          </div>

          <div className="value-item">
            <h4>Consistency Without Compromise</h4>
            <p>Excellence every time.</p>
          </div>

          <div className="value-item">
            <h4>Presence & Attention to Detail</h4>
            <p>Nothing is overlooked.</p>
          </div>

          <div className="value-item">
            <h4>Calm Under Pressure</h4>
            <p>Seamless experiences always.</p>
          </div>

          <div className="value-item">
            <h4>Growth Through Craft</h4>
            <p>Continuous improvement.</p>
          </div>

          <div className="value-item">
            <h4>Ownership & Accountability</h4>
            <p>We take responsibility.</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;