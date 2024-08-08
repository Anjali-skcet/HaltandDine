import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./Contact.css";
import Write from "./Write";
import Footer from "./Footer";

function Contact(){
    return(
        <div>
            <Navbar/>
            <div className="contactsec"></div>
            <div className="contactnav">
                <h1>Contact Us</h1>
                <ul className="contactlist">
                    <li><Link to="/home">Home &gt;</Link></li>
                    <li><Link to="/contact">Contact Us &gt;</Link></li>
                </ul>
            </div>
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Do you have any questions? Feel free to reach out to us for any inquiries or assistance you may need.</p>
      <br></br>
      <div className="contact-details">
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <h3>Write Us</h3>
          <p>info@forkandfortune.com</p>
          <p>reservation@forkandfortune.com</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <h3>Call Us</h3>
          <p>+91 97586 24356</p>
          <p>+91 67498 23547</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Visit Us</h3>
          <p>Kuniyamuthur, Coimbatore</p>
          <p> Tamil Nadu - 641 005</p> 
        </div>
      </div>
    </div>
    <Write/>
    <Footer/>
        </div>
    )
}

export default Contact;