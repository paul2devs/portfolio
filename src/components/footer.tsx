import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaDiscord } from 'react-icons/fa';
import { Particles } from 'react-tsparticles';

const Footer = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false); 
  const controls = useAnimation(); 

  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleHover = () => {
      timeoutId = setTimeout(() => {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 3000); 
      }, 3000);
    };

    const handleLeave = () => {
      clearTimeout(timeoutId);
    };

    const footer = document.querySelector('footer');
    footer?.addEventListener('mouseenter', handleHover);
    footer?.addEventListener('mouseleave', handleLeave);

    return () => {
      footer?.removeEventListener('mouseenter', handleHover);
      footer?.removeEventListener('mouseleave', handleLeave);
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        controls.start({ opacity: 1, y: 0 }); 
      } else {
        controls.start({ opacity: 0, y: 50 }); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <Particles
        params={{
          particles: {
            number: { value: 30 },
            size: { value: 3 },
            color: { value: '#00FF00' },
            line_linked: { color: '#00FF00', opacity: 0.5 },
            move: {
              direction: 'bottom',
              speed: 1,
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-10"></div>

      <div className="container mx-auto px-4 py-12 relative z-20">
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-left">
            <motion.h2
              className="text-2xl font-bold text-green-500 mb-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Paul2Dev
            </motion.h2>
            <p className="text-gray-400 text-sm font-mono">
              Writing code, building futures.
            </p>
          </div>

          <div className="text-left">
            <h3 className="text-green-500 text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                <motion.li
                  key={index}
                  className="text-gray-400 hover:text-green-500 transition-colors font-mono"
                  whileHover={{ scale: 1.1 }}
                  style={{ textShadow: '0 0 5px rgba(0, 255, 0, 0.5)' }}
                >
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          
          <div className="text-left md:text-right">
            <h3 className="text-green-500 text-xl font-bold mb-4">Let’s Connect</h3>
            <div className="flex gap-6">
          
              <motion.a
                href="https://www.linkedin.com/in/paul2dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                style={{ color: '#0A66C2' }}
              >
                <FaLinkedin size={24} />
              </motion.a>

              
              <motion.a
                href="https://github.com/paul2devs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                style={{ color: '#FFFFFF' }}
              >
                <FaGithub size={24} />
              </motion.a>

             
              <motion.a
                href="https://wa.me/+2347068578749"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                style={{ color: '#25D366' }}
              >
                <FaWhatsapp size={24} />
              </motion.a>

              <motion.a
                href="https://discordapp.com/users/1008029781046075392"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                style={{ color: '#5865F2' }}
              >
                <FaDiscord size={24} />
              </motion.a>
            </div>
            <motion.a
              href="mailto:paul2devs@gmail.com" 
              className="mt-6 px-6 py-2 bg-green-500 text-black rounded-lg font-semibold font-mono inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let’s Connect
            </motion.a>
          </div>
        </div>

        {showEasterEgg && (
          <motion.div
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500/20 backdrop-blur-md px-4 py-2 rounded-lg text-green-500 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Access Granted
          </motion.div>
        )}

        <motion.div
          className="text-left mt-8 text-gray-400 font-mono"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Thank You for Visiting!
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;