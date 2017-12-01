
import React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

function Footer(/*props*/) {
  return (
    <footer id='engadget-footer-sitemap-container'>
      <Grid>
        <Nav justified>
          {/* <NavItem */}
            {/* // eventKey={1}> */}
            {/* // CONTACT US: leah_inc@yahoo.com */}
          {/* </NavItem> */}
          {/* <NavItem
            eventKey={2}
            title="Item">
              ABOUT US
          </NavItem> */}
          {/* <NavItem
            eventKey={3}> */}
            {/* Some other professional link */}
            <div className="Social-container">
              {/* <div className="Social-icon"> */}
                <SocialIcon url="https://www.google.com/" />
              {/* <div className="Social-icon"> */}
                <SocialIcon url="https://www.facebook.com/" />
              {/* <div className="Social-icon"> */}
                <SocialIcon url="https://twitter.com//" />
              {/* <div className="Social-icon"> */}
                <SocialIcon url="http://www.youtube.com/" />
              {/* <div className="Social-icon"> */}
                <SocialIcon url="http://www.vimeo.com/" />
              {/* <div className="Social-icon"> */}
                <SocialIcon url="http://www.pinterest.com/" />
              {/* <div className="Social-icon"> */}
                <SocialIcon url="http://www.linkedin.com/" />
            </div>
          {/* </NavItem> */}
        </Nav>

        <div className="text-center small copyright">
          © LRD 2017
        </div>
      </Grid>
    </footer>
  );
}

export default Footer;
