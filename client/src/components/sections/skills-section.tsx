import React from 'react';
import { cn, coreSkills } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import AnimatedSkillBar from './animated-skill-bar';

const SkillsSection: React.FC = () => {
  const { ref, isIntersecting, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 
          className={cn(
            "text-3xl md:text-4xl font-bold text-center mb-4 transition ease-out duration-500",
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          )}
        >
          Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Skills</span>
        </h2>
        
        <p 
          className={cn(
            "text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto transition ease-out duration-500 delay-200",
            isIntersecting ? "opacity-100" : "opacity-0"
          )}
        >
          As a full-stack developer with 3+ years of experience, I've honed a diverse set of skills across the development spectrum.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
          <div 
            className={cn(
              "transition ease-out duration-700 delay-300",
              isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              <span className="border-b-2 border-blue-500 pb-1">Frontend Development</span>
            </h3>
            <div className="space-y-5">
              <AnimatedSkillBar 
                name="React/Next.js" 
                percentage={92} 
                color="bg-gradient-to-r from-blue-500 to-blue-600" 
                isVisible={isIntersecting || hasIntersected}
                delay={100}
              />
              <AnimatedSkillBar 
                name="TypeScript" 
                percentage={88} 
                color="bg-gradient-to-r from-blue-600 to-indigo-600" 
                isVisible={isIntersecting || hasIntersected}
                delay={200}
              />
              <AnimatedSkillBar 
                name="Tailwind CSS" 
                percentage={95} 
                color="bg-gradient-to-r from-cyan-500 to-blue-500" 
                isVisible={isIntersecting || hasIntersected}
                delay={300}
              />
              <AnimatedSkillBar 
                name="Alpine.js" 
                percentage={85} 
                color="bg-gradient-to-r from-indigo-500 to-purple-500" 
                isVisible={isIntersecting || hasIntersected}
                delay={400}
              />
              <AnimatedSkillBar 
                name="UI/UX Design" 
                percentage={80} 
                color="bg-gradient-to-r from-pink-500 to-purple-500" 
                isVisible={isIntersecting || hasIntersected}
                delay={500}
              />
            </div>
          </div>
          
          <div 
            className={cn(
              "transition ease-out duration-700 delay-300",
              isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              <span className="border-b-2 border-blue-500 pb-1">Backend Development</span>
            </h3>
            <div className="space-y-5">
              <AnimatedSkillBar 
                name="Node.js/Express" 
                percentage={90} 
                color="bg-gradient-to-r from-green-500 to-green-600" 
                isVisible={isIntersecting || hasIntersected}
                delay={100}
              />
              <AnimatedSkillBar 
                name="PostgreSQL/MongoDB" 
                percentage={86} 
                color="bg-gradient-to-r from-blue-500 to-cyan-500" 
                isVisible={isIntersecting || hasIntersected}
                delay={200}
              />
              <AnimatedSkillBar 
                name="RESTful API Design" 
                percentage={92} 
                color="bg-gradient-to-r from-yellow-500 to-orange-500" 
                isVisible={isIntersecting || hasIntersected}
                delay={300}
              />
              <AnimatedSkillBar 
                name="GraphQL" 
                percentage={78} 
                color="bg-gradient-to-r from-pink-500 to-rose-500" 
                isVisible={isIntersecting || hasIntersected}
                delay={400}
              />
              <AnimatedSkillBar 
                name="CI/CD & DevOps" 
                percentage={75} 
                color="bg-gradient-to-r from-orange-500 to-red-500" 
                isVisible={isIntersecting || hasIntersected}
                delay={500}
              />
            </div>
          </div>
          
          <div 
            className={cn(
              "transition ease-out duration-700 delay-500 md:col-span-2",
              isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200 text-center">
              <span className="border-b-2 border-blue-500 pb-1">Core Technical Abilities</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {coreSkills.map((skill, index) => (
                <AnimatedSkillBar 
                  key={skill.name}
                  name={skill.name} 
                  percentage={skill.percentage} 
                  color="bg-gradient-to-r from-blue-500 to-indigo-600" 
                  isVisible={isIntersecting || hasIntersected}
                  delay={100 * (index + 1)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;