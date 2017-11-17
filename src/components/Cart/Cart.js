import React, { Component } from "react";
import { connect } from "react-redux";

import Product from '../../components/Store/Product/Product';
import ShoppingCart from 'react-icons/lib/fa/shopping-cart';
import { Link } from "react-router-dom";
import './Cart.css';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };

    this.toggleCartDetails = this.toggleCartDetails.bind( this );
  }
  
  toggleCartDetails() {
    this.setState({ expanded: !this.state.expanded});
  }

  render() {
    console.log(this.props)
    const {
      stuff,
      total,
      cart,
      howMuchStuff
    } = this.props;

    let stuffComponents = cart.map( stuff => (
      <Product 
        key={ stuff.id }
        title={ stuff.title }
        img={ stuff.img }
        id={ stuff.id }
      />
    ));

    return (
      this.state.expanded 
      ?
        <div id="Cart__containerExpanded">
          <div id="Cart__header" onClick={ this.toggleCartDetails }>
            <span> <ShoppingCart id="Cart__icon" /> { howMuchStuff } items: </span>
            <span> ${ total } </span>
          </div>
          <div id="Cart__details">
            { stuffComponents }
          </div>
          <Link to="/checkout" id="Cart__navLink">
          <div id="Cart__footer" onClick={ this.toggleCartDetails }>
            <span> Checkout </span>
          </div>
        </Link>
        </div>
      :
        <div id="Cart__container" onClick={ this.toggleCartDetails }>
          <span> <ShoppingCart id="Cart__icon" /> { howMuchStuff } items: </span>
          <span> ${ total } </span>
        </div>
    )
  }
}

function mapStateToProps( state ) {
  // var stuffInCart = state.cart.map( id => state.stuff.filter( stuff => stuff.id === id )[0] );
  // console.log(stuffInCart)
  // var total = stuffInCart.reduce( ( total, stuff ) => total + parseFloat(stuff.price), 0 ).toFixed(2);
  // return { stuffInCart, total, howMuchStuff: stuffInCart.length };
  return state
}

export default connect( mapStateToProps )( Cart );