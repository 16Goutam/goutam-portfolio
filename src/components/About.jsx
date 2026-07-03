import React from 'react';
import { Code, Sparkles, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const About = () => {
  const { darkMode } = useTheme();

  const metrics = [
    { title: "Technical Rigor", icon: <Code size={24} />, color: "text-indigo-400", bg: "bg-indigo-500/10", desc: "Equipped with robust analytical logic honed through engineering studies at MITE. Enjoys diving deep into complex Object-Oriented paradigms (Java & Python) and designing secure, optimized database frameworks." },
    { title: "AI-Driven Innovations", icon: <Sparkles size={24} />, color: "text-emerald-400", bg: "bg-emerald-500/10", desc: "Deep interest in advanced Artificial Intelligence concepts. Specialized through hands-on neural network implementations, Computer Vision datasets, NLP translations, and Microsoft's prestigious AI Foundations program." },
    { title: "Artistic Precision", icon: <Palette size={24} />, color: "text-purple-400", bg: "bg-purple-500/10", desc: "An active painter whose creative eye transfers into clean, human-friendly UI design. Merges front-end utility (React & Bootstrap) with highly aesthetic styling to elevate standard user journeys." }
  ];

  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 print:hidden">
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">About Me</h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((m, idx) => (
          <div key={idx} className={`p-6 rounded-2xl border transition-all ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:shadow-lg'}`}>
            <div className={`p-3 ${m.bg} ${m.color} w-12 h-12 rounded-xl flex items-center justify-center mb-5`}>
              {m.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{m.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};