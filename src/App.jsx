import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingsForm from './Components/bookings/BookingsForm.jsx';
import BookingList from './Components/bookings/BookingList.jsx';
import Cart from './Components/cart/Cart.jsx'; // Import the Cart component
import PaymentForm from './Components/payments/PaymentForm.jsx'; // Import the PaymentForm component
import ProductCarousel from './Components/products/ProductsCarousel.jsx';

const App = () => {
 return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<BookingList />} />
    //     <Route path="/cart" element={<Cart />} /> {/* Add the Cart route */}
    //     <Route path="/payment" element={<PaymentForm />} /> {/* Add the PaymentForm route */}
    //     {/* Add other routes here */}
    //   </Routes>
    // </Router>
    <ProductCarousel />
 );
};

export default App;