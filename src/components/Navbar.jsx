import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiCode } from 'react-icons/fi';

const Navbar = ({ pageName, theme = "light", toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' },
  ];

  const isDark = theme === "dark";
  const isActive = (path) => location.pathname === path;

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b shadow-sm ${
      isDark ? 'bg-gray-900/90 border-gray-700' : 'bg-white/90 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={menuRef}>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <FiCode className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Prajwal
              </span>
              <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                Backend Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 shadow-sm'
                    : isDark
                      ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-3">
            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              className={`ml-2 px-3 py-1 rounded text-sm transition-colors duration-200 ${
                isDark
                  ? 'bg-gray-700 hover:bg-gray-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
              }`}
            >
              {isDark ? "☀ Light" : "🌙 Dark"}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-200 ${
                isDark
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-4 space-y-1 border-t shadow-lg ${
              isDark
                ? 'bg-gray-900 border-gray-700'
                : 'bg-white border-gray-200'
            }`}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 shadow-sm'
                      : isDark
                        ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
