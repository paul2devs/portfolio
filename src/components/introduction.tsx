import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

// Roles for typing animation
const roles = ['Scalable Web Solutions', 'Secure Web Solutions', 'High-Performance Web Solutions'];

export default function Introduction() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  // Role typing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < roles[currentRole].length) {
        setDisplayedText(roles[currentRole].substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [currentRole]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#030811] to-[#21536B] animate-gradient">
        
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>

     
      <div className="container relative mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
         
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            I Build <span className="text-cyan-400">{displayedText}</span> with Clean Code.
          </h1>

          
          <p className="text-lg md:text-xl text-[#A0C9D4] mb-8 animate-fade-in">
            Full-Stack Developer | Cybersecurity Expert | Digital Marketer
          </p>

          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-3 rounded-full text-lg font-semibold bg-cyan-500 text-white hover:bg-cyan-600 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg glow"
            >
              Hire Me
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="px-8 py-3 rounded-full text-lg font-semibold border-2 border-white text-[#A0C9D4] hover:bg-cyan-500 hover:text-white hover:border-cyan-500 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              View My Work
            </ScrollLink>
          </div>
        </motion.div>

        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </ScrollLink>
        </div>
      </div>

      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      
        <div className="absolute inset-0 bg-floating-particles opacity-30"></div>
      </div>
    </section>
  );
}