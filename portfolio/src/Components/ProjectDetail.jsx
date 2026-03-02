import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/ProjectsData';
import { ArrowLeft, Github } from 'lucide-react';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) return <div className="min-h-screen flex items-center justify-center">Project not found</div>;

    return (
        <div className="bg-white min-h-screen pb-20">

            <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full px-8 py-5 flex items-center justify-between transition-all hover:bg-white/95">
                <div className="flex items-center gap-2">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-bold uppercase text-[10px] md:text-xs tracking-widest"
                    >
                        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                        Back to Works
                    </Link>
                </div>

                <div className="flex items-center gap-6">
                    <div className="w-px h-4 bg-slate-200 hidden md:block"></div>
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-slate-900 transition-all hover:scale-110"
                    >
                        <Github size={22} />
                    </a>
                </div>
            </nav>

            <main className="pt-48 px-6 max-w-7xl mx-auto">

                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 mb-20" data-aos="fade-up">

                    <div className="lg:col-span-7 max-w-4xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px w-8 bg-blue-600"></div>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-mono text-sm tracking-widest uppercase font-bold">
                                Project Showcase
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-slate-900 leading-[0.85]">
                            {project.title}
                        </h1>
                    </div>

                    <div className="lg:w-2/3 w-full" data-aos="fade-left">
                        <div className="relative group p-[2px] rounded-[2.6rem] transition-all duration-700 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]">

                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 rounded-[2.6rem] opacity-20 group-hover:opacity-100 animate-gradient-x transition-opacity duration-700"></div>

                            <div className="relative bg-white/90 backdrop-blur-2xl rounded-[2.5rem] p-10 overflow-hidden">

                                <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-400/20 blur-3xl rounded-full"></div>
                                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-pink-400/20 blur-3xl rounded-full"></div>

                                <div className="relative z-10 space-y-8 -mt-4">
                                    <div className="space-y-4 group/item">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-blue-600 shadow-lg shadow-blue-500/30 flex items-center justify-center text-white transform group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                    <circle cx="12" cy="7" r="4" />
                                                </svg>
                                            </div>
                                            <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Project Role</h4>
                                        </div>

                                        <p className="text-xl font-bold text-slate-900 pl-1 group-hover/item:translate-x-1 transition-transform duration-500">
                                            {project.role}
                                        </p>
                                    </div>

                                    <div className="space-y-4 group/item">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-purple-600 shadow-lg shadow-purple-500/30 flex items-center justify-center text-white transform group-hover/item:scale-110 group-hover/item:-rotate-6 transition-all duration-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                                            </div>
                                            <h4 className="text-[10px] font-black text-purple-600 uppercase tracking-[0.2em]">Tech Stack</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, idx) => (
                                                <span
                                                    key={tech}
                                                    className="px-4 py-1.5 bg-purple-50 text-purple-600 border border-purple-100 rounded-full text-[10px] font-bold hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:shadow-md transition-all duration-300 cursor-default"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4 group/item">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-pink-500 shadow-lg shadow-pink-500/30 flex items-center justify-center text-white transform group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                    <line x1="16" y1="2" x2="16" y2="6" />
                                                    <line x1="8" y1="2" x2="8" y2="6" />
                                                    <line x1="3" y1="10" x2="21" y2="10" />
                                                </svg>
                                            </div>
                                            <h4 className="text-[10px] font-black text-pink-500 uppercase tracking-[0.2em]">Timeline</h4>
                                        </div>
                                        <p className="text-xl font-bold text-slate-900 pl-1 group-hover/item:translate-x-1 transition-transform duration-500">
                                            {project.date || "Ongoing"}
                                        </p>
                                    </div>

                                    {project.liveLink && (
                                        <div className="pt-4">
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                                            >
                                                View Live Project
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                    <polyline points="15 3 21 3 21 9"></polyline>
                                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                                </svg>
                                            </a>
                                        </div>
                                    )}

                                    {project.figmaLink && (
                                        <div className="pt-2">
                                            <a
                                                href={project.figmaLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#00A8A8] text-white font-bold uppercase tracking-widest hover:bg-[#008f8f] hover:shadow-lg hover:shadow-[#00A8A8]/30 transition-all duration-300"
                                            >
                                                View Figma Prototype
                                                <i className="fab fa-figma text-lg"></i>
                                            </a>
                                        </div>
                                    )}

                                    {project.mediumLink && (
                                        <div className="pt-2">
                                            <a
                                                href={project.mediumLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-slate-800 text-white font-bold uppercase tracking-widest hover:bg-slate-950 hover:shadow-lg hover:shadow-slate-900/30 transition-all duration-300"
                                            >
                                                Read Case Study
                                                <i className="fab fa-medium text-lg"></i>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-20 mt-10 border-t border-slate-100" data-aos="fade-up">

                    {project.richContent ? (
                        <div className="max-w-4xl mx-auto">
                            {project.richContent}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                            <div className="lg:col-span-4">
                                <h2 className="text-4xl font-black tracking-tighter text-slate-900 leading-none">The <br />Challenge.</h2>
                            </div>
                            <div className="lg:col-span-8 text-xl text-slate-600 leading-relaxed space-y-8 font-light">
                                <p>{project.description}</p>
                            </div>
                        </div>
                    )}

                </div>

                <div className="py-10" data-aos="zoom-in">
                    <div className="w-full aspect-[16/9] rounded-[3rem] overflow-hidden bg-slate-50 border border-slate-100">
                        <img src={project.secondaryImage || project.image} alt="Process shot" className="w-full h-full object-cover" />
                    </div>
                </div>

            </main>
        </div>
    );
};

export default ProjectDetail;