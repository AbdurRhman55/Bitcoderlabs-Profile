import React from 'react';

const Training = () => {
    return (
        <div className="bg-white min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-[#2a9fd8] mb-6">Training & Bootcamps</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Master the latest technologies with our hands-on training programs led by industry experts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* React Bootcamp */}
                    <div className="relative overflow-hidden group rounded-3xl bg-gray-900 text-white p-8">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 14.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zM22.5 13c0 2.222-1.42 4.111-3.414 4.814l.846 1.545c.108.197.037.443-.16.551-.197.108-.443.037-.551-.16l-.846-1.545c-.443.155-.91.245-1.395.245-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5c2.481 0 4.5 2.019 4.5 4.5zm-5.614-3.14c.367.2.5.658.3 1.025l-2.062 3.771c-.2.367-.658.5-1.025.3-.367-.2-.5-.658-.3-1.025l2.062-3.771c.2-.367.658-.5 1.025-.3z" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold mb-4">React & Frontend</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            A 12-week intensive program covering React, Tailwind CSS, State Management, and Modern Web Architecture.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#2a9fd8] rounded-full"></span>
                                Modern ES6+ JavaScript
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#2a9fd8] rounded-full"></span>
                                React Hooks & Context API
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#2a9fd8] rounded-full"></span>
                                Project-based Learning
                            </li>
                        </ul>
                        <button className="bg-[#2a9fd8] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1e7eb0] transition-colors">
                            Enroll Now
                        </button>
                    </div>

                    {/* Backend Engineering */}
                    <div className="relative overflow-hidden group rounded-3xl bg-[#eef2f4ff] p-8 border border-gray-200">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Backend Mastery</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Deep dive into Node.js, Express, Databases (SQL/NoSQL), and System Design principles for scalable apps.
                        </p>
                        <ul className="space-y-3 mb-8 text-gray-600">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#2a9fd8] rounded-full"></span>
                                REST & GraphQL APIs
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#2a9fd8] rounded-full"></span>
                                Database Management
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#2a9fd8] rounded-full"></span>
                                Deployment & CI/CD
                            </li>
                        </ul>
                        <button className="border-2 border-[#2a9fd8] text-[#2a9fd8] px-8 py-3 rounded-full font-bold hover:bg-[#2a9fd8] hover:text-white transition-all">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;
