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
const DataAnalysis = () => {
    const bannerName = "Data Analysis Services"
    const heroIntroValue = "We help businesses turn data into insights with tools like Excel, Power BI, and Google Data Studio. Services include:"
  return (
    <div>
        <HeroBanner value={bannerName}/>
        <HeroIntro value={heroIntroValue}/>
        <DataAnalysisCards/>
        <UniqueSection/>
        <JourneySection/>
        <DataSecurity/>
        <Industries/>
    </div>
  )
}

export default DataAnalysis
