import { FiCode, FiDatabase, FiServer, FiGlobe, FiTool } from 'react-icons/fi';
import React from 'react';

const Skills = ({ theme }) => {
  const isDark = theme === 'dark';

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
        { name: 'C', icon: '🔧', category: 'Basic' },
      ],
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
        { name: 'NestJS', icon: '🪺', category: 'Learning' },
      ],
    },
    {
      id: 'databases',
      title: 'Databases',
      icon: FiDatabase,
      skills: [
        { name: 'MongoDB', icon: '🍃', category: 'Core' },
        { name: 'MySQL', icon: '🐬', category: 'Familiar' },
        { name: 'Sequelize', icon: '📊', category: 'Learning' },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: FiGlobe,
      skills: [
        { name: 'React', icon: '⚛️', category: 'Learning' },
        { name: 'HTML', icon: '🌐', category: 'Familiar' },
        { name: 'CSS', icon: '🎨', category: 'Familiar' },
        { name: 'Tailwind CSS', icon: '💨', category: 'Learning' },
      ],
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
        { name: 'Postman', icon: '📮', category: 'Familiar' },
      ],
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Core':
        return 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200';
      case 'Learning':
        return 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200';
      case 'Familiar':
        return 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200';
      case 'Basic':
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100';
    }
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 group">
          <h1
            className={`text-3xl md:text-4xl font-bold transition-colors duration-300 mb-4 ${
              isDark
                ? 'text-white group-hover:text-green-400'
                : 'text-gray-900 group-hover:text-green-600'
            }`}
          >
            Skills & Technologies
          </h1>
          <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
            My technical skills as a backend developer, currently learning frontend.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.id} className="space-y-8">
              <div className="flex items-center space-x-3 mb-8">
                <category.icon className={`w-6 h-6 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                {/* Category title: always visible with proper color */}
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {category.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </h3>
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${getCategoryColor(
                          skill.category
                        )}`}
                      >
                        {skill.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary (Footer) */}
        <div className="mt-20 text-center group">
          <h2
            className={`text-2xl font-bold mb-8 transition-colors duration-300 ${
              isDark
                ? 'text-white group-hover:text-green-400'
                : 'text-gray-900 group-hover:text-green-600'
            }`}
          >
            Skills Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-green-400' : 'text-green-600'}`}>6</div>
              <div className="text-gray-600 dark:text-gray-400">Languages</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-green-400' : 'text-green-600'}`}>5</div>
              <div className="text-gray-600 dark:text-gray-400">Backend Tools</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-green-400' : 'text-green-600'}`}>3</div>
              <div className="text-gray-600 dark:text-gray-400">Databases</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-green-400' : 'text-green-600'}`}>5</div>
              <div className="text-gray-600 dark:text-gray-400">Tools & Services</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;