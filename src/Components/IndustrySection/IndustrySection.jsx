import React, { useState, useEffect } from "react";
import "./IndustrySection.css";

const industries = [
  { title: "Retail", icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="#1e40af" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg> },
  { title: "Food & Beverages", icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="#1e40af" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 21h16M4 10h16l-1.5 9h-13z"/><path d="M8 10V4h1a3 3 0 0 1 3 3v3"/></svg> },
  { title: "Marketing Agencies", icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="#1e40af" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 11l18-5v12l-18-5z"/><circle cx="7" cy="12" r="1"/></svg> },
  { title: "Real Estate", icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="#1e40af" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 22V10l9-7 9 7v12H3z"/><path d="M9 22V12h6v10"/></svg> },
  { title: "Information Technology", icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="#1e40af" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
  { title: "Manufacturing", icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="#1e40af" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06c.4-.4.52-1.02.33-1.82a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09c.73 0 1.35-.39 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06c.4.4 1.02.52 1.82.33h.01c.61-.16 1-0.78 1-1.51V3a2 2 0 0 1 4 0v.09c0 .73.39 1.35 1 1.51.8.19 1.42.07 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06c-.4.4-.52 1.02-.33 1.82.16.61.78 1 1.51 1H21a2 2 0 0 1 0 4h-.09c-.73 0-1.35.39-1.51 1z"/></svg> },
];

const VISIBLE_CARDS = 4;
const CARD_WIDTH = 260;

const IndustrySection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const extendedSlides = [
    industries[industries.length - 1],
    ...industries,
    industries[0],
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
    setIsTransitioning(true);
  };

  // Auto-play every 1 second
  useEffect(() => {
    const interval = setInterval(nextSlide, 1000);
    return () => clearInterval(interval);
  }, []);

  // Looping effect
  useEffect(() => {
    if (currentIndex === extendedSlides.length - VISIBLE_CARDS + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 500);
    }
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(extendedSlides.length - VISIBLE_CARDS);
      }, 500);
    }
  }, [currentIndex, extendedSlides.length]);

  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => setIsTransitioning(true), 50);
    }
  }, [isTransitioning]);

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Industry Expertise</h2>
      <p className="carousel-subtitle">
        We blend industry insights with financial expertise to deliver unmatched
        accounting and back-office support. Our team prioritizes accuracy,
        compliance, and efficiency, enabling clients to focus on growth while we
        manage their financial operations.
      </p>

      <div className="carousel-wrapper">
        <button className="nav-btn left" onClick={prevSlide}>
          &#8249;
        </button>
        <div className="carousel">
          <div
            className={`carousel-track ${isTransitioning ? "transition" : ""}`}
            style={{
              transform: `translateX(-${currentIndex * CARD_WIDTH}px)`,
            }}
          >
            {extendedSlides.map((item, index) => (
              <div className="carousel-card" key={index}>
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <button className="nav-btn right" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default IndustrySection;