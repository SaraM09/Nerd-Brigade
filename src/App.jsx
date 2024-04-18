import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingsForm from './bookings/BookingsForm';
import BookingList from './bookings/BookingList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookingList />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;