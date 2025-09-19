// src/components/engagement/HeroIntro.jsx
import React from "react";
import "../../styles/herointro.css"

const HeroIntro = ({value}) => {
  return (
    <section className="eng-hero-intro">
      <div className="container">
        <p>
          {value}
        </p>
      </div>
    </section>
  );
};

export default HeroIntro;