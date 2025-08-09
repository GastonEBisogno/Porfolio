import React from 'react';
import { Calendar, MapPin, Building, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior SharePoint Developer',
      company: 'TechCorp Solutions',
      location: 'Madrid, España',
      period: '2020 - Presente',
      type: 'Tiempo Completo',
      achievements: [
        'Lideré la migración de SharePoint On-Premises a SharePoint Online para 500+ usuarios',
        'Desarrollé 15+ soluciones SPFx personalizadas que mejoraron la productividad en un 40%',
        'Implementé integraciones con Microsoft Graph API y Power Platform',
        'Mentorización de un equipo de 4 desarrolladores junior'
      ],
      technologies: ['SharePoint Online', 'SPFx', 'React', 'TypeScript', 'Power Platform', 'Azure']
    },
    {
      title: 'Microsoft 365 Developer',
      company: 'Digital Innovations Ltd',
      location: 'Barcelona, España',
      period: '2018 - 2020',
      type: 'Tiempo Completo',
      achievements: [
        'Diseñé e implementé soluciones de colaboración para empresas Fortune 500',
        'Desarrollé Power Apps que automatizaron procesos manuales, ahorrando 200+ horas mensuales',
        'Creé flujos de Power Automate para integrar sistemas legacy con Microsoft 365',
        'Obtuve certificaciones Microsoft 365 Developer Associate'
      ],
      technologies: ['SharePoint', 'Power Apps', 'Power Automate', 'Microsoft Teams', 'Azure AD']
    },
    {
      title: 'SharePoint Consultant',
      company: 'Freelance',
      location: 'Remoto',
      period: '2016 - 2018',
      type: 'Consultoría',
      achievements: [
        'Proporcioné consultoría especializada a 20+ empresas medianas',
        'Desarrollé sitios SharePoint personalizados y aplicaciones web',
        'Implementé soluciones de gestión documental y workflows',
        'Formé a equipos internos en mejores prácticas de SharePoint'
      ],
      technologies: ['SharePoint 2016', 'JavaScript', 'C#', '.NET', 'SQL Server']
    },
    {
      title: 'Junior .NET Developer',
      company: 'StartupTech',
      location: 'Valencia, España',
      period: '2015 - 2016',
      type: 'Tiempo Completo',
      achievements: [
        'Desarrollé aplicaciones web utilizando ASP.NET MVC',
        'Participé en proyectos de migración de sistemas legacy',
        'Colaboré en el desarrollo de APIs RESTful',
        'Obtuve experiencia fundamental en desarrollo empresarial'
      ],
      technologies: ['ASP.NET', 'C#', 'SQL Server', 'JavaScript', 'HTML/CSS']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experiencia Profesional
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Más de 8 años construyendo soluciones empresariales innovadoras
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 transform md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`group relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 transform -translate-x-2 md:-translate-x-2 z-10 group-hover:scale-125 transition-transform duration-300"></div>

                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                    <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:scale-105 group-hover:border-blue-500/30">
                      <div className="mb-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <Building className="w-5 h-5 text-blue-400" />
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {exp.title}
                          </h3>
                        </div>
                        <div className="text-lg text-purple-400 font-semibold mb-3">
                          {exp.company}
                        </div>
                        <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Logros Principales:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-2 text-gray-300">
                              <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-3">Tecnologías:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 rounded-full text-xs font-medium hover:scale-105 transition-transform duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;