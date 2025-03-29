
import { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  
  const skills = {
    frontend: [
      { name: 'HTML5', percentage: 95 },
      { name: 'CSS3/SCSS', percentage: 90 },
      { name: 'JavaScript', percentage: 92 },
      { name: 'TypeScript', percentage: 85 },
      { name: 'React.js', percentage: 90 },
      { name: 'Tailwind CSS', percentage: 88 },
      { name: 'Next.js', percentage: 83 },
    ],
    backend: [
      { name: 'Node.js', percentage: 85 },
      { name: 'Express.js', percentage: 82 },
      { name: 'MongoDB', percentage: 98 },
      { name: 'PostgreSQL', percentage: 75 },
      { name: 'RESTful APIs', percentage: 88 },
      { name: 'GraphQL', percentage: 72 },
      { name: 'Firebase', percentage: 80 },
    ],
    tools: [
      { name: 'Git/GitHub', percentage: 100 },
      { name: 'Docker', percentage: 70 },
      { name: 'VS Code', percentage: 96 },
      { name: 'Figma', percentage: 83 },
      { name: 'Jest', percentage: 78 },
      { name: 'CI/CD', percentage: 75 },
      { name: 'Webpack', percentage: 76 },
    ]
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h6 className="text-blue-600 font-semibold mb-2">MY SKILLS</h6>
          <h2 className="heading text-3xl md:text-4xl gradient-text">My Technical Skills</h2>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-5 py-2 text-sm font-medium rounded-l-lg transition-colors ${activeTab === 'frontend' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setActiveTab('frontend')}
            >
              Frontend
            </button>
            <button
              type="button"
              className={`px-5 py-2 text-sm font-medium transition-colors ${activeTab === 'backend' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setActiveTab('backend')}
            >
              Backend
            </button>
            <button
              type="button"
              className={`px-5 py-2 text-sm font-medium rounded-r-lg transition-colors ${activeTab === 'tools' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setActiveTab('tools')}
            >
              Tools
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {skills[activeTab as keyof typeof skills].map((skill, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-blue-600 font-medium">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${skill.percentage}%`, transition: 'width 1s ease-in-out' }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center overflow-hidden text-gray-400">
          <div className="flex whitespace-nowrap space-x-8 animate-marquee">
            {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Tailwind', 'Git', 'MongoDB', 'Next.js', 'Express', 'Firebase'].map((tech, index) => (
              <span key={index} className="text-xl font-medium px-4">{tech}</span>
            ))}
            {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Tailwind', 'Git', 'MongoDB', 'Next.js', 'Express', 'Firebase'].map((tech, index) => (
              <span key={index + 12} className="text-xl font-medium px-4">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
