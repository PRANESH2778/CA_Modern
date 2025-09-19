import React from "react";
import "./BookKeepingCards.css";

const services = [
  {
    title: "Bookkeeping & Reconciliations",
    icon: "??", // replace with your SVG/icon
  },
  {
    title: "Accounts Payable & Receivable Management",
    icon: "??",
  },
  {
    title: "Financial Statement Preparation",
    icon: "??",
  },
  {
    title: "Payroll Processing & Tax Assistance",
    icon: "??",
  },
];

const BookKeepingCards = () => {
  return (
    <div className="simple-cards-container">
      {services.map((service, index) => (
        <div key={index} className="simple-card">
          <div className="simple-card-icon">{service.icon}</div>
          <h3 className="simple-card-title">{service.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default BookKeepingCards;