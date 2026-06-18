import React, { useState } from 'react';
import { ChefHat, Calendar, Sparkles, Award, Mail, Phone } from 'lucide-react';
import './index.css'; // Global CSS theme injection

export default function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'Bespoke Dining',
    location: 'Sandton',
    eventDate: '',
    guestCount: '',
    additionalDetails: ''
  });

  // Track the active gallery category filter
  const [activeCategory, setActiveCategory] = useState('All');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ==========================================
  // DIRECTORY FILE MAPS (From image_ffd7c0.png)
  // ==========================================
  const galentineImages = [
    "/Galentine's Day/event1.jpg",
    "/Galentine's Day/event2.jpg",
    "/Galentine's Day/event3.webp",
    "/Galentine's Day/event4.webp",
    "/Galentine's Day/event5.webp",
    "/Galentine's Day/event6.webp",
    "/Galentine's Day/event7.jpg",
    "/Galentine's Day/event8.jpg",
    "/Galentine's Day/event9.jpg",
    "/Galentine's Day/event10.jpg"
  ];

  const motherDayImages = [
    "/Mother's Day/event1.jpg",
    "/Mother's Day/event2.mp4", // Handles dynamically as an inline video element
    "/Mother's Day/event3.jpg",
    "/Mother's Day/event4.jpg",
    "/Mother's Day/event5.jpg",
    "/Mother's Day/event6.jpg",
    "/Mother's Day/event7.jpg",
    "/Mother's Day/event8.JPG",
    "/Mother's Day/event9.JPG",
    "/Mother's Day/event10.JPG",
    "/Mother's Day/event11.JPG",
    "/Mother's Day/event12.JPG",
    "/Mother's Day/event13.JPG",
    "/Mother's Day/event14.JPG",
    "/Mother's Day/event15.JPG"
  ];

  const porscheImages = [
    "/Porsche Event/event1.jpg",
    "/Porsche Event/event2.jpg",
    "/Porsche Event/event3.jpg",
    "/Porsche Event/event4.jpg",
    "/Porsche Event/event5.jpg",
    "/Porsche Event/event6.jpg",
    "/Porsche Event/event7.jpg",
    "/Porsche Event/event8.jpg",
    "/Porsche Event/event9.jpg",
    "/Porsche Event/event10.jpg",
    "/Porsche Event/event11.jpg",
    "/Porsche Event/event12.jpg",
    "/Porsche Event/event13.jpg",
    "/Porsche Event/event14.jpg",
    "/Porsche Event/event15.jpg",
    "/Porsche Event/event16.jpg",
    "/Porsche Event/event17.jpg",
    "/Porsche Event/event18.jpg",
    "/Porsche Event/event19.jpg",
    "/Porsche Event/event20.jpg"
  ];

  const consultingImages = [
    "/Resturant Consulting/event1.jpg",
    "/Resturant Consulting/event2.jpg",
    "/Resturant Consulting/event3.jpg",
    "/Resturant Consulting/event4.jpg",
    "/Resturant Consulting/event5.jpg",
    "/Resturant Consulting/event6.jpg",
    "/Resturant Consulting/event7.jpg",
    "/Resturant Consulting/event8.jpg",
    "/Resturant Consulting/event9.jpg",
    "/Resturant Consulting/event10.jpg",
    "/Resturant Consulting/event11.jpg",
    "/Resturant Consulting/event12.jpg",
    "/Resturant Consulting/event13.jpg",
    "/Resturant Consulting/event14.jpg",
    "/Resturant Consulting/event15.jpg",
    "/Resturant Consulting/event16.jpg",
    "/Resturant Consulting/event17.jpg",
    "/Resturant Consulting/event18.jpg"
  ];

  // Helper function to verify media formatting extensions
  const renderMediaItem = (srcPath, index, tag) => {
    if (srcPath.toLowerCase().endsWith('.mp4')) {
      return (
        <div key={index} className="collage-card video-card">
          <video src={srcPath} controls muted playsInline className="collage-media" />
          <div className="collage-card-overlay">
            <span>{tag} // Video Clip</span>
          </div>
        </div>
      );
    }
    return (
      <div key={index} className="collage-card">
        <img src={srcPath} alt={`${tag} asset ${index + 1}`} className="collage-media" />
      </div>
    );
  };

  return (
    <div>
      {/* ==========================================
          GLOBAL STICKY NAVIGATION BAR
          ========================================== */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#home" className="nav-brand">Cucina Matsepe</a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Gallery</a></li>
            <li><a href="#book">Booking &amp; Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* ==========================================
          PAGE VIEW 1: HOME (HERO LANDING)
          ========================================== */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Cucina Matsepe</h1>
          <p>Commercial Private Chef</p>
          <div className="hero-cta-wrapper">
            <a href="#book" className="hero-cta-btn">Secure Your Date</a>
          </div>
        </div>
      </section>

      {/* ==========================================
          PAGE VIEW 2: SERVICES
          ========================================== */}
      <section id="services" className="services-section">
        <div className="section-container">
          <h2 className="section-title">Culinary Services</h2>
          <p className="section-subtitle">Uncompromising precision crafted explicitly for discerning tables.</p>
          
          <div className="services-grid">
            <div className="service-card">
              <ChefHat size={32} strokeWidth={1.5} className="service-icon" />
              <h3>Bespoke Dining</h3>
              <p>Intimate indoor multi-course tasting dates constructed right within your residence layout.</p>
            </div>

            <div className="service-card">
              <Calendar size={32} strokeWidth={1.5} className="service-icon" />
              <h3>Private Events &amp; Catering</h3>
              <p>Sophisticated menu deployment execution for upscale celebrations and corporate functions.</p>
            </div>

            <div className="service-card">
              <Sparkles size={32} strokeWidth={1.5} className="service-icon" />
              <h3>Estate Cooking</h3>
              <p>Long-term tailored private residency chef systems managed inside elite family estates.</p>
            </div>

            <div className="service-card">
              <Award size={32} strokeWidth={1.5} className="service-icon" />
              <h3>Restaurant Consulting</h3>
              <p>Recipe development architecture, staff mastery retraining, and conceptual menu restructuring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PAGE VIEW 3: PORTFOLIO (COLLAGE LAYOUT DECK)
          ========================================== */}
      <section id="portfolio" className="portfolio-section">
        <div className="section-container">
          <h2 className="section-title">The Gallery</h2>
          <p className="section-subtitle">Visual captures of signature menu plating layouts and specialized kitchen executions.</p>
          
          {/* Dynamic Category Selector Track */}
          <div className="category-selector-track">
            {['All', 'Porsche', "Galentine's", "Mother's Day", 'Consulting'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Collage Groups Container Track */}
          <div className="events-collage-track">
            
            {/* DECK 1: PORSCHE EVENT */}
            {(activeCategory === 'All' || activeCategory === 'Porsche') && (
              <div className="event-collage-group">
                <div className="collage-header">
                  <span className="collage-tag">Collection // Corporate</span>
                  <h3>Porsche Corporate Event</h3>
                  <p>High-end corporate menu deployment tailored for elite brand settings.</p>
                </div>
                <div className="collage-grid-canvas">
                  {porscheImages.map((src, idx) => renderMediaItem(src, idx, "Porsche Event"))}
                </div>
              </div>
            )}

            {/* DECK 2: GALENTINE'S DAY */}
            {(activeCategory === 'All' || activeCategory === "Galentine's") && (
              <div className="event-collage-group">
                <div className="collage-header">
                  <span className="collage-tag">Collection // Private Dining</span>
                  <h3>Galentine's Day Fine Dining</h3>
                  <p>Bespoke tasting menus crafted for intimate luxury social tables.</p>
                </div>
                <div className="collage-grid-canvas">
                  {galentineImages.map((src, idx) => renderMediaItem(src, idx, "Galentine's"))}
                </div>
              </div>
            )}

            {/* DECK 3: MOTHER'S DAY */}
            {(activeCategory === 'All' || activeCategory === "Mother's Day") && (
              <div className="event-collage-group">
                <div className="collage-header">
                  <span className="collage-tag">Collection // Residency</span>
                  <h3>Mother's Day</h3>
                  <p>Elegant, multi-course estate culinary setups for refined family gatherings.</p>
                </div>
                <div className="collage-grid-canvas">
                  {motherDayImages.map((src, idx) => renderMediaItem(src, idx, "Mother's Day"))}
                </div>
              </div>
            )}

            {/* DECK 4: RESTAURANT CONSULTING */}
            {(activeCategory === 'All' || activeCategory === 'Consulting') && (
              <div className="event-collage-group">
                <div className="collage-header">
                  <span className="collage-tag">Collection // Consulting</span>
                  <h3>Restaurant Consulting</h3>
                  <p>Conceptual menu development, plating blueprints, and team instruction logs.</p>
                </div>
                <div className="collage-grid-canvas">
                  {consultingImages.map((src, idx) => renderMediaItem(src, idx, "Consulting"))}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ==========================================
          PAGE VIEW 4 & 5: BOOKING & CONTACT
          ========================================== */}
      <section id="book" className="booking-contact-section">
        <div className="section-container">
          <h2 className="section-title">Reservations &amp; Contact</h2>
          <p className="section-subtitle">Submit details to organize verification loops directly with Cucina Matsepe.</p>

          <div className="split-engine-grid">
            
            <div className="form-wrapper">
              <form action="https://formspree.io/f/mykvnaly" method="POST" className="chef-booking-form">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder="e.g. Lerato Khumalo" />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Contact Number</label>
                  <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="e.g. 082 123 4567" />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="_replyto" required value={formData.email} onChange={handleChange} placeholder="lerato@domain.co.za" />
                </div>

                <div className="form-group">
                  <label htmlFor="eventDate">Preferred Date</label>
                  <input type="date" id="eventDate" name="eventDate" required value={formData.eventDate} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="guestCount">Estimated Guests</label>
                  <input type="number" id="guestCount" name="guestCount" min="1" required value={formData.guestCount} onChange={handleChange} placeholder="e.g. 10" />
                </div>

                <div className="form-group">
                  <label htmlFor="serviceType">Culinary Service</label>
                  <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange}>
                    <option value="Bespoke Dining">Bespoke Dining</option>
                    <option value="Private Events">Private Events</option>
                    <option value="Luxury Catering">Luxury Catering</option>
                    <option value="Estate Cooking">Estate Cooking</option>
                    <option value="Restaurant Consulting">Restaurant Consulting</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="location">Gauteng Region</label>
                  <select id="location" name="location" value={formData.location} onChange={handleChange}>
                    <option value="Sandton">Sandton</option>
                    <option value="Johannesburg">Johannesburg</option>
                    <option value="Rosebank">Rosebank</option>
                    <option value="Fourways">Fourways</option>
                    <option value="Midrand">Midrand</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="additionalDetails">Dietary Restrictions &amp; Menu Notes</label>
                  <textarea id="additionalDetails" name="additionalDetails" rows="4" value={formData.additionalDetails} onChange={handleChange} placeholder="Allergies, event themes, or kitchen setups..." />
                </div>

                <button type="submit" className="submit-booking-btn">
                  Send Booking Inquiry
                </button>
              </form>
            </div>

            <div className="contact-info-panel">
              <h3>Cucina Matsepe</h3>
              <p>For instant media placement, corporate booking timelines, or directly arranged consultative engagements, reach out across our secure communications track.</p>
              
              <div className="social-channels-track">
                <a href="https://www.instagram.com/_cucinamatsepe?igsh=eWQ2ejE1d295aGF2&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-profile-card">
                  <span>Instagram</span>
                  <span className="social-tag">@_cucinamatsepe</span>
                </a>

                <a href="https://www.tiktok.com/@cucina_matsepe?_r=1&_t=ZS-96ifg52TSXC" target="_blank" rel="noopener noreferrer" className="social-profile-card">
                  <span>TikTok</span>
                  <span className="social-tag">@cucina_matsepe</span>
                </a>

                <a href="https://www.facebook.com/share/1HssVzNnV4/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-profile-card">
                  <span>Facebook</span>
                  <span className="social-tag">Profile</span>
                </a>

                <a href="mailto:kamogelomatsepe24@gmail.com" className="social-profile-card contact-direct">
                  <Mail size={16} />
                  <span>kamogelomatsepe24@gmail.com</span>
                </a>

                <a href="tel:+27829558407" className="social-profile-card contact-direct">
                  <Phone size={16} />
                  <span>+27 (0) 82 955 8407</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          GLOBAL FOOTER
          ========================================== */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Cucina Matsepe. All Culinary Rights Reserved.</p>
      </footer>
    </div>
  );
}