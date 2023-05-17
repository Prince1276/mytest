import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media-icons">
            <a href="https://facebook.com/"><FaFacebook /></a>
            <a href="https://twitter.com/"><FaTwitter /></a>
            <a href="https://www.instagram.com/"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <p className="footer-text">&copy; 2023 Your Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
