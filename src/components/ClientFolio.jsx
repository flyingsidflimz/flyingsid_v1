import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ClientFolio() {
  const stats = [
    { label: "Projects", value: 50 },
    { label: "Clients", value: 30 },
    { label: "Awards", value: 5 },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, i) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 30);

        const interval = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(interval);
          }
          setCounts((prev) => {
            const updated = [...prev];
            updated[i] = Math.floor(start);
            return updated;
          });
        }, 30);
      });
    }
  }, [inView]);

  return (
    <section className="section" id="folio" ref={ref}>
      <h2 className="scroll-title">CLIENT FOLIO</h2>
      <div className="folio">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="stat"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="num">{counts[i]}+</div>
            <div className="label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}