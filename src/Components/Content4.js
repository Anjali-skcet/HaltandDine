import React from "react";
import "./Content4.css";
import read from "../Images/signup.jpg"
import { useNavigate } from "react-router-dom";

function ReviewsSlide() {

    const nav=useNavigate();

  const handle=()=>{
    nav("/about")
  }

    return (
        <div className="slide">
        <div className="slide">
        <div className="image-container">
        <img src={read} alt="Restaurant" className="image" />
        <div className="text-overlay">
            <h1>Customer Reviews</h1>
            <p>Read what our happy customers are saying about their dining experience with us.</p>
            <button className="reserve-button" onClick={handle}>Read Reviews</button>
            </div>
            </div>
            </div>
        </div>
    );
}

export default ReviewsSlide;