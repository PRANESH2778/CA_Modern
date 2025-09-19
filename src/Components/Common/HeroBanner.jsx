// src/components/engagement/HeroBanner.jsx
import React from "react";
import "../../styles/herobanner.css"

const HeroBanner = ({value}) => {
  return (
    <section className="eng-hero">
      <h1 className="eng-hero-title">{value}</h1>
    </section>
  );
};

export default HeroBanner;