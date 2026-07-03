import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Skills = () => {
  const { darkMode } = useTheme();
  const [skillsFilter, setSkillsFilter] = useState("all");

  const filteredSkills = SKILLS.filter(skill => skillsFilter === "all" ? true : skill.category === skillsFilter);

  const filters = [
    { id: "all", label: "All Skills" },
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend UI" },
    { id: "backend", label: "Backend API" },
    { id: "databases", label: "Databases" },
    { id: "tools", label: "Developer Tools" }
  ];

  return (
    <section id="skills" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 print:hidden">
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Technical Mastery</h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-2.5 mb-10">
        {filters.map(tab => (
          <button
            key={tab.id}
            onClick={() => setSkillsFilter(tab.id)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${skillsFilter === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg' : darkMode ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white' : 'bg-white border-slate-200 text-slate-600'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredSkills.map((skill, index) => (
          <div key={index} className={`p-5 rounded-2xl border flex flex-col justify-between group transition-all duration-300 hover:scale-[1.02] ${darkMode ? 'bg-slate-900/40 border-slate-800 hover:bg-slate-900' : 'bg-white border-slate-200 hover:shadow-md'}`}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400">{skill.category.toUpperCase()}</span>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">{skill.name}</h4>
              <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-slate-500">Expertise</span>
                <span className="text-xs font-mono font-bold text-slate-400">{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};