
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-black/70 border-t border-cyber-accent/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-xl font-bold cyber-text">CYBER<span className="text-white">DEV</span></span>
            </Link>
            <p className="text-gray-400 mb-6">
              A personal portfolio and blog focused on web development, design, and technology with a cyberpunk aesthetic.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyber-accent transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyber-blue">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyber-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyber-accent transition-colors">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-cyber-accent transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-cyber-accent transition-colors">Blog</Link>
              </li>
            </ul>
          </div>
          
          {/* Blog categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyber-blue">Blog Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog?tag=Technology" className="text-gray-400 hover:text-cyber-accent transition-colors">Technology</Link>
              </li>
              <li>
                <Link to="/blog?tag=Design" className="text-gray-400 hover:text-cyber-accent transition-colors">Design</Link>
              </li>
              <li>
                <Link to="/blog?tag=Tutorials" className="text-gray-400 hover:text-cyber-accent transition-colors">Tutorials</Link>
              </li>
              <li>
                <Link to="/blog?tag=Cyberpunk" className="text-gray-400 hover:text-cyber-accent transition-colors">Cyberpunk</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyber-blue">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a href="mailto:contact@example.com" className="hover:text-cyber-accent transition-colors">contact@example.com</a>
              </li>
              <li className="text-gray-400">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-accent transition-colors">github.com/cyberdev</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} CyberDev. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop} 
            className="flex items-center text-cyber-blue hover:text-cyber-accent transition-colors"
            aria-label="Back to top"
          >
            Back to top <ArrowUp className="ml-1 w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
