import React from 'react';
import { FiArrowRight, FiCheck, FiStar, FiTrendingUp } from 'react-icons/fi';

const ProductHeroBitcoderlabs = () => {
    const products = [
        {
            name: 'LMS Platform',
            tagline: 'E-Learning Made Simple',
            features: ['Course Management', 'Live Classes', 'Analytics'],
            users: '5K+',
            rating: '4.9',
        },
        {
            name: 'CRM Suite',
            tagline: 'Customer Success Platform',
            features: ['Pipeline Management', 'Automation', 'Reports'],
            users: '3K+',
            rating: '4.8',
        },
        {
            name: 'Project Manager',
            tagline: 'Team Collaboration Tool',
            features: ['Task Tracking', 'Team Chat', 'Time Logs'],
            users: '8K+',
            rating: '4.9',
        },
    ];

    return (
        <section className="relative w-full bg-white overflow-hidden font-sans">
            {/* ── Clean Minimal Background */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2a9fd8]/5 -skew-x-12 translate-x-1/4 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

                {/* ── Hero Content*/}
                <div className="pt-24 pb-12 lg:pt-36 lg:pb-20 text-center max-w-4xl mx-auto">

                    {/* Main Heading */}
                    <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900 mb-8 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        Software Products <br />
                        <span className="text-primary italic">built for scale.</span>
                    </h1>

                    {/* Description */}
                    <p className="text-slate-500 text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-medium animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                        Enterprise-ready SaaS solutions designed to transform how your business operates.
                        Simple, powerful, and reliable.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                        <button
                            onClick={() => document.getElementById('portfolio-section')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-5 rounded-2xl bg-primary text-white font-black shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 transition-all"
                        >
                            Explore All Products
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => document.getElementById('industries-section')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 font-bold hover:bg-white transition-all shadow-sm"
                        >
                            Schedule Demo
                        </button>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default ProductHeroBitcoderlabs;