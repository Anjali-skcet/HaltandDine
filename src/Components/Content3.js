import React from "react";
import orderonline from "../Images/orderonline.jpg";
import "./Content3.css";
import { useNavigate } from "react-router-dom";

function OrderOnlineSlide() {

    const nav=useNavigate();

  const handle=()=>{
    nav("/order")
  }

    return (
        <div className="slide">
        <div className="image-container">
        <img src={orderonline} alt="Restaurant" className="image" />
        <div className="text-overlay">
            <h1>Order Online</h1>
            <p>Craving our food at home? Place your order online and enjoy our dishes in the comfort of your home.</p>
            <button className="reserve-button" onClick={handle}>Order Now</button>
            </div>
            </div>
        </div>
    );
}

export default OrderOnlineSlide;