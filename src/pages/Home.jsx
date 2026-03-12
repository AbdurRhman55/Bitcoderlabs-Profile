import React from 'react'
import HeroSection from '../components/Home/Hero'
import CEOMessage from '../components/Home/CEOMessage'
import ExpertiseSection from '../components/Home/Expertisesection'
import WhyChooseUs from '../components/Home/WhyChoseUs'
import Stats from '../components/Home/Stats'
import TeamMembers from '../components/Home/TeamMembers'
import Advisor from '../components/Home/Advisor'
import Testimonials from '../components/Home/Testimonials'

function Home() {
    return (
        <div className="bg-white">
            <HeroSection />
            <Stats />
            <div className="space-y-0">
                <ExpertiseSection />
                <CEOMessage />
                <WhyChooseUs />
                <TeamMembers />
                <Advisor />
                <Testimonials />
            </div>
        </div>
    )
}

export default Home