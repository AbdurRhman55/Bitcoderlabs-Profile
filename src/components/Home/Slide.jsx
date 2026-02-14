import React from 'react';

const Slide = ({ message, isActive }) => {
    const accentColor = message.type === 'CEO' ? 'border-[#2a9fd8]' : 'border-blue-400';

    return (
        <div className="w-full max-w-7xl mx-auto h-full flex-shrink-0 bg-white">
            <div className="max-w-6xl mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 md:px-16 lg:px-20">

                {/* Left Side: Image */}
                <div className={`relative transition-all duration-1000 transform ${isActive ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'}`}>
                    <div className="relative group">
                        {/* Background geometric element */}
                        {/* <div className={`absolute -inset-4 bg-gradient-to-tr ${message.type === 'CEO' ? 'from-[#2a9fd8]/20 to-transparent' : 'from-indigo-100 to-transparent'} rounded-[2.5rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700`}></div> */}

                        <div className="relative max-w-[350px] max-h-[400px] aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
                            <img
                                src={message.image}
                                alt={message.name}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Floating Info Tag */}
                        <div className={`absolute -bottom-3 -right-4 px-4 py-2 bg-white rounded-2xl shadow-xl border border-gray-100 transition-all duration-1000 delay-500 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <p className="text-[#2a9fd8]  italic text-lg">CEO & FOUNDER</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className={`flex flex-col justify-center transition-all py-4 duration-1000 transform ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                    {/* Title with animated underline */}
                    <div className=" text-left pb-2">
                        <div className={`inline-block transition-all duration-700 delay-200 ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                            <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight leading-tight">
                                {message.title}
                            </h2>
                        </div>
                    </div>

                    {/* Content with staggered animation */}
                    <div className="space-y-6 text-left">
                        {message.content.map((paragraph, index) => (
                            <p
                                key={index}
                                className={`text-gray-600 text-base md:text-base leading-relaxed transition-all duration-700 delay-${300 + (index * 100)} ${isActive
                                    ? 'translate-x-0 opacity-100'
                                    : 'translate-x-8 opacity-0'
                                    }`}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Signature with fade-in animation */}
                    <div className={` pt-2 border-gray-100 transition-all duration-700 delay-700 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        <p className="text-lg md:text-xl font-black text-gray-900">{message.name}</p>
                        <p className="text-gray-500 font-medium uppercase tracking-widest text-[10px] mt-1">{message.position}</p>

                        {/* Role badge */}
                        <div className={`inline-flex items-center px-4 py-2 rounded-full mt-4 text-[10px] font-bold uppercase tracking-wider ${message.type === 'CEO'
                            ? 'bg-blue-50 text-[#2a9fd8]'
                            : 'bg-indigo-50 text-indigo-600'
                            }`}>
                            <span className={`w-2 h-2 rounded-full mr-2 ${message.type === 'CEO' ? 'bg-[#2a9fd8]' : 'bg-indigo-600'
                                }`}></span>
                            {message.type}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide;
