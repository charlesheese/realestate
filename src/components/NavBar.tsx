import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left links */}
        <ul className="navbar-links left-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listings">Find A Home</Link>
          </li>
        </ul>

        {/* Centered logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src="src/components/logo.png" alt="Logo" loading="lazy" />
          </Link>
        </div>

        {/* Right links */}
        <ul className="navbar-links right-links">
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
