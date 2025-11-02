import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Add motion for animation
import "../styles/sections.css";

export default function ShowReels() {
  // Automatically import all videos in ShowReels folder
  const reels = import.meta.glob("../assets/ShowReels/*.{mp4,webm}", { eager: true });
  const items = Object.entries(reels).map(([path, mod]) => mod.default);

  return (
    <section id="showreels" className="scroll-section">
      <h2 className="scroll-title">SHOWREELS</h2>
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
              {/* ✅ Fix: Ensure correct link path matches your App.jsx dataMap */}
              <Link to={`/media/ShowReels/${i}`} className="card">
                <video
                  src={src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
