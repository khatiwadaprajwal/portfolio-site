import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiServer } from 'react-icons/fi';
import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Backend System Project',
      description: 'Summer project of  E-Commerce Backend System - Developed secure, scalable API for authentication, product listings, order placement, and cart management with JWT authentication, payment integrations, and MongoDB schemas.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Khalti', 'PayPal', 'Nodemailer'],
      category: 'backend',
      githubUrl: 'https://github.com/khatiwadaprajwal/Project',
      liveUrl: null,
      icon: '🛒'
    },
    {
      id: 2,
      title: 'Personal Portfolio (This Site)',
      description: 'Modern React portfolio website built with Vite, Tailwind CSS, and responsive design showcasing my projects and skills.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'React Icons'],
      category: 'frontend',
      githubUrl: 'https://github.com/khatiwadaprajwal/portfolio',
      liveUrl: null,
      icon: '💼'
    },
    {
      id: 3,
      title: 'Construction Management Backend',
      description: 'Built API using Node.js and Express for contractor-client management system with modular controller and route-based approach.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST API'],
      category: 'backend',
      githubUrl: 'https://github.com/khatiwadaprajwal/construction_project_backend',
      liveUrl: null,
      icon: '🏗️'
    },
    {
      id: 4,
      title: 'E-Commerce Backend',
      description: 'Complete e-commerce backend system with RESTful APIs, user management, product catalog, order processing.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
      category: 'backend',
      githubUrl: 'https://github.com/khatiwadaprajwal/Ecommerce_backend',
      liveUrl: null,
      icon: '🛍️'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            A collection of my work, from backend APIs to learning frontend development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900/30'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card group">
              <div className="flex items-start space-x-6">
                <div className="text-4xl">{project.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center space-x-6">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      <FiGithub className="w-5 h-5" />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                      >
                        <FiExternalLink className="w-5 h-5" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <FiCode className="w-16 h-16 text-gray-400 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              No projects match the selected filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects; 