import React from 'react'
import BusinessOwnerSection from '../../Components/BusinessOwnerSection/BusinessOwnerSection'
import BookKeepingSection from '../../Components/BookKeepingSection/BookKeepingSection'
import UniqueSection from '../../Components/UniqueSection/UniqueSection'
import JourneySection from '../../Components/JourneySection/JourneySection'
import DataSecurity from '../../Components/DataSecurity/DataSecurity'
import Industries from '../../Components/Industries/Industries'
import HeroBanner from '../../Components/Common/HeroBanner'
import HeroIntro from '../../Components/Common/HeroIntro'
import FinancialCards from './FinancialCards'
const Financial = () => {
    const bannerName = "Financial Reporting Services"
    const heroIntroValue = " We prepare accurate, GAAP-compliant financial statements for businesses operating internationally. Services include:"
  return (
    <div>
        <HeroBanner value={bannerName}/>
        <HeroIntro value={heroIntroValue}/>
        <FinancialCards/>
        <UniqueSection/>
        <JourneySection/>
        <DataSecurity/>
        <Industries/>
    </div>
  )
}

export default Financial
