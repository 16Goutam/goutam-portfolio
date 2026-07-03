import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Journey } from './components/Journey';
import { Projects } from './components/Projects';
import { Credentials } from './components/Credentials';
import { Contact } from './components/Contact';
import { PrintResume } from './components/PrintResume';
import { Footer } from './components/Footer';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const MainLayout = () => {
  const { darkMode } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'} min-h-screen transition-colors duration-300 font-sans relative pb-12 overflow-x-hidden`}>
      {/* Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden pointer-events-none z-0">
        <div className={`absolute top-[-20%] left-[-10%] w-[60%] h-[70%] rounded-full filter blur-[120px] opacity-20 ${darkMode ? 'bg-indigo-600' : 'bg-indigo-400'}`}></div>
        <div className={`absolute top-[10%] right-[-5%] w-[40%] h-[60%] rounded-full filter blur-[120px] opacity-25 ${darkMode ? 'bg-emerald-600' : 'bg-emerald-400'}`}></div>
      </div>

      <Header scrollToSection={scrollToSection} />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Journey />
      <Projects />
      <Credentials />
      <Contact />
      <Footer />
      <PrintResume />

      {showScrollTop && (
        <button onClick={() => scrollToSection('hero')} className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-indigo-600 text-white shadow-xl transition-all hover:scale-110 print:hidden">
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}