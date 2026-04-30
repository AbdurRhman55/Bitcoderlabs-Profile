import { Link } from 'react-router-dom';
import Button from '../common/Button';

const HeroSection = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden flex flex-col items-center">
            {/* Local Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/hero-video.mp4.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center pt-32 lg:pt-38 pb-20 w-full h-full">
                {/* Hero Headers */}
                <div className="text-center px-4 max-w-6xl">
                    <h1 className="text-3xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight animate-fade-in">
                        Custom Software Development Company for Scalable Digital Solutions
                    </h1>
                    
                    <p className="text-lg md:text-xl text-white max-w-6xl mx-auto leading-relaxed  font-medium opacity-90 animate-fade-in delay-200">
                        We design and develop high-performance web, mobile, and AI-powered applications tailored to your business needs. Build secure, scalable, and future-ready software with a team that understands both technology and business.
                    </p>
                    <p className="text-lg md:text-xl text-white max-w-6xl mx-auto leading-relaxed mb-10 font-medium opacity-90 animate-fade-in delay-200">
                        From concept to deployment, we deliver reliable digital products that drive growth and efficiency.
                    </p>
                    <Button
                        to="/contact"
                        size="hero"
                        className="mx-auto animate-fade-in delay-300"
                        icon={() => (
                            <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        )}
                    >
                        Take Control of Your Time Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
