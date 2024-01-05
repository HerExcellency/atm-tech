import React from 'react';
import './css/home.css';
import imagea from './photo/image-c-c.jpg'
import './css/slider.css';
import WhatWeDo from './components/WhatWeDo';
import Specialization from './components/Specialization';
import Partners from './components/Partners';
import Landing from './components/Landing';
import CallToAction from './components/CallToAction';


const Home = () => {
  return (
    <>
    <div className="home-page">
      <Landing />
      <img src={imagea} alt="ATM" className="atm-image borderRadius" />
      <Partners />
      <WhatWeDo />
      <Specialization />
      <CallToAction />    
      </div>
    </>
  );
};

export default Home;

