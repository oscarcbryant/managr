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
                    <Link to = "./pages/Login">Login</Link>
                </h4>
                <h4>
                    <Link to = "./pages/Signup">Signup</Link>
                </h4>
                <h4>
                    <Link to = "./pages/Home">Home</Link>
                </h4>
                <h4>
                    <Link to = "./pages/Landing" onClick={() => {Auth.logout()}}>Logout</Link>
                </h4>
            </div>
      </nav>
    );
  }
  
  export default Navbar;