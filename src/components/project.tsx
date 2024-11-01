import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const imageReferences = {
    ecommerce: `${process.env.PUBLIC_URL}/bg/theme_options.png`,
    seo: `${process.env.PUBLIC_URL}/bg/seo main.jpg`,
    security: `${process.env.PUBLIC_URL}/bg/security audit.jpg`,
    construction: `${process.env.PUBLIC_URL}/bg/office building main.jpg`,
    chatbot: `${process.env.PUBLIC_URL}/bg/AI-Agents.jpg`,
    socialMedia: `${process.env.PUBLIC_URL}/bg/social media agency.png`,
};

const projects = [
    {
        id: 1,
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
        image: imageReferences.ecommerce,
        category: 'Software Development',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        github: 'https://github.com/paul2devs/ecommerce-project',
        liveUrl: 'https://underdevelopment.com',
    },
    {
        id: 2,
        title: 'SEO Optimization Campaign',
        description: "Increased organic traffic by 150% for a client's website through comprehensive SEO strategies.",
        image: imageReferences.seo,
        category: 'Digital Marketing',
        technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'WordPress'],
        github: null,
        liveUrl: 'https://underconstruction.com',
    },
    {
        id: 3,
        title: 'Network Security Audit',
        description: 'Conducted a thorough security audit for a mid-size company, identifying and mitigating potential threats.',
        image: imageReferences.security,
        category: 'Cybersecurity',
        technologies: ['Nmap', 'Wireshark', 'Metasploit', 'Burp Suite'],
        github: 'https://github.com/paul2devs/security-audit-tools',
        liveUrl: null,
    },
    {
        id: 4,
        title: 'Sustainable Office Building',
        description: 'Managed the construction of a LEED-certified office building, implementing eco-friendly practices.',
        image: imageReferences.construction,
        category: 'Building Construction',
        technologies: ['AutoCAD', 'Revit', 'SketchUp', 'MS Project'],
        github: null,
        liveUrl: 'https://underdevelopment.com',
    },
    {
        id: 5,
        title: 'AI-Powered Chatbot',
        description: 'Developed an AI-powered chatbot using natural language processing for customer support.',
        image: imageReferences.chatbot,
        category: 'Software Development',
        technologies: ['Python', 'TensorFlow', 'NLTK', 'Flask'],
        github: 'https://github.com/paul2devs/ai-chatbot',
        liveUrl: 'https://underconstruction.com',
    },
    {
        id: 6,
        title: 'Social Media Growth Strategy',
        description: 'Implemented a social media strategy that increased follower engagement by 200% for a startup.',
        image: imageReferences.socialMedia,
        category: 'Digital Marketing',
        technologies: ['Hootsuite', 'Canva', 'Buffer', 'Sprout Social'],
        github: null,
        liveUrl: 'https://underdevelopment.com',
    },
];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setLoading(false);
        };
        fetchData();
    }, []);

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

    const filteredProjects =
        selectedCategory === 'All'
            ? projects
            : projects.filter((project) => project.category === selectedCategory);

    return (
        <section id="projects" ref={ref} className="py-20 bg-[#f5f5f5] dark:bg-gray-800 text-[#333333] dark:text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
                <div className="flex flex-wrap justify-center mb-8 gap-2">
                    <button
                        onClick={() => setSelectedCategory('All')}
                        className={`px-4 py-2 rounded-full ${
                            selectedCategory === 'All'
                                ? 'bg-[#0077ff] text-[#fdfdfd]'
                                : 'bg-[#e0e0e0] text-[#333333] dark:bg-gray-700 dark:text-white'
                        } transition-colors duration-300`}
                    >
                        All
                    </button>
                    {['Software Development', 'Digital Marketing', 'Cybersecurity', 'Building Construction'].map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full ${
                                selectedCategory === category
                                    ? 'bg-[#0077ff] text-[#fdfdfd]'
                                    : 'bg-[#e0e0e0] text-[#333333] dark:bg-gray-700 dark:text-white'
                            } transition-colors duration-300`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="text-center">Loading...</div>
                ) : (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-[#3a3f5a] dark:text-gray-300 mb-4">{project.description}</p>
                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-2">Technologies used:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, index) => (
                                                <span key={index} className="bg-[#e0e0e0] dark:bg-gray-600 text-[#333333] dark:text-white px-2 py-1 rounded-full text-sm">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-[#0077ff] hover:text-[#ffc857] transition-colors duration-300"
                                            >
                                                <FaGithub className="mr-2" />
                                                GitHub
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-[#0077ff] hover:text-[#ffc857] transition-colors duration-300"
                                            >
                                                <FaExternalLinkAlt className="mr-2" />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;
