import React from "react";
import aboutImg from "../assets/AboutMe/siddharth-full.png"; // 👈 change filename to match your actual image


export default function About() {
  return (
    <section
      id="about"
      className="section about"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px 10%",
        background: "black",
        color: "white",
        gap: "60px",
        flexWrap: "wrap",
      }}
    >
      {/* Text Section */}
      <div style={{ flex: "1 1 450px", maxWidth: 550 }}>
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          About Me
        </h2>
        <p style={{ color: "#ccc", lineHeight: "1.6" }}>
          Every shot is a combination of precision flying, advanced drone
          technology, and deep cinematographic understanding. I operate
          cutting-edge FPV drones customized for speed, stability, and cinematic
          depth.
        </p>

        <ul
          style={{
            color: "#f5f5f5",
            marginTop: "20px",
            paddingLeft: "20px",
            lineHeight: "1.8",
          }}
        >
          <li>High-speed FPV cinematography</li>
          <li>Editing & color grading</li>
          <li>Custom drone builds</li>
        </ul>
      </div>

      {/* Image Section */}
      <div
        style={{
          flex: "1 1 400px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={aboutImg}
          alt="FPV Cinematics"
          style={{
            width: "100%",
            maxWidth: "480px",
            borderRadius: "20px",
            objectFit: "cover",
            boxShadow: "0 0 40px rgba(255, 255, 0, 0.25)",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
    </section>
  );
}
