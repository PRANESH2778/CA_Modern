// src/components/aboutus/ExperiencedTeam.jsx
import React from "react";
import "./ExperiencedTeam.css";

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
  const imagePool = [m1, m2, m3, m4, m5, m6, m7];
  const rawTeam = [
    { name: "Soniya", role: "BD Executive" },
    { name: "Surbhi", role: "BD Executive" },
    { name: "Ankit", role: "Manager" },
    { name: "CA Shashank", role: "Senior Executive Accountant" },
    { name: "CA Sakshi", role: "Senior Associate" },
    { name: "CA Priya", role: "Senior Associate" },
    { name: "Dhaval", role: "Executive Accountant" },
    { name: "Sonal", role: "Executive Accountant" },
    { name: "Pragati", role: "Senior Accountant" },
    { name: "Dhwani", role: "Senior Accountant" },
  ];

  const team = rawTeam.map((member, index) => ({
    img: imagePool[index % imagePool.length],
    name: member.name,
    role: member.role,
  }));

  return (
    <section className="experienced-team" id="experienced-team">
      <div className="et-container">
        <h2 className="et-title">Meet Our Team Members</h2>

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