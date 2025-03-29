
import { User, Calendar, Briefcase, MessageCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h6 className="text-blue-600 font-semibold mb-2">ABOUT ME</h6>
          <h2 className="heading text-3xl md:text-4xl gradient-text">Get to know me better</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-gray-700 mb-6">
              👋 I'm Adarsh Prakash, a passionate Full Stack developer with over 1 years of experience in building modern, responsive websites and web applications.
            </p>
            <p className="text-gray-700 mb-6">
              I specialize in front-end development using React, TypeScript, and Tailwind CSS, but I'm also proficient in back-end technologies like Node.js and databases.
            </p>
            <p className="text-gray-700 mb-6">
              My approach to development focuses on creating clean, maintainable code that delivers exceptional user experiences. I'm committed to staying current with industry trends and best practices.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Full Name</h3>
                  <p className="text-gray-600">Adarsh Prakash</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Experience</h3>
                  <p className="text-gray-600">1+ Years</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Projects</h3>
                  <p className="text-gray-600">30+ Completed</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Support</h3>
                  <p className="text-gray-600">Online 24/7</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800" 
                  alt="John Doe Working" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-10 -right-10 -z-10 w-24 h-24 bg-blue-600 rounded-lg"></div>
              <div className="absolute -bottom-10 -left-10 -z-10 w-40 h-40 bg-blue-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
