import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/sections.css";

const Gallery = () => {
  // Dynamically import all images in src/assets/images/
  const gallery = import.meta.glob("../assets/images/*.{jpg,jpeg,png,webp}", { eager: true });
  const items = Object.entries(gallery).map(([path, mod]) => mod.default);

  return (
    <section className="scroll-section">
      <h2 className="scroll-title">GALLERY</h2>
      <div className="scroll-wrap cinematic-border">
        <div className="hscroll">
          {items.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link to={`/media/images/${i}`} className="card">
                <img src={src} alt={`gallery-${i}`} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
