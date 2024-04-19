import React from 'react';
import BookingsForm from './bookings/BookingsForm';  // Adjust the path as necessary

const App = () => {
  // Set a static user ID for testing purposes
  const testUserId = 1;

  return (
    <div className="App">
      <h1>Booking Form Test</h1>
      <BookingsForm userId={testUserId} />
    </div>
  );
};

export default App;






