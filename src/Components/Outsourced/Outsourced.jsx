import React from 'react'
import BusinessOwnerSection from '../../Components/BusinessOwnerSection/BusinessOwnerSection'
import BookKeepingSection from '../../Components/BookKeepingSection/BookKeepingSection'
import UniqueSection from '../../Components/UniqueSection/UniqueSection'
import JourneySection from '../../Components/JourneySection/JourneySection'
import DataSecurity from '../../Components/DataSecurity/DataSecurity'
import Industries from '../../Components/Industries/Industries'
import HeroBanner from '../../Components/Common/HeroBanner'
import HeroIntro from '../../Components/Common/HeroIntro'
import OutsourcedCards from './OutsourcedCards'
import './Outsourced.css' // 👉 Add this CSS file for section styling

const Outsourced = () => {
  const bannerName = "Outsourced Back Office Support for CPA & Accounting Firms"
  const heroIntroValue = "We provide skilled, cost-effective professionals to CPA and bookkeeping firms, helping them:"

  return (
    <div>
      <HeroBanner value={bannerName}/>
      <HeroIntro value={heroIntroValue}/>
      <OutsourcedCards/>

      {/* ✅ New Value Proposition Section */}
      <section className="value-section">
        <h2 className="value-title">Value Proposition</h2>
        <p className="value-text">
          A win-win partnership where your firm grows, and we provide reliable expertise 
          for back-office operations.
        </p>
      </section>

      <UniqueSection/>
      <JourneySection/>
      <DataSecurity/>
      <Industries/>
    </div>
  )
}

export default Outsourced