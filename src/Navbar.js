import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import logo from './assets/logo.png'; // Import the logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img src={logo} alt="Logo" className="navbar-logo" /> {/* Add the logo image */}
        <span className="navbar-name"><h1>Testing</h1></span> {/* Add the name */}
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
