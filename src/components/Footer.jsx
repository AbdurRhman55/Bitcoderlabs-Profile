import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Button from './common/Button';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-white/5 pt-15 pb-5 overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-10">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <Link to="/" className="flex items-center gap-3 group">
                            <img
                                src="/favicon.svg"
                                alt="Bitcoderlabs Logo"
                                className="h-12 w-auto brightness-110 group-hover:scale-110 transition-transform duration-300"
                            />
                            <span className="text-2xl font-black text-white tracking-tighter">
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
                                <Button
                                    key={i}
                                    href={social.link}
                                    variant="secondary"
                                    rounded="rounded-xl"
                                    className="w-12 h-12 p-0 hover:-translate-y-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <social.icon size={20} />
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Platform</h3>
                        <ul className="space-y-2">
                            {[
                                { label: 'Home', path: '/' },
                                { label: 'About Us', path: '/about' },
                                { label: 'Services', path: '/services' },
                                { label: 'Products', path: '/products' },
                                { label: 'Training', path: '/training' },
                                { label: 'Contact Us', path: '/contact' },
                                { label: 'Careers', path: '/careers' },
                                { label: 'Blogs', path: '/blogs' }
                            ].map((item) => (
                                <li key={item.label} className="group/item">
                                    <Link
                                        to={item.path}
                                        className="text-gray-400 hover:text-primary font-medium transition-all duration-300 flex items-center gap-0 group-hover/item:gap-3"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Legal</h3>
                        <ul className="space-y-2">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().split(' ').join('-')}`} className="text-gray-400 hover:text-primary font-medium transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Get In Touch</h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <FiMail size={18} />
                                </div>
                                <a href="mailto:hello@bitcoderlabs.com" className="text-gray-400 hover:text-white font-medium transition-colors">
                                    bitcoderlabs@gmail.com
                                </a>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <FiPhone size={18} />
                                </div>
                                <span className="text-gray-400 font-medium">
                                    +92 (333) 9277021
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
                    <div className="flex items-center gap-8 text-gray-500 font-bold text-[10px] tracking-widest">
                        <span className="flex items-center gap-2">
                            For Any Query Contact Us:
                            <span className="text-primary ">bitcoderlabs@gmail.com</span>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
