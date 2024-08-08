import React from "react";
import "./MenuSection.css";

function MainCourse() {
  return (
    <div className="menu-section">
      <h2>Main Course</h2>
      <div className="menu-item">
        <h3>Steak</h3>
        <p>$19.99</p>
      </div>
      <div className="menu-item">
        <h3>Salmon</h3>
        <p>$17.99</p>
      </div>
    </div>
  );
}

export default MainCourse;
