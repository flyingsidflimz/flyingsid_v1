import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/sections.css";

const FeaturedIn = () => {
  // Dynamically import images/videos from assets/FeaturedIn/
  const posters = import.meta.glob("../assets/FeaturedIn/*.{jpg,jpeg,png,webp,mp4,webm}", { eager: true });
  const items = Object.entries(posters).map(([path, mod]) => mod.default);

  return (
    <section className="scroll-section">
      <h2 className="scroll-title">FEATURED IN</h2>
      <div className="scroll-wrap cinematic-border">
        <div className="hscroll">
          {items.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link to={`/media/FeaturedIn/${i}`} className="card">
                {src.endsWith(".mp4") || src.endsWith(".webm") ? (
                  <video src={src} muted loop autoPlay playsInline />
                ) : (
                  <img src={src} alt={`featured-${i}`} />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
