import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
      return (
        <div className="Home">
        <div className="Search-holder">
            <input type="text" className="SearchInput"></input>
            <Link to="/store"><button className ="SearchButton">VIEW STORE</button></Link>
        </div>
        </div>
         );
        }
      }
      
      export default Home;