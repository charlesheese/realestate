import React from "react";
import "./Home.css";
import skylineGif from "./NYCSkyline.gif"; // Import the GIF

const Home: React.FC = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${skylineGif})` }}>
      <header className="home-header">
        <h1>RM & GS</h1>
        <p>
          Find the perfect property that suits your needs with the help of our
          agents
        </p>
        <button className="home-btn">Explore Listings</button>
      </header>

      <section className="featured-listings">
        <h2>Featured Listings</h2>
        <div className="listings-grid">
          <div className="listing-card">Listing 1</div>
          <div className="listing-card">Listing 2</div>
          <div className="listing-card">Listing 3</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
