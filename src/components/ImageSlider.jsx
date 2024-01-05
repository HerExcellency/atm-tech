import React, { useState } from 'react';

const ImageSlider = () => {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg']; // Add more image URLs as needed
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Image ${currentIndex + index + 1}`} />
          </div>
        ))}
      </div>

      <div className="prev" onClick={prevSlide}>&#10094;</div>
      <div className="next" onClick={nextSlide}>&#10095;</div>
    </div>
  );
};

export default ImageSlider;
