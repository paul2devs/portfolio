import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CodeBracketIcon, ChartBarIcon, ShieldCheckIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" ref={ref} className="py-20 bg-[#f5f5f5] text-[#333333]">
      <div className="container mx-auto px-4">
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Hello, I'm Paul Oginni</h2>
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img
                src="/bg/pexels-tima-miroshnichenko-5380612.jpg"
                alt="Paul Oginni"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <p className="text-lg mb-6">
                A Skilled Software Developer, Digital Marketer, and Cybersecurity Professional
                with 5 years of experience across technology, marketing, and security.
                I'm dedicated to building innovative, secure, and impactful digital solutions.
              </p>
              <p className="text-lg mb-6">
                Additionally, I am a building contractor, though I am still gaining proficiency in the field.
              </p>
              <div className="font-bold text-2xl mb-4 text-[#2596be]">5+ Years in Tech and Innovation</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
              <CodeBracketIcon className="w-12 h-12 text-[#0077ff] mb-4 mx-auto md:mx-0" />
              <h3 className="text-xl font-semibold mb-2">Software Development</h3>
              <p>JavaScript, Python, Web Development</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
              <ChartBarIcon className="w-12 h-12 text-[#ffc857] mb-4 mx-auto md:mx-0" />
              <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
              <p>SEO, Content Strategy, Analytics</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
              <ShieldCheckIcon className="w-12 h-12 text-[#2d6a4f] mb-4 mx-auto md:mx-0" />
              <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
              <p>Threat Detection, Network Security, Ethical Hacking</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
              <BuildingOfficeIcon className="w-12 h-12 text-[#2b2d42] mb-4 mx-auto md:mx-0" />
              <h3 className="text-xl font-semibold mb-2">Building Construction</h3>
              <p>Project Management, CAD, Building Codes</p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">My Approach</h3>
            <p className="text-lg">
              I believe in crafting experiences that are robust, efficient, and secure. My approach focuses on data-driven strategies to engage users while prioritizing security.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
