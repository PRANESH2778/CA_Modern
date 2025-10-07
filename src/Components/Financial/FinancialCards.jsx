import React from "react";
import "./FinancialCards.css";
import financial from "../../assets/financialPlanning.png";
import budget from "../../assets/budget.png";
import management from "../../assets/management.png";
import modeling from "../../assets/modeling.png";
import fractional from "../../assets/forecasting.png";
import salesTax from "../../assets/sales-tax.png";
const services = [
    {
      title: "Monthly, Quarterly, and Annual Financial Statements",
      icon: financial,
      items: [
        "Preparation of Profit & Loss, Balance Sheet, and Cash Flow Statements",
        "Compliance with accounting standards and statutory requirements",
        "Periodic review and adjustments for accuracy and completeness",
        "Comparative analysis across reporting periods",
        "Delivery of investor and management-ready financial reports",
      ],
    },
    {
      title: "Business Budgeting, Forecasting, and Variance Analysis",
      icon: budget,
      items: [
        "Comprehensive business budgeting aligned with organizational goals",
        "Forecasting of revenue, expenses, and profitability trends",
        "Variance analysis to track performance against planned targets",
        "Recommendations to enhance cost efficiency and profitability",
        "Continuous review for better financial control and decision-making",
      ],
    },
    {
      title: "Customized MIS Reports for Management",
      icon: management,
      items: [
        "Tailored Management Information System (MIS) reports for leadership teams",
        "Periodic financial summaries with key performance highlights",
        "Comparative performance reports with visual dashboards",
        "Custom KPIs and data segmentation by department or business unit",
        "Facilitates informed decision-making through actionable insights",
      ],
    },
    {
      title: "Financial Modeling, Valuation, and Projections",
      icon: modeling,
      items: [
        "Development of dynamic financial models for business planning",
        "Valuation of companies, startups, or specific projects",
        "Projection of future performance under multiple business scenarios",
        "Sensitivity and risk analysis to support investment decisions",
        "Support for fundraising, M&A, and strategic initiatives",
      ],
    },
  ];
  

const FinancialCards = () => {
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

export default FinancialCards;
