import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const MapSection = () => {
    return (
        <section className="py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-[1100px]">
                <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden relative">

                    {/* ── Content Grid ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-3">

                        {/* ── Contact Info Panel (Overlay on Mobile, Side on Desktop) ── */}
                        <div className="p-8 lg:p-10 bg-slate-900 text-white flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 tracking-tight">Visit our Office</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-10">
                                    Our headquarters is located at Chamkani IT Park, the premier technology and innovation hub of Peshawar.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#2a9fd8] shrink-0 border border-white/10">
                                            <FiMapPin size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">Our Address</h4>
                                            <p className="text-slate-400 text-xs leading-relaxed">
                                                IT Park Peshawar, Chamkani,<br /> Peshawar, KP 25000, Pakistan
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#2a9fd8] shrink-0 border border-white/10">
                                            <FiMail size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">Email Support</h4>
                                            <p className="text-slate-400 text-xs text-nowrap">bitcodelabs@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#2a9fd8] shrink-0 border border-white/10">
                                            <FiPhone size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">Phone Line</h4>
                                            <p className="text-slate-400 text-xs">+92 (300) 123 4567</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="mt-12 pt-8 border-t border-white/10">
                                <div className="flex items-center gap-3 text-slate-400">
                                    <FiClock className="text-[#2a9fd8]" />
                                    <span className="text-xs font-semibold tracking-wide uppercase">Mon - Sat: 9AM - 6PM</span>
                                </div>
                            </div>
                        </div>

                        {/* ── Interactive Map Panel ── */}
                        <div className="lg:col-span-2 relative h-[400px] lg:h-auto min-h-[450px]">
                            {/* Embedded Google Map (Chamkani IT Park Peshawar) */}
                            <iframe
                                title="BitCoderLabs Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.747127114757!2d71.6565158!3d33.9982468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d911b339478443%3A0xc6cb5be39dc82f67!2sKhyber%20Pakhtunkhwa%20Information%20Technology%20Board!5e0!3m2!1sen!2s!4v1708420000000!5m2!1sen!2s"
                                className="absolute inset-0 w-full h-full border-0 grayscale-[0.2] contrast-[1.1]"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                            {/* Custom Map Pointer/Pin Label */}
                            <div className="absolute top-10 right-10 z-20 hidden md:block group">
                                <div className="bg-white px-4 py-2 rounded-full shadow-2xl border border-slate-100 flex items-center gap-3 animate-bounce">
                                    <div className="w-3 h-3 rounded-full bg-[#2a9fd8] animate-pulse" />
                                    <span className="font-bold text-xs text-slate-800 tracking-tight">Main Headquarters</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
