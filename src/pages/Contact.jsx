// src/pages/Contact.jsx

import React, { useState } from 'react';
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

// Custom, mobile-responsive TikTok SVG component to match lucide styles
const TikTokIcon = ({ size = 18 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

function Contact() {
  const [inputs, setInputs] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="portfolio-container">
      <div className="services-intro">
        <h1 className="page-title">Direct Inquiries</h1>
        <p>Connect directly with Cucina Matsepe to discuss consulting engagements or custom corporate media bookings.</p>
      </div>

      <div className="contact-layout-grid">
        
        {/* Left Side: Formspree Contact Form */}
        <div className="booking-container" style={{ margin: 0, maxWidth: '100%' }}>
          <form 
            action="https://formspree.io/f/mykvnaly" 
            method="POST"
            className="chef-booking-form"
          >
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input 
                type="text" id="fullName" name="fullName" required
                value={inputs.fullName} onChange={handleInputChange} placeholder="Lerato Khumalo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Contact Number</label>
              <input 
                type="tel" id="phone" name="phone" required
                value={inputs.phone} onChange={handleInputChange} placeholder="082 123 4567"
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" id="email" name="_replyto" required
                value={inputs.email} onChange={handleInputChange} placeholder="lerato@domain.co.za"
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" name="message" rows="6" required
                value={inputs.message} onChange={handleInputChange}
                placeholder="How can Chef Kamogelo assist with your upcoming culinary plans?"
              />
            </div>

            <button type="submit" className="submit-booking-btn full-width">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Media Profiles Info Deck */}
        <div className="contact-info-panel">
          <h3>Cucina Matsepe</h3>
          <p>
            For real-time updates, culinary inspirations, behind-the-scenes masterclasses, 
            and event snapshots, follow Chef Kamogelo Matsepe across his official networks.
          </p>

          {/* Social Icons Interactive Track Layout */}
          <div className="social-channels-track">
            
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-profile-card">
              <Instagram size={18} strokeWidth={2} /> Instagram
            </a>

            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-profile-card">
              <TikTokIcon size={18} /> TikTok
            </a>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-profile-card">
              <Facebook size={18} strokeWidth={2} /> Facebook
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-profile-card">
              <Linkedin size={18} strokeWidth={2} /> LinkedIn
            </a>

            <a href="mailto:info@cucinamatsepe.co.za" className="social-profile-card">
              <Mail size={18} strokeWidth={2} /> Direct Email
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;