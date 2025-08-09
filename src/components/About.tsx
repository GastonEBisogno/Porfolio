import React from 'react';
import { Award, Calendar, MapPin, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, label: 'Años de Experiencia', value: '8+' },
    { icon: Award, label: 'Proyectos Completados', value: '50+' },
    { icon: Zap, label: 'Certificaciones', value: '12' },
    { icon: MapPin, label: 'Ubicación', value: 'Madrid, España' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sobre Mí
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Especialista en SharePoint & Microsoft 365
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Con más de 8 años de experiencia en el desarrollo de soluciones empresariales, 
                  me especializo en crear aplicaciones robustas y escalables utilizando el ecosistema 
                  de Microsoft 365, SharePoint Online y Power Platform.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Mi pasión por la tecnología me ha llevado a dominar desde SharePoint Framework (SPFx) 
                  hasta Power Apps y Power Automate, ayudando a las organizaciones a digitalizar 
                  sus procesos y mejorar la colaboración.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['SharePoint', 'Power Platform', 'Azure', 'TypeScript', 'React'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="group bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {value}
                  </div>
                  <div className="text-gray-400 text-sm leading-tight">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Mi Filosofía</h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                "Creo que la tecnología debe simplificar los procesos empresariales, 
                no complicarlos. Mi objetivo es crear soluciones intuitivas que 
                potencien la productividad y fomenten la colaboración."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;