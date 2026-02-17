import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 100) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { id: 'home', label: 'Home', path: '/' },
        { id: 'about', label: 'About us', path: '/about' },
        { id: 'services', label: 'Services', path: '/services' },
        { id: 'products', label: 'Products', path: '/products' },
        { id: 'training', label: 'Training', path: '/training' },
        { id: 'contact', label: 'Contact Us', path: '/contact' }
    ];

    const handleLinkClick = (id) => {
        setActiveLink(id);
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[100] w-full py-4 px-6 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <div className="max-w-7xl mx-auto">

                    {/* ── Desktop Navigation ─────────── */}
                    <div className="hidden lg:block">
                        <div className="relative flex items-center justify-center">
                            <div className="relative flex items-center justify-between px-8 py-3 rounded-2xl border border-gray-200 shadow-xl backdrop-blur-md bg-white/80 min-w-[1100px]">
                                {/* Left Links */}
                                <div className="flex items-center gap-2">
                                    {navLinks.slice(0, 3).map((link) => (
                                        <Link
                                            key={link.id}
                                            to={link.path}
                                            onClick={() => setActiveLink(link.id)}
                                            className={`
                                                px-5 py-2 rounded-xl font-medium text-sm transition-all duration-300
                                                ${activeLink === link.id
                                                    ? 'bg-[#2a9fd8] text-white shadow-md'
                                                    : 'text-[#2a9fd8] hover:bg-gray-100'
                                                }
                                            `}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>

                                {/* Center Logo */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                    <div className="relative px-8 py-4 bg-[#2a9fd8] rounded-xl shadow-[0_8px_16px_rgba(42,159,216,0.3),0_4px_8px_rgba(0,0,0,0.1)] transform -rotate-2">
                                        <h1 className="text-4xl text-white tracking-[0.02em] whitespace-nowrap font-['Impact','Arial_Black',sans-serif] uppercase">
                                            BITCODERLABS
                                        </h1>
                                    </div>
                                </div>

                                {/* Right Links */}
                                <div className="flex items-center gap-2">
                                    {navLinks.slice(3, 6).map((link) => (
                                        <Link
                                            key={link.id}
                                            to={link.path}
                                            onClick={() => setActiveLink(link.id)}
                                            className={`
                                                px-5 py-2 rounded-xl font-medium text-sm transition-all duration-300
                                                ${activeLink === link.id
                                                    ? 'bg-[#2a9fd8] text-white shadow-md'
                                                    : 'text-[#2a9fd8] hover:bg-gray-100'
                                                }
                                            `}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Mobile Top Bar (only hamburger + logo) ── */}
                    <div className="lg:hidden">
                        <div className="flex items-center justify-between">
                            {/* Mobile Logo */}
                            <div className="px-6 py-3 bg-white rounded-xl border border-gray-100 shadow-lg transform -rotate-1">
                                <h1 className="text-2xl  text-[#2a9fd8]  font-['Impact','Arial_Black',sans-serif] uppercase text-nowrap">
                                    BITCODERLABS
                                </h1>
                            </div>

                            {/* Hamburger Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="p-3 bg-[#2a9fd8] text-white rounded-full shadow-lg hover:bg-[#2389ba] transition-colors"
                            >
                                <FiMenu size={24} />
                            </button>
                        </div>
                    </div>

                </div>
            </nav>

            {/* ── Full-Screen Mobile Overlay ───────────────────── */}
            {/* Backdrop */}
            <div
                className={`lg:hidden fixed inset-0 z-[200] transition-all duration-500 bg-black/55 backdrop-blur-[6px] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-in Panel */}
            <div
                className={`lg:hidden fixed inset-0 z-[201] flex flex-col bg-white transition-transform duration-[450ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Top bar inside overlay */}
                <div className="flex items-center justify-between px-8 pt-10 pb-8">
                    {/* Logo inside overlay */}
                    <div>
                        <h1 className="text-[#2a9fd8] text-[28px] font-['Impact','Arial_Black',sans-serif] uppercase tracking-[0.04em]">
                            BITCODERLABS
                        </h1>
                        <p className="text-[#2a9fd8]/80 text-[11px] tracking-[0.12em] mt-[2px] font-semibold uppercase">
                            DIGITAL SOLUTIONS
                        </p>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-center transition-all duration-300   "
                    >
                        <FiX size={42} className='font-thin' />
                    </button>
                </div>

                {/* Thin divider */}
                <div className="h-[1px] bg-[#2a9fd8]/15 mx-8" />

                {/* Nav Links */}
                <nav className="flex flex-col justify-center items-center px-6 pt-8 flex-1 gap-1">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.id}
                            to={link.path}
                            onClick={() => handleLinkClick(link.id)}
                            className={`flex   text-4xl w-full text-center transition-all duration-300 p-1 rounded-[16px]
                                ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-[30px] opacity-0'}
                                ${activeLink === link.id
                                    ? 'font-semibold  text-[#2a9fd8]'
                                    : 'font-normal bg-transparent text-[#1e293b] hover:bg-[#2a9fd8]/5'
                                }`}
                            style={{
                                transitionDelay: isMobileMenuOpen ? `${index * 55}ms` : '0ms',
                            }}
                        >
                            <span>{link.label}</span>


                        </Link>
                    ))}
                </nav>

                {/* Social Icons Section */}
                <div className="px-6 pb-12 pt-6">
                    <div className="h-[1px] bg-[#2a9fd8]/15 mb-8" />
                    <div className="flex items-center justify-center gap-6">
                        {[
                            { Icon: FaFacebookF, href: "https://www.facebook.com/BitCoderLabs", color: "#3b5998" },
                            { Icon: FaTwitter, href: "https://twitter.com/BitCoderLabs", color: "#1da1f2" },
                            { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/bitcoderlabs/posts/?feedView=all", color: "#0077b5" },
                            { Icon: FaInstagram, href: "https://www.instagram.com/bitcoderlabs/", color: "#e4405f" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2a9fd8]/10 text-[#2a9fd8] hover:bg-[#2a9fd8] hover:text-white transition-all duration-300 shadow-sm border border-[#2a9fd8]/20"
                            >
                                <social.Icon size={20} />
                            </a>
                        ))}
                    </div>
                    <p className="text-center text-gray-400 text-[11px] mt-8 tracking-[0.06em] uppercase">
                        © 2026 BITCODERLABS
                    </p>
                </div>

            </div>
        </>
    );
};

export default Navbar;