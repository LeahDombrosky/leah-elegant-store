import React from "react";
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import './Payment.css';
import STRIPE_PUBLISHABLE from '../../constants/stripe';
import PAYMENT_SERVER_URL from '../../constants/server';
import Success from '../Success/Success';

const CURRENCY = 'EUR';

const fromEuroToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
  <Success />
};

const errorPayment = data => {
  alert('Payment Successful');
  // history.push("/success")
};


const onToken = (amount, description) => token =>
axios.post(PAYMENT_SERVER_URL,
  {
    description,
    source: token.id,
    currency: CURRENCY,
    amount: fromEuroToCent(amount)
  })
  .then(successPayment)
  .catch(errorPayment);

const Payment = ({ name, description, amount }) =>
<StripeCheckout
  name={name}
  description={description}
  amount={fromEuroToCent(amount)}
  token={onToken(amount, description)}
  panelLabel="Pay Your Total"
  currency={CURRENCY}
  stripeKey={STRIPE_PUBLISHABLE}
/>

export default Payment;