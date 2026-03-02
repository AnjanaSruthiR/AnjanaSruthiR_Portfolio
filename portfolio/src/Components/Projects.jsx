import React from 'react';
import { projects } from '../data/ProjectsData';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="mb-20 px-6 text-left max-w-7xl mx-auto" data-aos="fade-up">
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6">
          Personal Projects
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <Link 
            to={`/project/${project.id}`} 
            key={idx} 
            className="group relative h-[450px] w-full rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-200 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_30px_60px_-15px_rgba(88,28,135,0.2)] hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="absolute inset-0 w-full h-full">
               {project.image ? (
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                 />
               ) : (
                 <div className="w-full h-full bg-gradient-to-br from-slate-800 to-black flex items-center justify-center">
                    <span className="text-slate-700 font-black text-8xl opacity-20">0{idx + 1}</span>
                 </div>
               )}
               <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-500"></div>
            </div>

            <div className="absolute top-6 right-6 z-30 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-purple-600 hover:border-purple-500 transition-all duration-300 shadow-lg"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>

            <div className="absolute bottom-4 left-4 right-4 p-8 rounded-[2rem] bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 overflow-hidden">
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                  {project.title}
                </h3>
                
                <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-full transition-all duration-700"></div>

                <div className="max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                  <p className="text-slate-200 text-sm leading-relaxed mt-4 mb-6 line-clamp-3">
                      {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-[10px] font-bold text-purple-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};


export default Projects;