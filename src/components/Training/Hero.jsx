import { Link } from 'react-router-dom';
import { FiPhone, FiArrowRight } from 'react-icons/fi';

const TrainingHero = () => {
    return (
        <section className="relative w-full bg-white pt-24 pb-16 lg:pt-26 lg:pb-14 overflow-hidden font-sans">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.03]">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #2a9fd8 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

                {/* ── Heading ── */}
                <div className="relative max-w-5xl mx-auto mb-10">
                    <h1 className="text-5xl lg:text-[72px] font-bold leading-[1] text-slate-900 tracking-tighter sm:normal-case">
                        <span className="block animate-ultra-reveal">Master Industry Leading Skills</span>
                        <span className="block animate-ultra-reveal-delayed text-primary relative mt-2">
                            To Accelerate Your Career
                        </span>
                    </h1>
                </div>

                {/* ── Description ── */}
                <p className="text-slate-500 text-lg lg:text-xl leading-relaxed mb-10 max-w-3xl mx-auto font-medium animate-ultra-reveal-description">
                    Unlock your potential with hands on bootcamps, expert-led technical training, and <br className="hidden lg:block" /> global certifications designed for future ready professionals.
                </p>

                {/* ── CTA Buttons ── */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-14 animate-ultra-reveal-buttons">
                    <Link to="/contact" className="group relative flex items-center justify-center gap-3 px-12 py-5 rounded-2xl bg-slate-900 text-white font-black text-lg shadow-2xl hover:bg-primary transition-all duration-300 hover:scale-[1.02] active:scale-95 overflow-hidden cursor-pointer">
                        <FiPhone size={20} />
                        Join a Bootcamp
                    </Link>
                    <a href="#curriculum" className="flex items-center justify-center gap-3 px-12 py-5 rounded-2xl bg-white border-2 border-slate-100 text-slate-900 font-black text-lg hover:border-primary hover:text-primary transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer">
                        Explore Courses
                        <FiArrowRight size={20} />
                    </a>
                </div>

                {/* ── Trust Banner ── */}
                <div className="pt-10 border-t border-slate-100 animate-ultra-reveal-trust">
                    <p className="text-slate-400 text-xs font-black uppercase tracking-[0.3em] mb-12">
                        Trusted by over <span className="text-primary">100+ businesses</span> worldwide
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-14 opacity-25 grayscale contrast-125">
                        {['NAVTTC', 'KP-TEVTA', 'PSEB', 'PASHA', 'PITB', 'DIGISKILLS'].map((logo, i) => (
                            <span key={i} className="text-xl lg:text-3xl font-black tracking-tighter text-slate-900 hover:text-primary hover:opacity-100 transition-all cursor-default">{logo}</span>
                        ))}
                    </div>
                </div>

            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                /* Smooth, premium entrance animations */
                @keyframes premiumReveal {
                    0% {
                        opacity: 0;
                        transform: translateY(24px) scale(0.98);
                        filter: blur(8px);
                    }
                    60% {
                        filter: blur(2px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                        filter: blur(0);
                    }
                }

                /* All elements start invisible (opacity: 0) */
                .animate-ultra-reveal,
                .animate-ultra-reveal-delayed,
                .animate-ultra-reveal-description,
                .animate-ultra-reveal-buttons,
                .animate-ultra-reveal-trust {
                    opacity: 0;
                    animation: premiumReveal 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                }

                .animate-ultra-reveal {
                    animation-delay: 0.05s;
                }

                .animate-ultra-reveal-delayed {
                    animation-delay: 0.15s;
                }

                .animate-ultra-reveal-description {
                    animation-delay: 0.25s;
                }

                .animate-ultra-reveal-buttons {
                    animation-delay: 0.4s;
                }

                .animate-ultra-reveal-trust {
                    animation-delay: 0.6s;
                }

                /* Ensure smooth transitions for interactive elements */
                button, a, span {
                    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
                `
            }} />
        </section>
    );
};

export default TrainingHero;