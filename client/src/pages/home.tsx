import React from 'react';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import SkillsSection from '@/components/sections/skills-section';
import TechCarousel from '@/components/sections/tech-carousel';
import ProjectsSection from '@/components/sections/projects-section';
import BlogSection from '@/components/sections/blog-section';
import ContactSection from '@/components/sections/contact-section';
import { Toaster } from '@/components/ui/toaster';

const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TechCarousel />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <Toaster />
    </main>
  );
};

export default Home;
