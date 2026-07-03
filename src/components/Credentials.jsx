import React from 'react';
import { Award } from 'lucide-react';
import { CERTIFICATIONS, HOBBIES } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Credentials = () => {
  const { darkMode } = useTheme();

  return (
    <section id="certifications" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 print:hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-extrabold">Professional Credentials</h2>
            <div className="w-12 h-1 bg-indigo-500 rounded-full mt-2"></div>
          </div>
          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className={`p-4 rounded-xl border flex items-center gap-4 ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg"><Award size={20} /></div>
                <div>
                  <h4 className="font-bold text-base">{cert.title}</h4>
                  <p className="text-xs text-slate-500">Authorized by {cert.issuer} • {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-extrabold">Creative Core</h2>
            <div className="w-12 h-1 bg-purple-500 rounded-full mt-2"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {HOBBIES.map((h, idx) => (
              <div key={idx} className={`p-5 rounded-xl border flex flex-col justify-between ${darkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="text-3xl mb-4">{h.icon}</div>
                <div>
                  <h4 className="font-bold text-md mb-1">{h.title}</h4>
                  <p className="text-xs text-slate-500">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};