import { Briefcase, GraduationCap } from 'lucide-react';

interface ExperienceProps {
  isDarkMode?: boolean;
}

export default function Experience({ isDarkMode = false }: ExperienceProps) {
  const education = [
    {
      degree: 'Bachelor of Electronic Engineering',
      institution: 'University of Antioquia',
      period: 'Expected 2024',
      description: 'Specialized in embedded systems, signal processing, and digital communications. Active in research projects combining hardware and software.',
    },
  ];

  const experience = [
    {
      role: 'Freelance Full-Stack Developer',
      company: 'Self-Employed',
      period: '2021 - Present',
      description: 'Developed responsive web applications using React, TypeScript, and modern backend frameworks. Delivered projects for diverse clients across various industries.',
      highlights: [
        'Built 10+ production-ready web applications',
        'Implemented RESTful APIs and database solutions',
        'Managed complete development lifecycle',
      ],
    },
    {
      role: 'Research Assistant',
      company: 'Neuroengineering Research Lab',
      period: '2022 - 2023',
      description: 'Contributed to research projects involving signal processing, predictive modeling, and deep learning applications for medical diagnostics.',
      highlights: [
        'Co-authored book chapter on Parkinson\'s detection',
        'Developed signal processing algorithms',
        'Analyzed and visualized complex datasets',
      ],
    },
  ];

  return (
    <section id="experience" className={`py-20 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Experience & Education
        </h2>

        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <GraduationCap className="text-blue-600" size={28} />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`rounded-lg p-6 border-l-4 border-blue-600 ${
                  isDarkMode ? 'dark bg-blue-900/30' : 'bg-blue-50'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{edu.degree}</h4>
                  <span className={`font-semibold ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>{edu.period}</span>
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
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow ${
                  isDarkMode ? 'dark bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{exp.role}</h4>
                  <span className={`font-semibold ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>{exp.period}</span>
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
