import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveDemoUrl: string;
  codeSnippet: string;
  performanceStats: {
    before: number;
    after: number;
  };
};

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A high-performance e-commerce platform built with React and Node.js.',
    techStack: ['React', 'Node.js', 'Tailwind CSS'],
    liveDemoUrl: 'https://example.com',
    codeSnippet: `
      const App = () => {
        return <div className="p-6 text-xl font-bold">Welcome to the Store</div>;
      };
      export default App;
    `,
    performanceStats: {
      before: 60,
      after: 95,
    },
  },
  {
    id: 2,
    title: 'Cybersecurity Dashboard',
    description: 'A real-time dashboard for monitoring cybersecurity threats.',
    techStack: ['Python', 'Django', 'PostgreSQL'],
    liveDemoUrl: 'https://example.com',
    codeSnippet: `
      from django.http import JsonResponse

      def get_threats(request):
          threats = {"DDoS": 3, "SQL Injection": 5}
          return JsonResponse(threats)
    `,
    performanceStats: {
      before: 70,
      after: 90,
    },
  },
  {
    id: 3,
    title: 'Social Media Analytics',
    description: 'A data-driven analytics tool for social media platforms.',
    techStack: ['React', 'Next.js', 'GraphQL'],
    liveDemoUrl: 'https://example.com',
    codeSnippet:  `
    import { gql, useQuery } from '@apollo/client';

    const GET_ANALYTICS = gql\`
      query {
        analytics {
          posts
          engagement
        }
      }
    \`;

    const Analytics = () => {
      const { data } = useQuery(GET_ANALYTICS);
      return <div>{data?.analytics.engagement} Likes</div>;
    };
  `,
    performanceStats: {
      before: 50,
      after: 85,
    },
  },
  {
    id: 4,
    title: 'Blockchain Voting System',
    description: 'A secure and transparent voting system using blockchain technology.',
    techStack: ['Solidity', 'Ethereum', 'React', 'Web3.js'],
    liveDemoUrl: 'https://example.com',
    codeSnippet: `
      pragma solidity ^0.8.0;

      contract Voting {
          mapping(address => bool) public voters;
          mapping(uint256 => uint256) public votes;

          function vote(uint256 candidateId) public {
              require(!voters[msg.sender], "Already voted");
              voters[msg.sender] = true;
              votes[candidateId]++;
          }
      }
    `,
    performanceStats: {
      before: 55,
      after: 88,
    },
  },
  {
    id: 5,
    title: 'Real-Time Stock Tracker',
    description: 'A real-time stock tracking application with live data updates.',
    techStack: ['React', 'Node.js', 'Socket.IO', 'Alpha Vantage API'],
    liveDemoUrl: 'https://example.com',
    codeSnippet: `
      const socket = io('http://localhost:3000');
      socket.on('stockUpdate', (data) => {
          console.log('Stock Update:', data);
      });
    `,
    performanceStats: {
      before: 60,
      after: 94,
    },
  },
  {
    id: 6,
    title: 'Fitness Tracker App',
    description: 'A mobile app for tracking workouts, calories, and progress.',
    techStack: ['React Native', 'Firebase', 'Expo'],
    liveDemoUrl: 'https://example.com',
    codeSnippet: `
          const addWorkout = (workout) => {
              setWorkouts([...workouts, workout]);
          };

          return (
              <View>
                  <Text>Fitness Tracker</Text>
                  <Button title="Add Workout" onPress={() => addWorkout('Running')} />
              </View>
          );
      };
    `,
    performanceStats: {
      before: 50,
      after: 89,
    },
  },
  {
    id: 7,
    title: 'Travel Planner',
    description: 'A web app for planning trips, booking flights, and managing itineraries.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveDemoUrl: 'https://example.com',
    codeSnippet: `
      const TripSchema = new mongoose.Schema({
          destination: String,
          startDate: Date,
          endDate: Date,
      });

      const Trip = mongoose.model('Trip', TripSchema);

      app.get('/trips', async (req, res) => {
          const trips = await Trip.find();
          res.json(trips);
      });
    `,
    performanceStats: {
      before: 58,
      after: 91,
    },
  },
  {
    id: 8,
    title: 'Online Learning Platform',
    description: 'A platform for creating and consuming online courses.',
    techStack: ['React', 'Django', 'PostgreSQL', 'AWS S3'],
    liveDemoUrl: 'https://example.com',
    codeSnippet: `
      from django.db import models

      class Course(models.Model):
          title = models.CharField(max_length=200)
          description = models.TextField()
          created_at = models.DateTimeField(auto_now_add=True)

          def __str__(self):
              return self.title
    `,
    performanceStats: {
      before: 62,
      after: 93,
    },
  },
  {
    id: 9,
    title: 'Weather Forecast App',
    description: 'A weather app providing real-time forecasts and alerts.',
    techStack: ['React', 'OpenWeatherMap API', 'Tailwind CSS'],
    liveDemoUrl: 'https://example.com',
    codeSnippet: `
      const fetchWeather = async (city) => {
          const response = await fetch(
              \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=ApI_KEY\`
          );
          const data = await response.json();
          return data;
      };
    `,
    performanceStats: {
      before: 68,
      after: 96,
    },
  },
];

const ProjectsShowcase = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
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
            className="absolute text-green-500 text-xs opacity-30"
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
          data-text="Explore Paul2Dev’s Finest Creations"
        >
          Explore Paul2Dev’s Finest Creations
        </motion.h2>
        <motion.p
          className="text-gray-400 text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Step into the future of digital innovation.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
            key={project.id}
            className="p-6 bg-black border border-green-500 rounded-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            
            <div
              className="absolute inset-0 border-2 border-green-500 rounded-lg opacity-0 hover:opacity-100 transition-opacity"
              style={{
                boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                zIndex: 1, 
              }}
            ></div>
           
            <div className="relative z-10"> 
              <h3 className="text-green-500 text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-green-500 text-black rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
                <motion.div
                  className="bg-green-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${project.performanceStats.after}%` }}
                  transition={{ duration: 1 }}
                ></motion.div>
              </div>
              <p className="text-gray-400 mb-4">
                Performance Improvement: {project.performanceStats.before}% →{' '}
                {project.performanceStats.after}%
              </p>
              <button
                className="px-4 py-2 rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 transition-colors relative z-20" 
                onClick={() => setSelectedProject(project)}
              >
                View Details
              </button>
            </div>
          </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black border border-green-500 rounded-lg p-8 max-w-3xl w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>
              <h3 className="text-green-500 text-2xl font-bold mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-gray-400 mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-green-500 text-black rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
                <motion.div
                  className="bg-green-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${selectedProject.performanceStats.after}%` }}
                  transition={{ duration: 1 }}
                ></motion.div>
              </div>
              <p className="text-gray-400 mb-4">
                Performance Improvement: {selectedProject.performanceStats.before}% →{' '}
                {selectedProject.performanceStats.after}%
              </p>
              <div className="mb-4">
                <h4 className="text-green-500 text-lg font-bold mb-2">Code Snippet</h4>
                <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                  {selectedProject.codeSnippet}
                </SyntaxHighlighter>
              </div>
              <a
                href={selectedProject.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 transition-colors"
              >
                Live Demo
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-16 text-center relative z-30"> 
        <h2 className="text-green-500 text-3xl font-bold mb-4">
            Ready to build the future?
        </h2>
        <div className="flex justify-center gap-4">
        <motion.button
          className="px-8 py-4 rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 transition-colors flex items-center gap-2 relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
        >
          <a href="#contact" className="relative z-10">Start Your Project</a>
        </motion.button>

        <motion.button
          className="px-8 py-4 rounded-lg font-semibold text-white border border-green-500 hover:bg-green-500 hover:text-black transition-colors flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <a href="#contact">Contact Me</a>
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

export default ProjectsShowcase;