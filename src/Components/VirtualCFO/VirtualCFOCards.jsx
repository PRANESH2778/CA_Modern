import React from "react";
import "./VirtualCFOCards.css";
import budget from "../../assets/budget.png";
import cash from "../../assets/cash.png";
import financial from "../../assets/financialPlanning.png";
import payroll from "../../assets/payroll.png";
import kpi from "../../assets/kpi.png";
import salesTax from "../../assets/sales-tax.png";
const services = [
    {
      title: "Cash Flow Monitoring and Optimization",
      icon: cash,
      items: [
        "Continuous tracking of cash inflows and outflows",
        "Identification of cash surpluses and shortages",
        "Forecasting future cash requirements for business continuity",
        "Optimizing payment and collection cycles to improve liquidity",
        "Preparation of detailed cash flow statements and reports",
      ],
    },
    {
      title: "Budgeting and Variance Analysis",
      icon: budget,
      items: [
        "Preparation of annual and quarterly budgets",
        "Comparison of actual performance with planned targets",
        "Detailed variance reports highlighting key deviations",
        "Analysis of root causes for budget variances",
        "Recommendations for cost control and performance improvement",
      ],
    },
    {
      title: "Financial Planning and Forecasting",
      icon: financial,
      items: [
        "Strategic financial modeling for short and long-term goals",
        "Revenue, cost, and profit forecasting based on trends",
        "Scenario analysis for decision-making and risk management",
        "Alignment of financial plans with business objectives",
        "Periodic updates to reflect market or operational changes",
      ],
    },
    {
      title: "KPI Tracking and Management Insights",
      icon: kpi,
      items: [
        "Identification of key financial and operational performance indicators",
        "Dashboard-based tracking of critical metrics in real-time",
        "Trend analysis to measure growth and efficiency",
        "Preparation of management reports with actionable insights",
        "Supporting data-driven strategic decisions for business success",
      ],
    },
  ];
  

const VirtualCFOCards = () => {
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

export default VirtualCFOCards;
