import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">RM & GS</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/listings">Listings</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
