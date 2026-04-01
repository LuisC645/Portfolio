import { Cpu, Code, Brain } from 'lucide-react';

interface AboutProps {
  isDarkMode?: boolean;
}

export default function About({ isDarkMode = false }: AboutProps) {
  const personalPhotoUrl = "../img/profile.jpeg";

  return (
    <section id="about" className={`py-20 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className={`text-center p-6 rounded-lg ${isDarkMode ? 'dark bg-blue-900/30' : 'bg-blue-50'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
              <Cpu size={32} />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Hardware Design
            </h3>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              Electronic engineering expertise focusing on embedded systems and circuit optimization.
            </p>
          </div>

          <div className={`text-center p-6 rounded-lg ${isDarkMode ? 'dark bg-cyan-900/30' : 'bg-cyan-50'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600 text-white rounded-full mb-4">
              <Code size={32} />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Full-Stack Development
            </h3>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              Building scalable web architectures and automating processes with modern tech stacks.
            </p>
          </div>

          <div className={`text-center p-6 rounded-lg ${isDarkMode ? 'dark bg-teal-900/30' : 'bg-teal-50'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-full mb-4">
              <Brain size={32} />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Data Science
            </h3>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              Advanced research in pattern recognition, deep learning, and predictive modeling.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4 flex justify-center">
            <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 ${isDarkMode ? 'border-gray-800' : 'border-gray-100'} shadow-xl`}>
              <img
                src={personalPhotoUrl}
                alt="Luis Andrés Castillo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className={`absolute inset-0 opacity-10 rounded-full ${isDarkMode ? 'bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-800' : 'bg-gradient-to-tr from-cyan-600 via-blue-700 to-blue-600'}`}></div>
            </div>
          </div>

          <div className="md:col-span-8 text-left space-y-4">
            <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className={`text-xl font-bold block mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Hi, I'm Luis Andrés Castillo.
              </span>
              I specialize in bridging hardware engineering and digital innovation. My expertise lies in <span className={`font-semibold ${isDarkMode ? 'text-cyan-200' : 'text-blue-600'}`}>data analysis, machine learning, and full-stack development</span>, building predictive models and scalable applications that solve complex problems.
            </p>
            
            <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              With over four years of combined experience, I've applied my skills in both operational automation and neuroengineering. As a <span className={`font-semibold ${isDarkMode ? 'text-cyan-200' : 'text-blue-600'}`}>Lead Researcher</span> at the GITA group, I developed biomarkers for neurodegenerative diseases and published research on Parkinson's detection using deep learning (Springer, 2025). I am completing my B.Sc. in Electronic Engineering at the University of Antioquia, designing end-to-end solutions from data extraction to robust web architecture.
            </p>
            
            <p className={`text-base leading-relaxed font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              Whether you need predictive ML models, scalable web platforms, or data-driven research solutions, I'm here to help.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}