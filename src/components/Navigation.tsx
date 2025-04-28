
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Code, FileText, User } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", path: "/", icon: <Home className="w-5 h-5 mr-2" /> },
    { name: "Projects", path: "/projects", icon: <Code className="w-5 h-5 mr-2" /> },
    { name: "Blog", path: "/blog", icon: <FileText className="w-5 h-5 mr-2" /> },
    { name: "About", path: "/about", icon: <User className="w-5 h-5 mr-2" /> }
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-accent/20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold cyber-text">CYBER<span className="text-white">DEV</span></span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path} 
              className="flex items-center text-gray-300 hover:text-cyber-accent transition-colors duration-300 relative group"
            >
              <span className="group-hover:animate-pulse-glow">{item.name}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyber-accent group-hover:w-full transition-all duration-300"></div>
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white hover:text-cyber-accent"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden cyber-grid">
          <div className="px-4 py-2 bg-cyber-dark/95 border-t border-cyber-accent/20 space-y-2">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path} 
                className="flex items-center py-3 text-gray-300 hover:text-cyber-accent"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
