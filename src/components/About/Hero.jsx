import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef(null);

    const values = [
        { title: 'Innovation', description: 'Pushing boundaries with cutting-edge solutions' },
        { title: 'Excellence', description: 'Delivering quality in every pixel and line of code' },
        { title: 'Integrity', description: 'Building trust through transparency and honesty' }
    ];

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

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % values.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
                <div className="flex flex-col lg:flex-row lg:px-10 px-3 lg:gap-24 items-center justify-center min-h-[50vh]">
                    {/* Left Column - Hero Header */}
                    <div className={`w-full lg:w-1/2 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                        <div className="space-y-8">
                            <div className="inline-block">
                                <div className="flex items-center gap-2">
                                    <div className="w-12 h-0.5 bg-gray-900"></div>
                                    <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">About Us</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-none">
                                    We are
                                    <br />
                                    <span className="text-gray-300">Bitcoderlabs</span>
                                </h1>
                            </div>

                            <div className="h-28 relative overflow-hidden">
                                {values.map((value, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-all duration-700 ${activeIndex === index
                                            ? 'opacity-100 translate-y-0'
                                            : activeIndex > index
                                                ? 'opacity-0 -translate-y-full'
                                                : 'opacity-0 translate-y-full'
                                            }`}
                                    >
                                        <div className="border-l-4 border-gray-900 pl-6">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{value.title}</h3>
                                            <p className="text-gray-600 font-medium">{value.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-2">
                                {values.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`h-1 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-8 bg-gray-900' : 'w-1 bg-gray-300'}`}
                                    ></button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Centered Professional Intro */}
                    <div className={`w-full transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                        <div className="relative">
                            <p className="text-2xl md:text-3xl text-gray-800 leading-tight font-light tracking-tight lg:pl-4">
                                Bitcoderlabs is a premier software engineering firm dedicated to architecting the
                                <span className="font-bold text-gray-900"> future of digital commerce </span>
                                and enterprise solutions. We combine technical precision with creative strategy to deliver
                                <span className="text-primary italic font-medium"> scalable global products </span>
                                that drive measurable business transformation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;