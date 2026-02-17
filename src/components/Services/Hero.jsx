import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const ServicesHero = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const services = [
        'Web Development',
        'Mobile App Development',
        'UI/UX Design',
        'API Integration',
        'Database Management',
        'Cloud Solutions',
        'E-Commerce',
        'Custom Software'
    ];

    const stats = [
        { value: '10+', label: 'Year of experience' },
        { value: '300+', label: 'Completed Projects' },
        { value: '14+', label: 'Team Members' }
    ];

    return (
        <section
            className="relative w-full min-h-screen overflow-hidden flex items-center"
            style={{ backgroundColor: '#1e293b' }}
        >
            {/* Background Video Playback - Fixed z-index and styles to ensure visibility */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source
                        src="https://cdn.pixabay.com/video/2022/02/21/108420-680178323_large.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Original Overlay and Content Design - Added z-10 for layered structure */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: 'linear-gradient(to right, rgba(30,41,59,0.95) 0%, rgba(30,41,59,0.8) 55%, rgba(30,41,59,0.3) 100%)'
                }}
            ></div>

            {/* Main Content */}
            <div className="relative z-30 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 py-24 gap-10 max-w-7xl mx-auto w-full">
                {/* Left Side */}
                <div className="flex-1 max-w-xl text-center lg:text-left">
                    {/* Heading */}
                    <h1 className="text-3xl lg:text-6xl font-black text-white leading-tight mb-2 lg:mb-6">
                        Top Quality{' '}
                        <span style={{ color: '#2a9fd8' }}>Digital</span>
                        <br />
                        <span style={{ color: '#2a9fd8' }}>Solutions</span>{' '}
                        <span className="text-white">For You</span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed mb-4 lg:mb-8 max-w-md mx-auto lg:mx-0">
                        Transform your business with our expert digital solutions. Our skilled team
                        ensures precision and quality, delivering scalable, modern applications that
                        require minimal effort and perform perfectly year-round.
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-center lg:justify-start gap-10 mb-8 lg:mb-10">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <div className="text-3xl font-black mb-1" style={{ color: '#2a9fd8' }}>
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex items-center justify-center lg:justify-start lg:gap-4 gap-2">
                        <button
                            className="flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-lg cursor-pointer"
                            style={{ backgroundColor: '#2a9fd8' }}
                        >
                            Read More <FiArrowRight size={16} />
                        </button>
                        <button
                            className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 cursor-pointer"
                        >
                            Our Services <FiArrowRight size={16} />
                        </button>
                    </div>
                </div>

                {/* Right Side - Quote Form */}
                <div
                    className="w-full lg:w-[380px] flex-shrink-0 bg-white/95 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-2xl"
                >
                    <h2 className="text-2xl font-black text-gray-900 mb-6 text-center lg:text-left">
                        Get A Quote
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Full Name"
                                className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-[#2a9fd8] focus:ring-2 focus:ring-[#2a9fd8]/20 transition-all duration-300"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-[#2a9fd8] focus:ring-2 focus:ring-[#2a9fd8]/20 transition-all duration-300"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone No."
                                className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-[#2a9fd8] focus:ring-2 focus:ring-[#2a9fd8]/20 transition-all duration-300"
                            />
                        </div>

                        {/* Service Type */}
                        <div className="relative">
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 text-gray-500 text-sm focus:outline-none focus:border-[#2a9fd8] focus:ring-2 focus:ring-[#2a9fd8]/20 transition-all duration-300 appearance-none bg-white cursor-pointer"
                            >
                                <option value="" disabled>Service type</option>
                                {services.map((service, index) => (
                                    <option key={index} value={service} className="text-gray-800">
                                        {service}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write Message"
                                rows={3}
                                className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-[#2a9fd8] focus:ring-2 focus:ring-[#2a9fd8]/20 transition-all duration-300 resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-4 rounded-full text-white font-bold text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-lg cursor-pointer"
                            style={{ backgroundColor: '#2a9fd8' }}
                        >
                            Get a quote
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;