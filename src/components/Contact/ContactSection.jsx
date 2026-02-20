import React from 'react';
import { FiGithub, FiTwitter, FiLinkedin, FiFacebook, FiChevronDown } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <div className="bg-[#F9FAFB] flex flex-col lg:flex-row p-3 lg:p-4 font-sans text-[#101828] gap-4 max-w-[1100px] mx-auto rounded-[2rem] my-6 border border-slate-100 shadow-sm overflow-hidden">
            {/* ── Left Panel: Brand & Orbital Visual ── */}
            <div className="hidden lg:flex w-[340px] bg-white rounded-[1.5rem] shadow-sm border border-slate-200 flex-col justify-between p-8 relative overflow-hidden shrink-0">
                {/* Logo & Info */}
                <div className="flex items-center justify-between relative z-20">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-[#2a9fd8] rounded-lg flex items-center justify-center text-white font-bold text-base">
                            <span className="mt-[-1px]">B</span>
                        </div>
                        <span className="font-bold text-lg tracking-tight text-[#101828]">BitCoderLabs</span>
                    </div>
                </div>

                {/* Orbital Graphic - Centered Visual */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10">
                    {/* Concentric Dotted Rings - Offset to the left to create arcs */}
                    {[1.2, 2.2, 3.2, 4.2].map((scale) => (
                        <div
                            key={scale}
                            className="absolute rounded-full border border-dashed border-slate-300"
                            style={{
                                width: `${scale * 160}px`,
                                height: `${scale * 160}px`,
                                top: '50%',
                                left: '0%',
                                transform: 'translate(-30%, -50%)',
                                opacity: 1 - (scale / 6)
                            }}
                        />
                    ))}

                    {/* Floating Avatars (Positioned around the arcs) */}
                    <Avatar img="/mian Dawood Ali Shah.webp " size="w-10 h-10" top="15%" left="45%" border="#E0E0E0" />
                    <Avatar img="/Abdur Rahman.jpeg" size="w-12 h-12" top="35%" left="15%" border="#E0E0E0" />
                    <Avatar img="/Irfan.jpeg" size="w-10 h-10" top="50%" left="25%" border="#E0E0E0" />
                    <Avatar img="/Mahnoor Azeem.jpg" size="w-8 h-8" top="48%" left="65%" border="#E0E0E0" />
                    <Avatar img="/Ahmad.jpeg" size="w-10 h-10" top="65%" left="5%" border="#E0E0E0" />
                    <Avatar img="/Shah Fahad.jpeg" size="w-11 h-11" top="62%" left="45%" border="#E0E0E0" />
                    <Avatar img="/Roha.jpg  " size="w-9 h-9" top="78%" left="52%" border="#E0E0E0" />
                </div>

                {/* Social Links - Bottom */}
                <div className="relative z-20 flex flex-col gap-3">
                    {[
                        { icon: <FaFacebookF />, label: "Facebook", href: "https://www.facebook.com/BitCoderLabs" },
                        { icon: <FaTwitter />, label: "Twitter", href: "https://twitter.com/BitCoderLabs" },
                        { icon: <FaLinkedinIn />, label: "LinkedIn", href: "https://www.linkedin.com/company/bitcoderlabs/posts/?feedView=all" },
                        { icon: <FaInstagram />, label: "Instagram", href: "https://www.instagram.com/bitcoderlabs/" },
                    ].map((social, i) => (
                        <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#667085] font-semibold hover:text-[#101828] transition-colors group">
                            <span className="text-lg group-hover:scale-110 transition-transform">{social.icon}</span>
                            <span className="text-xs tracking-tight">{social.label}</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* ── Right Panel: Form Area ── */}
            <div className="flex-1 bg-white rounded-[1.5rem] shadow-sm border border-slate-200 flex flex-col items-center justify-start py-8 lg:py-10 px-5 lg:px-12">
                <div className="w-full max-w-xl">
                    <div className="text-center lg:text-left mb-6">
                        <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#101828] mb-2">We'd love to help</h1>
                        <p className="text-[#667085] text-base font-medium leading-relaxed">Reach out and we'll get in touch within 24 hours.</p>
                    </div>

                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormInput label="First name" placeholder="First name" defaultValue="" highlight />
                            <FormInput label="Last name" placeholder="Last name" />
                        </div>

                        <FormInput label="Email" placeholder="Email address" type="email" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormInput label="Contact number" placeholder="+92 3XX XXXXXXX" />
                            <FormSelect
                                label="Location"
                                options={[
                                    'Peshawar (Headquarters)',
                                    'Nowshera Region',
                                    'Charsadda Region',
                                    'Mardan City',
                                    'Kohat Region',
                                    'Swabi Region'
                                ]}
                                icon="🇵🇰"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-[#344054]">Message</label>
                            <textarea
                                rows="3"
                                placeholder="Leave us a message..."
                                className="w-full px-4 py-2.5 rounded-xl border border-[#D0D5DD] focus:border-[#2a9fd8] focus:ring-4 focus:ring-blue-50 outline-none transition-all resize-none placeholder:text-[#667085] text-[#101828] font-medium text-sm"
                            ></textarea>
                        </div>

                        <div className="flex items-start gap-3 pt-1">
                            <div className="pt-0.5">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded-md border-[#D0D5DD] text-[#2a9fd8] focus:ring-[#2a9fd8] cursor-pointer shadow-sm transition-all"
                                />
                            </div>
                            <p className="text-xs text-[#667085] font-medium">
                                You agree to our friendly <span className="underline underline-offset-4 decoration-dotted cursor-pointer hover:text-[#101828] transition-colors font-bold">privacy policy</span>.
                            </p>
                        </div>

                        <button className="w-full py-3 bg-[#2a9fd8] text-white font-bold rounded-xl hover:bg-[#2389ba] shadow-lg shadow-blue-100 transition-all active:scale-[0.98] text-sm mt-2">
                            Send message
                        </button>
                    </form>

                    {/* Logo Cloud at Bottom */}
                    <div className="mt-8 pt-6 border-t border-[#F2F4F7] flex flex-wrap items-center justify-center lg:justify-between gap-4">
                        {['RIPPLING', 'NOTION', 'ghost', 'LaunchDarkly', 'PLAID', 'classpass', 'TESLA', 'descript', 'Basecamp', 'Square'].map((logo, i) => (
                            <div key={i} className="flex justify-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer">
                                <span className={`font-black text-[10px] lg:text-[11px] tracking-tighter uppercase whitespace-nowrap text-[#475467]`}>{logo}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper Components
const Avatar = ({ img, size, top, left }) => (
    <div
        className={`${size} absolute rounded-full border-[2px] border-white shadow-lg overflow-hidden bg-slate-50 transition-transform hover:scale-110 duration-500 z-10`}
        style={{ top, left }}
    >
        <img src={img} alt="Team" className="w-full h-full object-cover" />
    </div>
);

const FormInput = ({ label, placeholder, type = "text", defaultValue = "", highlight = false }) => (
    <div className="space-y-1 flex-1 w-full">
        <label className="text-xs font-semibold text-[#344054]">{label}</label>
        <input
            type={type}
            defaultValue={defaultValue}
            placeholder={placeholder}
            className={`w-full px-4 py-2.5 rounded-xl border outline-none transition-all placeholder:text-[#667085] text-[#101828] font-medium text-sm
                ${highlight
                    ? 'border-[#2a9fd8] ring-4 ring-blue-50 bg-white shadow-sm'
                    : 'border-[#D0D5DD] focus:border-[#2a9fd8] focus:ring-4 focus:ring-blue-50 focus:bg-white'}`}
        />
    </div>
);

const FormSelect = ({ label, options, icon }) => (
    <div className="space-y-1 flex-1 w-full">
        <label className="text-xs font-semibold text-[#344054]">{label}</label>
        <div className="relative group">
            {icon && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center text-sm z-10 pointer-events-none shadow-sm">
                    {icon}
                </div>
            )}
            <select className={`w-full ${icon ? 'pl-11' : 'px-4'} py-2.5 rounded-xl border border-[#D0D5DD] appearance-none bg-white font-medium outline-none cursor-pointer group-hover:border-[#2a9fd8] transition-all text-[#101828] text-sm`}>
                {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#667085] pointer-events-none group-hover:text-[#2a9fd8] transition-colors text-sm" />
        </div>
    </div>
);

export default ContactSection;
