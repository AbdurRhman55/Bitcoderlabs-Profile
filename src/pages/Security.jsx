import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Security = () => {
    const [isMobileTOCOpen, setIsMobileTOCOpen] = useState(false);
    const [showMobileButton, setShowMobileButton] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < 100) {
                setShowMobileButton(true);
            } else if (currentScrollY > lastScrollY.current) {
                setShowMobileButton(false);
            } else {
                setShowMobileButton(true);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sections = [
        {
            id: 'philosophy',
            title: '1. OUR SECURITY PHILOSOPHY',
            content: 'At Bitcoderlabs, security is at the core of our development process. We believe in proactive measures to ensure the integrity and confidentiality of our clients\' data.'
        },
        {
            id: 'infrastructure',
            title: '2. INFRASTRUCTURE SECURITY',
            content: 'Our infrastructure is built on world-class cloud providers (AWS/Google Cloud) with multi-factor authentication, advanced firewalls, and 24/7 monitoring.'
        },
        {
            id: 'encryption',
            title: '3. DATA ENCRYPTION',
            content: 'All data, whether in transit or at rest, is encrypted using industry-standard protocols (SSL/TLS for transit and AES-256 for storage).'
        },
        {
            id: 'development',
            title: '4. SECURE DEVELOPMENT',
            content: 'We follow OWASP guidelines and perform regular code reviews and vulnerability assessments to identify and mitigate potential security risks.'
        },
        {
            id: 'incident',
            title: '5. INCIDENT RESPONSE',
            content: 'We have a dedicated incident response team that is trained to handle and resolve security events quickly and efficiently.'
        }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -120;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setIsMobileTOCOpen(false);
        }
    };

    return (
        <main className="bg-white min-h-screen pt-32 pb-24 font-sans text-gray-800">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative">
                
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-7xl font-black tracking-tight text-gray-900 mb-4 uppercase">
                        Security Overview
                    </h1>
                    <p className="text-gray-500 font-bold text-[10px] md:text-sm tracking-widest uppercase mb-12">
                        Last Updated April 15, 2026
                    </p>
                    <div className="bg-[#cc2121] text-white p-6 md:p-10 rounded-xl mb-12 md:mb-20 shadow-lg max-w-4xl mx-auto">
                        <p className="text-base md:text-xl font-medium leading-relaxed text-center">
                            This overview details our methodology for infrastructure integrity and data confidentiality.
                        </p>
                    </div>
                </header>

                {/* Smart Mobile TOC Toggle Button */}
                <motion.div 
                    initial={{ y: 0 }}
                    animate={{ y: showMobileButton ? 0 : -100, opacity: showMobileButton ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="lg:hidden mb-12 flex justify-center sticky top-24 z-30"
                >
                    <button 
                        onClick={() => setIsMobileTOCOpen(true)}
                        className="bg-gray-900 text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest shadow-2xl flex items-center gap-3 border border-gray-700 hover:bg-[#cc2121] transition-all active:scale-95"
                    >
                        <span>Table of Contents</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-16 items-start relative">
                    
                    <div className="flex-1 w-full overflow-hidden">
                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 font-sans">Security Framework</h2>
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 font-medium">
                                    Bitcoderlabs prioritizes the security of your data above all else. We employ state-of-the-art technical defenses and protocols to protect our systems.
                                </p>
                            </section>

                            <div className="space-y-16 mt-20">
                                {sections.map((section) => (
                                    <section id={section.id} key={section.id} className="scroll-mt-32">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">
                                            {section.title}
                                        </h3>
                                        <div className="text-base md:text-lg text-gray-600 leading-relaxed font-medium space-y-4">
                                            {section.content}
                                        </div>
                                    </section>
                                ))}
                            </div>
                        </div>
                    </div>

                    <aside className="hidden lg:block lg:w-[350px] shrink-0 lg:sticky lg:top-32 self-start">
                        <div className="border-l-2 border-gray-100 pl-8 pb-10 font-sans">
                            <h4 className="text-lg font-black text-gray-900 mb-8 tracking-widest uppercase">
                                Table of Contents
                            </h4>
                            <nav className="space-y-5">
                                {sections.map((section, index) => (
                                    <button 
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className="block text-left group w-full"
                                    >
                                        <span className="text-[14px] leading-tight font-bold text-gray-400 group-hover:text-[#cc2121] transition-colors flex gap-2">
                                            <span className="shrink-0">{index + 1}.</span>
                                            <span className="uppercase tracking-tight underline decoration-transparent hover:decoration-[#cc2121] group-hover:text-gray-900 transition-all">
                                                {section.title.replace(`${index + 1}. `, '')}
                                            </span>
                                        </span>
                                    </button>
                                ))}
                            </nav>
                            
                            <button 
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="mt-12 flex items-center gap-3 text-gray-400 hover:text-gray-900 transition-colors group pt-8 border-t border-gray-100 w-full"
                            >
                                <span className="font-bold text-sm uppercase tracking-widest">Back to the top</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transform group-hover:-translate-y-1 transition-transform">
                                    <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </aside>
                </div>
            </div>

            <AnimatePresence>
                {isMobileTOCOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileTOCOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99]"
                        />
                        <motion.div 
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white z-[100] shadow-2xl p-8 overflow-y-auto"
                        >
                            <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-6">
                                <h4 className="text-xl font-black text-gray-900 tracking-widest uppercase">
                                    Contents
                                </h4>
                                <button 
                                    onClick={() => setIsMobileTOCOpen(false)}
                                    className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>

                            <nav className="space-y-6">
                                {sections.map((section, index) => (
                                    <button 
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className="block text-left w-full group"
                                    >
                                        <span className="flex items-start gap-4">
                                            <span className="text-lg font-black text-[#cc2121]/20 group-hover:text-[#cc2121] transition-colors">{index + 1}</span>
                                            <span className="text-xs font-black text-gray-900 uppercase tracking-tight group-hover:text-[#cc2121] transition-colors leading-tight">
                                                {section.title.replace(`${index + 1}. `, '')}
                                            </span>
                                        </span>
                                    </button>
                                ))}
                            </nav>

                            <button 
                                onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMobileTOCOpen(false); }}
                                className="mt-20 w-full py-4 bg-gray-900 text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg hover:bg-[#cc2121] transition-all"
                            >
                                Back to Top
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </main>
    );
};

export default Security;
