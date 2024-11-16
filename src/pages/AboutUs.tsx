import React from "react";
import "./AboutUs.css";
import GerardSmith from "./image.png"; // Replace with the actual path to Gerard's photo
import RyanMartin from "./RyanMartin.jpeg"; // Replace with the actual path to Ryan's photo

const AboutUs: React.FC = () => {
  return (
    <div>
      {/* Meet the Team Section */}
      <div className="meet-the-team">
        <h1 className="meet-the-team-title">Meet the Team</h1>
        <p className="meet-the-team-description">
          We are a team of dedicated professionals, passionate about providing
          outstanding services and solutions to our clients. Our mission is to
          empower and inspire.
        </p>
      </div>

      {/* About Us Section */}
      <div className="about-us">
        <h1 className="about-us-title">About Us</h1>
        <div className="underline"></div>
        <div className="about-us-photos">
          {/* Gerard's Photo */}
          <div className="about-us-member">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={GerardSmith}
                alt="Gerard Smith"
                className="headshot-top-2-3"
              />
            </a>
            <p className="about-us-member-description">
              Gerard Smith brings over a decade of experience in project management
              and team leadership. With a keen eye for detail and a passion for
              innovation, Gerard ensures that every project exceeds expectations,
              blending strategy and creativity to deliver exceptional results.
            </p>
          </div>

          {/* Ryan's Photo */}
          <div className="about-us-member">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={RyanMartin}
                alt="Ryan Martin"
                className="headshot-default"
              />
            </a>
            <p className="about-us-member-description">
              Ryan Martin is a customer relations expert dedicated to building strong
              client relationships. His expertise in communication and problem-solving
              has been pivotal in ensuring client satisfaction. Ryan believes in
              fostering trust and collaboration to drive success and cultivate lasting
              partnerships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;






