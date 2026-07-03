import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Contact = () => {
  const { darkMode } = useTheme();
  const [contactForm, setContactForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setFormSent(true);
    setTimeout(() => {
      setContactForm({ name: "", email: "", subject: "", message: "" });
      setFormSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 print:hidden">
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Get In Touch</h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'}`}>
            <h3 className="text-xl font-bold mb-6">Contact Channels</h3>
            <div className="space-y-5">
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-800/30 transition-colors">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl"><Mail size={18} /></div>
                <div><span className="text-xs text-slate-500 font-bold block">EMAIL ADDRESS</span><span className="text-sm font-semibold">{PROFILE.email}</span></div>
              </a>
              <a href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-800/30 transition-colors">
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl"><Phone size={18} /></div>
                <div><span className="text-xs text-slate-500 font-bold block">MOBILE PHONE</span><span className="text-sm font-semibold">{PROFILE.phone}</span></div>
              </a>
              <div className="flex items-center gap-4 p-3 rounded-xl">
                <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl"><MapPin size={18} /></div>
                <div><span className="text-xs text-slate-500 font-bold block">OFFICE LOCATION</span><span className="text-sm font-semibold">{PROFILE.location}</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className={`p-6 sm:p-8 rounded-2xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'}`}>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" required value={contactForm.name} onChange={(e) => setContactForm({...contactForm, name: e.target.value})} className={`w-full px-4 py-3 rounded-xl border outline-none text-sm ${darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'}`} placeholder="Your Name" />
                <input type="email" required value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.target.value})} className={`w-full px-4 py-3 rounded-xl border outline-none text-sm ${darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'}`} placeholder="Your Email" />
              </div>
              <textarea rows={4} required value={contactForm.message} onChange={(e) => setContactForm({...contactForm, message: e.target.value})} className={`w-full px-4 py-3 rounded-xl border outline-none text-sm ${darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'}`} placeholder="Message contents..." />
              <button type="submit" disabled={formSent} className={`w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 ${formSent ? 'bg-emerald-600 text-white' : 'bg-indigo-600 text-white'}`}>
                {formSent ? <><CheckCircle2 size={18} /><span>Message Transmitted!</span></> : <><Send size={18} /><span>Transmit Message</span></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};