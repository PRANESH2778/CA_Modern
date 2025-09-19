// src/pages/EngagementModel.jsx
import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import HeroBanner from "../../Components/Common/HeroBanner";
import DedicatedResource from "../../Components/DedicatedResource/DedicatedResource";
import TaaS from "../../Components/TaaS/TaaS";
import OnDemand from "../../Components/OnDemand/OnDemand";
import Unique from "../../Components/Unique/Unique";
import DataSecurity from "../../Components/DataSecurity/DataSecurity";
import Industries from "../../Components/Industries/Industries";
import HeroIntro from "../../Components/Common/HeroIntro";

const heroIntroValue = "Global Insights KPO has flexible engagement models tailored to your \
                        needs. Whether you’re a CPA firm, bookkeeping company, or business \
                        owner, Global Insights KPO provides scalable solutions to streamline \
                        your accounting operations. From dedicated professionals to fully \
                        managed teams, we ensure efficiency, accuracy, and compliance."
const bannerName = "Engagement Model"
const EngagementModel = () => {
  return (
    <>
      <HeroBanner value={bannerName}/>
      <HeroIntro value={heroIntroValue}/>
      <main>
        <DedicatedResource />
        <TaaS />
        <OnDemand />
        {/* <Unique /> */}
        <DataSecurity />
        <Industries />
      </main>
      <Footer />
    </>
  );
};

export default EngagementModel;