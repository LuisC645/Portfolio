import { Briefcase, GraduationCap } from 'lucide-react';

interface ExperienceProps {
  isDarkMode?: boolean;
  language: 'en' | 'es';
}

export default function Experience({ isDarkMode = false, language }: ExperienceProps) {
  const education = [
    {
      degree: language === 'en' ? 'B.Sc. in Electronic Engineering' : 'Pregrado en Ingeniería Electrónica',
      institution: language === 'en' ? 'University of Antioquia' : 'Universidad de Antioquia',
      period: language === 'en' ? 'Jan 2021 - Present' : 'Ene 2021 - Presente',
      description: language === 'en' 
        ? 'Focus on embedded systems, data analysis, machine learning, pattern recognition, and the development of predictive models and technological solutions.'
        : 'Enfoque en sistemas embebidos, análisis de datos, machine learning, reconocimiento de patrones y el desarrollo de modelos predictivos y soluciones tecnológicas.',
    },
    {
      degree: language === 'en' ? 'Deep Learning Fundamentals (Certification)' : 'Fundamentos de Deep Learning (Certificación)',
      institution: language === 'en' ? 'University of Antioquia' : 'Universidad de Antioquia',
      period: language === 'en' ? 'May 2025' : 'Mayo 2025',
      description: language === 'en'
        ? 'Specialized certification in deep learning architectures and methodologies.'
        : 'Certificación especializada en arquitecturas y metodologías de deep learning.',
    },
    {
      degree: language === 'en' ? 'Summer School in Neuroengineering' : 'Escuela de Verano en Neuroingeniería',
      institution: language === 'en' ? 'University of Antioquia' : 'Universidad de Antioquia',
      period: language === 'en' ? 'Jun 2024 - Jul 2024' : 'Jun 2024 - Jul 2024',
      description: language === 'en'
        ? 'Focused on human-centric neuroengineering and neurorehabilitation technologies.'
        : 'Centrado en neuroingeniería centrada en las personas y tecnologías de neurorrehabilitación.',
    },
  ];

  const experience = [
    {
      role: language === 'en' ? 'Researcher' : 'Investigador',
      company: language === 'en' ? 'GITA Research Group (University of Antioquia)' : 'Grupo de Investigación GITA (Universidad de Antioquia)',
      period: language === 'en' ? 'Oct 2024 - Sep 2025' : 'Oct 2024 - Sep 2025',
      description: language === 'en'
        ? 'Contributed to the research project focusing on the analysis and development of biomarkers based on speech and language patterns for the study of neurodegenerative diseases.'
        : 'Contribución al proyecto de investigación centrado en el análisis y desarrollo de biomarcadores basados en patrones de habla y lenguaje para el estudio de enfermedades neurodegenerativas.',
      highlights: language === 'en' ? [
        'Primary author of published research on Parkinson\'s detection using deep learning (Springer, 2025)',
        'Developed machine learning models with an emphasis on video-based analysis',
        'Executed advanced data analysis, feature extraction, and pattern recognition using Python',
      ] : [
        'Autor principal de investigación publicada sobre detección de Parkinson usando deep learning (Springer, 2025)',
        'Desarrollo de modelos de machine learning con énfasis en análisis basado en video',
        'Ejecución de análisis de datos avanzado, extracción de características y reconocimiento de patrones con Python',
      ],
    },
    {
      role: language === 'en' ? 'Research Group Member' : 'Miembro de Grupo de Investigación',
      company: language === 'en' ? 'GITA Research Group (University of Antioquia)' : 'Grupo de Investigación GITA (Universidad de Antioquia)',
      period: language === 'en' ? 'Mar 2023 - Present' : 'Mar 2023 - Presente',
      description: language === 'en'
        ? 'Active member of the telecommunications research group, working on the development of predictive models and complex data processing.'
        : 'Miembro activo del grupo de investigación en telecomunicaciones, trabajando en el desarrollo de modelos predictivos y procesamiento de datos complejos.',
      highlights: language === 'en' ? [
        'Applied data analysis techniques using Python',
        'Implemented machine learning and pattern recognition algorithms',
        'Processed large volumes of data in structured environments',
      ] : [
        'Aplicación de técnicas de análisis de datos usando Python',
        'Implementación de algoritmos de machine learning y reconocimiento de patrones',
        'Procesamiento de grandes volúmenes de datos en entornos estructurados',
      ],
    },
    {
      role: language === 'en' ? 'Full-Stack Developer & Automation' : 'Desarrollador Full-Stack y Automatización',
      company: 'Freelance',
      period: language === 'en' ? 'Jan 2020 - Dec 2023' : 'Ene 2020 - Dic 2023',
      description: language === 'en'
        ? 'Developed responsive and scalable web applications and automated operational processes for various clients.'
        : 'Desarrollo de aplicaciones web responsivas y escalables, y automatización de procesos operativos para diversos clientes.',
      highlights: language === 'en' ? [
        'Built full-stack applications using React, PHP, CSS, HTML, and JavaScript',
        'Developed robust backend architectures utilizing PHP and Python',
        'Automated operational processes through Python scripts to improve efficiency',
      ] : [
        'Construcción de aplicaciones full-stack usando React, PHP, CSS, HTML y JavaScript',
        'Desarrollo de arquitecturas de backend robustas utilizando PHP y Python',
        'Automatización de procesos operativos mediante scripts de Python para mejorar la eficiencia',
      ],
    },
  ];

  return (
    <section id="experience" className={`py-20 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {language === 'en' ? 'Experience & Education' : 'Experiencia y Educación'}
        </h2>

        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <GraduationCap className="text-blue-600" size={28} />
            {language === 'en' ? 'Education' : 'Educación'}
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`rounded-lg p-6 border-l-4 border-blue-600 ${
                  isDarkMode ? 'dark bg-blue-900/30' : 'bg-blue-50'
                }`}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                  <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{edu.degree}</h4>
                  <span className={`font-semibold whitespace-nowrap ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>{edu.period}</span>
                </div>
                <div className={`font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {edu.institution}
                </div>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <Briefcase className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'} size={28} />
            {language === 'en' ? 'Professional Experience' : 'Experiencia Profesional'}
          </h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow ${
                  isDarkMode ? 'dark bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                  <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{exp.role}</h4>
                  <span className={`font-semibold whitespace-nowrap ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>{exp.period}</span>
                </div>
                <div className={`font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{exp.company}</div>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className={`flex items-start gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className={isDarkMode ? 'text-cyan-400 mt-1' : 'text-cyan-600 mt-1'}>•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}