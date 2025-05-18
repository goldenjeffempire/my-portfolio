import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  categoryBg: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  isVisible: boolean;
  delay: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  category,
  categoryBg,
  description,
  technologies,
  githubLink,
  liveLink,
  isVisible,
  delay
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div 
      className={cn(
        "group bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative",
        `transition ease-out duration-700 ${delay}`,
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      {/* Project image */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-56 object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="p-6 relative z-10">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{title}</h3>
          <span className={`${categoryBg} text-xs px-2 py-1 rounded-full`}>{category}</span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={`tech-${index}`} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <a href={githubLink} className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">
            <i className="fab fa-github"></i> <span className="ml-1">GitHub</span>
          </a>
          <a href={liveLink} className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">
            <i className="fas fa-external-link-alt"></i> <span className="ml-1">Live Demo</span>
          </a>
        </div>
      </div>
      
      {/* Video Preview Overlay */}
      <div 
        className={cn(
          "absolute inset-0 bg-black/80 flex items-center justify-center z-20 transition",
          showDetails ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="text-center p-4">
          <span className="inline-block p-3 rounded-full bg-blue-600/80 mb-4">
            <i className="fas fa-play text-white text-xl"></i>
          </span>
          <p className="text-white text-sm">Click to view the demo video</p>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  // Project data
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600",
      title: "E-commerce API Platform",
      category: "Django",
      categoryBg: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      description: "A comprehensive RESTful API backend that powers modern e-commerce applications with secure payment processing and inventory management.",
      technologies: ["Python", "Django REST", "PostgreSQL", "Redis", "Docker"],
      githubLink: "#",
      liveLink: "#",
      delay: "delay-300"
    },
    {
      image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600",
      title: "Task Management System",
      category: "Full Stack",
      categoryBg: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      description: "A collaborative task management platform with real-time updates, user authentication, and role-based permissions system.",
      technologies: ["Django", "React", "Channels", "WebSockets", "JWT"],
      githubLink: "#",
      liveLink: "#",
      delay: "delay-400"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600",
      title: "Data Analytics Dashboard",
      category: "Data",
      categoryBg: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      description: "Interactive data visualization platform that transforms complex datasets into actionable insights through customizable dashboards.",
      technologies: ["Python", "Django", "D3.js", "Pandas", "AWS"],
      githubLink: "#",
      liveLink: "#",
      delay: "delay-500"
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 
          className={cn(
            "text-3xl md:text-4xl font-bold text-center mb-4 transition ease-out duration-500",
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          )}
        >
          Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Projects</span>
        </h2>
        
        <p 
          className={cn(
            "text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto transition ease-out duration-500 delay-200",
            isIntersecting ? "opacity-100" : "opacity-0"
          )}
        >
          A showcase of my most significant projects that demonstrate my technical abilities and problem-solving approach.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={`project-card-${index}`}
              image={project.image}
              title={project.title}
              category={project.category}
              categoryBg={project.categoryBg}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              isVisible={isIntersecting}
              delay={project.delay}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className={cn(
              "inline-flex items-center px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg",
              isIntersecting ? "animate-fade-in" : "opacity-0"
            )}
          >
            <span>View All Projects</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
