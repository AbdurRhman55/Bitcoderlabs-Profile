import React from 'react'
import HeroSection from '../components/Home/Hero'
import CEOMessage from '../components/Home/CEOMessage'
import ExpertiseSection from '../components/Home/Expertisesection'
import WhyChooseUs from '../components/Home/WhyChoseUs'
import Stats from '../components/Home/Stats'
import TeamMembers from '../components/Home/TeamMembers'
import Advisor from '../components/Home/Advisor'
import Testimonials from '../components/Home/Testimonials'
import JobPopup from '../components/Home/JobPopup'

function Home() {
    return (
        <div className="bg-white">
            {/* <JobPopup /> */}
            <HeroSection />
            <Stats />
            <div className="space-y-0">
                <ExpertiseSection />
                <CEOMessage />
                <TeamMembers />
                <WhyChooseUs />
                <Advisor />
                <Testimonials />
            </div>
        </div>
    )
}

export default Home