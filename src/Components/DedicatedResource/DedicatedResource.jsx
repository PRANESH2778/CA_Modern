// src/components/engagement/DedicatedResource.jsx
import React from "react";
import Section from "../Common/Section";
import dedicatedResourceImg from "../../assets/dedicatedResourceImg.png";

const DedicatedResource = () => {
  return (
    <Section id="dedicated-resource" title="Dedicated Resource">
      <div className="dr-card">
        <div className="dr-top">
          <div className="dr-copy">
            <p>
              For consistent and exclusive support, we provide dedicated accounting professionals who work as an extension of your team. A Dedicated Resource ensures your business has consistent, high-quality accounting support without the overhead of hiring in-house. This model enhances efficiency, scalability, and cost savings, allowing you to focus on growth while we handle your financial operations seamlessly.
            </p>

            <h3 className="dr-subtitle">Engagement Options</h3>
            <ul className="dr-list">
              <li>Full-Time Equivalent (FTE) – 160 hours/month</li>
              <li>Part-Time Equivalent (PTE) – 80 hours/month</li>
            </ul>
          </div>

          <div className="dr-illustration">
            <img
              alt="Dedicated Resource illustration"
              src={dedicatedResourceImg}
            />
          </div>
        </div>

        <hr className="dr-divider" />

        <div className="dr-bottom">
          <div>
            <h3 className="dr-subtitle">Hire</h3>
            <ul className="dr-list">
              <li>Bookkeeper</li>
              <li>Certified Accountant</li>
              <li>AP/AR Specialist</li>
              <li>Payroll Executive</li>
              <li>Fractional CFO</li>
              <li>Data Entry Specialist</li>
            </ul>
          </div>

          <div>
            <h3 className="dr-subtitle">Benefits</h3>
            <ul className="dr-list">
              <li>Uninterrupted Round-the-Clock Support</li>
              <li>Access to Specialized Skills</li>
              <li>Cost Effective Model</li>
              <li>Reduced Training Time</li>
              <li>Dedicated Point of Contact</li>
              <li>Faster Scaling</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default DedicatedResource;