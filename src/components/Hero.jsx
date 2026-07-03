import React from 'react';
import { PROFILE } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <section id="hero" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:py-28 flex flex-col md:flex-row items-center gap-12 z-10 print:hidden">
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          <span className="text-indigo-400 animate-spin">✨</span>
          <span>Open for Job Roles & Internships</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none">
          Hi, I am <br />
          <span className="bg-gradient-to-r from-indigo-500 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            {PROFILE.name}
          </span>
        </h1>

        <p className="text-xl sm:text-2xl font-medium text-slate-400">Computer Science Graduate & Full-Stack Engineer</p>
        <p className={`max-w-2xl text-base sm:text-lg leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          {PROFILE.summary}
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          {/* GitHub Inline SVG */}
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-indigo-600 hover:text-white transition-all text-sm font-semibold text-slate-300">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <span>GitHub</span>
          </a>

          {/* LinkedIn Inline SVG */}
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-indigo-600 hover:text-white transition-all text-sm font-semibold text-slate-300">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span>LinkedIn</span>
          </a>

          {/* Email Inline SVG */}
          <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-indigo-600 hover:text-white transition-all text-sm font-semibold text-slate-300">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>Email Me</span>
          </a>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-4">
          <button onClick={() => window.print()} className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-lg flex items-center justify-center gap-2 text-md transition-all hover:scale-[1.02]">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
            Download Resume PDF
          </button>
        </div>
      </div>

      <div className="w-full md:w-[420px] relative z-10">
        <div className="p-1 rounded-2xl bg-gradient-to-tr from-indigo-500/40 via-purple-500/30 to-emerald-500/40 shadow-2xl">
          <div className={`rounded-xl p-6 flex flex-col gap-5 ${darkMode ? 'bg-slate-900 text-slate-200' : 'bg-white text-slate-800'}`}>
            <div className="flex items-center justify-between border-b pb-4 border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs font-mono text-slate-500">portfolio_engine.sh</div>
            </div>
            <div className="font-mono text-xs sm:text-sm space-y-2">
              <p className="text-indigo-400"># systemctl status goutamvarma</p>
              <p className="text-emerald-400">● active (running)</p>
              <p className="text-slate-400">Location: {PROFILE.location}</p>
              <p className="text-indigo-400"># explore --status</p>
              <p className="text-emerald-400">Status: Actively Interviewing 🚀</p>
            </div>
            <div className={`p-4 rounded-xl border text-xs leading-relaxed ${darkMode ? 'bg-slate-950 border-slate-800 text-indigo-300' : 'bg-slate-50 border-slate-200 text-indigo-700'}`}>
              <div className="flex gap-2 font-bold mb-1 items-center">
                <span>💼</span>
                <span>Available for Full Stack Roles</span>
              </div>
              Open to relocation, remote tasks, and software development positions globally.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};