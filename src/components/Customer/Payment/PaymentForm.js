import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Payment from './Payment';

require('dotenv').config();

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);

const PaymentForm = ({ handlePayment }) => (
    <Elements stripe={stripePromise}>
        <Payment handlePayment={handlePayment} />
    </Elements>
);

export default PaymentForm;
