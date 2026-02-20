import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-white/5 pt-20 pb-10 overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-5">
                        <Link to="/" className="inline-block">
                            <span className="text-3xl font-black text-white tracking-tighter">
                                BITCODER<span className="text-primary">LABS</span>
                            </span>
                        </Link>
                        <p className="mt-6 text-gray-400 max-w-sm leading-relaxed text-lg font-medium">
                            Architecting the next generation of digital experiences. We combine deep technical expertise with visionary design to build solutions that scale.
                        </p>
                        <div className="mt-10 flex gap-4">
                            {[
                                { icon: FaFacebookF, link: "https://www.facebook.com/BitCoderLabs" },
                                { icon: FaTwitter, link: "https://twitter.com/BitCoderLabs" },
                                { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/bitcoderlabs/posts/?feedView=all" },
                                { icon: FaInstagram, link: "https://www.instagram.com/bitcoderlabs/" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.link}
                                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Platform</h3>
                        <ul className="space-y-4">
                            {['About Us', 'Our Services', 'Expertise', 'Case Studies', 'Careers'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-primary font-medium transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Legal</h3>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-primary font-medium transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Get In Touch</h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <FiMail size={18} />
                                </div>
                                <a href="mailto:hello@bitcoderlabs.com" className="text-gray-400 hover:text-white font-medium transition-colors">
                                    bitcodelabs@gmail.com
                                </a>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <FiPhone size={18} />
                                </div>
                                <span className="text-gray-400 font-medium">
                                    +92 (300) 123 4567
                                </span>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <FiMapPin size={18} />
                                </div>
                                <span className="text-gray-400 font-medium">
                                    Chamkani IT Park Peshawar, Pakistan
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-gray-500 font-medium text-sm">
                        &copy; 2026 Bitcoderlabs.
                    </p>
                    <div className="flex items-center gap-8 text-gray-500 font-bold text-[10px] uppercase tracking-widest">
                        <span className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            System Operational
                        </span>
                        <span>V.2.0.4</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
