import React, { useState } from 'react';
import './Managereservations.css'; 

const reservations = [
  { id: 1, name: 'Alice Johnson', time: '2024-08-10 19:00', status: 'Pending' },
  { id: 2, name: 'Bob Brown', time: '2024-08-11 20:00', status: 'Confirmed' },
  // Add more reservations as needed
];

const ManageReservations = () => {
  const [reservationList, setReservationList] = useState(reservations);

  const handleAccept = (id) => {
    setReservationList(reservationList.map(reservation =>
      reservation.id === id ? { ...reservation, status: 'Confirmed' } : reservation
    ));
  };

  const handleReject = (id) => {
    setReservationList(reservationList.map(reservation =>
      reservation.id === id ? { ...reservation, status: 'Rejected' } : reservation
    ));
  };

  return (
    <div className="manage-reservations">
      <h1>Manage Reservations</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservationList.map(reservation => (
            <tr key={reservation.id}>
              <td>{reservation.name}</td>
              <td>{reservation.time}</td>
              <td>{reservation.status}</td>
              <td>
                {reservation.status === 'Pending' && (
                  <>
                    <button onClick={() => handleAccept(reservation.id)}>Accept</button>
                    <button onClick={() => handleReject(reservation.id)}>Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageReservations;
