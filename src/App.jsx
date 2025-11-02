import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import VideoSection from "./components/VideoSection";
import About from "./components/About";
import GearWeUse from "./components/GearWeUse";
import FeaturedIn from "./components/FeaturedIn";
import Gallery from "./components/Gallery";
import ShowReels from "./components/ShowReels";
import Contact from "./components/Contact";
import MediaDetail from "./components/MediaDetail";
import ClientFolio from "./components/ClientFolio";

import "./index.css"; // keep this for global background styling

export default function App() {
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith("/media/");

  // Load all asset folders dynamically
  const featured = Object.values(
    import.meta.glob("./assets/FeaturedIn/*.{jpg,jpeg,png,webp}", { eager: true })
  ).map((m) => m.default);

  const gear = Object.values(
    import.meta.glob("./assets/GearWeFlyWith/*.{jpg,jpeg,png,webp}", { eager: true })
  ).map((m) => m.default);

  const gallery = Object.values(
    import.meta.glob("./assets/images/*.{jpg,jpeg,png,webp}", { eager: true })
  ).map((m) => m.default);

  const showreels = Object.values(
    import.meta.glob("./assets/ShowReels/*.{mp4,webm}", { eager: true })
  ).map((m) => m.default);

  const dataMap = { FeaturedIn: featured, GearWeUse: gear, images: gallery, ShowReels: showreels };

  return (
    <div className="app-container">
      {!isDetailPage && <Navbar />}

      <Routes>
        {/* Main Page */}
        <Route
          path="/"
          element={
            <>
              <VideoSection />
              <About />
              <GearWeUse />
              <FeaturedIn />
              <Gallery />
              <ShowReels />
              <ClientFolio />
              <Contact />
            </>
          }
        />

        {/* Media Detail Page */}
        <Route path="/media/:type/:id" element={<MediaDetail dataMap={dataMap} />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
