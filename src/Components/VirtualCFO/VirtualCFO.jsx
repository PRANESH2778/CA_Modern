import React from 'react'
import BusinessOwnerSection from '../../Components/BusinessOwnerSection/BusinessOwnerSection'
import BookKeepingSection from '../../Components/BookKeepingSection/BookKeepingSection'
import UniqueSection from '../../Components/UniqueSection/UniqueSection'
import JourneySection from '../../Components/JourneySection/JourneySection'
import DataSecurity from '../../Components/DataSecurity/DataSecurity'
import Industries from '../../Components/Industries/Industries'
import HeroBanner from '../../Components/Common/HeroBanner'
import HeroIntro from '../../Components/Common/HeroIntro'
import VirtualCFOCards from './VirtualCFOCards'
import './VirtualCFO.css' // 👉 create this CSS file for styling

const VirtualCFO = () => {
  const bannerName = "Virtual CFO Services"
  const heroIntroValue = "Our Virtual CFO service goes beyond bookkeeping to provide strategic financial leadership. We help businesses with:"

  return (
    <div>
      <HeroBanner value={bannerName}/>
      <HeroIntro value={heroIntroValue}/>
      <VirtualCFOCards/>

      {/* ✅ New Approach Section */}
      <section className="approach-section">
        <h2 className="approach-title">Approach</h2>
        <p className="approach-text">
          We integrate seamlessly with your management team, providing real-time insights, 
          actionable advice, and strategic guidance—without the cost of a full-time CFO.
        </p>
      </section>

      <UniqueSection/>
      <JourneySection/>
      <DataSecurity/>
      <Industries/>
    </div>
  )
}

export default VirtualCFO
