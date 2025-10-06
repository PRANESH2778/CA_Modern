import React from "react";
import "./OutsourcedCards.css";
import bookkeeping from "../../assets/bookkeeping.png";
import payable from "../../assets/payables.png";
import receivable from "../../assets/receivable.png";
import payroll from "../../assets/payroll.png";
import fractional from "../../assets/forecasting.png";
import salesTax from "../../assets/sales-tax.png";
const services = [
    {
      title: "Scale Operations Without Increasing Headcount",
      icon: receivable,
      items: [
        "Expand your accounting capacity without hiring additional staff",
        "Leverage dedicated offshore/onshore teams for back-office support",
        "Flexible engagement models to scale up or down based on workload",
        "Streamlined communication and task management systems",
        "Achieve growth while maintaining cost efficiency and agility",
      ],
    },
    {
      title: "Access Experienced Resources On-Demand",
      icon: receivable,
      items: [
        "Get access to qualified accountants, analysts, and finance professionals as needed",
        "Seamless integration with your existing team and workflow tools",
        "Quick onboarding process to ensure minimal downtime",
        "Availability across different time zones for global clients",
        "Expertise across multiple industries and accounting platforms",
      ],
    },
    {
      title: "Maintain Quality, Accuracy, and Timely Delivery for Clients",
      icon: receivable,
      items: [
        "Strict adherence to accounting standards and process checklists",
        "Multi-level review and verification to ensure data accuracy",
        "Automated workflows to reduce manual errors and delays",
        "Periodic quality audits and performance tracking",
        "Commitment to deadlines with transparent progress updates",
      ],
    },
  ];
      

const OutsourcedCards = () => {
  return (
    <div className="cards-container">
      {services.map((service, index) => (
        <div key={index} className="card">
          <div className="card-icon">
            <img src={service.icon} alt={service.title} />
          </div>
          <h3 className="card-title">{service.title}</h3>
          <ul className="card-list">
            {service.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OutsourcedCards;
