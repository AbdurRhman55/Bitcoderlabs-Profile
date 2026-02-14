import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden flex flex-col items-center">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <iframe
                    src="https://player.vimeo.com/video/1131796102?autoplay=1&loop=1&muted=1&background=1&quality=1080p"
                    className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-screen min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 border-none"
                    allow="autoplay; fullscreen"
                ></iframe>
                {/* Clean white-glass overlay for professional look */}
                {/* <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div> */}
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center pt-38 pb-20 w-full h-full">
                {/* Hero Headers */}
                <div className="text-center px-4 max-w-5xl">
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight animate-fade-in">
                        More growth, <span className="text-white">less work</span>
                    </h1>
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight tracking-tight mt-[-10px] animate-fade-in delay-100">
                        Get your time back
                    </h2>
                    <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed mb-10 font-medium opacity-90 animate-fade-in delay-200">
                        Time is money, and our automation solutions help you save both. Automate your most repetitive tasks, reduce operational costs, and watch as your team's productivity soars.
                    </p>
                    {/* <button className="px-12 py-5 bg-[#2a9fd8] hover:bg-[#2389ba] text-white font-bold text-xl rounded-xl shadow-[0_15px_40px_rgba(42,159,216,0.3)] transition-all duration-500 hover:scale-110 active:scale-95 group flex items-center gap-3 mx-auto animate-fade-in delay-300">
                        Take Control of Your Time Now
                        <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
