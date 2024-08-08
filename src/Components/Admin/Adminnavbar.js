import React from 'react';
import { Link } from 'react-router-dom';
import './Adminnavbar.css';
import logo from '../../Images/transparent.png';

const Adminnavbar = () => {
    return (
        <nav className="adminnavbar">
            <div className="navbar-logo">
                <img src={logo} alt="Halt & Dine Logo" className="logo" />
                <span className="restaurant-name">Halt & Dine</span>
            </div>
            <ul className="navbar-links">
                <li><Link to="/admin">Home</Link></li>
                <li><Link to="/update-menu">Update Menu</Link></li>
                <li><Link to="/view-reviews">View Reviews</Link></li>
                <li><Link to="/manage-reservations">Manage Reservations</Link></li>
            </ul>
        </nav>
    );
}

export default Adminnavbar;
  