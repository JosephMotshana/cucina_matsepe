// src/pages/About.jsx

import React from 'react';

function About() {
  return (
    <div className="about-container">
      
      {/* 1. Brand Manifesto Statement Display Box */}
      <section className="manifesto-hero">
        <span className="manifesto-tagline">Cucina Matsepe</span>
        <h2 className="manifesto-title">Redefining the Art of Hospitality</h2>
        
        <div className="manifesto-body">
          <p>
            At Cucina Matsepe, we believe that dining is not just about food—it is about how people feel.
          </p>
          <p>
            We exist to transform everyday spaces into meaningful experiences. To turn meals into memories. 
            To make every guest feel seen, valued, and deeply cared for.
          </p>
          <p>
            We do not simply cook—we curate moments. Moments that are thoughtful, intentional, and personal.
          </p>
          <p>
            Because true hospitality goes beyond service. It anticipates. It listens. It connects.
          </p>
          <p>
            We believe in going beyond what is expected—in the smallest details, the quiet gestures, and the 
            unforgettable touches that stay with you long after the table is cleared.
          </p>
          <p>
            This is our standard. This is our craft. This is Cucina Matsepe.
          </p>
        </div>
      </section>

      {/* 2. Brand Value Matrix Grid */}
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