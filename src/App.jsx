import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingsForm from './bookings/BookingsForm';
import BookingList from './bookings/BookingList';
import Cart from './Cart'; // Import the Cart component
import PaymentForm from './PaymentForm'; // Import the PaymentForm component

const App = () => {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<BookingList />} />
        <Route path="/cart" element={<Cart />} /> {/* Add the Cart route */}
        <Route path="/payment" element={<PaymentForm />} /> {/* Add the PaymentForm route */}
        {/* Add other routes here */}
      </Routes>
    </Router>
 );
};

export default App;