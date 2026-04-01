import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

interface ContactProps {
  isDarkMode?: boolean;
  language: 'en' | 'es';
}

export default function Contact({ isDarkMode = false, language }: ContactProps) {
  const bgClass = isDarkMode
    ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800'
    : 'bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600';

  const content = {
    en: {
      title: 'Get In Touch',
      description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
      location: 'Location',
      footer: 'Built with React, TypeScript & Tailwind CSS | Copyright © Luis Castillo 2026'
    },
    es: {
      title: 'Contacto',
      description: 'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas o cualquier oportunidad para ser parte de tu visión.',
      location: 'Ubicación',
      footer: 'Construido con React, TypeScript y Tailwind CSS | Copyright © Luis Castillo 2026'
    }
  };

  const t = content[language];

  return (
    <section id="contact" className={`py-20 ${bgClass} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">{t.title}</h2>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-blue-100 mb-6">
              {t.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:luisandres645@gmail.com"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-6 transition-all transform hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <div className="text-blue-200">luisandres645@gmail.com</div>
                </div>
              </div>
            </a>

            <div className="bg-white/10 rounded-lg p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">{t.location}</div>
                  <div className="text-blue-200">Medellín, Colombia</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/LuisC645"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all transform hover:scale-110"
              title="GitHub"
            >
              <span className="sr-only">GitHub</span>
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-castillo-chicaiza-326221181/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all transform hover:scale-110"
              title="LinkedIn"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:luisandres645@gmail.com"
              className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all transform hover:scale-110"
              title="Email"
            >
              <span className="sr-only">Email</span>
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/20 text-center text-blue-200">
        <p>{t.footer}</p>
      </div>
    </section>
  );
}