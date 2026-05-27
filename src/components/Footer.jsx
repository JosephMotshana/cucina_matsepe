// src/components/Footer.jsx

import React from 'react';

function Footer() {
  return (
    <footer className="main-footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Cucina Matsepe — Commercial Private Chef & Consultant.
      </p>
      <p className="footer-sub">
        Serving Johannesburg, Sandton, Rosebank, Midrand & Fourways.
      </p>
    </footer>
  );
}

export default Footer;