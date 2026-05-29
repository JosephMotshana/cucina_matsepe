// src/pages/Contact.jsx

import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

// 📷 Brand Match Instagram SVG Vector
const InstagramIcon = ({ size = 18 }) => (
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
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// 🎵 Brand Match TikTok SVG Vector
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

// 👥 Brand Match Facebook SVG Vector
const FacebookIcon = ({ size = 18 }) => (
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
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
            
            <a href="https://www.instagram.com/_cucinamatsepe?igsh=eWQ2ejE1d295aGF2&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-profile-card">
              <InstagramIcon size={18} /> @_cucinamatsepe
            </a>

            <a href="https://www.tiktok.com/@cucina_matsepe?_r=1&_t=ZS-96ifg52TSXC" target="_blank" rel="noopener noreferrer" className="social-profile-card">
              <TikTokIcon size={18} /> @cucina_matsepe
            </a>

            <a href="https://www.facebook.com/share/1HssVzNnV4/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-profile-card">
              <FacebookIcon size={18} /> Facebook Profile
            </a>

            <a href="mailto:kamogelomatsepe24@gmail.com" className="social-profile-card">
              <Mail size={18} strokeWidth={2} /> kamogelomatsepe24@gmail.com
            </a>

            <a href="tel:+27829558407" className="social-profile-card">
              <Phone size={18} strokeWidth={2} /> +27 (0) 82 955 8407
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;