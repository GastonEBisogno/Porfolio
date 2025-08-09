import React from 'react';
import { Code, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  SharePoint Dev
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Especialista en soluciones SharePoint y Microsoft 365, 
                transformando ideas en aplicaciones empresariales innovadoras.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Enlaces Rápidos</h3>
              <div className="space-y-2">
                {[
                  { label: 'Sobre mí', href: '#about' },
                  { label: 'Habilidades', href: '#skills' },
                  { label: 'Experiencia', href: '#experience' },
                  { label: 'Proyectos', href: '#projects' },
                  { label: 'Contacto', href: '#contact' }
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Servicios</h3>
              <div className="space-y-2 text-gray-400">
                <div>Desarrollo SharePoint</div>
                <div>Power Platform</div>
                <div>Microsoft 365</div>
                <div>Consultoría Técnica</div>
                <div>Migración a la Nube</div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <span>Hecho con</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>y</span>
                <Code className="w-4 h-4 text-blue-400" />
                <span>en Madrid</span>
              </div>
              
              <div className="text-gray-400">
                © 2024 SharePoint Developer. Todos los derechos reservados.
              </div>

              <button
                onClick={scrollToTop}
                className="group p-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Volver arriba"
              >
                <ArrowUp className="w-5 h-5 text-white group-hover:animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;