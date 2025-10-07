import React from 'react'
import BusinessOwnerSection from '../../Components/BusinessOwnerSection/BusinessOwnerSection'
import BookKeepingSection from '../../Components/BookKeepingSection/BookKeepingSection'
import UniqueSection from '../../Components/UniqueSection/UniqueSection'
import JourneySection from '../../Components/JourneySection/JourneySection'
import DataSecurity from '../../Components/DataSecurity/DataSecurity'
import Industries from '../../Components/Industries/Industries'
import HeroBanner from '../../Components/Common/HeroBanner'
import HeroIntro from '../../Components/Common/HeroIntro'
import DataAnalysisCards from './DataAnalysisCards'
import './DataAnalysis.css' // 👉 Add this for custom styling

const DataAnalysis = () => {
  const bannerName = "Data Analysis Services"
  const heroIntroValue = "We help businesses turn data into insights with tools like Excel, Power BI, and Google Data Studio. Services include:"

  return (
    <div>
      <HeroBanner value={bannerName}/>
      <HeroIntro value={heroIntroValue}/>
      <DataAnalysisCards/>

      {/* ✅ New Approach Section */}
      <section className="approach-section">
        <h2 className="approach-title">Approach</h2>
        <p className="approach-text">
          We integrate seamlessly with your management team, providing real-time insights, actionable advice, 
          and strategic guidance—without the cost of a full-time CFO.
        </p>
      </section>

      <UniqueSection/>
      <JourneySection/>
      <DataSecurity/>
      <Industries/>
    </div>
  )
}

export default DataAnalysis