import React from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface BlogPostCardProps {
  image: string;
  category: string;
  categoryBg: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  link: string;
  isVisible: boolean;
  delay: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  image,
  category,
  categoryBg,
  date,
  readTime,
  title,
  excerpt,
  link,
  isVisible,
  delay
}) => {
  return (
    <div 
      className={cn(
        "bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group",
        `transition ease-out duration-700 ${delay}`,
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className={categoryBg}>{category}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-3 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center"><i className="far fa-calendar mr-1"></i> {date}</span>
          <span className="mx-2">•</span>
          <span className="flex items-center"><i className="far fa-clock mr-1"></i> {readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {excerpt}
        </p>
        
        <a href={link} className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200">
          Read More <i className="fas fa-arrow-right ml-1 text-sm"></i>
        </a>
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  // Blog post data
  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600",
      category: "Tutorial",
      categoryBg: "bg-blue-600 text-white text-xs px-2 py-1 rounded-full",
      date: "July 15, 2023",
      readTime: "8 min read",
      title: "Building RESTful APIs with Django REST Framework",
      excerpt: "A comprehensive guide to creating robust, scalable APIs using Django REST Framework with authentication and permissions.",
      link: "#",
      delay: "delay-300"
    },
    {
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600",
      category: "Performance",
      categoryBg: "bg-green-600 text-white text-xs px-2 py-1 rounded-full",
      date: "June 28, 2023",
      readTime: "12 min read",
      title: "Database Optimization Techniques for Django",
      excerpt: "Advanced strategies to optimize database queries, indexes, and ORM usage for high-performance Django applications.",
      link: "#",
      delay: "delay-400"
    },
    {
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600",
      category: "DevOps",
      categoryBg: "bg-indigo-600 text-white text-xs px-2 py-1 rounded-full",
      date: "May 17, 2023",
      readTime: "10 min read",
      title: "Containerization with Docker and Django",
      excerpt: "Step-by-step guide to containerizing Django applications with Docker for consistent development and deployment environments.",
      link: "#",
      delay: "delay-500"
    }
  ];

  return (
    <section id="blog" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 
          className={cn(
            "text-3xl md:text-4xl font-bold text-center mb-4 transition ease-out duration-500",
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          )}
        >
          Latest <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Articles</span>
        </h2>
        
        <p 
          className={cn(
            "text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto transition ease-out duration-500 delay-200",
            isIntersecting ? "opacity-100" : "opacity-0"
          )}
        >
          Technical insights, tutorials, and thoughts on software development and backend technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard 
              key={`blog-post-${index}`}
              image={post.image}
              category={post.category}
              categoryBg={post.categoryBg}
              date={post.date}
              readTime={post.readTime}
              title={post.title}
              excerpt={post.excerpt}
              link={post.link}
              isVisible={isIntersecting}
              delay={post.delay}
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
            <span>View All Articles</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
