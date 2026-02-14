import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const CardCarousel = () => {
    const developers = [
        {
            id: 1,
            image: '/Abdur Rahman.jpeg',
            name: 'Abdur Rahman',
            role: 'React Developer',
            // desc: 'Building scalable server-side systems and managing high-performance databases.',
            linkedin: 'https://www.linkedin.com/in/abdur-rahman-web/',
            github: 'https://github.com/AbdurRhman55'
        },
        {
            id: 2,
            image: '/Ahmad.jpeg',
            name: 'Ahmad Khan',
            role: 'App Developer',
            // desc: 'Specializing in full-stack development and complex system integrations.',
            linkedin: 'https://www.linkedin.com/in/m-ahmad311/',
            github: 'https://github.com/M-Ahmad-ma'
        },
        {
            id: 3,
            image: '/Mahnoor Azeem.jpg',
            name: 'Mahnoor Azeem',
            role: 'UI/UX Designer',
            // desc: 'Crafting intuitive and aesthetically pleasing user interfaces for modern web applications.',
            linkedin: 'https://www.linkedin.com/in/azeem-mahnoor/',
            github: '#'
        },
        {
            id: 4,
            image: '/Roha.jpg',
            name: 'Roha Moeen',
            role: 'Product Manager',
            // desc: 'Driving product strategy and ensuring seamless delivery of innovative digital solutions.',
            linkedin: 'https://www.linkedin.com/in/roha-moeen-376601385/',
            github: '#'
        },
        {
            id: 5,
            image: '/Shah Fahad.jpeg',
            name: 'Shah Fahad',
            role: 'PHP & Laravel Developer',
            // desc: 'Specializing in cross-platform mobile development using cutting-edge technologies.',
            linkedin: 'https://www.linkedin.com/in/shah-fahad-957703262/',
            github: 'https://github.com/Shah-Fahad124'
        },
        {
            id: 6,
            image: '/Irfan.jpeg',
            name: 'Irfan',
            role: 'Back End Developer',
            // desc: 'Specializing in cross-platform mobile development using cutting-edge technologies.',
            linkedin: '',
            github: 'https://github.com/laradev220'
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % developers.length);
        }, 4000); // 4 seconds interval for readability
        return () => clearInterval(interval);
    }, [developers.length]);

    const getCardStyle = (index) => {
        const total = developers.length;
        let diff = index - activeIndex;
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;

        const isVisible = Math.abs(diff) <= 3;

        // Perfectly linear and symmetrical spacing calculations
        const rotationY = -diff * 25;
        const translateX = diff * 300;
        const translateZ = -Math.abs(diff) * 120; // Consistent depth falloff

        const opacity = isVisible ? (1 - Math.abs(diff) * 0.3) : 0;
        const scale = 1 - (Math.abs(diff) * 0.08); // Smoothly scale down non-active cards

        return {
            transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotationY}deg) scale(${scale})`,
            opacity: Math.max(0, opacity),
            zIndex: 10 - Math.abs(diff),
            display: isVisible ? 'block' : 'none'
        };
    };

    return (
        <div className="w-full relative my-10 flex justify-center items-center perspective-container h-[550px]">
            <div className="relative w-full h-full transform-style-3d flex justify-center items-center">
                {developers.map((dev, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <div
                            key={dev.id}
                            className="absolute transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) transform-style-3d"
                            style={getCardStyle(index)}
                        >
                            <div className="relative w-[280px] h-[440px] rounded-[30px] p-[2px] bg-gradient-to-br from-[#2a9fd8]/40 to-transparent shadow-2xl overflow-hidden backdrop-blur-sm">
                                <div className="w-full h-full rounded-[28px] overflow-hidden bg-white relative group">
                                    <img
                                        src={dev.image}
                                        alt={dev.name}
                                        className="w-full h-full object-cover transition-transform duration-1000"
                                    />

                                    {/* Glassy detail overlay - only full opacity on active */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                                        <div className={`absolute inset-0 p-8 flex flex-col justify-end transform transition-all duration-1000 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                            <h4 className="text-2xl font-black text-white mb-1 leading-tight">{dev.name}</h4>
                                            <p className="text-[#2a9fd8] font-bold text-sm uppercase tracking-widest mb-3">{dev.role}</p>

                                            {/* <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                                                {dev.desc}
                                            </p> */}

                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-2">
                                                    <a href={dev.linkedin} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#2a9fd8] transition-colors border border-white/10">
                                                        <FaLinkedin size={18} className="text-white" />
                                                    </a>
                                                    <a href={dev.github} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-gray-700 transition-colors border border-white/10">
                                                        <FaGithub size={18} className="text-white" />
                                                    </a>
                                                </div>
                                                <div className="ml-auto">
                                                    <div className="px-3 py-1 bg-[#2a9fd8]/20 border border-[#2a9fd8]/30 rounded-full text-[9px] font-black text-[#2a9fd8] uppercase tracking-tighter">Verified Expert</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subtle border for inactive cards */}
                                    {!isActive && (
                                        <div className="absolute inset-0 bg-[#2a9fd8]/5 opacity-30 pointer-events-none"></div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <style jsx>{`
                .perspective-container {
                    perspective: 2000px;
                    width: 100%;
                    overflow: visible;
                }

                .transform-style-3d {
                    transform-style: preserve-3d;
                }

                @media (max-width: 768px) {
                    .perspective-container {
                        height: 450px;
                    }
                    div[style*="width: 280px"] {
                        width: 180px !important;
                        height: 280px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default CardCarousel;
