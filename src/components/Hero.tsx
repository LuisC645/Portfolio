import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  isDarkMode?: boolean;
  language: 'en' | 'es'; // Propiedad de idioma agregada
}

export default function Hero({ isDarkMode = false, language }: HeroProps) {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const backgroundStyles = isDarkMode
    ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800'
    : 'bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600';

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center ${backgroundStyles} text-white relative`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6 animate-fade-in">
          
          <h1 className="text-4xl md:text-6xl tracking-tight">
            <span className="font-extrabold text-cyan-200">Luis</span>{' '}
            <span className="font-light text-white/100">Andrés</span>{' '}
            <span className="font-extrabold text-cyan-200">Castillo</span>
          </h1>

          <div className="space-y-4 pt-2">
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {language === 'en' ? (
                <>
                  👋 Hi! I'm Luis Andrés, an Electronic Engineering student and Researcher. I specialize in <span className="font-semibold text-white">data analysis, machine learning, and full-stack development</span>. I build everything from predictive models to scalable, automated web applications. 🚀
                </>
              ) : (
                <>
                  👋 ¡Hola! Soy Luis Andrés, estudiante de Ingeniería Electrónica e investigador. Me especializo en <span className="font-semibold text-white">análisis de datos, machine learning y desarrollo full-stack</span>. Creo desde modelos predictivos hasta aplicaciones web escalables y automatizadas. 🚀
                </>
              )}
            </p>
          </div>

          <div className="w-[220px] h-[2px] bg-cyan-200/40 mx-auto rounded-full my-8"></div>
          
          <div className="flex justify-center gap-6 pt-2">
            <a
              href="https://github.com/LuisC645"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all transform hover:scale-110 hover:text-cyan-200"
            >
              <Github size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-castillo-chicaiza-326221181/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all transform hover:scale-110 hover:text-cyan-200"
            >
              <Linkedin size={26} />
            </a>
            <a
              href="mailto:luisandres645@gmail.com"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all transform hover:scale-110 hover:text-cyan-200"
            >
              <Mail size={26} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="animate-bounce p-2 hover:text-cyan-200 transition-colors"
        >
          <ChevronDown size={36} />
        </button>
      </div>
    </section>
  );
}