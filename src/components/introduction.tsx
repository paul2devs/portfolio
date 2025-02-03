import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  // Roles for typing animation
  const roles = ['Scalable Web Solutions', 'Secure Web Solutions', 'High-Performance Web Solutions'];

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
    <section
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #030811, #21536b)',
      }}
    >
      
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #030811, #21536b)',
          zIndex: -1,
          animation: 'gradient-pulse 10s infinite alternate',
        }}
      ></div>

      
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'radial-gradient(circle, rgba(64, 207, 234, 0.1) 10%, transparent 10.01%)',
          backgroundSize: '20px 20px',
          animation: 'grid-move 5s linear infinite',
        }}
      ></div>

      
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'url("data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="rgba(64, 207, 234, 0.5)" /></svg>")',
          animation: 'particles-float 20s linear infinite',
        }}
      ></div>

      
      <div style={{ textAlign: 'center', color: 'white', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              fontWeight: '800',
              marginBottom: '1rem',
            }}
          >
            I Build{' '}
            <span
              style={{
                color: '#40cfea',
                display: 'inline-block',
                overflow: 'hidden',
                borderRight: '2px solid #40cfea',
                whiteSpace: 'nowrap',
                animation: 'typing 3s steps(30, end), blink-caret 0.75s step-end infinite',
              }}
            >
              {displayedText}
            </span>{' '}
            with Clean Code.
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#a0c9d4',
              marginBottom: '2rem',
            }}
          >
            Software Developer | Cybersecurity Expert | Digital Marketer
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              style={{
                padding: '12px 24px',
                fontSize: '1rem',
                fontWeight: '600',
                borderRadius: '50px',
                background: '#40cfea',
                color: '#030811',
                boxShadow: '0 0 15px rgba(64, 207, 234, 0.5)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 0 25px rgba(64, 207, 234, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 0 15px rgba(64, 207, 234, 0.5)';
              }}
            >
              Hire Me
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              style={{
                padding: '12px 24px',
                fontSize: '1rem',
                fontWeight: '600',
                borderRadius: '50px',
                border: '2px solid #a0c9d4',
                color: '#a0c9d4',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#40cfea';
                e.target.style.borderColor = '#40cfea';
                e.target.style.color = '#030811';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.borderColor = '#a0c9d4';
                e.target.style.color = '#a0c9d4';
              }}
            >
              View My Work
            </ScrollLink>
          </div>
        </motion.div>
      </div>

      
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
        }}
      >
        <ScrollLink to="about" smooth={true} duration={500}>
          <svg
            style={{ width: '32px', height: '32px', color: 'white' }}
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

      
      <style>
        {`
          @keyframes gradient-pulse {
            0% { opacity: 1; }
            100% { opacity: 0.8; }
          }
          @keyframes grid-move {
            0% { background-position: 0 0; }
            100% { background-position: 20px 20px; }
          }
          @keyframes particles-float {
            0% { transform: translateY(0); }
            100% { transform: translateY(-100%); }
          }
          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }
          @keyframes blink-caret {
            from, to { border-color: transparent; }
            50% { border-color: #40cfea; }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;