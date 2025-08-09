import React from 'react';
import { ExternalLink, Github, Calendar, Users, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Portal de Gestión Empresarial',
      description: 'Portal completo de SharePoint Online con SPFx para gestión de recursos humanos, incluyendo solicitudes de vacaciones, evaluaciones de desempeño y directorio corporativo.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['SharePoint Online', 'SPFx', 'React', 'TypeScript', 'Microsoft Graph'],
      features: ['Dashboard interactivo', 'Workflows automatizados', 'Integración con Teams', 'Reportes en tiempo real'],
      timeline: '6 meses',
      team: '4 personas',
      impact: 'Reducción del 60% en tiempo de procesos administrativos',
      status: 'Completado',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Sistema de Gestión Documental',
      description: 'Solución integral para la gestión, versionado y aprobación de documentos corporativos con flujos de trabajo automatizados y políticas de retención.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['SharePoint Online', 'Power Automate', 'Power Apps', 'Azure Functions'],
      features: ['Control de versiones', 'Flujos de aprobación', 'Búsqueda avanzada', 'Retención automática'],
      timeline: '4 meses',
      team: '3 personas',
      impact: 'Mejora del 45% en eficiencia de aprobaciones',
      status: 'En producción',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Aplicación de Gestión de Proyectos',
      description: 'Power App integrada con SharePoint para gestión de proyectos, seguimiento de tareas, asignación de recursos y reportes de progreso en tiempo real.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Power Apps', 'SharePoint Lists', 'Power BI', 'Microsoft Teams'],
      features: ['Gestión de tareas', 'Timeline interactivo', 'Dashboards KPI', 'Notificaciones automáticas'],
      timeline: '3 meses',
      team: '2 personas',
      impact: 'Aumento del 35% en productividad del equipo',
      status: 'Completado',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Portal de Colaboración Interna',
      description: 'Hub de SharePoint moderno para comunicación interna, noticias corporativas, eventos y herramientas de colaboración integradas con Microsoft 365.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['SharePoint Modern', 'Viva Connections', 'Yammer', 'Stream'],
      features: ['News hub', 'Calendario de eventos', 'Chat integrado', 'Videos corporativos'],
      timeline: '5 meses',
      team: '5 personas',
      impact: 'Incremento del 70% en engagement interno',
      status: 'En desarrollo',
      links: {
        demo: '#',
        github: '#'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Proyectos Destacados
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluciones innovadoras que han transformado la productividad empresarial
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:scale-105 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completado' ? 'bg-green-600/20 text-green-300 border border-green-500/30' :
                      project.status === 'En producción' ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30' :
                      'bg-yellow-600/20 text-yellow-300 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
                    <div className="text-center">
                      <Calendar className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">Duración</div>
                      <div className="text-sm font-semibold text-white">{project.timeline}</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">Equipo</div>
                      <div className="text-sm font-semibold text-white">{project.team}</div>
                    </div>
                    <div className="text-center">
                      <Zap className="w-5 h-5 text-green-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">Impacto</div>
                      <div className="text-sm font-semibold text-white">Alto</div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Características principales:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="mb-6 p-3 bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-lg border border-green-500/20">
                    <div className="text-green-300 text-sm font-medium">
                      💡 {project.impact}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={project.links.demo}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Ver Demo</span>
                    </a>
                    <a
                      href={project.links.github}
                      className="flex items-center justify-center px-4 py-3 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="#"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <span>Ver Todos los Proyectos</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;