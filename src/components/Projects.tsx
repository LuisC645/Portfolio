import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectsProps {
  isDarkMode?: boolean;
}

export default function Projects({ isDarkMode = false }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects: Project[] = [
    {
      title: 'Neuroengineering Signal Processor',
      description: 'Advanced signal processing system for analyzing neurological data, implementing filtering algorithms and real-time visualization.',
      category: 'Hardware',
      tags: ['C++', 'Signal Processing', 'Embedded Systems'],
      image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'IoT Environmental Monitor',
      description: 'Complete IoT solution with custom PCB design for monitoring environmental parameters with cloud integration.',
      category: 'Hardware',
      tags: ['PCB Design', 'IoT', 'Python'],
      image: 'https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Enterprise Task Management System',
      description: 'Full-stack web application with real-time collaboration features, authentication, and responsive design.',
      category: 'Software',
      tags: ['React', 'Node.js', 'TypeScript'],
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Scalable e-commerce solution with payment integration, inventory management, and admin dashboard.',
      category: 'Software',
      tags: ['Full-Stack', 'Database', 'API'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Parkinson\'s Disease Detection System',
      description: 'Deep learning model for early detection of Parkinson\'s disease using voice analysis. Published research work.',
      category: 'Data Science',
      tags: ['Deep Learning', 'Python', 'TensorFlow'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Predictive Maintenance Model',
      description: 'Machine learning system for predicting equipment failures in industrial settings using sensor data.',
      category: 'Data Science',
      tags: ['ML', 'MATLAB', 'Data Analysis'],
      image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const categories = ['All', 'Hardware', 'Software', 'Data Science'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className={`py-20 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Featured Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : isDarkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
                isDarkMode ? 'dark bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className={`text-sm font-semibold mb-2 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                  {project.category}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-sm rounded-full ${
                        isDarkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className={`flex items-center gap-2 transition-colors ${
                        isDarkMode
                          ? 'text-gray-400 hover:text-cyan-400'
                          : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className={`flex items-center gap-2 transition-colors ${
                        isDarkMode
                          ? 'text-gray-400 hover:text-cyan-400'
                          : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
