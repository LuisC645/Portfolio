import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';

interface NavigationProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  language: 'en' | 'es'; // Añadimos el estado del idioma
  onToggleLanguage: () => void; // Añadimos la función para cambiarlo
}

export default function Navigation({ isDarkMode, onToggleDarkMode, language, onToggleLanguage }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Diccionario de navegación dependiente del idioma
  const navItems = {
    en: [
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Publications', href: '#publications' },
      { label: 'Experience', href: '#experience' },
      { label: 'Contact', href: '#contact' },
    ],
    es: [
      { label: 'Sobre Mí', href: '#about' },
      { label: 'Habilidades', href: '#skills' },
      { label: 'Proyectos', href: '#projects' },
      { label: 'Publicaciones', href: '#publications' },
      { label: 'Experiencia', href: '#experience' },
      { label: 'Contacto', href: '#contact' },
    ]
  };

  const currentNavItems = navItems[language] || navItems.en;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const bgClass = isScrolled
    ? isDarkMode
      ? 'bg-gray-900 shadow-md'
      : 'bg-white shadow-md'
    : 'bg-transparent';

  const textColorClass = isScrolled
    ? isDarkMode
      ? 'text-gray-100'
      : 'text-gray-900'
    : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('#hero')}
            className={`text-xl font-bold transition-colors ${textColorClass}`}
          >
            Portfolio
          </button>

          {/* MENÚ DE ESCRITORIO */}
          <div className="hidden md:flex space-x-6 items-center">
            {currentNavItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors font-medium hover:text-cyan-500 ${
                  isScrolled
                    ? isDarkMode
                      ? 'text-gray-300'
                      : 'text-gray-700'
                    : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Contenedor de botones de acción (Idioma y Tema) */}
            <div className="flex items-center gap-2 pl-4 border-l border-gray-400/30">
              <button
                onClick={onToggleLanguage}
                className={`flex items-center gap-1.5 p-2 rounded-lg transition-all font-bold text-sm ${
                  isDarkMode
                    ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
                }`}
                title="Cambiar idioma"
              >
                <Globe size={18} />
                <span>{language.toUpperCase()}</span>
              </button>
              
              <button
                onClick={onToggleDarkMode}
                className={`p-2 rounded-lg transition-all ${
                  isDarkMode
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                title="Cambiar tema"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* MENÚ MÓVIL (Botones superiores) */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onToggleLanguage}
              className={`flex items-center gap-1 p-2 rounded-lg transition-all font-bold text-xs ${
                isDarkMode
                  ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
              }`}
            >
              <Globe size={16} />
              <span>{language.toUpperCase()}</span>
            </button>
            
            <button
              onClick={onToggleDarkMode}
              className={`p-2 rounded-lg transition-all ${
                isDarkMode
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={textColorClass}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isMobileMenuOpen && (
        <div className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="px-4 py-2 space-y-2">
            {currentNavItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left font-medium px-4 py-3 rounded transition-colors ${
                  isDarkMode
                    ? 'text-gray-300 hover:bg-gray-700 hover:text-cyan-400'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}