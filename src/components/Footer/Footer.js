
// import React from "react";
// import { Container, Row, Col } from "./bootstrap";
// // import Navbar from "./navbar";
// import './Footer.css';
// import { Link } from 'react-router-dom';

// var Footer = React.createClass({
  

//   render: function () {
    
//         return (
//         <footer>
//           <div id="credits">
//             <div className="container text-center">
//               <div className="row">
//                 <div className="col-md-5">
//                   <li>&copy; 2015</li>
//                   <li><Link to="contactus">Contact Us</Link></li>
//                   <li><Link to="about">About</Link></li>
//                 </div>
//                 <div className="col-md-5" id="social-networks">
//                   <a href="#"><i className="fa fa-2x fa-facebook-square"></i></a>
//                   <a href="#"><i className="fa fa-2x fa-twitter-square"></i></a>
//                   <a href="#"><i className="fa fa-2x fa-google-plus-square"></i></a>
//                   <a href="#"><i className="fa fa-2x fa-youtube-square"></i></a>
//                   <a href="#"><i className="fa fa-2x fa-vimeo-square"></i></a>
//                   <a href="#"><i className="fa fa-2x fa-pinterest-square"></i></a>
//                   <a href="#"><i className="fa fa-2x fa-linkedin-square"></i></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </footer>
//           );
//         }
//       });
    
//     module.exports = Footer;

// import React, { Component } from 'react';
// import './Footer.css';
// import { Link } from 'react-router-dom';
// // import 'font-awesome/css/font-awesome.css';
// // import Twitter from 'react-icons/lib/fa/shopping-cart';

// class Footer extends Component {
//     render() {
//       return (
//                 <footer>
//                   <div id="credits">
//                     <div className="container text-center">
//                       <div className="row">
//                         <div className="col-md-5">
//                           <li>&copy; 2017</li>
//                           <li><Link to="contactus">Contact Us</Link></li>
//                           <li><Link to="about">About</Link></li>
//                         </div>
//                         <div className="col-md-5" id="social-networks">
//                           <a href="#"><i className="fa fa-2x fa-facebook-square"></i></a>
//                           <a href="#"><i className="fa fa-2x fa-twitter-square"></i></a>
//                           <a href="#"><i className="fa fa-2x fa-google-plus-square"></i></a>
//                           <a href="#"><i className="fa fa-2x fa-youtube-square"></i></a>
//                           <a href="#"><i className="fa fa-2x fa-vimeo-square"></i></a>
//                           <a href="#"><i className="fa fa-2x fa-pinterest-square"></i></a>
//                           <a href="#"><i className="fa fa-2x fa-linkedin-square"></i></a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </footer>
//                   );
//                 }
//               };
// export default Footer;

import React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

function Footer(/*props*/) {
  return (
    <footer id='engadget-footer-sitemap-container'>
      <Grid>
        <Nav justified>
          <NavItem
            eventKey={1}>
            CONTACT US: leah_inc@yahoo.com
          </NavItem>
          <NavItem
            eventKey={2}
            title="Item">
              ABOUT US
          </NavItem>
          <NavItem
            eventKey={3}>
            {/* Some other professional link */}
            <SocialIcon url="http://google.com" />
            <SocialIcon url="http://facebook.com/" />
            <SocialIcon url="http://twitter.com/" />
            <SocialIcon url="http://youtube.com/" />
            <SocialIcon url="http://vimeo.com/" />
            <SocialIcon url="http://pinterest.com/" />
            <SocialIcon url="http://linkedin.com/" />
          </NavItem>
        </Nav>

        <div className="text-center small copyright">
          © LRD 2017
        </div>
      </Grid>
    </footer>
  );
}

export default Footer;
