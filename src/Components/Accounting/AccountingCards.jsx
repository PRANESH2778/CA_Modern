import React from "react";
import "./AccountingCards.css";
import bank from "../../assets/bank.png";
import payable from "../../assets/payables.png";
import expense from "../../assets/expense.png";
import payroll from "../../assets/payroll.png";
import engagement from "../../assets/engagement.png";
import salesTax from "../../assets/sales-tax.png";
const services = [
    {
      title: "Bank and Credit Card Statement Reconciliation",
      icon: bank,
      items: [
        "Accurate reconciliation of bank and credit card accounts",
        "Identification of missing or duplicate transactions",
        "Timely updates to ensure books reflect real-time balances",
        "Resolution of discrepancies between books and bank statements",
        "Preparation of monthly reconciliation reports for management review",
      ],
    },
    {
      title: "Accounts Payable and Receivable Management",
      icon: payable,
      items: [
        "Systematic management of customer invoices and supplier bills",
        "Timely processing of vendor payments and collection follow-ups",
        "Monitoring outstanding balances and payment schedules",
        "Preparation of aging reports and credit control analysis",
        "Ensuring smooth cash flow through efficient AP & AR operations",
      ],
    },
    {
      title: "Payroll Processing",
      icon: payroll,
      items: [
        "Monthly salary computation for all employees",
        "TDS and statutory compliance (PF, ESI, PT, etc.)",
        "Preparation of payslips and payroll registers",
        "Reconciliation of payroll-related accounts",
        "Filing of monthly, quarterly, and annual payroll returns",
      ],
    },
    {
      title: "Expense Tracking and Reporting",
      icon: expense,
      items: [
        "Recording and categorization of business expenses",
        "Automation of expense entries through digital receipts",
        "Periodic expense analysis to identify cost-saving opportunities",
        "Custom expense reports for management decision-making",
        "Ensuring compliance with internal policies and tax laws",
      ],
    },
    {
      title: "Engagement Models",
      icon: engagement,
      items: [
        "Assignment-Based: Pay per project or task",
        "Fixed Monthly Packages: Ongoing bookkeeping support tailored to your business size",
        "Flexible engagement structures to meet specific client needs",
        "Transparent pricing and deliverables for each model",
        "Scalable options to adapt as your business grows",
      ],
    },
  ];
  

const AccountingCards = () => {
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

export default AccountingCards;
