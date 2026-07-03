import React from 'react';
import { PROFILE } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer className={`mt-20 border-t py-12 text-center text-xs text-slate-500 relative z-10 print:hidden ${darkMode ? 'border-slate-900 bg-slate-950' : 'border-slate-200 bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex justify-center gap-6 mb-4">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition-colors">GitHub</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition-colors">LinkedIn</a>
          <a href={`mailto:${PROFILE.email}`} className="hover:text-indigo-500 transition-colors">Email</a>
        </div>
        <p>© {new Date().getFullYear()} Goutam Varma. Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};