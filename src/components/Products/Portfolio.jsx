import React, { useEffect, useState, useRef } from "react";
import { FiArrowRight, FiExternalLink, FiCode, FiLayers } from "react-icons/fi";
import { Link } from 'react-router-dom';

const PortfolioPreview = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const sectionRef = useRef(null);

    const projects = [
        {
            id: 1,
            name: "Franchise Pakistan Portal",
            category: "Partnership & B2B",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            tech: ["React", "Enterprise API", "SQL"],
            detailsLink: "https://www.franchisepk.com/",
            color: "#2a9fd8"
        },
        {
            id: 2,
            name: "SBA Assessment Portal",
            category: "EdTech & LMS",
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
            tech: ["LMS Architecture", "Node.js", "PostgreSQL"],
            detailsLink: "http://175.107.59.138/school/login",
            color: "#e94b8d"
        },
        {
            id: 3,
            name: "Doctor AI Software",
            category: "HealthTech AI",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
            tech: ["Python AI", "Neural Networks", "FastAPI"],
            detailsLink: " ",
            color: "#4ecdc4"
        },
        {
            id: 4,
            name: "Bitcoderlabs E-Learning",
            category: "Digital Education",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
            tech: ["React Native", "D3.js", "AWS"],
            detailsLink: "#",
            color: "#f59e0b"
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.getAttribute("data-index");
                        setVisibleItems((prev) => [...new Set([...prev, parseInt(index)])]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = document.querySelectorAll(".portfolio-card");
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="portfolio-section" className="relative bg-slate-50/50 py-14 lg:py-24 overflow-hidden" ref={sectionRef}>
            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row px-6 lg:items-end justify-between gap-6 mb-16 lg:mb-24">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest mb-4">
                            <FiLayers className="text-sm" />
                            Our Portfolio
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                            Design meet <br />
                            <span className="text-primary italic">Precision.</span>
                        </h2>
                    </div>
                    <p className="text-slate-500 text-lg lg:text-xl max-w-md font-medium lg:text-right">
                        Crafting digital masterpieces with pixel-perfect attention and high-performance engineering.
                    </p>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-15">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            data-index={index}
                            className={`portfolio-card group relative flex flex-col bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-700 ease-out hover:shadow-[0_30px_60px_-20px_rgba(42,159,216,0.15)] hover:-translate-y-3 ${visibleItems.includes(index)
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-20"
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] m-2">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <div className="flex flex-wrap gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-[10px] font-black uppercase tracking-widest bg-white/20 backdrop-blur-md text-white px-2 py-0.5 rounded-md border border-white/10">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-md border border-slate-100 text-[#0f172a] text-[10px] font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col p-8 pt-4">
                                <h3 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors duration-300 flex items-center justify-between">
                                    {project.name}
                                    <FiExternalLink className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-sm" />
                                </h3>
                                <div className="mt-4 flex items-center gap-2 group/btn cursor-pointer" onClick={() => window.open(project.detailsLink, '_blank')}>
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                        <FiCode className="text-slate-400 group-hover:text-white transition-colors duration-300" size={14} />
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors duration-300">
                                        Build Details
                                    </span>
                                    <FiArrowRight className="ml-auto text-primary opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Clean Stats Banner ──────────────────── */}
                <div className="mb-14 p-12 lg:p-16 rounded-[4rem] bg-slate-900 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group/banner">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/banner:translate-x-full transition-transform duration-1000 pointer-events-none" />
                    <div className="text-center lg:text-left relative z-10">
                        <h3 className="text-3xl lg:text-5xl font-black text-white mb-4 tracking-tight">
                            Start Growing Today.
                        </h3>
                        <p className="text-slate-400 text-lg lg:text-xl font-medium max-w-md">
                            Join 10k+ businesses scaling with Bitcoderlabs custom solutions.
                        </p>
                    </div>
                    <div className="flex items-center gap-8 lg:gap-16 flex-wrap justify-center relative z-10">
                        {[
                            { value: '50+', label: 'Solutions' },
                            { value: '99.9%', label: 'Uptime' }
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-4xl font-black text-primary mb-1">{stat.value}</div>
                                <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">{stat.label}</div>
                            </div>
                        ))}
                        <Link to="/contact" className="px-12 py-5 rounded-[2rem] bg-primary text-white font-black hover:scale-105 transition-all shadow-xl shadow-primary/20 ring-4 ring-primary/10 cursor-pointer">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioPreview;