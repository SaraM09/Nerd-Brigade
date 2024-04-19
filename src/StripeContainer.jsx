import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';


const PUBLIC_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () => {
  


    return (
      <Elements stripe={stripeTestPromise}> 
      
         <PaymentForm />
      </Elements>
    );
}

export default StripeContainer;
