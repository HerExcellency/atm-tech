import React from 'react';
import './css/home.css';
import imagea from './photo/image-c-c.jpg'
import './css/slider.css';
import WhatWeDo from './components/WhatWeDo';
import Specialization from './components/Specialization';
import Partners from './components/Partners';
import Landing from './components/Landing';
import CallToAction from './components/CallToAction';


const Home1 = () => {
  return (
    <>
    <div className="home-page">
      <Landing />
      <img src='//res.cloudinary.com/ijeomaonuaju/image/upload/v1705236593/dycomnet/african-business-male-people-shaking-hands_1_dy9hzr.jpg' alt="ATM" className="atm-image borderRadius" />
      <Partners />
      <WhatWeDo />
      <Specialization />
      <CallToAction />    
      </div>
    </>
  );
};

export default Home1;

