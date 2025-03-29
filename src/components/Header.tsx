
import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Google Drive resume link
  const resumeLink = "https://drive.google.com/file/d/1ipWnob9ixN4XenBBFVoF_m1bQFvYfyyO/view";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-900/90 dark:shadow-gray-800/10' 
        : 'bg-transparent dark:bg-transparent'
    }`}>
      <div className="container flex items-center justify-between">
        <a href="#" className="text-2xl font-bold dark:text-white">
          Adarsh<span className="text-blue-600 dark:text-blue-400">Prakash</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-base font-medium hover:text-blue-600 transition-colors dark:text-gray-200 dark:hover:text-blue-400">Home</a>
          <a href="#about" className="text-base font-medium hover:text-blue-600 transition-colors dark:text-gray-200 dark:hover:text-blue-400">About</a>
          <a href="#skills" className="text-base font-medium hover:text-blue-600 transition-colors dark:text-gray-200 dark:hover:text-blue-400">Skills</a>
          <a href="#projects" className="text-base font-medium hover:text-blue-600 transition-colors dark:text-gray-200 dark:hover:text-blue-400">Projects</a>
          <a href="#contact" className="text-base font-medium hover:text-blue-600 transition-colors dark:text-gray-200 dark:hover:text-blue-400">Contact</a>
          <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Resume</a>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="block text-gray-800 dark:text-white" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 bg-white dark:bg-gray-900 shadow-md p-4 md:hidden z-50">
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="text-base font-medium hover:text-blue-600 transition-colors dark:text-gray-200 dark:hover:text-blue-400" onClick={toggleMobileMenu}>Home</a>
            <a href="#about" className="text-base font-medium hover:text-blue-600 transition-colors dark:text-gray-200 dark:hover:text-blue-400" onClick={toggleMobileMenu}>About</a>
            <a href="#skills" className="text-base font-medium hover:text-blue-600 transition-colors dark:text-gray-200 dark:hover:text-blue-400" onClick={toggleMobileMenu}>Skills</a>
            <a href="#projects" className="text-base font-medium hover:text-blue-600 transition-colors dark:text-gray-200 dark:hover:text-blue-400" onClick={toggleMobileMenu}>Projects</a>
            <a href="#contact" className="text-base font-medium hover:text-blue-600 transition-colors dark:text-gray-200 dark:hover:text-blue-400" onClick={toggleMobileMenu}>Contact</a>
            <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary inline-block text-center" onClick={toggleMobileMenu}>Resume</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
