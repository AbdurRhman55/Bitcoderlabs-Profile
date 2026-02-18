import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const Mentors = () => {
    const mentors = [
        {
            id: 1,
            name: "Alexander Reves",
            role: "Executive coach and business advisor",
            experience: "15+ Years Experience",
            expertise: ["Strategic Leadership", "Business Growth", "Digital Transformation"],
            quote: "I can help with all aspects of counselling, including work, business, and life.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80",
            color: "#2a4242" // Accurate Dark Seaweed/Petrol Green
        },
        {
            id: 2,
            name: "Sarah Chen",
            role: "Senior Engineering Manager",
            experience: "12+ Years Experience",
            expertise: ["System Design", "Agile Methodology", "Team Leadership"],
            quote: "Transforming complex technical challenges into scalable business solutions.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
            color: "#1d3240" // Deep Slated Navy
        },
        {
            id: 3,
            name: "Marcus Thorne",
            role: "Product Strategy Director",
            experience: "10+ Years Experience",
            expertise: ["Market Analysis", "User Experience", "Product Lifecycles"],
            quote: "Bridging the gap between user needs and technical excellence.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1000&q=80",
            color: "#382a45" // Deep Muted Plum
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextMentor = () => {
        setCurrentIndex((prev) => (prev + 1) % mentors.length);
    };

    const prevMentor = () => {
        setCurrentIndex((prev) => (prev - 1 + mentors.length) % mentors.length);
    };

    const current = mentors[currentIndex];

    return (
        <section
            className="relative w-full overflow-hidden transition-colors duration-1000 ease-in-out min-h-screen flex items-center"
            style={{ backgroundColor: current.color }}
        >
            {/* ── Visual Backdrop Overlay ── */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />



            <div className="max-w-[1600px] mx-auto w-full px-6 lg:px-20 relative z-10 py-32 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Left Side: Large Photo (Occupies more space like the image) */}
                    <div className="lg:col-span-6 flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-[600px] aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-sm shadow-[0_50px_100px_rgba(0,0,0,0.3)] animate-in fade-in zoom-in-95 duration-1000">
                            <img
                                src={current.image}
                                alt={current.name}
                                className="w-full h-full object-cover object-center grayscale-[0.1] contrast-110"
                            />
                            {/* Subtle Lighting Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </div>

                    {/* Right Side: Content (Offset to the right) */}
                    <div className="lg:col-span-6 text-white text-left max-w-2xl">
                        <div className="animate-in fade-in slide-in-from-right-10 duration-1000 delay-200">

                            <h2 className="text-4xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
                                {current.role}
                            </h2>

                            <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-10 font-medium">
                                {current.quote}
                            </p>

                            <button className="px-8 lg:px-10 py-4 lg:py-5 bg-[#eef2f4ff] text-slate-900 font-bold text-sm lg:text-base rounded-md hover:bg-white transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-lg mb-14">
                                Let's Clarify Your Direction
                            </button>

                            {/* Slider Navigation & Mentor Info */}
                            <div className="flex items-center justify-between border-t border-white/10 pt-10">
                                <div>
                                    <div className="text-[10px] tracking-[.4em] uppercase opacity-40 font-black mb-2">Lead Mentor</div>
                                    <div className="text-2xl lg:text-3xl font-black italic tracking-tighter">{current.name}</div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={prevMentor}
                                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                                    >
                                        <FiArrowLeft className="group-hover:scale-110 transition-transform" />
                                    </button>
                                    <button
                                        onClick={nextMentor}
                                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                                    >
                                        <FiArrowRight className="group-hover:scale-110 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Texture elements for "premium" feel */}
            <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-white/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-black/10 blur-[150px] rounded-full -translate-x-1/4 -translate-y-1/4" />
        </section>
    );
};

export default Mentors;
