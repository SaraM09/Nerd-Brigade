import React, { useState, useEffect } from 'react';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch bookings data from the backend when the component mounts
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:1119/bookings');
      if (!response.ok) {
        throw new Error('Failed to fetch bookings.');
      }
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Booking List</h2>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>
              <div>
                <h3>Booking ID: {booking.id}</h3>
                <p>Service Type: {booking.serviceType}</p>
                <p>Status: {booking.status}</p>
                <p>Scheduled Date: {booking.scheduledDate}</p>
                {/* Add more details as needed */}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings available.</p>
      )}
    </div>
  );
};

export default BookingList;