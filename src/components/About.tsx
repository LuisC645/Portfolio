import { Cpu, Code, Brain } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface AboutProps {
  isDarkMode?: boolean;
  language: 'en' | 'es';
}

export default function About({ isDarkMode = false, language }: AboutProps) {
  const personalPhotoUrl = "../assets/profile.jpeg";

  // Variantes para las tarjetas superiores (Efecto escalonado)
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Variantes para la imagen (Entrada desde la izquierda)
  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Variantes para el texto (Entrada desde la derecha)
  const textVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section id="about" className={`py-20 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
        >
          {language === 'en' ? 'About Me' : 'Sobre Mí'}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Cpu size={32} />,
              title: language === 'en' ? 'Hardware Design' : 'Diseño de Hardware',
              desc: language === 'en' 
                ? 'Electronic engineering expertise focusing on embedded systems and circuit optimization.'
                : 'Experiencia en ingeniería electrónica centrada en sistemas embebidos y optimización de circuitos.',
              color: 'blue'
            },
            {
              icon: <Code size={32} />,
              title: language === 'en' ? 'Full-Stack Development' : 'Desarrollo Full-Stack',
              desc: language === 'en'
                ? 'Building scalable web architectures and automating processes with modern tech stacks.'
                : 'Creación de arquitecturas web escalables y automatización de procesos con tecnologías modernas.',
              color: 'cyan'
            },
            {
              icon: <Brain size={32} />,
              title: language === 'en' ? 'Data Science' : 'Ciencia de Datos',
              desc: language === 'en'
                ? 'Advanced research in pattern recognition, deep learning, and predictive modeling.'
                : 'Investigación avanzada en reconocimiento de patrones, deep learning y modelado predictivo.',
              color: 'teal'
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className={`text-center p-6 rounded-lg ${
                item.color === 'blue' ? (isDarkMode ? 'dark bg-blue-900/30' : 'bg-blue-50') :
                item.color === 'cyan' ? (isDarkMode ? 'dark bg-cyan-900/30' : 'bg-cyan-50') :
                (isDarkMode ? 'dark bg-teal-900/30' : 'bg-teal-50')
              }`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 text-white ${
                item.color === 'blue' ? 'bg-blue-600' :
                item.color === 'cyan' ? 'bg-cyan-600' :
                'bg-teal-600'
              }`}>
                {item.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {item.title}
              </h3>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
            className="md:col-span-4 flex justify-center"
          >
            <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 ${isDarkMode ? 'border-gray-800' : 'border-gray-100'} shadow-xl`}>
              <img
                src={personalPhotoUrl}
                alt="Luis Andrés Castillo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className={`absolute inset-0 opacity-10 rounded-full ${isDarkMode ? 'bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-800' : 'bg-gradient-to-tr from-cyan-600 via-blue-700 to-blue-600'}`}></div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
            className="md:col-span-8 text-left space-y-4"
          >
            <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className={`text-xl font-bold block mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {language === 'en' ? "Hi, I'm Luis Andrés Castillo." : "Hola, soy Luis Andrés Castillo."}
              </span>
              {language === 'en' ? (
                <>
                  I specialize in bridging hardware engineering and digital innovation. My expertise lies in <span className={`font-semibold ${isDarkMode ? 'text-cyan-200' : 'text-blue-600'}`}>data analysis, machine learning, and full-stack development</span>, building predictive models and scalable applications that solve complex problems.
                </>
              ) : (
                <>
                  Me especializo en conectar la ingeniería de hardware con la innovación digital. Mi experiencia se centra en <span className={`font-semibold ${isDarkMode ? 'text-cyan-200' : 'text-blue-600'}`}>análisis de datos, machine learning y desarrollo full-stack</span>, construyendo modelos predictivos y aplicaciones escalables que resuelven problemas complejos.
                </>
              )}
            </p>
            
            <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {language === 'en' ? (
                <>
                  Combining my academic background with hands-on research and freelance projects, I've applied my skills in both operational automation and neuroengineering. As a <span className={`font-semibold ${isDarkMode ? 'text-cyan-200' : 'text-blue-600'}`}>Researcher</span> at the GITA group, I developed biomarkers for neurodegenerative diseases and published research on Parkinson's detection using deep learning (Springer, 2025). I am completing my B.Sc. in Electronic Engineering at the University of Antioquia, designing end-to-end solutions from data extraction to robust web architecture.
                </>
              ) : (
                <>
                  Combinando mi formación académica con investigación práctica y proyectos freelance, he aplicado mis habilidades tanto en automatización operativa como en neuroingeniería. Como <span className={`font-semibold ${isDarkMode ? 'text-cyan-200' : 'text-blue-600'}`}>Investigador</span> en el grupo GITA, desarrollé biomarcadores para enfermedades neurodegenerativas y fui el autor principal de una investigación publicada sobre detección del Parkinson mediante deep learning (Springer, 2025). Estoy culminando mi pregrado en Ingeniería Electrónica en la Universidad de Antioquia, diseñando soluciones integrales desde la extracción de datos hasta arquitecturas web robustas.
                </>
              )}
            </p>
            
            <p className={`text-base leading-relaxed font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              {language === 'en' 
                ? "Whether you need predictive ML models, scalable web platforms, or data-driven research solutions, I'm here to help."
                : "Si buscas modelos predictivos de ML, plataformas web escalables o soluciones de investigación basadas en datos, estoy aquí para ayudarte."}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}