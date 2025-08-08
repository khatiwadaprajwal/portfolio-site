import { FiGithub, FiMail } from 'react-icons/fi';
import React from 'react';

const Footer = ({ theme = "light" }) => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/khatiwadaprajwal',
      icon: FiGithub,
    },
    {
      name: 'Email',
      url: 'mailto:prajwalkhatiwada28@gmail.com',
      icon: FiMail,
    },
  ];

  const isDark = theme === "dark";

  return (
    <footer className={`${isDark ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'} border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Prajwal Khatiwada
            </h3>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Backend developer passionate about building scalable APIs and learning new technologies. 
              Currently pursuing BIM and seeking internship opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className={`${isDark ? 'text-gray-400 hover:text-green-400' : 'text-gray-600 hover:text-green-600'} transition-colors duration-200`}>
                  About Me
                </a>
              </li>
              <li>
                <a href="/projects" className={`${isDark ? 'text-gray-400 hover:text-green-400' : 'text-gray-600 hover:text-green-600'} transition-colors duration-200`}>
                  Projects
                </a>
              </li>
              <li>
                <a href="/skills" className={`${isDark ? 'text-gray-400 hover:text-green-400' : 'text-gray-600 hover:text-green-600'} transition-colors duration-200`}>
                  Skills
                </a>
              </li>
              <li>
                <a href="/contact" className={`${isDark ? 'text-gray-400 hover:text-green-400' : 'text-gray-600 hover:text-green-600'} transition-colors duration-200`}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Contact
            </h3>
            <div className="space-y-2 text-sm">
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                prajwalkhatiwada28@gmail.com
              </p>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                +977 9824005179
              </p>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Lalitpur, Nepal
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`mt-8 pt-8 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex justify-center">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDark ? 'text-gray-400 hover:text-green-400' : 'text-gray-600 hover:text-green-600'} transition-colors duration-200`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 