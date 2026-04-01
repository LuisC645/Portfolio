import { useState } from 'react';

interface SkillCategory {
  title: string;
  tools: string[];
  color: string;
}

interface SkillsProps {
  isDarkMode?: boolean;
}

export default function Skills({ isDarkMode = false }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories: SkillCategory[] = [
    {
      title: 'Hardware & Electronics',
      color: 'blue',
      tools: [
        'Circuit Design',
        'PCB Design (KiCAD, Altium)',
        'Embedded Systems',
        'Signal Processing',
        'Microcontrollers (ARM, AVR)',
        'FPGA',
        'Oscilloscopes & Multimeters',
      ],
    },
    {
      title: 'Programming Languages',
      color: 'cyan',
      tools: [
        'C++',
        'Python',
        'Java',
        'MATLAB',
        'TypeScript',
        'JavaScript',
        'SQL',
      ],
    },
    {
      title: 'Web Development',
      color: 'teal',
      tools: [
        'React',
        'Node.js',
        'Express.js',
        'Tailwind CSS',
        'RESTful APIs',
        'PostgreSQL',
        'Supabase',
        'Next.js',
      ],
    },
    {
      title: 'Data Science & ML',
      color: 'green',
      tools: [
        'TensorFlow',
        'PyTorch',
        'scikit-learn',
        'Pandas & NumPy',
        'Jupyter',
        'Plotly & Matplotlib',
        'Deep Learning',
        'Computer Vision',
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const lightMode: Record<string, { bg: string; text: string; tag: string }> = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', tag: 'bg-blue-50 text-blue-700 border border-blue-200' },
      cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', tag: 'bg-cyan-50 text-cyan-700 border border-cyan-200' },
      teal: { bg: 'bg-teal-100', text: 'text-teal-600', tag: 'bg-teal-50 text-teal-700 border border-teal-200' },
      green: { bg: 'bg-green-100', text: 'text-green-600', tag: 'bg-green-50 text-green-700 border border-green-200' },
    };

    const darkMode: Record<string, { bg: string; text: string; tag: string }> = {
      blue: { bg: 'dark:bg-blue-900 dark:text-blue-300', text: 'dark:text-blue-300', tag: 'dark:bg-blue-900 dark:text-blue-200 dark:border-blue-700' },
      cyan: { bg: 'dark:bg-cyan-900 dark:text-cyan-300', text: 'dark:text-cyan-300', tag: 'dark:bg-cyan-900 dark:text-cyan-200 dark:border-cyan-700' },
      teal: { bg: 'dark:bg-teal-900 dark:text-teal-300', text: 'dark:text-teal-300', tag: 'dark:bg-teal-900 dark:text-teal-200 dark:border-teal-700' },
      green: { bg: 'dark:bg-green-900 dark:text-green-300', text: 'dark:text-green-300', tag: 'dark:bg-green-900 dark:text-green-200 dark:border-green-700' },
    };

    return isDarkMode ? darkMode[color] : lightMode[color];
  };

  return (
    <section id="skills" className={`py-20 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Technical Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === index
                  ? `${getColorClasses(category.color).bg} ${getColorClasses(category.color).text}`
                  : isDarkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className={`max-w-4xl mx-auto rounded-lg shadow-lg p-8 ${isDarkMode ? 'dark bg-gray-800' : 'bg-white'}`}>
          <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {categories[activeCategory].title}
          </h3>
          <div className="flex flex-wrap gap-3">
            {categories[activeCategory].tools.map((tool) => (
              <div
                key={tool}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105 ${
                  getColorClasses(categories[activeCategory].color).tag
                }`}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
