import React from 'react';
import '../Components/Home.css'; // Importing the CSS file for styling
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation
import logo from '../Images/crop.png'; // Importing the logo image

function Home() {

    const nav = useNavigate(); // Initializing useNavigate hook for navigation

    // Function to navigate to the login page
    const handleLogin = () => {  
        nav("/login")
    }

    // Function to navigate to the signup page
    const handleSignup = () => {
        nav("/signup")
    }  

    return (
        <div className="home-container">
            {/* Logo Image */}
            <img src={logo} className="logoimage" style={{height:"150px",width:"150px",borderRadius:"50%"}} alt="Halt & Dine Logo" />
            {/* Main heading */}
            <h1>Welcome to Halt & Dine</h1>
            {/* Restaurant brief description */}
            <div id="restaurant-desc">
                <p>Dine with Us and Experience Culinary Delight!</p>
            </div>
            {/* Detailed restaurant description */}
            <div id="restaurant-description">
                <p>Halt & Dine is a distinguished culinary destination that promises an extraordinary dining experience. Nestled in the heart of the city, our restaurant combines contemporary elegance with a cozy ambiance, creating the perfect setting for any occasion. Our chefs are passionate about crafting exquisite dishes that highlight the finest seasonal ingredients, ensuring every bite is a delightful journey of flavors. With an extensive menu featuring innovative cuisine and classic favorites, complemented by a curated selection of wines and handcrafted cocktails, Halt & Dine is dedicated to delivering exceptional service and unforgettable moments. Whether you're celebrating a special event or enjoying a casual meal with friends, we invite you to savor the culinary delights that await at Halt & Dine.</p>
            </div>
            {/* Login button */}
            <button onClick={handleLogin} className='but'>Login</button>
            {/* Sign up button */}
            <button style={{marginLeft:"20px"}} onClick={handleSignup} className='but'>Sign Up</button>
        </div>
    );
}

export default Home;
