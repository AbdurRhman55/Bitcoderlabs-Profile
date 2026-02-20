import React from 'react';
import { FiArrowRight, FiZap, FiBook, FiHeart, FiShoppingBag, FiHome, FiBriefcase } from 'react-icons/fi';

const industries = [
    {
        title: 'Education',
        icon: FiBook,
        desc: 'Developing next-gen LMS platforms and interactive virtual campuses that redefine learning.',
        color: '#2a9fd8'
    },
    {
        title: 'Healthcare',
        icon: FiHeart,
        desc: 'HIPAA-compliant telemedicine platforms and patient care management systems.',
        color: '#2a9fd8'
    },
    {
        title: 'E-Commerce',
        icon: FiShoppingBag,
        desc: 'Conversion-optimized digital storefronts with robust inventory and global payments.',
        color: '#2a9fd8'
    },
    {
        title: 'Real Estate',
        icon: FiHome,
        desc: 'Smart property tech solutions featuring immersive virtual tours and lead management.',
        color: '#2a9fd8'
    },
    {
        title: 'Startups',
        icon: FiZap,
        desc: 'Accelerating growth with rapid MVP development and technical roadmapping.',
        color: '#2a9fd8'
    },
    {
        title: 'Corporate',
        icon: FiBriefcase,
        desc: 'Enterprise-grade automation and customized ERP systems for large-scale operations.',
        color: '#2a9fd8'
    }
];

import { Link } from 'react-router-dom';

const Industries = () => {
    return (
        <section id="industries-section" className="relative bg-[#FFF8F6] py-24 lg:py-22 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Side: Staggered Cards */}
                    <div className="w-full lg:w-1/2 relative flex gap-4 lg:gap-6">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-4 lg:gap-6 w-1/2 lg:w-1/3">
                            {industries.slice(0, 3).map((ind, i) => (
                                <div
                                    key={i}
                                    className="bg-white p-4 lg:p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 border border-slate-50 group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white shadow-lg flex items-center justify-center mb-1 relative overflow-hidden">
                                        <div
                                            className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                                            style={{ backgroundColor: ind.color }}
                                        />
                                        <ind.icon size={26} style={{ color: ind.color }} />
                                    </div>
                                    <h4 className="text-md font-semibold text-slate-800 mb-1 ">{ind.title}</h4>
                                    <p className="text-slate-500 text-[10px] leading-relaxed">
                                        {ind.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Column 2 (Staggered) */}
                        <div className="flex flex-col gap-4 lg:gap-6 w-1/2 lg:w-1/2 pt-12">
                            {industries.slice(3, 6).map((ind, i) => (
                                <div
                                    key={i}
                                    className="bg-white p-4 lg:p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 border border-slate-50 group"
                                >
                                    <div className="w-10 h-10 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-1 relative overflow-hidden">
                                        <div
                                            className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                                            style={{ backgroundColor: ind.color }}
                                        />
                                        <ind.icon size={26} style={{ color: ind.color }} />
                                    </div>
                                    <h4 className="text-md font-semibold text-slate-800 mb-1 tracking-tight">{ind.title}</h4>
                                    <p className="text-slate-500 text-[10px] leading-relaxed">
                                        {ind.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-1/2 flex relative">
                        <div className="relative z-10 w-full">
                            <div className="mb-8">
                                <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4 relative inline-block">
                                    Industries We Serve
                                    <div className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-primary/40 rounded-full" />
                                </h2>
                            </div>

                            <p className="text-slate-500 text-lg lg:text-xl font-medium leading-relaxed mb-8 max-w-xl">
                                We have worked across multiple industry verticals over the years and helped businesses in diverse domains. We have served a wide range of industries like Education, Healthcare, Real Estate, E-Commerce, and many more.
                            </p>

                            <p className="text-primary font-bold mb-10 text-lg">
                                Interested? Please share your idea.
                            </p>

                            <Link to="/contact" className="group flex items-center justify-center gap-4 px-6 py-2 rounded-2xl bg-gradient-to-br from-[#2a9fd8] to-[#1a7fb8] text-white font-black text-lg shadow-[0_15px_40px_rgba(42,159,216,0.3)] hover:shadow-[0_20px_50px_rgba(42,159,216,0.4)] transition-all hover:scale-105 active:scale-95 cursor-pointer max-w-xs">
                                Let's Talk
                                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Industries;
