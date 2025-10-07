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
import './Financial.css' // 👉 Add this CSS file for styling

const Financial = () => {
  const bannerName = "Financial Reporting Services"
  const heroIntroValue = "We prepare accurate, GAAP-compliant financial statements for businesses operating internationally. Services include:"

  return (
    <div>
      <HeroBanner value={bannerName}/>
      <HeroIntro value={heroIntroValue}/>
      <FinancialCards/>

      {/* ✅ New Focus Section */}
      <section className="focus-section">
        <h2 className="focus-title">Focus</h2>
        <p className="focus-text">
          We ensure businesses have a clear understanding of their financial health, enabling 
          data-driven strategic decisions.
        </p>
      </section>

      <UniqueSection/>
      <JourneySection/>
      <DataSecurity/>
      <Industries/>
    </div>
  )
}

export default Financial