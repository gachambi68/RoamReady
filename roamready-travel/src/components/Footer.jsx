import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <h3 class="footer-heading">RoamReady</h3>
          <p class="footer-text">Making travel simple, memorable, and exciting.</p>
        </div>
        <div>
          <h4 class="footer-heading">Quick Links</h4>
          <ul class="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Tours</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-heading">Resources</h4>
          <ul class="footer-links">
            <li><a href="#">Travel Blog</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Travel Tips</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-heading">Connect</h4>
          <ul class="footer-links">
            <li><a href="#">Email: hello@roamready.com</a></li>
            <li><a href="#">Phone: (555) 987-6543</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 RoamReady. All rights reserved.</p>
      </div>
    </div>

    </footer>
  );
};

export default Footer;