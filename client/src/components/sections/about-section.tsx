import React from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const AboutSection: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 
          className={cn(
            "text-3xl md:text-4xl font-bold text-center mb-12 transition ease-out duration-500",
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          )}
        >
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div 
            className={cn(
              "md:w-2/5 transition ease-out duration-700 delay-200",
              isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-lg opacity-70 dark:opacity-50"></div>
              <img 
                src="/assets/jeffery-profile.jpg" 
                alt="Jeffery Onome Emuodafevware - About Me" 
                className="rounded-2xl shadow-xl relative z-10 w-full object-cover h-auto"
              />

              <div className="absolute -bottom-5 -left-5 bg-white dark:bg-gray-700 rounded-lg p-3 shadow-lg z-20">
                <i className="fas fa-code text-blue-500 text-3xl"></i>
              </div>
            </div>
          </div>

          <div 
            className={cn(
              "md:w-3/5 transition ease-out duration-700 delay-400",
              isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Full-Stack Software Engineer</h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack software engineer with expertise in building complete web applications using JavaScript/TypeScript, React, and Node.js. With 3+ years of experience delivering high-quality solutions, I bridge the gap between frontend and backend development to create seamless user experiences.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I enjoy tackling complex problems and transforming ideas into functional, elegant applications. My focus on clean code, best practices, and continuous learning allows me to adapt quickly to new technologies and deliver solutions that drive business value. I'm equally comfortable working on interactive UI components as I am designing efficient database schemas and API architectures.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <i className="fas fa-graduation-cap text-blue-500 mr-3 w-5 text-center"></i>
                <span className="text-gray-700 dark:text-gray-300">Computer Science Degree</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-briefcase text-blue-500 mr-3 w-5 text-center"></i>
                <span className="text-gray-700 dark:text-gray-300">3+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-project-diagram text-blue-500 mr-3 w-5 text-center"></i>
                <span className="text-gray-700 dark:text-gray-300">20+ Projects Completed</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-users text-blue-500 mr-3 w-5 text-center"></i>
                <span className="text-gray-700 dark:text-gray-300">Team Collaboration</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                #JavaScript
              </span>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                #TypeScript
              </span>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                #React
              </span>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                #Next.js
              </span>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                #Node.js
              </span>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                #Express
              </span>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                #MongoDB
              </span>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                #PostgreSQL
              </span>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                #AWS
              </span>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                #DevOps
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
