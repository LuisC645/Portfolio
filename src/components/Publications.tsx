import { BookOpen, ExternalLink } from 'lucide-react';

interface PublicationsProps {
  isDarkMode?: boolean;
  language: 'en' | 'es';
}

export default function Publications({ isDarkMode = false, language }: PublicationsProps) {
  const publications = [
    {
      title: "Parkinson's Detection in Videos Using Classical and Deep Learning Techniques",
      type: {
        en: 'Book Chapter',
        es: 'Capítulo de Libro'
      },
      description: {
        en: 'As the primary author, I developed this research exploring and comparing classical computer vision techniques and deep learning methodologies for the early detection of Parkinson\'s disease through video analysis.',
        es: 'Como autor principal, desarrollé esta investigación explorando y comparando técnicas clásicas de visión artificial y metodologías de deep learning para la detección temprana de la enfermedad de Parkinson mediante análisis de video.'
      },
      year: '2025',
      publisher: 'Springer (WEA 2025)',
      tags: ['Deep Learning', 'Computer Vision', 'Medical AI'],
      link: 'https://doi.org/10.1007/978-3-032-08203-9_16'
    },
  ];

  const content = {
    en: {
      title: 'Publications',
      subtitle: 'Published Work',
      button: 'Access Publication'
    },
    es: {
      title: 'Publicaciones',
      subtitle: 'Trabajo Publicado',
      button: 'Acceder a la Publicación'
    }
  };

  const t = content[language];

  return (
    <section id="publications" className={`py-20 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {t.title}
        </h2>

        <div>
          <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <BookOpen className="text-blue-600" size={28} />
            {t.subtitle}
          </h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow ${
                  isDarkMode ? 'dark bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-3 gap-4">
                  <div>
                    <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {pub.title}
                    </h4>
                    <div className={`text-sm mt-1 mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {pub.type[language]} • {pub.publisher}
                    </div>
                  </div>
                  <span className={`font-bold text-lg whitespace-nowrap ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                    {pub.year}
                  </span>
                </div>
                
                <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {pub.description[language]}
                </p>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-sm font-medium rounded-full ${
                          isDarkMode
                            ? 'bg-blue-900/40 text-blue-300'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
                        isDarkMode
                          ? 'bg-cyan-900/50 text-cyan-300 hover:bg-cyan-800/70'
                          : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                      }`}
                    >
                      <span>{t.button}</span>
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}