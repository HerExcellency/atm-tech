
import React, { useState, useEffect } from 'react';
// import './Slider.css';
import '../css/slider.css';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Auto scroll every 3 seconds (adjust the interval as needed)
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount

  }, [currentIndex, images.length]); // Re-run the effect when currentIndex or images.length changes

  return (
    <div className="slider-container">
      <button onClick={prevSlide} className="arrow-button left">
        &#60;
      </button>
      <div className="slides-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slider-image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <button onClick={nextSlide} className="arrow-button right">
        &#62;
      </button>
    </div>
  );
};

export default Slider;
