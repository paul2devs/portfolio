import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = [
    { name: 'Angular', proficiency: 90 },
    { name: 'React', proficiency: 85 },
    { name: 'Node.js', proficiency: 95 },
    { name: 'SQL', proficiency: 80 },
    { name: 'Cybersecurity', proficiency: 95 },
    { name: 'Digital Marketing', proficiency: 75 },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 bg-[#030811] text-white"
      style={{ paddingTop: '64px', paddingBottom: '64px' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <motion.div
            className="w-full lg:w-[40%]"
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div
              className="relative rounded-lg overflow-hidden"
              style={{
                borderRadius: '16px',
                boxShadow: '0 0 20px rgba(64, 207, 234, 0.2)',
              }}
            >
              
              <img
                src="https://via.placeholder.com/400x500" 
                alt="Futuristic Avatar"
                className="w-full h-auto"
              />
              
              <div
                className="absolute inset-0"
                style={{
                  border: '2px solid rgba(64, 207, 234, 0.5)',
                  borderRadius: '16px',
                  boxShadow: '0 0 20px rgba(64, 207, 234, 0.5) inset',
                }}
              />
            </div>
          </motion.div>

          
          <motion.div
            className="w-full lg:w-[60%]"
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            
            <motion.h1
              className="text-4xl font-extrabold mb-8"
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Bringing Scalable, Secure & High Performance Web Solutions to Life.
            </motion.h1>

            
            <motion.p
              className="text-[#A0C9D4] text-lg mb-8"
              style={{ maxWidth: '600px', lineHeight: '1.6' }}
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              I'm a software developer with a passion for writing high performance, scalable, and secure code. With expertise in full-stack development, cybersecurity, and digital marketing, I build solutions that aren’t just functional they’re built to scale, secure, and optimized for real world impact. Whether it's developing seamless user experiences, fortifying security protocols, or driving digital growth strategies, I take a full-stack approach to innovation. Let’s build something extraordinary.
            </motion.p>

            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="p-4 text-center rounded-lg cursor-pointer hover:scale-105 transition-transform"
                  style={{
                    background: `linear-gradient(135deg, #40CFEA, #21536B)`,
                    boxShadow: '0 0 10px rgba(64, 207, 234, 0.5)',
                  }}
                  variants={variants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <span className="text-white font-semibold">{skill.name}</span>
                </motion.div>
              ))}
            </div>

            
            <motion.div
              className="flex gap-4"
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <motion.button
                className="px-8 py-4 rounded-lg font-semibold text-white"
                style={{
                  background: '#40CFEA',
                  borderRadius: '8px',
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(64, 207, 234, 0.5)' }}
              >
                Download Resume
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-lg font-semibold text-white border border-white hover:border-[#40CFEA]"
                style={{ borderRadius: '8px' }}
                whileHover={{
                  background: '#40CFEA',
                  borderColor: '#40CFEA',
                  scale: 1.05,
                }}
              >
                Let’s Work Together
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;