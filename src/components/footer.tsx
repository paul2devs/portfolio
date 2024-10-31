import { FaWhatsapp, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-[#0a1f44] text-[#fdfdfd] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <nav className="flex flex-col space-y-2 mb-4 md:mb-0">
            <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer hover:text-[#ffc857]">
              Home
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer hover:text-[#ffc857]">
              About
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-[#ffc857]">
              Skills
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-[#ffc857]">
              Projects
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-[#ffc857]">
              Contact
            </ScrollLink>
          </nav>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
            <p>&copy; 2024 Paul Oginni. All rights reserved.</p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/2347068578749"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffc857] transition-colors duration-300"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="https://twitter.com/techwhizkids"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffc857] transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com/in/paul2dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffc857] transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/paul2dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffc857] transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
