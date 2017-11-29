import React from "react";
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { checkout } from '../../ducks/reducer';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Product from './Product/Product';
import Payment from '../Payment/Payment';
import './Checkout.css';

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

  return (
    <div id="Checkout__container">
      <div id="Checkout__stuffContainer">
      { stuffComponents  } 
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