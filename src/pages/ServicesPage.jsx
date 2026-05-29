// src/pages/ServicesPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// 🌟 Import your assets natively so the compiler processes the file paths correctly
import bespokeImg from '../assets/images/8C98DC00-B306-4BF6-A7A6-3B54AFEA5725.jpg';
import cateringImg from '../assets/images/IMG_9759.PNG';
import estateImg from '../assets/images/dish3.jpg';
import consultingImg from '../assets/images/dish1.jpg';

function ServicesPage() {
  const culinaryOfferings = [
    {
      title: 'Bespoke Dining (Indoor Dates)',
      description: 'An intimate, high-end fine dining execution tailored entirely to your home kitchen environment. Perfect for private celebrations, anniversaries, or high-profile romantic evenings requiring absolute attention to detail.',
      tags: ['French Technique', 'Italian Elements', 'Plated Courses'],
      icon: bespokeImg // Pointing directly to the imported file asset
    },
    {
      title: 'Private Events & Luxury Catering',
      description: 'Comprehensive menu conceptualization and aesthetic catering configurations for milestone corporate dinners, upscale birthdays, and VIP gatherings across elite local regions.',
      tags: ['Mediterranean Platters', 'Modern South African Fusion', 'Canapés'],
      icon: cateringImg
    },
    {
      title: 'Estate Residence Cooking',
      description: 'Full-day premium culinary curation directly inside luxury residential estates. Providing personalized elite breakfast structures, family lunches, and exquisite dinner courses with seamless kitchen execution.',
      tags: ['Multi-Cuisine Adaptability', 'Seasonal Menus', 'Private Residency'],
      icon: estateImg
    },
    {
      title: 'Restaurant Consulting',
      description: 'Professional commercial consulting services for upscale hospitality spaces looking to optimize kitchen performance, train staff, or overhaul menu profiles.',
      tags: ['Menu Development', 'Operational Workflow', 'Culinary Elevation'],
      icon: consultingImg
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
            
            {/* 📷 Fixed Visual Media Side: Now rendering an explicit image element */}
            <div className="service-graphic-side">
              <img 
                src={service.icon} 
                alt={service.title} 
                className="service-card-img" 
              />
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