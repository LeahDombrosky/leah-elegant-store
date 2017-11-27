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
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">L-Elegance</h1>
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
        <Footer />
      </div>
    );
  }
}

export default App;