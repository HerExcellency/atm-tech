import React from 'react';
import './css/home.css';
import imagea from './photo/image-c-c.jpg'
// import './css/slider.css';
import WhatWeDo from './components/WhatWeDo';
import Specialization from './components/Specialization';
import Partners from './components/Partners';
import Landing from './components/Landing';
import CallToAction from './components/CallToAction';
import AnewLanding from './components/AnewLanding';
import AnewWhatWeDo from './components/AnewWhatWeDo';
import AnewPartners from './components/AnewPartners';
import AnewCTA from './components/AnewCTA';


const Home = () => {
  return (
    <>
    <div className="">
      <AnewLanding />
      <AnewWhatWeDo />
      <AnewPartners />
      <AnewCTA />
         
    </div>
    </>
  );
};

export default Home;
