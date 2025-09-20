// src/components/aboutus/ExperiencedTeam.jsx
import React from "react";
import "./Experiencedteam.css";

// Replace these with your actual images (color photos)
import m1 from "../../assets/leader.jpg";
import m2 from "../../assets/leader.jpg";
import m3 from "../../assets/leader.jpg";
import m4 from "../../assets/leader.jpg";
import m5 from "../../assets/leader.jpg";
import m6 from "../../assets/leader.jpg";
import m7 from "../../assets/leader.jpg";
// import m8 from "../../assets/image1.png";

const Member = ({ img, name, role }) => (
  <figure className="et-member">
    <div className="et-photo-wrap">
      <img src={img} alt={name} className="et-photo" />
    </div>
    <figcaption>
      <div className="et-name">{name}</div>
      <div className="et-role">{role}</div>
    </figcaption>
  </figure>
);

const ExperiencedTeam = () => {
  const team = [
    { img: m1, name: "Meet Chauhan", role: "Team Leader" },
    { img: m2, name: "Kalpesh Pipaliya", role: "Team Leader" },
    { img: m3, name: "Mukesh Vishwakarma", role: "Sr. Accountant" },
    { img: m4, name: "Rajat Kumar", role: "Jr. Accountant" },
    { img: m5, name: "Sneha Parikh", role: "Jr. Accountant" },
    { img: m6, name: "Mahir Parihar", role: "Jr. Accountant" },
    { img: m7, name: "Nidhi Chauhan", role: "Intern" },
    // { img: m8, name: "—", role: "—" },
  ];

  return (
    <section className="experienced-team" id="experienced-team">
      <div className="et-container">
        <h2 className="et-title">Our Experienced Team</h2>
        <p className="et-intro">
          At Global Insights KPO, our team is the backbone of our success. With a blend of expertise,
          dedication, and innovation, we work as an extension of your business, delivering
          precision‑driven accounting solutions. Committed to excellence and client satisfaction, we
          ensure efficiency, compliance, and growth at every step.
        </p>

        <div className="et-grid">
          {team.map((m, i) => (
            <Member key={i} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencedTeam;