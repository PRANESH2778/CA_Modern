// src/components/engagement/Unique.jsx
import React from "react";
import Section from "../common/Section";

const Unique = () => {
  return (
    <Section id="unique" title="What makes us Unique?">
      <div className="grid-2">
        {[
          ["Client-first Approach","We act as an extension of your team, ensuring a hands-on, personalized experience with direct communication."],
          ["Tech-Driven Efficiency","We implement automation, process optimization, and smart workflows to eliminate inefficiencies."],
          ["Affordable","Get top-tier accounting services at cost-effective rates without compromising on quality or precision."],
          ["Data Security","Your financial data is safeguarded with strict confidentiality measures and robust security protocols."],
          ["Industry Expertise","From retail and healthcare to IT, franchises, and real estate, our team understands the nuances of different industries."],
          ["Big 4 & Fortune 500 Experience","Our professionals bring top-tier expertise, ensuring high-quality financial management."]
        ].map(([h, p]) => (
          <article className="card" key={h}>
            <h4>{h}</h4>
            <p>{p}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Unique;