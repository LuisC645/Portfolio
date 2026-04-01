import { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';

// --- MACROS / CONSTANTES (Datos que no cambian por idioma) ---
const GITHUB_BASE = 'https://github.com/LuisC645';

const PROJECT_ASSETS = {
  emotion: {
    category: 'Data Science',
    tags: ['Python', 'Machine Learning', 'SVM', 'PCA'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: GITHUB_BASE + '/emotion-classifier',
  },
  video: {
    category: 'Data Science',
    tags: ['Computer Vision', 'MediaPipe', 'Python'],
    image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: GITHUB_BASE,
  },
  gps: {
    category: 'Hardware',
    tags: ['Embedded Systems', 'Raspberry Pi', 'C/C++'],
    image: 'https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: GITHUB_BASE,
  },
  logger: {
    category: 'Hardware',
    tags: ['C', 'RP2040', 'Embedded Systems', 'CMake'],
    image: 'https://images.pexels.com/photos/163100/circuit-board-computer-technology-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: GITHUB_BASE,
  },
  reaction: {
    category: 'Hardware',
    tags: ['C', 'RP2040', 'State Machine', 'Electronics'],
    image: 'https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: GITHUB_BASE,
  },
  stm32: {
    category: 'Hardware',
    tags: ['C', 'STM32', 'HAL', 'Microcontrollers'],
    image: 'https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: GITHUB_BASE,
  },
  realestate: {
    category: 'Software',
    tags: ['Frontend', 'Web Development', 'UI/UX'],
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: GITHUB_BASE,
  },
  beauty: {
    category: 'Software',
    tags: ['Frontend', 'React', 'CSS'],
    image: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: GITHUB_BASE,
  },
  portfolio: {
    category: 'Software',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: GITHUB_BASE,
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

  // EFECTO PARA NO ROMPER SINERGIA: Resetear a "All/Todos" cuando cambie el idioma
  useEffect(() => {
    setSelectedCategory(categoriesDict[language][0]);
  }, [language]);

  const projectsContent = {
    en: [
      { id: 'emotion', title: 'High/Low Emotion Classifier', description: 'Machine learning pipeline developed in Python to classify high and low emotional states. Implements SVM and KNN with PCA.' },
      { id: 'video', title: 'Video Processing & Landmark Detection', description: 'Computer vision tool using MediaPipe for 3D body landmark detection and face cropping.' },
      { id: 'gps', title: 'Raspberry Pi Pico GPS Tracker', description: 'Embedded GPS tracking system featuring NMEA sentence parsing and real-time battery monitoring.' },
      { id: 'logger', title: 'RP2040 Embedded Data Logger', description: 'C-based data logger with dual-channel analog signal acquisition up to 5kHz and LCD display.' },
      { id: 'reaction', title: 'Reaction Time Testing System', description: 'Interactive reaction time game built on the RP2040 with random delays and penalty logic.' },
      { id: 'stm32', title: 'STM32 EXTI Hardware Abstraction Layer', description: 'Custom HAL written in C for the Extended Interrupt and Event Controller on STM32L4+.' },
      { id: 'realestate', title: 'Real Estate Web Platform', description: 'Frontend-focused web layout for a real estate agency with responsive modern UI.' },
      { id: 'beauty', title: 'Beauty Salon Management Interface', description: 'Layout designed for a beauty salon featuring service browsing and appointment booking.' },
      { id: 'portfolio', title: 'Personal Developer Portfolio', description: 'Responsive personal portfolio built with React, TypeScript, and Tailwind CSS.' }
    ],
    es: [
      { id: 'emotion', title: 'Clasificador de Emociones High/Low', description: 'Pipeline de machine learning en Python para clasificar estados emocionales usando SVM y KNN.' },
      { id: 'video', title: 'Procesamiento de Video y Landmarks', description: 'Herramienta de visión artificial usando MediaPipe para detección de puntos corporales 3D.' },
      { id: 'gps', title: 'Rastreador GPS Raspberry Pi Pico', description: 'Sistema de seguimiento GPS embebido con análisis de sentencias NMEA y monitoreo de batería.' },
      { id: 'logger', title: 'Data Logger Embebido RP2040', description: 'Data logger en C con adquisición de señales analógicas de dos canales y filtros de media móvil.' },
      { id: 'reaction', title: 'Sistema de Tiempo de Reacción', description: 'Juego interactivo de tiempo de reacción sobre RP2040 con medición de alta precisión.' },
      { id: 'stm32', title: 'Capa de Abstracción STM32 EXTI', description: 'HAL personalizada escrita en C para el controlador de interrupciones externas en STM32L4+.' },
      { id: 'realestate', title: 'Plataforma Web Inmobiliaria', description: 'Diseño frontend para una agencia inmobiliaria con interfaces responsivas modernas.' },
      { id: 'beauty', title: 'Interfaz de Salón de Belleza', description: 'Diseño de aplicación web para gestión de servicios y reserva de citas en peluquerías.' },
      { id: 'portfolio', title: 'Portafolio Personal', description: 'Portafolio responsivo construido con React, TypeScript y Tailwind CSS' }
    ]
  };

  // Combinar activos fijos con textos traducidos
  const currentProjects = projectsContent[language].map(content => ({
    ...content,
    ...PROJECT_ASSETS[content.id as keyof typeof PROJECT_ASSETS]
  }));

  const filteredProjects = selectedCategory === categoriesDict[language][0]
    ? currentProjects
    : currentProjects.filter(p => p.category === (language === 'es' 
        ? categoriesDict.en[categoriesDict.es.indexOf(selectedCategory)] 
        : selectedCategory));

  return (
    <section id="projects" className={`py-20 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {language === 'en' ? 'Featured Projects' : 'Proyectos Destacados'}
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${isDarkMode ? 'dark bg-gray-800' : 'bg-white'}`}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}