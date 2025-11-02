import React, { useRef, useEffect, useState } from "react";
import useDrive from "../hooks/useDrive";

export default function FeaturedCarousel({ folderId, title = "Featured In" }) {
  const { files, loading } = useDrive(folderId);
  const ref = useRef(null);
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => setOverflowing(el.scrollWidth > el.clientWidth + 1);
    check();
    window.addEventListener("resize", check);
    const t = setTimeout(check, 400);
    return () => {
      window.removeEventListener("resize", check);
      clearTimeout(t);
    };
  }, [files]);

  // filter images only for Featured
  const items = (files || []).filter((f) => f.mimeType && f.mimeType.startsWith("image/"));

  return (
    <section className="section cinematic-border">
      <h2>{title}</h2>
      {loading ? (
        <div style={{ color: "#999" }}>Loading...</div>
      ) : items.length === 0 ? (
        <div style={{ color: "#999" }}>No featured files found (or folder not public).</div>
      ) : (
        <div ref={ref} className={`hscroll ${overflowing ? "overflowing" : ""}`}>
          {items.map((f) => (
            <div className="card" key={f.id}>
              <img
                src={`https://drive.google.com/uc?export=view&id=${f.id}`}
                alt={f.name}
                loading="lazy"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
