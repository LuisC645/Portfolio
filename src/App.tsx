import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  // Estado del idioma (por defecto en inglés)
  const [language, setLanguage] = useState<'en' | 'es'>(() => {
    const saved = localStorage.getItem('language');
    return (saved as 'en' | 'es') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Navigation 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={toggleDarkMode} 
        language={language}
        onToggleLanguage={toggleLanguage}
      />
      <Hero isDarkMode={isDarkMode} language={language} />
      <About isDarkMode={isDarkMode} language={language} />
      <Skills isDarkMode={isDarkMode} language={language} />
      <Projects isDarkMode={isDarkMode} language={language} />
      <Publications isDarkMode={isDarkMode} language={language} />
      <Experience isDarkMode={isDarkMode} language={language} />
      <Contact isDarkMode={isDarkMode} language={language} />
    </div>
  );
}

export default App;