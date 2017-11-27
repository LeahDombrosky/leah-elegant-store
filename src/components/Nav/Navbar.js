import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import ShoppingCart from 'react-icons/lib/fa/shopping-cart';
import { connect } from "react-redux";

// export default class Navbar extends Component {
    class Navbar extends Component {
        constructor(props) {
          super(props);
      
          this.handlelogin = this.handlelogin.bind(this);
        }
      
        handlelogin() {
          window.location.href = "http://localhost:3001/login";
          //confirm this links to correct auth0 location
        }
    
    render() {
    return (
<div className = "Nav-holder">
   <ul>
      <Link to="/"><li>HOME</li></Link>
      {/* <Link to="/store"><li id="Fashion-logo">FASHION<img 
      src = "https://firebasestorage.googleapis.com/v0/b/leah-elegant-store.appspot.com/o/fashion-logos.jpg?alt=media&token=b16a7e15-55be-4990-9bc2-98fa1dc31aa9" alt="fashion"/></li></Link> */}
      {/* <Link to="/store"><li id="Fashion-logo"></li></Link> */}
      <Link to="/store"><li>FASHION</li></Link>
      <Link to="/apparel"><li>APPAREL</li></Link>
      <Link to="/shoes"><li>SHOES</li></Link>
      {/* <Link to="/"><li>ABOUT</li></Link> */}
      {/* <li>Log In / Sign Up</li> */}
      <li><button id="login-button" onClick={this.handlelogin}>
            Login/Register
          </button></li>
      <Link to="/checkout"><li><ShoppingCart id="Nav__shoppingCart" /></li></Link>
    </ul>
    <div id="Nav__checkoutContainer">
          {/* <div id="Nav__itemsInCart"> { items } </div> */}
          {/* <ShoppingCart id="Nav__shoppingCart" /> */}
    </div>
</div>
)
    }
}

export  default Navbar;