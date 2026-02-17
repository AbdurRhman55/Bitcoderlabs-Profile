import React, { useState, useRef, useEffect } from 'react';

const services = [
    {
        id: '01',
        emoji: '💻',
        title: 'Web Development',
        short: 'React · Laravel · Modern Stack',
        description:
            'Custom websites and web applications built with React, Laravel, and modern technologies. Blazing fast, pixel-perfect, and built to scale.',
        accent: '#2a9fd8',
        tag: 'Most Popular',
    },
    {
        id: '02',
        emoji: '🛒',
        title: 'E-Commerce Development',
        short: 'Stores · Payments · Inventory',
        description:
            'Complete online store solutions with secure payment integration, smart inventory management, and conversion-optimized UX.',
        accent: '#2a9fd8',
        tag: 'High Demand',
    },
    {
        id: '03',
        emoji: '📱',
        title: 'Responsive UI/UX Design',
        short: 'Figma · Prototyping · Design Systems',
        description:
            'Modern, clean, and user-friendly interfaces. Every pixel crafted with intent — from wireframe to final handoff.',
        accent: '#2a9fd8',
        tag: 'Creative',
    },
    {
        id: '04',
        emoji: '⚙️',
        title: 'Custom Software',
        short: 'Automation · Workflows · SaaS',
        description:
            'Tailored systems designed for business automation. We turn complex workflows into elegant, efficient software.',
        accent: '#2a9fd8',
        tag: 'Enterprise',
    },
    {
        id: '05',
        emoji: '🌐',
        title: 'API Integration',
        short: 'REST · Payments · Cloud APIs',
        description:
            'Seamless integration of third-party APIs, payment gateways, and cloud services. Connect everything, break nothing.',
        accent: '#2a9fd8',
        tag: 'Technical',
    },
    {
        id: '06',
        emoji: '🔒',
        title: 'Maintenance & Support',
        short: 'Bugs · Speed · Security',
        description:
            'Always-on support with proactive bug fixing, performance optimization, and security hardening. Sleep easy.',
        accent: '#2a9fd8',
        tag: 'Reliable',
    },
];

const CoreServicesSection = () => {
    const [hovered, setHovered] = useState(null);
    const [visible, setVisible] = useState([]);
    const cardRefs = useRef([]);

    useEffect(() => {
        const observers = cardRefs.current.map((ref, index) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setVisible((prev) => [...new Set([...prev, index])]);
                        }, index * 100);
                    }
                },
                { threshold: 0.15 }
            );
            if (ref) observer.observe(ref);
            return observer;
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <section className="bg-[#fdfcf6] py-10 lg:py-[120px] lg:pb-[140px] relative overflow-hidden font-sans">
            <div className="max-w-[1280px] mx-auto lg:px-8 px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-10 lg:mb-20">

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl lg:text-[68px] font-extrabold leading-tight text-[#1e293b] mb-5 tracking-tight">
                        Core <span className="text-[#2a9fd8]">Services</span>
                    </h2>

                    <p className="text-[#64748b] text-lg max-w-[520px] leading-relaxed">
                        We don't just write code  we engineer outcomes. Every service is crafted to solve real problems and deliver real growth.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, index) => {
                        const isHovered = hovered === index;
                        const isVis = visible.includes(index);

                        return (
                            <div
                                key={service.id}
                                ref={(el) => (cardRefs.current[index] = el)}
                                onMouseEnter={() => setHovered(index)}
                                onMouseLeave={() => setHovered(null)}
                                className={`
                                    relative rounded-3xl p-9 cursor-pointer overflow-hidden
                                    bg-white border-2 transition-all duration-[400ms] ease-out
                                    ${isHovered ? 'border-[#2a9fd8] -translate-y-1.5 scale-[1.01] shadow-[0_20px_40px_rgba(0,0,0,0.08)]' : 'border-[#e2e8f0] shadow-[0_4px_12px_rgba(0,0,0,0.04)]'}
                                    ${isVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                                `}
                            >
                                {/* Top Row */}
                                <div className="flex items-start justify-between mb-6">
                                    {/* Emoji Icon */}
                                    <div
                                        className={`
                                            w-[60px] h-[60px] rounded-2xl bg-[#2a9fd8]/10 border-2 border-[#2a9fd8]/30
                                            flex items-center justify-center text-[28px] 
                                        `}
                                    >
                                        {service.emoji}
                                    </div>

                                    {/* Number + Tag */}
                                    <div className="text-right">
                                        <div className="text-xs font-extrabold text-[#cbd5e1] tracking-wider font-mono mb-1.5">
                                            {service.id}
                                        </div>
                                        <span className="text-[10px] font-bold tracking-wider uppercase text-[#2a9fd8] bg-[#2a9fd8]/15 border border-[#2a9fd8]/30 px-2.5 py-0.5 rounded-full">
                                            {service.tag}
                                        </span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-[22px] font-bold text-[#1e293b] mb-2 tracking-tight leading-tight">
                                    {service.title}
                                </h3>

                                {/* Short subtitle */}
                                <p className="text-xs font-semibold text-[#2a9fd8] mb-4 tracking-wide opacity-90">
                                    {service.short}
                                </p>

                                {/* Divider */}
                                <div className="w-full h-px bg-[#e2e8f0] mb-4" />

                                {/* Description */}
                                <p className="text-[15px] text-[#64748b] leading-relaxed mb-7">
                                    {service.description}
                                </p>

                                {/* Arrow CTA */}
                                <div className={`flex items-center text-[#2a9fd8] text-[13px] font-bold tracking-wide transition-all duration-300 ${isHovered ? 'gap-3' : 'gap-2'}`}>
                                    <span>Learn More</span>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : 'translate-x-0'}`}
                                    >
                                        <path
                                            d="M3 8H13M13 8L9 4M13 8L9 12"
                                            stroke="#2a9fd8"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA strip */}
                <div className="lg:mt-20 mt-10 lg:p-12 p-6 lg:px-14 px-6 rounded-[28px] bg-gradient-to-br from-[#2a9fd8] to-[#1e7ba8]  border-2 border-[#e2e8f0] flex items-center justify-between flex-wrap gap-6 relative overflow-hidden">
                    <div className="relative">
                        <h3 className="lg:text-[28px] text-[20px] lg:font-extrabold font-semibold text-white mb-2 lg:tracking-tight tracking-normal">
                            Not sure which service you need?
                        </h3>
                        <p className="text-white/90 lg:text-base text-sm">
                            Let's talk. We'll figure it out together free consultation.
                        </p>
                    </div>

                    <button
                        className="px-9 py-4 rounded-full bg-white border-none text-[#2a9fd8] font-extrabold text-[15px] tracking-wide cursor-pointer transition-all duration-300 shadow-[0_8px_24px_rgba(42,159,216,0.25)] whitespace-nowrap hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_16px_32px_rgba(42,159,216,0.35)]"
                    >
                        Book Free Consultation →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CoreServicesSection;