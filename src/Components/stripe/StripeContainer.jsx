import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
if (!PUBLIC_KEY) {
  console.error('Stripe public key not found. Check your environment variables.');
}

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
};

export default StripeContainer;

