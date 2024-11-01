import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    name: 'All',
    skills: [],
  },
  {
    name: 'Software Development',
    skills: [
      { name: 'JavaScript', proficiency: 90 },
      { name: 'Angular', proficiency: 75 },
      { name: 'C++', proficiency: 50 },
      { name: 'React', proficiency: 85 },
      { name: 'Node.js', proficiency: 80 },
      { name: 'Python', proficiency: 75 },
      { name: 'TypeScript', proficiency: 70 },
      { name: 'GraphQL', proficiency: 65 },
      { name: 'HTML/CSS', proficiency: 95 },
    ],
  },
  {
    name: 'Digital Marketing',
    skills: [
      { name: 'SEO', proficiency: 85 },
      { name: 'Content Strategy', proficiency: 80 },
      { name: 'Google Analytics', proficiency: 75 },
      { name: 'Social Media Marketing', proficiency: 70 },
      { name: 'Email Marketing', proficiency: 65 },
      { name: 'PPC', proficiency: 60 },
      { name: 'Conversion Optimization', proficiency: 90 },
    ],
  },
  {
    name: 'Cybersecurity',
    skills: [
      { name: 'Network Security', proficiency: 85 },
      { name: 'Ethical Hacking', proficiency: 90 },
      { name: 'Threat Detection', proficiency: 80 },
      { name: 'Penetration Testing', proficiency: 75 },
      { name: 'Security Auditing', proficiency: 70 },
      { name: 'Compliance', proficiency: 60 },
      { name: 'Incident Response', proficiency: 65 },
      { name: 'Encryption', proficiency: 90 },
    ],
  },
  {
    name: 'Building Construction',
    skills: [
      { name: 'Project Management', proficiency: 90 },
      { name: 'CAD', proficiency: 85 },
      { name: 'Building Codes', proficiency: 45 },
      { name: 'Cost Estimation', proficiency: 75 },
      { name: 'Blueprint Reading', proficiency: 70 },
      { name: 'Material Sourcing', proficiency: 65 },
      { name: 'Quality Control', proficiency: 80 },
      { name: 'Architectural Drawing', proficiency: 75 },
    ],
  },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const filteredSkills =
    selectedCategory === 'All'
      ? skillCategories.flatMap((category) => category.skills)
      : skillCategories.find((category) => category.name === selectedCategory)?.skills || [];

  // Limit skills shown in "All" category unless "Show More" is active
  const displayedSkills = selectedCategory === 'All' && !showAllSkills
    ? filteredSkills.slice(0, 12)
    : filteredSkills;

  return (
    <section id="skills" ref={ref} className="relative py-20 text-white">
      <div className="absolute inset-0">
        <img
          src={`${process.env.PUBLIC_URL}/bg/skillsbg.jpg`}
          alt="Tech Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        <div className="flex flex-wrap justify-center mb-8 space-x-4">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => {
                setSelectedCategory(category.name);
                setShowAllSkills(false);
              }}
              className={`px-4 py-2 m-1 rounded-full ${
                selectedCategory === category.name
                  ? 'bg-[#00e6c0] text-[#00008b]'
                  : 'bg-[#009ae4] text-white'
              } transition-colors duration-300`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="rounded-lg shadow-md p-6 text-white"
              style={{ backgroundColor: 'rgba(37, 150, 190, 0.25)' }}
            >
              <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-[#009ae4]">
                      Proficiency
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-white">
                      {skill.proficiency}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-[#4b4b4b]">
                  <motion.div
                    style={{
                      width: `${skill.proficiency}%`,
                      backgroundColor: skill.proficiency >= 50 ? '#00e6c0' : '#ff4d4d',
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {selectedCategory === 'All' && filteredSkills.length > 12 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="px-6 py-2 bg-[#2596be] text-white font-semibold rounded-full transition-colors duration-300"
            >
              {showAllSkills ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
