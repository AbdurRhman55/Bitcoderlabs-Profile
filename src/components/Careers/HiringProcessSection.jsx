import React from 'react';
import { motion } from 'framer-motion';

const HiringProcessSection = () => {
    const steps = [
        { id: 1, title: "Defining the Need", color: "#2a9fd8" }, // Deep Navy Blue
        { id: 2, title: "Job Posting", color: "#2e9ad1ff" },
        { id: 3, title: "Application Screening", color: "#2e87b3ff" },
        { id: 4, title: "Initial Interviews", color: "#2e74a0ff" },
        { id: 5, title: "Assessment", color: "#2e618cff" },
        { id: 6, title: "Second Interviews", color: "#2e4e78ff" },
        { id: 7, title: "Background Check", color: "#2e3b64ff" },
        { id: 8, title: "Job Offer", color: "#2e2850ff" },
        { id: 9, title: "Onboarding", color: "#2e153cff" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25, // Slower stagger for more impact
                delayChildren: 0.4
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 1.2, // Much slower and smoother
                ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for buttery smooth motion
            }
        }
    };


    return (
        <section className="py-2 bg-white font-sans overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight uppercase">
                        Hiring <span className="text-[#2563EB]">Process</span>
                    </h2>
                </motion.div>

                <motion.div
                    className="flex flex-col items-center max-w-2xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {steps.map((step, index) => {
                        const width = 100 - (index * 60 / (steps.length - 1));
                        const useWhiteText = true;

                        return (
                            <motion.div
                                key={step.id}
                                variants={itemVariants}
                                className="w-full relative flex flex-col items-center mb-1 last:mb-0"
                                style={{ width: `${width}%`, zIndex: steps.length - index }}
                            >
                                <div
                                    className="w-full h-12 md:h-12 flex items-center justify-center transition-all duration-300 hover:scale-[1.02] shadow-sm cursor-default"
                                    style={{
                                        backgroundColor: step.color,
                                        clipPath: `polygon(0 0, 100% 0, 95% 100%, 5% 100%)`
                                    }}
                                >
                                    <span
                                        className="font-black text-xs md:text-lg tracking-wider uppercase px-4 text-center"
                                        style={{ color: 'white' }}
                                    >
                                        {step.title}
                                    </span>
                                </div>

                                {/* Subtle arrow indicator */}
                                {index < steps.length - 1 && (
                                    <div className="h-1 flex justify-center">
                                        <div className="w-4 h-4 bg-transparent border-t-4 border-l-4 border-transparent border-b-white rotate-45 -translate-y-1/2"></div>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}

                </motion.div>
            </div>
        </section>
    );
};

export default HiringProcessSection;