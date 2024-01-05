import React from 'react';
import '../css/imagegallery.css'

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} className="gallery-image" />
      ))}
    </div>
  );
};

export default ImageGallery;
