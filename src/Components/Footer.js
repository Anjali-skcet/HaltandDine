import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p><i className="fas fa-map-marker-alt"></i> Kuniyamuthur, Coimbatore</p>
          <p style={{marginLeft:"25px"}}>Tamil Nadu - 641 005</p>
          <p><i className="fas fa-phone"></i> Call +91 97586 24356</p>
          <p><i className="fas fa-envelope"></i> info@forkandfortune.com</p>
        </div>
        <div className="footer-column">
          <h3>Halt & Dine</h3>
          <p>Relish exceptional flavors and embrace the luck that comes with every bite !</p>
          {/*<div className="social-icons">
            <a><i className="fab fa-facebook-f"></i></a>
            <a><i className="fab fa-twitter"></i></a>
            <a><i className="fab fa-linkedin-in"></i></a>
            <a><i className="fab fa-instagram"></i></a>
            <a><i className="fab fa-pinterest"></i></a>
          </div>*/}
        </div>
        <div className="footer-column">
          <h3>Opening Hours</h3>
          <p>Everyday</p>
          <p>10:00 AM - 10:00 PM</p>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </footer>
  );
};

export default Footer;
