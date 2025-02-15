import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaPython, FaShieldAlt, FaChartLine, FaArrowRight, FaChevronDown, FaChevronUp } from 'react-icons/fa';

type Skill = {
  name: string;
  level: number;
  description: string;
};

type Skills = {
  Frontend: Skill[];
  Backend: Skill[];
  Cybersecurity: Skill[];
  Marketing: Skill[];
};

const skills: Skills = {
  Frontend: [
    { name: 'React.js', level: 90, description: 'Building dynamic and responsive user interfaces.' },
    { name: 'Angular', level: 85, description: 'Creating scalable and maintainable web applications.' },
    { name: 'Vue.js', level: 80, description: 'Developing lightweight and fast frontend solutions.' },
    { name: 'Next.js', level: 85, description: 'Optimizing React apps with server-side rendering & static generation.' },
    { name: 'Tailwind CSS', level: 90, description: 'Designing sleek, modern UIs with utility-first styling.' },
    { name: 'SASS/SCSS', level: 80, description: 'Enhancing CSS with variables, nesting, and mixins.' },
  ],
  Backend: [
    { name: 'Node.js', level: 95, description: 'Building high-performance server-side applications.' },
    { name: 'Python', level: 90, description: 'Developing robust backend systems and APIs.' },
    { name: 'SQL', level: 85, description: 'Designing and managing relational databases.' },
    { name: 'MongoDB', level: 80, description: 'Implementing scalable NoSQL databases.' },
    { name: 'Django', level: 85, description: 'Rapid backend development with Python.' },
    { name: 'Express.js', level: 90, description: 'Building RESTful APIs and microservices.' },
    { name: 'GraphQL', level: 80, description: 'Optimizing API queries for performance & flexibility.' },
    { name: 'Firebase', level: 85, description: 'Cloud-based authentication, storage, and hosting.' },
  ],
  Cybersecurity: [
    { name: 'Ethical Hacking', level: 95, description: 'Identifying and fixing vulnerabilities in systems.' },
    { name: 'Penetration Testing', level: 90, description: 'Simulating cyberattacks to test defenses.' },
    { name: 'Threat Analysis', level: 85, description: 'Monitoring and mitigating security risks.' },
    { name: 'Network Security', level: 85, description: 'Securing networks against unauthorized access.' },
    { name: 'Malware Analysis', level: 80, description: 'Detecting and neutralizing cyber threats.' },
    { name: 'Cloud Security', level: 80, description: 'Protecting cloud-based applications and infrastructure.' },
    { name: 'SIEM (Security Info & Event Management)', level: 75, description: 'Centralized logging and real-time threat detection.' },
  ],
  Marketing: [
    { name: 'SEO', level: 90, description: 'Optimizing websites for search engine visibility.' },
    { name: 'Social Media', level: 85, description: 'Creating engaging campaigns to grow audiences.' },
    { name: 'Analytics', level: 80, description: 'Tracking and analyzing performance metrics.' },
    { name: 'Email Marketing', level: 85, description: 'Automating and personalizing email campaigns.' },
    { name: 'PPC Advertising', level: 80, description: 'Running targeted paid ad campaigns.' },
    { name: 'Conversion Rate Optimization (CRO)', level: 85, description: 'Enhancing landing pages for higher conversions.' },
    { name: 'Sales Funnel Optimization', level: 80, description: 'Designing customer journeys for better sales.' },
  ],
};

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<keyof Skills>('Frontend');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    Frontend: false,
    Backend: false,
    Cybersecurity: false,
    Marketing: false,
  });

  const toggleCategory = (category: keyof Skills) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <section
      id="skills"
      className="py-16 bg-black text-white relative overflow-hidden"
      style={{ paddingTop: '64px', paddingBottom: '64px' }}
    >
  
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
          transition={{ duration: 0.8 }}          data-text="My Tech Arsenal"
        >
          My Tech Arsenal
        </motion.h2>
        <motion.p
          className="text-gray-400 text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Mastering the craft, one line of code at a time.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-[40%]">
            <div className="p-6 bg-black border border-green-500 rounded-lg font-mono">
              <h2 className="text-green-500 text-xl mb-4">Command Deck</h2>
              <ul className="space-y-3">
                {Object.keys(skills).map((category) => (
                  <motion.li
                    key={category}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedCategory === category
                        ? 'bg-green-500 text-black'
                        : 'hover:bg-green-500 hover:text-black'
                    }`}
                    onClick={() => setSelectedCategory(category as keyof Skills)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-green-500">
                      {category === 'Frontend' && <FaReact />}
                      {category === 'Backend' && <FaPython />}
                      {category === 'Cybersecurity' && <FaShieldAlt />}
                      {category === 'Marketing' && <FaChartLine />}
                    </span>
                    <span>{category}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-[60%]">
            <div className="p-6 bg-black border border-green-500 rounded-lg">
              <div className="grid grid-cols-1 gap-6">
                {skills[selectedCategory]
                  .slice(0, expandedCategories[selectedCategory] ? skills[selectedCategory].length : 3)
                  .map((skill: Skill, index: number) => (
                    <motion.div
                      key={index}
                      className="p-6 bg-black border border-green-500 rounded-lg relative overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div
                        className="absolute inset-0 border-2 border-green-500 rounded-lg opacity-0 hover:opacity-100 transition-opacity"
                        style={{
                          boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                        }}
                      ></div>
                      <h3 className="text-green-500 text-xl font-bold mb-2 flex items-center gap-3">
                        <FaArrowRight className="text-green-500" />
                        {skill.name}
                      </h3>
                      <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p className="text-gray-400">{skill.description}</p>
                    </motion.div>
                  ))}
                {skills[selectedCategory].length > 3 && (
                  <motion.button
                    className="w-full p-4 bg-green-500 text-black rounded-lg font-semibold flex items-center justify-center gap-2"
                    onClick={() => toggleCategory(selectedCategory)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {expandedCategories[selectedCategory] ? (
                      <>
                        <FaChevronUp /> Show Less
                      </>
                    ) : (
                      <>
                        <FaChevronDown /> Show More
                      </>
                    )}
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center relative z-30">
        <h2 className="text-green-500 text-3xl font-bold mb-4">
          Wanna put these skills to work?
        </h2>
        <div className="flex justify-center gap-4">
          <motion.button
            className="px-8 py-4 rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See My Work
          </motion.button>
          <motion.button
            className="px-8 py-4 rounded-lg font-semibold text-white border border-green-500 hover:bg-green-500 hover:text-black transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let’s Build Together
          </motion.button>
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

export default SkillsSection;