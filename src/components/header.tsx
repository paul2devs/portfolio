import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaHome, FaUser, FaCogs, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const linkX = useTransform(cursorX, (x) => (x - window.innerWidth / 2) / 50);
  const linkY = useTransform(cursorY, (y) => (y - window.innerHeight / 2) / 50);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsScrollingDown(true); 
      } else {
        setIsScrollingDown(false); 
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isScrollingDown) {
      controls.start({ y: -100, opacity: 0 });
    } else {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [isScrollingDown, controls]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const navItems = [
    { name: 'Home', icon: <FaHome />, href: '#home' },
    { name: 'About', icon: <FaUser />, href: '#about' },
    { name: 'Services', icon: <FaCogs />, href: '#services' },
    { name: 'Skills', icon: <FaCode />, href: '#skills' },
    { name: 'Projects', icon: <FaProjectDiagram />, href: '#projects' },
    { name: 'Contact', icon: <FaEnvelope />, href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed ${isMobile ? 'bottom-0' : 'top-0'} left-0 w-full ${isMobile ? 'h-[80px]' : 'h-[60px]'} bg-black/70 backdrop-blur-md border-b border-green-500/20 z-50`}
      initial={{ y: 0, opacity: 1 }}
      animate={controls}
      transition={{ duration: 0.3 }}
      style={{
        boxShadow: '0 4px 30px rgba(0, 255, 0, 0.1)',
        background: 'linear-gradient(145deg, rgba(0, 255, 0, 0.1), rgba(0, 255, 0, 0.05))',
      }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {!isMobile && (
          <div className="flex items-center">
            <div className="text-green-500 text-xl font-bold"></div>
          </div>
        )}

        <ul className={`flex ${isMobile ? 'space-x-4' : 'space-x-8'}`}>
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className="text-gray-400 hover:text-green-500 relative flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              style={{
                textShadow: '0 0 5px rgba(0, 255, 0, 0.5)',
                x: isMobile ? 0 : linkX,
                y: isMobile ? 0 : linkY,
              }}
            >
              <a href={item.href} className="flex flex-col items-center">
                {isMobile ? (
                  <>
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-xs mt-1">{item.name}</span>
                  </>
                ) : (
                  <span className="text-sm font-semibold">{item.name}</span>
                )}
              </a>

              {index !== navItems.length - 1 && !isMobile && (
                <div
                  className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-[1px] h-4 bg-green-500/50"
                  style={{
                    boxShadow: '0 0 5px rgba(0, 255, 0, 0.5)',
                  }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        {!isMobile && (
          <motion.button
            className="px-6 py-2 bg-green-500 text-black rounded-lg font-semibold relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            style={{
              boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
            }}
          >
            Hire Me
          </motion.button>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;