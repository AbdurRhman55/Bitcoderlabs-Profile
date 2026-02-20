import React from 'react';
import { FiArrowUpRight, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi';

const Mentors = () => {
    const mentors = [
        {
            id: 1,
            name: "Mian Dawood Ali Shah",
            role: "API Specialist",
            label: "BACKEND ARCHITECT",
            image: "/mian Dawood Ali Shah.webp",
            bio: "Specializing in high-performance API architectures and scalable backend systems."
        },
        {
            id: 2,
            name: "Mian Aizaz Ali Shah",
            role: "Front End Developer",
            label: "UI/UX ENGINEER",
            image: "/mian aizaz ali shah.webp",
            bio: "Crafting immersive user experiences with cutting-edge frontend technologies."
        },
        {
            id: 3,
            name: "Mahnoor Azeem",
            role: "Digital Marketing",
            label: "GROWTH STRATEGIST",
            image: "/Mahnoor Azeem.jpg",
            bio: "Driving brand growth through data-driven digital marketing strategies."
        }
    ];

    return (
        <section className="bg-[#0a0a0b] py-16 lg:py-28 overflow-hidden font-sans">
            <div className="max-w-[1500px] mx-auto px-6 lg:px-16 relative">

                {/* ── Signature Premium Header ── */}
                <div className="relative mb-16 lg:mb-24">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                        <div className="max-w-2xl">
                            <span className="text-[9px] font-black tracking-[0.5em] text-primary uppercase block mb-6">
                                THE ELITE COHORT
                            </span>
                            <h2 className="text-4xl lg:text-[72px] font-black text-white leading-[0.9] tracking-tighter mb-8">
                                Masters of <br />
                                <span className="text-white/20">The Craft.</span>
                            </h2>
                            <p className="text-lg lg:text-xl text-white/40 leading-relaxed font-light max-w-xl">
                                Direct access to the minds shaping the future of global industry.
                            </p>
                        </div>
                        {/* Status Indicator */}
                        <div className="flex items-center gap-6 pb-4 border-b border-white/10">
                            <div className="flex -space-x-3">
                                {mentors.map(m => (
                                    <div key={m.id} className="w-10 h-10 rounded-full border-2 border-[#0a0a0b] overflow-hidden grayscale">
                                        <img src={m.image} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="text-white">
                                <span className="block text-[8px] font-black tracking-widest opacity-40">AVAILABILITY</span>
                                <span className="text-xs font-bold tracking-tighter uppercase italic text-primary">Limited Enrollment</span>
                            </div>
                        </div>
                    </div>
                    {/* Vertical Background Line */}
                    <div className="absolute -left-10 top-0 w-px h-[200%] bg-gradient-to-b from-primary/50 to-transparent hidden lg:block" />
                </div>

                {/* ── High-Luxury Content Grid ── */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-10 lg:px-20 px-6">
                    {mentors.map((mentor) => (
                        <div key={mentor.id} className="group relative ">

                            {/* Vertical Floating Label */}
                            <div className="absolute -left-6 top-0 h-full overflow-hidden pointer-events-none hidden lg:block">
                                <span className="text-[80px] font-black text-white/[0.03] origin-top-left -rotate-90 block whitespace-nowrap tracking-tighter translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-in-out">
                                    {mentor.label}
                                </span>
                            </div>

                            {/* Main Visual Frame */}
                            <div className="relative aspect-[3.2/3.5] overflow-hidden transition-all duration-700 bg-[#161618]">
                                <img
                                    src={mentor.image}
                                    alt={mentor.name}
                                    className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 ease-expo"
                                />

                                {/* Glassmorphism Interface Elements */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className="flex justify-end gap-3">
                                        <div className="w-10 h-10 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer">
                                            <FiLinkedin size={18} />
                                        </div>
                                    </div>

                                    <div className="backdrop-blur-xl bg-black/40 border border-white/10 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                        <p className="text-sm text-white/70 italic leading-relaxed">
                                            "{mentor.bio}"
                                        </p>
                                    </div>
                                </div>

                                {/* Floating Detail Link */}
                                <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-primary flex items-center justify-center text-white translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700 ease-expo cursor-pointer">
                                    <FiArrowUpRight size={32} />
                                </div>
                            </div>

                            {/* Essential Typography */}
                            <div className="mt-8">
                                <h3 className="text-2xl font-black text-white tracking-tighter mb-1">
                                    {mentor.name}
                                </h3>
                                <div className="flex items-center gap-3">
                                    <span className="w-6 h-px bg-primary" />
                                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">
                                        {mentor.role}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── High-Luxury Background Accents ── */}
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] pointer-events-none" />
                <div className="absolute bottom-[-5%] left-[-10%] w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none" />
            </div>
        </section>
    );
};

export default Mentors;