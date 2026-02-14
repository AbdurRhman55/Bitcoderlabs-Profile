import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 100) { // scrolling down
                    setIsVisible(false);
                } else { // scrolling up
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

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
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] w-full py-4 px-6 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div className="max-w-7xl mx-auto">
                {/* Desktop Navigation */}
                <div className="hidden lg:block">
                    <div className="relative flex items-center justify-center">
                        {/* White/Blue Pill Container */}
                        <div
                            className="relative flex items-center justify-between px-8 py-3 rounded-2xl border border-gray-200 shadow-xl backdrop-blur-md"
                            style={{
                                background: 'rgba(255, 255, 255, 0.8)',
                                minWidth: '1100px'
                            }}
                        >
                            {/* Left Navigation Links */}
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
                                <div
                                    className="relative px-8 py-4 bg-[#2a9fd8] rounded-xl shadow-xl transform -rotate-2"
                                    style={{
                                        boxShadow: '0 8px 16px rgba(42, 159, 216, 0.3), 0 4px 8px rgba(0, 0, 0, 0.1)'
                                    }}
                                >
                                    <h1
                                        className="text-4xl text-white tracking-tight whitespace-nowrap"
                                        style={{
                                            fontFamily: 'Impact, Arial Black, sans-serif',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.02em'
                                        }}
                                    >
                                        BITCODERLABS
                                    </h1>
                                </div>
                            </div>

                            {/* Right Navigation Links */}
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


                {/* Mobile Navigation */}
                <div className="lg:hidden">
                    <div className="flex items-center justify-between">
                        {/* Mobile Logo */}
                        <div
                            className="px-6 py-3 bg-white rounded-xl border border-gray-100 shadow-lg transform -rotate-1"
                        >
                            <h1
                                className="text-2xl font-black text-[#2a9fd8] tracking-tight"
                                style={{
                                    fontFamily: 'Impact, Arial Black, sans-serif',
                                    textTransform: 'uppercase'
                                }}
                            >
                                BITCODERLABS
                            </h1>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-3 bg-[#2a9fd8] text-white rounded-full shadow-lg hover:bg-[#2389ba] transition-colors"
                        >
                            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    {isMobileMenuOpen && (
                        <div className="absolute top-full left-0 right-0 mt-4 mx-6 bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-5 duration-300">
                            <div className="p-4 space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.id}
                                        to={link.path}
                                        onClick={() => handleLinkClick(link.id)}
                                        className={`
                      block px-6 py-3 rounded-xl font-medium text-base transition-all duration-300
                      ${activeLink === link.id
                                                ? 'bg-[#2a9fd8] text-white shadow-md'
                                                : 'text-[#2a9fd8] hover:bg-gray-50'
                                            }
                    `}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};


export default Navbar;