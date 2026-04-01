import { BookOpen, Award } from 'lucide-react';

interface PublicationsProps {
  isDarkMode?: boolean;
}

export default function Publications({ isDarkMode = false }: PublicationsProps) {
  const publications = [
    {
      title: 'Deep Learning Approaches for Parkinson\'s Disease Detection',
      type: 'Book Chapter',
      description: 'Comprehensive analysis of deep learning methodologies for early detection of Parkinson\'s disease through voice signal analysis.',
      year: '2023',
      publisher: 'Academic Press',
      tags: ['Deep Learning', 'Medical AI', 'Signal Processing'],
    },
  ];

  const achievements = [
    {
      title: 'Research Contributor',
      organization: 'Neuroengineering Lab',
      description: 'Contributing to cutting-edge research in signal processing and predictive modeling for neurological conditions.',
    },
    {
      title: 'Freelance Developer',
      organization: 'Multiple Clients',
      description: 'Successfully delivered responsive web applications with modern frameworks and best practices.',
    },
  ];

  return (
    <section id="publications" className={`py-20 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Publications & Achievements
        </h2>

        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <BookOpen className="text-blue-600" size={28} />
            Published Work
          </h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow ${
                  isDarkMode ? 'dark bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pub.title}</h4>
                  <span className={`font-semibold ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>{pub.year}</span>
                </div>
                <div className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {pub.type} • {pub.publisher}
                </div>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{pub.description}</p>
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-sm rounded-full ${
                        isDarkMode
                          ? 'bg-blue-900/40 text-blue-300'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <Award className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'} size={28} />
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow ${
                  isDarkMode ? 'dark bg-gray-800' : 'bg-white'
                }`}
              >
                <h4 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {achievement.title}
                </h4>
                <div className={`font-semibold mb-3 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  {achievement.organization}
                </div>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
