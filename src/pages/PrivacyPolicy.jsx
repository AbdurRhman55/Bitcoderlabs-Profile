import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PrivacyPolicy = () => {
    const [isMobileTOCOpen, setIsMobileTOCOpen] = useState(false);
    const [showMobileButton, setShowMobileButton] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Show if scrolling up, hide if scrolling down
            // But always show if near the top
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
            id: 'collect',
            title: '1. WHAT INFORMATION DO WE COLLECT?',
            content: 'We collect information you provide directly to us when you request an inquiry, sign up for our newsletter, or apply for a position. This may include your name, email address, phone number, and any other information you choose to provide.'
        },
        {
            id: 'process',
            title: '2. HOW DO WE PROCESS YOUR INFORMATION?',
            content: 'We use the information we collect to provide, maintain, and improve our services, to communicate with you about projects or opportunities, and to monitor and analyze trends and usage.'
        },
        {
            id: 'share',
            title: '3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?',
            content: 'Bitcoderlabs does not sell your personal data. We only share information with third-party vendors who perform services for us, or when required by law to protect our rights or the safety of others.'
        },
        {
            id: 'cookies',
            title: '4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?',
            content: 'We may use cookies and similar technologies to collect information about your interactions with our website to improve your user experience and for analytical purposes.'
        },
        {
            id: 'keep',
            title: '5. HOW LONG DO WE KEEP YOUR INFORMATION?',
            content: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.'
        },
        {
            id: 'safe',
            title: '6. HOW DO WE KEEP YOUR INFORMATION SAFE?',
            content: 'We use reasonable physical, technical, and administrative measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.'
        },
        {
            id: 'minors',
            title: '7. DO WE COLLECT INFORMATION FROM MINORS?',
            content: 'We do not knowingly collect data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18.'
        },
        {
            id: 'rights',
            title: '8. WHAT ARE YOUR PRIVACY RIGHTS?',
            content: 'Depending on your location, you may have the right to access, correct, or delete your personal data. You can exercise these rights by contacting us at privacy@bitcoderlabs.com.'
        },
        {
            id: 'dnt',
            title: '9. CONTROLS FOR DO-NOT-TRACK FEATURES',
            content: 'Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature. We currently do not respond to DNT signals as a standard uniform technology has not been adopted.'
        },
        {
            id: 'us-residents',
            title: '10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?',
            content: 'If you are a resident of California or other US states with specific privacy laws, you may have additional rights regarding your personal information.'
        },
        {
            id: 'updates',
            title: '11. DO WE MAKE UPDATES TO THIS NOTICE?',
            content: 'We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Revised" date and will be effective as soon as it is accessible.'
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
                        Privacy Policy
                    </h1>
                    <p className="text-gray-500 font-bold text-[10px] md:text-sm tracking-widest uppercase mb-12">
                        Last Updated April 15, 2026
                    </p>
                    <div className="bg-[#cc2121] text-white p-6 md:p-10 rounded-xl mb-12 md:mb-20 shadow-lg max-w-4xl mx-auto">
                        <p className="text-base md:text-xl font-medium leading-relaxed">
                            This Privacy Policy will help you better understand how we collect, use, and share your personal information.
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
                                <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 font-sans">Privacy Policy</h2>
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 font-medium">
                                    This privacy notice sets out how <strong>Bitcoderlabs Inc.</strong> ("we", "us", "our"), collects, uses, and discloses any personal information that you give us or that we collect when you use our website or services.
                                </p>
                                <ul className="space-y-4 list-disc pl-6 text-gray-600 font-medium text-base md:text-lg">
                                    <li>Visit our website at <a href="https://bitcoderlabs.com" className="text-[#cc2121] hover:underline font-bold">https://bitcoderlabs.com</a></li>
                                    <li>Engage with us in other related ways, including any sales, marketing, or events.</li>
                                </ul>
                                <p className="mt-8 text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                                    Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:privacy@bitcoderlabs.com" className="text-[#cc2121] hover:underline font-bold">privacy@bitcoderlabs.com</a>.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 uppercase tracking-tight">Summary of key points</h2>
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium mb-4">
                                    This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our <button onClick={() => scrollToSection('collect')} className="text-[#cc2121] underline hover:no-underline font-bold">table of contents</button> below to find the section you are looking for.
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

export default PrivacyPolicy;
