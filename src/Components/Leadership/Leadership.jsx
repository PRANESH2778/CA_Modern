// src/components/aboutus/Leadership.jsx
import React from "react";
import "./Leadership.css";

// Dummy photos (replace with real assets)
import p1 from "../../assets/leader1.png";
import p2 from "../../assets/leader2.png";
import p3 from "../../assets/leader3.png";

const LeaderCard = ({ photo, name, role, bio }) => (
  <article className="leader-card">
    <div className="leader-photo-wrap">
      <img src={photo} alt={name} />
    </div>
    <h3 className="leader-name">{name}</h3>
    <p className="leader-role">{role}</p>
    <p className="leader-bio">{bio}</p>
  </article>
);

const Leadership = () => {
  const people = [
    {
      photo: p1,
      name: "Bharat Nirankari, CA",
      role: "Co‑Founder & MD",
      bio:
        "Bharat is a Chartered Accountant (equivalent to a US CPA) with 8+ years' experience across accounting and finance. He is a QuickBooks ProAdvisor and Xero Certified Expert. With global client exposure, he drives cost‑effective, efficient bookkeeping and advisory solutions while maintaining excellence in service and deadlines.",
    },
    {
      photo: p2,
      name: "Bhavik Gajakuwala, CA",
      role: "Co‑Founder & MD",
      bio:
        "Bhavik is a Chartered Accountant (equivalent to US CPA) with 8+ years' experience in accounting, taxation, and audit. He’s QuickBooks Pro‑advisor and Zoho Expert. He guides businesses with precise financial insights, delivering high‑quality solutions for sustainable growth.",
    },
    {
      photo: p3,
      name: "Meet Patel, CA",
      role: "Director (New Zealand Division)",
      bio:
        "Meet, a Chartered Accountant and Xero Certified Expert, leads the New Zealand division, streamlining accounting & taxation services for NZ businesses. He focuses on client relationships, growth, and timely, high‑quality solutions.",
    },
  ];

  return (
    <section className="leadership" id="leadership">
      <div className="leadership-container">
        <h2 className="leadership-title">Leadership Team</h2>
        <p className="leadership-intro">
          At the heart of Global Insights KPO are Bharat and Bhavik, the founding partners who have
          led the firm to be a trusted name in outsourced accounting and consultancy. Together, they
          bring a blend of strategic insight, client‑focused innovation, and a shared drive to help
          businesses succeed by providing quality‑driven financial solutions.
        </p>

        <div className="leader-grid">
          {people.map((p) => (
            <LeaderCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;