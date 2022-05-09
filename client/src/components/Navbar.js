// import { findByLabelText } from '@testing-library/react';
import React from 'react';
import { Link } from "react-router-dom";
// import './styling/navbar.css'

function Navbar() {
    return (
      <nav className="navbar">
            <div id="links">
                <h4>
                    <Link to = "/about">About Us</Link>
                </h4>
                <h4>
                    <Link to = "/logout">Logout</Link>
                </h4>
                <h4>
                    <Link to = "/contact">Create team</Link>
                </h4>
                <h4>
                    <Link to = "/resume">Contact Us</Link>
                </h4>
            </div>
      </nav>
    );
  }
  
  export default Navbar;