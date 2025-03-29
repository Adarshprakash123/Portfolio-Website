
import { ArrowRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  const resumeLink = "https://drive.google.com/file/d/1ovqDgSJ9bfM8Fug_UDFxC2DpPNZB9noj/view";
  
  return (
    <section id="home" className="min-h-screen pt-28 pb-16 flex items-center dark:bg-gray-900 transition-colors duration-300">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2 animate-fade-in-up">Hello, I'm</p>
            <h1 className="heading text-4xl md:text-6xl mb-4 animate-fade-in-up dark:text-white" style={{ animationDelay: '100ms' }}>
              Adarsh Prakash
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Web Developer & Designer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              I build exceptional and accessible digital experiences for the web. Focused on creating clean, user-friendly interfaces with modern technologies.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <a href="#projects" className="btn btn-primary">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="btn border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white">
                Resume
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl dark:shadow-gray-900/50 animate-fade-in float-animation">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800"
                alt="John Doe"
                className="w-full h-full object-cover object-center"
              />
              <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-blue-600 opacity-30' : 'bg-blue-500 opacity-20'}`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
