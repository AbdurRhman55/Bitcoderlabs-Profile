import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiClock, FiMapPin, FiBriefcase, FiX, FiCheckCircle } from 'react-icons/fi';

const Opportunities = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [filter, setFilter] = useState('job');

    const jobs = [
        {
            id: 1,
            category: 'job',
            title: 'Senior Frontend Developer',
            department: 'Engineering',
            location: 'Remote / Peshawar',
            type: 'Full-time',
            salary: 'PKR 150,000 - 250,000',
            description: 'We are looking for an experienced Frontend Developer with deep knowledge of React.js and modern CSS frameworks.',
            requirements: [
                '3+ years of experience with React.js',
                'Strong understanding of TailwindCSS or Styled Components',
                'Experience with State Management (Redux/Zustand)',
                'Ability to write clean, maintainable, and testable code'
            ],
            responsibilities: [
                'Develop new user-facing features using React.js',
                'Build reusable components and front-end libraries',
                'Optimize components for maximum performance',
                'Collaborate with the design team to ensure UI/UX consistency'
            ]
        },
        {
            id: 2,
            category: 'job',
            title: 'UI/UX Designer',
            department: 'Design',
            location: 'Remote',
            type: 'Full-time',
            salary: 'PKR 80,000 - 150,000',
            description: 'Join our creative team to design intuitive and beautiful digital experiences for global clients.',
            requirements: [
                'Proficiency in Figma and Adobe Creative Suite',
                'Strong portfolio demonstrating UI/UX principles',
                'Experience with prototyping and user testing',
                'Excellent communication and collaboration skills'
            ],
            responsibilities: [
                'Create high-fidelity wireframes and interactive prototypes',
                'Conduct user research and usability testing',
                'Maintain and evolve our design system',
                'Work closely with developers to ensure design fidelity'
            ]
        },
        {
            id: 3,
            category: 'job',
            title: 'Backend Engineer',
            department: 'Engineering',
            location: 'Remote / Peshawar',
            type: 'Full-time',
            salary: 'PKR 130,000 - 220,000',
            description: 'Help us scale our infrastructure using Node.js, Express, and PostgreSQL.',
            requirements: [
                'Strong proficiency in Node.js and TypeScript',
                'Experience with PostgreSQL or MongoDB',
                'Understanding of RESTful APIs and Microservices',
                'Knowledge of AWS or Google Cloud is a plus'
            ],
            responsibilities: [
                'Design and implement scalable backend services',
                'Build and maintain robust APIs',
                'Optimize database queries and performance',
                'Ensure security and data protection'
            ]
        },
        {
            id: 4,
            category: 'job',
            title: 'Project Manager',
            department: 'Operations',
            location: 'Peshawar',
            type: 'Full-time',
            salary: 'PKR 70,000 - 120,000',
            description: 'Spearhead our delivery process and ensure projects are delivered on time and within scope.',
            requirements: [
                '2+ years of experience in project management',
                'Familiarity with Agile and Scrum methodologies',
                'Strong organizational and leadership skills',
                'Excellent client-facing communication'
            ],
            responsibilities: [
                'Define project scope and objectives',
                'Coordinate with technical teams and stakeholders',
                'Track project progress and manage risks',
                'Ensure client satisfaction and high-quality deliverables'
            ]
        },
        {
            id: 5,
            category: 'internship',
            title: 'Frontend Intern (PSEB Program)',
            department: 'Engineering',
            location: 'Peshawar',
            type: 'Internship',
            salary: 'Stipend based on PSEB criteria',
            description: 'Kickstart your career with our PSEB-backed internship program. Gain hands-on experience in modern frontend workflows.',
            requirements: [
                'Basic understanding of HTML, CSS, and Javascript',
                'Enrolled in or graduated from a CS/IT program',
                'Willingness to learn and collaborate',
                'Knowledge of React is a big plus'
            ],
            responsibilities: [
                'Assist in building UI components',
                'Write documentation and test components',
                'Shadow senior developers on live projects',
                'Participate in development sprints'
            ]
        },
        {
            id: 6,
            category: 'internship',
            title: 'Backend Intern (KP IT Board Program)',
            department: 'Engineering',
            location: 'Peshawar / Remote',
            type: 'Internship',
            salary: 'Stipend based on KP IT Board criteria',
            description: 'A dedicated internship track in collaboration with KP IT Board focusing on scalable backend systems.',
            requirements: [
                'Foundational knowledge of Javascript/Node.js',
                'Understanding of Database concepts',
                'Strong analytical and problem-solving skills',
                'KP Domicile holder (preferred)'
            ],
            responsibilities: [
                'Help maintain backend APIs',
                'Participate in database schema design',
                'Assist in implementing business logic',
                'Learn about cloud infrastructure deployment'
            ]
        }
    ];

    const openModal = (job) => {
        setSelectedJob(job);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedJob(null);
        document.body.style.overflow = '';
    };

    const filteredJobs = jobs.filter(job => job.category === filter);

    return (
        <section className="py-10 bg-white font-sans">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header Section */}
                <div className="mb-12 flex flex-col items-center text-center">
                    <h2 className="text-[#2a9fd8] font-bold uppercase tracking-[0.2em] text-[10px] mb-3">Careers At Bitcoderlabs</h2>
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight leading-none mb-4">
                        Join our mission to <br />
                        <span className="text-[#2a9fd8]">Empower Innovation</span>
                    </h1>
                    <p className="text-gray-500 max-w-xl text-base font-medium mb-10">
                        We're always looking for talented individuals who are passionate about building the future of technology.
                    </p>

                    {/* Filter Tabs - Premium Minimalist */}
                    <div className="flex bg-gray-50 gap-2 p-1.5 rounded-2xl border border-gray-100 mb-6 sm:mb-0">
                        <button
                            onClick={() => setFilter('job')}
                            className={`px-8 py-3 rounded-xl text-xs cursor-pointer font-bold  uppercase tracking-widest transition-all duration-300 ${filter === 'job'
                                ? 'bg-[#2a9fd8] text-white shadow-lg shadow-[#2a9fd8]/20'
                                : 'text-gray-500 hover:text-gray-600 hover:bg-white'
                                }`}
                        >
                            Job Opportunities
                        </button>
                        <button
                            onClick={() => setFilter('internship')}
                            className={`px-8 py-3 rounded-xl text-xs cursor-pointer font-bold  uppercase tracking-widest transition-all duration-300 ${filter === 'internship'
                                ? 'bg-[#2a9fd8] text-white shadow-lg shadow-[#2a9fd8]/20'
                                : 'text-gray-500 hover:text-gray-600 hover:bg-white'
                                }`}
                        >
                            Internship Opportunities
                        </button>
                    </div>
                </div>

                {/* Job Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredJobs.map((job) => (
                        <div
                            key={job.id}
                            className="group bg-white p-6 rounded-[1.5rem] border-2 border-gray-100 hover:border-[#2a9fd8]/30 hover:shadow-[0_20px_40px_rgba(42,159,216,0.12)] transition-all duration-500"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className="inline-block px-3 py-1 bg-white rounded-full text-[9px] font-bold text-primary uppercase tracking-widest border border-gray-100 shadow-sm mb-3">
                                        {job.department}
                                    </span>
                                    <h3 className="text-xl font-black text-gray-900 group-hover:text-primary transition-colors">
                                        {job.title}
                                    </h3>
                                </div>
                                <div className="text-right">
                                    <p className="text-base font-bold text-gray-900">{job.salary}</p>
                                    <p className="text-[9px] text-gray-400 font-bold">PER MONTH</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 mb-6 text-xs text-gray-500 font-medium">
                                <div className="flex items-center gap-1.5">
                                    <FiMapPin className="text-primary" size={12} />
                                    <span>{job.location}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <FiClock className="text-primary" size={12} />
                                    <span>{job.type}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => openModal(job)}
                                className="w-full py-3 bg-white rounded-xl border border-gray-200 text-gray-900 font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group/btn"
                            >
                                <span>View Details</span>
                                <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Empty State / Custom Inquiry */}
                <div className="mt-16 p-10 bg-primary/5 rounded-[2rem] border border-primary/10 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Don't see a fit?</h3>
                    <p className="text-gray-600 mb-6 max-w-lg mx-auto text-sm">
                        Even if your perfect role isn't listed, we'd love to hear from you. We're always in search of thinkers and makers.
                    </p>
                    <Link
                        to="/Contact"
                        className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-4 transition-all"
                    >
                        <span>Send us your resume</span>
                        <FiArrowRight />
                    </Link>
                </div>
            </div>

            {/* Job Detail Modal */}
            {selectedJob && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
                    {/* Backdrop with higher blur */}
                    <div
                        className="absolute inset-0 bg-black/20 backdrop-blur-xs transition-opacity duration-500"
                        onClick={closeModal}
                    ></div>

                    {/* Modal Content - Refined Scale and Corners */}
                    <div className="relative w-full max-w-4xl max-h-[80vh] bg-white rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] overflow-hidden animate-in fade-in zoom-in slide-in-from-bottom-4 duration-500 flex flex-col border border-white/20">
                        {/* Modal Header - Premium Minimalist */}
                        <div className="px-8 py-6 md:px-10 flex justify-between items-start bg-white/50 backdrop-blur-xl sticky top-0 z-20 border-b border-gray-50">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2.5 py-0.5 bg-primary/5 rounded-full text-[8px] font-black text-primary uppercase tracking-[0.2em]">
                                        {selectedJob.department}
                                    </span>
                                    <span className="w-1 h-1 rounded-full bg-gray-200"></span>
                                    <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">{selectedJob.type}</span>
                                </div>
                                <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight leading-tight">
                                    {selectedJob.title}
                                </h2>
                            </div>
                            <button
                                onClick={closeModal}
                                className="group p-2.5 bg-gray-50 rounded-xl text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all duration-300"
                            >
                                <FiX size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                            </button>
                        </div>

                        {/* Modal Body - Clear Grid Layout */}
                        <div className="flex-1 overflow-y-auto px-8 md:px-10 py-8">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                                {/* Left Content: Main Job Details */}
                                <div className="lg:col-span-8">
                                    <div className="space-y-10">
                                        {/* Overview */}
                                        <section>
                                            <header className="flex items-center gap-2 mb-4">
                                                <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                                                    <FiBriefcase size={14} />
                                                </div>
                                                <h4 className="text-lg font-black text-gray-900 tracking-tight">Overview</h4>
                                            </header>
                                            <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-xl">
                                                {selectedJob.description}
                                            </p>
                                        </section>

                                        {/* Responsibilities */}
                                        <section>
                                            <header className="flex items-center gap-2 mb-4">
                                                <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                                                    <FiCheckCircle size={14} />
                                                </div>
                                                <h4 className="text-lg font-black text-gray-900 tracking-tight">Responsibilities</h4>
                                            </header>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
                                                {selectedJob.responsibilities.map((item, i) => (
                                                    <div key={i} className="flex gap-2.5 p-2.5 rounded-xl bg-gray-50/50 border border-transparent hover:border-primary/5 hover:bg-white transition-all group/item">
                                                        <div className="flex-shrink-0 w-1 h-1 rounded-full bg-primary/20 mt-1.5 transition-transform"></div>
                                                        <span className="text-gray-600 font-bold text-[11px] leading-relaxed">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        {/* Requirements */}
                                        <section>
                                            <header className="flex items-center gap-2 mb-4">
                                                <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                                                    <FiArrowRight size={14} />
                                                </div>
                                                <h4 className="text-lg font-black text-gray-900 tracking-tight">Requirements</h4>
                                            </header>
                                            <div className="space-y-2.5">
                                                {selectedJob.requirements.map((item, i) => (
                                                    <div key={i} className="flex gap-2.5 items-center p-3 rounded-xl border border-gray-50 hover:shadow-sm transition-all">
                                                        <div className="w-2 h-2 rounded-full border border-primary/30 flex-shrink-0"></div>
                                                        <span className="text-gray-600 font-bold text-[11px]">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    </div>
                                </div>

                                {/* Right Side: Summary Sidebar */}
                                <div className="lg:col-span-4 lg:sticky lg:top-0 h-fit space-y-6">
                                    <div className="bg-gray-900 rounded-[1.25rem] p-6 text-white shadow-xl relative overflow-hidden group">
                                        {/* Background Decor */}
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-[30px] transition-colors"></div>

                                        <h4 className="text-[8px] font-black uppercase tracking-[0.2em] text-white/30 mb-6">Snapshot</h4>

                                        <div className="space-y-6 relative z-10">
                                            <div>
                                                <p className="text-[8px] font-black uppercase tracking-widest text-[#2a9fd8] mb-1">Monthly stipend</p>
                                                <p className="text-base font-black">{selectedJob.salary}</p>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-[8px] font-black uppercase tracking-widest text-white/40 mb-1">Workspace</p>
                                                    <div className="flex items-center gap-1">
                                                        <FiMapPin size={8} className="text-primary" />
                                                        <span className="text-[9px] font-bold">{selectedJob.location.split('/')[0]}</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-[8px] font-black uppercase tracking-widest text-white/40 mb-1">Schedule</p>
                                                    <div className="flex items-center gap-1">
                                                        <FiClock size={8} className="text-primary" />
                                                        <span className="text-[9px] font-bold">{selectedJob.type}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2.5">
                                        <button className="w-full py-3.5 bg-primary text-white rounded-xl font-black text-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                                            Apply for role
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Opportunities;
