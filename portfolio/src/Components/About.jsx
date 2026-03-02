import React, { useState, useEffect } from 'react';
import { experience } from '../data/Experience';
import { education } from '../data/Education';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

useEffect(() => {
  const handleCustomTabChange = (e) => {
    if (e.detail === 'education' || e.detail === 'experience') {
      setActiveTab(e.detail);
    }
  };

  window.addEventListener('changeTab', handleCustomTabChange);
  
  const initialHash = window.location.hash;
  if (initialHash.includes('education')) setActiveTab('education');
  if (initialHash.includes('experience')) setActiveTab('experience');

  return () => {
    window.removeEventListener('changeTab', handleCustomTabChange);
  };
}, []);

  return (
    <section className="py-12 relative z-10">

      <div id="experience" className="absolute -top-20 left-0"></div>
      <div id="education" className="absolute -top-20 left-0"></div>

      <div className="flex justify-center mb-16" data-aos="fade-up">
        <div className="bg-slate-100 p-1.5 rounded-full inline-flex relative shadow-inner">
          <div
            className={`absolute top-1.5 bottom-1.5 w-[140px] bg-white rounded-full shadow-md transition-all duration-500 ease-in-out ${activeTab === 'experience' ? 'left-1.5' : 'left-[148px]'}`}
          ></div>
          <button
            onClick={() => setActiveTab('experience')}
            className={`relative z-10 w-[140px] py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${activeTab === 'experience' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`relative z-10 w-[140px] py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${activeTab === 'education' ? 'text-purple-600' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Education
          </button>
        </div>
      </div>

      <div className="w-full">

        {activeTab === 'experience' && (
          <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start animate-fade-in-up">

            <div className="lg:col-span-5 lg:sticky lg:top-32 pr-4 lg:pr-8 relative">

              <div className="absolute -left-10 -top-10 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-[80px] rounded-full pointer-events-none z-0"></div>

              <div className="relative z-10">

                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-slate-200 shadow-sm mb-8 group cursor-default hover:border-purple-300 transition-colors duration-300">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                  </span>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-600 group-hover:text-purple-600 transition-colors duration-300">
                    Experience
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 mb-8 leading-[1.1]">
                  Design pixel-perfect interfaces <br className="hidden lg:block mt-2" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 animate-gradient-x block mt-1 pb-2">
                    And then I build them.
                  </span>
                </h2>

                <div className="relative pl-8 before:absolute before:left-0 before:top-3 before:bottom-3 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-transparent before:rounded-full">

                  <div className="absolute left-[-3px] top-3 w-2.5 h-2.5 bg-white border-2 border-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"></div>

                  <div className="space-y-6 text-slate-600 text-[1.1rem] leading-relaxed">
                    <p className="font-medium text-slate-800">
                      I am a UI/UX Designer and Frontend Engineer who transforms complex user needs into intuitive wireframes, high-fidelity prototypes, and flawless applications.
                    </p>
                    <p className="opacity-90">
                      I bridge the gap between creative imagination and technical limits, building frictionless digital experiences where brilliant design meets flawless execution.
                    </p>
                  </div>
                </div>

                <div className="mt-12 flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity duration-500 cursor-default">
                  <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    UI/UX • React • Full-Stack
                  </span>
                </div>

              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              {experience.map((job, i) => (
                <div
                  key={i}
                  className="group relative bg-white/60 backdrop-blur-xl border border-slate-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden cursor-default"
                >
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-1000 ease-out pointer-events-none"></div>

                  <div className="absolute top-0 left-0 w-1.5 h-0 bg-gradient-to-b from-blue-500 to-purple-500 group-hover:h-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"></div>

                  <div className="relative z-10 flex flex-col sm:flex-row gap-6">

                    <div className="shrink-0">
                      <div className="w-20 h-20 bg-white border border-slate-100 rounded-2xl p-3 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                        <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center">

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                          {job.role}
                        </h3>

                        <span className="text-xs font-bold text-slate-500 bg-slate-50 border border-slate-200 px-4 py-1.5 rounded-full whitespace-nowrap group-hover:bg-purple-50 group-hover:text-purple-700 group-hover:border-purple-200 transition-colors duration-500 shadow-sm">
                          {job.date}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-600 transition-colors duration-300">
                          {job.company}
                        </div>
                        <div className="h-px flex-1 bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-purple-200 group-hover:to-transparent transition-all duration-700"></div>
                      </div>

                      <p className="text-slate-600 leading-relaxed text-sm transform transition-all duration-500 opacity-90 group-hover:opacity-100 group-hover:translate-x-1">
                        {job.description}
                      </p>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start animate-fade-in-up">

            <div className="lg:col-span-5 lg:sticky lg:top-32 pr-4 lg:pr-8 relative">

              <div className="absolute -left-10 -top-10 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-[80px] rounded-full pointer-events-none z-0"></div>

              <div className="relative z-10">

                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-slate-200 shadow-sm mb-8 group cursor-default hover:border-purple-300 transition-colors duration-300">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                  </span>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-600 group-hover:text-purple-600 transition-colors duration-300">
                    Academic Background
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 mb-8 leading-[1.1]">
                  Bridging the gap between <br className="hidden lg:block mt-2" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 animate-gradient-x block mt-1 pb-2">
                    Theory and Practice.
                  </span>
                </h2>

                <div className="relative pl-8 before:absolute before:left-0 before:top-3 before:bottom-3 before:w-1 before:bg-gradient-to-b before:from-purple-500 before:via-pink-500 before:to-transparent before:rounded-full">

                  <div className="absolute left-[-3px] top-3 w-2.5 h-2.5 bg-white border-2 border-purple-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.6)]"></div>

                  <div className="space-y-6 text-slate-600 text-[1.1rem] leading-relaxed">
                    <p className="font-medium text-slate-800">
                      My academic journey is rooted in a deep curiosity for how complex systems are architected and experienced by users.
                    </p>
                    <p className="opacity-90">
                      Through my Master of Science in Information Systems at Northeastern University, I am actively refining my frontend and UI/UX design expertise while learning how to build and secure resilient enterprise applications.                    </p>
                  </div>
                </div>

                <div className="mt-12 flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity duration-500 cursor-default">
                  <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-transparent"></div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Design • Develop • Deploy
                  </span>
                </div>

              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/60 backdrop-blur-xl border border-slate-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden cursor-default"
                >
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-1000 ease-out pointer-events-none"></div>

                  <div className="absolute top-0 left-0 w-1.5 h-0 bg-gradient-to-b from-purple-500 to-pink-500 group-hover:h-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"></div>

                  <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">

                    <div className="shrink-0">
                      <div className="w-20 h-20 bg-white border border-slate-100 rounded-2xl p-3 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                        <img src={edu.logo} alt="University Logo" className="w-full h-full object-contain transition-all duration-500" />
                      </div>
                    </div>

                    <div className="flex-1 w-full">

                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                        <div>
                          <div className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-1 group-hover:text-pink-500 transition-colors duration-300">
                            {edu.university}
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 leading-tight tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                            {edu.degree}
                          </h3>
                        </div>

                        <div className="mt-2 sm:mt-0 text-xs font-bold text-slate-500 bg-slate-50 border border-slate-200 px-4 py-1.5 rounded-full whitespace-nowrap group-hover:bg-pink-50 group-hover:text-pink-700 group-hover:border-pink-200 transition-colors duration-500 shadow-sm">
                          {edu.date}
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mt-5 mb-4">
                        <div className="h-px flex-1 bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-pink-200 group-hover:to-transparent transition-all duration-700"></div>
                      </div>

                      <div className="flex items-center gap-3 transform transition-all duration-500 group-hover:translate-x-1">
                        <div className="inline-flex items-center gap-2 bg-purple-50/50 text-purple-700 px-4 py-2 rounded-xl text-sm font-bold border border-purple-100 group-hover:bg-purple-100 group-hover:shadow-sm transition-all duration-300">
                          <i className="fas fa-graduation-cap text-purple-500 group-hover:scale-110 transition-transform duration-300"></i>
                          <span>Grade: {edu.cgpa}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default About;