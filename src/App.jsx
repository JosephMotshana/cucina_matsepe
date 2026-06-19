import React, { useState } from 'react';
import { ChefHat, Calendar, Sparkles, Award, Mail, Menu, X } from 'lucide-react';
import './index.css'; // Global CSS theme injection

export default function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'Bespoke Dining',
    location: 'Johannesburg',
    eventDate: '',
    guestCount: '',
    additionalDetails: ''
  });

  // Mobile navigation menu toggle state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ==========================================
  // DIRECTORY FILE MAPS
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
          <a href="#home" className="nav-brand-logo-link">
            <img src="/cucina.PNG" alt="Cucina Matsepe Logo" className="nav-brand-logo" />
          </a>

          {/* Hamburger Icon Toggle Button (Visible on Mobile Only) */}
          <button 
            className="mobile-hamburger-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          
          {/* Navigation Link Stack */}
          <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a></li>
            <li><a href="#book" onClick={() => setIsMobileMenuOpen(false)}>Booking &amp; Contact</a></li>
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

          <div className="events-collage-track">
            
            {/* DECK 1: PORSCHE EVENT */}
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

            {/* DECK 2: GALENTINE'S DAY */}
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

            {/* DECK 3: MOTHER'S DAY */}
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

            {/* DECK 4: RESTAURANT CONSULTING */}
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
                    <option value="Johannesburg">Johannesburg</option>
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
                {/* Instagram Profile Card (Inline SVG fixed) */}
                <a href="https://www.instagram.com/_cucinamatsepe?igsh=eWQ2ejE1d295aGF2&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-profile-card">
                  <div className="social-card-left">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon-brand">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span>Instagram</span>
                  </div>
                  <span className="social-tag">@_cucinamatsepe</span>
                </a>

                {/* TikTok Profile Card (Inline SVG fixed) */}
                <a href="https://www.tiktok.com/@cucina_matsepe?_r=1&_t=ZS-96ifg52TSXC" target="_blank" rel="noopener noreferrer" className="social-profile-card">
                  <div className="social-card-left">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="social-icon-brand">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.03 1.6 4.17 1.12 1.32 2.73 2.15 4.43 2.4v3.91c-1.52-.07-3.01-.58-4.26-1.46-.42-.3-.8-.64-1.14-1.02V14.5c0 1.94-.48 3.84-1.4 5.48-1.2 2.12-3.3 3.65-5.69 4.02-2.58.4-5.26-.38-7.22-2.11C.76 20.15-.22 17.37.04 14.59c.28-3.04 2.12-5.78 4.93-6.96.86-.36 1.77-.55 2.71-.57V11c-.96.04-1.92.36-2.7 1-.95.78-1.45 2-1.37 3.22.07 1.15.65 2.22 1.57 2.91.95.7 2.16.92 3.29.58 1.1-.33 1.98-1.2 2.36-2.28.15-.43.21-.88.21-1.33V.02z"/>
                    </svg>
                    <span>TikTok</span>
                  </div>
                  <span className="social-tag">@cucina_matsepe</span>
                </a>

                {/* Facebook Profile Card (Inline SVG fixed) */}
                <a href="https://www.facebook.com/share/1HssVzNnV4/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-profile-card">
                  <div className="social-card-left">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="social-icon-brand">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </div>
                  <span className="social-tag">Profile</span>
                </a>

                {/* Email Direct Contact */}
                <a href="mailto:kamogelomatsepe24@gmail.com" className="social-profile-card contact-direct">
                  <div className="social-card-left">
                    <Mail size={16} />
                    <span>Email Us</span>
                  </div>
                  <span>kamogelomatsepe24@gmail.com</span>
                </a>

                {/* WhatsApp Link Direct Contact */}
                <a href="https://wa.me/27829558407" target="_blank" rel="noopener noreferrer" className="social-profile-card contact-direct whatsapp-highlight">
                  <div className="social-card-left">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="whatsapp-icon-inline">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.288 1.479 5.357 1.48 5.46-.002 9.902-4.445 9.905-9.906.002-2.646-1.02-5.133-2.877-6.99C17.172 1.882 14.685.86 12.035.86c-5.463 0-9.903 4.445-9.907 9.908-.001 2.124.565 3.708 1.573 5.335L2.694 22.026l6.113-1.605zM17.467 14.3c-.326-.163-1.93-.953-2.229-1.062-.299-.109-.517-.163-.734.163-.217.326-.842 1.062-1.032 1.28-.19.218-.38.245-.706.082-.326-.163-1.378-.508-2.625-1.622-.969-.865-1.624-1.934-1.814-2.26-.19-.326-.02-.503.143-.665.147-.146.326-.38.489-.571.163-.19.217-.326.326-.543.109-.218.054-.408-.027-.571-.082-.163-.734-1.768-1.006-2.423-.265-.636-.534-.55-.734-.56c-.19-.01-.408-.01-.625-.01-.217 0-.571.082-.87.408-.299.326-1.142 1.115-1.142 2.719 0 1.604 1.169 3.154 1.332 3.372.163.217 2.301 3.513 5.574 4.927.778.337 1.387.538 1.86.689.782.248 1.493.213 2.055.129.626-.093 1.93-.789 2.199-1.55.27-.762.27-1.414.19-1.551-.08-.137-.298-.218-.624-.381z" />
                    </svg>
                    <span>WhatsApp</span>
                  </div>
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