import React from 'react';
import { FiMessageCircle, FiMail, FiPhone, FiArrowRight } from 'react-icons/fi';

const StickyContact = () => {
    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-end">
            {/* Tooltip labels and buttons */}
            <div className="group relative flex items-center">
                {/* Expandable Panel */}
                <div className="flex flex-col gap-2 mb-2 mr-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-x-10 group-hover:translate-x-0">
                    <a
                        href="mailto:contact@bitcoderlabs.com"
                        className="bg-white/90 backdrop-blur-md p-3 rounded-full shadow-2xl border border-gray-100 text-[#2a9fd8] hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 group/link"
                    >
                        <FiMail size={18} />
                        <span className="max-w-0 overflow-hidden group-hover/link:max-w-xs transition-all duration-500 text-xs font-bold whitespace-nowrap">Email Us</span>
                    </a>
                    <a
                        href="tel:+1234567890"
                        className="bg-white/90 backdrop-blur-md p-3 rounded-full shadow-2xl border border-gray-100 text-[#2a9fd8] hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 group/link"
                    >
                        <FiPhone size={18} />
                        <span className="max-w-0 overflow-hidden group-hover/link:max-w-xs transition-all duration-500 text-xs font-bold whitespace-nowrap">Call Us</span>
                    </a>
                </div>

                {/* Main Vertical Tab */}
                <button className="bg-gray-900 text-white py-6 px-3 rounded-l-2xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex flex-col items-center gap-4 transition-all duration-500 hover:bg-primary group-hover:pr-6 cursor-pointer border-l-2 border-primary/30">
                    <FiMessageCircle size={20} className="mb-2" />
                    <span className="[writing-mode:vertical-rl] text-[10px] font-black uppercase tracking-[0.3em] rotate-180">
                        GET IN TOUCH
                    </span>
                    <FiArrowRight size={14} className="mt-2 group-hover:translate-y-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default StickyContact;
