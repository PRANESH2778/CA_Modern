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
const Accounting = () => {
    const bannerName = "Accounting & Bookkeeping Services"
    const heroIntroValue = " We handle end-to-end accounting and bookkeeping for businesses of all sizes. Our services include:"
  return (
    <div>
        <HeroBanner value={bannerName}/>
        <HeroIntro value={heroIntroValue}/>
        <AccountingCards/>
        <UniqueSection/>
        <JourneySection/>
        <DataSecurity/>
        <Industries/>
    </div>
  )
}

export default Accounting
