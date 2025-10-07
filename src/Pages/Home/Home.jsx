import React from 'react'
import './Home.css'
import HomeImage from '../../Components/HomeImage/HomeImage'
import AboutSection from '../../Components/AboutSection/AboutSection'
import JourneySection from '../../Components/JourneySection/JourneySection'
import UniqueSection from '../../Components/UniqueSection/UniqueSection'
import IndustrySection from '../../Components/IndustrySection/IndustrySection'
import TrustedOutsourcingTeam from '../../Components/TrustedOutsourcingTeam/TrustedOutsourcingTeam'
import Industries from '../../Components/Industries/Industries'
import DataSecurity from '../../Components/DataSecurity/DataSecurity'
import Connect from '../../Components/Connect/Connect'
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs'
import FiveStep from '../../Components/FiveStep/FiveStep'
const Home = () => {
  return (
    <div className="container">
        <HomeImage/>
        <AboutSection/>
        <WhyChooseUs/>
        <FiveStep/>
        <TrustedOutsourcingTeam/>
        <JourneySection/>
        <UniqueSection/>
        
        {/* <DataSecurity/> */}
        <Industries/>
        <Connect/>
    </div>
  )
}

export default Home
