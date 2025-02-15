import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState, useRef } from 'react';
import { FaEnvelope, FaCode, FaShieldAlt, FaUserTie, FaRocket } from 'react-icons/fa'; 
const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);
  const [showCTA, setShowCTA] = useState(false);
  const [userInput, setUserInput] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      simulateHacking();
    }
  }, [controls, inView]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalOutput]);

  const simulateHacking = () => {
    const commands = [
      '> User: Paul Smith (Oginni)',
      '> Role: Software Developer | Cybersecurity Expert',
      '> Specialties: Web Development, Cybersecurity, Digital Marketing',
      '> Clients: 50+',
      '> Projects Completed: 100+',
      '> Ready to work? Let\'s connect. [Click here]',
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < commands.length) {
        setTerminalOutput((prev) => [...prev, commands[index]]);
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        setShowCTA(true); 
      }
    }, 1000); 
  };

  const handleUserInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = userInput.toLowerCase();
      let response = '';

      switch (command) {
        case 'whoami':
          response = '> Paul Oginni – Full-Stack Developer & Cybersecurity Expert';
          break;
        case 'help':
          response = '> Available commands: whoami, connect, projects, skills';
          break;
        case 'connect':
          response = '> Redirecting to contact page...';
          break;
        default:
          response = `> Command not found: ${command}\n> Type 'help' for a list of available commands.`;
      }

      setTerminalOutput((prev) => [...prev, `> ${userInput}`, response]);
      setUserInput('');
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    window.open(
      'https://docs.google.com/document/d/e/2PACX-1vSPE7ZMQRr3DV7UZRC6Vphli18dzK6-d82BXuRAkosKxugrerTiPxTWnc7NyZWrvf7yUcKQkq0CivxS/pub',
      '_blank'
    );
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 bg-black text-white relative overflow-hidden"
      style={{ paddingTop: '64px', paddingBottom: '64px' }}
    >
     
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 20% 20%, rgba(0, 255, 0, 0.1), transparent 60%)',
          zIndex: 0,
        }}
      ></div>
    
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(0, 255, 0, 0.05) 1px, transparent 1px), linear-gradient(0deg, rgba(0, 255, 0, 0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          animation: 'grid-move 5s linear infinite',
          zIndex: 0,
        }}
      ></div>
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ zIndex: 0 }}
      >
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-500 text-xs opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `code-rain ${Math.random() * 5 + 5}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {Array.from({ length: 30 }).map((_, j) => (
              <span key={j}>{Math.floor(Math.random() * 2)}</span>
            ))}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
     
          <motion.div
            className="w-full lg:w-[40%]"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div
              ref={terminalRef}
              className="p-6 bg-black border border-green-500 rounded-lg font-mono"
              style={{
                boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                height: '400px',
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
              
              <div className="flex items-center">
                <span className="text-green-500">{'>'}</span>
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={handleUserInput}
                  className="bg-transparent text-green-500 outline-none ml-2 flex-1"
                  autoFocus
                />
              </div>
              
              {showCTA && (
                <motion.button
                  className="mt-4 px-6 py-3 rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 transition-colors flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  onClick={scrollToContact}
                >
                  <FaEnvelope /> Hire Me
                </motion.button>
              )}
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-[60%]"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
 
            <motion.h1
              className="text-4xl font-extrabold mb-8 text-green-500"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              I Build, Secure & Scale Digital Solutions
            </motion.h1>

            <motion.p
              className="text-gray-400 text-lg mb-8"
              style={{ maxWidth: '600px', lineHeight: '1.6' }}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Hi, I’m Paul, a passionate software developer with a passion for writing high performance, scalable, and secure code. With expertise in full-stack development, cybersecurity, and digital marketing, I build solutions that aren’t just functional—they’re built to scale, secure, and optimized for real-world impact. Whether it's developing seamless user experiences, fortifying security protocols, or driving digital growth strategies, I take a full-stack approach to innovation. Let’s build something extraordinary.
            </motion.p>

            <motion.div
              className="text-gray-400 text-lg mb-8"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 1 }}
            >
              <ul className="list-none space-y-4">
                <li className="flex items-center gap-3">
                  <FaUserTie className="text-green-500 text-xl" />
                  <span>Experience: Over 6 years in software dev + cybersecurity + digital marketing</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCode className="text-green-500 text-xl" />
                  <span>Tech Stack: Angular, React, Next.js, Node.js, Express, NestJS, SQL, TypeScript, Python e.t.c</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaShieldAlt className="text-green-500 text-xl" />
                  <span>Clients: Built & secured solutions for 50+ businesses</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaRocket className="text-green-500 text-xl" />
                  <span>Mission: Helping businesses scale through high quality code</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="flex gap-4"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <motion.button
                className="px-8 py-4 rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                onClick={downloadResume}
              >
                Download Resume
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-lg font-semibold text-white border border-green-500 hover:bg-green-500 hover:text-black transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                onClick={scrollToContact}
              >
               Hire Me
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
          @keyframes code-rain {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
        `}
      </style>
    </section>
  );
};

export default About;