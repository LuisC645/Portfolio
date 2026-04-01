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
      title: 'High/Low Emotion Classifier',
      description: 'Machine learning pipeline developed in Python to classify high and low emotional states. Implements SVM and KNN algorithms with cross-validation, utilizing PCA and LDA for dimensionality reduction.',
      category: 'Data Science',
      tags: ['Python', 'Machine Learning', 'SVM', 'PCA'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/LuisC645'
    },
    {
      title: 'Video Processing & Landmark Detection',
      description: 'Computer vision tool using MediaPipe for 3D body landmark detection. Features Rodrigues angles calculation, automated face cropping, and camera orientation correction for standardized data preprocessing.',
      category: 'Data Science',
      tags: ['Computer Vision', 'MediaPipe', 'Python'],
      image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/LuisC645'
    },
    {
      title: 'Raspberry Pi Pico GPS Tracker',
      description: 'Embedded GPS tracking system featuring NMEA sentence parsing and real-time battery voltage monitoring via ADC, with an RGB LED status indication for portable LiPo applications.',
      category: 'Hardware',
      tags: ['Embedded Systems', 'Raspberry Pi', 'C/C++'],
      image: 'https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/LuisC645'
    },
    {
      title: 'RP2040 Embedded Data Logger',
      description: 'C-based data logger for Raspberry Pi Pico H using pico-sdk. Features dual-channel analog signal acquisition up to 5kHz, moving average filters, and real-time metrics display on a 16x4 LCD with hardware-debounced controls.',
      category: 'Hardware',
      tags: ['C', 'RP2040', 'Embedded Systems', 'CMake'],
      image: 'https://images.pexels.com/photos/163100/circuit-board-computer-technology-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/LuisC645'
    },
    {
      title: 'Reaction Time Testing System',
      description: 'Interactive reaction time game built on the RP2040 microcontroller. Integrates LEDs, push buttons, and multiplexed 7-segment displays. Implements randomized delays, penalty logic, and high-precision time measurement.',
      category: 'Hardware',
      tags: ['C', 'RP2040', 'State Machine', 'Electronics'],
      image: 'https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/LuisC645'
    },
    {
      title: 'STM32 EXTI Hardware Abstraction Layer',
      description: 'Custom Hardware Abstraction Layer (HAL) written in C for the Extended Interrupt and Event Controller (EXTI) on the STM32L4+ microcontroller. Provides low-level register manipulation and a standardized API.',
      category: 'Hardware',
      tags: ['C', 'STM32', 'HAL', 'Microcontrollers'],
      image: 'https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/LuisC645'
    },
    {
      title: 'Real Estate Web Platform',
      description: 'Frontend-focused web layout for a real estate agency. Designed as a practical exercise in building responsive user interfaces and modern web architecture with basic backend integration.',
      category: 'Software',
      tags: ['Frontend', 'Web Development', 'UI/UX'],
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/LuisC645'
    },
    {
      title: 'Beauty Salon Management Interface',
      description: 'Frontend web application layout designed for a beauty salon. Includes user interfaces for service browsing and appointment booking, focusing on responsive design and intuitive user experience.',
      category: 'Software',
      tags: ['Frontend', 'React', 'CSS'],
      image: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/LuisC645'
    },
    {
      title: 'Personal Developer Portfolio',
      description: 'Responsive personal portfolio built with React, TypeScript, and Tailwind CSS. Features dynamic project filtering, smooth scrolling, and a dark/light mode toggle. Designed with a clean and minimalist aesthetic.',
      category: 'Software',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/LuisC645'
    }
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
                  ? 'bg-cyan-600 text-white'
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
                <div className="flex gap-4 mt-auto">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 transition-colors ${
                        isDarkMode
                          ? 'text-gray-400 hover:text-cyan-400'
                          : 'text-gray-600 hover:text-cyan-600'
                      }`}
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 transition-colors ${
                        isDarkMode
                          ? 'text-gray-400 hover:text-cyan-400'
                          : 'text-gray-600 hover:text-cyan-600'
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