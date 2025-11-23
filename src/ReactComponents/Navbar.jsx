import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const [menustatus, setMenuStatus] = useState(false);
  return (
    <div>
      <header>
        <nav>
            <Link to="/" className="logo-click">
          <div className="logo-section " >
            <div className="logo"></div>
            <div className="nav-logo-name">FloraVision.</div>
          </div>
              </Link>

          <div className={`navbar-list ${menustatus ? "open" : ""}`}>
            <ul>
      
              <li> <Link to="/">Home</Link></li>
              <li>   <Link to="/404">Plants Type</Link></li>
              <li><Link to="/404">More</Link></li>
              <li><Link to="/404">contact</Link></li>
            </ul>
          </div>

          <div className="search-section">
            <div className="search-icon  effect-btn"></div>
           <Link to="/404"> <div className="bag-icon  effect-btn"> </div></Link>
            
            <div
              className="hamburger  effect-btn"
              onClick={() => setMenuStatus(!menustatus)}
            >
              <div className="strock-first"></div>
              <div className="strock-second"></div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
