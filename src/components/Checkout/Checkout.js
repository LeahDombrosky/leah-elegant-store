import React from "react";
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { checkout } from '../../ducks/reducer';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Product from './Product/Product';
import Payment from '../Payment/Payment';
import './Checkout.css';

// import STRIPE_PUBLISHABLE from '../../constants/server';
// import PAYMENT_SERVER_URL from '../../constants/stripe';

// const CURRENCY = 'EUR';

// const fromEuroToCent = amount => amount * 100;

// const successPayment = data => {
//   alert('Payment Successful');
// };

// const errorPayment = data => {
//   alert('Payment Error');
// };

// const onToken = (amount, description) => token =>
// axios.post(PAYMENT_SERVER_URL,
//   {
//     description,
//     source: token.id,
//     currency: CURRENCY,
//     amount: fromEuroToCent(amount)
//   })
//   .then(successPayment)
//   .catch(errorPayment);

// const Checkout = ({ name, description, amount }) =>
// <StripeCheckout
//   name={name}
//   description={description}
//   amount={fromEuroToCent(amount)}
//   token={onToken(amount, description)}
//   currency={CURRENCY}
//   stripeKey={STRIPE_PUBLISHABLE}
// />

function Checkout( { stuffInCart, total, checkout } ) {

  const stuffComponents = 
  stuffInCart.map( stuff => (
    <Product 
      key={ stuff.id }
      title={ stuff.title }
      img={ stuff.img }
      price={ stuff.price }
      id={ stuff.id }
    />
  ));

//   <Checkout
//   name={'The Road to learn React'}
//   description={'Only the Book'}
//   amount={1}
// />

  return (
    <div id="Checkout__container">
      <div id="Checkout__stuffContainer">
        { stuffComponents }
      </div>
      <div id="Checkout__totalContainer">
        <p id="Checkout__totalTitle"> Total </p>
        <span id="Checkout__total">${ total }</span>
        {/* <button id="Checkout__checkout" onClick={ checkout }> Checkout </button> */}
        <Link to="/payment">Checkout</Link>
      </div>
      {/* <p className="App-intro">CHECKOUT LEAH</p> */}
    </div>
  )
}

function mapStateToProps( state ) {
  var stuffInCart = state.cart.map( id => state.stuff.filter( stuff => stuff.id === id )[0] );
  var total = stuffInCart.reduce( ( total, stuff ) => total + parseFloat(stuff.price), 0 ).toFixed(2);
  return { stuffInCart, total };
}

export default connect( mapStateToProps, { checkout } )( Checkout );