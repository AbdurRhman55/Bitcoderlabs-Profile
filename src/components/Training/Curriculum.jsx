import React from 'react';
import { FaHtml5, FaBootstrap, FaJs, FaPhp, FaProjectDiagram } from 'react-icons/fa';

const Curriculum = () => {
    const modules = [
        {
            id: "01",
            title: "HTML & CSS Basics",
            description: "Master the foundation of web development. Build structured and styled web pages from scratch.",
            icon: <FaHtml5 />,
            color: "#f39c12", // Orange
        },
        {
            id: "02",
            title: "Bootstrap & Responsive Design",
            description: "Learn to build fast, responsive sites with Bootstrap. Ensure your websites look great on all devices.",
            icon: <FaBootstrap />,
            color: "#00acc1", // Cyan
        },
        {
            id: "03",
            title: "JavaScript Fundamentals",
            description: "Unlock the power of the web with JavaScript. Learn logic, DOM manipulation, and interactive elements.",
            icon: <FaJs />,
            color: "#e91e63", // Red
        },
        {
            id: "04",
            title: "PHP & MySQL",
            description: "Dive into backend development. Build dynamic, data-driven applications with PHP and MySQL databases.",
            icon: <FaPhp />,
            color: "#009688", // Teal
        },
        {
            id: "05",
            title: "Final Project",
            description: "Bring it all together. Design and develop a comprehensive full-stack project for your portfolio.",
            icon: <FaProjectDiagram />,
            color: "#9c27b0", // Purple
        },
    ];

    return (
        <section id="curriculum" className="py-20 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-800 mb-4 tracking-tight">
                        Course <span className="text-[#2a9fd8]">Curriculum</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto font-medium">
                        Our comprehensive curriculum is designed to take you from a beginner to a professional developer through a structured, hands-on learning path.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {modules.map((module) => (
                        <div key={module.id} className="flex flex-col md:flex-row items-stretch group">
                            {/* Left Module Badge */}
                            <div
                                className="relative flex flex-col items-center justify-center p-6 md:w-40 text-white font-bold transition-transform duration-300 group-hover:scale-105 z-10"
                                style={{
                                    backgroundColor: module.color,
                                    clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)'
                                }}
                            >
                                <span className="text-3xl lg:text-4xl block leading-none">{module.id}</span>
                                <span className="text-xs uppercase tracking-widest mt-1 opacity-90">Module</span>
                            </div>

                            {/* Content Box */}
                            <div className="flex-1 bg-white p-6 md:p-8 flex items-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] border-y border-r border-slate-100 relative -ml-4 md:-ml-6 pl-10 md:pl-12 rounded-r-xl transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group-hover:-translate-y-1">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-[#2a9fd8] transition-colors">
                                        {module.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                                        {module.description}
                                    </p>
                                </div>
                                <div
                                    className="text-3xl md:text-4xl ml-4 opacity-20 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
                                    style={{ color: module.color }}
                                >
                                    {module.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Curriculum;
