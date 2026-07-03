import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { EXPERIENCES, EDUCATION } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Journey = () => {
  const { darkMode } = useTheme();
  const [timelineFilter, setTimelineFilter] = useState("all");

  const combinedTimeline = [
    ...EXPERIENCES.map(item => ({ ...item, section: "experience" })),
    ...EDUCATION.map(item => ({ ...item, section: "education" }))
  ].sort((a, b) => {
    const getYear = (str) => {
      const match = str.match(/\b(202\d)\b/);
      return match ? parseInt(match[0]) : 2020;
    };
    return getYear(b.duration) - getYear(a.duration);
  });

  const filteredTimeline = combinedTimeline.filter(item => timelineFilter === "all" ? true : item.section === timelineFilter);

  return (
    <section id="experience" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 print:hidden">
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Interactive Journey</h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
      </div>

      <div className="flex justify-center gap-2 mb-10">
        {['all', 'experience', 'education'].map((filter) => (
          <button key={filter} onClick={() => setTimelineFilter(filter)} className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${timelineFilter === filter ? 'bg-indigo-600 text-white' : darkMode ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-white border-slate-200'}`}>
            {filter === 'all' ? 'All Milestones' : filter === 'experience' ? 'Work & Internships' : 'Education History'}
          </button>
        ))}
      </div>

      <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
        {filteredTimeline.map((item, idx) => (
          <div key={idx} className="relative pl-8 group">
            <div className={`absolute left-0 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full border-4 ${item.section === 'experience' ? 'bg-emerald-500' : 'bg-indigo-500'} border-slate-950`} />
            <div className="hidden md:block absolute left-[-150px] top-1 w-28 text-right font-semibold text-xs text-slate-500">{item.duration}</div>
            <div className={`p-6 rounded-2xl border transition-all hover:translate-x-1 ${darkMode ? 'bg-slate-900/55 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="block md:hidden mb-2 font-mono text-xs font-semibold text-indigo-400">{item.duration}</div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold">{item.role || item.degree}</h3>
                  <p className="text-sm text-indigo-400 font-semibold">{item.company || item.institution}</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <MapPin size={14} /><span>{item.location}</span>
                </div>
              </div>
              {item.metric && <div className="inline-block px-3 py-1 text-xs font-extrabold rounded bg-indigo-500/10 text-indigo-400 mb-2">{item.metric}</div>}
              {item.bullets && (
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-400">
                  {item.bullets.map((b, bIdx) => <li key={bIdx}>{b}</li>)}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};