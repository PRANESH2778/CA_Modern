import React from "react";
import "./ValuesSection.css";
import integrityIcon from "../../assets/integrity.png";
import excellenceIcon from "../../assets/excellence.png";
import innovationIcon from "../../assets/innovation.png";
import clientCentricIcon from "../../assets/clientCentric.png";

const ValuesSection = () => {
  const values = [
    {
      title: "Integrity",
      desc: "Building trust through honesty and ethical practices.",
      icon: integrityIcon,
    },
    {
      title: "Excellence",
      desc: "Striving for precision and high standards in every deliverable.",
      icon: excellenceIcon,
    },
    {
      title: "Innovation",
      desc: "Adopting automation, AI, and digital-first tools to stay future-ready.",
      icon: innovationIcon,
    },
    {
      title: "Client-Centricity",
      desc: "Designing solutions that fit unique client needs across industries and geographies.",
      icon: clientCentricIcon,
    },
  ];

  return (
    <div className="valuesContainer">
      <h2 className="valuesTitle">Values at AccuSource Global Advisors</h2>
      <div className="valuesCards">
        {values.map((item, index) => (
          <div key={index} className="valueCard">
            <div className="valueIcon">
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

export default ValuesSection;
