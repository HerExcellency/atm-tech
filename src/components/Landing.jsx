import React from 'react';
import CustomLanding from './CustomLanding';

export default function Landing() {
  const landingProps = {
    title: 'Broad Vision, Passionate Service, Great Value for Your Fintech Needs.',
    description: 'We are a multi vendor ATM support company driven by passion to deliver quality sales and support services to financial service providers in Africa, particularly in the areas of ATM and e-payment systems.',
    // highlightWords: {
    //   Fintech: '#ccc',
    // },
  };

  return <CustomLanding {...landingProps} />;
}