import React from 'react';
import './Viewreview.css'; 

const reviews = [
  { id: 1, author: 'John Doe', review: 'Excellent food and service!' },
  { id: 2, author: 'Jane Smith', review: 'The ambiance was great, but the service was slow.' },
  // Add more reviews as needed
];

const ViewReviews = () => {
  return (
    <div className="view-reviews">
      <h1>View Reviews</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewReviews;
