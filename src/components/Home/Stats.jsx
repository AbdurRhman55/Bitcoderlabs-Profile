import React, { useState, useEffect, useRef } from 'react';

const StatCounter = ({ end, label, suffix = "", duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, end, duration]);

    return (
        <div ref={ref} className="text-center group">
            <div className="text-5xl md:text-7xl font-black text-white mb-3 flex justify-center items-center gap-1 group-hover:scale-105 transition-transform duration-500">
                {count}{suffix}
            </div>
            <p className="text-[#a0d8f5] text-sm md:text-base font-bold uppercase tracking-[0.2em]">
                {label}
            </p>
        </div>
    );
};

const Stats = () => {
    return (
        <section className="relative py-24 bg-gray-900 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] mix-blend-screen"></div>
                <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#1a5f82] rounded-full blur-[100px] mix-blend-screen transition-all duration-1000 animate-pulse"></div>
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    <StatCounter end={3} suffix="+" label="Years Experience" />
                    <StatCounter end={120} suffix="+" label="Projects Delivered" />
                    <StatCounter end={45} suffix="+" label="Expert Mentors" />
                    <StatCounter end={98} suffix="%" label="Client Retention" />
                </div>
            </div>
        </section>
    );
};

export default Stats;
