import React from "react";
import Navbar from "../Navbar";
import "./Menu.css";
import { Link } from 'react-router-dom';
import Footer from "../Footer";
import RefreshmentsSoups from "./RefreshmentsSoups";
import Starters from "./Starters";
import Meals from "./Meals";
import MainCourse from "./MainCourse";
import BiriyanisRice from "./BiriyanisRice";
import BreadsDinner from "./BreadsDinner";
import Desserts from "./Desserts";

function Menu() {
  return (
    <div>
      <Navbar />
      <div className="menusec"></div>
      <div className="menunav">
        <h1>Menu</h1>
        <ul className="list">
          <li><Link to="/home">Home &gt;</Link></li>
          <li><Link to="/menu">Menu &gt;</Link></li>
        </ul>
      </div>
      <div className="mes">
      <h3>Menu for every taste</h3>
            <p>Our diverse menu caters to every palate, offering a wide range of delicious options.</p>
      </div>
      <div className="container">
        <h1>Our Menu</h1>
        <RefreshmentsSoups />
        <Starters />
        <Meals />
        <MainCourse />
        <BiriyanisRice />
        <BreadsDinner />
        <Desserts />
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
