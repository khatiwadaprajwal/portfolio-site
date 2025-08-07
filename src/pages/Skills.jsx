import { FiCode, FiDatabase, FiServer, FiGlobe, FiTool } from 'react-icons/fi';
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: FiCode,
      skills: [
        { name: 'JavaScript', icon: '⚡', category: 'Core' },
        { name: 'TypeScript', icon: '🔷', category: 'Learning' },
        { name: 'Python', icon: '🐍', category: 'Familiar' },
        { name: 'Java', icon: '☕', category: 'Familiar' },
        { name: 'PHP', icon: '🐘', category: 'Basic' },
        { name: 'C', icon: '🔧', category: 'Basic' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: FiServer,
      skills: [
        { name: 'Node.js', icon: '🟢', category: 'Core' },
        { name: 'Express.js', icon: '🚂', category: 'Core' },
        { name: 'REST API', icon: '🌐', category: 'Core' },
        { name: 'JWT Auth', icon: '🔐', category: 'Core' },
        { name: 'NestJS', icon: '🪺', category: 'Learning' }
      ]
    },
    {
      id: 'databases',
      title: 'Databases',
      icon: FiDatabase,
      skills: [
        { name: 'MongoDB', icon: '🍃', category: 'Core' },
        { name: 'MySQL', icon: '🐬', category: 'Familiar' },
        { name: 'Sequelize', icon: '📊', category: 'Learning' }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: FiGlobe,
      skills: [
        { name: 'React', icon: '⚛️', category: 'Learning' },
        { name: 'HTML', icon: '🌐', category: 'Familiar' },
        { name: 'CSS', icon: '🎨', category: 'Familiar' },
        { name: 'Tailwind CSS', icon: '💨', category: 'Learning' }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Services',
      icon: FiTool,
      skills: [
        { name: 'Git & GitHub', icon: '📚', category: 'Core' },
        { name: 'Nodemailer', icon: '📧', category: 'Core' },
        { name: 'Khalti', icon: '💳', category: 'Core' },
        { name: 'PayPal', icon: '💲', category: 'Core' },
        { name: 'Postman', icon: '📮', category: 'Familiar' }
      ]
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Core':
        return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      case 'Learning':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300';
      case 'Familiar':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300';
      case 'Basic':
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-4">
            Skills & Technologies
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            My technical skills as a backend developer, currently learning frontend.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.id} className="space-y-8">
              <div className="flex items-center space-x-3 mb-8">
                <category.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <div key={index} className="card group">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl">{skill.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                          {skill.name}
                        </h3>
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(skill.category)}`}>
                          {skill.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Categories Legend */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skill Categories Legend
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-3"></div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Core</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Proficient and frequently used
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-3"></div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Learning</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Currently learning and improving
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto mb-3"></div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Familiar</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Basic understanding and experience
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-4 h-4 bg-gray-500 rounded-full mx-auto mb-3"></div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Basic</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Fundamental knowledge
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills; 