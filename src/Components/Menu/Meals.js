import React from "react";
import "./MenuSection.css";

function Meals() {
  return (
    <div className="menu-section">
      <h2>Meals</h2>
      <div className="menu-item">
        <h3>Grilled Chicken Salad</h3>
        <p>$10.99</p>
      </div>
      <div className="menu-item">
        <h3>Veggie Wrap</h3>
        <p>$8.99</p>
      </div>
    </div>
  );
}

export default Meals;
