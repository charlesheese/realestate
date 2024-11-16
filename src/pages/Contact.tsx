import React from "react";
import "./Contact.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGoogle,
} from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1 className="form-title">Submit a Message</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        <h1 className="contact-title">Douglas Elliman</h1>
        <div className="contact-details">
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <a href="tel:+12125881818">(914) 646-7219</a>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:needyouremail">ryanmartinn@gmail.com</a>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>
              716 Columbus
              <br />
              Boston MA
            </p>
          </div>
        </div>
        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaGoogle />
        </div>
      </div>
    </div>
  );
};

export default Contact;




