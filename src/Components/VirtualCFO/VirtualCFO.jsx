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
const VirtualCFO = () => {
    const bannerName = "Virtual CFO Services"
    const heroIntroValue = " Our Virtual CFO service goes beyond bookkeeping to provide strategic financial leadership. We help businesses with:"
  return (
    <div>
        <HeroBanner value={bannerName}/>
        <HeroIntro value={heroIntroValue}/>
        <VirtualCFOCards/>
        <UniqueSection/>
        <JourneySection/>
        <DataSecurity/>
        <Industries/>
    </div>
  )
}

export default VirtualCFO
