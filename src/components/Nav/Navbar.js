import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
// import ShoppingCart from 'react-icons/lib/fa/shopping-cart';
import ShoppingBag from 'react-icons/lib/fa/shopping-bag';
import { connect } from "react-redux";
import Login from '../Login/Login';

// export default class Navbar extends Component {
    class Navbar extends Component {
        constructor(props) {
          super(props);
        }
    render() {
    return (

<div className = "Nav-holder">
<label for="show-menu" class="show-menu">Show Menu</label>
<input type="checkbox" id="show-menu" role="button" />
    <ul>
      <Link to="/">
      <div id="Logo-container">
         <li> <img id="Fashion-logo" src="https://firebasestorage.googleapis.com/v0/b/leah-elegant-store.appspot.com/o/fashion-logos.jpg?alt=media&token=b16a7e15-55be-4990-9bc2-98fa1dc31aa9"/> 
         </li>
         </div>
      </Link>
      {/* <label for="hamburger" class="hamburger">
      <img src="hamburger.png" alt="menu" title="menu" id="burger"></img>
      </label>
      <input type="checkbox" id="hamburger" role="button">
 */}
      <Link to="/"><li>HOME</li></Link>
      <Link to="/store"><li>FASHION</li></Link>
      <Link to="/apparel"><li>APPAREL</li></Link>
      <Link to="/shoes"><li>SHOES</li></Link>
      {/* <Link to="/"><li>ABOUT</li></Link> */}
      {/* <li><button id="login-button" onClick={this.handlelogin}>
            LOGIN
          </button></li> */}
       <li>  <Login /> </li>
      <Link to="/checkout"><li><ShoppingBag id="Nav__shoppingCart" /></li></Link>
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