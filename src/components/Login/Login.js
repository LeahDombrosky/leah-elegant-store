import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
      super(props);
  
      this.handlelogin = this.handlelogin.bind(this);
      this.handlelogout = this.handlelogout.bind(this);
    }
  
    handlelogin() {
      window.location.href = "http://localhost:3001/login";
      //confirm this links to correct auth0 location
    }
    handlelogout() {
      window.location.href = "http://localhost:3001/logout";
     }

render() {
return (
  <div>
     {!this.props.user_id ? (
     <div className="loginbuttons">
     
       <button onClick={this.handlelogin} className="login-button">
         LOGIN
      </button>
      <button onClick={this.handleLogin} className="register-button">
         REGISTER
      </button>
      </div>
            ) : (
     <button onClick={this.handlelogout} className="logouut-button">
       LOGOUT
     </button>
      )}
  </div>
)}
}
export  default Login;