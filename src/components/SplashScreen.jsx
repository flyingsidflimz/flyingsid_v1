import React from "react";
import "../styles/main.css";

export default function SplashScreen() {
  return (
    <div className="splash-screen">
      <img src="/src/assets/logo.png" alt="Flying Sid" className="splash-logo" />
      <div className="spinner"></div>
    </div>
  );
}
