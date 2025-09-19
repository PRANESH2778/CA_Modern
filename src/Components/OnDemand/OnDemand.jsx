// src/components/engagement/OnDemand.jsx
import React from "react";
import Section from "../Common/Section";
import onDemandImg from "../../assets/onDemandImg.png";

const OnDemand = () => {
  return (
    <Section id="on-demand" title="On-demand Support">
      <div className="od-card">
        <div className="od-top">
          <div className="od-copy">
            <p>
              Our Hourly Contracts model provides on-demand access to experienced accounting
              professionals, allowing you to scale your support as needed. Whether you require
              assistance with bookkeeping, reconciliations, or financial analysis, our team is
              available to help whenever you need.
            </p>
          </div>
          <div className="od-illustration">
            <img alt="On-demand illustration" src={onDemandImg} />
          </div>
        </div>

        <hr className="od-divider" />

        <div className="od-how">
          <h3 className="od-subtitle">How It Works</h3>
          <ul className="od-list">
            <li>You engage our team on an hourly basis, ensuring you only pay for the actual work done.</li>
            <li>Ideal for businesses that need occasional support rather than a full-time resource.</li>
            <li>Perfect for handling peak workloads, urgent tasks, or specialized accounting needs.</li>
          </ul>
        </div>

        <hr className="od-divider" />

        <div className="od-bottom">
          <div>
            <h3 className="od-subtitle">Benefits</h3>
            <ul className="od-list">
              <li>Handpick Expert Talent</li>
              <li>Cost-Optimized Billing</li>
              <li>Ramp Up Or Down Seamlessly Based On Demands/Needs</li>
              <li>Minimized Financial Exposure</li>
            </ul>
          </div>
          <div>
            <h3 className="od-subtitle">Ideal For?</h3>
            <ul className="od-list">
              <li>Small businesses &amp; startups needing accounting support without a fixed cost.</li>
              <li>CPA firms with fluctuating workloads or project-based needs.</li>
              <li>Companies requiring short-term assistance for audits, clean-ups, or financial reviews.</li>
              <li>Faster Scaling</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OnDemand;