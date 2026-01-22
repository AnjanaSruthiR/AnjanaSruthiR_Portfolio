import React, { useState } from 'react';
import { profile } from '../data/Profile';

const Contact = () => {
    const [copyStatus, setCopyStatus] = useState(null);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(profile.email);
        setCopyStatus('Copied!');
        setTimeout(() => setCopyStatus(null), 2000);
    };

    return (
        <section
            id="contact"
            className="py-24 relative overflow-hidden"
        >
            <div data-aos="fade-up">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">Let's Connect</h3>
                    <p className="text-slate-500">I'm currently open to new opportunities.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-12">

                    <div className="flex flex-col items-center p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all group text-center hover:-translate-y-1"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-offset="0"
                    >

                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all mb-4 shadow-sm">
                            <i className="fas fa-envelope text-2xl"></i>
                        </div>

                        <h4 className="text-lg font-bold text-slate-900 mb-2">Email Me</h4>

                        <div className="flex items-center justify-center gap-3 mb-3">
                            <a href={`mailto:${profile.email}`} className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">
                                {profile.email}
                            </a>
                            <button
                                onClick={handleCopyEmail}
                                className="text-xs bg-slate-100 text-slate-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors border border-slate-200 font-medium"
                                title="Copy Email"
                            >
                                {copyStatus ? <i className="fas fa-check text-green-500"></i> : <i className="fas fa-copy"></i>}
                            </button>
                        </div>

                    </div>

                    <a
                        href={profile.social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col items-center p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0077b5]/30 transition-all group text-center hover:-translate-y-1"
                    >
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-[#0077b5] group-hover:bg-[#0077b5] group-hover:text-white transition-all mb-4 shadow-sm">
                            <i className="fab fa-linkedin-in text-2xl"></i>
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">LinkedIn</h4>
                        <p className="text-slate-500 text-sm group-hover:text-[#0077b5] transition-colors font-medium">
                            Let's connect professionally
                        </p>
                    </a>

                    <a
                        href={profile.social.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col items-center p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-800/30 transition-all group text-center hover:-translate-y-1"
                    >
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-all mb-4 shadow-sm">
                            <i className="fab fa-github text-2xl"></i>
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">GitHub</h4>
                        <p className="text-slate-500 text-sm group-hover:text-slate-900 transition-colors font-medium">
                            Check out my repositories
                        </p>
                    </a>

                </div>
            </div>
        </section>
    );
};

export default Contact;