import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import skylineGif from "./NYCSkyline.gif";

const Home: React.FC = () => {
  return (
    <div>
      {/* Home Section */}
      <div className="home" style={{ backgroundImage: `url(${skylineGif})` }}>
        <header className="home-header">
          <h1>RM & GS</h1>
          <p>
            Find the perfect property that suits your needs with the help of our
            agents
          </p>
          <Link to="/listings" className="home-btn">
            Explore Listings
          </Link>
        </header>
      </div>
    </div>
  );
};

export default Home;

