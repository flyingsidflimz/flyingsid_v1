import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/sections.css";

export default function GearWeUse() {
  // Load all images/videos from assets/GearWeFlyWith/
  const gear = import.meta.glob("../assets/GearWeFlyWith/*.{jpg,jpeg,png,webp,mp4,webm}", { eager: true });
  const items = Object.entries(gear).map(([path, mod]) => mod.default);

  return (
    <section id="gear" className="scroll-section">
      <h2 className="scroll-title">GEAR WE FLY WITH</h2>
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
              {/* ✅ Fix 1: Correct type in URL to match folder name */}
              <Link to={`/media/GearWeUse/${i}`} className="card">
                {/* ✅ Fix 2: Ensure correct tag (video/image) rendering */}
                {src.endsWith(".mp4") || src.endsWith(".webm") ? (
                  <video src={src} muted loop autoPlay playsInline />
                ) : (
                  <img src={src} alt={`gear-${i}`} />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
