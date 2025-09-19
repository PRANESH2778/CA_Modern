import React, { useState } from "react";
import "./TrustedOutsourcingTeam.css";

const TrustedOutsourcingTeam = () => {
  const [activeTab, setActiveTab] = useState("cpa");

  return (
    <section className="outsourcing">
      <div className="outsourcing-content">
        <h2 className="outsourcing-title">Trusted Outsourcing team</h2>
        <p className="outsourcing-subtitle">
          From meticulous record-keeping to strategic financial leadership, our expert accountants
          and fractional CFOs are ready to optimize your productivity and drive growth.
        </p>

        <div className="outsourcing-tabs">
          <button
            className={`tab ${activeTab === "cpa" ? "active" : ""}`}
            onClick={() => setActiveTab("cpa")}
          >
            For CPA & Bookkeeping Firm
          </button>
          <button
            className={`tab ${activeTab === "business" ? "active" : ""}`}
            onClick={() => setActiveTab("business")}
          >
            For Business Owners
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "cpa" && (
        <div className="backoffice-card">
          <h3 className="card-title">Back Office Support</h3>
          <p className="card-text">
            Designed specifically for CPA and bookkeeping firms, our Back Office Support services
            help you scale effortlessly by outsourcing routine accounting tasks. Our team works as
            an extension of your firm, and with our white-label support, your firm can focus on
            high-value advisory services while we take care of the backend work.
          </p>
          <button className="card-btn">Learn more about our services</button>

          <div className="card-footer">
            <div className="card-icons">
              <span>📧</span>
              <span>🛒</span>
              <span>📞</span>
              <span>⏰</span>
            </div>
            <div className="card-illustration">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4149/4149670.png"
                alt="24/7 support"
              />
            </div>
          </div>
        </div>
      )}

      {activeTab === "business" && (
        <div className="backoffice-card">
          <h3 className="card-title">For Business Owners</h3>
          <p className="card-text">
            As an outsourcing firm, we offer a comprehensive range of services to help businesses
            manage their accounts & finances effectively. To keep business managers/individuals free
            from hustles of maintenance of books, we are here for you by providing cost-effective
            and efficient services.
          </p>
          <button className="card-btn">Learn more about our services</button>

          <div className="card-footer">
            <div className="card-illustration">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Business Owners"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrustedOutsourcingTeam;
