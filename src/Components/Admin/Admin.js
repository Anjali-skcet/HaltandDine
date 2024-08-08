import React from 'react';
import './Admin.css'; 
import bg from '../../Images/transparent.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faStar, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Adminnavbar from './Adminnavbar';

const OwnerLandingPage = () => {
  return (
    <div className="owner-landing-page">
    <Adminnavbar/>
      <img src={bg} style={{height:"150px",width:"150px",marginLeft:"700px",marginTop:"20px",backgroundColor:"#ebbb55",borderRadius:"50%"}} alt="Logo"></img>
      <br></br>
      <br></br>
      <div className="header">
        <h1>Manage your restaurant with ease.</h1>
      </div>

      <section className="dashboard">
        <div className="dashboard-item">
          <FontAwesomeIcon icon={faUtensils} size="3x" color="#ebbb55" />
          <br/><br/>
          <h2>Update Menu</h2>
          <p>Modify your restaurant’s menu items and prices.</p>
          <a href="/update-menu" className="cta-button">Update Menu</a>
        </div>
        <div className="dashboard-item">
          <FontAwesomeIcon icon={faStar} size="3x" color="#ebbb55" />
          <br/>
          <br/>
          <h2>View Reviews</h2>
          <p>Check the latest customer reviews and feedback.</p>
          <a href="/view-reviews" className="cta-button">View Reviews</a>
        </div>
        <div className="dashboard-item">
          <FontAwesomeIcon icon={faCalendarAlt} size="3x" color="#ebbb55" />
          <br/><br/>
          <h2>Manage Reservations</h2>
          <p>See upcoming reservations and manage them.</p>
          <a href="/manage-reservations" className="cta-button">Manage Reservations</a>
        </div>
      </section>
    </div>
  );
};

export default OwnerLandingPage;
