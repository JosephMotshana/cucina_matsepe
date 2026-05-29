// src/features/portfolio/PortfolioGrid.jsx

import React, { useState } from 'react';
import { pastEvents } from './PortfolioData';
import '../../tyles/features.css'; 

function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Filter Logic matching Chef Kamogelo's dynamic categories
  const filteredEvents = activeFilter === 'All' 
    ? pastEvents 
    : pastEvents.filter(event => event.category === activeFilter);

  return (
    <section className="portfolio-container">
      
      {/* 1. Updated Category Filter Tabs (Aligned to Flyer Offerings) */}
      <div className="portfolio-filter-bar">
        {['All', 'Bespoke Dining', 'Private Events', 'Luxury Catering', 'Estate Cooking', 'Restaurant Consulting'].map((category) => (
          <button 
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 2. Main Events Grid Matrix */}
      <div className="portfolio-grid">
        {filteredEvents.map((event) => (
          <div 
            key={event.id} 
            className="portfolio-card"
            onClick={() => setSelectedEvent(event)}
          >
            <div className="card-image-wrapper">
              <img src={event.coverImage} alt={event.title} className="card-image" />
              
              {/* Dual Badge Layer for Services and Gauteng Regions */}
              <div className="card-badge-container">
                <span className="card-category">{event.category}</span>
                <span className="card-location">📍 {event.location}</span>
              </div>
            </div>
            
            <div className="card-info">
              <h3 className="card-title">{event.title}</h3>
              <p className="card-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Lightbox Pop-up Gallery for Folder Photos */}
      {selectedEvent && (
        <div className="gallery-modal-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setSelectedEvent(null)}>&times;</button>
            
            <div className="modal-header">
              <h3>{selectedEvent.title}</h3>
              <p>{selectedEvent.description}</p>
            </div>

            <div className="modal-slideshow-container">
              {selectedEvent.images.map((imgUrl, idx) => (
                <img 
                  key={idx} 
                  src={imgUrl} 
                  alt={`Gallery view ${idx + 1}`} 
                  className="modal-slide-image" 
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PortfolioGrid;