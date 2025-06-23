'use client'

import { useState, useEffect } from 'react';
import CursorTrail from '@/components/CursorTrail';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CornerAccents from '@/components/CornerAccents';


export default function Home() {
   const [currentSection, setCurrentSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 8000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(glitchInterval);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId);
      setIsMenuOpen(false);
    }
  };


  return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <CursorTrail mousePosition={mousePosition} />
      
      <Navigation 
        currentSection={currentSection} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrollToSection={scrollToSection} 
      />
      
      <HeroSection glitchEffect={glitchEffect} scrollToSection={scrollToSection} />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
      
      <ScrollToTop scrollY={scrollY} />
      <CornerAccents />
    </div>
  );
}
