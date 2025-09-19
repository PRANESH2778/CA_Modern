// src/components/about/VisionMission.jsx
import React from "react";
import "./VisionMission.css";

const VMCard = ({ icon, title, children }) => (
  <div className="vm-card">
    <div className="vm-icon">
      <img src={icon} alt={title} />
    </div>
    <h3 className="vm-title">{title}</h3>
    <p className="vm-text">{children}</p>
  </div>
);

const VisionMission = () => {
  // dummy icons (replace with real assets if you have them)
  const visionIcon =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><circle cx='60' cy='60' r='56' fill='%23e9f3ff' stroke='%233b49a1' stroke-width='6'/><circle cx='60' cy='60' r='24' fill='none' stroke='%233b49a1' stroke-width='8'/><circle cx='60' cy='60' r='8' fill='%233b49a1'/></svg>";
  const missionIcon =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><circle cx='60' cy='60' r='56' fill='%23e9f3ff' stroke='%233b49a1' stroke-width='6'/><g fill='none' stroke='%233b49a1' stroke-width='8' stroke-linecap='round'><circle cx='60' cy='40' r='12'/><path d='M60 56v36'/><path d='M36 72h48'/></g></svg>";

  return (
    <section className="vm-section" id="vision-mission">
      <div className="vm-container">
        <VMCard icon={visionIcon} title="Our Vision">
          To be recognized as the premier KPO in the industry, renowned for our
          commitment to accuracy, consistency, and quality—because we believe
          that precise and reliable accounting is the backbone of every
          successful business.
        </VMCard>

        <VMCard icon={missionIcon} title="Our Mission">
          We are committed to delivering accurate, consistent, and
          quality‑driven accounting solutions that help businesses streamline
          operations, reduce costs, and achieve financial clarity. We act as an
          extension of your team, ensuring efficiency, compliance, and growth.
        </VMCard>
      </div>
    </section>
  );
};

export default VisionMission;