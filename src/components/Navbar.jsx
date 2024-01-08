// Navbar.js

import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import '../css/Navbar.css';
import ContactButton from './ContactButton';

const Navbar = () => {
  const [isMobile, setMobile] = useState(false);

  const handleToggle = () => {
    setMobile(!isMobile);
  };

  return (
    <header>
      <nav className={`marginAround navbar ${isMobile ? 'mobile ' : ''}`}>
        <div className="logo">
        <a href="/" onClick={() => window.location.href = '/'}>
          <img src="//res.cloudinary.com/ijeomaonuaju/image/upload/v1702479344/dycomnet/shapedDycomney_kggujs.png" alt="Logo" />
          </a>
        </div>
        <div className="toggle-icon" onClick={handleToggle}>
          <FaBars />
        </div>
        <div className={`links ${isMobile ? '' : 'hidden'}`}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="#">Services</a>
          <a href="/projects">Projects</a>
        </div>
        <div className={`contact ${isMobile ? '' : 'hidden'}`}>
          {/* <a href="#" className="contact-button">
            Contact Us
          </a> */}
          <ContactButton />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
