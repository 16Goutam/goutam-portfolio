import React from 'react';
import { PROFILE, EDUCATION, SKILLS, EXPERIENCES, PROJECTS, CERTIFICATIONS } from '../data/portfolioData';

export const PrintResume = () => {
  return (
    <div className="hidden print:block text-slate-950 bg-white p-6 max-w-[8.5in] mx-auto font-sans">
      <div className="border-b-4 border-slate-900 pb-4 mb-4 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-extrabold uppercase tracking-tight text-slate-900">{PROFILE.name}</h1>
          <p className="text-sm font-semibold text-slate-700 mt-1 uppercase tracking-wide">{PROFILE.title}</p>
        </div>
        <div className="text-right text-[11px] text-slate-700 space-y-0.5">
          <p>{PROFILE.email} • {PROFILE.phone}</p>
          <p>{PROFILE.location}</p>
          <p className="text-[10px] font-mono">github.com/16Goutam • linkedin.com/in/goutam-varma16</p>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-slate-400 pb-1 mb-2">Professional Summary</h2>
        <p className="text-[11px] leading-relaxed text-justify">{PROFILE.summary}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-slate-400 pb-1 mb-2">Education</h2>
        {EDUCATION.map((edu, idx) => (
          <div key={idx} className="flex justify-between text-[11px] mb-1">
            <div><span className="font-bold">{edu.degree}</span> - {edu.institution}</div>
            <div className="text-right font-semibold">{edu.duration} ({edu.metric})</div>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-slate-400 pb-1 mb-2">Technical Capabilities</h2>
        <p className="text-[11px]">{SKILLS.map(s => s.name).join(', ')}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-slate-400 pb-1 mb-2">Experience & Internships</h2>
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="text-[11px] mb-3">
            <div className="flex justify-between font-bold"><span>{exp.role}</span><span>{exp.duration}</span></div>
            <div className="text-slate-700 font-medium">{exp.company} — {exp.location}</div>
            <ul className="list-disc pl-4 text-[10.5px]">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-slate-400 pb-1 mb-2">Core Technical Work</h2>
        {PROJECTS.map((proj, idx) => (
          <div key={idx} className="text-[11px] mb-2">
            <div className="flex justify-between font-bold"><span>{proj.title}</span><span>{proj.team}</span></div>
            <p className="text-[10.5px] text-justify">{proj.longDesc}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-slate-400 pb-1 mb-2">Certifications</h2>
        <ul className="list-disc pl-4 text-[11px]">
          {CERTIFICATIONS.map((c, i) => <li key={i}><span className="font-bold">{c.title}</span> — {c.issuer} ({c.year})</li>)}
        </ul>
      </div>
    </div>
  );
};