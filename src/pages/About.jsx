import React from 'react';
import { 
  FiCode, 
  FiDatabase, 
  FiGlobe, 
  FiUsers, 
  FiBook 
} from 'react-icons/fi';

const About = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-green-400' : 'text-green-600'
          }`}>
            About Me
          </h1>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Backend developer passionate about building scalable APIs and learning new technologies.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

          {/* Personal Info */}
          <div className="space-y-8">
            <div>
              <h2 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Who I Am
              </h2>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm Prajwal Khatiwada, an energetic and dedicated backend developer currently
                pursuing a Bachelor's in Information Management (BIM) at Shankerdev Campus.
                I have hands-on experience with RESTful API development, authentication systems,
                MongoDB schema design, and third-party payment integrations.
              </p>
              <p className={`leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm currently learning React to become a full-stack developer and seeking internship
                opportunities to work on real-world SaaS products. I love contributing to open source
                and building projects that solve real problems.
              </p>
            </div>

            {/* What I Do */}
            <div>
              <h2 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                What I Do
              </h2>

              <div className="space-y-6">

                {/* Backend Development */}
                <div className="flex items-start space-x-4">
                  <FiCode className={`w-6 h-6 mt-1 ${
                    isDark ? 'text-green-400' : 'text-green-600'
                  }`} />
                  <div>
                    <h3 className={`font-semibold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      Backend Development
                    </h3>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Building scalable APIs with Node.js, Express, and MongoDB
                    </p>
                  </div>
                </div>

                {/* Database Design */}
                <div className="flex items-start space-x-4">
                  <FiDatabase className={`w-6 h-6 mt-1 ${
                    isDark ? 'text-green-400' : 'text-green-600'
                  }`} />
                  <div>
                    <h3 className={`font-semibold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      Database Design
                    </h3>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Creating efficient MongoDB schemas and MySQL databases
                    </p>
                  </div>
                </div>

                {/* Learning Frontend */}
                <div className="flex items-start space-x-4">
                  <FiGlobe className={`w-6 h-6 mt-1 ${
                    isDark ? 'text-green-400' : 'text-green-600'
                  }`} />
                  <div>
                    <h3 className={`font-semibold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      Learning Frontend
                    </h3>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Currently learning React to become a full-stack developer
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Skills Overview */}
          <div className="space-y-8">
            <h2 className={`text-2xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Key Skills
            </h2>

            <div className="space-y-6">
              
              {/* Languages */}
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Languages & Frameworks
                </h3>

                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "TypeScript", "Node.js", "Express.js"].map((item) => (
                    <span key={item}
                      className={`px-3 py-1 text-sm rounded-full ${
                        isDark
                          ? 'bg-green-900/40 text-green-300 border border-green-700'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {item}
                    </span>
                  ))}

                  <span className={`px-3 py-1 text-sm rounded-full ${
                    isDark
                      ? 'bg-blue-900/40 text-blue-300 border border-blue-700'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    React (Learning)
                  </span>
                </div>
              </div>

              {/* Databases */}
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Databases
                </h3>

                <div className="flex flex-wrap gap-2">
                  {["MongoDB", "MySQL"].map((item) => (
                    <span key={item}
                      className={`px-3 py-1 text-sm rounded-full ${
                        isDark
                          ? 'bg-green-900/40 text-green-300 border border-green-700'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Tools & Services
                </h3>

                <div className="flex flex-wrap gap-2">
                  {["Git & GitHub", "Postman", "Nodemailer", "Khalti", "PayPal"].map((item) => (
                    <span key={item}
                      className={`px-3 py-1 text-sm rounded-full ${
                        isDark
                          ? 'bg-green-900/40 text-green-300 border border-green-700'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Education */}
          <div className="space-y-8">
            <h2 className={`text-2xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Education
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FiBook className={`w-6 h-6 mt-1 ${
                  isDark ? 'text-green-400' : 'text-green-600'
                }`} />

                <div>
                  <h3 className={`font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Bachelor in Information Management (BIM)
                  </h3>
                  <p className={`text-sm ${
                    isDark ? 'text-green-400' : 'text-green-600'
                  }`}>
                    Shankerdev Campus
                  </p>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    2022 - Present
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-8">
            <h2 className={`text-2xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Experience
            </h2>

            <div className="space-y-6">

              <div className="flex items-start space-x-4">
                <FiUsers className={`w-6 h-6 mt-1 ${
                  isDark ? 'text-green-400' : 'text-green-600'
                }`} />

                <div>
                  <h3 className={`font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Backend Development
                  </h3>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    2+ years of learning and building projects
                  </p>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    RESTful APIs, Authentication, Database Design
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FiCode className={`w-6 h-6 mt-1 ${
                  isDark ? 'text-green-400' : 'text-green-600'
                }`} />

                <div>
                  <h3 className={`font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Open Source
                  </h3>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Contributing to projects and building solutions
                  </p>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    GitHub: @khatiwadaprajwal
                  </p>
                </div>
              </div>
              
            </div>
          </div>

        </div>

        {/* Hobbies */}
        <div className="space-y-8 mt-20">
          <h2 className={`text-2xl font-bold mb-8 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Hobbies & Interests
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className={`text-center p-8 rounded-xl ${
              isDark ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
              <div className="text-4xl mb-4">📈</div>
              <h3 className={`font-semibold mb-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Stock Market
              </h3>
              <p className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Following market trends and learning about investments
              </p>
            </div>

            <div className={`text-center p-8 rounded-xl ${
              isDark ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
              <div className="text-4xl mb-4">♟️</div>
              <h3 className={`font-semibold mb-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Chess
              </h3>
              <p className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Strategic thinking and problem solving
              </p>
            </div>

            <div className={`text-center p-8 rounded-xl ${
              isDark ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
              <div className="text-4xl mb-4">🏏</div>
              <h3 className={`font-semibold mb-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Cricket
              </h3>
              <p className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
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
