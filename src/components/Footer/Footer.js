
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
            <div>
            <SocialIcon url="http://google.com" />
            <SocialIcon url="http://facebook.com/" />
            <SocialIcon url="http://twitter.com/" />
            <SocialIcon url="http://youtube.com/" />
            <SocialIcon url="http://vimeo.com/" />
            <SocialIcon url="http://pinterest.com/" />
            <SocialIcon url="http://linkedin.com/" />
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
