import React from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./Home.css";
import skylineGif from "./NYCSkyline.gif";

const Home: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true, // animation triggers only once
    threshold: 0.1, // triggers when 10% of the section is visible
  });

  const submitHandle = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      console.log("Name: $(name), Email: $(email)");
      setSubmitted(true);
    } else {
      alert("Please fill in both fields");
    }
  };

  return (
    <div>
      <div className="home" style={{ backgroundImage: `url(${skylineGif})` }}>
        <header className="home-header">
          <h1>RM & GS</h1>
          <p>
            Find the perfect property that suits your needs with the help of our
            agents
          </p>
          <button className="home-btn">Explore Listings</button>
        </header>
      </div>

      <section className="about-us" ref={aboutRef}>
        <h2 className={`about-title ${aboutInView ? "animate-title" : ""}`}>
          About Us
        </h2>
        <p>
          Ryan Martin and Gerard Smith are real estate agents of Douglas Elliman
          and are dedicated to finding their clients premium properties within
          their parameters. Working as an agent since xyz our experience helping
          people find properties to their liking is unmatched
        </p>
      </section>

      <section className="featured-listings">
        <h2>Featured Listings</h2>
        <div className="listings-grid">
          <div className="listing-card">Listing 1</div>
          <div className="listing-card">Listing 2</div>
          <div className="listing-card">Listing 3</div>
        </div>
      </section>

      <section className="contact-us">
        <h2>Contact Us</h2>
        <form onSubmit={submitHandle} className="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">Submit</button>
          {submitted && (
            <p className="success-message">Thank you for reaching out!</p>
          )}
        </form>
      </section>
    </div>
  );
};

export default Home;
