import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'

// Roles for typing animation
const roles = ['Software Developer', 'Digital Marketer', 'Cybersecurity Expert', 'Construction Specialist']

// Code to display with typing animation
const displayCode = `
.sf-menu > li.current-page {
  color: #ffffff;
  background: transparent;
}
.nav-outer .sf-menu > li:hover {
  transition: all 0.3s ease;
}
#search-btn a:hover span {
  color: #ffffff !important;
}
`.trim()

export default function Component() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [displayedCode, setDisplayedCode] = useState('')
  const [codeIndex, setCodeIndex] = useState(0)

  // Role typing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < roles[currentRole].length) {
        setDisplayedText(roles[currentRole].substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)
    return () => clearInterval(typingInterval)
  }, [currentRole])

  // Code typing effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (codeIndex < displayCode.length) {
        setDisplayedCode((prev) => prev + displayCode[codeIndex])
        setCodeIndex((prev) => prev + 1)
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [codeIndex])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src="/bg/pexels-negativespace-97077.jpg"
          alt="Tech Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44]/90 via-[#0a1f44]/80 to-[#0a1f44]/70"></div>
      </div>

      <div className="container relative mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/50 backdrop-blur-sm rounded-lg p-6 font-mono text-sm"
          >
            <pre className="text-purple-400">
              <code>{displayedCode}</code>
            </pre>
          </motion.div>
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -right-4 w-24 h-24 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase text-white">
              Paul Oginni
            </h1>
            <h2 className="text-lg md:text-3xl mb-8 font-light text-white">
              I'm a <span className="text-purple-400 font-mono text-lg">{displayedText}</span>
            </h2>
            <p className="text-lg mb-8 text-gray-200">
              With expertise in software development, digital marketing, cybersecurity, and building construction, 
              I bring a unique blend of skills to create innovative and secure solutions for complex challenges.
            </p>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="inline-flex items-center px-8 py-3 rounded-full text-lg font-semibold 
                bg-gradient-to-r from-purple-600 to-blue-600 text-white 
                hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 
                transition-all duration-300 cursor-pointer shadow-lg"
            >
              More About Me
              <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </ScrollLink>
          </motion.div>
        </div>
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1f44]/30"></div>
      </div>
    </section>
  )
}
