import React from "react";
import Navbar from "./Navbar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";
import "./About.css";
import Footer from "./Footer";

function About(){
    return(
        <div>
            <Navbar/> 
            <div className="aboutsec"></div>
            <div className="aboutnav">
                <h1>About Us</h1>
                <ul className="aboutlist">
                    <li><Link to="/home">Home &gt;</Link></li>
                    <li><Link to="/about">About Us &gt;</Link></li>
                </ul>
            </div>
            <div>
    <div className="about-us">
      <section className="intro">
        <h1>About Us</h1>
        <p>
          Welcome to our restaurant, where we serve delicious food with fresh ingredients. Our chefs are passionate about creating unique dishes that will tantalize your taste buds. Come dine with us and experience the best in culinary delights.
        </p>
      </section>

      <section className="features">
        <h2>Why people choose us?</h2>
        <p>Experience the perfect blend of delicious food and good fortune at Fork and Fortune!</p>
        <br></br>
        <br></br>
        <div className="feature-cards">
          <div className="feature-card"> 
            <i className="fas fa-utensils"></i>
            <h3>Menu for every taste</h3>
            <p>Our diverse menu caters to every palate, offering a wide range of delicious options.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-seedling"></i>
            <h3>Always fresh ingredients</h3>
            <p>We pride ourselves on using only the freshest ingredients to ensure the highest quality in every dish.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-user"></i>
            <h3>Experienced chefs</h3>
            <p>Our skilled chefs bring years of culinary expertise to create exceptional dining experiences.</p>
          </div>
        </div>
      </section>
    </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About;