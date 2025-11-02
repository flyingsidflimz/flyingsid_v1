import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/mediaDetail.css"; // ✅ create this CSS (below)

const MediaDetail = ({ dataMap }) => {
  const { type, id } = useParams();
  const navigate = useNavigate();

  const items = dataMap?.[type];
  const media = items ? items[parseInt(id, 10)] : null;

  if (!media) {
    return (
      <div className="media-detail not-found">
        <h2>Media not found</h2>
        <button onClick={() => navigate(-1)} className="back-btn">
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div className="media-detail">
      {/* Left: Image or Video */}
      <div className="media-left">
        {media.endsWith(".mp4") || media.endsWith(".webm") || media.endsWith(".mov") ? (
          <video src={media} autoPlay loop controls />
        ) : (
          <img src={media} alt={type} />
        )}
      </div>

      {/* Right: Description */}
      <div className="media-right">
        <h2>{type.replace(/([A-Z])/g, " $1")}</h2>
        <p>
          This cinematic piece is part of <b>{type}</b> — capturing the spirit, energy, and
          precision that defines our aerial storytelling. Each frame is handcrafted for
          visual perfection.
        </p>
        <p>
          Whether it’s showcasing high-speed drone maneuvers or immersive FPV experiences,
          our mission remains the same — to make you *feel* the flight.
        </p>

        <button onClick={() => navigate(-1)} className="back-btn">
          ← Back to Gallery
        </button>
      </div>
    </div>
  );
};

export default MediaDetail;
