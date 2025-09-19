import React from 'react'
import BusinessOwnerSection from '../../Components/BusinessOwnerSection/BusinessOwnerSection'
import BookKeepingSection from '../../Components/BookKeepingSection/BookKeepingSection'
import BookKeepingCards from '../../Components/BookKeepingCards/BookKeepingCards'
import BookKeepingSolutionCard from '../../Components/BookKeepingSolution/BookKeepingSolutionCard'
import UniqueSection from '../../Components/UniqueSection/UniqueSection'
import JourneySection from '../../Components/JourneySection/JourneySection'
import DataSecurity from '../../Components/DataSecurity/DataSecurity'
import Industries from '../../Components/Industries/Industries'
import HeroBanner from '../../Components/Common/HeroBanner'
import HeroIntro from '../../Components/Common/HeroIntro'

const BookKeeping = () => {
    const bannerName = "Book Keeping"
  return (
    <div>
        <HeroBanner value={bannerName}/>
        <BookKeepingCards/>
        <BookKeepingSolutionCard/>
        <UniqueSection/>
        <JourneySection/>
        <DataSecurity/>
        <Industries/>
    </div>
  )
}

export default BookKeeping
