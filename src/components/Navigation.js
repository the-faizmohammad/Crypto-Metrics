import React from 'react';
import { Navbar } from 'react-bootstrap';
import { FaLessThan, FaMicrophone } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import '../styles/Navigation.css';

const Navigation = () => (
  <Navbar className="custom-navbar">
    <nav>
      <ul className="custom-nav-links">
        <li>
          <FaLessThan className="custom-icon lessthan" />
          Most Viewed
        </li>
        <li className="custom-header-list">
          <h1>Crypto Treasure Metrics</h1>
        </li>
        <li className="custom-header-list custom-icons-class">
          <FaMicrophone className="custom-icon" />
          <FiSettings className="custom-icon" />
        </li>
      </ul>
    </nav>
  </Navbar>
);

export default Navigation;
