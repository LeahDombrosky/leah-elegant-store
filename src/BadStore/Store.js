import React from "react";
import { connect } from "react-redux";

import './Store.css';

import Product from '../Store/Product/Product';

import { addToCart } from '../ducks/reducer';

function Store( { stuff, cart, history, addToCart } ) {
  const stuffComponents = stuff.map( (stuff) => (
    <Product
      key={ stuff.id }
      id={ stuff.id }
      title={ stuff.title }
      img={ stuff.img }
      price={ stuff.price }
      addToCart={ addToCart }
    />
  ))

  return (
    <div className="store__container">
      { stuffComponents }
    </div>
  )
}

function mapStateToProps( state ) {
  return state;
}

export default connect( mapStateToProps, { addToCart } )( Store );