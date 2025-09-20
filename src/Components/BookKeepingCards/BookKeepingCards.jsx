import React from "react";
import "./BookKeepingCards.css";
import bookKeeping from '../../assets/Reconciliations.png';
import accounts from '../../assets/accounts-payable.png';
import financial from '../../assets/financial-statement.png';
import payroll from '../../assets/payrollProcessing.png';

const services = [
  {
    title: "Bookkeeping & Reconciliations",
    icon: bookKeeping,
  },
  {
    title: "Accounts Payable & Receivable Management",
    icon: accounts,
  },
  {
    title: "Financial Statement Preparation",
    icon: financial,
  },
  {
    title: "Payroll Processing & Tax Assistance",
    icon: payroll,
  },
];

const BookKeepingCards = () => {
  return (
    <div className="simple-cards-container">
      {services.map((service, index) => (
        <div key={index} className="simple-card">
          <div className="simple-card-icon">
            <img src={service.icon} alt={service.title} />
          </div>
          <h3 className="simple-card-title">{service.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default BookKeepingCards;
