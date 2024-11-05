import React from "react";
import "./AboutUs.css";
import GerardSmith from "./image.png";
import RyanMartin from "./RyanMartin.jpeg";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <div className="about-us-photos">
        <div className="about-us-member">
          <img src={GerardSmith} alt="Gerard Smith" className="headshot" />
          <p className="about-us-member-description">
            Gerard Smith is an experienced professional with a background in
            project management and a passion for innovation.
          </p>
        </div>
        <div className="about-us-member">
          <img src={RyanMartin} alt="Ryan Martin" className="headshot" />
          <p className="about-us-member-description">
            Ryan Martin specializes in customer relations and brings a wealth of
            knowledge in client engagement and satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
