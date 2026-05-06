import React from 'react';
import { FiTrendingUp, FiSearch } from 'react-icons/fi';
import {
    IoBulbOutline,
    IoThumbsUpOutline,
    IoRibbonOutline,
    IoPeopleOutline
} from 'react-icons/io5';

const OurCoreValues = () => {
    const values = [
        {
            icon: <FiTrendingUp size={48} />,
            title: 'Progressive',
            bgColor: '#808080',
            description: 'We embrace change and continuously evolve to stay ahead.'
        },
        {
            icon: <IoBulbOutline size={48} />,
            title: 'Innovation',
            bgColor: '#4FC3F7',
            description: 'We turn creative ideas into powerful digital solutions.'
        },
        {
            icon: <IoThumbsUpOutline size={48} />,
            title: 'Reliability',
            bgColor: '#4DB6AC',
            description: 'We deliver consistent, dependable results you can trust.'
        },
        {
            icon: <IoRibbonOutline size={48} />,
            title: 'Quality',
            bgColor: '#26596D',
            description: 'We maintain high standards in every product we build.'
        },
        {
            icon: <IoPeopleOutline size={48} />,
            title: 'Team Work',
            bgColor: '#FFB84D',
            description: 'We collaborate to achieve shared success and growth.'
        }
    ];

    return (
        <section className="w-full bg-white py-16 px-6">
            <div className="max-w-7xl mx-auto lg:px-12 px-3">
                {/* Header Section */}
                <div className=" mb-12">
                    {/* Left Side - Title and Description */}
                    <div className="max-w-xl">
                        <h2 className="text-5xl font-bold text-gray-700 mb-8">
                            Our Core Values
                        </h2>
                        <p className="text-gray-500 leading-relaxed text-base">
                            At BitcoderLabs, our values shape every line of code and every solution we create. We believe in innovation that inspires, quality that delivers, and integrity that builds lasting trust. Our team is driven by collaboration, creativity, and a passion for continuous growth in a rapidly evolving digital world. We are committed to putting our clients first—delivering reliable, impactful, and future-ready solutions while fostering long-term partnerships built on trust and excellence.
                        </p>
                    </div>


                </div>

                {/* Values Cards - Mobile & Tablet Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:hidden mt-8">
                    {values.map((value, index) => (
                        <div
                            key={`mobile-${index}`}
                            className="relative w-full p-8 text-center text-white rounded-3xl"
                            style={{
                                backgroundColor: value.bgColor,
                                minHeight: '240px'
                            }}
                        >
                            <div className="flex flex-col items-center">
                                <div className="mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">
                                    {value.title}
                                </h3>
                                <p className="text-xs leading-relaxed opacity-90 max-w-xs mx-auto">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Values Cards - Overlapping Arch Design (Desktop Only) */}
                <div className="relative hidden lg:flex items-end justify-end h-96 ">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="relative flex-shrink-0 "
                            style={{
                                width: '200px',
                                height: `${280 + index * 50}px`,
                                marginLeft: index > 0 ? '-20px' : '0',
                                zIndex: index
                            }}
                        >
                            {/* Arch Shape Card */}
                            <div
                                className="absolute inset-0 flex flex-col items-center justify-start pt-16 px-6 text-center text-white"
                                style={{
                                    backgroundColor: value.bgColor,
                                    borderTopLeftRadius: '100px',
                                    borderTopRightRadius: '100px'
                                }}
                            >
                                {/* Icon */}
                                <div className="mb-4">
                                    {value.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-4">
                                    {value.title}
                                </h3>

                                {/* Description */}
                                <p className="text-xs leading-relaxed opacity-90 italic">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurCoreValues;