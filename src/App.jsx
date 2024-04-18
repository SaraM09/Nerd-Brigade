import React from 'react';
import BookingsForm from './bookings/BookingsForm';  // Adjust the path as necessary
import TechnicianForm from './technician/TechnicianForm';

const App = () => {
  // Set a static user ID for testing purposes
  // const testUserId = 1;

  return (
    <div className="App">
      <h1>Technician</h1>
      <TechnicianForm/>
    </div>
  );
};

export default App;






