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
          To become a global leader in technology-enabled financial advisory, delivering clarity, compliance, and confidence to businesses across borders.
        </VMCard>

        <VMCard icon={missionIcon} title="Our Mission">
          <ul>
            <li>To deliver accurate, timely, and transparent financial solutions using a blend of domain expertise and smart technology.</li>
            <li>To help clients move beyond compliance and leverage financial insights for better strategy and decision-making.</li>
            <li>To create long-term value by combining people, processes, and automation in everything we do.</li>
          </ul>
        </VMCard>
      </div>
    </section>
  );
};

export default VisionMission;
