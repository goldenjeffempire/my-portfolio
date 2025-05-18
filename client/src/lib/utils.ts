import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Intersection observer for animations
export function createObserver(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = { 
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }
): IntersectionObserver {
  return new IntersectionObserver(callback, options);
}

// Validate email format
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Format skills data for skill bars
export interface Skill {
  name: string;
  percentage: number;
}

export const coreSkills: Skill[] = [
  { name: 'JavaScript/TypeScript', percentage: 95 },
  { name: 'React & Next.js', percentage: 92 },
  { name: 'Node.js & Express', percentage: 90 },
  { name: 'RESTful API Design', percentage: 88 },
  { name: 'Database Management', percentage: 85 },
  { name: 'Python & Django', percentage: 83 },
  { name: 'Cloud Services (AWS/Azure)', percentage: 80 },
  { name: 'CI/CD & DevOps', percentage: 78 }
];

// Animation classes for scroll reveal
export const fadeInUp = "transition ease-out duration-700 opacity-0 translate-y-10";
export const fadeInUpVisible = "opacity-100 translate-y-0";

export const fadeIn = "transition ease-out duration-500 opacity-0";
export const fadeInVisible = "opacity-100";

export const fadeInLeft = "transition ease-out duration-700 opacity-0 -translate-x-10";
export const fadeInLeftVisible = "opacity-100 translate-x-0";

export const fadeInRight = "transition ease-out duration-700 opacity-0 translate-x-10";
export const fadeInRightVisible = "opacity-100 translate-x-0";
