import React, { useState } from "react";
import "./Listings.css";
import { useNavigate } from "react-router-dom";

const Listings: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

  const listingsData = [
    [
      {
        id: 1,
        image: "src/pages/house1.jpg",
        beds: 3,
        baths: 2,
        address: "123 Main St, New York, NY",
        price: "$500,000",
      },
      {
        id: 2,
        image: "src/pages/house2.jpg",
        beds: 2,
        baths: 1,
        address: "456 Elm St, Brooklyn, NY",
        price: "$350,000",
      },
      {
        id: 3,
        image: "src/pages/house3.jpg",
        beds: 4,
        baths: 3,
        address: "789 Pine St, Queens, NY",
        price: "$750,000",
      },
      {
        id: 4,
        image: "src/pages/house4.jpg",
        beds: 1,
        baths: 1,
        address: "101 Maple St, Hoboken, NJ",
        price: "$200,000",
      },
    ],
    [
      {
        id: 5,
        image: "src/pages/house5.jpg",
        beds: 3,
        baths: 2,
        address: "202 Oak St, Queens, NY",
        price: "$450,000",
      },
      {
        id: 6,
        image: "src/pages/house6.jpg",
        beds: 5,
        baths: 4,
        address: "303 Willow St, Brooklyn, NY",
        price: "$1,200,000",
      },
      {
        id: 7,
        image: "src/pages/house7.jpg",
        beds: 2,
        baths: 2,
        address: "555 Broadway, New York, NY",
        price: "$800,000",
      },
      {
        id: 8,
        image: "src/pages/house8.jpg",
        beds: 4,
        baths: 3,
        address: "777 5th Ave, Manhattan, NY",
        price: "$1,800,000",
      },
    ],
  ];

  const handleListingClick = (id: number) => {
    navigate(`/listing/${id}`);
  };

  const scrollRight = () => {
    setCurrentPage((prevPage) =>
      prevPage === listingsData.length - 1 ? 0 : prevPage + 1
    );
  };

  const scrollLeft = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? listingsData.length - 1 : prevPage - 1
    );
  };

  return (
    <div className="listings-page">
      <div className="listings-content">
        <h2 className="new-listings-title">New Listings</h2>
        <div className="carousel-container">
          <button className="scroll-button left" onClick={scrollLeft}>
            &lt;
          </button>
          <div className="listings-grid">
            {listingsData[currentPage].map((listing) => (
              <div
                key={listing.id}
                className="listing-box"
                style={{ backgroundImage: `url(${listing.image})` }}
                onClick={() => handleListingClick(listing.id)}
              >
                <div className="listing-details">
                  <p>
                    <strong>{listing.price}</strong> |{" "}
                    {`${listing.beds} Beds / ${listing.baths} Baths`}
                  </p>
                  <p className="address">{listing.address}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="scroll-button right" onClick={scrollRight}>
            &gt;
          </button>
        </div>
      </div>
      <div className="filter-bar">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by location, address, or price"
            className="search-input"
          />
        </div>
        <div className="filter-options">
          <div className="filter-box">
            <select className="dropdown">
              <option value="">Price</option>
              <option value="low-high">Low to High</option>
              <option value="high-low">High to Low</option>
            </select>
          </div>
          <div className="filter-box">
            <select className="dropdown">
              <option value="">Location</option>
              <option value="Upper East Side">Upper East Side</option>
              <option value="Lower East Side">Lower East Side</option>
              <option value="Upper West Side">Upper West Side</option>
              <option value="Lower West Side">Lower West Side</option>
              <option value="Brooklyn">Brooklyn</option>
              <option value="Queens">Queens</option>
              <option value="Hoboken">Hoboken</option>
            </select>
          </div>
          <div className="filter-box">
            <select className="dropdown">
              <option value="">Beds/Baths</option>
              <option value="1-1">1 Bed / 1 Bath</option>
              <option value="2-1">2 Bed / 1 Bath</option>
              <option value="3-2">3 Bed / 2 Bath</option>
              <option value="4-2">4+ Bed / 2+ Bath</option>
            </select>
          </div>
          <div className="filter-box">
            <select className="dropdown">
              <option value="">Home Price</option>
              <option value="<100k">Under $100k</option>
              <option value="100k-300k">$100k - $300k</option>
              <option value="300k-500k">$300k - $500k</option>
              <option value="500k+">Above $500k</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
