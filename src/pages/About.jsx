import { FiCode, FiDatabase, FiGlobe, FiUsers, FiBook, FiMapPin } from 'react-icons/fi';
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Backend developer passionate about building scalable APIs and learning new technologies.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Personal Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Who I Am
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                I'm Prajwal Khatiwada, an energetic and dedicated backend developer currently pursuing a Bachelor's in Information 
                Management (BIM) at Shankerdev Campus. I have hands-on experience with RESTful API development, 
                authentication systems, MongoDB schema design, and third-party payment integrations.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm currently learning React to become a full-stack developer and seeking internship opportunities 
                to work on real-world SaaS products. I love contributing to open source and building projects that 
                solve real problems.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                What I Do
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FiCode className="w-6 h-6 text-green-600 dark:text-green-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Backend Development</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Building scalable APIs with Node.js, Express, and MongoDB
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FiDatabase className="w-6 h-6 text-green-600 dark:text-green-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Database Design</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Creating efficient MongoDB schemas and MySQL databases
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FiGlobe className="w-6 h-6 text-green-600 dark:text-green-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Learning Frontend</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Currently learning React to become a full-stack developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Overview */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Key Skills
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Languages & Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">JavaScript</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">TypeScript</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">Express.js</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full">React (Learning)</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">MongoDB</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">MySQL</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Tools & Services</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">Git & GitHub</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">JWT Auth</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">Nodemailer</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">Khalti</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-start space-x-4">
                <FiBook className="w-8 h-8 text-green-600 dark:text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Shankerdev Campus
                  </h3>
                  <p className="text-green-600 dark:text-green-400 font-medium mb-2">
                    Bachelor of Information Management (BIM)
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Kathmandu • Ongoing
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start space-x-4">
                <FiBook className="w-8 h-8 text-green-600 dark:text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Aastha College
                  </h3>
                  <p className="text-green-600 dark:text-green-400 font-medium mb-2">
                    Commerce
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Jhapa • Year: 2078
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hobbies & Interests */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Hobbies & Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Stock Market</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Following market trends and learning about investments
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="text-4xl mb-4">♟️</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Chess</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Strategic thinking and problem solving
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="text-4xl mb-4">🏏</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Cricket</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Team sports and staying active
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 