import React from 'react';
import './Content1.css';
import table from "../Images/table.jpg";
import { useNavigate } from 'react-router-dom';

const ImageWithText = () => {

  const nav=useNavigate();

  const handle=()=>{
    nav("/reservations")
  }

  return (
    <div className='slide'>
        <div className="image-container">
            <img src={table} alt="Restaurant" className="image" />
            <div className="text-overlay">
                <h1>Book a Table</h1>
                <p>Reserve your spot at our restaurant and enjoy a delightful dining experience.</p>
                <button className="reserve-button" onClick={handle}>Reserve Now</button>
            </div>
        </div>
    </div>
  );
};

export default ImageWithText;