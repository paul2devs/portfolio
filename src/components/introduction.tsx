import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSound } from 'use-sound';
import hoverSound from './sounds/hover.mp3';
import clickSound from './sounds/click.mp3';
import glitchSound from './sounds/glitch.mp3';
import avatar from "./avatar.gif";
import avatars from "./avatar.jpg"

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.1,
  });

  const controls = useAnimation();
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);
  const [avatarHovered, setAvatarHovered] = useState(false);
  const [playHover, { stop: stopHover }] = useSound(hoverSound);
  const [playClick, { stop: stopClick }] = useSound(clickSound);
  const [playGlitch, { stop: stopGlitch }] = useSound(glitchSound);

  const avatarRef = useRef<HTMLDivElement>(null);
  const terminalIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const glitchIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      simulateHacking();
      startGlitchEffect();
      speak('Welcome, user. Initializing system… Scanning credentials…');
    }
  
    return () => {
      if (terminalIntervalRef.current) clearInterval(terminalIntervalRef.current);
      if (glitchIntervalRef.current) clearInterval(glitchIntervalRef.current);
      stopHover();
      stopClick();
      stopGlitch();
    };
  }, [inView]); 
  

  const simulateHacking = () => {
    const hour = new Date().getHours();
    const timeBasedMessage =
      hour >= 18 || hour <= 6
        ? 'Accessing night mode... Initializing dark-web protocols.'
        : 'System online. All protocols nominal.';

    const commands = [
      'Initializing system...',
      'Loading user profile...',    
      timeBasedMessage,
      'Welcome, Paul Smith (Oginni)',
      'Role: Software Developer | Cybersecurity Expert',
      'Status: Online',
      'Mission: Building Scalable, Secure & High-Performance Web Solutions.',
      'System ready.',
    ];

    const randomText = '> Initializing...';
    let index = 0;
    terminalIntervalRef.current = setInterval(() => {
      if (index < randomText.length) {
        setTerminalOutput((prev) => [...prev.slice(-1), prev[prev.length - 1] + randomText[index]]);
        index++;
      } else {
        if (terminalIntervalRef.current) clearInterval(terminalIntervalRef.current);
        let commandIndex = 0;
        terminalIntervalRef.current = setInterval(() => {
          if (commandIndex < commands.length) {
            setTerminalOutput((prev) => [...prev, `> ${commands[commandIndex]}`]);
            commandIndex++;
          } else {
            if (terminalIntervalRef.current) clearInterval(terminalIntervalRef.current);
            setIsTyping(false);
          }
        }, Math.random() * 1000 + 800); 
      }
    }, 100);
  };

  const handleAvatarHover = (event: React.MouseEvent<HTMLDivElement>) => {
    setAvatarHovered(true);
    try {
      playHover();
    } catch (error) {
      console.error('Error playing hover sound:', error);
    }
    if (navigator.vibrate) navigator.vibrate([30, 20, 30]);
    setTerminalOutput((prev) => [...prev, '> User detected. Scanning credentials...']);

    const avatar = avatarRef.current;
    if (avatar) {
      const rect = avatar.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left - rect.width / 2) * 0.1;
      const offsetY = (event.clientY - rect.top - rect.height / 2) * 0.1;
      requestAnimationFrame(() => {
        avatar.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    }
  };

  const handleAvatarLeave = () => {
    setAvatarHovered(false);
    const avatar = avatarRef.current;
    if (avatar) {
      requestAnimationFrame(() => {
        avatar.style.transform = 'translate(0, 0)';
      });
    }
  };

  const handleAvatarClick = () => {
    try {
      playClick();
    } catch (error) {
      console.error('Error playing click sound:', error);
    }
    const randomIP = `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
    setTerminalOutput((prev) => [...prev, `> IP Address: ${randomIP}`]);
  };

  const handleButtonHover = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left - rect.width / 2) * 0.1;
    const offsetY = (event.clientY - rect.top - rect.height / 2) * 0.1;
    requestAnimationFrame(() => {
      button.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      button.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.8)';
    });
  };

  const handleButtonLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    requestAnimationFrame(() => {
      button.style.transform = 'translate(0, 0)';
      button.style.boxShadow = 'none';
    });
  };

  const startGlitchEffect = () => {
    const grid = document.querySelector('.grid-lines');
    glitchIntervalRef.current = setInterval(() => {
      grid?.classList.add('glitch-effect');
      try {
        playGlitch();
      } catch (error) {
        console.error('Error playing glitch sound:', error);
      }
      if (navigator.vibrate) navigator.vibrate([200]);
      if (!navigator.vibrate) {
        document.body.style.transform = 'translate(10px, 10px)';
        setTimeout(() => {
          document.body.style.transform = 'translate(0, 0)';
        }, 100);
      }
      setTimeout(() => grid?.classList.remove('glitch-effect'), 500);
    }, Math.random() * 10000 + 10000);
  };

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => {
      const viewWorkButton = document.querySelector('#view-work');
      const collaborateButton = document.querySelector('#collaborate');
      if (viewWorkButton) {
        viewWorkButton.addEventListener('click', () => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        });
      }
      if (collaborateButton) {
        collaborateButton.addEventListener('click', () => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        });
      }
    };
    speechSynthesis.speak(utterance);
  };

  const handleButtonClick = (buttonType: 'work' | 'collaborate') => {
    try {
      playClick();
    } catch (error) {
      console.error('Error playing click sound:', error);
    }
    if (buttonType === 'work') {
      speak('Accessing portfolio. Loading projects. Stand by...');
    } else if (buttonType === 'collaborate') {
      speak('Incoming transmission. Negotiating access level...');
    }
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen bg-black text-white relative overflow-hidden pt-20"
      style={{ backdropFilter: 'blur(10px)', filter: 'contrast(2) brightness(1.3)' }}
    >
      <motion.div
        ref={avatarRef}
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{ y, rotateX, scale }}
        onMouseEnter={handleAvatarHover}
        onMouseLeave={handleAvatarLeave}
        onClick={handleAvatarClick}
      >
        <div
          className="w-64 h-64 relative"
          style={{
            filter: 'url(#holographic-glow)',
          }}
        >
          <div
            className="w-full h-full bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url(${avatars})`, 
              transform: avatarHovered ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          ></div>

          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <filter id="holographic-glow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="blur" />
              <feOffset in="blur" dx="0" dy="0" result="offsetBlur" />
              <feMerge>
                <feMergeNode in="offsetBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </svg>
        </div>
      </motion.div>

      <div
        className="grid-lines absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(0, 255, 0, 0.05) 1px, transparent 1px), linear-gradient(0deg, rgba(0, 255, 0, 0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          animation: 'grid-move 5s linear infinite',
          zIndex: 0,
        }}
      ></div>

      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          <motion.div
            className="w-full lg:w-[40%]"
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div
              className="relative"
              style={{
                perspective: '1000px',
              }}
            >

              <div
                className="w-full h-[400px] bg-green-500 rounded-lg"
                style={{
                  transform: 'rotateY(20deg) rotateX(10deg)',
                  boxShadow: '0 0 20px rgba(0, 255, 0, 0.8)',
                  background: 'linear-gradient(45deg, rgba(0, 255, 0, 0.1), rgba(0, 255, 0, 0.3))',
                }}
              >

                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={avatar}
                    alt="3D Avatar"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-[60%]"
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
          >

            <div
              className="p-6 bg-black border border-green-500 rounded-lg font-mono mb-8"
              style={{
                boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                height: '200px',
                overflowY: 'auto',
              }}
            >
              <pre className="text-green-500">
                {terminalOutput.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
                {isTyping && (
                  <div className="inline">
                    <span className="blinking-caret">|</span>
                  </div>
                )}
              </pre>
            </div>

            <motion.h1
              className="text-5xl font-extrabold mb-8 text-green-500"
              variants={variants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Building the Future, One Line of Code at a Time
            </motion.h1>

            <motion.div
              className="flex gap-4"
              variants={variants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <motion.button
                id="view-work"
                className="px-8 py-4 rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => {
                  try {
                    playHover();
                  } catch (error) {
                    console.error('Error playing hover sound:', error);
                  }
                  if (navigator.vibrate) navigator.vibrate([30, 20, 30]);
                }}
                onTapStart={() => handleButtonClick('work')}
                onMouseMove={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                View My Work
              </motion.button>
              <motion.button
                id="collaborate"
                className="px-8 py-4 rounded-lg font-semibold text-white border border-green-500 hover:bg-green-500 hover:text-black transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => {
                  try {
                    playHover();
                  } catch (error) {
                    console.error('Error playing hover sound:', error);
                  }
                  if (navigator.vibrate) navigator.vibrate([30, 20, 30]);
                }}
                onTapStart={() => handleButtonClick('collaborate')}
                onMouseMove={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                Let’s Collaborate
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>
        {`
          @keyframes grid-move {
            0% { background-position: 0 0; }
            100% { background-position: 20px 20px; }
          }
          .blinking-caret {
            animation: blink 0.75s step-end infinite;
          }
          @keyframes blink {
            from, to { opacity: 1; }
            50% { opacity: 0; }
          }
          @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
          }
          .glitch-effect {
            animation: glitch 0.5s infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;