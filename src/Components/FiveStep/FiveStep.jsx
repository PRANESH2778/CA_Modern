// src/components/workmethod/FiveStep.jsx
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
      title: "1. Initial Consultation & Agreement",
      checklist: [
        "Understand objectives & scope.",
        "Define deliverables & timelines.",
        "Execute onboarding agreement.",
      ],
    },
    {
      icon: onboard,
      title: "2. Smooth Onboarding & Business Understanding",
      checklist: [
        "Gather process documents.",
        "Map current workflows.",
        "Finalize communication cadence.",
      ],
    },
    {
      icon: secureData,
      title: "3. Secure Data & Software Access",
      checklist: [
        "Set‑up software & document access.",
        "Ensure data confidentiality & security.",
        "Assign tasks per business needs.",
      ],
    },
    {
      icon: serviceDel,
      title: "4. Service Delivery & Reviews",
      checklist: [
        "Begin production with SLAs.",
        "Weekly status updates.",
        "QA reviews and feedback loop.",
      ],
    },
    {
      icon: learn,
      title: "5. Learning & Improvement",
      checklist: [
        "Track KPIs & quality trends.",
        "Refine SOPs and automations.",
        "Plan scale-up opportunities.",
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

        <div className="five-step__grid">
          {steps.slice(0, 3).map((s) => (
            <WorkflowCard key={s.title} icon={s.icon} title={s.title} checklist={s.checklist} />
          ))}
        </div>

        <div className="five-step__grid five-step__grid--bottom">
          {steps.slice(3).map((s) => (
            <WorkflowCard key={s.title} icon={s.icon} title={s.title} checklist={s.checklist} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FiveStep;