// src/components/common/IndustryCard.jsx
import React from "react";

const IndustryCard = ({ icon, title, alt = "" }) => {
  return (
    <div className="industry-card">
      <div className="industry-card-icon">
        <img src={icon} alt={alt || title} />
      </div>
      <h4 className="industry-card-title">{title}</h4>
    </div>
  );
};

export default IndustryCard;