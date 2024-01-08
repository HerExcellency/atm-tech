import React from 'react';
import '../css/Footer.css';
// import 'boxicons';

const Footer = () => {
  return (
    <>
      {/* Start Footer Area */}
      
      <section className="">
        <div className="marginAround">
          {/* Company Section */}
          <div className="footer-links">
            <div className="col-lg-3 col-sm-6 col-6 addPadding">
              <div className="footer-link">
                <div className="logo">
                <a href="/" onClick={() => window.location.href = '/'}>
                  <img src="//res.cloudinary.com/ijeomaonuaju/image/upload/v1702479344/dycomnet/shapedDycomney_kggujs.png" alt="Logo" />
                  </a>
                </div>
                
                <p>
                We are a multi vendor ATM support company driven by passion to deliver quality sales and support services to financial service providers in Africa.
                </p>
                <ul className="social">
                    <li>
                      <a href="//www.facebook.com/reaprite/" className="facebook" rel="noreferrer">
                        <i className='bx bxl-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href="//twitter.com/reaprite" className="twitter" rel="noreferrer">
                        <i className='bx bxl-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href="//www.instagram.com/reaprite/" className="pinterest" rel="noreferrer">
                        <i className='bx bxl-instagram'></i>
                      </a>
                    </li>
                    <li>
                      <a href="//www.linkedin.com/company/reaprite" className="linkedin" rel="noreferrer">
                        <i className='bx bxl-linkedin'></i>
                      </a>
                    </li>
                    <li>
                      <a href="//medium.com/@reaprite" className="medium linkedin" rel="noreferrer">
                        <i className='bx bxl-medium'></i>
                      </a>
                    </li>
                  </ul>
              </div>
            </div>

            
            {/* Company Section */}
            <div className="col-lg-3 col-sm-6 col-6 addPadding">
              <div className="footer-link">
                <h3>Our Company</h3>
                <ul className="quick-links">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/ambassador">Our Services</a>
                  </li>
                  <li>
                    <a href="/projects">Our Projects</a>
                  </li>
                  <li>
                    <a href="/media">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Products Section */}
            <div className="col-lg-3 col-sm-6 col-6 addPadding">
              <div className="footer-link">
                <h3>Our Solutions</h3>
                <ul className="quick-links">
                  <li>
                    <a href="/wallet#wallet">ATM Payment Solutions</a>
                  </li>
                  <li>
                    <a href="/wallet#plus">ATM Security</a>
                  </li>
                  <li>
                    <a href="/wallet#max">Cloud Computing</a>
                  </li>
                  <li>
                    <a href="/wallet#goal">E-banking Softwares</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="col-lg-3 col-sm-6 col-6 addPadding">
              <div className="footer-link">
                <div className="footer-logo quick-links">
                  <h3>Contact</h3>
                  <ul className=" contact-quick-links">
                  <li>
                      <a href="mailto:hello@dycomnet.com"><b>Lagos:</b> 4, Yekini Okobale Street, Ago Palace, Okota, Isolo, Lagos, Nigeria.</a>
                    </li>
                    <li>
                      <a href="mailto:hello@dycomnet.com">hello@dycomnet.com</a>
                    </li>
                    <li>
                      <a href="">Opening Hours: 9:00am - 4:00pm</a>
                    </li>
                    <li>
                      <a href="tel:+2347089065193">+234 708 906 5193</a>
                    </li>
                    <li>
                      <a href="tel:+2348147611360">+234 806 761 1360</a>
                    </li>
                    {/* <li>
                      <a href="tel:+2348140588806">+234 814 058 8806</a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* End Footer Area */}

      {/* Start Copy Right Area */}
      <div className="copyright-area pt-0 pb-0">
        <div className="container">
          <div className="copyright-area-content">
            <p style={{ fontSize: '10px', paddingBottom: '10px' }}>
              &copy; 2020 - {new Date().getFullYear()} Dycomnet | All Right Reserved
            </p>
          </div>
        </div>
      </div>
      {/* End Copy Right Area */}

      
    </>
  );
};

export default Footer;
