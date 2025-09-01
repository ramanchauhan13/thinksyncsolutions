'use client'

import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
// import CursorTrail from '@/components/CursorTrail';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CornerAccents from '@/components/CornerAccents';
import WhyChooseUs from '@/components/WhyChooseUs';


export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [glitchEffect, setGlitchEffect] = useState(false);
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
     AOS.init(
      // once: true,
);

    const handleScroll = () => setScrollY(window.scrollY);
    // const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    // window.addEventListener('mousemove', handleMouseMove);
    
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 8000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      // window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(glitchInterval);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden">

      
      <HeroSection glitchEffect={glitchEffect} scrollToSection={scrollToSection} />
      <ServicesSection />
      <WhyChooseUs />
      <ContactSection />
      
      <ScrollToTop scrollY={scrollY} />
      <CornerAccents />
    </div>
  );
}
