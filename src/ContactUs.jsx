// ContactUs.js

import React from 'react';
import './css/contact.css';
import whatsappLink from './components/WhatsappLink';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  // const YOUR_LONGITUDE = '3.30883333';
  // const YOUR_LATITUDE = '6.51347222';

  // const YOUR_LONGITUDE = '6.51347222';
  // const YOUR_LATITUDE = '3.30883333';


  return (
    <div >
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
          <h1 className='largeh1'>
            Latest Projects
          </h1>
          <p className="largep">
          Some of the projecst we are proud of. We make every project feel personal because our clients matter.
          </p>
        </div>
        <div className="contact-us-container">
          <div className="contact-form col-lg-6 col-sm-12 col-md-6">
            <div className=''>
              <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" name="name" placeholder='Your Name' required  className='borderRadius'/>
                </label>
                <label>
                  <input placeholder='Your Email' type="email" name="email" required className='borderRadius'/>
                </label>
                <label>
                  <input placeholder='Message Subject' type="text" name="subject" required className='borderRadius' />
                </label>
                <label>
                  <textarea  placeholder='Your enquiry...' name="message" required className='borderRadius'></textarea>
                </label>
                <button type="submit" className='borderRadius'>Submit</button>
              </form>
            </div>
          </div>

          <div className="contact-info col-lg-6 col-sm-12 col-md-6">
            <div className="contact-info-inner">
            <div className="contact-icons m30">
              <div>
                <p><i class='bx bx-phone-call bx-tada red' ></i><a href="tel:+2347089065193" target="_blank" rel="noopener noreferrer"> +234 (708) 906 5193</a></p>
              </div>
              <div> 
              <i class='bx bx-envelope bx-tada red' ></i> <a href="mailto:dycomnetng@gmail.com" target="_blank" rel="noopener noreferrer"> dycomnetng@gmail.com</a>
              </div>
              <div>
              <i class='bx bxl-whatsapp bx-tada red' ></i>  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">+234 (708) 906 5193</a>
              </div>
              <div>
              <i class='bx bx-map bx-tada red' ></i> Lagos, Nigeria.
              </div>
            </div>
            <div className="contact-map m30">
            <div style={{width: '100%'}}><iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=4,%20Yekini%20Okobale%20Street,%20Ago%20Palace,%20Okota,%20Isolo,%20Lagos,%20Nigeria.+(Dycom%20net)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population Estimator map</a></iframe></div>
               
            </div>
            </div>
          </div>

        </div>
      </div>
  );
};

export default ContactUs;
