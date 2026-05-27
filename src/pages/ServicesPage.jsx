// src/pages/ServicesPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function ServicesPage() {
  const culinaryOfferings = [
    {
      title: 'Bespoke Dining (Indoor Dates)',
      description: 'An intimate, high-end fine dining execution tailored entirely to your home kitchen environment. Perfect for private celebrations, anniversaries, or high-profile romantic evenings requiring absolute attention to detail.',
      tags: ['French Technique', 'Italian Elements', 'Plated Courses'],
      icon: '🍽️'
    },
    {
      title: 'Private Events & Luxury Catering',
      description: 'Comprehensive menu conceptualization and aesthetic catering configurations for milestone corporate dinners, upscale birthdays, and VIP gatherings across elite local regions.',
      tags: ['Mediterranean Platters', 'Modern South African Fusion', 'Canapés'],
      icon: '✨'
    },
    {
      title: 'Estate Residence Cooking',
      description: 'Full-day premium culinary curation directly inside luxury residential estates. Providing personalized elite breakfast structures, family lunches, and exquisite dinner courses with seamless kitchen execution.',
      tags: ['Multi-Cuisine Adaptability', 'Seasonal Menus', 'Private Residency'],
      icon: '🏡'
    },
    {
      title: 'Restaurant Consulting',
      description: 'Professional commercial consulting services for upscale hospitality spaces looking to optimize kitchen performance, train staff, or overhaul menu profiles.',
      tags: ['Menu Development', 'Operational Workflow', 'Culinary Elevation'],
      icon: '📋'
    }
  ];

  return (
    <div className="services-container">
      <div className="services-intro">
        <h1 className="page-title">Culinary Services</h1>
        <p>
          Chef Kamogelo Matsepe blends time-honored French discipline, authentic Italian simplicity, 
          vibrant Mediterranean freshness, and deep local South African heritage to curate experiences 
          where every guest feels profoundly valued.
        </p>
      </div>

      <div className="services-matrix">
        {culinaryOfferings.map((service, index) => (
          <div key={index} className="service-display-card">
            
            {/* Visual Media Placeholder Side */}
            <div className="service-graphic-side">
              <div className="service-placeholder-bg">
                {service.icon}
              </div>
            </div>

            {/* Content Logic Info Side */}
            <div className="service-content-side">
              <div>
                <h3>{service.title}</h3>
                
                {/* Dynamically Loop through specialized culinary tags */}
                <div className="culinary-tags-wrapper">
                  {service.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="cuisine-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="service-description-text">{service.description}</p>
              </div>

              <Link to="/book" className="service-book-btn">
                Inquire For This Service
              </Link>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;