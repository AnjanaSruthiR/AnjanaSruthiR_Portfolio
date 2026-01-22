import React, { useState } from 'react';
import { profile } from '../data/Profile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl px-2">
      <nav className="relative w-full bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-full px-6 py-3 flex items-center justify-between transition-all hover:bg-white/95">

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-full transition-colors focus:outline-none"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
          )}
        </button>

        <div className="hidden md:flex gap-5">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-bold text-slate-500 hover:text-black uppercase tracking-wide transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="w-px h-4 bg-slate-300 hidden md:block"></div>
          <a
            href="https://drive.google.com/file/d/1vpippwmpD3VOb5BxocZjT4XQ09_Yd0Yk/view?usp=sharing"
            target="_blank"
            className="bg-black text-white text-[10px] md:text-xs font-bold px-5 py-2.5 rounded-full hover:bg-slate-800 transition-transform hover:scale-105 shadow-lg shadow-slate-900/20 whitespace-nowrap"
          >
            RESUME
          </a>
        </div>
      </nav>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-3 px-2 md:hidden">
          <div className="bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-2 flex flex-col animate-fade-in-down">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-700 font-semibold text-sm py-3 px-4 rounded-xl hover:bg-slate-100 transition-colors flex justify-between items-center"
              >
                {item.name}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-slate-300"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;