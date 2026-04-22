import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Advisor = () => {
    const advisors = [
        {
            name: 'Dr. Hamida Syed',
            designation: 'Advisor – Academia & Institutional Partnerships',
            image: '/Dr_Hamida.jpeg',
            socials: { Li: '#', ig: '#', tw: '#', }
        },
        {
            name: 'Tashfeen Zia',
            designation: 'Advisor – Strategic Programs & Partnerships',
            image: '/Tashfeen_Zia.jpeg',
            socials: { Li: '#', ig: '#', tw: '#', }
        }
    ];

    return (
        <section className="relative lg:py-5 py-6 bg-[#F8F9FD] overflow-hidden font-sans">
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[48px] md:text-[60px] font-serif text-[#2a9fd8] leading-tight">
                        Our Advisors
                    </h2>
                </div>

                {/* Cards Container */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {advisors.map((advisor, index) => (
                        <div
                            key={index}
                            className="relative w-full max-w-[280px] h-[440px] rounded-[40px] overflow-hidden shadow-2xl group transition-transform duration-500 hover:scale-105"
                        >
                            {/* Card Background Image (handled as a cover) */}
                            <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700">
                                <img
                                    src={advisor.image}
                                    alt={advisor.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2a9fd8] via-[#2a9fd8]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-center text-white flex flex-col items-center">
                                <h3 className="text-2xl font-serif mb-1 tracking-wide">{advisor.name}</h3>
                                <p className="text-xs uppercase tracking-[0.2em] text-blue-200 mb-4 font-semibold">
                                    {advisor.designation}
                                </p>

                                {/* Social Links */}
                                <div className="flex gap-4 items-center">
                                    <a href={advisor.socials.Li} className="hover:text-blue-400 transition-colors"><FaLinkedin size={14} /></a>
                                    <a href={advisor.socials.ig} className="hover:text-blue-400 transition-colors"><FaInstagram size={14} /></a>
                                    <a href={advisor.socials.tw} className="hover:text-blue-400 transition-colors"><FaTwitter size={14} /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advisor;
