import React from 'react';
import { FiAward, FiStar, FiShield, FiHexagon, FiCheckCircle, FiBriefcase, FiGlobe } from 'react-icons/fi';

const Certifications = () => {
    return (
        <section className="py-14 bg-white font-sans overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* ── Header Area ── */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Building strong <span className="text-primary">foundational skills</span>
                    </h2>
                    <p className="text-slate-500 text-lg lg:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                        Online courses certification section design for showcase your <br className="hidden lg:block" />
                        certificate program features.
                    </p>
                </div>

                {/* ── Layout Grid ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* ── Left Side: Company Certificate Preview ── */}
                    <div className="relative group">
                        {/* Shadow & Glow Effect */}
                        <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative bg-white border border-slate-100 rounded-2xl p-4 lg:p-6 shadow-2xl shadow-slate-200 transition-transform duration-700 group-hover:scale-[1.01]">
                            <div className="border-[10px] lg:border-[15px] border-slate-50 relative p-6 lg:p-10 overflow-hidden bg-white min-h-[400px] lg:min-h-[480px] flex flex-col items-center justify-center w-full max-w-2xl mx-auto shadow-inner">

                                <div className="absolute top-0 left-0 w-32 h-32 bg-[#2a9fd8] -translate-x-12 -translate-y-12 rotate-45" />
                                <div className="absolute top-0 left-0 w-24 h-24 bg-blue-400/30 -translate-x-8 -translate-y-8 rotate-45" />

                                <div className="absolute bottom-0 right-0 w-40 h-40 bg-slate-900 translate-x-16 translate-y-16 rotate-45" />
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-slate-700 translate-x-12 translate-y-12 rotate-45" />

                                <div className="relative z-10 text-center flex flex-col items-center justify-center w-full px-2 lg:px-6">
                                    <div className="text-primary font-black text-[8px] lg:text-xs tracking-[0.4em] lg:tracking-[0.5em] mb-1 lg:mb-2 uppercase">BitCoderLabs </div>
                                    <h3 className="text-2xl lg:text-5xl font-black text-slate-900 tracking-tighter mb-4 lg:mb-6 leading-none uppercase">Certificate</h3>

                                    <p className="text-slate-400 text-[8px] lg:text-[10px] font-bold uppercase tracking-[0.2em] lg:tracking-[0.3em] mb-2">This certificate is officially presented to</p>

                                    <div className="text-lg lg:text-3xl font-serif italic text-slate-800 mb-4 lg:mb-6 border-b border-slate-100 lg:border-b-2 lg:border-slate-50 pb-2 lg:pb-3 px-6 lg:px-12 inline-block whitespace-nowrap">Mian Dawood Ali Shah</div>

                                    <p className="text-slate-400 text-[8px] lg:text-[10px] max-w-[240px] lg:max-w-sm mx-auto leading-relaxed mb-6 lg:mb-10 font-medium whitespace-normal">
                                        For the successful completion of the intensive technical training program and demonstrated proficiency in modern software architecture, professional development standards, and industry-grade workflows at <span className="text-slate-600 font-bold">BitCoderLabs Software House</span>.
                                    </p>

                                    <div className="flex items-end justify-between w-full max-w-md mt-2 px-2 lg:px-4">
                                        <div className="flex flex-col items-center scale-75 lg:scale-100 origin-bottom">
                                            <span className="text-[10px] text-slate-500 font-black mb-1 whitespace-nowrap">20 / 02 / 2026</span>
                                            <div className="w-16 h-px bg-slate-200" />
                                            <span className="text-[7px] text-slate-400 font-black mt-1 uppercase tracking-widest whitespace-nowrap">Date Issued</span>
                                        </div>

                                        <div className="w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-slate-900 border-2 lg:border-4 border-slate-100 flex items-center justify-center text-primary shadow-xl relative overflow-hidden group/seal shrink-0 mx-2">
                                            <FiShield size={14} className="lg:hidden" />
                                            <FiShield size={24} className="hidden lg:block" />
                                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/seal:opacity-100 transition-opacity" />
                                        </div>

                                        <div className="flex flex-col items-center scale-75 lg:scale-100 origin-bottom">
                                            <div className="text-slate-800 italic font-serif text-[10px] lg:text-base mb-1 whitespace-nowrap">Board of Directors</div>
                                            <div className="w-16 h-px bg-slate-200" />
                                            <span className="text-[7px] text-slate-400 font-black mt-1 uppercase tracking-widest whitespace-nowrap">Authentication</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Note at Bottom */}
                        <div className="flex items-center gap-2 mt-6 pl-2">
                            <FiCheckCircle className="text-primary" size={16} />
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">BitCoderLabs Verified Official Credential</p>
                        </div>
                    </div>

                    {/* ── Right Side: Company Certificate Details ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 lg:gap-y-16 gap-x-12">

                        {/* Certificate 1: NAVTTC */}
                        <div className="group">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                <FiAward size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">NAVTTC Certification</h4>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                National recognized government-standard technical qualification for vocational excellence in IT.
                            </p>
                        </div>

                        {/* Certificate 2: Company Cert */}
                        <div className="group">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                <FiHexagon size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">BitCoderLabs Company Cert</h4>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                Official verification of professional competency within our elite software house environment.
                            </p>
                        </div>

                        {/* Certificate 3: CERTIPORT */}
                        <div className="group">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                <FiGlobe size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">CERTIPORT Certification</h4>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                Internationally recognized Specialist credentials via our strategic Certiport (Pearson VUE) partnership.
                            </p>
                        </div>

                        {/* Certificate 4: One More */}
                        <div className="group">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                <FiStar size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Advanced Skill Credential</h4>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                Specialized certification focusing on niche technologies and modern cloud-native architectures.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Certifications;
