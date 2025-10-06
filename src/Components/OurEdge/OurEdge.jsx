import React from "react";
import "./OurEdge.css";
import automation from "../../assets/automation.png";
import globalCompliance from "../../assets/global.png";
import expertise from "../../assets/expertise.png";
import scalable from "../../assets/scalability.png";
import partner from "../../assets/partners.png";

const OurEdge = () => {
  const edgePoints = [
    {
      title: "Automation & Technology-First Approach",
      desc: "We adopt cloud platforms, AI tools, and automated systems that reduce manual intervention, minimize errors, and save time.",
      icon: automation,
    },
    {
      title: "Global Perspective, Local Compliance",
      desc: "We understand regional regulations in the US, UK, and Canada, ensuring our solutions are internationally relevant yet locally compliant.",
      icon: globalCompliance,
    },
    {
      title: "Comprehensive Expertise",
      desc: "From day-to-day bookkeeping to advanced financial reporting, tax planning, and data-driven insights — we cover it all.",
      icon: expertise,
    },
    {
      title: "Scalable Solutions",
      desc: "Whether you are a startup, SME, or growing enterprise, our services are tailored to scale with your business needs.",
      icon: scalable,
    },
    {
      title: "Partner for Growth",
      desc: "We don’t just manage accounts; we provide clarity and strategy that empower business leaders to make confident decisions.",
      icon: partner,
    },
  ];

  return (
    <div className="ourEdgeContainer">
      <h2 className="ourEdgeTitle">Our Edge – Why Businesses Choose Us</h2>
      <p className="ourEdgeSubtitle">
        We combine expertise, technology, and scalable solutions to help businesses thrive.
      </p>
      <div className="ourEdgeCards">
        {edgePoints.map((item, index) => (
          <div key={index} className="ourEdgeCard">
            <div className="ourEdgeIcon">
              <img src={item.icon} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurEdge;
