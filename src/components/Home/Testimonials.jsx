import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar, FiCheckCircle, FiGlobe, FiBriefcase, FiCalendar } from 'react-icons/fi';

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const testimonials = [
        {
            id: 1,
            clientName: "nickf68",
            country: "France",
            countryFlag: "/france.png",
            rating: 5,
            date: "2 days ago",
            content: "Excellent experience with Bitcoderlabs Pvt Ltd. Communication was clear, polite, and very professional throughout. Aizaz took the time to properly understand the product and requirements before making changes, which really showed in the quality of the work. Delivery was fast, feedback was handled attentively, and they also contributed thoughtful ideas rather than just executing blindly. English fluency is excellent, making collaboration easy and efficient. I'd happily recommend Bitcoderlabs and would absolutely work with them again.",
            company: "Bitcoderlabs Pvt Ltd",
            serviceType: "Software Development",
            platform: "Upwork"
        },
        {
            id: 2,
            clientName: "calib_stone",
            country: "United States",
            countryFlag: "/united-states.png",
            rating: 5,
            date: "2 weeks ago",
            content: "Excellent work! Bitcoderlabs Pvt Ltd was very professional, responsive, and understood my requirements perfectly. The delivery was on time and the quality was top notch. I'm very satisfied and will definitely work with Bitcoderlabs Pvt Ltd again.",
            company: "Bitcoderlabs Pvt Ltd",
            serviceType: "Web Development",
            platform: "Fiverr"
        },
        {
            id: 3,
            clientName: "nickf68",
            country: "France",
            countryFlag: "/france.png",
            rating: 5,
            date: "3 weeks ago",
            content: "Enjoyed working with Bitcoderlabs Pvt Ltd. Good communicator. Understood the problems to be resolved, checked in regularly and sorted them quickly. Delivered project ahead of time. I will work with Bitcoderlabs Pvt Ltd again in the future I'm sure. Highly recommended.",
            serviceType: "Custom Websites",
            company: "Bitcoderlabs Pvt Ltd",
            platform: "Upwork"
        }
    ];

    useEffect(() => {
        if (testimonials.length <= 1) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-10 md:py-16 overflow-hidden relative">


            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-6 md:mb-8">
                    <h2 className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-2">Client Testimonials</h2>
                    <h3 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tighter uppercase leading-none">
                        GLOBAL <span className="text-primary italic">RECOGNITION</span>
                    </h3>
                </div>

                <div className="relative max-w-3xl mx-auto">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] items-stretch"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {testimonials.map((item) => (
                                <div key={item.id} className="w-full flex-shrink-0 px-2 md:px-4">
                                    <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-gray-100 relative transition-all duration-500 h-full min-h-[350px] md:min-h-[400px] flex flex-col">

                                        <div>
                                            {/* Top Data bar */}
                                            <div className="flex flex-wrap justify-between items-center gap-2 mb-4 pb-4 border-b border-gray-50 text-[9px] md:text-sm">
                                                <div className="flex items-center gap-1.5">
                                                    <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-full border border-gray-100">
                                                        <img src={item.countryFlag} alt={item.country} className="w-5 h-3 object-cover rounded-sm shadow-sm" />
                                                        <span className="font-bold text-gray-700 uppercase tracking-tighter">{item.country}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-full border border-green-100">
                                                        <FiCheckCircle size={10} />
                                                        <span className="font-black text-[8px] md:text-[9px] uppercase tracking-widest">Verified</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-1 text-gray-400 font-bold uppercase text-[8px] md:text-[9px] tracking-widest">
                                                    <FiCalendar />
                                                    {item.date}
                                                </div>
                                            </div>

                                            {/* Rating Display */}
                                            <div className="flex items-center gap-1.5 mb-4">
                                                <div className="flex gap-0.5">
                                                    {[...Array(item.rating)].map((_, i) => (
                                                        <FiStar key={i} className="text-yellow-400 fill-yellow-400 w-4 h-4 md:w-5 md:h-5" />
                                                    ))}
                                                </div>
                                                <span className="text-gray-900 font-black text-xs md:text-sm">5.0</span>
                                            </div>
                                        </div>

                                        {/* Testimonial Content - Expands to fill space */}
                                        <div className="flex-1">
                                            <p className="text-sm md:text-lg text-gray-800 leading-relaxed italic mb-4 relative z-10">
                                                <span className="text-2xl md:text-3xl font-black text-primary/10 absolute -top-4 md:-top-6 -left-2 md:-left-4 select-none opacity-40">“</span>
                                                {item.content}
                                            </p>
                                        </div>

                                        {/* Footer Data - Pushed to bottom */}
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-4 md:pt-6 border-t border-gray-50 mt-auto">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary text-white flex items-center justify-center text-sm md:text-base font-semibold shadow-lg uppercase">
                                                    {item.clientName[0]}
                                                </div>
                                                <div>
                                                    <h4 className="text-sm md:text-base font-bold uppercase mb-0.5">
                                                        @{item.clientName}
                                                    </h4>
                                                    <div className="flex items-center gap-1 text-primary font-bold text-[8px] md:text-[10px] uppercase ">
                                                        <FiBriefcase size={10} />
                                                        {item.company}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/10 self-start md:self-auto">
                                                <p className="text-[9px] md:text-[11px] font-black text-primary uppercase tracking-tighter">{item.serviceType}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full bg-white border border-gray-100 shadow-xl flex items-center justify-center text-gray-400 hover:text-primary transition-all active:scale-90 md:flex hidden z-20 group"
                    >
                        <FiChevronLeft size={24} />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full bg-white border border-gray-100 shadow-xl flex items-center justify-center text-gray-400 hover:text-primary transition-all active:scale-90 md:flex hidden z-20 group"
                    >
                        <FiChevronRight size={24} />
                    </button>

                    {/* Progress Dots */}
                    <div className="flex justify-center gap-3 mt-10">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${current === i ? 'w-10 bg-primary' : 'w-3 bg-gray-200'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
