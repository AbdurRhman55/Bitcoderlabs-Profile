import React, { useEffect, useRef, useState } from 'react';
import { FiEye, FiTarget, FiHeart } from 'react-icons/fi';

const VisionMissionSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollOffset, setScrollOffset] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const viewHeight = window.innerHeight;

            // Calculate entry progress for the section (0 when bottom enters, 1 when top leaves)
            const progress = Math.max(0, Math.min(1, (viewHeight - rect.top) / (viewHeight + rect.height)));
            setScrollOffset(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const items = [
        {
            icon: <FiEye size={36} />,
            title: 'VISION',
            titleColor: '#2a9fd8',
            bgColor: '#2a9fd8',
            description: 'TO BE A TRUSTED NAME KNOWN FOR QUALITY, RELIABILITY, AND CUSTOMER SATISFACTION.'
        },
        {
            icon: <FiTarget size={36} />,
            title: 'MISSION',
            titleColor: '#1e293b',
            bgColor: '#1e293b',
            description: 'DELIVER VALUABLE PRODUCTS/SERVICES THAT MAKE EVERYDAY LIFE BETTER, THROUGH INNOVATION, COMMITMENT & CARE.'
        },
        {
            icon: <FiHeart size={36} />,
            title: 'VALUES',
            titleColor: '#2a9fd8',
            bgColor: '#0ea5e9',
            description: 'WE VALUE FRESH IDEAS, STRONG TEAMWORK, AND THE DRIVE TO CONSTANTLY IMPROVE AND GROW — TOGETHER.'
        }
    ];

    return (
        <section ref={sectionRef} className="relative w-full bg-[#fdfcf6] py-22 md:py-24 overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto lg:px-12 px-3 relative">
                <div className={`space-y-6 mb-14 transition-all duration-1000 transform text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className="inline-block">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <div className="w-10 h-0.5 bg-[#2a9fd8]"></div>
                            <span className="text-xs font-bold text-[#2a9fd8] uppercase tracking-[0.2em]">Our Ethics</span>
                            <div className="w-10 h-0.5 bg-[#2a9fd8]"></div>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-[#1e293b] tracking-tighter uppercase leading-none">
                            Strategic <br />
                            <span className="text-gray-300 italic">Foundation</span>
                        </h2>
                    </div>
                    <p className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
                        Architecting the future through precision, purpose-driven strategy, and a relentless pursuit of engineering excellence.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-24 lg:gap-12 items-center">

                    <div className="w-full lg:w-3/5 pl-4 md:pl-10">


                        <div className="space-y-16">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start gap-10 transition-all duration-1000 transform ${isVisible
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 -translate-x-12'
                                        }`}
                                    style={{ transitionDelay: `${index * 200 + 400}ms` }}
                                >
                                    {/* Rounded Brand Icon - Modern Professional Style */}
                                    <div
                                        className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:scale-110 active:scale-95 cursor-default hover:shadow-2xl overflow-hidden group relative"
                                        style={{ backgroundColor: item.bgColor }}
                                    >
                                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        {item.icon}
                                    </div>

                                    {/* Typography Header & Description */}
                                    <div className="flex-1 text-left ">
                                        <h3 className="text-xl md:text-3xl font-black text-[#1e293b] mb-4 uppercase leading-none tracking-tight">
                                            OUR <span style={{ color: item.titleColor }}>{item.title}</span>
                                        </h3>
                                        <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed uppercase tracking-[0.1em] max-w-md font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Professional Orange Engineered Insight */}
                    <div className="w-full lg:w-2/5 relative h-[500px] hidden lg:block">
                        <div className="absolute inset-0 flex justify-center lg:justify-end pr-12">
                            <div className="relative w-72 h-full">
                                {/* Precision SVG Wires */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 500">
                                    <line
                                        x1="60" y1="0" x2="60" y2={100 + scrollOffset * 80}
                                        stroke="#1e293b" strokeWidth="1.5"
                                        className="transition-all duration-500 ease-out"
                                    />
                                    <line
                                        x1="160" y1="0" x2="160" y2={180 + scrollOffset * 150}
                                        stroke="#1e293b" strokeWidth="2.5"
                                        className="transition-all duration-700 ease-out"
                                    />
                                    <line
                                        x1="260" y1="0" x2="260" y2={110 + scrollOffset * 110}
                                        stroke="#1e293b" strokeWidth="1.5"
                                        className="transition-all duration-1000 ease-out"
                                    />
                                </svg>

                                {/* Small Bulb Accent - Left */}
                                <div
                                    className="absolute transition-all duration-500 ease-out"
                                    style={{
                                        left: '32px',
                                        top: `${100 + scrollOffset * 80}px`,
                                        animation: 'premiumSwing 4s ease-in-out infinite'
                                    }}
                                >
                                    <div className="relative w-14 h-18">
                                        <div className="absolute inset-0 bg-gray-200 rounded-[50%_50%_45%_45%] border-[3px] border-[#1e293b] shadow-sm"></div>
                                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-4 bg-[#1e293b] rounded-t-sm"></div>
                                    </div>
                                </div>

                                {/* Main Engineeered Bulb - Center (Professional Orange) */}
                                <div
                                    className="absolute transition-all duration-700 ease-out will-change-[top,left]"
                                    style={{
                                        left: '108px',
                                        top: `${180 + scrollOffset * 150}px`,
                                        animation: 'premiumSwing 6s ease-in-out infinite 0.5s'
                                    }}
                                >
                                    <div className="relative w-24 h-36">
                                        {/* Professional Atmospheric Glow */}
                                        <div className="absolute inset-[-40px] bg-orange-500/10 rounded-full blur-[60px] animate-pulse"></div>

                                        {/* Premium Egg-Shaped Glass Body */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-orange-300/90 via-orange-500/80 to-orange-600/90 rounded-[50%_50%_40%_40%] border-[5px] border-[#1e293b] shadow-[0_20px_50px_rgba(249,115,22,0.3)] z-10 overflow-hidden backdrop-blur-[1px]">
                                            <div className="absolute inset-2 border-t border-white/20 rounded-full blur-[1px]"></div>

                                            {/* Tungsten Filament Simulation */}
                                            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-8 h-12 z-20 opacity-80">
                                                <svg viewBox="0 0 40 60" className="w-full h-full text-orange-200">
                                                    <path d="M12 60 L18 30 M28 60 L22 30" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
                                                    <path
                                                        d="M18 30 C 18 20, 22 20, 22 30 C 22 40, 18 40, 18 30"
                                                        stroke="white"
                                                        strokeWidth="2"
                                                        fill="none"
                                                        className="animate-pulse"
                                                        style={{ filter: 'drop-shadow(0 0 5px #fff)' }}
                                                    />
                                                </svg>
                                            </div>

                                            {/* Reflections */}
                                            <div className="absolute top-4 left-6 w-5 h-10 bg-gradient-to-b from-white/30 to-transparent rounded-full blur-[2px] -rotate-15"></div>
                                        </div>

                                        {/* Professional Industrial Base */}
                                        <div className="absolute -top-[30px] left-1/2 -translate-x-1/2 w-12 h-10 z-30">
                                            <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-t-lg border-x border-t border-[#1e293b] shadow-inner relative overflow-hidden">
                                                <div className="absolute top-2 left-0 w-full h-[1px] bg-gray-900/50"></div>
                                                <div className="absolute top-4 left-0 w-full h-[1px] bg-gray-900/50"></div>
                                                <div className="absolute top-6 left-0 w-full h-[1px] bg-gray-900/50"></div>
                                            </div>
                                        </div>

                                        {/* Radial Insight Rays */}
                                        <div className="absolute inset-0 pointer-events-none opacity-20">
                                            {[...Array(6)].map((_, i) => (
                                                <div key={i} className="absolute top-1/2 left-1/2 w-[2px] h-6 bg-orange-400" style={{ transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-40px)` }}></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Gear Accent Accent - Right */}
                                <div
                                    className="absolute transition-all duration-1000 ease-out"
                                    style={{
                                        left: '218px',
                                        top: `${110 + scrollOffset * 110}px`,
                                        animation: 'premiumSwing 6s ease-in-out infinite 0.2s'
                                    }}
                                >
                                    <div className="relative w-16 h-16 text-[#1e293b] opacity-40">
                                        <svg viewBox="0 0 50 50" className="w-full h-full animate-spin-slow">
                                            <path fill="currentColor" d="M25 15c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
                                            <circle cx="25" cy="25" r="3" fill="currentColor" />
                                            <path fill="currentColor" d="M25 5l-3 5h6l-3-5zm0 40l3-5h-6l3 5zm-15-20l5 3v-6l-5 3zm30 0l-5-3v6l5-3z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes premiumSwing {
                    0%, 100% { transform: rotate(-4deg); transform-origin: top center; }
                    50% { transform: rotate(4deg); transform-origin: top center; }
                }
                .animate-spin-slow {
                    animation: spin 12s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
};

export default VisionMissionSection;