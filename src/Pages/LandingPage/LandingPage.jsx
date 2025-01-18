import React from 'react'
import Header from '../../Components/Header/Header'
import HeroSection from '../../Components/HeroSection/HeroSection'
import NewsCategories from '../../Components/NewsCatergories/NewsCategories'

function LandingPage() {
  return (
    <div className='h-screen w-screen bg-red-300'>
        <Header/>
        <HeroSection/>
        <NewsCategories/>
    </div>
  )
}

export default LandingPage