import { FiGithub, FiExternalLink } from 'react-icons/fi';
import React, { useState } from 'react';

const Projects =  ({ theme = "light" }) => {
  const isDark = theme === "dark";

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Backend System Project',
      description:
        'Summer project of E-Commerce Backend System - Developed secure, scalable API for authentication, product listings, order placement, and cart management with JWT authentication, payment integrations, and MongoDB schemas.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Khalti', 'PayPal', 'Nodemailer'],
      category: 'backend',
      githubUrl: 'https://github.com/khatiwadaprajwal/Project',
      liveUrl: null,
      icon: '🛒',
    },
    {
      id: 2,
      title: 'Personal Portfolio (This Site)',
      description:
        'Modern React portfolio website built with Vite, Tailwind CSS, and responsive design showcasing my projects and skills.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'React Icons'],
      category: 'frontend',
      githubUrl: 'https://github.com/khatiwadaprajwal/portfolio-site',
      liveUrl: null,
      icon: '💼',
    },
    {
      id: 3,
      title: 'Construction Management Backend',
      description:
        'Built API using Node.js and Express for contractor-client management system with modular controller and route-based approach.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST API'],
      category: 'backend',
      githubUrl: 'https://github.com/khatiwadaprajwal/construction_project_backend',
      liveUrl: null,
      icon: '🏗️',
    },
    {
      id: 4,
      title: 'E-Commerce Backend',
      description:
        'Complete e-commerce backend system with RESTful APIs, user management, product catalog, order processing.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
      category: 'backend',
      githubUrl: 'https://github.com/khatiwadaprajwal/Ecommerce_backend',
      liveUrl: null,
      icon: '🛍️',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-4">
            My Projects
          </h1>
          <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
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
            <div
              key={project.id}
              className="card p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow hover:shadow-lg transition-shadow group"
            >
              <div className="flex flex-col space-y-4">

                {/* Icon + Title */}
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{project.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-green-600 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Updated Description */}
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    <FiGithub className="w-5 h-5" />
                    <span className="text-sm">View Code</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      <FiExternalLink className="w-5 h-5" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
