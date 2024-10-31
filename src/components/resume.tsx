import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import html2pdf from 'html2pdf.js'
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  TrophyIcon,
  DocumentArrowDownIcon
} from '@heroicons/react/24/outline'

export default function Resume() {
  const [activeTab, setActiveTab] = useState('education')
  const resumeRef = useRef<HTMLDivElement>(null)

  const downloadResume = () => {
    if (resumeRef.current) {
      const options = {
        margin: 0.5,
        filename: 'Paul_Oginni_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      }
      html2pdf().set(options).from(resumeRef.current).save()
    }
  }

  const tabs = [
    { id: 'education', label: 'Education', icon: AcademicCapIcon },
    { id: 'experience', label: 'Experience', icon: BriefcaseIcon },
    { id: 'skills', label: 'Skills', icon: CodeBracketIcon },
    { id: 'awards', label: 'Awards', icon: TrophyIcon }
  ]

  const tabContent = {
    education: [
      { title: 'Bachelor of Science in Computer Science', institution: 'University of LASUSTECH', period: '2022 - 2026' },
      { title: 'Cybersecurity Master Certification', institution: 'GIIT AFRICA', period: '2022 - 2023' },
      { title: 'Certification in Digital Marketing', institution: 'SP SYSTEMS AND NET SOLUTIONS', period: '2021 - 2022' },
      { title: 'Certification in Fullstack Development', institution: 'SP SYSTEMS AND NET SOLUTIONS', period: '2020 - 2021' }
    ],
    experience: [
      {
        title: 'Software Developer',
        company: 'GIIT AFRICA',
        period: 'January 2024 - Present',
        responsibilities: [
          'Developed and maintained web applications using HTML, CSS, JavaScript, and Angular',
          'Collaborated with cross-functional teams to define, design, and ship new features',
          'Improved application performance and user experience'
        ]
      },
      {
        title: 'Intern',
        company: 'SP SYSTEMS AND NET SOLUTIONS',
        period: 'August 2022 - 2024',
        responsibilities: [
          'Assisted in the development of internal tools and applications',
          'Participated in code reviews and team meetings',
          'Conducted research and provided solutions for technical issues'
        ]
      }
    ],
    skills: [
      'Programming Languages: JavaScript, Python, C, C++',
      'Web Development: HTML, CSS, Angular, Node.js, React, TypeScript',
      'Cybersecurity: Ethical Hacking, Penetration Testing, Vulnerability Assessment',
      'Digital Marketing: SEO, Content Strategy, Social Media Marketing',
      'Databases: MySQL, MongoDB',
      'Project Management: Agile, Scrum'
    ],
    awards: [
      'Certified in Scrum, Scrum Alliance, 2023',
      'Certified in Digital Marketing, 2022',
      'Certified in Fullstack Development, 2023',
      'Certified in Cybersecurity, 2023',
      'Certified in Complete Web Development Bootcamp, 2021'
    ]
  }

  return (
    <section id="resume" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={resumeRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white dark:bg-gray-700 shadow-xl rounded-lg overflow-hidden"
        >
          <header className="text-center py-8 bg-blue-600 text-white">
            <h1 className="text-4xl font-bold">Paul Oginni</h1>
            <p className="text-xl mt-2">Software Developer | Digital Marketer | Cybersecurity Expert</p>
          </header>

          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Summary</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Motivated and results-oriented professional with a strong background in Software Development, Digital Marketing, and Cybersecurity. Seeking to leverage my diverse skill set to contribute to Google or other big companies as a Senior Developer.
            </p>

            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500'
                    }`}
                    aria-pressed={activeTab === tab.id}
                  >
                    <tab.icon className="w-5 h-5 mr-2" aria-hidden="true" />
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="bg-gray-100 dark:bg-gray-600 p-6 rounded-lg">
                {activeTab === 'education' && (
                  <ul className="space-y-4">
                    {tabContent.education.map((item, index) => (
                      <li key={index} className="border-b border-gray-200 dark:border-gray-500 pb-4 last:border-b-0 last:pb-0">
                        <h3 className="font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{item.institution}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.period}</p>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === 'experience' && (
                  <ul className="space-y-6">
                    {tabContent.experience.map((item, index) => (
                      <li key={index} className="border-b border-gray-200 dark:border-gray-500 pb-6 last:border-b-0 last:pb-0">
                        <h3 className="font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{item.company}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.period}</p>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                          {item.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === 'skills' && (
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-2">
                    {tabContent.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                )}

                {activeTab === 'awards' && (
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    {tabContent.awards.map((award, index) => (
                      <li key={index}>{award}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={downloadResume}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <DocumentArrowDownIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                Download Resume as PDF
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}