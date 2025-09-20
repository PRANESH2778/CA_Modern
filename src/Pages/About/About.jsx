// src/pages/EngagementModel.jsx
import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import HeroBanner from "../../Components/Common/HeroBanner";
import HeroIntro from "../../Components/Common/HeroIntro";
import DataSecurity from "../../Components/DataSecurity/DataSecurity";
import Industries from "../../Components/Industries/Industries";
import VisionMission from "../../Components/VisionMission/VisionMission";
import Leadership from "../../Components/Leadership/Leadership";
import ExperiencedTeam from "../../Components/ExperiencedTeam/ExperiencedTeam";
import UniqueSection from "../../Components/UniqueSection/UniqueSection";
import JourneySection from "../../Components/JourneySection/JourneySection";
const heroIntroValue = "At Global Insights KPO, we understand that each client’s needs are unique, \
                        which is why we take a customized approach to every project. Our work methodology \
                        combines a strategic, step-by-step process with the flexibility to adapt to each \
                        client’s specific requirements. By integrating industry best practices, state-of-the-art tools, \
                        and effective communication, we ensure that all tasks are completed accurately and on time. \
                        Our approach helps us consistently deliver high-quality services that drive business efficiency and foster long-term partnerships."
const bannerName = "About Global Insights KPO"
const About = () => {
  return (
    <>
      <HeroBanner value={bannerName}/>
      <HeroIntro value={heroIntroValue}/>
      <main>
        <VisionMission />
        <Leadership />
        <ExperiencedTeam />
        <UniqueSection />
        <JourneySection />
        <DataSecurity />
        <Industries />
      </main>
    </>
  );
};

export default About;