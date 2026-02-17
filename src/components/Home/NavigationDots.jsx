import React from 'react';

const NavigationDots = ({ count, activeIndex, onChange, messages }) => {
    return (
        <div className="flex justify-center mt-8 space-x-6">
            <div className="flex space-x-6">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => onChange(index)}
                        className="group focus:outline-none transition-all duration-300"
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        <div className="relative">
                            {/* Outer circle */}
                            <div className={`w-4 h-4 cursor-pointer rounded-full border-2 transition-all duration-300 flex items-center justify-center ${index === activeIndex
                                ? 'border-[#2a9fd8] scale-125'
                                : 'border-gray-200 hover:border-[#2a9fd8]/50'
                                }`}>
                                {/* Inner dot */}
                                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                    ? 'bg-[#2a9fd8] scale-100'
                                    : 'bg-transparent scale-0'
                                    }`}>
                                    {index === activeIndex && (
                                        <div className="absolute inset-0 rounded-full bg-[#2a9fd8] animate-ping opacity-30"></div>
                                    )}
                                </div>
                            </div>

                            {/* Label on hover */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
                                <span className="text-[10px] font-bold bg-gray-900 text-white px-3 py-1.5 rounded-full whitespace-nowrap uppercase tracking-widest shadow-xl">
                                    {messages[index]?.type} Message
                                </span>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default NavigationDots;
