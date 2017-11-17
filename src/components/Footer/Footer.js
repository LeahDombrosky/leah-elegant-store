import React, { Component } from 'react';
import './Footer.css';
// import 'font-awesome/css/font-awesome.css';

class Footer extends Component {
    render() {
    return (
      <div>
      <div id="footer"> Contact us: 
            555-555-5555      
        seetheweather@somewhere.com
        <a href="https://www.facebook.com"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
        <a href="https://twitter.com"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
        <a href="https://google.com"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
        <a href="mailto:leahliya59@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>   
    </div>
</div>

)
    }
}
export default Footer;