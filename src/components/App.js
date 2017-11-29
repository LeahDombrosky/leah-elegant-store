import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Nav/Navbar';
import Cart from './Cart/Cart';
import Footer from './Footer/Footer';
// import Store from './Store/Store';

import router from '../router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">{/* <iframe width="854" height="480" src="https://www.youtube.com/embed/tatgxtiS8g0" frameborder="0" gesture="media" allowfullscreen></iframe> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <img id="Fashion-logo" src = "https://firebasestorage.googleapis.com/v0/b/leah-elegant-store.appspot.com/o/fashion-logos.jpg?alt=media&token=b16a7e15-55be-4990-9bc2-98fa1dc31aa9" alt="fashion"/> */}
          <h1 className="App-title">L-egance</h1>
          
        <Navbar />
        </header>
        <div>
        <div id="App__mainContainer">
        <div id="App__routerContainer">
          { router }
          {/* <Cart /> */}
        </div>
        </div>
        {/* <Store /> */}
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;