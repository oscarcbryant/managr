// import { findByLabelText } from '@testing-library/react';
import React from 'react';
import { Link } from "react-router-dom";
import './styles/Navbar.css'

import Auth from '../utils/auth';

function Navbar() {
    return (
      <nav className="navbar">
            <div id="links">
                <h4>
                    <Link to = "./pages/login">Login</Link>
                </h4>
                <h4>
                    <Link to = "./pages/signup">Signup</Link>
                </h4>
                <h4>
                    <Link to = "./pages/home">Home</Link>
                </h4>
                <h4>
                    <Link to = "./pages/landing" onClick={() => {Auth.logout()}}>Logout</Link>
                </h4>
            </div>
      </nav>
    );
  }
  
  export default Navbar;