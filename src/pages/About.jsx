import React from 'react';
import Hero from '../components/About/Hero';
// import Mission from '../components/About/Mission';
// import Team from '../components/About/Team';
import OurMission from '../components/About/OurMission';
import OurCoreValues from '../components/About/OurCoreValues';
import OurExperties from '../components/About/OurExperties';
import TeamMembers from '../components/Home/TeamMembers';

const About = () => {
    return (
        <div className="bg-white">
            <Hero />
            <OurMission />
            <OurCoreValues />
            <OurExperties />
            <TeamMembers />

            {/* <div className="max-w-7xl mx-auto px-6 pb-24 lg:pb-32">
                <div className="">
                    <div className="">
                        <Mission />
                        <Team />
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default About;
