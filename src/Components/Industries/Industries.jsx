// src/components/engagement/Industries.jsx
import React from "react";
import Section from "../Common/Section";
import IndustrySlider from "../IndustrySlider/IndustrySlider";

const Industries = () => {
  return (
    <Section id="industries" title="Industry Expertise" >
      <div className="industries-intro" style={{textAlign:"left"}}>
        <p>
          We blend industry insights with financial expertise to deliver unmatched accounting and
          back-office support. Our team prioritizes accuracy, compliance, and efficiency, enabling
          clients to focus on growth while we manage their financial operations.
        </p>
      </div>
      <IndustrySlider />
    </Section>
  );
};

export default Industries;