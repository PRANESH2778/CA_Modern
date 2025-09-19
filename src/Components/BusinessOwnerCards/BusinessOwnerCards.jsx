import React from "react";
import "./BusinessOwnerCards.css";

const services = [
  {
    title: "Bookkeeping & Accounting",
    icon: "??", // you can replace with img or SVG
    items: [
      "Daily/Weekly transactional work & general ledger maintenance",
      "US GAAP Compliant accounting",
      "Bank categorization & reconciliations",
      "Month-end closing",
      "Past accounts cleanup & reconciliations",
      "Monthly accruals for expenses, revenue & payroll",
      "Year-end finalization of books",
    ],
  },
  {
    title: "Accounts Payable Management (AP Management)",
    icon: "??",
    items: [
      "Purchase order management",
      "Vendor master data maintenance",
      "Vendor invoice processing",
      "Payment processing",
      "Expense management",
      "Vendor reconciliation",
      "Vendor aging reporting & analysis",
    ],
  },
  {
    title: "Accounts Receivable Management (AR Management)",
    icon: "??",
    items: [
      "Sales order & estimate management",
      "Periodic invoicing",
      "Payment collection & reminders",
      "Reviewing credit terms",
      "Customer reconciliation",
      "Managing customer refunds",
      "Customer aging reporting & analysis",
    ],
  },
  {
    title: "Payroll Management",
    icon: "??",
    items: [
      "Payroll processing at regular intervals",
      "Monthly/Quarterly/Annual payroll tax return filings",
      "Periodic review of employee hours, per-hour rates & fixed salaries",
      "Payroll accruals & reconciliations",
    ],
  },
  {
    title: "Fractional CFO Services",
    icon: "??",
    items: [
      "Budgeting & costing analysis",
      "Financial projections",
      "Capital budgeting",
      "Financial planning & analysis (FP&A)",
      "MIS reporting",
      "Software transition management",
      "Standard Operating Procedures (SOP) drafting",
      "Workflow automation"
    ],
  },
   {
    title: "Sales & Use Tax Preparation",
    icon: "??",
    items: [
      "Determination of taxable & exempt supplies",
      "Sales & use tax calculation & reporting",
      "Nexus determination",
      "Filing & remitting",
      "Consulting & advisory services",
    ],
  },
];

const BusinessOwnerCards = () => {
  return (
    <div className="cards-container">
      {services.map((service, index) => (
        <div key={index} className="card">
          <div className="card-icon">{service.icon}</div>
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

export default BusinessOwnerCards;
