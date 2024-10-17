'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      let currentSection = '';

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          if (window.pageYOffset >= offsetTop - 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full py-4 bg-black shadow-lg">
      <div className="container flex items-center justify-between px-4 mx-auto lg:px-8">
        {/* Logo */}
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <span className="ml-2 text-2xl font-bold text-white lg:text-3xl">
              Shaima Alam<span className="text-pink-500"> Tanni.</span>
            </span>
          </div>
        </Link>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl text-white focus:outline-none">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation (Desktop) */}
        <nav className="hidden space-x-8 text-white lg:flex">
          {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map(section => (
            <Link key={section} href={`#${section}`} passHref>
              <span className={`cursor-pointer hover:text-pink-500 ${activeSection === section ? 'text-pink-500' : ''}`}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            </Link>
          ))}
        </nav>

        {/* Call to Action Button (Desktop) */}
        <div className="hidden lg:block">
          <Link href="#contact" passHref>
            <div className="px-6 py-2 text-white transition rounded-full cursor-pointer bg-gradient-to-r from-purple-500 to-orange-500 hover:from-pink-500 hover:to-yellow-500">
              Connect With Me
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      {isMobileMenuOpen && (
        <div className="bg-black lg:hidden">
          <nav className="flex flex-col items-center py-4 space-y-4 text-white">
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map(section => (
              <Link key={section} href={`#${section}`} passHref>
                <span
                  className={`cursor-pointer hover:text-pink-500 ${activeSection === section ? 'text-pink-500' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              </Link>
            ))}
            {/* Call to Action Button (Mobile) */}
            <Link href="#contact" passHref>
              <div
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on button click
                className="px-6 py-2 text-white transition rounded-full cursor-pointer bg-gradient-to-r from-purple-500 to-orange-500 hover:from-pink-500 hover:to-yellow-500"
              >
                Connect With Me
              </div>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
