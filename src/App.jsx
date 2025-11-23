import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Dynamic class variables
  const bgColor = theme === 'light' ? 'bg-white' : 'bg-gray-900';
  const textColor = theme === 'light' ? 'text-black' : 'text-white';

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${bgColor} ${textColor} flex flex-col`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main className="pt-16 flex-grow">
          <Routes>
            <Route path="/portfolio-site" element={<Home theme={theme} />} />
            <Route path="/about" element={<About theme={theme} />} />
            <Route path="/projects" element={<Projects theme={theme} />} />
            <Route path="/skills" element={<Skills theme={theme} />} />
            <Route path="/contact" element={<Contact theme={theme} />} />
            <Route path="/" element={<Home theme={theme} />} />
          </Routes>
        </main>

        <Footer theme={theme} />
      </div>
    </Router>
  );
}

export default App;
