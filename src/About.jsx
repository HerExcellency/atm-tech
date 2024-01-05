import React from 'react';
import CustomLanding from './components/CustomLanding';
import ImageGallery from './components/ImageGallery';

export default function About() {
    const landingProps = {
        title: 'About Us',
        description: 'We are a multi vendor ATM support company driven by passion to deliver quality sales and support services to financial service providers in Africa, particularly in the areas of ATM and e-payment systems.',
      };
     const images = [
        '//res.cloudinary.com/ijeomaonuaju/image/upload/v1704440432/dycomnet/image-039_u1jmxo.jpg',
        '//res.cloudinary.com/ijeomaonuaju/image/upload/v1704440431/dycomnet/image-038_ymqecp.jpg',
        '//res.cloudinary.com/ijeomaonuaju/image/upload/v1704440446/dycomnet/image-009_sdm2kk.jpg',
        '//res.cloudinary.com/ijeomaonuaju/image/upload/v1704440427/dycomnet/image-034_s7xcx2.jpg',
        // '//res.cloudinary.com/ijeomaonuaju/image/upload/v1704440419/dycomnet/image-026_z4hmqo.jpg',
        // '//res.cloudinary.com/ijeomaonuaju/image/upload/v1704440415/dycomnet/image-019_bm30h1.jpg',
        // '//res.cloudinary.com/ijeomaonuaju/image/upload/v1704440455/dycomnet/image-016_i6z1ii.jpg',
     ];

     
    

  return (
    <div className="home-page">
      <CustomLanding {...landingProps} />
      <ImageGallery images={images} />

    </div>
  )
}
