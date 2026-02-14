import React from 'react';

const Services = () => {
    return (
        <div className="bg-white min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-[#2a9fd8] mb-6">Our Services</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to your business needs, from web development to creative design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Web Development */}
                    <div className="p-8 rounded-3xl bg-gray-50 hover:bg-[#ebf8ff] transition-all border border-gray-100 shadow-sm group">
                        <div className="w-14 h-14 bg-[#2a9fd8] rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Development</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Cutting-edge web applications built with modern frameworks like React, Next.js, and high-performance backend systems.
                        </p>
                    </div>

                    {/* UI/UX Design */}
                    <div className="p-8 rounded-3xl bg-gray-50 hover:bg-[#ebf8ff] transition-all border border-gray-100 shadow-sm group">
                        <div className="w-14 h-14 bg-[#2a9fd8] rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.172-1.172a4 4 0 015.656 5.656l-1.172 1.172" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">UI/UX Design</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Intuitive and aesthetically pleasing interfaces focused on user experience and brand identity.
                        </p>
                    </div>

                    {/* App Development */}
                    <div className="p-8 rounded-3xl bg-gray-50 hover:bg-[#ebf8ff] transition-all border border-gray-100 shadow-sm group">
                        <div className="w-14 h-14 bg-[#2a9fd8] rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Solutions</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Robust mobile applications for iOS and Android, ensuring your business reaches users everywhere.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
