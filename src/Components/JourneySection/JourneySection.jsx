import React from "react";
import "./JourneySection.css";

const JourneySection = () => {
  const data = [
    { value: "8+", label: "Years of Experience" },
    { value: "25+", label: "Software Expertise" },
    { value: "94%", label: "Client Retention" },
    { value: "<20min", label: "Turnaround Time" },
    { value: "60%", label: "Upto Increased Savings" },
    { value: "5+", label: "Countries Served" },
  ];

  return (
    <div className="journeyContainer">
      <h2 className="journeyTitle">Our Journey so far.....</h2>
      <p className="journeySubtitle">
        Validated by our trusted clients. See our impact at a glance.
      </p>
      <div className="journeyCards">
        {data.map((item, index) => (
          <div key={index} className="journeyCard">
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneySection;