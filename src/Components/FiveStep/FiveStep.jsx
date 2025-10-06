import React from "react";
import WorkflowCard from "../WorkflowCard/WorkflowCard";
import "./Fivestep.css";

// dummy icons from assets (replace with your actual filenames if different)
import consult from "../../assets/consult.png";
import onboard from "../../assets/onboard.png";
import secureData from "../../assets/secureData.png";
import serviceDel from "../../assets/serviceDel.png";
import learn from "../../assets/learn.png";

const FiveStep = () => {
  const steps = [
    {
      icon: consult,
      title: "1. Client-Centric Onboarding",
      checklist: [
        "We start by understanding your business's unique needs, challenges, and goals.",
        "Through detailed consultations, we tailor our services to align with your objectives, ensuring that our solutions fit seamlessly into your operations."
      ],
    },
    {
      icon: onboard,
      title: "2. Seamless Integration with Your Systems",
      checklist: [
        "Utilizing advanced cloud-based platforms like QuickBooks and Xero, we integrate with your existing systems to streamline processes.",
        "This integration allows for real-time data synchronization, reducing manual errors and enhancing efficiency.",
      ],
    },
    {
      icon: secureData,
      title: "3. Automation-Driven Efficiency",
      checklist: [
        "Our approach leverages automation to handle repetitive tasks such as data entry, reconciliation, and reporting.",
        "This not only speeds up processes but also frees up your resources to focus on strategic decision-making.",
      ],
    },
    {
      icon: serviceDel,
      title: "4. Continuous Monitoring and Reporting",
      checklist: [
        "We provide regular, customized reports that offer insights into your financial health.",
        "Our dashboards are designed to give you a clear view of key performance indicators, enabling timely and informed decisions.",
      ],
    },
    {
      icon: learn,
      title: "5. Scalable Solutions for Growth",
      checklist: [
        "As your business evolves, so do our services.",
        "We offer scalable solutions that grow with you, ensuring that your accounting processes remain efficient and effective at every stage of your business journey.",
      ],
    },
    {
      icon: learn,
      title: "6. Dedicated Support and Expertise",
      checklist: [
        "Our team comprises experienced professionals, including Chartered Accountants (CAs), Company Secretaries (CSs), MBAs, and Certified Public Accountants (CPAs), who bring a wealth of knowledge and expertise to your financial management.",
      ],
    },
  ];

  return (
    <section className="five-step" id="five-step-method">
      <div className="five-step__container">
        <h2 className="five-step__title">Our 5‑Step Work Methodology</h2>
        <p className="five-step__intro">
          At Global Insights KPO, we follow a structured and client‑centric approach to ensure a
          seamless experience, high‑quality service, and long‑term value. Our 5‑step work
          methodology ensures efficient onboarding, transparent communication, and continuous
          improvement.
        </p>

        {/* <div className="five-step__grid">
          {steps.slice(0, 3).map((s) => (
            <WorkflowCard key={s.title} icon={s.icon} title={s.title} checklist={s.checklist} />
          ))}
        </div>

        <div className="five-step__grid five-step__grid--bottom">
          {steps.slice(3).map((s) => (
            <WorkflowCard key={s.title} icon={s.icon} title={s.title} checklist={s.checklist} />
          ))}
        </div> */}
        <div className="five-step__grid">
  {steps.map((s) => (
    <WorkflowCard key={s.title} icon={s.icon} title={s.title} checklist={s.checklist} />
  ))}
</div>
      </div>
    </section>
  );
};

export default FiveStep;