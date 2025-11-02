import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/itemDetail.css"; // make sure to create this file

export default function ItemDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Example data; you can extend dynamically later
  const item = {
    id,
    title: `Project ${id.toUpperCase()}`,
    description:
      "A cinematic masterpiece crafted with precision and FPV excellence.",
    image: `/src/assets/FeaturedIn/${id}.jpeg`, // adjust extension as per your files
  };

  return (
    <>
      <Navbar />
      <div className="item-detail-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="item-content">
          <div className="item-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="item-info">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
