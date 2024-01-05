import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/contact-button.css'

const ContactButton = () => {
  const navigate = useNavigate();

  const handleContactButtonClick = () => {
    // Navigate to the contact page
    navigate('/contact-us');
  };

  return (
    <button className="contactButton borderRadius" onClick={handleContactButtonClick}>
      Contact Us
    </button>
  );
};

export default ContactButton;
