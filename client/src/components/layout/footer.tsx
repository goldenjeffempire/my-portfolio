import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-2xl font-bold tracking-tight flex items-center text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Jeffery</span>
              <span className="text-gray-500">.dev</span>
            </a>
            <p className="mt-2 text-sm">Full-Stack Software Engineer</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left mb-8 md:mb-0">
            <div>
              <h4 className="text-white font-semibold mb-3">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-blue-400 transition-colors duration-200">Home</a></li>
                <li><a href="#about" className="hover:text-blue-400 transition-colors duration-200">About</a></li>
                <li><a href="#skills" className="hover:text-blue-400 transition-colors duration-200">Skills</a></li>
                <li><a href="#projects" className="hover:text-blue-400 transition-colors duration-200">Projects</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#blog" className="hover:text-blue-400 transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Resume</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Portfolio</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#contact" className="hover:text-blue-400 transition-colors duration-200">Contact</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">GitHub</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Twitter</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {currentYear} Jeffery Onome Emuodafevware. All rights reserved.</p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200" aria-label="GitHub">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200" aria-label="LinkedIn">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200" aria-label="Twitter">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200" aria-label="Dev.to">
              <i className="fab fa-dev text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
