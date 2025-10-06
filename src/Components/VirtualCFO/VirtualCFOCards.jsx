import React from "react";
import "./VirtualCFOCards.css";
import bookkeeping from "../../assets/bookkeeping.png";
import payable from "../../assets/payables.png";
import receivable from "../../assets/receivable.png";
import payroll from "../../assets/payroll.png";
import fractional from "../../assets/forecasting.png";
import salesTax from "../../assets/sales-tax.png";
const services = [
    {
      title: "Cash Flow Monitoring and Optimization",
      icon: payroll,
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
      icon: payroll,
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
      icon: payroll,
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
      icon: payroll,
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
