// src/components/aboutus/Leadership.jsx
import React, { useState } from "react";
import "./Leadership.css";

const Leadership = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Niraj Bhaiya",
      title: "Co-Founder",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
      shortDescription:
        "CA with 5+ years' experience; QuickBooks/Xero expert. Builds automated, real-time MIS dashboards for faster decisions.",
      fullDescription: `Niraj Bhaiya – Co-Founder
A Chartered Accountant with over 5 years of professional experience, Niraj is the driving force behind Accusource Global Advisors. He is a certified QuickBooks and Xero expert with deep expertise in automation, data analysis, and customized dashboards. His ability to design real-time MIS reporting systems helps management teams make faster, smarter, and more informed business decisions. Niraj combines strong financial acumen with a passion for technology, making him a leader in transforming traditional accounting into tech-enabled, insight-driven solutions.`,
    },
    {
      id: 2,
      name: "Ajay Agrawal",
      title: "Co-Founder",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
      shortDescription:
        "CA with 5+ years; expert in bookkeeping, tax consultancy, and Virtual CFO services.",
      fullDescription: `Ajay Agrawal – Co-Founder
Ajay is a Chartered Accountant with more than 5 years of experience and a certified QuickBooks expert, specializing in bookkeeping, tax consultancy, and Virtual CFO services. He has helped numerous businesses streamline their accounting processes, establish strong financial controls, and optimize compliance. Ajay works closely with management teams, offering Virtual CFO support to provide financial clarity, improve decision-making, and ensure sustainable business growth. His blend of hands-on bookkeeping expertise and strategic advisory makes him a trusted partner for businesses of all sizes.`,
    },
    {
      id: 3,
      name: "Vineet Jain",
      title: "Co-Founder",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
      shortDescription:
        "CA and US CPA with 5+ years; Big 4/MNC exposure. Focus on reporting, Virtual CFO, corporate finance.",
      fullDescription: `Vineet Jain – Co-Founder
Vineet is a Chartered Accountant and US CPA with over 5 years of experience, including significant exposure with Big 4 firms and multinational companies in Dubai. His core expertise lies in financial reporting, Virtual CFO services, and corporate finance. Vineet has guided businesses in preparing global-standard financial reports, managing complex compliance requirements, and driving financial strategies for growth. With strong skills in financial modeling, valuations, and fundraising support, he plays a crucial role in helping companies achieve long-term financial stability and investor confidence.`,
    },
  ];

  const managingPartners = teamMembers.slice(0, 3);
  const team = teamMembers.slice(3);

  const handleOpenModal = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className="leadership" id="leadership">
      <div className="leadership-container">
        <h2 className="team-title">Our Team</h2>

        <h3 className="team-section-title">Meet our Leadership Team</h3>
        <div className="team-grid">
          {managingPartners.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="card-image">
                <img src={member.image} alt={member.name} />
                <div className="card-overlay">
                  <p>{member.shortDescription}</p>
                  <span onClick={() => handleOpenModal(member)} className="read-more">Read More</span>
                </div>
              </div>
              <div className="card-info">
                <h3>{member.name}</h3>
                <p>{member.title}</p>
              </div>
            </div>
          ))}
        </div>


        {selectedMember && (
          <div className="modal" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={handleCloseModal}>&times;</button>
              <img src={selectedMember.image} alt={selectedMember.name} className="modal-image" />
              <h2>
                {selectedMember.name} ({selectedMember.title})
              </h2>
              <p>{selectedMember.fullDescription}</p>
              {selectedMember.specializations && (
                <ul className="specializations">
                  {selectedMember.specializations.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Leadership;