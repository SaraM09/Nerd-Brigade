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
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import BookingForm from './Components/bookings/BookingsForm'; // Adjust the path and component name as necessary
// import BookingList from './Components/bookings/BookingList'; // Adjust the path and component name as necessary
// import Cart from './Components/cart/Cart'; // Adjust the path as necessary
// import PaymentForm from './Components/payments/PaymentForm'; // Adjust the path as necessary
// import ProductCarousel from './Components/products/ProductsCarousel'; // Adjust the path and component name as necessary
// import './App.css';
// import UserForm from './Components/userForm/UserForm'; // Adjust the path as necessary
// import TechnicianForm from './Components/technician/technicianForm'; // Adjust the path and component name as necessary
// import NavbarDropdown from './navbar/NavbarDropdown'; // Adjust the path as necessary
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Nav, NavDropdown } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';

// const App = () => {
//  return (
//     <Router>
//        <ProductCarousel />
//        <BookingForm />
//       <NavbarDropdown >   
//       <Routes>
//         <Route path="/" element={<BookingList />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/payment" element={<PaymentForm />} /> */
//         <Route path="/products" element={<ProductCarousel />} />
//         {/* {/* <Route path="/bookings" element={<BookingForm />} /> */}
//         <Route path="/user" element={<UserForm />} />
//         <Route path="/technician" element={<TechnicianForm />} />
//       </Routes>
//       // </NavbarDropdown>
//             {/* Add more NavDropdown.Item for additional routes */}
       
//     </Router>
//  );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import BookingForm from './Components/bookings/BookingsForm'; // Adjust the path and component name as necessary
import BookingList from './Components/bookings/BookingList'; // Adjust the path and component name as necessary
import Cart from './Components/cart/Cart'; // Adjust the path as necessary
import PaymentForm from './Components/payments/PaymentForm'; // Adjust the path as necessary
import ProductCarousel from './Components/products/ProductsCarousel'; // Adjust the path and component name as necessary
import './App.css';
import UserForm from './Components/userForm/UserForm'; // Adjust the path as necessary
import TechnicianForm from './Components/technician/technicianForm'; // Adjust the path and component name as necessary
import { Nav, NavDropdown } from 'react-bootstrap';

const NavbarDropdown = () => {
    return (
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/">Homepage</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/cart">Cart</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/payment">Payment</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/products">Products</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/user">User Form</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/technician">Technician Form</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/booking">Booking Form</NavDropdown.Item>
        </NavDropdown>
    );
};

const App = () => {
    return (
        <Router>
          <BookingList />
           <ProductCarousel />
            <NavbarDropdown />
            <Routes>
                <Route path="/" element={<BookingList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment" element={<PaymentForm />} />
                <Route path="/products" element={<ProductCarousel />} />
                <Route path="/user" element={<UserForm />} />
                <Route path="/technician" element={<TechnicianForm />} />
                <Route path="/booking" element={<BookingForm />} />
            </Routes>
        </Router>
    );
};

export default App;