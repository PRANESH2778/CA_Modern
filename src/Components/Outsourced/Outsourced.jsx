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
const Outsourced = () => {
    const bannerName = "Outsourced Back Office Support for CPA & Accounting Firms"
    const heroIntroValue = "We provide skilled, cost-effective professionals to CPA and bookkeeping firms, helping them:"
  return (
    <div>
        <HeroBanner value={bannerName}/>
        <HeroIntro value={heroIntroValue}/>
        <OutsourcedCards/>
        <UniqueSection/>
        <JourneySection/>
        <DataSecurity/>
        <Industries/>
    </div>
  )
}

export default Outsourced
