import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import HeroBanner from "../../Components/Common/HeroBanner";
import HeroIntro from "../../Components/Common/HeroIntro";
import DataSecurity from "../../Components/DataSecurity/DataSecurity";
import Industries from "../../Components/Industries/Industries";
import OurWorkflow from "../../Components/OurWorkflow/OurWorkflow";
import FiveStep from "../../Components/FiveStep/FiveStep";
import JourneySection from "../../Components/JourneySection/JourneySection";

const heroIntroValue = "At Accusource Global Advisors, we believe that effective outsourced accounting is more than just number crunching—it's about creating a seamless, transparent, and strategic partnership that drives your business forward. Our methodology is built on three core pillars:"
const bannerName = "Work Methodology"
const WorkMethodology = () => {
  return (
    <>
      <HeroBanner value={bannerName}/>
      <HeroIntro value={heroIntroValue}/>
      <main>
        <FiveStep />
        <DataSecurity />
        <JourneySection/>
        <Industries />
      </main>
      <Footer />
    </>
  );
};

export default WorkMethodology;