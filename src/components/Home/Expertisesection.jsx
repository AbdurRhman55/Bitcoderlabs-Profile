import React, { useState } from 'react';
import {
    FiMonitor,
    FiSmartphone,
    FiLayout,
    FiCode,
    FiCloud,
    FiShoppingCart,
    FiDatabase,
    FiTool,
    FiArrowRight
} from 'react-icons/fi';

const ExpertiseSectionUnique = () => {
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            icon: <FiMonitor size={28} />,
            title: 'Web Development',
            description: 'Custom web applications built with cutting-edge technologies, delivering responsive and scalable solutions.',
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop'
        },
        {
            icon: <FiSmartphone size={28} />,
            title: 'Mobile Apps',
            description: 'Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android.',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop'
        },
        {
            icon: <FiLayout size={28} />,
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive interfaces designed with user-centric approach to maximize engagement and satisfaction.',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'
        },
        {
            icon: <FiCode size={28} />,
            title: 'Custom Software',
            description: 'Tailored software solutions designed to solve your unique business challenges and streamline operations.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop'
        },
        {
            icon: <FiCloud size={28} />,
            title: 'Cloud Solutions',
            description: 'Scalable cloud infrastructure and migration services to enhance performance and reduce operational costs.',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop'
        },
        {
            icon: <FiShoppingCart size={28} />,
            title: 'E-Commerce',
            description: 'Complete e-commerce platforms with secure payment integration and inventory management systems.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop'
        },
        {
            icon: <FiDatabase size={28} />,
            title: 'Data Analytics',
            description: 'Transform raw data into actionable insights with powerful analytics and visualization tools.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
        },
        {
            icon: <FiTool size={28} />,
            title: 'Maintenance & Support',
            description: 'Ongoing technical support and maintenance to keep your applications running smoothly 24/7.',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop'
        }
    ];

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16">
                    <div className="inline-block mb-4">
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Our Expertise</span>
                    </div>
                    <h2 className="text-6xl font-bold text-primary mb-4 max-w-3xl">
                        What We Craft
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl">
                        We don't just build software. We architect digital experiences that transform
                        businesses and captivate users across every platform.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Side - Service List */}
                    <div className="lg:col-span-5 space-y-2">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveService(index)}
                                className={`
                                    group cursor-pointer p-6 border-l-4 transition-all duration-300
                                    ${activeService === index
                                        ? 'border-l-primary bg-gray-50'
                                        : 'border-l-primary/20  hover:border-l-primary/50 hover:bg-gray-50'
                                    }
                                `}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`
                                        flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center
                                        transition-all duration-300
                                        ${activeService === index
                                            ? 'bg-primary text-white'
                                            : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                                        }
                                    `}>
                                        {service.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                            <h3 className={`
                                                text-lg font-bold transition-colors duration-300
                                                ${activeService === index
                                                    ? 'text-primary'
                                                    : 'text-gray-700 group-hover:text-primary'
                                                }
                                            `}>
                                                {service.title}
                                            </h3>
                                            <FiArrowRight className={`
                                                flex-shrink-0 transition-all duration-300
                                                ${activeService === index
                                                    ? 'opacity-100 translate-x-0'
                                                    : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                                                }
                                            `} />
                                        </div>
                                        <div className={`
                                            overflow-hidden transition-all duration-500
                                            ${activeService === index
                                                ? 'max-h-32 opacity-100 mt-2'
                                                : 'max-h-0 opacity-0'
                                            }
                                        `}>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Active Service Display */}
                    <div className="lg:col-span-7">
                        <div className="sticky top-24">
                            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gray-100">
                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        className={`
                                            absolute inset-0 transition-all duration-700
                                            ${activeService === index
                                                ? 'opacity-100 scale-100'
                                                : 'opacity-0 scale-95'
                                            }
                                        `}
                                    >
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                        {/* Content Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                                                    {service.icon}
                                                </div>
                                                <div>
                                                    <div className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-1">
                                                        {String(index + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                                                    </div>
                                                    <h3 className="text-2xl font-bold">
                                                        {service.title}
                                                    </h3>
                                                </div>
                                            </div>
                                            <p className="text-white/90 text-base max-w-lg">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Progress Indicator */}
                            <div className="flex gap-2 mt-6">
                                {services.map((_, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setActiveService(index)}
                                        className={`
                                            h-1 flex-1 rounded-full cursor-pointer transition-all duration-300
                                            ${activeService === index
                                                ? 'bg-gray-900'
                                                : 'bg-gray-200 hover:bg-gray-300'
                                            }
                                        `}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSectionUnique;