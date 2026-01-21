import React from 'react';
import { profile } from '../data/Profile';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-6 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-blue-500/5 rounded-full blur-[50px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        
        <p className="text-slate-500 text-sm font-light tracking-wide">
          © {new Date().getFullYear()} <span className="font-bold text-slate-200 hover:text-blue-400 transition-colors cursor-default">{profile.name}</span>. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;