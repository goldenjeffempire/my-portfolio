import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

// Animated text words for hero section
const animatedWords = ['scalable', 'efficient', 'modern', 'robust', 'interactive'];

const fadeInFromBottom = "animate-[fadeInUp_0.5s_ease-out]";
const fadeInFromLeft = "animate-[fadeInLeft_0.7s_ease-out]";
const fadeInFromRight = "animate-[fadeInRight_0.7s_ease-out]";
const pulseAnimation = "animate-[pulse_2s_ease-in-out_infinite]";

const HeroSection: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  
  // Word rotation effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex(prev => (prev + 1) % animatedWords.length);
    }, 2000);
    
    return () => clearInterval(intervalId);
  }, []);

  // Abstract background wave SVG
  const BackgroundWaves = () => (
    <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.3),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.3),transparent_70%)]"></div>
    </div>
  );

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="pt-28 pb-20 md:pt-32 md:pb-32 relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800"
    >
      <BackgroundWaves />
      
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row md:items-center relative z-10">
        <div className="md:w-1/2 md:pr-10">
          <div className="mb-8">
            <span 
              className={cn(
                "text-blue-600 dark:text-blue-400 font-semibold transition ease-out duration-500",
                isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              )}
            >
              Full-Stack Software Engineer
            </span>
            
            <h1 
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-bold mt-2 tracking-tight transition ease-out duration-700 delay-200",
                isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              )}
            >
              Jeffery Onome <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Emuodafevware</span>
            </h1>
            
            <p 
              className={cn(
                "text-gray-600 dark:text-gray-300 mt-6 text-lg max-w-xl transition ease-out duration-700 delay-400",
                isIntersecting ? "opacity-100" : "opacity-0"
              )}
            >
              I build <span className="font-semibold text-blue-600 dark:text-blue-400 relative inline-block">
                <span className="absolute transition-all ease-out duration-300">
                  {animatedWords[currentWordIndex]}
                </span>
                <span className="invisible">placeholder</span>
              </span> full-stack applications with modern JavaScript frameworks and cloud technologies.
            </p>
            
            <div 
              className={cn(
                "mt-8 flex flex-wrap gap-4 transition ease-out duration-700 delay-600",
                isIntersecting ? "opacity-100" : "opacity-0"
              )}
            >
              <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg flex items-center">
                <i className="fas fa-code mr-2"></i> View My Work
              </a>
              <a href="#" className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center">
                <i className="fas fa-download mr-2"></i> Download Resume
              </a>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div 
            className={cn(
              "relative transition ease-out duration-700 delay-500",
              isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            {/* Abstract tech-themed background glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-2xl blur-xl opacity-70 dark:opacity-50 animate-pulse-slow"></div>
            
            {/* Professional headshot */}
            <img 
              src="/assets/jeffery-profile.jpg"
              alt="Jeffery Onome Emuodafevware" 
              className="rounded-2xl shadow-xl relative z-10 w-full object-cover dark:opacity-90"
            />
            
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-full shadow-lg p-4 z-20 animate-bounce-slow">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">3+</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">years exp</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
