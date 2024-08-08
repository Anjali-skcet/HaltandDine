import React from "react";
import menu from "../Images/menu.jpg";
import "./Content2.css";
import { useNavigate } from "react-router-dom";

function MenuSlide() {

    const nav=useNavigate();

  const handle=()=>{
    nav("/menu")
  }

    return (
        <div className="slide">
        <div className="image-container">
        <img src={menu} alt="Restaurant" className="image" />
        <div className="text-overlay">
            <h1>Explore Our Menu</h1>
            <p>Discover our wide range of delicious dishes crafted to satisfy every palate.</p>
            <button className="reserve-button" onClick={handle}>View Menu</button>
            </div>
            </div>
        </div>
    );
}

export default MenuSlide;