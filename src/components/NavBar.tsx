import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links left-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/listings">Home Search</Link>
        </li>
        <li>
          <Link to="/buy">Buy Properties</Link>
        </li>
      </ul>
      <div className="navbar-logo">
        <Link to="/">RM & GS</Link>
      </div>
      <ul className="navbar-links right-links">
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/agents">Agents</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
