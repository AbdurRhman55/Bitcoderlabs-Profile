import React, { useState, useEffect } from 'react';
import { FiX, FiBriefcase, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const JobPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1500); // Show after 1.5 seconds on every refresh
        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
            {/* Minimalist Backdrop */}
            <div 
                className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm animate-in fade-in duration-500"
                onClick={closePopup}
            ></div>

            {/* Lean Modal Content */}
            <div className="relative w-full max-w-[380px] bg-white rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.12)] overflow-hidden animate-in fade-in zoom-in slide-in-from-bottom-5 duration-500 border border-gray-100 p-8 text-center flex flex-col items-center">
                
                {/* Minimalist Icon Badge */}
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 ring-4 ring-primary/5">
                    <FiBriefcase size={28} />
                </div>

                <h2 className="text-xl font-black text-gray-900 mb-2 tracking-tight group">
                    We're hiring in <br />
                    <span className="text-primary group-hover:tracking-wider transition-all">Multiple Roles!</span>
                </h2>
                
                <p className="text-gray-500 text-xs font-bold leading-relaxed mb-8 max-w-[280px]">
                    New opportunities are now open in our Design, Engineering, and Management teams. Connect with us.
                </p>

                <div className="w-full space-y-3">
                    <Link 
                        to="/careers" 
                        onClick={closePopup}
                        className="w-full py-3.5 bg-gray-900 text-white rounded-xl font-black text-xs flex items-center justify-center gap-2 hover:bg-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                    >
                        <span>Explore Opportunities</span>
                        <FiArrowRight size={14} />
                    </Link>
                    <button 
                        onClick={closePopup}
                        className="w-full py-3 text-gray-400 font-bold text-[11px] uppercase tracking-widest hover:text-gray-900 transition-colors"
                    >
                        Remind me later
                    </button>
                </div>

                {/* Secure Close Button */}
                <button 
                    onClick={closePopup}
                    className="absolute top-4 right-4 p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                >
                    <FiX size={16} />
                </button>
            </div>
        </div>
    );
};

export default JobPopup;
