import { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// --- MACROS / CONSTANTES (Datos que no cambian por idioma) ---
const GITHUB_BASE = 'https://github.com/LuisC645';

const PROJECT_ASSETS = {
  emotion: {
    category: 'Data Science',
    tags: ['Python', 'Machine Learning', 'SVM', 'PCA'],
    image: './img/SVM.webp',
    githubUrl: GITHUB_BASE + '/High-Low_Emotions',
  },
  video: {
    category: 'Data Science',
    tags: ['Computer Vision', 'MediaPipe', 'Python'],
    image: './img/face.webp',
    githubUrl: GITHUB_BASE + '/video-processing',
  },
  gps: {
    category: 'Hardware',
    tags: ['Embedded Systems', 'Raspberry Pi', 'C/C++'],
    image: './img/gps.webp',
    githubUrl: GITHUB_BASE + '/GPS_RP2040',
  },
  logger: {
    category: 'Hardware',
    tags: ['C', 'RP2040', 'Embedded Systems', 'CMake'],
    image: './img/logger.webp',
    githubUrl: GITHUB_BASE + '/Data_logger_RP2040 ',
  },
  reaction: {
    category: 'Hardware',
    tags: ['C', 'RP2040', 'State Machine', 'Electronics'],
    image: './img/game.webp',
    githubUrl: GITHUB_BASE + '/Reaction_game_RP240 ',
  },
  stm32: {
    category: 'Hardware',
    tags: ['C', 'STM32', 'HAL', 'Microcontrollers'],
    image: './img/stm32.webp',
    githubUrl: GITHUB_BASE + '/EXTI_STM32L4-',
  },
  realestate: {
    category: 'Software',
    tags: ['Frontend', 'Web Development', 'UI/UX'],
    image: './img/realstate.webp',
    githubUrl: GITHUB_BASE + '/Bienes_raices',
  },
  beauty: {
    category: 'Software',
    tags: ['Frontend', 'React', 'CSS'],
    image: './img/beauty.webp',
    githubUrl: GITHUB_BASE + '/SalonBelleza',
  },
  portfolio: {
    category: 'Software',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    image: './img/portfolio.webp',
    githubUrl: GITHUB_BASE + '/portfolio',
  }
};

interface ProjectsProps {
  isDarkMode?: boolean;
  language: 'en' | 'es';
}

export default function Projects({ isDarkMode = false, language }: ProjectsProps) {
  const categoriesDict = {
    en: ['All', 'Hardware', 'Software', 'Data Science'],
    es: ['Todos', 'Hardware', 'Software', 'Data Science']
  };

  const [selectedCategory, setSelectedCategory] = useState(categoriesDict[language][0]);

  useEffect(() => {
    setSelectedCategory(categoriesDict[language][0]);
  }, [language]);

  const projectsContent = {
    en: [
      { id: 'emotion', title: 'High/Low Emotion Classifier', description: 'Machine learning pipeline developed in Python to classify emotional states using SVM and KNN.' },
      { id: 'video', title: 'Video Processing & Landmark Detection', description: 'Computer vision tool using MediaPipe for 3D body landmark detection and face cropping.' },
      { id: 'gps', title: 'Raspberry Pi Pico GPS Tracker', description: 'Embedded GPS tracking system featuring NMEA parsing and real-time battery monitoring.' },
      { id: 'logger', title: 'RP2040 Embedded Data Logger', description: 'C-based data logger with analog signal acquisition up to 5kHz and LCD metrics display.' },
      { id: 'reaction', title: 'Reaction Time Testing System', description: 'Interactive reaction time game built on RP2040 with random delays and penalty logic.' },
      { id: 'stm32', title: 'STM32 EXTI Hardware Abstraction Layer', description: 'Custom HAL written in C for the Extended Interrupt Controller on STM32L4+.' },
      { id: 'realestate', title: 'Real Estate Web Platform', description: 'Frontend-focused layout for a real estate agency with responsive modern UI.' },
      { id: 'beauty', title: 'Beauty Salon Management Interface', description: 'Layout designed for beauty salons featuring service browsing and appointment booking.' },
      { id: 'portfolio', title: 'Personal Developer Portfolio', description: 'Responsive personal portfolio built with React, TypeScript, and Tailwind CSS.' }
    ],
    es: [
      { id: 'emotion', title: 'Clasificador de Emociones High/Low', description: 'Pipeline de machine learning en Python para clasificar estados emocionales usando SVM y KNN.' },
      { id: 'video', title: 'Procesamiento de Video y Landmarks', description: 'Herramienta de visión artificial usando MediaPipe para detección de puntos corporales 3D.' },
      { id: 'gps', title: 'Rastreador GPS Raspberry Pi Pico', description: 'Sistema de seguimiento GPS embebido con análisis NMEA y monitoreo de batería.' },
      { id: 'logger', title: 'Data Logger Embebido RP2040', description: 'Data logger en C con adquisición de señales analógicas hasta 5kHz y visualización en LCD.' },
      { id: 'reaction', title: 'Sistema de Tiempo de Reacción', description: 'Juego interactivo de tiempo de reacción sobre RP2040 con medición de alta precisión.' },
      { id: 'stm32', title: 'Capa de Abstracción STM32 EXTI', description: 'HAL personalizada escrita en C para el controlador de interrupciones externas en STM32L4+.' },
      { id: 'realestate', title: 'Plataforma Web Inmobiliaria', description: 'Diseño frontend para una inmobiliaria con interfaces responsivas modernas.' },
      { id: 'beauty', title: 'Interfaz de Salón de Belleza', description: 'Diseño de aplicación web para gestión de servicios y reserva de citas.' },
      { id: 'portfolio', title: 'Portafolio Personal', description: 'Portafolio responsivo construido con React, TypeScript y Tailwind CSS.' }
    ]
  };

  const currentProjects = projectsContent[language].map(content => ({
    ...content,
    ...PROJECT_ASSETS[content.id as keyof typeof PROJECT_ASSETS]
  }));

  const filteredProjects = selectedCategory === categoriesDict[language][0]
    ? currentProjects
    : currentProjects.filter(p => p.category === (language === 'es' 
        ? categoriesDict.en[categoriesDict.es.indexOf(selectedCategory)] 
        : selectedCategory));

  // --- VARIANTES DE ANIMACIÓN ---
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Stagger effect
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="projects" className={`py-20 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
        >
          {language === 'en' ? 'Featured Projects' : 'Proyectos Destacados'}
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categoriesDict[language].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-cyan-600 text-white'
                  : isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div 
          layout // Suaviza el movimiento cuando se filtran proyectos
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${isDarkMode ? 'dark bg-gray-800' : 'bg-white'}`}
            >
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className={`text-sm font-semibold mb-2 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                  {project.category}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                <p className={`mb-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className={`px-3 py-1 text-xs rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-sm transition-colors ${isDarkMode ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`}>
                    <Github size={18} />
                    <span>{language === 'en' ? 'Code' : 'Código'}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}