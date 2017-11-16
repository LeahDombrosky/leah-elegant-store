import React, { Component } from 'react';
import './Navbar.css';
// import ShoppingCart from 'react-icons/lib/fa/shopping-cart';

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
      <li>LOGO</li>
      <li>HOME</li>
      {/* <li>Log In / Sign Up</li> */}
      <li><button id="login-button" onClick={this.handlelogin}>
            Login/Register
          </button></li>
      <li>SHOPPING CART</li>
    </ul>
</div>
)
    }
}

export  default Navbar;