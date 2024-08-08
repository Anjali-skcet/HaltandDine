import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Images/crop.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Halt & Dine Logo" className="logo" />
                <span className="restaurant-name">Halt & Dine</span>
            </div>
            <ul className="navbar-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/about" className='about'>About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
  