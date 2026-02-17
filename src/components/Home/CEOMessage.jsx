import React, { useState } from 'react';
import LeadershipSlider from './LeadershipSlider';
import TeamMembers from './TeamMembers';

const CEOMessage = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const messages = [
        {
            id: 1,
            type: 'CEO',
            title: 'Leading with Vision, Delivering with Excellence',
            image: '/mian Dawood Ali Shah.webp',
            name: 'Mian Dawood Shah',
            position: 'Chief Executive Officer',
            content: [
                "At Bitcoderlabs, we believe that technology is the most powerful tool for human progress. Our mission is to bridge the gap between complex engineering and elegant, user-centric solutions.",
                "Since our inception, we have focused on building products that don't just solve problems, but inspire growth. We are committed to excellence, transparency, and driving digital transformation for businesses worldwide."
            ]
        },
        {
            id: 2,
            type: 'CTO',
            title: 'ngineering Tomorrow\'s Solutions Today',
            image: '/mian aizaz ali shah.webp',
            name: 'Aizaz Ali Shah',
            position: 'Chief Technology Officer',
            content: [
                "Innovation at Bitcoderlabs isn't just about using the latest frameworks; it's about solving real-world challenges with robust and scalable architecture.",
                "Our engineering team is dedicated to pushing the boundaries of what's possible, ensuring that every line of code we write contributes to a more efficient and connected future for our clients."
            ]
        }
    ];

    const onSlideChange = (index) => {
        setActiveSlide(index);
    };

    return (
        <section className="relative bg-[#f8fafc] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-10 lg:px-8">
                <header className="text-center py-6">
                    <h2 className="text-[#2a9fd8] font-bold uppercase tracking-[0.2em] text-sm mb-4">
                        Executive Leadership
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
                        Messages from our <span className="text-[#2a9fd8]">Visionaries</span>
                    </h1>
                    <div className="w-24 h-1.5 bg-[#2a9fd8] mx-auto rounded-full"></div>
                </header>

                <div className="max-w-4xl mx-auto">
                    <LeadershipSlider
                        messages={messages}
                        activeSlide={activeSlide}
                        onSlideChange={onSlideChange}
                    />
                </div>

                {/* 3D Carousel at Bottom */}
                <div className="mt-20">
                    {/* <div className="text-center mb-16">
                        <header className="text-center">
                            <h2 className="text-[#2a9fd8] font-bold uppercase tracking-[0.2em] text-sm mb-4">
                                Digital Showcase
                            </h2>
                            <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                                Our <span className="text-[#2a9fd8]">Creative Portfolio</span>
                            </h1>
                            <p className="text-gray-500 mt-4 max-w-xl mx-auto font-medium">A curated selection of our most innovative projects and digital solutions.</p>
                        </header>
                    </div> */}
                    <TeamMembers />
                </div>
            </div>
        </section>
    );
};

export default CEOMessage;