import React from 'react';
import { projects } from '../data/Projects';

const Projects = () => {
  return (
    <section id="projects" className="py-2">
      
      {/* Scrollbar Styles for this component */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5); 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.8);
        }
      `}</style>

      <div className="mb-16 text-center" data-aos="fade-up">
<h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-slate-900">
  Personal Projects
</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="group relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-default"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            
            {/* Background Image (With Lighter Fallback) */}
            <div className="absolute inset-0 w-full h-full bg-slate-200">
               {project.image ? (
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                   onError={(e) => {
                     e.target.style.display='none'; 
                     e.target.nextSibling.style.display='flex';
                   }} 
                 />
               ) : null}
               
               {/* Fallback for missing image - lighter slate gradient */}
               <div className={`absolute inset-0 ${project.image ? 'hidden' : 'flex'} items-center justify-center bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900`}>
                  <i className="fas fa-laptop-code text-5xl text-slate-600 opacity-50"></i>
               </div>
            </div>

            {/* Initial Bottom Gradient (Lighter) */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-0"></div>
            
            {/* HOVER OVERLAY - THE MAIN CHANGE */}
            {/* Changed from slate-950/90 (blackish) to slate-900/80 (dark blue-grey with glass effect) */}
            <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-500"></div>


            {/* GitHub Button */}
            <div className="absolute top-4 right-4 z-20">
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 group/github shadow-lg hover:scale-110"
                title="View Source Code"
              >
                <i className="fab fa-github text-lg group-hover/github:rotate-12 transition-transform duration-300"></i>
              </a>
            </div>


            {/* Content Container */}
            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end transform translate-y-[calc(100%-4.5rem)] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10 h-full">
              
              {/* Title Section */}
              <div className="mt-auto"> 
                  <div className="pb-3">
                    <h3 className="text-xl font-bold text-white leading-tight line-clamp-1 mb-1">
                      {project.title}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                  </div>

                  {/* Description Section */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                    
                    {/* SCROLLABLE DESCRIPTION */}
                    <p className="text-slate-100 text-xs leading-relaxed mb-4 max-h-[100px] overflow-y-auto pr-2 custom-scrollbar">
                        {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 6).map((tag) => (
                          <span 
                            key={tag} 
                            className="px-2 py-1 bg-blue-500/20 border border-blue-400/30 rounded-md text-[10px] uppercase font-bold tracking-wider text-blue-100"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                  </div>
              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;