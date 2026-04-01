import { Briefcase, GraduationCap } from 'lucide-react';

interface ExperienceProps {
  isDarkMode?: boolean;
}

export default function Experience({ isDarkMode = false }: ExperienceProps) {
  const education = [
    {
      degree: 'B.Sc. in Electronic Engineering',
      institution: 'University of Antioquia',
      period: 'Jan 2021 - Present',
      description: 'Focus on embedded systems, data analysis, machine learning, pattern recognition, and the development of predictive models and technological solutions.',
    },
    {
      degree: 'Deep Learning Fundamentals (Certification)',
      institution: 'University of Antioquia',
      period: 'May 2025',
      description: 'Specialized certification in deep learning architectures and methodologies.',
    },
    {
      degree: 'Summer School in Neuroengineering',
      institution: 'University of Antioquia',
      period: 'Jun 2024 - Jul 2024',
      description: 'Focused on human-centric neuroengineering and neurorehabilitation technologies.',
    },
  ];

  const experience = [
    {
      role: 'Researcher',
      company: 'GITA Research Group (University of Antioquia)',
      period: 'Oct 2024 - Sep 2025',
      description: 'Contributed to the research project focusing on the analysis and development of biomarkers based on speech and language patterns for the study of neurodegenerative diseases.',
      highlights: [
        'Primary author of published research on Parkinson\'s detection using deep learning (Springer, 2025)',
        'Developed machine learning models with an emphasis on video-based analysis',
        'Executed advanced data analysis, feature extraction, and pattern recognition using Python',
      ],
    },
    {
      role: 'Research Group Member',
      company: 'GITA Research Group (University of Antioquia)',
      period: 'Mar 2023 - Present',
      description: 'Active member of the telecommunications research group, working on the development of predictive models and complex data processing.',
      highlights: [
        'Applied data analysis techniques using Python',
        'Implemented machine learning and pattern recognition algorithms',
        'Processed large volumes of data in structured environments',
      ],
    },
    {
      role: 'Full-Stack Developer & Automation',
      company: 'Freelance',
      period: 'Jan 2020 - Dec 2023',
      description: 'Developed responsive and scalable web applications and automated operational processes for various clients.',
      highlights: [
        'Built full-stack applications using React, PHP, CSS, HTML, and JavaScript',
        'Developed robust backend architectures utilizing PHP and Python',
        'Automated operational processes through Python scripts to improve efficiency',
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