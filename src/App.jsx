// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import BookingsForm from './Components/bookings/BookingsForm.jsx';
// import BookingList from './Components/bookings/BookingList.jsx';
// import Cart from './Components/cart/Cart.jsx'; // Import the Cart component
// import PaymentForm from './Components/payments/PaymentForm.jsx'; // Import the PaymentForm component
// import ProductCarousel from './Components/products/ProductsCarousel.jsx';
// import './App.css';

// const App = () => {
//  return (
   
//     <Router>
//       <Routes>
//         <Route path="/" element={<BookingList />} />
//         <Route path="/cart" element={<Cart />} /> {/* Add the Cart route */}
//         <Route path="/payment" element={<PaymentForm />} /> {/* Add the PaymentForm route */}
//         {/* Add other routes here */}
//       </Routes>
//     </Router>
   
    
//  );
// };

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import BookingsForm from './Components/bookings/BookingsForm.jsx';
// import BookingList from './Components/bookings/BookingList.jsx';
// import Cart from './Components/cart/Cart.jsx';
// import PaymentForm from './Components/payments/PaymentForm.jsx';
// import ProductCarousel from './Components/products/ProductsCarousel.jsx';
// import './App.css';
// // import { AuthProvider } from './Context/AuthContext/AuthContext';
// // import { AuthService } from './Context/AuthService/AuthService';
// // import { AuthContext } from './Context/AuthContext/AuthContext';
// import UserForm from './Components/userForm/UserForm.jsx';
// import TechnicianForm from './Components/technician/technicianForm.jsx';
// import NavbarDropdown from './Components/navbar/NavbarDropdown.jsx';

// const App = () => {
//  return (
//     <Router>
//       <NavbarDropdown />
//       <Routes>
//         <Route path="/" element={<BookingList />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/payment" element={<PaymentForm />} />
//         <Route path="/products" element={<ProductCarousel />} />
//         <Route path="/bookings" element={<BookingsForm />} />
//         <Route path="/user" element={<UserForm />} />
//         <Route path="/technician" element={<TechnicianForm />} /> {/* Added route for TechnicianForm */}
//       </Routes>
//     </Router>
//  );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingForm from './Components/bookings/BookingsForm'; // Adjust the path and component name as necessary
import BookingList from './Components/bookings/BookingList'; // Adjust the path and component name as necessary
import Cart from './Components/cart/Cart'; // Adjust the path as necessary
import PaymentForm from './Components/payments/PaymentForm'; // Adjust the path as necessary
import ProductCarousel from './Components/products/ProductsCarousel'; // Adjust the path and component name as necessary
import './App.css';
import UserForm from './Components/userForm/UserForm'; // Adjust the path as necessary
import TechnicianForm from './Components/technician/technicianForm'; // Adjust the path and component name as necessary
import NavbarDropdown from './navbar/NavbarDropdown'; // Adjust the path as necessary

const App = () => {
 return (
    <Router>
      <NavbarDropdown />
      <Routes>
        <Route path="/" element={<BookingList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/products" element={<ProductCarousel />} />
        <Route path="/bookings" element={<BookingForm />} />
        <Route path="/user" element={<UserForm />} />
        <Route path="/technician" element={<TechnicianForm />} />
      </Routes>
    </Router>
 );
};

export default App;