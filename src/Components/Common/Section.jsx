// src/components/common/Section.jsx
import React from "react";

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="section">
    <div className="container">
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      {children}
    </div>
  </section>
);

export default Section;