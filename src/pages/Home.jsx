import { FiGithub, FiMail, FiPhone, FiMapPin, FiDownload, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import React from 'react';

const Home = () => {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-green-600 dark:text-green-400">Prajwal Khatiwada</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
            Backend Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            I'm a passionate backend developer currently pursuing BIM at Shankerdev Campus. 
            I build scalable APIs, work with databases, and I'm learning React to become a full-stack developer. 
            Seeking internship opportunities to contribute to real-world projects.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="contact" // relative path
              className="btn-primary inline-flex items-center justify-center"
            >
              Get In Touch
              <FiArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              to="projects" // relative path
              className="btn-secondary inline-flex items-center justify-center"
            >
              View My Work
              <FiArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">2+</div>
            <div className="text-gray-600 dark:text-gray-400">Years Learning</div>
          </div>
          <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-400">Projects Built</div>
          </div>
          <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">3+</div>
            <div className="text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold dark:text-white mb-8">
            Let's Connect
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <FiMail className="w-6 h-6 text-green-600 dark:text-green-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300 text-center break-words">
                prajwalkhatiwada28@gmail.com
              </span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <FiPhone className="w-6 h-6 text-green-600 dark:text-green-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300 text-center">
                +977 9824005179
              </span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg sm:col-span-2 lg:col-span-1">
              <FiMapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300 text-center">
                Lalitpur, Nepal
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
