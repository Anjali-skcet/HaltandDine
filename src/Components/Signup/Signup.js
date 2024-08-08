import React, { useState } from 'react';
import './Signup.css';
import logo from '../../Images/Forkanfortune.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { createuser } from '../../Services/service';

const Signup = () => {

  // React state hooks for name, email, password, and error messages
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // useNavigate hook for navigation
  const nav = useNavigate();

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    if (!name || !email || !password) {
      setError('Please fill in all fields.'); // Sets error if any field is empty
    } else {
      setError(''); // Clears error
      const user = { name, email, password }; // Creates user object
      try {
        console.log("Signed in: ", { name, email, password });
        const response = await createuser(user); // Makes API call to backend
        console.log(response.data);
        nav("/home"); // Navigate to home page on success
      } catch (error) {
        console.error(error);
        setError('An error occurred. Please try again.'); // Sets error if API call fails
      }
    }
  };


  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="logo-container">
          <img src={logo} alt="Halt & Dine Logo" className="logo" />
        </div>
        <h2 style={{fontSize:"32px"}}>Restaurant Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="username">
              <FontAwesomeIcon icon={faUser} /> Username:
            </label>
            <input
              type="text"
              id="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} /> Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <FontAwesomeIcon icon={faLock} /> Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit" className="btn">Sign Up</button>
        </form>
        <div className="login-option">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;