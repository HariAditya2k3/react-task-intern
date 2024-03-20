// Header.jsx

import React from 'react';
import { FaUser } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom'; 
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <span className="app-name">KaroAbhayas</span>
      </div>
      <div className="links-container">
        <Link to="/login" className="header-link">Join Us</Link>
        <Link to="/orders" className="header-link">Orders</Link>
        <Link to="/classes" className="header-link">Classes</Link>
      </div>
      <div className="icons-container">
        <Link to="/profile" className="icon-link"> 
          <FaUser className="login-icon" />
        </Link>
        <Link to="/cart" className="icon-link">
          <AiOutlineShoppingCart className="cart-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
