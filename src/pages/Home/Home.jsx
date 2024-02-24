import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Testimonials from '../../components/Testimonials/Testimonials'

const Home = () => {
    return (
        <div className='min-h-dvh'>
            <HeroSection />
            <Testimonials />
        </div>
    )
}

export default Home