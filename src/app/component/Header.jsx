'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      let currentSection = '';
  
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) { // Check if element exists
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
  
  return (
    <header className="fixed top-0 z-50 w-full py-4 bg-black shadow-lg">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            {/* <Image src="/images/logo.png" alt="Logo" width={40} height={40} /> */}
            <span className="ml-2 text-3xl font-bold text-white">Shaima Alam<span className="text-pink-500">{" "} Tanni</span>.</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-8 text-white">
          {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map(section => (
            <Link key={section} href={`#${section}`} passHref>
              <span className={`cursor-pointer hover:text-pink-500 ${activeSection === section ? 'text-pink-500' : ''}`}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            </Link>
          ))}
        </nav>

        {/* Call to Action Button */}
        <Link href="#contact" passHref>
          <div className="px-6 py-2 text-white transition rounded-full cursor-pointer bg-gradient-to-r from-purple-500 to-orange-500 hover:from-pink-500 hover:to-yellow-500">
            Connect With Me
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
