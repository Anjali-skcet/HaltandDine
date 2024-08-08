import React from "react";
import "./MenuSection.css";

function Desserts() {
  return (
    <div className="menu-section">
      <h2>Desserts</h2>
      <div className="menu-item">
        <h3>Chocolate Cake</h3>
        <p>$6.99</p>
      </div>
      <div className="menu-item">
        <h3>Ice Cream</h3>
        <p>$4.99</p>
      </div>
    </div>
  );
}

export default Desserts;
