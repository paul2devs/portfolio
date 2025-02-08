import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import Particles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import * as THREE from 'three'; 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
import useSound from 'use-sound';
import hackerSound from './hacker-beep.mp3'; 
const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [playSound] = useSound(hackerSound); 

  // Roles for typing animation
  const roles = [
    'Building Future-Ready Solutions',
    'Cybersecurity-Driven Development',
    'Powering High-Performance Web Apps',
  ];

  // Role typing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

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
  }, [currentRole, roles]);

  // Floating Tech UI Panel (Live Hacking Terminal)
  const renderHackingTerminal = () => (
    <div
      style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        width: '400px',
        height: '200px',
        background: 'rgba(0, 0, 0, 0.8)',
        border: '1px solid #40cfea',
        borderRadius: '8px',
        padding: '10px',
        fontFamily: 'monospace',
        color: '#40cfea',
        overflow: 'hidden',
      }}
    >
      <div style={{ animation: 'scroll-text 10s linear infinite' }}>
        <pre>
          {`> Initializing system...\n> Loading modules...\n> Hacking into mainframe...\n> Access granted.\n> Downloading data...\n> Encryption complete.`}
        </pre>
      </div>
    </div>
  );

  // 3D Hologram Code Sphere
  useEffect(() => {
    const hologramSphere = document.getElementById('hologram-sphere');
    if (!hologramSphere) return; 

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(200, 200);
    hologramSphere.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x40cfea, wireframe: true });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 15;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  // Use the GLTFLoader to load a 3D model (example)
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('/path/to/your/model.glb', (gltf) => {
      const model = gltf.scene;
      // Add the model to your scene
    });
  }, []);


  const particlesInit = async (engine: Engine) => {
    console.log('Particles initialized:', engine);
  };

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#030811',
      }}
    >
      {/* Subtle Gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 20% 20%, rgba(64, 207, 234, 0.1), transparent 60%)',
          zIndex: 0,
        }}
      ></div>

      {/* Animated Grid Lines */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(90deg, rgba(64, 207, 234, 0.05) 1px, transparent 1px), linear-gradient(0deg, rgba(64, 207, 234, 0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          animation: 'grid-move 5s linear infinite',
          zIndex: 0,
        }}
      ></div>

      {/* Particles for Movement */}
      <Particles
        init={particlesInit} // Use the Engine for advanced configuration
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            number: {
              value: 100,
            },
            size: {
              value: 3,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: true,
              straight: false,
              outModes: 'out',
            },
            links: {
              enable: true,
              distance: 150,
              color: '#40cfea',
              opacity: 0.4,
              width: 1,
            },
          },
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      {/* Content */}
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
              textShadow: '0 0 10px rgba(64, 207, 234, 0.8)',
            }}
          >
            I Engineer the{' '}
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
            of Web & Security.
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#a0c9d4',
              marginBottom: '2rem',
            }}
          >
            Scalable. Secure. High-Performance.
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
                background: 'linear-gradient(90deg, #40cfea, #21536b)',
                color: '#030811',
                boxShadow: '0 0 15px rgba(64, 207, 234, 0.5)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                playSound(); // Play sound on hover
                const target = e.target as HTMLElement;
                target.style.transform = 'scale(1.05)';
                target.style.boxShadow = '0 0 25px rgba(64, 207, 234, 0.8)';
                target.style.animation = 'glitch 0.5s infinite alternate';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'scale(1)';
                target.style.boxShadow = '0 0 15px rgba(64, 207, 234, 0.5)';
                target.style.animation = 'none';
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
                playSound(); // Play sound on hover
                const target = e.target as HTMLElement;
                target.style.background = '#40cfea';
                target.style.borderColor = '#40cfea';
                target.style.color = '#030811';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = 'transparent';
                target.style.borderColor = '#a0c9d4';
                target.style.color = '#a0c9d4';
              }}
            >
              View My Work
            </ScrollLink>
          </div>
        </motion.div>
      </div>

      {/* Down Arrow Indicator */}
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

      {/* Hologram Sphere */}
      <div
        id="hologram-sphere"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      ></div>

      {/* Render the hacking terminal */}
      {renderHackingTerminal()}

      <style>
        {`
          @keyframes grid-move {
            0% { background-position: 0 0; }
            100% { background-position: 20px 20px; }
          }
          @keyframes scroll-text {
            0% { transform: translateY(100%); }
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
          @keyframes glitch {
            0% { text-shadow: 1px 1px 0 rgba(64, 207, 234, 0.5); }
            50% { text-shadow: -1px -1px 0 rgba(64, 207, 234, 0.5); }
            100% { text-shadow: 1px 1px 0 rgba(64, 207, 234, 0.5); }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
