import React from 'react';
import './Navbar.css';

const Navbar = ({ onHome, onShowSearch, onShowPremium, onShowAbout, onShowProfile }) => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li onClick={onHome} className="clickable">Home</li>
        <li onClick={onShowSearch} className="clickable">Search</li>
        <li onClick={onShowPremium} className="clickable">Premium</li>
        <li onClick={onShowAbout} className="clickable">About Us</li>
        <li onClick={onShowProfile} className="clickable">Profile</li>
      </ul>
    </nav>
  );
};

export default Navbar;


