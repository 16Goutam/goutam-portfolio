import React, { useState } from 'react';
import { Sun, Moon, Printer, Mail, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Header = ({ scrollToSection }) => {
  const { darkMode, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-all ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-200'} print:hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('hero')}>
          <span className="p-2 bg-gradient-to-tr from-indigo-600 to-emerald-500 rounded-lg text-white font-bold tracking-tight shadow-md">GV</span>
          <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-indigo-500 to-emerald-400 bg-clip-text text-transparent">Goutam Varma</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          {['about', 'skills', 'experience', 'projects', 'certifications', 'contact'].map((sec) => (
            <button key={sec} onClick={() => handleNavClick(sec)} className="hover:text-indigo-500 capitalize transition-colors">
              {sec === 'experience' ? 'Journey' : sec === 'certifications' ? 'Credentials' : sec}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className={`p-2 rounded-lg border transition-all ${darkMode ? 'bg-slate-900 border-slate-800 text-amber-400' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button onClick={() => window.print()} className="p-2 rounded-lg border bg-emerald-600/10 border-emerald-500/30 text-emerald-500 hover:bg-emerald-600 hover:text-white transition-all hidden sm:flex items-center gap-1.5 text-sm font-semibold">
            <Printer size={16} /><span>Resume PDF</span>
          </button>

          <button onClick={() => handleNavClick('contact')} className="p-2 px-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all flex items-center gap-1 text-sm font-semibold">
            <Mail size={16} /><span>Hire Me</span>
          </button>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg text-slate-400">
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden absolute top-16 left-0 w-full border-b p-4 flex flex-col gap-3 font-semibold ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
          {['about', 'skills', 'experience', 'projects', 'certifications', 'contact'].map((sec) => (
            <button key={sec} onClick={() => handleNavClick(sec)} className="text-left py-2 px-3 rounded hover:bg-indigo-600/10 text-slate-400 hover:text-indigo-500 capitalize transition-all">
              {sec}
            </button>
          ))}
          <button onClick={() => window.print()} className="w-full py-2.5 rounded bg-emerald-600 text-white flex items-center justify-center gap-2">
            <Printer size={18} /> Print ATS Resume
          </button>
        </div>
      )}
    </header>
  );
};