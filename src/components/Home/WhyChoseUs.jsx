import React, { useEffect, useState, useRef } from 'react';

const WhyChooseUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const advantages = [
        { number: '01', title: 'Expert Software Engineers' },
        { number: '02', title: 'Cutting-Edge Technology' },
        { number: '03', title: 'Scalable Digital Solutions' },
        { number: '04', title: 'On-Time Project Delivery' },
        { number: '05', title: '24/7 Technical Support' }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-[#f8fafc] py-10 overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center my-4 md:my-10">
                    <h2 className="text-3xl md:text-5xl font-black text-[#1e1b4b] uppercase tracking-tighter leading-tight max-w-4xl mx-auto">
                        Why <span className="text-[#2a9fd8]">Choose</span> Us
                    </h2>
                </div>

                {/* Main Infographic Area */}
                <div className="relative max-w-6xl mx-auto h-[500px] hidden lg:block">
                    {/* SVG Layer for Arc and Connections */}
                    <div className="absolute inset-0 z-10 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* The Professional Arc */}
                            <path
                                d="M 389.2,71 A 200,200 0 0,1 389.2,429"
                                stroke="#cbd5e1"
                                strokeWidth="3"
                                fill="none"
                                className={`transition-all duration-1000 delay-500 ${isVisible ? 'stroke-dash-animate' : ''}`}
                            />

                            {/* Points and Dotted Lines */}
                            {[71, 160, 250, 340, 429].map((y, i) => {
                                const cx = 300;
                                const r = 200;
                                const x = cx + Math.sqrt(r ** 2 - (y - 250) ** 2);

                                return (
                                    <g key={i}>
                                        <line
                                            x1={x + 10} y1={y} x2="680" y2={y}
                                            stroke="#6366f1"
                                            strokeWidth="2"
                                            strokeDasharray="6 6"
                                            className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                                            style={{ transitionDelay: `${1000 + (i * 100)}ms` }}
                                        />
                                        <circle
                                            cx={x} cy={y} r="8"
                                            fill="white"
                                            stroke="#cbd5e1"
                                            strokeWidth="3"
                                            className={`transition-all duration-500 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                                            style={{ transitionDelay: `${800 + (i * 100)}ms` }}
                                        />
                                    </g>
                                );
                            })}
                        </svg>
                    </div>

                    {/* Content Layer */}
                    <div className="relative z-20 hidden lg:grid grid-cols-12 h-full items-center">
                        {/* Left: Main Circle */}
                        <div className="col-span-5 flex justify-end pr-10">
                            <div
                                className={`w-[320px] h-[320px] rounded-full flex flex-col items-center justify-center p-8 text-center shadow-[0_30px_60px_rgba(30,27,75,0.25)] border-[10px] border-white transition-all duration-[1200ms] transform bg-gradient-to-br from-[#1e1b4b] to-[#312e81] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10'}`}
                            >
                                <div className="text-[100px] font-black text-white leading-none mb-1">5</div>
                                <div className="text-white space-y-1">
                                    <p className="text-xl font-bold tracking-tight">Reasons</p>
                                    <p className="text-base opacity-80 italic">To Partner With</p>
                                    <p className="text-lg font-black tracking-widest uppercase text-nowrap">BITCODERLABS</p>
                                </div>
                            </div>
                        </div>

                        {/* Middle: Spacer */}
                        <div className="col-span-2"></div>

                        {/* Right: Items */}
                        <div className="col-span-5 h-[420px] flex flex-col justify-between py-2">
                            {advantages.map((adv, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center gap-6 transition-all duration-1000 transform ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                                    style={{ transitionDelay: `${800 + (index * 150)}ms` }}
                                >
                                    <div className="relative group flex-shrink-0">
                                        <div className="absolute inset-[-4px] rounded-full border-2 border-dotted border-indigo-300 group-hover:rotate-90 transition-transform duration-1000"></div>
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg transform transition-transform group-hover:scale-110 bg-gradient-to-br from-[#1e1b4b] to-[#312e81]">
                                            {adv.number}
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold text-indigo-950 italic tracking-tight hover:text-[#2a9fd8] transition-colors cursor-default">
                                        {adv.title}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile View */}
                <div className="lg:hidden flex flex-col items-center space-y-8">
                    <div
                        className={`w-[240px] h-[240px] rounded-full flex flex-col items-center justify-center p-6 text-center shadow-2xl transform transition-all duration-1000 bg-gradient-to-br from-[#1e1b4b] to-[#312e81] border-[8px] border-white ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
                    >
                        <div className="text-[70px] font-black text-white leading-none">5</div>
                        <div className="text-white">
                            <p className="text-base font-bold">Reasons To Choose</p>
                            <p className="text-xs opacity-80 italic">BITCODERLABS</p>
                        </div>
                    </div>

                    <div className="w-full space-y-4">
                        {advantages.map((adv, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-5 p-3 bg-white rounded-2xl shadow-md transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-base flex-shrink-0 bg-gradient-to-br from-[#1e1b4b] to-[#312e81]">
                                    {adv.number}
                                </div>
                                <h4 className="text-lg font-bold text-indigo-900 italic">{adv.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes strokeDash {
                    to { stroke-dashoffset: 0; }
                }
                .stroke-dash-animate {
                    stroke-dasharray: 1000;
                    stroke-dashoffset: 1000;
                    animation: strokeDash 2.5s cubic-bezier(0.45, 0, 0.55, 1) forwards;
                }
            `}</style>
        </section>
    );
};

export default WhyChooseUs;