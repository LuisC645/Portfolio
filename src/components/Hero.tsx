import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface HeroProps {
  isDarkMode?: boolean;
  language: 'en' | 'es';
}

export default function Hero({ isDarkMode = false, language }: HeroProps) {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const backgroundStyles = isDarkMode
    ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800'
    : 'bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600';

  // Tipado explícito de Variants para evitar errores de TypeScript
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center ${backgroundStyles} text-white relative overflow-hidden`}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-6">
          
          <motion.h1 
            className="text-4xl md:text-6xl tracking-tight"
            variants={itemVariants}
          >
            <span className="font-extrabold text-cyan-200">Luis</span>{' '}
            <span className="font-light text-white/100">Andrés</span>{' '}
            <span className="font-extrabold text-cyan-200">Castillo</span>
          </motion.h1>

          <motion.div 
            className="space-y-4 pt-2"
            variants={itemVariants}
          >
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
          </motion.div>

          <motion.div 
            className="w-[220px] h-[2px] bg-cyan-200/40 mx-auto rounded-full my-8"
            variants={itemVariants}
          ></motion.div>
          
          <motion.div 
            className="flex justify-center gap-6 pt-2"
            variants={itemVariants}
          >
            <a
              href="https://github.com/LuisC645"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all transform hover:scale-110 hover:text-cyan-200"
              title="GitHub"
            >
              <Github size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-castillo-chicaiza-326221181/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all transform hover:scale-110 hover:text-cyan-200"
              title="LinkedIn"
            >
              <Linkedin size={26} />
            </a>
            <a
              href="mailto:luisandres645@gmail.com"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all transform hover:scale-110 hover:text-cyan-200"
              title="Email"
            >
              <Mail size={26} />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Flecha hacia abajo con animación infinita */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.button
          onClick={scrollToAbout}
          className="p-2 hover:text-cyan-200 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={36} />
        </motion.button>
      </motion.div>

      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className={`absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${isDarkMode ? 'bg-blue-900' : 'bg-white'}`}></div>
        <div className={`absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${isDarkMode ? 'bg-cyan-900' : 'bg-white'}`}></div>
      </div>
    </section>
  );
}