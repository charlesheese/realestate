import React from "react";
import "./Footnote.css";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footnote: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="social-icon" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="social-icon" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="social-icon" />
        </a>
      </div>
      <div className="footer-logo">
        <h1>RM & GS</h1>
      </div>
      <div className="footer-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <span>|</span>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <span>|</span>
          <li>
            <a href="contact">Contact</a>
          </li>
          <span>|</span>
          <li>
            <a href="listings">Find Properties</a>
          </li>
          <span>|</span>
          <li>
            <a href="about">About</a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 RM & GS</p>
      </div>
    </footer>
  );
};

export default Footnote;
