import React, { useEffect, useRef, useState } from 'react';
import { FiClipboard, FiMap, FiLayout, FiCode, FiCheckCircle, FiUploadCloud, FiShield } from 'react-icons/fi';

const steps = [
    {
        keyword: 'analyze.',
        title: 'Requirement Analysis',
        icon: FiClipboard,
        description:
            'We dive deep into your business goals, target audience, and technical needs. Every successful project begins with truly understanding what you want to achieve.',
        color: '#2a9fd8',
    },
    {
        keyword: 'plan.',
        title: 'Planning & Strategy',
        icon: FiMap,
        description:
            'We craft a detailed roadmap  timelines, tech stack, architecture, and milestones. A strong plan means zero surprises mid-project.',
        color: '#2a9fd8',
    },
    {
        keyword: 'design.',
        title: 'UI/UX Design',
        icon: FiLayout,
        description:
            'Wireframes, prototypes, and pixel-perfect mockups built in Figma. Every screen designed with your users in mind  clean, intuitive, beautiful.',
        color: '#2a9fd8',
    },
    {
        keyword: 'build.',
        title: 'Development',
        icon: FiCode,
        description:
            'Our engineers write clean, scalable code using React, Laravel, and modern technologies. Agile sprints keep you updated every step of the way.',
        color: '#2a9fd8',
    },
    {
        keyword: 'test.',
        title: 'Testing & Quality Assurance',
        icon: FiCheckCircle,
        description:
            'Rigorous QA across devices, browsers, and load conditions. We catch bugs before your users do  performance, security, and usability all checked.',
        color: '#2a9fd8',
    },
    {
        keyword: 'launch.',
        title: 'Deployment',
        icon: FiUploadCloud,
        description:
            'Smooth, zero downtime deployment on your chosen infrastructure. Your product goes live with full monitoring, backups, and rollback safety nets.',
        color: '#2a9fd8',
    },
    {
        keyword: 'grow.',
        title: 'Ongoing Support',
        icon: FiShield,
        description:
            'The launch is just the beginning. We provide continuous maintenance, security patches, performance improvements, and feature updates always by your side.',
        color: '#2a9fd8',
    },
];

const DevelopmentProcess = () => {
    const [visible, setVisible] = useState([]);
    const stepRefs = useRef([]);

    useEffect(() => {
        const observers = stepRefs.current.map((ref, index) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setVisible((prev) => [...new Set([...prev, index])]);
                        }, index * 120);
                    }
                },
                { threshold: 0.25 }
            );
            if (ref) observer.observe(ref);
            return observer;
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <section className="bg-white py-10 lg:py-24 lg:pb-20 pb-10 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-10 mb-10 lg:mb-16 flex-wrap">
                    <div>
                        <p className="text-[13px] font-bold tracking-[0.14em] uppercase text-[#2a9fd8] mb-2.5">
                            How We Work
                        </p>
                        <h2 className="text-[clamp(32px,4vw,52px)] font-black text-[#1e293b] leading-tight m-0 tracking-tight">
                            Our Development
                        </h2>
                    </div>

                    <div className="text-right">
                        <p className="text-lg font-bold text-[#64748b] mb-0.5">
                            Software Development
                        </p>
                        <h2 className="text-[clamp(48px,8vw,96px)] font-black text-[#2a9fd8] leading-[0.9] m-0 tracking-tighter">
                            PROCESS
                        </h2>
                    </div>
                </div>

                {/* Staircase Steps */}
                <div className="flex flex-col gap-0">
                    {steps.map((step, index) => {
                        const isVis = visible.includes(index);
                        const widthPct = 55 + index * (45 / (steps.length - 1));
                        const Icon = step.icon;

                        return (
                            <div
                                key={index}
                                ref={(el) => (stepRefs.current[index] = el)}
                                className={`flex items-stretch mb-1.5 transition-all duration-600 ease-[cubic-bezier(0.34,1.2,0.64,1)]
                                    ${isVis ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[60px]'}`}
                                style={{ transitionDelay: `${index * 80}ms` }}
                            >
                                {/* Colored bar */}
                                <div
                                    className="rounded-r-[50px] flex items-center lg:gap-4 gap-2 px-2 lg:px-7 py-4 min-h-[60px] lg:min-h-[80px] relative overflow-hidden transition-all duration-300 hover:brightness-105 bg-[#2a9fd8]"
                                    style={{
                                        width: `${widthPct}%`,
                                        boxShadow: `4px 4px 16px rgba(42, 159, 216, 0.25)`,
                                    }}
                                >
                                    {/* Shine overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none rounded-[inherit]" />

                                    {/* Icon circle */}
                                    <div className="lg:w-[50px] lg:h-[50px] w-[40px] h-[40px] rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 border-2 border-white/30">
                                        <Icon className="text-white text-[22px]" strokeWidth={2.5} />
                                    </div>

                                    {/* Text */}
                                    <div className="flex-1 min-w-0">
                                        <p className="lg:text-lg text-xs font-bold text-white mb-1 tracking-wide">
                                            {step.title}
                                        </p>
                                        <p className="lg:text-xs text-[10px] text-white/90 leading-relaxed lg:line-clamp-2 line-clamp-1">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Keyword label beside bar */}
                                <div
                                    className={`flex items-center pl-4 hidden lg:flex transition-opacity duration-500 ${isVis ? 'opacity-100' : 'opacity-0'}`}
                                    style={{ transitionDelay: `${index * 80 + 300}ms` }}
                                >
                                    <span className="text-[clamp(15px,2vw,22px)] font-extrabold text-white italic uppercase tracking-tight whitespace-nowrap bg-gradient-to-r from-[#2a9fd8] to-[#1e7ba8] px-4 py-1.5 rounded-lg shadow-md">
                                        {step.keyword}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA strip */}
                <div className="lg:mt-16 mt-8 bg-gradient-to-br from-[#2a9fd8] to-[#1e7ba8] rounded-3xl lg:p-12 p-6 lg:px-14 flex items-center justify-between flex-wrap gap-6 shadow-[0_16px_48px_rgba(42,159,216,0.3)]">
                    <div>
                        <h3 className="lg:text-[28px] text-xl lg:font-black font-semibold text-white mb-2 lg:tracking-tight tracking-wide">
                            Ready to start your project?
                        </h3>
                        <p className="lg:text-base text-sm text-white/90 m-0">
                            Let's walk through the process together from idea to launch.
                        </p>
                    </div>

                    <div className="flex lg:gap-3 gap-2">
                        <a
                            href="/contact"
                            className="lg:px-8 px-4 lg:py-3.5 py-2 rounded-full bg-white text-[#2a9fd8] font-bold lg:text-[15px] text-[12px] no-underline shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300 inline-block hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
                        >
                            Start a Project →
                        </a>
                        <a
                            href="/services"
                            className="lg:px-8 px-4 lg:py-3.5 py-2 rounded-full bg-white/15 border-2 border-white/40 text-white font-bold lg:text-[15px] text-[12px] no-underline transition-all duration-300 inline-block hover:bg-white/25"
                        >
                            View Services
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(0deg); }
                }
                .animate-float {
                    animation: float 2.5s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default DevelopmentProcess;