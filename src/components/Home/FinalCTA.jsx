import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Button from '../common/Button';

const FinalCTA = () => {
    return (
        <section className="py-10 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                <div className="relative rounded-[2rem] bg-gray-900 overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.3)] border border-white/5">
                    {/* Background Visuals */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-[100px] opacity-20"></div>
                        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#1a5f82] rounded-full blur-[80px] opacity-20"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8 md:p-12 flex flex-col items-center text-center">


                        <h2 className="text-2xl md:text-4xl font-black text-white max-w-2xl tracking-tight leading-tight mb-4">
                            Ready to Transform Your <span className="text-primary italic">Digital Future</span>?
                        </h2>

                        <p className="text-gray-400 text-sm md:text-base max-w-xl mb-8 font-medium leading-relaxed">
                            Let's start building your enterprise solution today with the team that delivers excellence and innovation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <Button
                                to="/contact"
                                variant="primary"
                                icon={FiArrowRight}
                            >
                                Start Your Project
                            </Button>
                            <Button
                                href="https://calendly.com/aizazalishah31/"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="secondary"
                            >
                                Consultation
                            </Button>
                        </div>

                        <p className="mt-8 text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em]">
                            Join 100+ Businesses Already Scaling with Us
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
