import React, { useState } from 'react';
import {
    SiReact,
    SiLaravel,
    SiPhp,
    SiFigma,
    SiMysql,
    SiPostgresql,
    SiNodedotjs,
    SiPython,
    SiDocker,
    SiMongodb,
    SiGraphql
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { FiCode, FiDatabase, FiLayout, FiServer } from 'react-icons/fi';

const OurExperties = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Technologies' },
        { id: 'frontend', name: 'Frontend' },
        { id: 'backend', name: 'Backend' },
        { id: 'database', name: 'Database' },
        { id: 'design', name: 'Design' }
    ];

    const technologies = [
        {
            name: 'React.js',
            icon: <SiReact size={40} />,
            category: 'frontend',
            color: '#61DAFB',
            description: 'Building dynamic user interfaces'
        },
        {
            name: 'Laravel',
            icon: <SiLaravel size={40} />,
            category: 'backend',
            color: '#FF2D20',
            description: 'PHP framework for web artisans'
        },
        {
            name: 'PHP',
            icon: <SiPhp size={40} />,
            category: 'backend',
            color: '#777BB4',
            description: 'Server-side scripting language'
        },
        {
            name: 'Node.js',
            icon: <SiNodedotjs size={40} />,
            category: 'backend',
            color: '#339933',
            description: 'JavaScript runtime environment'
        },
        {
            name: 'UI/UX Design',
            icon: <SiFigma size={40} />,
            category: 'design',
            color: '#F24E1E',
            description: 'User-centered design solutions'
        },
        {
            name: 'MySQL',
            icon: <SiMysql size={40} />,
            category: 'database',
            color: '#4479A1',
            description: 'Relational database management'
        },
        {
            name: 'PostgreSQL',
            icon: <SiPostgresql size={40} />,
            category: 'database',
            color: '#336791',
            description: 'Advanced open source database'
        },
        {
            name: 'MongoDB',
            icon: <SiMongodb size={40} />,
            category: 'database',
            color: '#47A248',
            description: 'NoSQL document database'
        },
        {
            name: 'GraphQL',
            icon: <SiGraphql size={40} />,
            category: 'backend',
            color: '#E10098',
            description: 'API query language'
        },
        {
            name: 'Docker',
            icon: <SiDocker size={40} />,
            category: 'backend',
            color: '#2496ED',
            description: 'Container platform'
        },
        {
            name: 'AWS',
            icon: <FaAws size={40} />,
            category: 'backend',
            color: '#FF9900',
            description: 'Cloud computing services'
        },
        {
            name: 'Python',
            icon: <SiPython size={40} />,
            category: 'backend',
            color: '#3776AB',
            description: 'Versatile programming language'
        }
    ];

    const filteredTech = activeCategory === 'all'
        ? technologies
        : technologies.filter(tech => tech.category === activeCategory);

    return (
        <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20">
            <div className="max-w-7xl mx-auto lg:px-12 px-3">
                {/* Header Section - Centered Sync with OurMission & OurCoreValues */}
                <div className="space-y-6 mb-20 text-center">
                    <div className="inline-block">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <div className="w-10 h-0.5 bg-[#2a9fd8]"></div>
                            <span className="text-xs font-bold text-[#2a9fd8] uppercase tracking-[0.2em]">Our Arsenal</span>
                            <div className="w-10 h-0.5 bg-[#2a9fd8]"></div>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-[#1e293b] tracking-tighter uppercase leading-none">
                            Technologies <br />
                            <span className="text-gray-300 italic">& Expertise</span>
                        </h2>
                    </div>
                    <p className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
                        We leverage cutting-edge technologies to build scalable, high-performance solutions that drive your business forward.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`
                px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300
                ${activeCategory === category.id
                                    ? 'bg-gray-900 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md hover:shadow-lg'
                                }
              `}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Technologies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredTech.map((tech, index) => (
                        <div
                            key={tech.name}
                            className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-gray-300 transition-all cursor-pointer duration-300 hover:shadow-2xl hover:-translate-y-2"
                            style={{
                                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
                            }}
                        >
                            {/* Icon */}
                            <div
                                className="mb-6 transition-all duration-300 group-hover:scale-110"
                                style={{ color: tech.color }}
                            >
                                {tech.icon}
                            </div>

                            {/* Name */}
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                                {tech.name}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {tech.description}
                            </p>

                            {/* Bottom Accent */}
                            <div
                                className="mt-6 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                                style={{ backgroundColor: tech.color }}
                            ></div>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-gray-200">
                    {[
                        { label: 'Technologies Mastered', value: '50+' },
                        { label: 'Projects Delivered', value: '500+' },
                        { label: 'Lines of Code', value: '1M+' },
                        { label: 'Happy Clients', value: '200+' }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </section>
    );
};

export default OurExperties;