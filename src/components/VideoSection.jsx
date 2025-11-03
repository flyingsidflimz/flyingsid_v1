import React from "react";
import droneVideo from "../assets/MainVideo/drones.mp4";

export default function VideoSection() {
  return (
    <section
      id="video"
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      {/* Background Video */}
      <video
        src={droneVideo}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(60%)",
        }}
      />

      {/* Overlay Gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.9))",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          zIndex: 2,
          padding: "0 20px",
          animation: "fadeInUp 1.5s ease-out",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          FLYING SID FILMZ CINEMATICS
        </h1>
        <p
          style={{
            color: "#00BFFF",
            fontSize: "1.2rem",
            fontWeight: "400",
            letterSpacing: "0.5px",
          }}
        >
          High-speed aerial cinematography for film & sports
        </p>
      </div>

      {/* Custom Glow Animation */}
      <style>
        {`
          @keyframes fadeInUp {
            from { 
              opacity: 0;
              transform: translateY(40px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }

          h1 {
            text-shadow: 0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,0,0.2);
          }

          p {
            text-shadow: 0 0 15px rgba(0,191,255,0.3);
          }

          section:hover h1 {
            text-shadow: 0 0 40px rgba(255,255,255,0.6), 0 0 80px rgba(255,255,0,0.3);
            transition: all 0.5s ease;
          }
        `}
      </style>
    </section>
  );
}
