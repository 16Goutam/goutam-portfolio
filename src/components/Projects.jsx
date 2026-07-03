import React, { useState } from 'react';
import { Terminal, Briefcase, ChevronRight, X, CheckCircle2, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Projects = () => {
  const { darkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);// Make sure this is lowercase "Github" inside src/components/Projects.jsx

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 print:hidden">
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Technical Projects</h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <div key={idx} onClick={() => setSelectedProject(project)} className={`p-6 rounded-2xl border flex flex-col justify-between cursor-pointer group transition-all duration-300 hover:scale-[1.01] ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 hover:shadow-md'}`}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg">{idx === 0 ? <Terminal size={22} /> : <Briefcase size={22} />}</span>
                <span className="text-xs text-slate-500 font-bold">{project.team}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
              <p className="text-sm text-slate-400 mb-6">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-800/80 text-slate-300">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between text-xs font-semibold text-indigo-400">
              <span>View System Specifications</span><ChevronRight size={16} />
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className={`w-full max-w-3xl rounded-2xl border max-h-[90vh] overflow-y-auto ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} p-6 space-y-6`}>
            <div className="flex items-center justify-between border-b pb-4 border-slate-800">
              <h3 className="text-2xl font-bold text-indigo-400">{selectedProject.title}</h3>
              <button onClick={() => setSelectedProject(null)} className="p-1.5 rounded-lg hover:bg-slate-800"><X size={20} /></button>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{selectedProject.longDesc}</p>
            <div className="space-y-2">
              {selectedProject.highlights.map((h, i) => (
                <div key={i} className="flex gap-3 items-start text-sm text-slate-300"><CheckCircle2 size={16} className="text-emerald-500 mt-1" /><span>{h}</span></div>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <a href={selectedProject.mockLink} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm flex items-center gap-2">
                <Github size={16} /><span>Explore Repository</span><ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};