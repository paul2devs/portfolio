import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Footer from "./components/footer";
import Projects from "./components/project";
import Contact from "./components/contact";
import Services from "./components/services"
import Introduction from "./components/introduction";
import About from "./components/about";
import Skills from "./components/skills";
import ScrollToTop from "./components/scrolltotop";
import Header from './components/header';

export default function App() {
  const [theme] = useState('light');
  const [, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>      
      <main className="overflow-hidden pb-16 md:pb-0">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <Introduction />
            <About />
            <Services />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </main>
      
      <ScrollToTop />
    </div>
  );
}
