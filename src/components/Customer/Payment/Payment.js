/* eslint-disable react/no-unescaped-entities */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Payment = ({ handlePayment }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handlePayment(paymentMethod.id);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit} style={{ margin: '20px 50px', padding: '0 40px' }}>
                <CardElement className="form-control" />
                <br />
                <Button variant="outline-primary" className="px-5" type="submit" disabled={!stripe}>
                    Pay
                </Button>
            </form>
            {paymentError && (
                <p className="text-center" style={{ color: 'red' }}>
                    {paymentError}
                </p>
            )}
            {paymentSuccess && (
                <p className="text-center" style={{ color: 'green' }}>
                    "Your payment was successful."
                </p>
            )}
        </div>
    );
};

export default Payment;
