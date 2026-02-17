import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const TeamMembers = () => {
    const developers = [
        {
            id: 1,
            image: '/Abdur Rahman.jpeg',
            name: 'Abdur Rahman',
            role: 'React Developer',
            linkedin: 'https://www.linkedin.com/in/abdur-rahman-web/',
            github: 'https://github.com/AbdurRhman55'
        },
        {
            id: 2,
            image: '/Ahmad.jpeg',
            name: 'Ahmad Khan',
            role: 'App Developer',
            linkedin: 'https://www.linkedin.com/in/m-ahmad311/',
            github: 'https://github.com/M-Ahmad-ma'
        },
        {
            id: 3,
            image: '/Mahnoor Azeem.jpg',
            name: 'Mahnoor Azeem',
            role: 'UI/UX Designer',
            linkedin: 'https://www.linkedin.com/in/azeem-mahnoor/',
            github: '#'
        },
        {
            id: 4,
            image: '/Roha.jpg',
            name: 'Roha Moeen',
            role: 'Product Manager',
            linkedin: 'https://www.linkedin.com/in/roha-moeen-376601385/',
            github: '#'
        },
        {
            id: 5,
            image: '/Shah Fahad.jpeg',
            name: 'Shah Fahad',
            role: 'PHP & Laravel Developer',
            linkedin: 'https://www.linkedin.com/in/shah-fahad-957703262/',
            github: 'https://github.com/Shah-Fahad124'
        },
        {
            id: 6,
            image: '/Irfan.jpeg',
            name: 'Irfan',
            role: 'Back End Developer',
            linkedin: '',
            github: 'https://github.com/laradev220'
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % developers.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [developers.length]);

    const getCardStyle = (index) => {
        const total = developers.length;
        let diff = index - activeIndex;
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;

        const isVisible = Math.abs(diff) <= 3;

        const rotationY = -diff * 25;
        const translateX = diff * 300;
        const translateZ = -Math.abs(diff) * 120;

        const opacity = isVisible ? (1 - Math.abs(diff) * 0.3) : 0;
        const scale = 1 - (Math.abs(diff) * 0.08);

        return {
            transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotationY}deg) scale(${scale})`,
            opacity: Math.max(0, opacity),
            zIndex: 10 - Math.abs(diff),
            display: isVisible ? 'block' : 'none'
        };
    };

    return (
        <section className="w-full bg-[#fdfcf6] py-32 md:py-24 overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto lg:px-12 px-3">
                {/* Header Section */}
                <div className="space-y-6 text-center">
                    <div className="inline-block">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <div className="w-10 h-0.5 bg-[#2a9fd8]"></div>
                            <span className="text-xs font-bold text-[#2a9fd8] uppercase tracking-[0.2em]">Our Team</span>
                            <div className="w-10 h-0.5 bg-[#2a9fd8]"></div>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-[#1e293b] tracking-tighter uppercase leading-none">
                            Meet The <br />
                            <span className="text-gray-300 italic">Experts</span>
                        </h2>
                    </div>
                    <p className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
                        The brilliant minds behind our innovative solutions, dedicated to delivering excellence in every project.
                    </p>
                </div>

                {/* Team Carousel */}
                <div className="w-full relative flex justify-center items-center [perspective:2000px] h-[450px] md:h-[550px] overflow-visible">
                    <div className="relative w-full h-full [transform-style:preserve-3d] flex justify-center items-center">
                        {developers.map((dev, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <div
                                    key={dev.id}
                                    className="absolute transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] [transform-style:preserve-3d]"
                                    style={getCardStyle(index)}
                                >
                                    <div className="relative w-[180px] h-[280px] md:w-[280px] md:h-[440px] rounded-[30px] p-[2px] bg-gradient-to-br from-[#2a9fd8]/40 to-transparent shadow-2xl overflow-hidden backdrop-blur-sm">
                                        <div className="w-full h-full rounded-[28px] overflow-hidden bg-white relative group">
                                            <img
                                                src={dev.image}
                                                alt={dev.name}
                                                className="w-full h-full object-cover transition-transform duration-1000"
                                            />

                                            <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                                                <div className={`absolute inset-0 p-4 md:p-8 flex flex-col justify-end transform transition-all duration-1000 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                                    <h4 className="text-lg md:text-2xl font-black text-white mb-1 leading-tight">{dev.name}</h4>
                                                    <p className="text-[#2a9fd8] font-bold text-[10px] md:text-sm uppercase tracking-widest mb-3">{dev.role}</p>

                                                    <div className="flex items-center gap-2 md:gap-4">
                                                        <div className="flex items-center gap-1 md:gap-2">
                                                            <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#2a9fd8] transition-colors border border-white/10">
                                                                <FaLinkedin size={16} className="text-white" />
                                                            </a>
                                                            <a href={dev.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-gray-700 transition-colors border border-white/10">
                                                                <FaGithub size={16} className="text-white" />
                                                            </a>
                                                        </div>
                                                        <div className="ml-auto">
                                                            <div className="px-2 md:px-3 py-1 bg-[#2a9fd8]/20 border border-[#2a9fd8]/30 rounded-full text-[7px] md:text-[9px] font-black text-[#2a9fd8] uppercase tracking-tighter">Verified Expert</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {!isActive && (
                                                <div className="absolute inset-0 bg-[#2a9fd8]/5 opacity-30 pointer-events-none"></div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamMembers;
