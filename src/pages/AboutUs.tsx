import React, { useEffect, useRef } from "react";
import "./AboutUs.css";
import GerardSmith from "./image.png";
import RyanMartin from "./RyanMartin.jpeg";
import BackgroundImage from "./download.jpeg";

const AboutUs: React.FC = () => {
  const aboutUsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutUsSection = aboutUsRef.current;
      if (aboutUsSection) {
        const rect = aboutUsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          aboutUsSection.classList.add("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="meet-the-team">
        <div className="meet-the-team-content">
          <h1 className="meet-the-team-title">
            Meet the <span className="team-highlight">Team</span>
          </h1>
          <p className="meet-the-team-description">
            We are a team of dedicated professionals, passionate about providing
            outstanding services and solutions to our clients. Our mission is to
            empower and inspire.
          </p>
        </div>
        <div className="meet-the-team-image">
          <div className="shape-overlay"></div>
          <img
            src={BackgroundImage}
            alt="Background"
            className="background-image"
          />
        </div>
      </div>

      <div ref={aboutUsRef} className="about-us-container">
        <div className="about-us-header">
          <h1 className="about-us-title">About Us</h1>
          <div className="underline"></div>
        </div>
        <div className="about-us-photos">
          <div className="about-us-member">
            <div className="member-name">Gerard Smith</div>
            <img src={GerardSmith} alt="Gerard Smith" className="headshot" />
            <p className="about-us-member-description">
              Gerard Smith is an experienced professional with a background in
              project management and a passion for innovation.
            </p>
          </div>
          <div className="about-us-member">
            <div className="member-name">Ryan Martin</div>
            <img src={RyanMartin} alt="Ryan Martin" className="headshot" />
            <p className="about-us-member-description">
              Ryan Martin specializes in customer relations and brings a wealth
              of knowledge in client engagement and satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
