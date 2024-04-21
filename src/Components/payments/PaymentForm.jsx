import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
        base: {
            iconColor: '#c4f0ff',
            color: '#fff', // Ensure this color is visible against the card's background
            fontWeight: 500,
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            ':-webkit-autofill': { color: '#fce883' },
            '::placeholder': { color: '#87bbfd' },
            backgroundColor: '#333', // Ensuring a contrasting background
        },
        invalid: {
            iconColor: '#ffc7ee',
            color: '#ffc7ee'
        }
    }
};


const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const cardElement = elements.getElement(CardElement);

        if (!stripe || !elements || !cardElement) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            console.error("Stripe.js has not loaded yet!");
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log(error.message);
        } else {
            const { id } = paymentMethod;
            try {
                const response = await axios.post('http://localhost:1119/payment', {
                    amount: 1000,  // Example amount in cents
                    id
                });
                if (response.data.success) {
                    console.log("Successful payment");
                    setSuccess(true);
                    // Redirect to a success page
                    navigate('/success');
                }
            } catch (error) {
                console.error("Payment failed", error.response.data);
            }
        }
    };

    return (
        <>
        <h1 className="title display-4 mb-3">Stripe Checkout</h1> 
        {!success ? (
            <form onSubmit={handleSubmit}>
                <fieldset className="FormGroup">
                    <div className="FormRow mb-3"> 
                        <CardElement options={CARD_OPTIONS} />
                    </div>
                </fieldset>
                <button type="submit" className="btn btn-primary " disabled={!stripe}>Pay</button>
            </form>
        ) : (
            <div className="alert alert-success" role="alert"> 
                <h2 className="alert-heading">You have successfully paid</h2>
            </div>
        )}
    </>
    
    );
};

export default PaymentForm;
