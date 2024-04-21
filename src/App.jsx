import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductCarousel from './Components/products/ProductsCarousel'; 
import Cart from './Components/cart/Cart'; 
import Profile from './Components/profile/Profile'; 
import PaymentForm from './Components/payments/PaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './App.css';

// Load Stripe outside of components to avoid recreating the Stripe object on every render
const stripePromise = loadStripe('your_stripe_publishable_key_here');

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductCarousel />} />  
        <Route path="/profile" element={<Profile />} />  
        <Route path="/cart" element={<Cart />} />  
        <Route path="/payment" element={
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        } /> 
      </Routes>
    </Router>
  );
}

export default App;


