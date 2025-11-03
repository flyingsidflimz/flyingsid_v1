import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

  async function handleSubmit(e) {
    e.preventDefault();
    if (!endpoint) {
      alert("Form endpoint missing in .env (VITE_FORMSPREE_ENDPOINT).");
      return;
    }
    const fd = new FormData(e.target);
    const res = await fetch(endpoint, {
      method: "POST",
      body: fd,
      headers: { Accept: "application/json" },
    });
    setSent(res.ok);
  }

  return (
    <>
      {/* --- Contact Form Section --- */}
      <section
        id="contact"
        style={{
          background: "black",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#f7f5ecff",
            marginBottom: "20px",
            letterSpacing: "1px",
          }}
        >
          Contact
        </h2>

        {!sent ? (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
              maxWidth: "400px",
              margin: "0 auto",
            }}
          >
            <input
              name="name"
              placeholder="Your Name"
              required
              style={inputStyle}
            />
            <input
              name="email"
              placeholder="Your Email"
              type="email"
              required
              style={inputStyle}
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              rows="4"
              style={{ ...inputStyle, height: "100px", resize: "none" }}
            />
            <button
              className="btn"
              type="submit"
              style={{
                background: "#f8f7edff",
                color: "#000",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
                fontWeight: "bold",
                borderRadius: "4px",
                transition: "0.3s",
              }}
            >
              Send
            </button>
          </form>
        ) : (
          <p style={{ color: "#9f9f9f", marginTop: "15px" }}>
            Thanks — message sent.
          </p>
        )}
      </section>

      {/* --- Footer Section --- */}
      <footer
        style={{
          background: "linear-gradient(180deg, #000 0%, #0a0a0a 100%)",
          color: "#fff",
          padding: "50px 0 25px",
          textAlign: "center",
          borderTop: "1px solid #222",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px",
            marginBottom: "25px",
          }}
        >
          <a href="tel:+919359886235" style={iconStyle("#f1f1f1ff")}>
            <FaPhoneAlt /> <span>Phone</span>
          </a>
          <a
            href="+91 9359886235"
            target="_blank"
            rel="noreferrer"
            style={iconStyle("#f3f0f1ff")}
          ></a>
          <a
            href="mailto:flyingsidflimz@gmail.com"
            style={iconStyle("#f09fbaff")}
          >
            <FaEnvelope /> <span>Email</span>
          </a>
          <a
            href="https://www.instagram.com/flyingsid09"
            target="_blank"
            rel="noreferrer"
            style={iconStyle("#E1306C")}
          >
            <FaInstagram /> <span>Instagram</span>
          </a>
          <a
            href="https://www.instagram.com/flyingsidfilmz"
            target="_blank"
            rel="noreferrer"
            style={iconStyle("#FCAF45")}
          >
            <FaInstagram /> <span>Instagram Official</span>
          </a>
          <a
            href="https://www.facebook.com/nayaksiddh"
            target="_blank"
            rel="noreferrer"
            style={iconStyle("#1877F2")}
          >
            <FaFacebookF /> <span>Facebook</span>
          </a>
          <a
            href="https://www.youtube.com/c/FlyingSID"
            target="_blank"
            rel="noreferrer"
            style={iconStyle("#FF0000")}
          >
            <FaYoutube /> <span>YouTube</span>
          </a>
        </div>

        <p style={{ fontSize: "14px", color: "#888" }}>
          © {new Date().getFullYear()} FLYING SID Flimz — All Rights Reserved
        </p>
      </footer>
    </>
  );
}

// 🔹 Styles
const inputStyle = {
  width: "100%",
  maxWidth: "400px",
  padding: "10px",
  background: "#111",
  color: "#fff",
  border: "1px solid #333",
  borderRadius: "4px",
  outline: "none",
};

// ✅ Colorful icon styling with hover glow
const iconStyle = (color) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "18px",
  color,
  textDecoration: "none",
  transition: "all 0.3s ease",
  fontWeight: "500",
  transform: "translateY(0)",
  boxShadow: "0 0 0 rgba(255,255,255,0)",
  padding: "8px 14px",
  borderRadius: "8px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  cursor: "pointer",
  transitionProperty: "color, transform, box-shadow",
  transitionDuration: "0.3s",
  transitionTimingFunction: "ease",
  textShadow: "0 0 8px rgba(255,255,255,0.1)",
  ...hoverEffect(color),
});

// Hover effect helper
const hoverEffect = (color) => ({
  ":hover": {
    transform: "translateY(-4px)",
    boxShadow: `0 0 18px ${color}80`,
    color: "#fff",
  },
});
