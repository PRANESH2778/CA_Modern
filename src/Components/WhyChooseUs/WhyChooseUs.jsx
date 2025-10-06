import React from "react";
import "./WhyChooseUs.css";
import affordable from "../../assets/affordablewhyChooseUs.png";
import DataSecurity from "../../assets/dataSecuritywhyChooseUs.png";
import Efficient from "../../assets/efficientwhyChooseUs.png";
import financial from "../../assets/financialwhyChooseUs.png";
import team from "../../assets/teamwhyChooseUs.png";
import Tailored from "../../assets/tailoredwhyChooseUs.png";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "One-Stop Financial Solution",
      desc: "From bookkeeping to tax consultancy and Virtual CFO services — we cover all your financial needs under one roof.",
      icon: financial,
    },
    {
      title: "Data Security",
      desc: "Your financial data is safe with us — protected by strict confidentiality practices and secure digital systems.",
      icon: DataSecurity,
    },
    {
      title: "Expert & Qualified Team",
      desc: "Our strength lies in our people — CA, CS, MBA, and CPA-qualified professionals with hands-on experience in financial reporting, compliance, and advisory.",
      icon: team,
    },
    {
      title: "Tech-Efficient & Automation-Ready",
      desc: "We leverage cloud platforms, automation, and dashboards to deliver faster, smarter, and error-free solutions.",
      icon: Efficient,
    },
    {
      title: "Affordable & Scalable",
      desc: "High-quality services at competitive costs, designed to grow with your business at every stage.",
      icon: affordable,
    },
    {
      title: "Tailored for Every Client",
      desc: "We understand that no two businesses are alike, which is why we customize our solutions to fit your goals.",
      icon: Tailored,
    },
  ];

  return (
    <div className="whyContainer">
      <h2 className="whyTitle">Why Choose Us</h2>
      <p className="whySubtitle">
        We combine expertise, technology, and client-first solutions to help your business thrive.
      </p>
      <div className="whyCards">
        {reasons.map((item, index) => (
          <div key={index} className="whyCard">
            <div className="whyIcons">
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

export default WhyChooseUs;
