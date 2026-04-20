import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const Hero = () => {
    return (
        <section className="relative md:min-h-screen bg-[#fcfdff] pt-32 pb-20 overflow-hidden font-sans">
            {/* Soft Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,#eff6ff_0%,transparent_60%)] opacity-70"></div>

            {/* Ambient Bottom Glows */}
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Radiating Lines SVG */}
            <div className="absolute top-[250px] left-1/2 -translate-x-1/2 w-[1600px] h-[1600px] pointer-events-none opacity-[0.35]">
                <svg viewBox="0 0 1000 1000" className="w-full h-full">
                    {[...Array(36)].map((_, i) => (
                        <line
                            key={i}
                            x1="500"
                            y1="500"
                            x2={500 + 1000 * Math.cos((i * 10 * Math.PI) / 180)}
                            y2={500 + 1000 * Math.sin((i * 10 * Math.PI) / 180)}
                            stroke="#2a9fd8"
                            strokeWidth="0.5"
                            className="opacity-[0.3]"
                        />
                    ))}
                </svg>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center">
                {/* Heading */}
                <h1 className="text-5xl md:text-6xl lg:text-[76px] mt-10 font-black text-[#1a1a1a] tracking-[-0.04em] text-center max-w-4xl mb-8 leading-[0.92]">
                    AI Platform for Better <br />
                    <span className="text-[#1a1a1a]">Talent Hiring</span>
                </h1>

                {/* Counter Badge */}
                <div className="flex items-center gap-2 mb-10 bg-white/70 backdrop-blur-md px-5 py-2 rounded-full border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.02)] text-sm text-gray-500 font-medium">
                    <span>Over</span>
                    <span className="bg-[#f3f4f6] px-2 py-0.5 rounded font-black text-gray-900 tracking-tighter mx-1">120+</span>
                    <span>new candidates added.</span>
                </div>

                {/* Search Container */}
                <div className="w-full max-w-2xl relative">
                    <div className="relative bg-white rounded-full p-1.5 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex items-center">
                        <div className="flex-1 px-5">
                            <input
                                type="text"
                                placeholder="Enter role, experience, location..."
                                className="w-full bg-transparent border-none outline-none text-gray-600 placeholder:text-gray-400 font-medium text-base py-3"
                            />
                        </div>
                        <button className="bg-[#1a1a1a] hover:bg-black text-white px-7 py-3 rounded-full flex items-center gap-2 font-bold text-sm transition-all duration-300">
                            <HiSparkles className="text-lg text-white" />
                            <span>Search</span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
