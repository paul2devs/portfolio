import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { 
  MoonIcon, 
  SunIcon, 
  UserIcon, 
  CodeBracketIcon, 
  BriefcaseIcon, 
  PhoneIcon
} from '@heroicons/react/24/solid';

interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-end items-center">
        <div className="flex items-center space-x-6">
          <ScrollLink to="about" smooth={true} duration={500} className="flex items-center space-x-2 cursor-pointer text-black dark:text-white hover:text-[#ffc857] transition-colors duration-300">
            <UserIcon className="w-5 h-5" />
            <span className="font-medium hidden md:inline">About</span>
          </ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={500} className="flex items-center space-x-2 cursor-pointer text-black dark:text-white hover:text-[#ffc857] transition-colors duration-300">
            <CodeBracketIcon className="w-5 h-5" />
            <span className="font-medium hidden md:inline">Skills</span>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} className="flex items-center space-x-2 cursor-pointer text-black dark:text-white hover:text-[#ffc857] transition-colors duration-300">
            <BriefcaseIcon className="w-5 h-5" />
            <span className="font-medium hidden md:inline">Projects</span>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="flex items-center space-x-2 cursor-pointer text-black dark:text-white hover:text-[#ffc857] transition-colors duration-300">
            <PhoneIcon className="w-5 h-5" />
            <span className="font-medium hidden md:inline">Contact</span>
          </ScrollLink>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;