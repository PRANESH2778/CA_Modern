import React from 'react'
import BusinessOwnerSection from '../../Components/BusinessOwnerSection/BusinessOwnerSection'
import BookKeepingSection from '../../Components/BookKeepingSection/BookKeepingSection'
import UniqueSection from '../../Components/UniqueSection/UniqueSection'
import JourneySection from '../../Components/JourneySection/JourneySection'
import DataSecurity from '../../Components/DataSecurity/DataSecurity'
import Industries from '../../Components/Industries/Industries'
import HeroBanner from '../../Components/Common/HeroBanner'
import HeroIntro from '../../Components/Common/HeroIntro'
import AccountingCards from './AccountingCards'
import './Accounting.css' // 👉 create this file if not already

const Accounting = () => {
  const bannerName = "Accounting & Bookkeeping Services"
  const heroIntroValue = " We handle end-to-end accounting and bookkeeping for businesses of all sizes. Our services include:"

  return (
    <div>
      <HeroBanner value={bannerName}/>
      <HeroIntro value={heroIntroValue}/>
      <AccountingCards/>

      {/* ✅ New Why Us Section */}
      <section className="why-us-section">
        <h2 className="why-us-title">Why Us</h2>
        <p className="why-us-text">
          Our team of CAs, CSs, and experienced accountants ensures accuracy, timely reporting, and compliance while leveraging 
          automation tools like <strong>QuickBooks</strong>, <strong>Xero</strong>, and other <strong>cloud accounting platforms</strong>.
        </p>
      </section>

      <UniqueSection/>
      <JourneySection/>
      <DataSecurity/>
      <Industries/>
    </div>
  )
}

export default Accounting