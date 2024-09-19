import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      try {
        const response = await axios.post('/api/payment', { id, amount: 200 });
        setSuccess(true);
      } catch (error) {
        setError('Hubo un error en el proceso de pago.');
      }
    } else {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>Pagar $2.00</button>
      {error && <p>{error}</p>}
      {success && <p>Pago realizado con éxito</p>}
    </form>
  );
};

export default CheckoutForm;
