// src/components/common/Card.jsx
import React from "react";
import "../../styles/card.css";

const Card = ({ icon, title, alt = "", children, className = "" }) => {
  return (
    <div className={`gi-card ${className}`}>
      {icon && (
        <div className="gi-card-icon">
          <img src={icon} alt={alt || title} />
        </div>
      )}
      {title && <h4 className="gi-card-title">{title}</h4>}
      {children && <p className="gi-card-body">{children}</p>}
    </div>
  );
};

export default Card;