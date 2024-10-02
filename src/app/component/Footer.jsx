import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="py-8 text-center bg-black">
      <p className='text-white'>&copy; {new Date().getFullYear()} Shaima Alam Tanni. All Rights Reserved.</p>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
