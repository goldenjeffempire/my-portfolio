import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSkillBarProps {
  name: string;
  percentage: number;
  color?: string;
  delay?: number;
  isVisible: boolean;
}

const AnimatedSkillBar: React.FC<AnimatedSkillBarProps> = ({
  name,
  percentage,
  color = "bg-gradient-to-r from-blue-500 to-indigo-600",
  delay = 0,
  isVisible
}) => {
  const [width, setWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isVisible) {
      timer = setTimeout(() => {
        setWidth(0);
        const progressTimer = setTimeout(() => {
          setWidth(percentage);
        }, 50);
        return () => clearTimeout(progressTimer);
      }, delay);
    } else {
      setWidth(0);
    }

    return () => clearTimeout(timer);
  }, [isVisible, percentage, delay]);

  return (
    <div 
      className="mb-5 group transform transition-all duration-300 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between mb-1">
        <span className={cn(
          "text-gray-700 dark:text-gray-300 font-medium transition-all duration-300",
          isHovered ? "text-blue-600 dark:text-blue-400 translate-x-1" : ""
        )}>
          {name}
        </span>
        <span className={cn(
          "text-gray-600 dark:text-gray-400 transition-all duration-300",
          isHovered ? "text-blue-600 dark:text-blue-400 -translate-x-1" : ""
        )}>
          {width}%
        </span>
      </div>
      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={cn(
            color,
            "h-full rounded-full transition-all duration-1000 ease-out relative"
          )}
          style={{ 
            width: `${width}%`,
            boxShadow: isHovered ? '0 0 10px rgba(59, 130, 246, 0.5)' : 'none'
          }}
        >
          <div 
            className={cn(
              "absolute inset-0 bg-white/20 transition-transform duration-300",
              isHovered ? "translate-x-full" : "-translate-x-full"
            )} 
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedSkillBar;