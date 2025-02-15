import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaShieldAlt, FaChartLine, FaCogs, FaArrowRight } from 'react-icons/fa';
import Confetti from 'react-confetti';

const services = [
  {
    id: 1,
    title: 'Software Development',
    icon: <FaCode />,
    category: 'High-Performance Web & App Solutions',
    description: 'Custom-built websites and web applications engineered for speed, scalability, and security.',
    features: [
      '100% hand-coded solutions – No templates, no shortcuts',
      'Optimized for performance – Fast, scalable, and responsive',
      'Security-first approach – Built with cybersecurity best practices',
      'Modern, intuitive UI/UX – Designed for engagement and conversions',
    ],
    progress: 80,
  },
  {
    id: 2,
    title: 'Cybersecurity & Pentesting',
    icon: <FaShieldAlt />,
    category: 'Advanced Security Solutions',
    description: 'Comprehensive security assessments and penetration testing to fortify your digital assets.',
    features: [
      'In-depth vulnerability assessments & ethical hacking',
      'Real-time security monitoring & threat response',
      'Custom-built security protocols for ultimate protection',
      'Cloud, network, and application security solutions',
    ],
    progress: 75,
  },
  {
    id: 3,
    title: 'Digital Marketing',
    icon: <FaChartLine />,
    category: 'Data-Driven Growth Strategies',
    description: 'Strategic marketing solutions to increase visibility, engagement, and conversions.',
    features: [
      'SEO-driven content marketing for long-term organic growth',
      'High-converting social media campaigns & paid ads',
      'Advanced analytics to track and optimize performance',
      'Conversion-focused email marketing & lead generation',
    ],
    progress: 85,
  },
  {
    id: 4,
    title: 'Custom Web Solutions',
    icon: <FaCogs />,
    category: 'Tailored Digital Solutions',
    description: 'Bespoke web solutions designed for seamless integration and business growth.',
    features: [
      'Scalable e-commerce platforms with smooth UX',
      'Custom APIs & integrations to enhance functionality',
      'Cloud-based solutions for flexibility and high availability',
      'Automation tools to streamline business processes',
    ],
    progress: 90,
  },
  
];

const OurServices = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleHireMeClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); 
  };

  return (
    <section
      id="services"
      className="py-16 bg-black text-white relative overflow-hidden"
      style={{ paddingTop: '64px', paddingBottom: '64px' }}
    >
  
      {showConfetti && <Confetti />}

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(0, 255, 0, 0.05), transparent 60%), linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1))',
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
              animation: `data-stream ${Math.random() * 5 + 5}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {Array.from({ length: 30 }).map((_, j) => (
              <span key={j}>{Math.floor(Math.random() * 2)}</span>
            ))}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center mb-16">
        <motion.h2
          className="text-5xl font-extrabold text-green-500 mb-4 glitch"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-text="The Lab"
        >
          The Lab
        </motion.h2>
        <motion.p
          className="text-gray-400 text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Step into the future of digital innovation. Select a service to explore.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-[40%]">
            <div className="p-6 bg-black border border-green-500 rounded-lg font-mono">
              <h2 className="text-green-500 text-xl mb-4">Command Center</h2>
              <ul className="space-y-3">
                {services.map((service) => (
                  <motion.li
                    key={service.id}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedService.id === service.id
                        ? 'bg-green-500 text-black'
                        : 'hover:bg-green-500 hover:text-black'
                    }`}
                    onClick={() => setSelectedService(service)}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <span className="text-green-500">{service.icon}</span>
                    <span>{service.title}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-[60%]">
            <motion.div
              className="p-6 bg-black border border-green-500 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-green-500 text-2xl font-bold mb-4 flex items-center gap-3">
                {selectedService.icon} {selectedService.title}
              </h2>
              <p className="text-gray-400 mb-4">{selectedService.category}</p>
              <p className="text-gray-400 mb-6">{selectedService.description}</p>
              <ul className="text-gray-400 mb-6 space-y-2">
                {selectedService.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FaArrowRight className="text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mb-6">
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${selectedService.progress}%` }}
                  ></div>
                </div>
                <p className="text-gray-400 mt-2">
                  Deploying the best solution... [{selectedService.progress}%]
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-green-500 text-3xl font-bold mb-4">
            Ready to transform your business? Let’s create magic.
          </h2>
          <div className="flex justify-center gap-4">
          <motion.button
            className="px-8 py-4 rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            onClick={() => {
                const portfolioElement = document.getElementById("about");
                if (portfolioElement) {
                  portfolioElement.scrollIntoView({ behavior: "smooth" });
                }
              }}
              
            >
            View Portfolio
            </motion.button>

            <motion.button
            className="px-8 py-4 rounded-lg font-semibold text-white border border-green-500 hover:bg-green-500 hover:text-black transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            onClick={() => {
                const contactElement = document.getElementById("contact");
                if (contactElement) {
                  contactElement.scrollIntoView({ behavior: "smooth" });
                }
              }}
              
            >
            Get a Quote
            </motion.button>

          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes grid-move {
            0% { background-position: 0 0; }
            100% { background-position: 20px 20px; }
          }
          @keyframes data-stream {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
          .glitch {
            position: relative;
            animation: glitch-animation 2s infinite;
          }
          .glitch::before, .glitch::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.8;
          }
          .glitch::before {
            color: #00ff00;
            z-index: -1;
            animation: glitch-before 1s infinite;
          }
          .glitch::after {
            color: #ff00ff;
            z-index: -2;
            animation: glitch-after 1.5s infinite;
          }
          @keyframes glitch-animation {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(2px, -2px); }
            60% { transform: translate(-2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
          }
          @keyframes glitch-before {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(2px, -2px); }
            60% { transform: translate(-2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
          }
          @keyframes glitch-after {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(2px, -2px); }
            60% { transform: translate(-2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
          }
        `}
      </style>
    </section>
  );
};

export default OurServices;