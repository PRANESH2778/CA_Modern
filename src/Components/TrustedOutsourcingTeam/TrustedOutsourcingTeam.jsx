import React, { useState } from "react";
import "./TrustedOutsourcingTeam.css";
import { useNavigate } from "react-router-dom";

const TrustedOutsourcingTeam = () => {
  const [activeTab, setActiveTab] = useState("acc");
  const navigate = useNavigate();

  const serviceTabs = [
    {
      id: "acc",
      title: "Accounting & Bookkeeping Services",
      heading: "Accounting & Bookkeeping Services",
      text: `End-to-end bookkeeping including bank and credit card reconciliation, accounts payable & receivable, payroll, and more. Flexible engagement:assignment-based or fixed monthly packages.`,
      image: "https://cdn-icons-png.flaticon.com/512/4149/4149670.png",
      navigateTo: () => {
        navigate("/services/accounting");
        window.scrollTo(0, 0);
      },
    },
    {
      id: "vir",
      title: "Virtual CFO Services",
      heading: "Virtual CFO Services",
      text: `Strategic financial oversight including cash flow management, budgeting, variance analysis, and planning to help businesses make informed decisions.`,
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      navigateTo: () => {
        navigate("/services/virtual-cfo");
        window.scrollTo(0, 0);
      },
    },
    {
      id: "fin",
      title: "Financial Reporting Services",
      heading: "Financial Reporting Services",
      text: `Preparation of country-specific GAAP-compliant financial statements,monthly MIS,budgeting and forecasting,financial modeling, and business projections.`,
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png",
      navigateTo: () => {
        navigate("/services/financial");
        window.scrollTo(0, 0);
      },
    },
    {
      id: "dat",
      title: "Data Analysis Services",
      heading: "Data Analysis Services",
      text: `Transform data into insights with Excel dashboards, Power BI, Google Data Studio, and customized templates for problem-solving and business intelligence.`,
      image: "https://cdn-icons-png.flaticon.com/512/1995/1995531.png",
      navigateTo: () => {
        navigate("/services/data-analysis");
        window.scrollTo(0, 0);
      },
    },
    {
      id: "out",
      title: "Outsourced Back Office Support for CPA & Accounting Firms",
      heading: "Outsourced Back Office Support for CPA & Accounting Firms",
      text: `Provide skilled, cost-effective resources for bookkeeping, accounting, and financial tasks—helping CPA and bookkeeping firms scale efficiently while maintaining quality.`,
      image: "https://cdn-icons-png.flaticon.com/512/3371/3371033.png",
      navigateTo: () => {
        navigate("/services/outsourced");
        window.scrollTo(0, 0);
      },
    },
  ];

  const activeService = serviceTabs.find((tab) => tab.id === activeTab);

  return (
    <section className="outsourcing">
      <div className="outsourcing-content">
        <h2 className="outsourcing-title">Services</h2>
        <p className="outsourcing-subtitle">
          We offer a range of tech-enabled, client-focused financial solutions designed to streamline operations, enhance decision-making, and support business growth.
        </p>

        <div className="outsourcing-tabs">
          {serviceTabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Active Tab Content */}
      {activeService && (
        <div className="backoffice-card">
          <h3 className="card-title">{activeService.heading}</h3>
          <p className="card-text">{activeService.text}</p>
          <button className="card-btn" onClick={activeService.navigateTo}>
            Learn more about our services
          </button>

          <div className="card-footer">
            <div className="card-illustration">
              <img src={activeService.image} alt={activeService.heading} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrustedOutsourcingTeam;