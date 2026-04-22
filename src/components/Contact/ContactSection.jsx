import React, { useState } from 'react';
import { FiCheckCircle, FiLoader, FiChevronDown } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Button from '../common/Button';


const ContactSection = () => {
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("idle");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "Peshawar (Headquarters)",
        message: "",
        cv: null,
        privacy: false
    });

    const [uploadProgress, setUploadProgress] = useState(0);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'file') {
            const file = files[0];
            if (file && file.size > 5 * 1024 * 1024) {
                setResult("File too large (Max 5MB)");
                setStatus("error");
                return;
            }
            setFormData(prev => ({ ...prev, cv: file }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        if (!formData.privacy) {
            setResult("Please agree to the privacy policy.");
            setStatus("error");
            return;
        }

        setStatus("loading");
        setUploadProgress(10);
        setResult("Establishing secure connection...");

        const submissionData = new FormData();
        submissionData.append("firstName", formData.firstName);
        submissionData.append("lastName", formData.lastName);
        submissionData.append("email", formData.email);
        submissionData.append("phone", formData.phone);
        submissionData.append("location", formData.location);
        submissionData.append("message", formData.message);

        if (formData.cv) {
            submissionData.append("cv", formData.cv);
        }

        try {
            // Target our custom Professional SMTP Server
            const SERVER_URL = "http://localhost:5000/api/contact";
            setUploadProgress(40);
            setResult("Delivering Application & CV via SMTP...");

            const response = await fetch(SERVER_URL, {
                method: "POST",
                body: submissionData
            });

            const data = await response.json();
            setUploadProgress(100);

            if (data.success) {
                setStatus("success");
                setResult("CV & Inquiry delivered! Our team will review your application within 24h.");
                setFormData({
                    firstName: "", lastName: "", email: "", phone: "",
                    location: "Peshawar (Headquarters)", message: "", cv: null, privacy: false
                });
                setTimeout(() => setUploadProgress(0), 3000);
            } else {
                setResult(data.message || "Professional SMTP Delivery failed.");
                setStatus("error");
            }
        } catch (error) {
            console.error("SMTP Client Error:", error);
            setStatus("error");
            setResult("SMTP Server not reachable. Ensure server.js is running.");
        }
    };

    return (
        <div className="bg-[#F9FAFB] flex flex-col lg:flex-row p-3 lg:p-4 font-sans text-[#101828] gap-4 max-w-[1100px] mx-auto rounded-[2rem] my-6 border border-slate-100 shadow-sm overflow-hidden">
            {/* ── Left Panel ── */}
            <div className="hidden lg:flex w-[340px] bg-white rounded-[1.5rem] shadow-sm border border-slate-200 flex-col justify-between p-8 relative overflow-hidden shrink-0">
                <div className="flex items-center justify-between relative z-20">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-[#2a9fd8] rounded-lg flex items-center justify-center text-white font-bold text-base">
                            <span className="mt-[-1px]">B</span>
                        </div>
                        <span className="font-bold text-lg tracking-tight text-[#101828]">BitCoderLabs</span>
                    </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10">
                    {[1.2, 2.2, 3.2, 4.2].map((scale) => (
                        <div key={scale} className="absolute rounded-full border border-dashed border-slate-300" style={{ width: `${scale * 160}px`, height: `${scale * 160}px`, top: '50%', left: '0%', transform: 'translate(-30%, -50%)', opacity: 1 - (scale / 6) }} />
                    ))}
                    <Avatar img="/mian Dawood Ali Shah.webp" size="w-14 h-14" top="15%" left="45%" />
                    <Avatar img="/Abdur Rahman.jpeg" size="w-12 h-12" top="35%" left="15%" />
                    <Avatar img="/Irfan.jpeg" size="w-10 h-10" top="50%" left="25%" />
                    <Avatar img="/Mahnoor Azeem.jpg" size="w-8 h-8" top="48%" left="65%" />
                    <Avatar img="/Ahmad.jpeg" size="w-10 h-10" top="65%" left="5%" />
                    <Avatar img="/Shah Fahad.jpeg" size="w-11 h-11" top="62%" left="45%" />
                    <Avatar img="/Roha.jpg" size="w-9 h-9" top="78%" left="52%" />
                </div>

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

            {/* ── Right Panel ── */}
            <div className="flex-1 bg-white rounded-[1.5rem] shadow-sm border border-slate-200 flex flex-col items-center justify-start py-8 lg:py-10 px-5 lg:px-12">
                <div className="w-full max-w-xl">
                    <div className="text-center lg:text-left mb-6">
                        <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#101828] mb-2">We'd love to help</h1>
                        <p className="text-[#667085] text-base font-medium leading-relaxed">Direct message line to our CEO. Replies within 24h.</p>
                    </div>

                    <form onSubmit={onSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormInput label="First name" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} required />
                            <FormInput label="Last name" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} required />
                        </div>

                        <FormInput label="Email" name="email" placeholder="Email address" type="email" value={formData.email} onChange={handleChange} required />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormInput label="Contact number" name="phone" placeholder="+92 3XX XXXXXXX" value={formData.phone} onChange={handleChange} required />
                            <FormSelect label="Location" name="location" value={formData.location} onChange={handleChange} options={['Peshawar (Headquarters)', 'Nowshera Region', 'Charsadda Region', 'Mardan City', 'Kohat Region', 'Swabi Region']} icon="🇵🇰" />
                        </div>

                        {/* ── Perfected CV Dropzone ── */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#344054]">Attach CV / Resume</label>
                            <div className={`relative border-2 border-dashed rounded-xl p-4 transition-all ${formData.cv ? 'border-green-200 bg-green-50/30' : 'border-slate-200 hover:border-[#2a9fd8] bg-slate-50/50'}`}>
                                <input type="file" name="cv" onChange={handleChange} accept=".pdf,.doc,.docx" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${formData.cv ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-[#2a9fd8]'}`}>
                                        {formData.cv ? <FiCheckCircle size={20} /> : <span className="text-xl font-bold">📄</span>}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-bold text-[#101828] truncate">
                                            {formData.cv ? formData.cv.name : "Click or drag to upload CV"}
                                        </p>
                                        <p className="text-[10px] text-[#667085]">
                                            {formData.cv ? `${(formData.cv.size / 1024 / 1024).toFixed(2)} MB • Ready` : "PDF, DOCX up to 5MB"}
                                        </p>
                                    </div>
                                    {formData.cv && (
                                        <Button
                                            onClick={() => setFormData(p => ({ ...p, cv: null }))}
                                            variant="ghost"
                                            size="sm"
                                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                        >
                                            Remove
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* ── Upload Progress Bar (Visible during loading) ── */}
                        {status === "loading" && uploadProgress > 0 && (
                            <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                                <div className="bg-[#2a9fd8] h-full transition-all duration-300" style={{ width: `${uploadProgress}%` }}></div>
                            </div>
                        )}

                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-[#344054]">How can we lead you to success?</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} rows="3" placeholder="Tell us about your project or career goals..." required className="w-full px-4 py-2.5 rounded-xl border border-[#D0D5DD] focus:border-[#2a9fd8] focus:ring-4 focus:ring-blue-50 outline-none transition-all resize-none placeholder:text-[#667085] text-[#101828] font-medium text-sm" />
                        </div>

                        <div className="flex items-start gap-3 pt-1">
                            <div className="pt-0.5">
                                <input type="checkbox" name="privacy" checked={formData.privacy} onChange={handleChange} className="w-4 h-4 rounded-md border-[#D0D5DD] text-[#2a9fd8] focus:ring-[#2a9fd8] cursor-pointer shadow-sm transition-all" />
                            </div>
                            <p className="text-xs text-[#667085] font-medium">You agree to our friendly <span className="underline underline-offset-4 decoration-dotted cursor-pointer hover:text-[#101828] transition-colors font-bold">privacy policy</span>.</p>
                        </div>

                        {status === "success" && (
                            <div className="flex items-center gap-2 p-3 bg-green-50 text-green-700 rounded-xl text-xs font-bold animate-in fade-in slide-in-from-top-2 border border-green-100">
                                <FiCheckCircle className="shrink-0" />
                                <span>{result}</span>
                            </div>
                        )}

                        {status === "error" && (
                            <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-xl text-xs font-bold animate-in fade-in slide-in-from-top-2 border border-red-100">
                                <span className="shrink-0 text-red-500 font-bold">⚠️</span>
                                <span>{result}</span>
                            </div>
                        )}

                        <Button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full mt-2"
                            icon={status === "loading" ? FiLoader : null}
                            iconPosition="left"
                            iconClassName={status === "loading" ? "animate-spin" : ""}
                        >
                            {status === "loading" ? result : "Submit Application"}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

// Helper Components
const Avatar = ({ img, size, top, left }) => (
    <div className={`${size} absolute rounded-full border-[2px] border-white shadow-lg overflow-hidden bg-slate-50 transition-transform hover:scale-110 duration-500 z-10`} style={{ top, left }}>
        <img src={img} alt="Team" className="w-full h-full object-cover" />
    </div>
);

const FormInput = ({ label, name, placeholder, type = "text", value, onChange, required = false }) => (
    <div className="space-y-1 flex-1 w-full">
        <label className="text-xs font-semibold text-[#344054]">{label}</label>
        <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} className="w-full px-4 py-2.5 rounded-xl border border-[#D0D5DD] focus:border-[#2a9fd8] focus:ring-4 focus:ring-blue-50 outline-none transition-all placeholder:text-[#667085] text-[#101828] font-medium text-sm focus:bg-white" />
    </div>
);

const FormSelect = ({ label, name, options, value, onChange, icon }) => (
    <div className="space-y-1 flex-1 w-full">
        <label className="text-xs font-semibold text-[#344054]">{label}</label>
        <div className="relative group">
            {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center text-sm z-10 pointer-events-none shadow-sm">{icon}</div>}
            <select name={name} value={value} onChange={onChange} className={`w-full ${icon ? 'pl-11' : 'px-4'} py-2.5 rounded-xl border border-[#D0D5DD] appearance-none bg-white font-medium outline-none cursor-pointer group-hover:border-[#2a9fd8] transition-all text-[#101828] text-sm`}>
                {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#667085] pointer-events-none group-hover:text-[#2a9fd8] transition-colors text-sm" />
        </div>
    </div>
);

export default ContactSection;
