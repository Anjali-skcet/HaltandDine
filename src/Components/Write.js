import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Write.css'; // Import the CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data:', formData);
  };

  return (
    <div className="contact-form">
      <h2>Write us a message</h2>
      <p>We'd love to hear from you! Please take a moment to write us a detailed message so we can better understand your thoughts, questions, or feedback. Your input is invaluable to us and helps us improve our services and offerings.</p>
      <form onSubmit={handleSubmit}>
        <div className="group">
          <div className="input-icon">
            <i className="fas fa-user"></i>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-icon">
            <i className="fas fa-user"></i>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="group">
          <div className="input-icon">
            <i className="fas fa-phone"></i>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-icon">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="group">
          <div className="input-icon">
            <i className="fas fa-pencil-alt"></i>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        <button className="button" type="submit">Send a Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
