// src/components/workmethod/OurWorkflow.jsx
import React from "react";
import workflowImg from "../../assets/ourWorkflow.png";
import "../../styles/workflow.css";

const OurWorkflow = () => {
  return (
    <section className="wf-section" id="our-workflow">
      <div className="wf-container">
        <h2 className="wf-title">Our Workflow</h2>
        <div className="wf-image-wrap">
          <img src={workflowImg} alt="Our Workflow" className="wf-image" />
        </div>
      </div>
    </section>
  );
};

export default OurWorkflow;