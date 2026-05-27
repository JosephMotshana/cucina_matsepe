// src/features/booking/BookingForm.jsx

import React, { useState } from 'react';
import '../portfolio/features.css'; // Keeps everything uniform using our brand color tokens

function BookingForm() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="booking-container">
      <div className="booking-header">
        <h2>Secure Your Date</h2>
        <p>Bring restaurant-quality culinary excellence directly to your table</p>
      </div>

      {/* Formspree Integrated Form Element */}
      <form 
        className="chef-booking-form" 
        action="https://formspree.io/f/mykvnaly" 
        method="POST" 
        encodeType="multipart/form-data" /* Enables secure image/document attachment transfer */
      >
        
        {/* Customer Basic Info */}
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input 
            type="text" id="fullName" name="fullName" required
            value={formData.fullName} onChange={handleChange} placeholder="e.g. Lerato Khumalo"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" id="email" name="_replyto" required /* Formspree natively uses _replyto for easy dashboard replies */
            value={formData.email} onChange={handleChange} placeholder="lerato@domain.co.za"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Contact Number</label>
          <input 
            type="tel" id="phone" name="phone" required
            value={formData.phone} onChange={handleChange} placeholder="082 123 4567"
          />
        </div>

        {/* Calendar Selection */}
        <div className="form-group">
          <label htmlFor="eventDate">Preferred Date</label>
          <input 
            type="date" id="eventDate" name="eventDate" required
            value={formData.eventDate} onChange={handleChange}
          />
        </div>

        {/* Dropdowns Mapped precisely to Chef Kamogelo's Services */}
        <div className="form-group">
          <label htmlFor="serviceType">Culinary Service</label>
          <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange}>
            <option value="Bespoke Dining">Bespoke Dining (Indoor Dates)</option>
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
          <label htmlFor="guestCount">Estimated Guest Count</label>
          <input 
            type="number" id="guestCount" name="guestCount" min="1" required
            value={formData.guestCount} onChange={handleChange} placeholder="e.g. 2 for Indoor Dates, 50 for Catering"
          />
        </div>

        {/* 🌟 The Custom File Upload Element */}
        <div className="form-group full-width">
          <label htmlFor="upload">Attach Inspiration or Kitchen Layout Photos (Optional)</label>
          <input 
            type="file" id="upload" name="upload" className="file-upload-input"
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="additionalDetails">Dietary Restrictions & Special Menu Notes</label>
          <textarea 
            id="additionalDetails" name="additionalDetails" rows="4"
            value={formData.additionalDetails} onChange={handleChange} 
            placeholder="Please detail allergies, theme preferences, or kitchen specifications..."
          />
        </div>

        <button type="submit" className="submit-booking-btn full-width">
          Send Booking Inquiry
        </button>

      </form>
    </div>
  );
}

export default BookingForm;