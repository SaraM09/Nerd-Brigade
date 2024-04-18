import React, { useState } from 'react';
import BookingForm from '../bookings/BookingsForm';
const App = () => {
  const [userId, setUserId] = useState('123');  // Example user ID
  return (
    <div>
      <h1>Booking System</h1>
      <BookingForm userId={userId} />
    </div>
  );
};
export default App;






