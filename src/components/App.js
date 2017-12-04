import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Navbar from './Nav/Navbar';
import Cart from './Cart/Cart';
import Footer from './Footer/Footer';
import Success from './Success/Success';
// import Store from './Store/Store';

import router from '../router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">{/*<iframe width="1054"   height="380" src="https://www.youtube.com/embed/tatgxtiS8g0" frameborder="0" gesture="media" allowfullscreen></iframe> */}
         <h1 className="App-title">L-egance Store</h1> 
         {/* <Header /> */}
         <Navbar />
        </header>
        {/* <div> */}
        <div id="App__mainContainer">
          <div id="App__routerContainer">
          { router }
          {/* <Cart /> */}
        </div>
        </div>
        <div id="footer">
        {/* <Success /> */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;