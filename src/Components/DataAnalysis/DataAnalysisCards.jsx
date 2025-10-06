import React from "react";
import "./DataAnalysisCards.css";
import bookkeeping from "../../assets/bookkeeping.png";
import payable from "../../assets/payables.png";
import receivable from "../../assets/receivable.png";
import payroll from "../../assets/payroll.png";
import fractional from "../../assets/forecasting.png";
import salesTax from "../../assets/sales-tax.png";
const services = [
    {
      title: "Dashboard Creation and Reporting",
      icon: fractional,
      items: [
        "Design and development of interactive financial dashboards",
        "Real-time data visualization for quick business insights",
        "Integration with accounting and ERP systems for automated reporting",
        "Custom KPI dashboards tailored to management requirements",
        "Periodic updates and maintenance to ensure accurate reporting",
      ],
    },
    {
      title: "Customized Templates for Recurring Business Needs",
      icon: fractional,
      items: [
        "Creation of reusable Excel and Google Sheet templates",
        "Automation of recurring reports, trackers, and financial summaries",
        "Standardization of processes to ensure consistency across departments",
        "Custom templates for invoicing, expense tracking, and reconciliations",
        "Simplified data entry with built-in formulas and validations",
      ],
    },
    {
      title: "Advanced Problem-Solving in Excel and Automation of Processes",
      icon: fractional,
      items: [
        "Development of advanced Excel tools for accounting and analysis",
        "Automation of manual finance workflows using macros and formulas",
        "Data cleaning, consolidation, and validation solutions",
        "Integration of Excel models with cloud data sources",
        "Training and documentation for automated processes",
      ],
    },
    {
      title: "KPI Tracking and Business Intelligence Solutions",
      icon: fractional,
      items: [
        "Identification and monitoring of key business performance indicators",
        "BI dashboards using tools like Power BI, Tableau, or Google Data Studio",
        "Automated data pipelines for real-time performance reporting",
        "Trend and variance analysis for operational improvement",
        "Strategic insights to support growth and profitability decisions",
      ],
    },
  ];
  

const DataAnalysisCards = () => {
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

export default DataAnalysisCards;
