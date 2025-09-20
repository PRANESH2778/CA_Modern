// src/components/workmethod/WorkflowCard.jsx
import React from "react";
import "./WorkflowCard.css";

const WorkflowCard = ({ icon, title, checklist = [] }) => {
  return (
    <div className="wfcard">
      <div className="wfcard-inner">
        {/* Front */}
        <div className="wfcard-face wfcard-front">
          <div className="wfcard-badge">
            <img src={icon} alt="" />
          </div>
          <h4 className="wfcard-title">{title}</h4>
        </div>

        {/* Back */}
        <div className="wfcard-face wfcard-back">
          <ul className="wfcard-list">
            {checklist.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkflowCard;