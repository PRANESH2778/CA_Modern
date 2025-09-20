// src/components/engagement/DataSecurity.jsx
import React from "react";
import Section from "../Common/Section";
import Card from "../Common/Card";

// icons (put these SVGs/PNGs in src/assets)
import endToEnd from "../../assets/endToEndImg.png";
import encrypted from "../../assets/encryCompImg.png";
import webEmail from "../../assets/webEmailSecImg.png";
import strictAccess from "../../assets/strictAccessConImg.png";
import dlp from "../../assets/dataLossPreImg.png";
import antiRansom from "../../assets/antiRansomImg.png";
import onSite from "../../assets/onsiteOpsImg.png";
import audits from "../../assets/regSecImg.png";

const DataSecurity = () => {
  const items = [
    {
      icon: endToEnd,
      title: "End-to-End Protection",
      desc:
        "Advanced firewalls, endpoint security, and real-time threat detection block potential cyber risks.",
    },
    {
      icon: encrypted,
      title: "Encrypted & Compliant",
      desc:
        "Data is fully encrypted and managed following industry best practices for privacy and security.",
    },
    {
      icon: webEmail,
      title: "Web & Email Security",
      desc:
        "Protection against phishing, malicious websites, and email-based attacks to keep communications secure.",
    },
    {
      icon: strictAccess,
      title: "Strict Access Controls",
      desc:
        "Only authorized personnel can access data, with restrictions on unauthorized software or USB usage.",
    },
    {
      icon: dlp,
      title: "Data Loss Prevention (DLP)",
      desc:
        "Measures to prevent accidental leaks, unauthorized data transfers, or insider threats.",
    },
    {
      icon: antiRansom,
      title: "Anti-Ransomware & Threat Prevention",
      desc:
        "Multi-layered defenses safeguard your financial data from cyber threats.",
    },
    {
      icon: onSite,
      title: "On-Site Operations Only",
      desc:
        "All employees work on-site only, ensuring maximum security with no remote access.",
    },
    {
      icon: audits,
      title: "Regular Security Audits & Updates",
      desc:
        "Continuous monitoring, security audits, and timely updates keep our systems secure.",
    },
  ];

  return (
    <Section id="data-security" title="Data Security">
      <div className="data-security-intro" style={{textAlign:"left"}}>
        <p>
          At Global Insights KPO, we prioritize financial data security,
          implementing robust protections against cyber threats, unauthorized
          access, and data breaches. Our multi-layered security approach ensures
          your information remains confidential and protected, giving you
          complete peace of mind. We go beyond industry standards to ensure your
          financial data remains safe, private, and secure—because your trust is
          our top priority.
        </p>
      </div>

      <div className="security-grid">
        {items.map((it) => (
          <Card key={it.title} icon={it.icon} alt={it.title} title={it.title}>
            {it.desc}
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default DataSecurity;