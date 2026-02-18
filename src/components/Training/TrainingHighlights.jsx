import React from 'react';

const TrainingHighlights = () => {
    const benefits = [
        { id: "01", text: "Industry-Led Curriculum", color: "#3498db" },
        { id: "02", text: "Hands-on Bootcamps", color: "#2ecc71" },
        { id: "03", text: "Expert Mentorship", color: "#f39c12" },
        { id: "04", text: "Global Certifications", color: "#e91e63" },
        { id: "05", text: "Project-Based Learning", color: "#1abc9c" },
        { id: "06", text: "Career Support Services", color: "#4a4a4a" },
        { id: "07", text: "Flexible Learning Paths", color: "#e67e22" },
        { id: "08", text: "State-of-the-Art Tools", color: "#34495e" },
        { id: "09", text: "Collaborative Environment", color: "#d35400" },
        { id: "10", text: "Real-World Case Studies", color: "#9b59b6" },
        { id: "11", text: "Lifetime Alumni Access", color: "#27ae60" },
        { id: "12", text: "Industry-Grade Standards", color: "#2c3e50" },
    ];

    // Radial calculation config - Ultra compact scale
    const radius = 220; // Reduced from 260
    const dotRadius = 60; // Reduced from 70
    const anglesLeft = [-105, -135, -165, -195, -225, -255];
    const anglesRight = [-75, -45, -15, 15, 45, 75];

    return (
        <section className="relative bg-white py-10 lg:py-12 overflow-hidden flex flex-col items-center justify-center font-sans">

            {/* ── Section Title ── */}
            <div className="text-center mb-10 relative z-20">
                <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                    Why <span className="text-[#2a9fd8]">Choose Our</span> Training?
                </h2>
            </div>

            <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center min-h-[500px]">

                {/* ── Tablet/Desktop Radial View ── */}
                <div className="hidden md:block relative w-[800px] h-[480px]">

                    {/* Ring of Dots in Center */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full flex items-center justify-center">
                        {benefits.map((benefit, i) => {
                            const angle = i < 6 ? anglesLeft[i] : anglesRight[i - 6];
                            const x = dotRadius * Math.cos((angle * Math.PI) / 180);
                            const y = dotRadius * Math.sin((angle * Math.PI) / 180);
                            return (
                                <div
                                    key={`dot-${benefit.id}`}
                                    className="absolute w-3 h-3 rounded-full border-[1.5px] border-white shadow-sm transition-transform hover:scale-125 duration-300"
                                    style={{
                                        left: `calc(50% + ${x}px)`,
                                        top: `calc(50% + ${y}px)`,
                                        backgroundColor: benefit.color,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                />
                            );
                        })}
                    </div>

                    {/* Connecting Lines and Benefit Cards */}
                    {benefits.map((benefit, i) => {
                        const isLeft = i < 6;
                        const angle = isLeft ? anglesLeft[i] : anglesRight[i - 6];

                        // Line Start (near center dots)
                        const startOffset = dotRadius + 6;
                        const xStart = startOffset * Math.cos((angle * Math.PI) / 180);
                        const yStart = startOffset * Math.sin((angle * Math.PI) / 180);

                        // Card Center position
                        const xEnd = radius * Math.cos((angle * Math.PI) / 180);
                        const yEnd = radius * Math.sin((angle * Math.PI) / 180);

                        return (
                            <React.Fragment key={benefit.id}>
                                {/* Fine Connection Line */}
                                <div
                                    className="absolute h-[0.8px] origin-left pointer-events-none opacity-40 transition-opacity group-hover:opacity-100"
                                    style={{
                                        left: `calc(50% + ${xStart}px)`,
                                        top: `calc(50% + ${yStart}px)`,
                                        width: `${radius - startOffset - 10}px`,
                                        transform: `rotate(${angle}deg)`,
                                        backgroundColor: benefit.color
                                    }}
                                />

                                {/* Capsule Card */}
                                <div
                                    className="absolute flex items-center group transition-all duration-500 hover:z-30"
                                    style={{
                                        left: `calc(50% + ${xEnd}px)`,
                                        top: `calc(50% + ${yEnd}px)`,
                                        transform: `translate(${isLeft ? '-100%' : '0%'}, -50%)`,
                                    }}
                                >
                                    <div
                                        className={`flex items-center bg-white rounded-full border-2 px-3 py-1.5 shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 min-w-[220px] ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                                        style={{ borderColor: benefit.color }}
                                    >
                                        <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'}`}>
                                            <span className="text-[12px] font-bold text-slate-800 leading-tight block">
                                                {benefit.text}
                                            </span>
                                        </div>
                                        <div className={`text-lg font-black px-3 border-slate-100 ${isLeft ? 'border-l ml-2.5' : 'border-r mr-2.5'}`} style={{ color: benefit.color }}>
                                            {benefit.id}
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>

                {/* ── Mobile Simple List ── */}
                <div className="md:hidden w-full space-y-4 px-4 z-20">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="flex items-center bg-white rounded-2xl border-2 p-5 shadow-sm transition-transform active:scale-95"
                            style={{ borderColor: benefit.color }}
                        >
                            <span className="text-2xl font-black mr-6" style={{ color: benefit.color }}>{benefit.id}</span>
                            <span className="text-sm sm:text-base font-bold text-slate-800 flex-1">{benefit.text}</span>
                        </div>
                    ))}
                </div>

            </div>



            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-50 rounded-full mix-blend-multiply blur-3xl opacity-50 pointer-events-none" />

        </section>
    );
};

export default TrainingHighlights;
