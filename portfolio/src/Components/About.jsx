import React, { useState, useEffect } from 'react';
import { experience } from '../data/Experience';
import { education } from '../data/Education';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#education') {
        setActiveTab('education');
      } else if (hash === '#experience') {
        setActiveTab('experience');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section className="py-20 relative z-10">
      
      <div id="experience" className="absolute -top-32 left-0"></div>
      <div id="education" className="absolute -top-32 left-0"></div>

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

      <div className="max-w-4xl mx-auto px-4 min-h-[400px]">
        
        {activeTab === 'experience' && (
          <div className="space-y-8 animate-fade-in-up">
            {experience.map((job, i) => (
              <div 
                key={i} 
                className="group bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="shrink-0">
                     <div className="w-24 h-24 bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
                     </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                       <h3 className="text-2xl font-bold text-slate-900">{job.role}</h3>
                       <span className="text-sm font-bold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mt-2 md:mt-0 w-fit">
                          {job.date}
                       </span>
                    </div>
                    <div className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-6">{job.company}</div>
                    <p className="text-slate-600 leading-relaxed text-lg">
                       {job.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'education' && (
          <div className="grid grid-cols-1 gap-8 animate-fade-in-up">
            {education.map((edu, idx) => (
               <div 
                 key={idx} 
                 className="group bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
               >
                 <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                 <div className="flex flex-col md:flex-row gap-6 items-start">
                    
                    <div className="shrink-0">
                       <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-xl p-2 flex items-center justify-center">
                          <img src={edu.logo} alt="University Logo" className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
                       </div>
                    </div>
                    
                    <div className="flex-1 w-full">
                       
                       <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                          <div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                                {edu.university}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                                {edu.degree}
                            </h3>
                          </div>
                          
                          <div className="mt-2 md:mt-0 text-xs font-bold text-slate-500 border border-slate-200 px-3 py-1 rounded-full w-fit">
                             {edu.date}
                          </div>
                       </div>

                       <div className="flex items-center gap-3 mb-6">
                          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-3 py-1.5 rounded-lg text-sm font-bold border border-purple-100">
                             <i className="fas fa-graduation-cap"></i>
                             <span>Grade: {edu.cgpa}</span>
                          </div>
                       </div>
                    </div>
                 </div>
               </div>
            ))}
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