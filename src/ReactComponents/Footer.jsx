import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
function Footer() {
  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="Brand-info">
          <div className="logo-name">

            <div className="logo-section-container">
              <div className="logo-image"></div>
              <div className="nav-logo-name-section">FloraVision.</div>
            </div>

          </div>
          <div className="description">
            <p>"From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."</p>
          </div>
     
        </div>
      <div className="quick-links">
        <h2>Quick Link’s</h2>
        <div className="links-wraper">
          <a href="https://google.com" target="_blank">
            Home
          </a>
          <a href="https://google.com" target="_blank">
            Type’s Of plant’s
          </a>
          <a href="https://google.com" target="_blank">
            Contact
          </a>
          <a href="https://google.com" target="_blank">
            Privacy
          </a>
        </div>
      </div>

     <div className="newsletter-form">
      <h2>For Every Update.</h2>
      <div className="input-box-container">
        <input className="input-box" type="text" placeholder="Enter Email" />
        <button>SUBSCRIBE</button>
      </div>
      </div>
     </div>

     <div className="copy-rights">
           <div className="links-social-media">
            <div className="fb-link social-media-icon">
              <p>FB</p>
            </div>
            <div className="tw-link social-media-icon">
              <p>TW</p>
            </div>
            <div className="li-link social-media-icon">
              <p>LI</p>
            </div>
          </div>
      <p>FloraVision © all right reserve</p>
     </div>
    </div>
  );
}

export default Footer;
