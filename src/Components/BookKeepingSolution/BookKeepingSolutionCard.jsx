import React from "react";
import "./BookKeepingSolutionCard.css";

const services = [
  {
    title: "C2C Partnership Model",
    icon: "??",
    points: [
      {
        subtitle: "Client-Centric Approach",
        text: "Assign us a large dedicated client, and we’ll deploy our team-as-a-service (TaaS) tailored to your client's needs.",
      },
      {
        subtitle: "Direct Client Communication",
        text: "Our team manages both back-end operations and client interactions, ensuring seamless workflows.",
      },
      {
        subtitle: "Flexible Resource Allocation",
        text: "Scale the team as per client requirements for cost-effective and efficient service delivery.",
      },
    ],
  },
  {
    title: "Portfolio Management Model",
    icon: "??",
    points: [
      {
        subtitle: "Dedicated Client Portfolio",
        text: "Assign us a portfolio of clients, managed by our expert team.",
      },
      {
        subtitle: "Back-Office Support",
        text: "We handle accounting and bookkeeping in the back end and report to your team for client communication.",
      },
      {
        subtitle: "Efficiency & Expertise",
        text: "Streamlined processes reduce turnaround times, ensuring high-quality, consistent service.",
      },
    ],
  },
];

const BookKeepingSolutionCard = () => {
  return (
    <div className="service-cards-container">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <div className="service-card-icon">{service.icon}</div>
          <h2 className="service-card-title">{service.title}</h2>
          <ul className="service-card-list">
            {service.points.map((point, idx) => (
              <li key={idx}>
                <strong>{point.subtitle}</strong> – {point.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BookKeepingSolutionCard;