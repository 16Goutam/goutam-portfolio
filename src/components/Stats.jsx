import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const Stats = () => {
  const { darkMode } = useTheme();

  return (
    <section className={`py-8 border-y max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 print:hidden ${darkMode ? 'border-slate-900 bg-slate-950/40' : 'border-slate-200 bg-white/40'}`}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {[
          { metric: "4+", label: "Valuable Internships", color: "text-indigo-500" },
          { metric: "7.8", label: "B.E. Computer Science CGPA", color: "text-emerald-500" },
          { metric: "10+", label: "Technologies Handled", color: "text-purple-500" },
          { metric: "1.2s", label: "Gesture Translation Latency", color: "text-sky-500" }
        ].map((stat, i) => (
          <div key={i}>
            <div className={`text-3xl sm:text-4xl font-extrabold ${stat.color}`}>{stat.metric}</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};