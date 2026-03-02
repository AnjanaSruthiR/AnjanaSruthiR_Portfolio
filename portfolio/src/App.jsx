import React, { useEffect, useRef, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';

import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import About from './Components/About';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import ProjectDetail from './Components/ProjectDetail';

import { profile } from './data/Profile';
import { skills } from './data/Skills';
import { experience } from './data/Experience';

const App = () => {
  const typedEl = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 10 });

    if (typedEl.current) {
      const typed = new Typed(typedEl.current, {
        strings: [
          "Front-end Developer.",
          "UI/UX Designer.",
          "Software Developer",
          "Full-stack Developer",
          'Data Enthusiast',
          'Security Analyst',
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: false
      });
      return () => typed.destroy();
    }
  }, []);

  const categories = {
    "Frontend & Design": ["React", "Angular", "JavaScript", "TypeScript", "HTML", "CSS", "SASS", "Bootstrap", "Figma"],
    "Backend & DB": ["Java", "Spring Boot", "Node.js", "Express", "MongoDB", "MySQL", "Microsoft SQL"],
    "Tools": ["VS Code", "GitHub", "Jira", "Android Studio", "ServiceNow", "Office 365", "Excel", "Power BI"]
  };

  return (
    <Router>
      <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-purple-600 selection:text-white cursor-default overflow-x-hidden">

        <div
          className="fixed w-[500px] h-[500px] bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-300/20 rounded-full blur-[100px] pointer-events-none z-0 transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"
          style={{ left: mousePosition.x, top: mousePosition.y }}
        ></div>

        <Navbar />

        <Routes>
          <Route path="/" element={
            <main className="relative z-10">
              <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-32 pb-20 max-w-[1400px] mx-auto border-x border-slate-100 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8" data-aos="fade-right">
                    <div className="flex items-center gap-4">
                      <div className="h-px w-12 bg-slate-900"></div>
                      <span className="text-sm font-bold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        {profile.status}
                      </span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-slate-900">
                      Hi! I'm <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 animate-gradient-x">
                        {profile.name}
                      </span>
                    </h1>
                    <div className="text-xl md:text-2xl font-light text-slate-500">
                      I'm a <span ref={typedEl} className="text-purple-600 font-bold border-b-2 border-purple-200 pb-1"></span>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-lg border-l-4 border-purple-100 pl-6">
                      {profile.bio}
                    </p>
                    <div className="flex gap-4 pt-4">
                      <a href={profile.social.linkedin} target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-100 text-[#0077b5] hover:bg-[#0077b5] hover:text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                        <i className="fab fa-linkedin-in text-xl"></i>
                      </a>
                      <a href={profile.social.github} target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-100 text-[#333] hover:bg-[#333] hover:text-white hover:shadow-lg hover:shadow-slate-500/30 transition-all">
                        <i className="fab fa-github text-xl"></i>
                      </a>
                      <a href={`mailto:${profile.email}`} className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-100 text-[#ea4335] hover:bg-[#ea4335] hover:text-white hover:shadow-lg hover:shadow-red-500/30 transition-all">
                        <i className="fas fa-envelope text-xl"></i>
                      </a>
                    </div>
                  </div>
                  <div className="relative hidden lg:block h-[500px] max-w-md mx-auto w-full" data-aos="fade-left">
                    <div className="absolute inset-0 bg-slate-50 rounded-t-full border border-slate-100 overflow-hidden group shadow-2xl shadow-purple-500/20">
                      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
                      <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-4000"></div>
                      <img
                        src={profile.img}
                        alt={profile.name}
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => { e.target.style.display = 'none' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 text-center text-white p-6">
                        <p className="font-bold text-sm uppercase tracking-widest bg-white/10 backdrop-blur-md inline-block px-4 py-2 rounded-full border border-white/20 shadow-lg">
                          {profile.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="skills" className="bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                  <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-blob"></div>
                  <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
                </div>
                <div className="max-w-[1400px] mx-auto px-6 py-20 relative z-10">
                  <div className="text-center mb-20" data-aos="fade-up">
                    <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">Tech Stack</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {Object.entries(categories).map(([catName, catSkills], idx) => (
                      <div key={catName} className="flex flex-col items-center">
                        <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold uppercase tracking-[0.2em] mb-8 text-sm">{catName}</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                          {skills.filter(s => catSkills.includes(s.name)).map((tech, i) => (
                            <div
                              key={i}
                              className={`group/icon relative flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm transition-all duration-300 cursor-default hover:-translate-y-2 hover:bg-slate-900 ${idx === 0 ? 'animate-float-slow' : idx === 1 ? 'animate-float-medium' : 'animate-float-fast'}`}
                              style={{ animationDelay: `${i * 0.15}s`, '--glow-color': tech.color }}
                            >
                              <div className="absolute inset-0 rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300" style={{ boxShadow: '0 0 20px var(--glow-color)', border: '1px solid var(--glow-color)' }}></div>
                              <div className={`w-8 h-8 flex items-center justify-center rounded-md relative z-10 ${tech.bg ? 'bg-white p-1' : ''}`}>
                                <img src={tech.img} alt={tech.name} className="w-full h-full object-contain" />
                              </div>
                              <span className="font-bold text-sm text-slate-300 group-hover/icon:text-white relative z-10 transition-colors">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="max-w-[1200px] mx-auto px-6 border-x border-slate-100">
                <About />
              </div>

              <div id="projects" className="bg-white-50 relative overflow-hidden border-y border-slate-200">
                <div className="absolute inset-0 bg-gradient-to-b from-sky-20 via-sky-50 to-sky-100 z-0"></div>
                <div className="max-w-[1200px] mx-auto px-6 py-20 relative z-10">
                  <Projects />
                </div>
              </div>

              <div className="max-w-[1200px] mx-auto px-6 border-x border-slate-100">
                <Contact />
              </div>
            </main>
          } />

          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>

        <Footer />

        <style>{`
          @keyframes gradient-x {
            0%, 100% { background-size: 200% 200%; background-position: left center; }
            50% { background-size: 200% 200%; background-position: right center; }
          }
          .animate-gradient-x { animation: gradient-x 15s ease infinite; }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float-slow { animation: float 7s ease-in-out infinite; }
          .animate-float-medium { animation: float 6s ease-in-out infinite; }
          .animate-float-fast { animation: float 5s ease-in-out infinite; }
          .group\\/icon:hover { animation-play-state: paused; }
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob { animation: blob 10s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}</style>
      </div>
    </Router>
  );
};

export default App;