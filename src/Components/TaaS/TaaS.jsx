// src/components/engagement/TaaS.jsx
import React from "react";
import Section from "../Common/Section";
import taasImg from "../../assets/taasImg.png";

const TaaS = () => {
  return (
    <Section id="taas" title="Team-as-a-Service (TaaS)">
      <div className="ts-card">
        <div className="ts-top">
          <div className="ts-illustration">
            <img alt="TaaS illustration" src={taasImg} />
          </div>

          <div className="ts-copy">
            <p>
              Our Team as a Service (TaaS) model provides a fully managed accounting team that
              integrates seamlessly with your business. Instead of hiring multiple in-house
              accountants, you get access to a dedicated team of Certified accountants, AR/AP
              Specialists &amp; Bookkeepers who handle everything from bookkeeping to financial
              reporting under expert supervision.
            </p>
          </div>
        </div>

        <hr className="ts-divider" />

        <div className="ts-how">
          <h3 className="ts-subtitle">How It Works:</h3>
          <ul className="ts-list">
            <li>We assign a team tailored to your needs, including qualified accountants and support staff.</li>
            <li>The team operates as an extension of your finance department, following your workflows and reporting structures.</li>
          </ul>
        </div>

        <hr className="ts-divider" />

        <div className="ts-bottom">
          <div>
            <h3 className="ts-subtitle">Benefits</h3>
            <ul className="ts-list">
              <li>Reduced Overheads And Training Costs</li>
              <li>Reduced Dependency On One Individual</li>
              <li>Access To A Pool Of Resources</li>
              <li>High Operational Efficiency</li>
            </ul>
          </div>
          <div>
            <h3 className="ts-subtitle">Ideal For?</h3>
            <ul className="ts-list">
              <li>Growing businesses needing a scalable accounting solution.</li>
              <li>CPA firms looking to expand capacity without increasing headcount.</li>
              <li>Companies requiring end-to-end financial management without the cost of an in-house team.</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TaaS;