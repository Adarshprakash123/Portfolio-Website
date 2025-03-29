
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800',
      description: 'A fully responsive e-commerce website with user authentication, product filtering, and payment integration.',
      technologies: ["React", "TypeScript", "Tailwind CSS", "ShadCN (Radix UI)", "React Hook Form", "Zod", "React Query", "EmailJS", "Recharts", "Date-fns", "React Router DOM", "Next-Themes", "Sonner", "ESLint", "SWC", "PostCSS"],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Zoom Clone',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800',
      description: 'A drag-and-drop task management application with real-time updates and team collaboration features.',
      technologies: ['NextJS', 'TypeScript', 'Tailwind CSS','Auth.JS','Clerk'],
      liveLink: 'https://zoom-clone-xi-five.vercel.app/',
      githubLink: 'https://github.com/Adarshprakash123/Zoom_Clone'
    },
    {
      id: 3,
      title: 'Cars-Hub',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800',
      description: 'A visual-focused travel blog with interactive maps and image galleries.',
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Headless UI", "Autoprefixer", "PostCSS"],
      liveLink: 'https://car-website-one-weld.vercel.app/',
      githubLink: 'https://github.com/Adarshprakash123/Car_Website'
    },
    {
      id: 4,
      title: 'OTP-Management',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800',
      description: 'A fitness tracking application with workout plans, progress charts, and social sharing.',
      technologies: ["Node.js", "Express", "MongoDB (Mongoose)", "Twilio", "CORS", "Body-Parser", "Dotenv","ReactJS"],
      liveLink: 'https://otp-verification-3-tea3.onrender.com/',
      githubLink: 'https://github.com/Adarshprakash123/OTP_Verification'
    },
    {
      id: 5,
      title: 'NPM Package',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800',
      description: 'A custom portfolio website showcasing creative works and professional experience.',
      technologies: ["Node.js", "NPM"],
      liveLink: 'https://www.npmjs.com/package/ok_first',
      githubLink: 'https://github.com/Adarshprakash123/Npm-package'
    },
    {
      id: 6,
      title: 'REST-APi Testing',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800',
      description: 'A modern UI design for a recipe application with intuitive search and filtering.',
      technologies: ["Vite", "React", "TypeScript", "Tailwind CSS", "ShadCN (Radix UI)", "React Hook Form", "Zod", "React Query", "EmailJS", "Recharts", "Date-fns", "React Router DOM", "Next-Themes", "Sonner", "ESLint", "SWC", "PostCSS", "Cmdk", "Embla Carousel", "React Resizable Panels", "Vaul", "UUID"],
      liveLink: 'https://rest-api-testing-three.vercel.app/',
      githubLink: 'https://github.com/Adarshprakash123/REST_API_Testing'
    }
  ];

  const filteredProjects = activeFilter === 'all' ? 
    projects : 
    projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h6 className="text-blue-600 font-semibold mb-2">MY WORK</h6>
          <h2 className="heading text-3xl md:text-4xl gradient-text">Recent Projects</h2>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white p-1 rounded-lg shadow-sm">
            <button
              className={`px-4 py-2 text-sm rounded-md transition-all ${activeFilter === 'all' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button
              className={`px-4 py-2 text-sm rounded-md transition-all ${activeFilter === 'web' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveFilter('web')}
            >
              Web
            </button>
            <button
              className={`px-4 py-2 text-sm rounded-md transition-all ${activeFilter === 'app' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveFilter('app')}
            >
              App
            </button>
            <button
              className={`px-4 py-2 text-sm rounded-md transition-all ${activeFilter === 'design' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveFilter('design')}
            >
              Design
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <a href={project.liveLink} className="bg-white p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <a href={project.githubLink} className="bg-white p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
