import React from 'react';
import { Database, Cloud, Code, Smartphone, Settings, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'SharePoint Development',
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'SharePoint Framework (SPFx)', level: 95 },
        { name: 'SharePoint Online', level: 98 },
        { name: 'SharePoint Designer', level: 90 },
        { name: 'InfoPath & PowerApps', level: 88 }
      ]
    },
    {
      title: 'Microsoft 365 & Azure',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Microsoft Graph API', level: 92 },
        { name: 'Azure Functions', level: 85 },
        { name: 'Azure AD Integration', level: 90 },
        { name: 'Microsoft Teams Apps', level: 87 }
      ]
    },
    {
      title: 'Desarrollo Frontend',
      icon: Code,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'React & TypeScript', level: 93 },
        { name: 'JavaScript/ES6+', level: 95 },
        { name: 'HTML5 & CSS3', level: 92 },
        { name: 'Bootstrap & Tailwind', level: 88 }
      ]
    },
    {
      title: 'Power Platform',
      icon: Smartphone,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Power Apps', level: 90 },
        { name: 'Power Automate', level: 88 },
        { name: 'Power BI', level: 85 },
        { name: 'Power Virtual Agents', level: 82 }
      ]
    },
    {
      title: 'Backend & APIs',
      icon: Settings,
      color: 'from-indigo-500 to-purple-600',
      skills: [
        { name: 'REST APIs', level: 90 },
        { name: 'C# & .NET Core', level: 85 },
        { name: 'SQL Server', level: 88 },
        { name: 'Node.js', level: 80 }
      ]
    },
    {
      title: 'Metodologías',
      icon: Users,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Agile/Scrum', level: 92 },
        { name: 'DevOps/CI-CD', level: 85 },
        { name: 'Project Management', level: 88 },
        { name: 'Team Leadership', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Habilidades Técnicas
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dominio completo del ecosistema Microsoft 365 y tecnologías modernas de desarrollo
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map(({ title, icon: Icon, color, skills }) => (
              <div
                key={title}
                className="group bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:scale-105"
              >
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {skills.map(({ name, level }) => (
                    <div key={name} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium text-sm group-hover/skill:text-white transition-colors duration-200">
                          {name}
                        </span>
                        <span className="text-blue-400 font-bold text-sm">
                          {level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                          style={{ width: `${level}%` }}
                        >
                          <div className="h-full bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Certificaciones Microsoft</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Microsoft 365 Certified: Developer Associate',
                  'Azure Fundamentals (AZ-900)',
                  'Power Platform App Maker',
                  'SharePoint Administrator'
                ].map((cert) => (
                  <span
                    key={cert}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 rounded-lg text-sm font-medium hover:scale-105 transition-transform duration-200"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;