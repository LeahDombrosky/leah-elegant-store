import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Search from 'react-icons/lib/fa/search';

class Home extends Component {
  render() {
    return (
      <div className="Main-container">
        <div className="Home">
            {/* <div className="Search-holder"> */}
            {/* <input type="text" className="Search-Input"></input>
            <Link to="/store"><button className ="Search-Button"><Search id="Search-icon" /></button></Link> */}
            {/* <Link to="/store"><Search id="Search-icon" /></Link> */}
            {/* </div> */}
        </div>    
        <div className="wrapper">
        
           <div className="left Top-Left"></div>
          <div className="right Top-Right"></div>
         
          <div className="left Bottom-Left"></div>
          <div className="right Bototm-Right"></div>
         
        </div>
      </div>
         );
        }
      }
      
      export default Home;